var taskManager = {};

function VmReconnectTask(mksInstance, externalInterface, vmName, vmId, retries) {
    var count = 0;
    var aborted = false;

    var reportTimeout = function() {
        vmware.log("WARN", "task-monitor", "Timed out waiting for task to complete");
    };

    var execute = function() {
        if (++count > retries) {
            reportTimeout();
            return;
        }

        vmware.log("TRACE", "task-monitor", "Checking VM status, attempt {0} of {1}".format(count, retries));
        externalInterface.getTask(vmId);
    };

    VmReconnectTask.prototype.update = function(taskDetail) {
        if (aborted) {
            vmware.log("WARN", "task-monitor", "Ignoring attempt to update aborted task");
            return;
        }

        if (taskDetail.isBusy) {
            vmware.log("TRACE", "task-monitor", "VM is busy");
            setTimeout(execute, 5000);
        } else if (taskDetail.status["name"] === "POWERED_ON") {
            acquireTicket(vmName, vmId);
        } else if (taskDetail.status["name"] === "POWERED_OFF") {
            setState("Powered Off".localize());
        } else if (taskDetail.status["name"] === "SUSPENDED") {
            setState("Suspended".localize());
        } else {
            vmware.log("ERROR", "task-monitor", "VM's current state is {0}".format(taskDetail.status["name"]));
        };
    };

    VmReconnectTask.prototype.abort = function() {
        aborted = true;
    };

    execute();
};

function ExternalInterface() {
    var getParentApplication = function() {
        if (!window.opener || !window.opener.document.application) {
            return undefined;
        }

        return window.opener.document.application;
    };

    ExternalInterface.prototype.acquireMksTicket = function(vmName, vmId) {
        getParentApplication().acquireMksTicket(vmName, vmId);
    };

    ExternalInterface.prototype.powerReset = function(vmName, vmId) {
        getParentApplication().doReset(vmName, vmId);
    };

    ExternalInterface.prototype.powerStart = function(vmName, vmId) {
        getParentApplication().doStart(vmName, vmId);
    };

    ExternalInterface.prototype.powerStop = function(vmName, vmId) {
        getParentApplication().doStop(vmName, vmId);
    };

    ExternalInterface.prototype.powerSuspend = function(vmName, vmId) {
        getParentApplication().doSuspend(vmName, vmId);
    };

    ExternalInterface.prototype.getTask = function(vmId) {
        getParentApplication().getTask(vmId);
    };
}

function MksConsole(vmName, vmId) {
    var busyArea = document.getElementById("busyArea");
    var wmks = null;

    // the default keyboardId
    var keyboardId = "en-US"

    var setStatus = function(message) {
        busyArea.innerHTML = message;
    };

    setStatus("Loading...".localize());

    var connected = false;
    wmks = $("#console").wmks({
        enableUint8Utf8     : true
    }).bind("wmksconnected", function() {
        vmware.log("TRACE", "mks-connection", "Connected");
        $("#console > canvas").css("opacity", "");
        wmks.wmks('option', 'allowMobileKeyboardInput', false);
        wmks.wmks('option', 'fitToParent', false);

        connected = true;
        setStatus("");

        // now that we are connected, set the keyboardId determined from checking the
        // browser's preferred language
        setKeyboardLayout(keyboardId);

        pluginButtonManager.setState("fullscreen", "connected");
        pluginButtonManager.setState("ctrl-alt-del", "connected");
        pluginButtonManager.setState("fit-to-guest", "connected");
        pluginButtonManager.setState("toggle-relative-pad", "connected");
        fitToGuest();
    }).bind("wmksconnecting", function() {
        vmware.log("TRACE", "mks-connection", "Connecting...");
        setStatus("Connecting...".localize());

        // changing canvas position to be relative to containing div
        $("#console > canvas").css('position', 'relative');
    }).bind("wmksdisconnected", function(event) {
        vmware.log("TRACE", "mks-connection", "Disconnected {0}".format(event));
        connected = false;
        setStatus("Disconnected".localize());
        $("#console > canvas").fadeTo("slow", 0.5);
        $("#console > canvas").css("cursor", "default");
        taskManager[vmId] = new VmReconnectTask(this, ei, vmName, vmId, 50);
    }).bind("wmksresolutionchanged", function() {
        vmware.log("TRACE", "mks-console", "Resolution changed");
        fitToGuest();
    }).bind("wmkserror", function(event, error) {
        vmware.log("ERROR", "mks-console", "Error occurred: {0}".format(error));
    }).bind("wmksprotocolError", function(event) {
        vmware.log("ERROR", "mks-console", "Protocol error occurred: {0}".format(event));
    }).bind("wmksauthenticationFailed", function(event) {
        vmware.log("ERROR", "mks-console", "Authentication failure: {0}".format(event));
    });

    // check the browser's preferred language (works in Chrome and FF)
    var lang = navigator.languages ? navigator.languages[0] :
            (navigator.language || navigator.userLanguage);
    lang = lang.toLowerCase();

    var keyboardSelector = document.getElementById("kbLayout");

    // if Japanese language is preferred, record that for use once we are connected
    // (this happens below in this function)
    if (0 == lang.indexOf("ja")) {
        keyboardSelector.selectedIndex = 1;
    }
    keyboardId = keyboardSelector.options[keyboardSelector.selectedIndex].value;

    $(window).resize(function() {
        // resetting overflow handling (set during resize to prevent errant scrollbars in Chrome)
        $(document.body).css("overflow", "");
    });

    var fitToGuest = function() {
        var canvas = $("#console > canvas");

        // width and height of console
        var guestWidth = canvas.width();
        var guestHeight = canvas.height();

        // estimated width and height consumed by other elements
        var cssWidth = 0;
        var cssHeight = 44;

        // guess of width and height used by browser
        var guessedBrowserWidth = 20;
        var guessedBrowserHeight = 60;

        // values to pass to resize
        var computedWidth = guestWidth + cssWidth + guessedBrowserWidth;
        var computedHeight = guestHeight + cssHeight + guessedBrowserHeight;
        vmware.log("TRACE", "wrapper", "Attempting to resize to {0}x{1} for guest size {2}x{3}"
            .format(computedWidth, computedHeight, guestWidth, guestHeight));
        $("#console").removeClass("full");
        $("#console").addClass("standard");
        $("#console").width($("#console > canvas").width());
        $("#console").height($("#console > canvas").height());
        $(document.body).css("overflow", "hidden");
        window.resizeTo(computedWidth, computedHeight);
    };

    var getFullScreenElement = function() {
        if (document.fullscreenElement) {
            return document.fullscreenElement;
        } else if (document.mozFullScreenElement) {
            return document.mozFullScreenElement;
        } else if (document.webkitFullscreenElement) {
            return document.webkitFullscreenElement;
        }

        return null;
    };

    var onFullScreenChange = function() {
        var element = getFullScreenElement();
        if (element) {
            return;
        }

        vmware.log("TRACE", "fullscreen", "Exiting fullscreen mode");
        fitToGuest();
    };

    $("#console").bind("webkitfullscreenchange mozfullscreenchange fullscreenchange", onFullScreenChange);
    $(document).bind("mozfullscreenchange", onFullScreenChange);

    MksConsole.prototype.setState = function(state) {
        setStatus(state);
    };

    MksConsole.prototype.isConnected = function() {
        return connected;
    };

    MksConsole.prototype.fitToGuest = function() {
        fitToGuest();
    };

    MksConsole.prototype.fullScreen = function() {
        var containerElement = document.getElementById("console");
        $("#console").removeClass("standard");
        $("#console").addClass("full");
        if(containerElement.requestFullScreen) {
            containerElement.requestFullScreen();
        } else if(containerElement.mozRequestFullScreen) {
            containerElement.mozRequestFullScreen();
        } else if(containerElement.webkitRequestFullscreen) {
            containerElement.webkitRequestFullscreen();
        }
    };

    MksConsole.prototype.sendCtrlAltDelete = function() {
        var keyCodes = [17, 18, 46];
        wmks.wmks("sendKeyCodes", keyCodes);
    };

    MksConsole.prototype.toggleRelativePad = function() {
        wmks.wmks("toggleRelativePad", {minToggleTime: 50});
    };

    MksConsole.prototype.connect = function(host, port, vmx, ticket) {
        var url = "wss://{0}/{1};{2}".format(host, port, ticket);
        vmware.log("TRACE", "mks-connection", "Connecting to {0}".format(url));
        wmks.wmks("option", "VCDProxyHandshakeVmxPath", vmx);
        wmks.wmks("connect", url);
    };

    MksConsole.prototype.reset = function() {
        vmware.log("TRACE", "power-operation", "Resetting {0}".format(vmName));
        setStatus("Resetting VM...");
    };

    MksConsole.prototype.start = function() {
        vmware.log("TRACE", "power-operation", "Starting {0}".format(vmName));
        setStatus("Starting VM...");
        taskManager[vmId] = new VmReconnectTask(this, ei, vmName, vmId, 50);
    };

    MksConsole.prototype.stop = function() {
        vmware.log("TRACE", "power-operation", "Stopping {0}".format(vmName));
        setStatus("Stopping VM...");
    };

    MksConsole.prototype.suspend = function() {
        vmware.log("TRACE", "power-operation", "Suspending {0}".format(vmName));
        setStatus("Suspending VM...");
    };

    MksConsole.prototype.setMksKeyboardLayoutId = function(kbid) {
        try {
            wmks.wmks("option", "keyboardLayoutId", kbid);
        } catch (e) {
            alert("Unable to set keyboard layout for the virtual machine.");
            console.log("Attempt to set keyboard layout to " + kbid + " was unsuccessful");
        }
    };
}


var mks = null;
var ei = null;

function initializeI18n(buttonLabels, miscLabels, confirmationLabels) {
    i18n.add("Send Ctrl-Alt-Del", buttonLabels[0]);
    i18n.add("Send Ctrl-Alt-Del (disabled)", buttonLabels[1]);
    i18n.add("Full Screen", buttonLabels[2]);
    i18n.add("Full Screen (disabled)", buttonLabels[3]);
    i18n.add("Fit Window to Guest", buttonLabels[8]);
    i18n.add("Fit Window to Guest (disabled)", buttonLabels[9]);

    i18n.add("Connecting...", miscLabels[0]);
    i18n.add("Disconnected", miscLabels[1]);
    i18n.add("Failed to connect", miscLabels[2]);   // currently unused
    i18n.add("None", miscLabels[3]);
    i18n.add("Ok", miscLabels[4]);
    i18n.add("Cancel", miscLabels[5]);
    i18n.add("Device", miscLabels[15]);
    i18n.add("Error", miscLabels[16]);
    i18n.add("Operation failed. Please verify the vCD session is still active.", miscLabels[17]);
    i18n.add("Connect {0}", miscLabels[19]);
    i18n.add("Disconnect {0}", miscLabels[20]);

    i18n.add("Confirm Power On", confirmationLabels[0]);
    i18n.add("Power On Virtual Machine {0}?", confirmationLabels[1]);
    i18n.add("Confirm Suspend", confirmationLabels[2]);
    i18n.add("Suspend Virtual Machine {0}?", confirmationLabels[3]);
    i18n.add("Confirm Power Off", confirmationLabels[4]);
    i18n.add("Power Off Virtual Machine {0}?", confirmationLabels[5]);
    i18n.add("Confirm Reset", confirmationLabels[6]);
    i18n.add("Reset Virtual Machine {0}?", confirmationLabels[7]);
    i18n.add("Power On", confirmationLabels[8]);
    i18n.add("Suspend", confirmationLabels[9]);
    i18n.add("Power Off", confirmationLabels[10]);
    i18n.add("Reset", confirmationLabels[11]);
    i18n.add("Stop requested", confirmationLabels[12]);
    i18n.add("Suspend requested", confirmationLabels[13]);
}

function buildConsoleChrome(data) {
    vmware.log("TRACE", "layout", "Adding/configuring console UI controls");

    vappName = data.vAppName;
    vmName = data.vmName;
    vmId = data.vmId;

    $(document).attr("title",  vappName + " - " + vmName);
    $("#vmName").text(vmName);

    initializeI18n(data.buttonLabels, data.miscLabels, data.confirmationLabels);

    mks = new MksConsole(vmName, vmId);

    span = $('#power-buttons');
    powerButtonManager = vmware.buttonManager({container: span})
        .createButton("power-on", {defaultState: {image: "./support/images/vm-poweron.png", style: "cursor:pointer", text: "Power On".localize()}})
        .registerHandler("power-on", function(event) {
            ei.powerStart(vmName, vmId);
        })
        .createButton("suspend", {defaultState: {image: "./support/images/PowerSuspend16x16.png", style: "cursor:pointer", text: "Suspend".localize()}})
        .registerHandler("suspend", function(event) {
            ei.powerSuspend(vmName, vmId);
        })
        .createButton("power-off", {defaultState: {image: "./support/images/vm-poweroff.png", style: "cursor:pointer", text: "Power Off".localize()}})
        .registerHandler("power-off", function(event) {
            ei.powerStop(vmName, vmId);
        })
        .createButton("reset", {defaultState: {image: "./support/images/vm-reset.png", style: "cursor:pointer", text: "Reset".localize()}})
        .registerHandler("reset", function(event) {
            ei.powerReset(vmName, vmId);
        });

    span = $('#plugin-buttons');
    pluginButtonManager = vmware.buttonManager({container: span})
        .createButton("ctrl-alt-del", {defaultState: {image: "./support/images/ctrl-alt-del-16x16-disabled.png", style: "cursor:auto", text: "Send Ctrl-Alt-Del (disabled)".localize()}, connected: {image: "./support/images/ctrl-alt-del-16x16.png", style: "cursor:pointer", text: "Send Ctrl-Alt-Del".localize()}})
        .registerHandler("ctrl-alt-del", function(event) {
            if (mks.isConnected()) {
                mks.sendCtrlAltDelete();
            }
        })
        .createButton("fullscreen", {defaultState: {image: "./support/images/full-screen-16x16-disabled.png", style: "cursor:auto", text: "Full Screen (disabled)".localize()}, connected: {image: "./support/images/full-screen-16x16.png", style: "cursor:pointer", text: "Full Screen".localize()}})
        .registerHandler("fullscreen", function(event) {
            if (mks.isConnected()) {
                mks.fullScreen();
            }
        })
        .createButton("fit-to-guest", {defaultState: {image: "./support/images/fit-to-guest-16x16-disabled.png", style: "cursor:auto", text: "Fit Window to Guest (disabled)".localize()}, connected: {image: "./support/images/fit-to-guest-16x16.png", style: "cursor:pointer", text: "Fit Window to Guest".localize()}})
        .registerHandler("fit-to-guest", function(event) {
            if (mks.isConnected()) {
                mks.fitToGuest();
            }
        })
        .createButton("toggle-relative-pad", {defaultState: {image: "./support/images/mouse-16x16.png", style: "cursor:auto", text: "Toggle Relative Mouse Pad (disabled)".localize()}, connected: {image: "./support/images/mouse-16x16.png", style: "cursor:pointer", text: "Toggle Relative Mouse Pad".localize()}})
        .registerHandler("toggle-relative-pad", function(event) {
            if (mks.isConnected()) {
                mks.toggleRelativePad();
            }
        });
}

// switches webmks to the specified keyboard layout; currently limited to:
// en-US, ja-JP_106/109 or de-DE
function setKeyboardLayout(kbid) {
    try {
        mks.setMksKeyboardLayoutId(kbid);
    } catch (e) {
        alert("Unable to set keyboard layout for the virtual machine.");
        console.log("Attempt to set keyboard layout to " + kbid + "was unsuccessful");
    }
}

function acquireTicket(vmName, vmId) {
    if (ei === null) {
        ei = new ExternalInterface();
    }

    vmware.log("TRACE", "init", "attempting ticket acquisition for vm {0}".format(vmName));
    ei.acquireMksTicket(vmName, vmId);
};

function connectControl(host, port, vmx, ticket) {
    vmware.log("TRACE", "plugin", "Connecting vm");
    mks.connect(host, port, vmx, ticket);
};

function doPowerOperation(powerOperation) {
    if (powerOperation === 'reset') {
        mks.reset();
    } else if (powerOperation === 'start') {
        mks.start();
    } else if (powerOperation === 'stop') {
        mks.stop();
    } else if (powerOperation === 'suspend') {
        mks.suspend();
    }
};

function updateTask(vmId, taskDetail) {
    if (taskManager[vmId] !== undefined) {
        taskManager[vmId].update(taskDetail);
    }
};

function setState(state) {
    mks.setState(state);
}
