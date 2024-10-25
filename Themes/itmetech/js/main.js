/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (e, t) { "use strict"; var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) { return "function" == typeof t && "number" != typeof t.nodeType }, y = function e(t) { return null != t && t === t.window }, v = { type: !0, src: !0, noModule: !0 }; function m(e, t, n) { var i, o = (t = t || r).createElement("script"); if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]); t.head.appendChild(o).parentNode.removeChild(o) } function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e } var b = "3.3.1", w = function (e, t) { return new w.fn.init(e, t) }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function () { return o.call(this) }, get: function (e) { return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = w.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return w.each(this, e) }, map: function (e) { return this.pushStack(w.map(this, function (t, n) { return e.call(t, n, t) })) }, slice: function () { return this.pushStack(o.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e) { m(e) }, each: function (e, t) { var n, r = 0; if (C(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function (e) { return null == e ? "" : (e + "").replace(T, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : u.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]); return i }, map: function (e, t, n) { var r, i, o = 0, s = []; if (C(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i); return a.apply([], s) }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { l["[object " + t + "]"] = t.toLowerCase() }); function C(e) { var t = !!e && "length" in e && e.length, n = x(e); return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) } var E = function (e) { var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) { return e === t && (f = !0), 0 }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function (e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, re = function () { p() }, ie = me(function (e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" }); try { L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType } catch (e) { L = { apply: A.length ? function (e, t) { q.apply(e, H.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function oe(e, t, r, i) { var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9; if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r; if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) { if (11 !== T && (f = J.exec(e))) if (o = f[1]) { if (9 === T) { if (!(l = t.getElementById(o))) return r; if (l.id === o) return r.push(l), r } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r } else { if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r; if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) { if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) { (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; while (s--) h[s] = "#" + c + " " + ve(h[s]); v = h.join(","), m = K.test(e) && ge(t.parentNode) || t } if (v) try { return L.apply(r, m.querySelectorAll(v)), r } catch (e) { } finally { c === b && t.removeAttribute("id") } } } return u(e.replace(B, "$1"), t, r, i) } function ae() { var e = []; function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i } return t } function se(e) { return e[b] = !0, e } function ue(e) { var t = d.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function le(e, t) { var n = e.split("|"), i = n.length; while (i--) r.attrHandle[n[i]] = t } function ce(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function fe(e) { return function (t) { return "input" === t.nodeName.toLowerCase() && t.type === e } } function pe(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function de(e) { return function (t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e } } function he(e) { return se(function (t) { return t = +t, se(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } function ge(e) { return e && "undefined" != typeof e.getElementsByTagName && e } n = oe.support = {}, o = oe.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, p = oe.setDocument = function (e) { var t, i, a = e ? e.ownerDocument || e : w; return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = ue(function (e) { return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) { return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length }), n.getById ? (r.filter.ID = function (e) { var t = e.replace(Z, ee); return function (e) { return e.getAttribute("id") === t } }, r.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }) : (r.filter.ID = function (e) { var t = e.replace(Z, ee); return function (e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, r.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && g) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), r.find.TAG = n.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, r.find.CLASS = n.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e) }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) { h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]") }), ue(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = d.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:") })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) { n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W) }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, D = t ? function (e, t) { if (e === t) return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1) } : function (e, t) { if (e === t) return f = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0; if (i === o) return ce(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0 }, d) : d }, oe.matches = function (e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try { var r = m.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) { } return oe(t, d, null, [e]).length > 0 }, oe.contains = function (e, t) { return (e.ownerDocument || e) !== d && p(e), x(e, t) }, oe.attr = function (e, t) { (e.ownerDocument || e) !== d && p(e); var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0; return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null }, oe.escape = function (e) { return (e + "").replace(te, ne) }, oe.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function (e) { var t, r = [], i = 0, o = 0; if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) { while (t = e[o++]) t === e[o] && (i = r.push(o)); while (i--) e.splice(r[i], 1) } return c = null, e }, i = oe.getText = function (e) { var t, n = "", r = 0, o = e.nodeType; if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else while (t = e[r++]) n += i(t); return n }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = E[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = oe.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1; if (y) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? y.firstChild : y.lastChild], a && m) { x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d]; while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) { c[e] = [T, d, x]; break } } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break; return (x -= i) === r || x % r == 0 && x / r >= 0 } } }, PSEUDO: function (e, t) { var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e); return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) { var r, o = i(e, t), a = o.length; while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]) }) : function (e) { return i(e, 0, n) }) : i } }, pseudos: { not: se(function (e) { var t = [], n = [], r = s(e.replace(B, "$1")); return r[b] ? se(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: se(function (e) { return function (t) { return oe(e, t).length > 0 } }), contains: se(function (e) { return e = e.replace(Z, ee), function (t) { return (t.textContent || t.innerText || i(t)).indexOf(e) > -1 } }), lang: se(function (e) { return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) { var n; do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === h }, focus: function (e) { return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: de(!1), disabled: de(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !r.pseudos.empty(e) }, header: function (e) { return Y.test(e.nodeName) }, input: function (e) { return G.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: he(function () { return [0] }), last: he(function (e, t) { return [t - 1] }), eq: he(function (e, t, n) { return [n < 0 ? n + t : n] }), even: he(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: he(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: he(function (e, t, n) { for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r); return e }), gt: he(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = r.pseudos.eq; for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t); for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t); function ye() { } ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) { var n, i, o, a, s, u, l, c = k[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, u = [], l = r.preFilter; while (s) { n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length)); for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? oe.error(e) : k(e, u).slice(0) }; function ve(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function me(e, t, n) { var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++; return t.first ? function (t, n, i) { while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i); return !1 } : function (t, n, u) { var l, c, f, p = [T, s]; if (u) { while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0 } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else { if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2]; if (c[o] = p, p[2] = e(t, n, u)) return !0 } return !1 } } function xe(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function be(e, t, n) { for (var r = 0, i = t.length; r < i; r++)oe(e, t[r], n); return n } function we(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Te(e, t, n, r, i, o) { return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) { var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y; if (n && n(y, v, s, u), r) { l = we(v, d), r(l, [], s, u), c = l.length; while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f)) } if (o) { if (i || e) { if (i) { l = [], c = v.length; while (c--) (f = v[c]) && l.push(y[c] = f); i(null, v = [], l, u) } c = v.length; while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f)) } } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v) }) } function Ce(e) { for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) { return e === t }, s, !0), f = me(function (e) { return O(t, e) > -1 }, s, !0), p = [function (e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i }]; u < o; u++)if (n = r.relative[e[u].type]) p = [me(xe(p), n)]; else { if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) { for (i = ++u; i < o; i++)if (r.relative[e[i].type]) break; return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e)) } p.push(n) } return xe(p) } function Ee(e, t) { var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) { var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length; for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) { if (i && f) { h = 0, a || f.ownerDocument === d || (p(f), s = !g); while (y = e[h++]) if (y(f, a || d, s)) { u.push(f); break } c && (T = E) } n && ((f = !y && f) && v--, o && x.push(f)) } if (v += m, n && m !== v) { h = 0; while (y = t[h++]) y(x, b, a, s); if (o) { if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u)); b = we(b) } L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u) } return c && (T = E, l = w), x }; return n ? se(o) : o } return s = oe.compile = function (e, t) { var n, r = [], i = [], o = S[e + " "]; if (!o) { t || (t = a(e)), n = t.length; while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o); (o = S(e, Ee(i, r))).selector = e } return o }, u = oe.select = function (e, t, n, i) { var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e); if (n = n || [], 1 === d.length) { if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) { if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n; p && (t = t.parentNode), e = e.slice(u.shift().value.length) } o = V.needsContext.test(e) ? 0 : u.length; while (o--) { if (l = u[o], r.relative[c = l.type]) break; if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) { if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n; break } } } return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) { return 1 & e.compareDocumentPosition(d.createElement("fieldset")) }), ue(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || le("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && ue(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || le("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ue(function (e) { return null == e.getAttribute("disabled") }) || le(P, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), oe }(e); w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape; var k = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && w(e).is(n)) break; r.push(e) } return r }, S = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, D = w.expr.match.needsContext; function N(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, t, n) { return g(t) ? w.grep(e, function (e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? w.grep(e, function (e) { return e === t !== n }) : "string" != typeof t ? w.grep(e, function (e) { return u.call(t, e) > -1 !== n }) : w.filter(t, e, n) } w.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) { return 1 === e.nodeType })) }, w.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(w(e).filter(function () { for (t = 0; t < r; t++)if (w.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)w.find(e, i[t], n); return r > 1 ? w.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length } }); var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (w.fn.init = function (e, t, n) { var i, o; if (!e) return this; if (n = n || q, "string" == typeof e) { if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this) }).prototype = w.fn, q = w(r); var H = /^(?:parents|prev(?:Until|All))/, O = { children: !0, contents: !0, next: !0, prev: !0 }; w.fn.extend({ has: function (e) { var t = w(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (w.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e); if (!D.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }); function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } w.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return k(e, "parentNode") }, parentsUntil: function (e, t, n) { return k(e, "parentNode", n) }, next: function (e) { return P(e, "nextSibling") }, prev: function (e) { return P(e, "previousSibling") }, nextAll: function (e) { return k(e, "nextSibling") }, prevAll: function (e) { return k(e, "previousSibling") }, nextUntil: function (e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return k(e, "previousSibling", n) }, siblings: function (e) { return S((e.parentNode || {}).firstChild, e) }, children: function (e) { return S(e.firstChild) }, contents: function (e) { return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes)) } }, function (e, t) { w.fn[e] = function (n, r) { var i = w.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i) } }); var M = /[^\x20\t\r\n\f]+/g; function R(e) { var t = {}; return w.each(e.match(M) || [], function (e, n) { t[n] = !0 }), t } w.Callbacks = function (e) { e = "string" == typeof e ? R(e) : w.extend({}, e); var t, n, r, i, o = [], a = [], s = -1, u = function () { for (i = i || e.once, r = t = !0; a.length; s = -1) { n = a.shift(); while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1) } e.memory || (n = !1), t = !1, i && (o = n ? [] : "") }, l = { add: function () { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { w.each(n, function (n, r) { g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r) }) }(arguments), n && !t && u()), this }, remove: function () { return w.each(arguments, function (e, t) { var n; while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s-- }), this }, has: function (e) { return e ? w.inArray(e, o) > -1 : o.length > 0 }, empty: function () { return o && (o = []), this }, disable: function () { return i = a = [], o = n = "", this }, disabled: function () { return !o }, lock: function () { return i = a = [], n || t || (o = n = ""), this }, locked: function () { return !!i }, fireWith: function (e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this }, fire: function () { return l.fireWith(this, arguments), this }, fired: function () { return !!r } }; return l }; function I(e) { return e } function W(e) { throw e } function $(e, t, n, r) { var i; try { e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } w.extend({ Deferred: function (t) { var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]], r = "pending", i = { state: function () { return r }, always: function () { return o.done(arguments).fail(arguments), this }, "catch": function (e) { return i.then(null, e) }, pipe: function () { var e = arguments; return w.Deferred(function (t) { w.each(n, function (n, r) { var i = g(e[r[4]]) && e[r[4]]; o[r[1]](function () { var e = i && i.apply(this, arguments); e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments) }) }), e = null }).promise() }, then: function (t, r, i) { var o = 0; function a(t, n, r, i) { return function () { var s = this, u = arguments, l = function () { var e, l; if (!(t < o)) { if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution"); l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u)) } }, c = i ? l : function () { try { l() } catch (e) { w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u)) } }; t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c)) } } return w.Deferred(function (e) { n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W)) }).promise() }, promise: function (e) { return null != e ? w.extend(e, i) : i } }, o = {}; return w.each(n, function (e, t) { var a = t[2], s = t[5]; i[t[1]] = a.add, s && a.add(function () { r = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith }), i.promise(o), t && t.call(o, o), o }, when: function (e) { var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) { return function (n) { r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i) } }; if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then(); while (n--) $(i[n], s(n), a.reject); return a.promise() } }); var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; w.Deferred.exceptionHook = function (t, n) { e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, w.readyException = function (t) { e.setTimeout(function () { throw t }) }; var F = w.Deferred(); w.fn.ready = function (e) { return F.then(e)["catch"](function (e) { w.readyException(e) }), this }, w.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w])) } }), w.ready.then = F.then; function _() { r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready() } "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _)); var z = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === x(n)) { i = !0; for (s in n) z(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(w(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, X = /^-ms-/, U = /-([a-z])/g; function V(e, t) { return t.toUpperCase() } function G(e) { return e.replace(X, "ms-").replace(U, V) } var Y = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function Q() { this.expando = w.expando + Q.uid++ } Q.uid = 1, Q.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length; while (n--) delete r[t[n]] } (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !w.isEmptyObject(t) } }; var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g; function te(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e) } function ne(e, t, n) { var r; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = te(n) } catch (e) { } K.set(e, t, n) } else n = void 0; return n } w.extend({ hasData: function (e) { return K.hasData(e) || J.hasData(e) }, data: function (e, t, n) { return K.access(e, t, n) }, removeData: function (e, t) { K.remove(e, t) }, _data: function (e, t, n) { return J.access(e, t, n) }, _removeData: function (e, t) { J.remove(e, t) } }), w.fn.extend({ data: function (e, t) { var n, r, i, o = this[0], a = o && o.attributes; if (void 0 === e) { if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) { n = a.length; while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r])); J.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof e ? this.each(function () { K.set(this, e) }) : z(this, function (t) { var n; if (o && void 0 === t) { if (void 0 !== (n = K.get(o, e))) return n; if (void 0 !== (n = ne(o, e))) return n } else this.each(function () { K.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function (e) { return this.each(function () { K.remove(this, e) }) } }), w.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () { w.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () { J.remove(e, [t + "queue", n]) }) }) } }), w.fn.extend({ queue: function (e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () { var n = w.queue(this, e, t); w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { w.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display") }, se = function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i }; function ue(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return w.css(e, t, "") }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, w.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var le = {}; function ce(e) { var t, n = e.ownerDocument, r = e.nodeName, i = le[r]; return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i) } function fe(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n))); for (o = 0; o < a; o++)null != i[o] && (e[o].style.display = i[o]); return e } w.fn.extend({ show: function () { return fe(this, !0) }, hide: function () { return fe(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ae(this) ? w(this).show() : w(this).hide() }) } }); var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td; function ye(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n } function ve(e, t) { for (var n = 0, r = e.length; n < r; n++)J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval")) } var me = /<|&#?\w+;/; function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; w.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } !function () { var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input"); t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }(); var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/; function Ee() { return !0 } function ke() { return !1 } function Se() { try { return r.activeElement } catch (e) { } } function De(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { "string" != typeof n && (r = r || n, n = void 0); for (s in t) De(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return w().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = w.guid++)), e.each(function () { w.event.add(this, t, i, r, n) }) } w.event = { global: {}, add: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e); if (y) { n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) { return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(M) || [""]).length; while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e); if (y && (u = y.events)) { l = (t = (t || "").match(M) || [""]).length; while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]) } else for (d in u) w.event.remove(e, d + t[l], n, r, !0); w.isEmptyObject(u) && J.remove(e, "handle events") } }, dispatch: function (e) { var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {}; for (u[0] = t, n = 1; n < arguments.length; n++)u[n] = arguments[n]; if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) { s = w.event.handlers.call(this, t, l), n = 0; while ((o = s[n++]) && !t.isPropagationStopped()) { t.currentTarget = o.elem, r = 0; while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, t), t.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (e, t) { Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () { if (this.originalEvent) return t(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[e] }, set: function (t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function (e) { return e[w.expando] ? e : new w.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== Se() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === Se() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1 }, _default: function (e) { return N(e.target, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, w.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, w.Event = function (e, t) { if (!(this instanceof w.Event)) return new w.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0 }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) { var t = e.button; return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) { w.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), w.fn.extend({ on: function (e, t, n, r) { return De(this, e, t, n, r) }, one: function (e, t, n, r) { return De(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () { w.event.remove(this, e, n, t) }) } }); var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Le(e, t) { return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e } function He(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function Oe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Pe(e, t) { var n, r, i, o, a, s, u, l; if (1 === t.nodeType) { if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) { delete a.handle, a.events = {}; for (i in l) for (n = 0, r = l[i].length; n < r; n++)w.event.add(t, i, l[i][n]) } K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u)) } } function Me(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } function Re(e, t, n, r) { t = a.apply([], t); var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y); if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) { var o = e.eq(i); v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r) }); if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) { for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f); if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l)) } return e } function Ie(e, t, n) { for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r)); return e } w.extend({ htmlPrefilter: function (e) { return e.replace(Ne, "<$1></$2>") }, clone: function (e, t, n) { var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e); if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)Me(o[r], a[r]); if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)Pe(o[r], a[r]); else Pe(e, s); return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s }, cleanData: function (e) { for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)if (Y(n)) { if (t = n[J.expando]) { if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle); n[J.expando] = void 0 } n[K.expando] && (n[K.expando] = void 0) } } }), w.fn.extend({ detach: function (e) { return Ie(this, e, !0) }, remove: function (e) { return Ie(this, e) }, text: function (e) { return z(this, function (e) { return void 0 === e ? w.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return Re(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e) }) }, prepend: function () { return Re(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Le(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return Re(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return Re(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return w.clone(this, e, t) }) }, html: function (e) { return z(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = w.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var e = []; return Re(this, arguments, function (t) { var n = this.parentNode; w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this)) }, e) } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { w.fn[e] = function (e) { for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get()); return this.pushStack(r) } }); var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) }, Be = new RegExp(oe.join("|"), "i"); !function () { function t() { if (c) { l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c); var t = e.getComputedStyle(c); i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null } } function n(e) { return Math.round(parseFloat(e)) } var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div"); c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function () { return t(), o }, pixelBoxStyles: function () { return t(), s }, pixelPosition: function () { return t(), i }, reliableMarginLeft: function () { return t(), u }, scrollboxSize: function () { return t(), a } })) }(); function Fe(e, t, n) { var r, i, o, a, s = e.style; return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function _e(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = { position: "absolute", visibility: "hidden", display: "block" }, Ve = { letterSpacing: "0", fontWeight: "400" }, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style; function Qe(e) { if (e in Ye) return e; var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; while (n--) if ((e = Ge[n] + t) in Ye) return e } function Je(e) { var t = w.cssProps[e]; return t || (t = w.cssProps[e] = Qe(e) || e), t } function Ke(e, t, n) { var r = ie.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function Ze(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i)); return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u } function et(e, t, n) { var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o; if (We.test(i)) { if (!n) return i; i = "auto" } return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px" } w.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Fe(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = G(t), u = Xe.test(t), l = e.style; if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = G(t); return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), w.each(["height", "width"], function (e, t) { w.cssHooks[t] = { get: function (e, n, r) { if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () { return et(e, t, r) }) }, set: function (e, n, r) { var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o); return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s) } } }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) { w.cssHooks[e + t] = { expand: function (n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + oe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (w.cssHooks[e + t].set = Ke) }), w.fn.extend({ css: function (e, t) { return z(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = $e(e), i = t.length; a < i; a++)o[t[a]] = w.css(e, t[a], !1, r); return o } return void 0 !== n ? w.style(e, t, n) : w.css(e, t) }, e, t, arguments.length > 1) } }); function tt(e, t, n, r, i) { return new tt.prototype.init(e, t, n, r, i) } w.Tween = tt, tt.prototype = { constructor: tt, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px") }, cur: function () { var e = tt.propHooks[this.prop]; return e && e.get ? e.get(this) : tt.propHooks._default.get(this) }, run: function (e) { var t, n = tt.propHooks[this.prop]; return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit) } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, w.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {}; var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/; function at() { rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick()) } function st() { return e.setTimeout(function () { nt = void 0 }), nt = Date.now() } function ut(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = oe[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function lt(e, t, n) { for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function ct(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow"); n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, w.queue(e, "fx").length || a.empty.fire() }) })); for (r in t) if (i = t[r], it.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !y || void 0 === y[r]) continue; g = !0 } d[r] = y && y[r] || w.style(e, r) } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () { g || fe([e]), J.remove(e, "fxshow"); for (r in d) w.style(e, r, d[r]) })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0)) } } function ft(e, t) { var n, r, i, o, a; for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i } function pt(e, t, n) { var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () { delete u.elem }), u = function () { if (i) return !1; for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) }, l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; n < r; n++)l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }), c = l.props; for (ft(c, l.opts.specialEasing); o < a; o++)if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r; return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l } w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return ue(n.elem, e, ie.exec(t), n), n }] }, tweener: function (e, t) { g(e) ? (t = e, e = ["*"]) : e = e.match(M); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t) }, prefilters: [ct], prefilter: function (e, t) { t ? pt.prefilters.unshift(e) : pt.prefilters.push(e) } }), w.speed = function (e, t, n) { var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t }; return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue) }, r }, w.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () { var t = pt(this, w.extend({}, e), o); (i || J.get(this, "finish")) && t.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, t, n) { var r = function (e) { var t = e.stop; delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () { var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this); if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]); for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); !t && n || w.dequeue(this, e) }) }, finish: function (e) { return !1 !== e && (e = e || "fx"), this.each(function () { var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0; for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }), w.each(["toggle", "show", "hide"], function (e, t) { var n = w.fn[t]; w.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i) } }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { w.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), w.timers = [], w.fx.tick = function () { var e, t = 0, n = w.timers; for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || w.fx.stop(), nt = void 0 }, w.fx.timer = function (e) { w.timers.push(e), w.fx.start() }, w.fx.interval = 13, w.fx.start = function () { rt || (rt = !0, at()) }, w.fx.stop = function () { rt = null }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) { return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) { var i = e.setTimeout(n, t); r.stop = function () { e.clearTimeout(i) } }) }, function () { var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option")); e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value }(); var dt, ht = w.expr.attrHandle; w.fn.extend({ attr: function (e, t) { return z(this, w.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { w.removeAttr(this, e) }) } }), w.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!h.radioValue && "radio" === t && N(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(M); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), dt = { set: function (e, t, n) { return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) { var n = ht[t] || w.find.attr; ht[t] = function (e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i } }); var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i; w.fn.extend({ prop: function (e, t) { return z(this, w.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return this.each(function () { delete this[w.propFix[e] || e] }) } }), w.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = w.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { w.propFix[this.toLowerCase()] = this }); function vt(e) { return (e.match(M) || []).join(" ") } function mt(e) { return e.getAttribute && e.getAttribute("class") || "" } function xt(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [] } w.fn.extend({ addClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (g(e)) return this.each(function (t) { w(this).addClass(e.call(this, t, mt(this))) }); if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = vt(r)) && n.setAttribute("class", s) } return this }, removeClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (g(e)) return this.each(function (t) { w(this).removeClass(e.call(this, t, mt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " "); i !== (s = vt(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (e, t) { var n = typeof e, r = "string" === n || Array.isArray(e); return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) { w(this).toggleClass(e.call(this, n, mt(this), t), t) }) : this.each(function () { var t, i, o, a; if (r) { i = 0, o = w(this), a = xt(e); while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0; return !1 } }); var bt = /\r/g; w.fn.extend({ val: function (e) { var t, n, r, i = this[0]; { if (arguments.length) return r = g(e), this.each(function (n) { var i; 1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) { return null == e ? "" : e + "" })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) }); if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n } } }), w.extend({ valHooks: { option: { get: function (e) { var t = w.find.attr(e, "value"); return null != t ? t : vt(w.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) { if (t = w(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = w.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), w.each(["radio", "checkbox"], function () { w.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1 } }, h.checkOn || (w.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), h.focusin = "onfocusin" in e; var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) { e.stopPropagation() }; w.extend(w.event, { trigger: function (t, n, i, o) { var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : []; if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) { if (!o && !d.noBubble && !y(i)) { for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)v.push(s), u = s; u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e) } a = 0; while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault()); return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result } }, simulate: function (e, t, n) { var r = w.extend(new w.Event, n, { type: e, isSimulated: !0 }); w.event.trigger(r, null, t) } }), w.fn.extend({ trigger: function (e, t) { return this.each(function () { w.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return w.event.trigger(e, t, n, !0) } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = function (e) { w.event.simulate(t, e.target, w.event.fix(e)) }; w.event.special[t] = { setup: function () { var r = this.ownerDocument || this, i = J.access(r, t); i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1) }, teardown: function () { var r = this.ownerDocument || this, i = J.access(r, t) - 1; i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t)) } } }); var Ct = e.location, Et = Date.now(), kt = /\?/; w.parseXML = function (t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n }; var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i; function jt(e, t, n, r) { var i; if (Array.isArray(t)) w.each(t, function (t, i) { n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r) } w.param = function (e, t) { var n, r = [], i = function (e, t) { var n = g(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () { i(this.name, this.value) }); else for (n in e) jt(n, e[n], t, i); return r.join("&") }, w.fn.extend({ serialize: function () { return w.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = w.prop(this, "elements"); return e ? w.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = w(this).val(); return null == n ? null : Array.isArray(n) ? w.map(n, function (e) { return { name: t.name, value: e.replace(Dt, "\r\n") } }) : { name: t.name, value: n.replace(Dt, "\r\n") } }).get() } }); var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a"); Bt.href = Ct.href; function Ft(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(M) || []; if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function _t(e, t, n, r) { var i = {}, o = e === Wt; function a(s) { var u; return i[s] = !0, w.each(e[s] || [], function (e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u } return a(t.dataTypes[0]) || !i["*"] && a("*") } function zt(e, t) { var n, r, i = w.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && w.extend(!0, e, r), e } function Xt(e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] } function Ut(e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } } w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e) }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function (t, n) { "object" == typeof t && (n = t, t = void 0), n = n || {}; var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = { readyState: 0, getResponseHeader: function (e) { var t; if (c) { if (!s) { s = {}; while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2] } t = s[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return c ? a : null }, setRequestHeader: function (e, t) { return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this }, overrideMimeType: function (e) { return null == c && (h.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]]; return this }, abort: function (e) { var t = e || C; return i && i.abort(t), k(0, t), this } }; if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) { l = r.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } } if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E; (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]); for (p in h.headers) E.setRequestHeader(p, h.headers[p]); if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort(); if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) { if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E; h.async && h.timeout > 0 && (u = e.setTimeout(function () { E.abort("timeout") }, h.timeout)); try { c = !1, i.send(b, k) } catch (e) { if (c) throw e; k(-1, e) } } else k(-1, "No Transport"); function k(t, n, r, s) { var l, p, d, b, T, C = n; c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop"))) } return E }, getJSON: function (e, t, n) { return w.get(e, t, n, "json") }, getScript: function (e, t) { return w.get(e, void 0, t, "script") } }), w.each(["get", "post"], function (e, t) { w[t] = function (e, n, r, i) { return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e)) } }), w._evalUrl = function (e) { return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, w.fn.extend({ wrapAll: function (e) { var t; return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (e) { return g(e) ? this.each(function (t) { w(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = w(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = g(e); return this.each(function (n) { w(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { w(this).replaceWith(this.childNodes) }), this } }), w.expr.pseudos.hidden = function (e) { return !w.expr.pseudos.visible(e) }, w.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, w.ajaxSettings.xhr = function () { try { return new e.XMLHttpRequest } catch (e) { } }; var Vt = { 0: 200, 1223: 204 }, Gt = w.ajaxSettings.xhr(); h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) { var n, r; if (h.cors || Gt && !t.crossDomain) return { send: function (i, o) { var a, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a]; t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); for (a in i) s.setRequestHeader(a, i[a]); n = function (e) { return function () { n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () { 4 === s.readyState && e.setTimeout(function () { n && r() }) }, n = n("abort"); try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e } }, abort: function () { n && n() } } }), w.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return w.globalEval(e), e } } }), w.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), w.ajaxTransport("script", function (e) { if (e.crossDomain) { var t, n; return { send: function (i, o) { t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), r.head.appendChild(t[0]) }, abort: function () { n && n() } } } }); var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/; w.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Yt.pop() || w.expando + "_" + Et++; return this[e] = !0, e } }), w.ajaxPrefilter("json jsonp", function (t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () { return a || w.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function () { a = arguments }, r.always(function () { void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0 }), "script" }), h.createHTMLDocument = function () { var e = r.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), w.parseHTML = function (e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, o, a; return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)) }, w.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { w.fn[t] = function (e) { return this.on(t, e) } }), w.expr.pseudos.animated = function (e) { return w.grep(w.timers, function (t) { return e === t.elem }).length }, w.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {}; "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p) } }, w.fn.extend({ offset: function (e) { if (arguments.length) return void 0 === e ? this : this.each(function (t) { w.offset.setOffset(this, e, t) }); var t, n, r = this[0]; if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === w.css(e, "position")) e = e.offsetParent; return e || be }) } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) { var n = "pageYOffset" === t; w.fn[e] = function (r) { return z(this, function (e, r, i) { var o; if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r]; o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i }, e, r, arguments.length) } }), w.each(["top", "left"], function (e, t) { w.cssHooks[t] = _e(h.pixelPosition, function (e, n) { if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n }) }), w.each({ Height: "height", Width: "width" }, function (e, t) { w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) { w.fn[r] = function (i, o) { var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border"); return z(this, function (t, n, i) { var o; return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s) }, t, a ? i : void 0, a) } }) }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) { w.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), w.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), w.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), w.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () { return e.apply(t || this, r.concat(o.call(arguments))) }, i.guid = e.guid = e.guid || w.guid++, i }, w.holdReady = function (e) { e ? w.readyWait++ : w.ready(!0) }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) { var t = w.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function () { return w }); var Jt = e.jQuery, Kt = e.$; return w.noConflict = function (t) { return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w }, t || (e.jQuery = e.$ = w), w });
/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function () { 'use strict'; function e(e) { return e && '[object Function]' === {}.toString.call(e) } function t(e, t) { if (1 !== e.nodeType) return []; var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null); return t ? n[t] : n } function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host } function n(e) { if (!e) return document.body; switch (e.nodeName) { case 'HTML': case 'BODY': return e.ownerDocument.body; case '#document': return e.body; }var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY; return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e)) } function r(e) { return 11 === e ? pe : 10 === e ? se : pe || se } function p(e) { if (!e) return document.documentElement; for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;)n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement } function s(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e) } function d(e) { return null === e.parentNode ? e : d(e.parentNode) } function a(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange(); r.setStart(n, 0), r.setEnd(i, 0); var l = r.commonAncestorContainer; if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l); var f = d(e); return f.host ? a(f.host, t) : a(e, d(t).host) } function l(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName; if ('BODY' === n || 'HTML' === n) { var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i; return r[o] } return e[o] } function f(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'), r = o ? -1 : 1; return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e } function m(e, t) { var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom'; return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10) } function h(e, t, o, n) { return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0) } function c(e) { var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o); return { height: h('Height', t, o, n), width: h('Width', t, o, n) } } function g(e) { return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height }) } function u(e) { var o = {}; try { if (r(10)) { o = e.getBoundingClientRect(); var n = l(e, 'top'), i = l(e, 'left'); o.top += n, o.left += i, o.bottom += n, o.right += i } else o = e.getBoundingClientRect() } catch (t) { } var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top }, s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}, d = s.width || e.clientWidth || p.right - p.left, a = s.height || e.clientHeight || p.bottom - p.top, f = e.offsetWidth - d, h = e.offsetHeight - a; if (f || h) { var u = t(e); f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h } return g(p) } function b(e, o) { var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth, 10), c = parseFloat(m.borderLeftWidth, 10); i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0)); var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height }); if (b.marginTop = 0, b.marginLeft = 0, !p && s) { var w = parseFloat(m.marginTop, 10), y = parseFloat(m.marginLeft, 10); b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y } return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b } function w(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'), d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r }; return g(d) } function y(e) { var n = e.nodeName; if ('BODY' === n || 'HTML' === n) return !1; if ('fixed' === t(e, 'position')) return !0; var i = o(e); return !!i && y(i) } function E(e) { if (!e || !e.parentElement || r()) return document.documentElement; for (var o = e.parentElement; o && 'none' === t(o, 'transform');)o = o.parentElement; return o || document.documentElement } function v(e, t, i, r) { var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = { top: 0, left: 0 }, d = p ? E(e) : a(e, t); if ('viewport' === r) s = w(d, p); else { var l; 'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r; var f = b(l, d, p); if ('HTML' === l.nodeName && !y(d)) { var m = c(e.ownerDocument), h = m.height, g = m.width; s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left } else s = f } i = i || 0; var u = 'number' == typeof i; return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s } function x(e) { var t = e.width, o = e.height; return t * o } function O(e, t, o, n, i) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = v(o, n, r, i), s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } }, d = Object.keys(s).map(function (e) { return fe({ key: e }, s[e], { area: x(s[e]) }) }).sort(function (e, t) { return t.area - e.area }), a = d.filter(function (e) { var t = e.width, n = e.height; return t >= o.clientWidth && n >= o.clientHeight }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1]; return l + (f ? '-' + f : '') } function L(e, t, o) { var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, i = n ? E(t) : a(t, o); return b(o, i, n) } function S(e) { var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = { width: e.offsetWidth + i, height: e.offsetHeight + n }; return r } function T(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function (e) { return t[e] }) } function D(e, t, o) { o = o.split('-')[0]; var n = S(e), i = { width: n.width, height: n.height }, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height'; return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i } function C(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] } function N(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function (e) { return e[t] === o }); var n = C(e, function (e) { return e[t] === o }); return e.indexOf(n) } function P(t, o, n) { var i = void 0 === n ? t : t.slice(0, N(t, 'name', n)); return i.forEach(function (t) { t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var n = t['function'] || t.fn; t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t)) }), o } function k() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }; e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } } function W(e, t) { return e.some(function (e) { var o = e.name, n = e.enabled; return n && o === t }) } function H(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) { var i = t[n], r = i ? '' + i + o : e; if ('undefined' != typeof document.body.style[r]) return r } return null } function B() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this } function A(e) { var t = e.ownerDocument; return t ? t.defaultView : window } function M(e, t, o, i) { var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e; p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p) } function F(e, t, o, i) { o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o } function I() { this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate)) } function R(e, t) { return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t } function U() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state)) } function Y(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) } function j(e, t) { Object.keys(t).forEach(function (o) { var n = ''; -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n }) } function V(e, t) { Object.keys(t).forEach(function (o) { var n = t[o]; !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) } function q(e, t) { var o = e.offsets, n = o.popper, i = o.reference, r = $, p = function (e) { return e }, s = r(i.width), d = r(n.width), a = -1 !== ['left', 'right'].indexOf(e.placement), l = -1 !== e.placement.indexOf('-'), f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p; return { left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left), top: m(n.top), bottom: m(n.bottom), right: f(n.right) } } function K(e, t, o) { var n = C(e, function (e) { var o = e.name; return o === t }), i = !!n && e.some(function (e) { return e.name === o && e.enabled && e.order < n.order }); if (!i) { var r = '`' + t + '`'; console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return i } function z(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e } function G(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = ce.indexOf(e), n = ce.slice(o + 1).concat(ce.slice(0, o)); return t ? n.reverse() : n } function _(e, t, o, n) { var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) { case '%p': s = o; break; case '%': case '%r': default: s = n; }var d = g(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r } function X(e, t, o, n) { var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) { return e.trim() }), s = p.indexOf(C(p, function (e) { return -1 !== e.search(/,|\s/) })); p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function (e, n) { var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1; return e.reduce(function (e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function (e) { return _(e, i, t, o) }) }), a.forEach(function (e, t) { e.forEach(function (o, n) { Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1)) }) }), i } function J(e, t) { var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0]; return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1)if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) { ne = 1; break } var i = te && window.Promise, re = i ? function (e) { var t = !1; return function () { t || (t = !0, window.Promise.resolve().then(function () { t = !1, e() })) } } : function (e) { var t = !1; return function () { t || (t = !0, setTimeout(function () { t = !1, e() }, ne)) } }, pe = te && !!(window.MSInputMethodContext && document.documentMode), se = te && /MSIE 10/.test(navigator.userAgent), de = function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') }, ae = function () { function e(e, t) { for (var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function (t, o, n) { return o && e(t.prototype, o), n && e(t, n), t } }(), le = function (e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }, fe = Object.assign || function (e) { for (var t, o = 1; o < arguments.length; o++)for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }, me = te && /Firefox/i.test(navigator.userAgent), he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], ce = he.slice(3), ge = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }, ue = function () { function t(o, n) { var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; de(this, t), this.scheduleUpdate = function () { return requestAnimationFrame(i.update) }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) { i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) { return fe({ name: e }, i.options.modifiers[e]) }).sort(function (e, t) { return e.order - t.order }), this.modifiers.forEach(function (t) { t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) }), this.update(); var p = this.options.eventsEnabled; p && this.enableEventListeners(), this.state.eventsEnabled = p } return ae(t, [{ key: 'update', value: function () { return k.call(this) } }, { key: 'destroy', value: function () { return B.call(this) } }, { key: 'enableEventListeners', value: function () { return I.call(this) } }, { key: 'disableEventListeners', value: function () { return U.call(this) } }]), t }(); return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () { }, onUpdate: function () { }, modifiers: { shift: { order: 100, enabled: !0, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = t.split('-')[1]; if (n) { var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = { start: le({}, d, r[d]), end: le({}, d, r[d] + r[a] - p[a]) }; e.offsets.popper = fe({}, p, l[n]) } return e } }, offset: { order: 200, enabled: !0, fn: J, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (e, t) { var o = t.boundariesElement || p(e.instance.popper); e.instance.reference === o && (o = p(o)); var n = H('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n]; i.top = '', i.left = '', i[n] = ''; var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed); i.top = r, i.left = s, i[n] = d, t.boundaries = a; var l = t.priority, f = e.offsets.popper, m = { primary: function (e) { var o = f[e]; return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o) }, secondary: function (e) { var o = 'right' === e ? 'left' : 'top', n = f[o]; return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n) } }; return l.forEach(function (e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary'; f = fe({}, f, m[t](e)) }), e.offsets.popper = f, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function (e) { var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height'; return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e } }, arrow: { order: 500, enabled: !0, fn: function (e, o) { var n; if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) { if (i = e.instance.popper.querySelector(i), !i) return e; } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l]; d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper); var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w['margin' + f], 10), E = parseFloat(w['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - y - E; return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function (e, t) { if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = []; switch (t.behavior) { case ge.FLIP: p = [n, i]; break; case ge.CLOCKWISE: p = G(n); break; case ge.COUNTERCLOCKWISE: p = G(n, !0); break; default: p = t.behavior; }return p.forEach(function (s, d) { if (n !== s || p.length === d + 1) return e; n = e.placement.split('-')[0], i = T(n); var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u, w = -1 !== ['top', 'bottom'].indexOf(n), y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u); (m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o); return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e } }, hide: { order: 800, enabled: !0, fn: function (e) { if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference, o = C(e.instance.modifiers, function (e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e; e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e; e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function (e, t) { var o = t.x, n = t.y, i = e.offsets.popper, r = C(e.instance.modifiers, function (e) { return 'applyStyle' === e.name }).gpuAcceleration; void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = { position: i.position }, h = q(e, 2 > window.devicePixelRatio || !me), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = H('transform'); if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else { var w = 'bottom' == c ? -1 : 1, y = 'right' == g ? -1 : 1; m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g } var E = { "x-placement": e.placement }; return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function (e) { return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e }, onLoad: function (e, t, o, n, i) { var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o }, gpuAcceleration: void 0 } } }, ue });
//# sourceMappingURL=popper.min.js.map
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper) }(this, function (t, g, u) { "use strict"; function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } function l(o) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) { return Object.getOwnPropertyDescriptor(r, t).enumerable }))), e.forEach(function (t) { var e, n, i; e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) } return o } g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u; var e = "transitionend"; function n(t) { var e = this, n = !1; return g(this).one(_.TRANSITION_END, function () { n = !0 }), setTimeout(function () { n || _.triggerTransitionEnd(e) }, t), this } var _ = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function (t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var n = t.getAttribute("href"); e = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function (t) { if (!t) return 0; var e = g(t).css("transition-duration"), n = g(t).css("transition-delay"), i = parseFloat(e), o = parseFloat(n); return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0 }, reflow: function (t) { return t.offsetHeight }, triggerTransitionEnd: function (t) { g(t).trigger(e) }, supportsTransitionEnd: function () { return Boolean(e) }, isElement: function (t) { return (t[0] || t).nodeType }, typeCheckConfig: function (t, e, n) { for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) { var o = n[i], r = e[i], s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".') } var a }, findShadowRoot: function (t) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null; var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } }; g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = { bindType: e, delegateType: e, handle: function (t) { if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }; var o = "alert", r = "bs.alert", a = "." + r, c = g.fn[o], h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", m = "show", p = function () { function i(t) { this._element = t } var t = i.prototype; return t.close = function (t) { var e = this._element; t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function () { g.removeData(this._element, r), this._element = null }, t._getRootElement = function (t) { var e = _.getSelectorFromElement(t), n = !1; return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n }, t._triggerCloseEvent = function (t) { var e = g.Event(h.CLOSE); return g(t).trigger(e), e }, t._removeElement = function (e) { var n = this; if (g(e).removeClass(m), g(e).hasClass(d)) { var t = _.getTransitionDurationFromElement(e); g(e).one(_.TRANSITION_END, function (t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function (t) { g(t).detach().trigger(h.CLOSED).remove() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(r); e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function (e) { return function (t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), i }(); g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () { return g.fn[o] = c, p._jQueryInterface }; var v = "button", y = "bs.button", E = "." + y, C = ".data-api", T = g.fn[v], S = "active", b = "btn", I = "focus", D = '[data-toggle^="button"]', w = '[data-toggle="buttons"]', A = 'input:not([type="hidden"])', N = ".active", O = ".btn", k = { CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C }, P = function () { function n(t) { this._element = t } var t = n.prototype; return t.toggle = function () { var t = !0, e = !0, n = g(this._element).closest(w)[0]; if (n) { var i = this._element.querySelector(A); if (i) { if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1; else { var o = n.querySelector(N); o && g(o).removeClass(S) } if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return; i.checked = !this._element.classList.contains(S), g(i).trigger("change") } i.focus(), e = !1 } } e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S) }, t.dispose = function () { g.removeData(this._element, y), this._element = null }, n._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(y); t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]() }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), n }(); g(document).on(k.CLICK_DATA_API, D, function (t) { t.preventDefault(); var e = t.target; g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle") }).on(k.FOCUS_BLUR_DATA_API, D, function (t) { var e = g(t.target).closest(O)[0]; g(e).toggleClass(I, /^focus(in)?$/.test(t.type)) }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () { return g.fn[v] = T, P._jQueryInterface }; var L = "carousel", j = "bs.carousel", H = "." + j, R = ".data-api", x = g.fn[L], F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 }, U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, W = "next", q = "prev", M = "left", K = "right", Q = { SLIDE: "slide" + H, SLID: "slid" + H, KEYDOWN: "keydown" + H, MOUSEENTER: "mouseenter" + H, MOUSELEAVE: "mouseleave" + H, TOUCHSTART: "touchstart" + H, TOUCHMOVE: "touchmove" + H, TOUCHEND: "touchend" + H, POINTERDOWN: "pointerdown" + H, POINTERUP: "pointerup" + H, DRAG_START: "dragstart" + H, LOAD_DATA_API: "load" + H + R, CLICK_DATA_API: "click" + H + R }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", X = "carousel-item-left", $ = "carousel-item-next", G = "carousel-item-prev", J = "pointer-event", Z = ".active", tt = ".active.carousel-item", et = ".carousel-item", nt = ".carousel-item img", it = ".carousel-item-next, .carousel-item-prev", ot = ".carousel-indicators", rt = "[data-slide], [data-slide-to]", st = '[data-ride="carousel"]', at = { TOUCH: "touch", PEN: "pen" }, lt = function () { function r(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var t = r.prototype; return t.next = function () { this._isSliding || this._slide(W) }, t.nextWhenVisible = function () { !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next() }, t.prev = function () { this._isSliding || this._slide(q) }, t.pause = function (t) { t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function (t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function (t) { var e = this; this._activeElement = this._element.querySelector(tt); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () { return e.to(t) }); else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? W : q; this._slide(i, this._items[t]) } }, t.dispose = function () { g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function (t) { return t = l({}, F, t), _.typeCheckConfig(L, t, U), t }, t._handleSwipe = function () { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX; 0 < e && this.prev(), e < 0 && this.next() } }, t._addEventListeners = function () { var e = this; this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) { return e._keydown(t) }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) { return e.pause(t) }).on(Q.MOUSELEAVE, function (t) { return e.cycle(t) }), this._config.touch && this._addTouchEventListeners() }, t._addTouchEventListeners = function () { var n = this; if (this._touchSupported) { var e = function (t) { n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX) }, i = function (t) { n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) { return n.cycle(t) }, 500 + n._config.interval)) }; g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) { return t.preventDefault() }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) { return e(t) }), g(this._element).on(Q.POINTERUP, function (t) { return i(t) }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) { return e(t) }), g(this._element).on(Q.TOUCHMOVE, function (t) { var e; (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX }), g(this._element).on(Q.TOUCHEND, function (t) { return i(t) })) } }, t._keydown = function (t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) { case 37: t.preventDefault(), this.prev(); break; case 39: t.preventDefault(), this.next() } }, t._getItemIndex = function (t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t) }, t._getItemByDirection = function (t, e) { var n = t === W, i = t === q, o = this._getItemIndex(e), r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var s = (o + (t === q ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, t._triggerSlideEvent = function (t, e) { var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(tt)), o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return g(this._element).trigger(o), o }, t._setActiveIndicatorElement = function (t) { if (this._indicatorsElement) { var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z)); g(e).removeClass(V); var n = this._indicatorsElement.children[this._getItemIndex(t)]; n && g(n).addClass(V) } }, t._slide = function (t, e) { var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval); if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) { this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l); var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c }); if (g(this._element).hasClass(Y)) { g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n); var f = parseInt(l.getAttribute("data-interval"), 10); this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval; var d = _.getTransitionDurationFromElement(s); g(s).one(_.TRANSITION_END, function () { g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () { return g(r._element).trigger(u) }, 0) }).emulateTransitionEnd(d) } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u); h && this.cycle() } }, r._jQueryInterface = function (i) { return this.each(function () { var t = g(this).data(j), e = l({}, F, g(this).data()); "object" == typeof i && (e = l({}, e, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } else e.interval && e.ride && (t.pause(), t.cycle()) }) }, r._dataApiClickHandler = function (t) { var e = _.getSelectorFromElement(this); if (e) { var n = g(e)[0]; if (n && g(n).hasClass(B)) { var i = l({}, g(n).data(), g(this).data()), o = this.getAttribute("data-slide-to"); o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault() } } }, s(r, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return F } }]), r }(); g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () { for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) { var i = g(t[e]); lt._jQueryInterface.call(i, i.data()) } }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () { return g.fn[L] = x, lt._jQueryInterface }; var ct = "collapse", ht = "bs.collapse", ut = "." + ht, ft = g.fn[ct], dt = { toggle: !0, parent: "" }, gt = { toggle: "boolean", parent: "(string|element)" }, _t = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" }, mt = "show", pt = "collapse", vt = "collapsing", yt = "collapsed", Et = "width", Ct = "height", Tt = ".show, .collapsing", St = '[data-toggle="collapse"]', bt = function () { function a(e, t) { this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) { var r = n[i], s = _.getSelectorFromElement(r), a = [].slice.call(document.querySelectorAll(s)).filter(function (t) { return t === e }); null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function () { g(this._element).hasClass(mt) ? this.hide() : this.show() }, t.show = function () { var t, e, n = this; if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) { return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt) })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) { var i = g.Event(_t.SHOW); if (g(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null)); var o = this._getDimension(); g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0); var r = "scroll" + (o[0].toUpperCase() + o.slice(1)), s = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function () { g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN) }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px" } } }, t.hide = function () { var t = this; if (!this._isTransitioning && g(this._element).hasClass(mt)) { var e = g.Event(_t.HIDE); if (g(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(); this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt); var i = this._triggerArray.length; if (0 < i) for (var o = 0; o < i; o++) { var r = this._triggerArray[o], s = _.getSelectorFromElement(r); if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1) } this.setTransitioning(!0); this._element.style[n] = ""; var a = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function () { t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN) }).emulateTransitionEnd(a) } } }, t.setTransitioning = function (t) { this._isTransitioning = t }, t.dispose = function () { g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function (t) { return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t }, t._getDimension = function () { return g(this._element).hasClass(Et) ? Et : Ct }, t._getParent = function () { var t, n = this; _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent); var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(t.querySelectorAll(e)); return g(i).each(function (t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function (t, e) { var n = g(t).hasClass(mt); e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n) }, a._getTargetFromElement = function (t) { var e = _.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, a._jQueryInterface = function (i) { return this.each(function () { var t = g(this), e = t.data(ht), n = l({}, dt, t.data(), "object" == typeof i && i ? i : {}); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"'); e[i]() } }) }, s(a, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return dt } }]), a }(); g(document).on(_t.CLICK_DATA_API, St, function (t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = g(this), e = _.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e)); g(i).each(function () { var t = g(this), e = t.data(ht) ? "toggle" : n.data(); bt._jQueryInterface.call(t, e) }) }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () { return g.fn[ct] = ft, bt._jQueryInterface }; var It = "dropdown", Dt = "bs.dropdown", wt = "." + Dt, At = ".data-api", Nt = g.fn[It], Ot = new RegExp("38|40|27"), kt = { HIDE: "hide" + wt, HIDDEN: "hidden" + wt, SHOW: "show" + wt, SHOWN: "shown" + wt, CLICK: "click" + wt, CLICK_DATA_API: "click" + wt + At, KEYDOWN_DATA_API: "keydown" + wt + At, KEYUP_DATA_API: "keyup" + wt + At }, Pt = "disabled", Lt = "show", jt = "dropup", Ht = "dropright", Rt = "dropleft", xt = "dropdown-menu-right", Ft = "position-static", Ut = '[data-toggle="dropdown"]', Wt = ".dropdown form", qt = ".dropdown-menu", Mt = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Qt = "top-start", Bt = "top-end", Vt = "bottom-start", Yt = "bottom-end", zt = "right-start", Xt = "left-start", $t = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Gt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Jt = function () { function c(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = c.prototype; return t.toggle = function () { if (!this._element.disabled && !g(this._element).hasClass(Pt)) { var t = c._getParentFromElement(this._element), e = g(this._menu).hasClass(Lt); if (c._clearMenus(), !e) { var n = { relatedTarget: this._element }, i = g.Event(kt.SHOW, n); if (g(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var o = this._element; "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n)) } } } }, t.show = function () { if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) { var t = { relatedTarget: this._element }, e = g.Event(kt.SHOW, t), n = c._getParentFromElement(this._element); g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t))) } }, t.hide = function () { if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) { var t = { relatedTarget: this._element }, e = g.Event(kt.HIDE, t), n = c._getParentFromElement(this._element); g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t))) } }, t.dispose = function () { g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function () { var e = this; g(this._element).on(kt.CLICK, function (t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function (t) { return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t }, t._getMenuElement = function () { if (!this._menu) { var t = c._getParentFromElement(this._element); t && (this._menu = t.querySelector(qt)) } return this._menu }, t._getPlacement = function () { var t = g(this._element.parentNode), e = Vt; return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e }, t._detectNavbar = function () { return 0 < g(this._element).closest(".navbar").length }, t._getOffset = function () { var e = this, t = {}; return "function" == typeof this._config.offset ? t.fn = function (t) { return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t }, t._getPopperConfig = function () { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t }, c._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(Dt); if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, c._clearMenus = function (t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) { var o = c._getParentFromElement(e[n]), r = g(e[n]).data(Dt), s = { relatedTarget: e[n] }; if (t && "click" === t.type && (s.clickEvent = t), r) { var a = r._menu; if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) { var l = g.Event(kt.HIDE, s); g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s))) } } } }, c._getParentFromElement = function (t) { var e, n = _.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, c._dataApiKeydownHandler = function (t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) { var e = c._getParentFromElement(this), n = g(e).hasClass(Lt); if (n && (!n || 27 !== t.which && 32 !== t.which)) { var i = [].slice.call(e.querySelectorAll(Kt)); if (0 !== i.length) { var o = i.indexOf(t.target); 38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus() } } else { if (27 === t.which) { var r = e.querySelector(Ut); g(r).trigger("focus") } g(this).trigger("click") } } }, s(c, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return $t } }, { key: "DefaultType", get: function () { return Gt } }]), c }(); g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) { t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle") }).on(kt.CLICK_DATA_API, Wt, function (t) { t.stopPropagation() }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () { return g.fn[It] = Nt, Jt._jQueryInterface }; var Zt = "modal", te = "bs.modal", ee = "." + te, ne = g.fn[Zt], ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, oe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, re = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" }, se = "modal-dialog-scrollable", ae = "modal-scrollbar-measure", le = "modal-backdrop", ce = "modal-open", he = "fade", ue = "show", fe = ".modal-dialog", de = ".modal-body", ge = '[data-toggle="modal"]', _e = '[data-dismiss="modal"]', me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", pe = ".sticky-top", ve = function () { function o(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var t = o.prototype; return t.toggle = function (t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function (t) { var e = this; if (!this._isShown && !this._isTransitioning) { g(this._element).hasClass(he) && (this._isTransitioning = !0); var n = g.Event(re.SHOW, { relatedTarget: t }); g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) { return e.hide(t) }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () { g(e._element).one(re.MOUSEUP_DISMISS, function (t) { g(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function () { return e._showElement(t) })) } }, t.hide = function (t) { var e = this; if (t && t.preventDefault(), this._isShown && !this._isTransitioning) { var n = g.Event(re.HIDE); if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = g(this._element).hasClass(he); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) { var o = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, function (t) { return e._hideModal(t) }).emulateTransitionEnd(o) } else this._hideModal() } } }, t.dispose = function () { [window, this._element, this._dialog].forEach(function (t) { return g(t).off(ee) }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, t.handleUpdate = function () { this._adjustDialog() }, t._getConfig = function (t) { return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t }, t._showElement = function (t) { var e = this, n = g(this._element).hasClass(he); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus(); var i = g.Event(re.SHOWN, { relatedTarget: t }), o = function () { e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i) }; if (n) { var r = _.getTransitionDurationFromElement(this._dialog); g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o() }, t._enforceFocus = function () { var e = this; g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) { document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function () { var e = this; this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS) }, t._setResizeEvent = function () { var e = this; this._isShown ? g(window).on(re.RESIZE, function (t) { return e.handleUpdate(t) }) : g(window).off(re.RESIZE) }, t._hideModal = function () { var t = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () { g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN) }) }, t._removeBackdrop = function () { this._backdrop && (g(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function (t) { var e = this, n = g(this._element).hasClass(he) ? he : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return; if (!n) return void t(); var i = _.getTransitionDurationFromElement(this._backdrop); g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { g(this._backdrop).removeClass(ue); var o = function () { e._removeBackdrop(), t && t() }; if (g(this._element).hasClass(he)) { var r = _.getTransitionDurationFromElement(this._backdrop); g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o() } else t && t() }, t._adjustDialog = function () { var t = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function () { var t = document.body.getBoundingClientRect(); this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function () { var o = this; if (this._isBodyOverflowing) { var t = [].slice.call(document.querySelectorAll(me)), e = [].slice.call(document.querySelectorAll(pe)); g(t).each(function (t, e) { var n = e.style.paddingRight, i = g(e).css("padding-right"); g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px") }), g(e).each(function (t, e) { var n = e.style.marginRight, i = g(e).css("margin-right"); g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px") }); var n = document.body.style.paddingRight, i = g(document.body).css("padding-right"); g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") } g(document.body).addClass(ce) }, t._resetScrollbar = function () { var t = [].slice.call(document.querySelectorAll(me)); g(t).each(function (t, e) { var n = g(e).data("padding-right"); g(e).removeData("padding-right"), e.style.paddingRight = n || "" }); var e = [].slice.call(document.querySelectorAll("" + pe)); g(e).each(function (t, e) { var n = g(e).data("margin-right"); "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right") }); var n = g(document.body).data("padding-right"); g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, t._getScrollbarWidth = function () { var t = document.createElement("div"); t.className = ae, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, o._jQueryInterface = function (n, i) { return this.each(function () { var t = g(this).data(te), e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {}); if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n](i) } else e.show && t.show(i) }) }, s(o, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return ie } }]), o }(); g(document).on(re.CLICK_DATA_API, ge, function (t) { var e, n = this, i = _.getSelectorFromElement(this); i && (e = document.querySelector(i)); var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var r = g(e).one(re.SHOW, function (t) { t.isDefaultPrevented() || r.one(re.HIDDEN, function () { g(n).is(":visible") && n.focus() }) }); ve._jQueryInterface.call(g(e), o, this) }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () { return g.fn[Zt] = ne, ve._jQueryInterface }; var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Ee = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i; function Se(t, s, e) { if (0 === t.length) return t; if (e && "function" == typeof e) return e(t); for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function (t, e) { var n = l[t], i = n.nodeName.toLowerCase(); if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue"; var o = [].slice.call(n.attributes), r = [].concat(s["*"] || [], s[i] || []); o.forEach(function (t) { (function (t, e) { var n = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te)); for (var i = e.filter(function (t) { return t instanceof RegExp }), o = 0, r = i.length; o < r; o++)if (n.match(i[o])) return !0; return !1 })(t, r) || n.removeAttribute(t.nodeName) }) }, o = 0, r = l.length; o < r; o++)i(o); return n.body.innerHTML } var be = "tooltip", Ie = "bs.tooltip", De = "." + Ie, we = g.fn[be], Ae = "bs-tooltip", Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"), Oe = ["sanitize", "whiteList", "sanitizeFn"], ke = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" }, Pe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, Le = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Ee }, je = "show", He = "out", Re = { HIDE: "hide" + De, HIDDEN: "hidden" + De, SHOW: "show" + De, SHOWN: "shown" + De, INSERTED: "inserted" + De, CLICK: "click" + De, FOCUSIN: "focusin" + De, FOCUSOUT: "focusout" + De, MOUSEENTER: "mouseenter" + De, MOUSELEAVE: "mouseleave" + De }, xe = "fade", Fe = "show", Ue = ".tooltip-inner", We = ".arrow", qe = "hover", Me = "focus", Ke = "click", Qe = "manual", Be = function () { function i(t, e) { if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function () { this._isEnabled = !0 }, t.disable = function () { this._isEnabled = !1 }, t.toggleEnabled = function () { this._isEnabled = !this._isEnabled }, t.toggle = function (t) { if (this._isEnabled) if (t) { var e = this.constructor.DATA_KEY, n = g(t.currentTarget).data(e); n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this); this._enter(null, this) } }, t.dispose = function () { clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function () { var e = this; if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = g.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { g(this.element).trigger(t); var n = _.findShadowRoot(this.element), i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !i) return; var o = this.getTipElement(), r = _.getUID(this.constructor.NAME); o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, a = this._getAttachment(s); this.addAttachmentClass(a); var l = this._getContainer(); g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, { placement: a, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: We }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function (t) { return e._handlePopperPlacementChange(t) } }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop); var c = function () { e.config.animation && e._fixTransition(); var t = e._hoverState; e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e) }; if (g(this.tip).hasClass(xe)) { var h = _.getTransitionDurationFromElement(this.tip); g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h) } else c() } }, t.hide = function (t) { var e = this, n = this.getTipElement(), i = g.Event(this.constructor.Event.HIDE), o = function () { e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (g(this.element).trigger(i), !i.isDefaultPrevented()) { if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) { var r = _.getTransitionDurationFromElement(n); g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r) } else o(); this._hoverState = "" } }, t.update = function () { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function () { return Boolean(this.getTitle()) }, t.addAttachmentClass = function (t) { g(this.getTipElement()).addClass(Ae + "-" + t) }, t.getTipElement = function () { return this.tip = this.tip || g(this.config.template)[0], this.tip }, t.setContent = function () { var t = this.getTipElement(); this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe) }, t.setElementContent = function (t, e) { "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text()) }, t.getTitle = function () { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getOffset = function () { var e = this, t = {}; return "function" == typeof this.config.offset ? t.fn = function (t) { return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t }, t._getContainer = function () { return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container) }, t._getAttachment = function (t) { return Pe[t.toUpperCase()] }, t._setListeners = function () { var i = this; this.config.trigger.split(" ").forEach(function (t) { if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) { return i.toggle(t) }); else if (t !== Qe) { var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT; g(i.element).on(e, i.config.selector, function (t) { return i._enter(t) }).on(n, i.config.selector, function (t) { return i._leave(t) }) } }), g(this.element).closest(".modal").on("hide.bs.modal", function () { i.element && i.hide() }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function () { var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () { e._hoverState === je && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () { e._hoverState === He && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function () { for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 }, t._getConfig = function (t) { var e = g(this.element).data(); return Object.keys(e).forEach(function (t) { -1 !== Oe.indexOf(t) && delete e[t] }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t }, t._getDelegateConfig = function () { var t = {}; if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function () { var t = g(this.getTipElement()), e = t.attr("class").match(Ne); null !== e && e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function (t) { var e = t.instance; this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function () { var t = this.getTipElement(), e = this.config.animation; null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this).data(Ie), e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return Le } }, { key: "NAME", get: function () { return be } }, { key: "DATA_KEY", get: function () { return Ie } }, { key: "Event", get: function () { return Re } }, { key: "EVENT_KEY", get: function () { return De } }, { key: "DefaultType", get: function () { return ke } }]), i }(); g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () { return g.fn[be] = we, Be._jQueryInterface }; var Ve = "popover", Ye = "bs.popover", ze = "." + Ye, Xe = g.fn[Ve], $e = "bs-popover", Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"), Je = l({}, Be.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ze = l({}, Be.DefaultType, { content: "(string|element|function)" }), tn = "fade", en = "show", nn = ".popover-header", on = ".popover-body", rn = { HIDE: "hide" + ze, HIDDEN: "hidden" + ze, SHOW: "show" + ze, SHOWN: "shown" + ze, INSERTED: "inserted" + ze, CLICK: "click" + ze, FOCUSIN: "focusin" + ze, FOCUSOUT: "focusout" + ze, MOUSEENTER: "mouseenter" + ze, MOUSELEAVE: "mouseleave" + ze }, sn = function (t) { var e, n; function i() { return t.apply(this, arguments) || this } n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n; var o = i.prototype; return o.isWithContent = function () { return this.getTitle() || this._getContent() }, o.addAttachmentClass = function (t) { g(this.getTipElement()).addClass($e + "-" + t) }, o.getTipElement = function () { return this.tip = this.tip || g(this.config.template)[0], this.tip }, o.setContent = function () { var t = g(this.getTipElement()); this.setElementContent(t.find(nn), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en) }, o._getContent = function () { return this.element.getAttribute("data-content") || this.config.content }, o._cleanTipClass = function () { var t = g(this.getTipElement()), e = t.attr("class").match(Ge); null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this).data(Ye), e = "object" == typeof n ? n : null; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return Je } }, { key: "NAME", get: function () { return Ve } }, { key: "DATA_KEY", get: function () { return Ye } }, { key: "Event", get: function () { return rn } }, { key: "EVENT_KEY", get: function () { return ze } }, { key: "DefaultType", get: function () { return Ze } }]), i }(Be); g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () { return g.fn[Ve] = Xe, sn._jQueryInterface }; var an = "scrollspy", ln = "bs.scrollspy", cn = "." + ln, hn = g.fn[an], un = { offset: 10, method: "auto", target: "" }, fn = { offset: "number", method: "string", target: "(string|element)" }, dn = { ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api" }, gn = "dropdown-item", _n = "active", mn = '[data-spy="scroll"]', pn = ".nav, .list-group", vn = ".nav-link", yn = ".nav-item", En = ".list-group-item", Cn = ".dropdown", Tn = ".dropdown-item", Sn = ".dropdown-toggle", bn = "offset", In = "position", Dn = function () { function n(t, e) { var n = this; this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function () { var e = this, t = this._scrollElement === this._scrollElement.window ? bn : In, o = "auto" === this._config.method ? t : this._config.method, r = o === In ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) { var e, n = _.getSelectorFromElement(t); if (n && (e = document.querySelector(n)), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [g(e)[o]().top + r, n] } return null }).filter(function (t) { return t }).sort(function (t, e) { return t[0] - e[0] }).forEach(function (t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function () { g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function (t) { if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) { var e = g(t.target).attr("id"); e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e } return _.typeCheckConfig(an, t, fn), t }, t._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function () { var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1]; this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } } }, t._activate = function (e) { this._activeTarget = e, this._clear(); var t = this._selector.split(",").map(function (t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }), n = g([].slice.call(document.querySelectorAll(t.join(",")))); n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e }) }, t._clear = function () { [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) { return t.classList.contains(_n) }).forEach(function (t) { return t.classList.remove(_n) }) }, n._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(ln); if (t || (t = new n(this, "object" == typeof e && e), g(this).data(ln, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "Default", get: function () { return un } }]), n }(); g(window).on(dn.LOAD_DATA_API, function () { for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) { var n = g(t[e]); Dn._jQueryInterface.call(n, n.data()) } }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () { return g.fn[an] = hn, Dn._jQueryInterface }; var wn = "bs.tab", An = "." + wn, Nn = g.fn.tab, On = { HIDE: "hide" + An, HIDDEN: "hidden" + An, SHOW: "show" + An, SHOWN: "shown" + An, CLICK_DATA_API: "click" + An + ".data-api" }, kn = "dropdown-menu", Pn = "active", Ln = "disabled", jn = "fade", Hn = "show", Rn = ".dropdown", xn = ".nav, .list-group", Fn = ".active", Un = "> li > .active", Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', qn = ".dropdown-toggle", Mn = "> .dropdown-menu .active", Kn = function () { function i(t) { this._element = t } var t = i.prototype; return t.show = function () { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) { var t, i, e = g(this._element).closest(xn)[0], o = _.getSelectorFromElement(this._element); if (e) { var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn; i = (i = g.makeArray(g(e).find(r)))[i.length - 1] } var s = g.Event(On.HIDE, { relatedTarget: this._element }), a = g.Event(On.SHOW, { relatedTarget: i }); if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { o && (t = document.querySelector(o)), this._activate(this._element, e); var l = function () { var t = g.Event(On.HIDDEN, { relatedTarget: n._element }), e = g.Event(On.SHOWN, { relatedTarget: i }); g(i).trigger(t), g(n._element).trigger(e) }; t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function () { g.removeData(this._element, wn), this._element = null }, t._activate = function (t, e, n) { var i = this, o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0], r = n && o && g(o).hasClass(jn), s = function () { return i._transitionComplete(t, o, n) }; if (o && r) { var a = _.getTransitionDurationFromElement(o); g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a) } else s() }, t._transitionComplete = function (t, e, n) { if (e) { g(e).removeClass(Pn); var i = g(e.parentNode).find(Mn)[0]; i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) { var o = g(t).closest(Rn)[0]; if (o) { var r = [].slice.call(o.querySelectorAll(qn)); g(r).addClass(Pn) } t.setAttribute("aria-expanded", !0) } n && n() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(wn); if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }]), i }(); g(document).on(On.CLICK_DATA_API, Wn, function (t) { t.preventDefault(), Kn._jQueryInterface.call(g(this), "show") }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () { return g.fn.tab = Nn, Kn._jQueryInterface }; var Qn = "toast", Bn = "bs.toast", Vn = "." + Bn, Yn = g.fn[Qn], zn = { CLICK_DISMISS: "click.dismiss" + Vn, HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn }, Xn = "fade", $n = "hide", Gn = "show", Jn = "showing", Zn = { animation: "boolean", autohide: "boolean", delay: "number" }, ti = { animation: !0, autohide: !0, delay: 500 }, ei = '[data-dismiss="toast"]', ni = function () { function i(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() } var t = i.prototype; return t.show = function () { var t = this; g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn); var e = function () { t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide() }; if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) { var n = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, t.hide = function (t) { var e = this; this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () { e._close() }, this._config.delay)) }, t.dispose = function () { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null }, t._getConfig = function (t) { return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t }, t._setListeners = function () { var t = this; g(this._element).on(zn.CLICK_DISMISS, ei, function () { return t.hide(!0) }) }, t._close = function () { var t = this, e = function () { t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN) }; if (this._element.classList.remove(Gn), this._config.animation) { var n = _.getTransitionDurationFromElement(this._element); g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, i._jQueryInterface = function (n) { return this.each(function () { var t = g(this), e = t.data(Bn); if (e || (e = new i(this, "object" == typeof n && n), t.data(Bn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n](this) } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.3.1" } }, { key: "DefaultType", get: function () { return Zn } }, { key: "Default", get: function () { return ti } }]), i }(); g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () { return g.fn[Qn] = Yn, ni._jQueryInterface }, function () { if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = g.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", { value: !0 }) });
//# sourceMappingURL=bootstrap.min.js.map
/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($, undefined) {
    function UTCDate() {
        return new Date(Date.UTC.apply(Date, arguments));
    }
    function UTCToday() {
        var today = new Date();
        return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
    }
    function isUTCEquals(date1, date2) {
        return (
            date1.getUTCFullYear() === date2.getUTCFullYear() &&
            date1.getUTCMonth() === date2.getUTCMonth() &&
            date1.getUTCDate() === date2.getUTCDate()
        );
    }
    function alias(method, deprecationMsg) {
        return function () {
            if (deprecationMsg !== undefined) {
                $.fn.datepicker.deprecated(deprecationMsg);
            }

            return this[method].apply(this, arguments);
        };
    }
    function isValidDate(d) {
        return d && !isNaN(d.getTime());
    }

    var DateArray = (function () {
        var extras = {
            get: function (i) {
                return this.slice(i)[0];
            },
            contains: function (d) {
                // Array.indexOf is not cross-browser;
                // $.inArray doesn't work with Dates
                var val = d && d.valueOf();
                for (var i = 0, l = this.length; i < l; i++)
                    // Use date arithmetic to allow dates with different times to match
                    if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000 * 60 * 60 * 24)
                        return i;
                return -1;
            },
            remove: function (i) {
                this.splice(i, 1);
            },
            replace: function (new_array) {
                if (!new_array)
                    return;
                if (!$.isArray(new_array))
                    new_array = [new_array];
                this.clear();
                this.push.apply(this, new_array);
            },
            clear: function () {
                this.length = 0;
            },
            copy: function () {
                var a = new DateArray();
                a.replace(this);
                return a;
            }
        };

        return function () {
            var a = [];
            a.push.apply(a, arguments);
            $.extend(a, extras);
            return a;
        };
    })();


    // Picker object

    var Datepicker = function (element, options) {
        $.data(element, 'datepicker', this);

        this._events = [];
        this._secondaryEvents = [];

        this._process_options(options);

        this.dates = new DateArray();
        this.viewDate = this.o.defaultViewDate;
        this.focusDate = null;

        this.element = $(element);
        this.isInput = this.element.is('input');
        this.inputField = this.isInput ? this.element : this.element.find('input');
        this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn') : false;
        if (this.component && this.component.length === 0)
            this.component = false;
        this.isInline = !this.component && this.element.is('div');

        this.picker = $(DPGlobal.template);

        // Checking templates and inserting
        if (this._check_template(this.o.templates.leftArrow)) {
            this.picker.find('.prev').html(this.o.templates.leftArrow);
        }

        if (this._check_template(this.o.templates.rightArrow)) {
            this.picker.find('.next').html(this.o.templates.rightArrow);
        }

        this._buildEvents();
        this._attachEvents();

        if (this.isInline) {
            this.picker.addClass('datepicker-inline').appendTo(this.element);
        }
        else {
            this.picker.addClass('datepicker-dropdown dropdown-menu');
        }

        if (this.o.rtl) {
            this.picker.addClass('datepicker-rtl');
        }

        if (this.o.calendarWeeks) {
            this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')
                .attr('colspan', function (i, val) {
                    return Number(val) + 1;
                });
        }

        this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        });

        this._allow_update = false;
        this.setViewMode(this.o.startView);
        this._allow_update = true;

        this.fillDow();
        this.fillMonths();

        this.update();

        if (this.isInline) {
            this.show();
        }
    };

    Datepicker.prototype = {
        constructor: Datepicker,

        _resolveViewName: function (view) {
            $.each(DPGlobal.viewModes, function (i, viewMode) {
                if (view === i || $.inArray(view, viewMode.names) !== -1) {
                    view = i;
                    return false;
                }
            });

            return view;
        },

        _resolveDaysOfWeek: function (daysOfWeek) {
            if (!$.isArray(daysOfWeek))
                daysOfWeek = daysOfWeek.split(/[,\s]*/);
            return $.map(daysOfWeek, Number);
        },

        _check_template: function (tmp) {
            try {
                // If empty
                if (tmp === undefined || tmp === "") {
                    return false;
                }
                // If no html, everything ok
                if ((tmp.match(/[<>]/g) || []).length <= 0) {
                    return true;
                }
                // Checking if html is fine
                var jDom = $(tmp);
                return jDom.length > 0;
            }
            catch (ex) {
                return false;
            }
        },

        _process_options: function (opts) {
            // Store raw options for reference
            this._o = $.extend({}, this._o, opts);
            // Processed options
            var o = this.o = $.extend({}, this._o);

            // Check if "de-DE" style date is available, if not language should
            // fallback to 2 letter code eg "de"
            var lang = o.language;
            if (!dates[lang]) {
                lang = lang.split('-')[0];
                if (!dates[lang])
                    lang = defaults.language;
            }
            o.language = lang;

            // Retrieve view index from any aliases
            o.startView = this._resolveViewName(o.startView);
            o.minViewMode = this._resolveViewName(o.minViewMode);
            o.maxViewMode = this._resolveViewName(o.maxViewMode);

            // Check view is between min and max
            o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));

            // true, false, or Number > 0
            if (o.multidate !== true) {
                o.multidate = Number(o.multidate) || false;
                if (o.multidate !== false)
                    o.multidate = Math.max(0, o.multidate);
            }
            o.multidateSeparator = String(o.multidateSeparator);

            o.weekStart %= 7;
            o.weekEnd = (o.weekStart + 6) % 7;

            var format = DPGlobal.parseFormat(o.format);
            if (o.startDate !== -Infinity) {
                if (!!o.startDate) {
                    if (o.startDate instanceof Date)
                        o.startDate = this._local_to_utc(this._zero_time(o.startDate));
                    else
                        o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
                }
                else {
                    o.startDate = -Infinity;
                }
            }
            if (o.endDate !== Infinity) {
                if (!!o.endDate) {
                    if (o.endDate instanceof Date)
                        o.endDate = this._local_to_utc(this._zero_time(o.endDate));
                    else
                        o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
                }
                else {
                    o.endDate = Infinity;
                }
            }

            o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled || []);
            o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted || []);

            o.datesDisabled = o.datesDisabled || [];
            if (!$.isArray(o.datesDisabled)) {
                o.datesDisabled = o.datesDisabled.split(',');
            }
            o.datesDisabled = $.map(o.datesDisabled, function (d) {
                return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
            });

            var plc = String(o.orientation).toLowerCase().split(/\s+/g),
                _plc = o.orientation.toLowerCase();
            plc = $.grep(plc, function (word) {
                return /^auto|left|right|top|bottom$/.test(word);
            });
            o.orientation = { x: 'auto', y: 'auto' };
            if (!_plc || _plc === 'auto')
                ; // no action
            else if (plc.length === 1) {
                switch (plc[0]) {
                    case 'top':
                    case 'bottom':
                        o.orientation.y = plc[0];
                        break;
                    case 'left':
                    case 'right':
                        o.orientation.x = plc[0];
                        break;
                }
            }
            else {
                _plc = $.grep(plc, function (word) {
                    return /^left|right$/.test(word);
                });
                o.orientation.x = _plc[0] || 'auto';

                _plc = $.grep(plc, function (word) {
                    return /^top|bottom$/.test(word);
                });
                o.orientation.y = _plc[0] || 'auto';
            }
            if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
                o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
            } else if (o.defaultViewDate) {
                var year = o.defaultViewDate.year || new Date().getFullYear();
                var month = o.defaultViewDate.month || 0;
                var day = o.defaultViewDate.day || 1;
                o.defaultViewDate = UTCDate(year, month, day);
            } else {
                o.defaultViewDate = UTCToday();
            }
        },
        _applyEvents: function (evs) {
            for (var i = 0, el, ch, ev; i < evs.length; i++) {
                el = evs[i][0];
                if (evs[i].length === 2) {
                    ch = undefined;
                    ev = evs[i][1];
                } else if (evs[i].length === 3) {
                    ch = evs[i][1];
                    ev = evs[i][2];
                }
                el.on(ev, ch);
            }
        },
        _unapplyEvents: function (evs) {
            for (var i = 0, el, ev, ch; i < evs.length; i++) {
                el = evs[i][0];
                if (evs[i].length === 2) {
                    ch = undefined;
                    ev = evs[i][1];
                } else if (evs[i].length === 3) {
                    ch = evs[i][1];
                    ev = evs[i][2];
                }
                el.off(ev, ch);
            }
        },
        _buildEvents: function () {
            var events = {
                keyup: $.proxy(function (e) {
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            // component: input + button
            else if (this.component && this.inputField.length) {
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
            else {
                this._events = [
                    [this.element, {
                        click: $.proxy(this.show, this),
                        keydown: $.proxy(this.keydown, this)
                    }]
                ];
            }
            this._events.push(
                // Component: listen for blur on element descendants
                [this.element, '*', {
                    blur: $.proxy(function (e) {
                        this._focused_from = e.target;
                    }, this)
                }],
                // Input: listen for blur on element
                [this.element, {
                    blur: $.proxy(function (e) {
                        this._focused_from = e.target;
                    }, this)
                }]
            );

            if (this.o.immediateUpdates) {
                // Trigger input updates immediately on changed year/month
                this._events.push([this.element, {
                    'changeYear changeMonth': $.proxy(function (e) {
                        this.update(e.date);
                    }, this)
                }]);
            }

            this._secondaryEvents = [
                [this.picker, {
                    click: $.proxy(this.click, this)
                }],
                [this.picker, '.prev, .next', {
                    click: $.proxy(this.navArrowsClick, this)
                }],
                [this.picker, '.day:not(.disabled)', {
                    click: $.proxy(this.dayCellClick, this)
                }],
                [$(window), {
                    resize: $.proxy(this.place, this)
                }],
                [$(document), {
                    'mousedown touchstart': $.proxy(function (e) {
                        // Clicked outside the datepicker, hide it
                        if (!(
                            this.element.is(e.target) ||
                            this.element.find(e.target).length ||
                            this.picker.is(e.target) ||
                            this.picker.find(e.target).length ||
                            this.isInline
                        )) {
                            this.hide();
                        }
                    }, this)
                }]
            ];
        },
        _attachEvents: function () {
            this._detachEvents();
            this._applyEvents(this._events);
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents);
        },
        _trigger: function (event, altdate) {
            var date = altdate || this.dates.get(-1),
                local_date = this._utc_to_local(date);

            this.element.trigger({
                type: event,
                date: local_date,
                viewMode: this.viewMode,
                dates: $.map(this.dates, this._utc_to_local),
                format: $.proxy(function (ix, format) {
                    if (arguments.length === 0) {
                        ix = this.dates.length - 1;
                        format = this.o.format;
                    } else if (typeof ix === 'string') {
                        format = ix;
                        ix = this.dates.length - 1;
                    }
                    format = format || this.o.format;
                    var date = this.dates.get(ix);
                    return DPGlobal.formatDate(date, format, this.o.language);
                }, this)
            });
        },

        show: function () {
            if (this.inputField.is(':disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
                return;
            if (!this.isInline)
                this.picker.appendTo(this.o.container);
            this.place();
            this.picker.show();
            this._attachSecondaryEvents();
            this._trigger('show');
            if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
                $(this.element).blur();
            }
            return this;
        },

        hide: function () {
            if (this.isInline || !this.picker.is(':visible'))
                return this;
            this.focusDate = null;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.setViewMode(this.o.startView);

            if (this.o.forceParse && this.inputField.val())
                this.setValue();
            this._trigger('hide');
            return this;
        },

        destroy: function () {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput) {
                delete this.element.data().date;
            }
            return this;
        },

        paste: function (e) {
            var dateString;
            if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types
                && $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
                dateString = e.originalEvent.clipboardData.getData('text/plain');
            } else if (window.clipboardData) {
                dateString = window.clipboardData.getData('Text');
            } else {
                return;
            }
            this.setDate(dateString);
            this.update();
            e.preventDefault();
        },

        _utc_to_local: function (utc) {
            if (!utc) {
                return utc;
            }

            var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));

            if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
                local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
            }

            return local;
        },
        _local_to_utc: function (local) {
            return local && new Date(local.getTime() - (local.getTimezoneOffset() * 60000));
        },
        _zero_time: function (local) {
            return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
        },
        _zero_utc_time: function (utc) {
            return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
        },

        getDates: function () {
            return $.map(this.dates, this._utc_to_local);
        },

        getUTCDates: function () {
            return $.map(this.dates, function (d) {
                return new Date(d);
            });
        },

        getDate: function () {
            return this._utc_to_local(this.getUTCDate());
        },

        getUTCDate: function () {
            var selected_date = this.dates.get(-1);
            if (selected_date !== undefined) {
                return new Date(selected_date);
            } else {
                return null;
            }
        },

        clearDates: function () {
            this.inputField.val('');
            this.update();
            this._trigger('changeDate');

            if (this.o.autoclose) {
                this.hide();
            }
        },

        setDates: function () {
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, args);
            this._trigger('changeDate');
            this.setValue();
            return this;
        },

        setUTCDates: function () {
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.setDates.apply(this, $.map(args, this._utc_to_local));
            return this;
        },

        setDate: alias('setDates'),
        setUTCDate: alias('setUTCDates'),
        remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),

        setValue: function () {
            var formatted = this.getFormattedDate();
            this.inputField.val(formatted);
            return this;
        },

        getFormattedDate: function (format) {
            if (format === undefined)
                format = this.o.format;

            var lang = this.o.language;
            return $.map(this.dates, function (d) {
                return DPGlobal.formatDate(d, format, lang);
            }).join(this.o.multidateSeparator);
        },

        getStartDate: function () {
            return this.o.startDate;
        },

        setStartDate: function (startDate) {
            this._process_options({ startDate: startDate });
            this.update();
            this.updateNavArrows();
            return this;
        },

        getEndDate: function () {
            return this.o.endDate;
        },

        setEndDate: function (endDate) {
            this._process_options({ endDate: endDate });
            this.update();
            this.updateNavArrows();
            return this;
        },

        setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
            this._process_options({ daysOfWeekDisabled: daysOfWeekDisabled });
            this.update();
            return this;
        },

        setDaysOfWeekHighlighted: function (daysOfWeekHighlighted) {
            this._process_options({ daysOfWeekHighlighted: daysOfWeekHighlighted });
            this.update();
            return this;
        },

        setDatesDisabled: function (datesDisabled) {
            this._process_options({ datesDisabled: datesDisabled });
            this.update();
            return this;
        },

        place: function () {
            if (this.isInline)
                return this;
            var calendarWidth = this.picker.outerWidth(),
                calendarHeight = this.picker.outerHeight(),
                visualPadding = 10,
                container = $(this.o.container),
                windowWidth = container.width(),
                scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
                appendOffset = container.offset();

            var parentsZindex = [0];
            this.element.parents().each(function () {
                var itemZIndex = $(this).css('z-index');
                if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
            });
            var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
            var offset = this.component ? this.component.parent().offset() : this.element.offset();
            var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
            var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
            var left = offset.left - appendOffset.left;
            var top = offset.top - appendOffset.top;

            if (this.o.container !== 'body') {
                top += scrollTop;
            }

            this.picker.removeClass(
                'datepicker-orient-top datepicker-orient-bottom ' +
                'datepicker-orient-right datepicker-orient-left'
            );

            if (this.o.orientation.x !== 'auto') {
                this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
                if (this.o.orientation.x === 'right')
                    left -= calendarWidth - width;
            }
            // auto x orientation is best-placement: if it crosses a window
            // edge, fudge it sideways
            else {
                if (offset.left < 0) {
                    // component is outside the window on the left side. Move it into visible range
                    this.picker.addClass('datepicker-orient-left');
                    left -= offset.left - visualPadding;
                } else if (left + calendarWidth > windowWidth) {
                    // the calendar passes the widow right edge. Align it to component right side
                    this.picker.addClass('datepicker-orient-right');
                    left += width - calendarWidth;
                } else {
                    if (this.o.rtl) {
                        // Default to right
                        this.picker.addClass('datepicker-orient-right');
                    } else {
                        // Default to left
                        this.picker.addClass('datepicker-orient-left');
                    }
                }
            }

            // auto y orientation is best-situation: top or bottom, no fudging,
            // decision based on which shows more of the calendar
            var yorient = this.o.orientation.y,
                top_overflow;
            if (yorient === 'auto') {
                top_overflow = -scrollTop + top - calendarHeight;
                yorient = top_overflow < 0 ? 'bottom' : 'top';
            }

            this.picker.addClass('datepicker-orient-' + yorient);
            if (yorient === 'top')
                top -= calendarHeight + parseInt(this.picker.css('padding-top'));
            else
                top += height;

            if (this.o.rtl) {
                var right = windowWidth - (left + width);
                this.picker.css({
                    top: top,
                    right: right,
                    zIndex: zIndex
                });
            } else {
                this.picker.css({
                    top: top,
                    left: left,
                    zIndex: zIndex
                });
            }
            return this;
        },

        _allow_update: true,
        update: function () {
            if (!this._allow_update)
                return this;

            var oldDates = this.dates.copy(),
                dates = [],
                fromArgs = false;
            if (arguments.length) {
                $.each(arguments, $.proxy(function (i, date) {
                    if (date instanceof Date)
                        date = this._local_to_utc(date);
                    dates.push(date);
                }, this));
                fromArgs = true;
            } else {
                dates = this.isInput
                    ? this.element.val()
                    : this.element.data('date') || this.inputField.val();
                if (dates && this.o.multidate)
                    dates = dates.split(this.o.multidateSeparator);
                else
                    dates = [dates];
                delete this.element.data().date;
            }

            dates = $.map(dates, $.proxy(function (date) {
                return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
            }, this));
            dates = $.grep(dates, $.proxy(function (date) {
                return (
                    !this.dateWithinRange(date) ||
                    !date
                );
            }, this), true);
            this.dates.replace(dates);

            if (this.o.updateViewDate) {
                if (this.dates.length)
                    this.viewDate = new Date(this.dates.get(-1));
                else if (this.viewDate < this.o.startDate)
                    this.viewDate = new Date(this.o.startDate);
                else if (this.viewDate > this.o.endDate)
                    this.viewDate = new Date(this.o.endDate);
                else
                    this.viewDate = this.o.defaultViewDate;
            }

            if (fromArgs) {
                // setting date by clicking
                this.setValue();
                this.element.change();
            }
            else if (this.dates.length) {
                // setting date by typing
                if (String(oldDates) !== String(this.dates) && fromArgs) {
                    this._trigger('changeDate');
                    this.element.change();
                }
            }
            if (!this.dates.length && oldDates.length) {
                this._trigger('clearDate');
                this.element.change();
            }

            this.fill();
            return this;
        },

        fillDow: function () {
            if (this.o.showWeekDays) {
                var dowCnt = this.o.weekStart,
                    html = '<tr>';
                if (this.o.calendarWeeks) {
                    html += '<th class="cw">&#160;</th>';
                }
                while (dowCnt < this.o.weekStart + 7) {
                    html += '<th class="dow';
                    if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
                        html += ' disabled';
                    html += '">' + dates[this.o.language].daysMin[(dowCnt++) % 7] + '</th>';
                }
                html += '</tr>';
                this.picker.find('.datepicker-days thead').append(html);
            }
        },

        fillMonths: function () {
            var localDate = this._utc_to_local(this.viewDate);
            var html = '';
            var focused;
            for (var i = 0; i < 12; i++) {
                focused = localDate && localDate.getMonth() === i ? ' focused' : '';
                html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
            }
            this.picker.find('.datepicker-months td').html(html);
        },

        setRange: function (range) {
            if (!range || !range.length)
                delete this.range;
            else
                this.range = $.map(range, function (d) {
                    return d.valueOf();
                });
            this.fill();
        },

        getClassNames: function (date) {
            var cls = [],
                year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                today = UTCToday();
            if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)) {
                cls.push('old');
            } else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)) {
                cls.push('new');
            }
            if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
                cls.push('focused');
            // Compare internal UTC date with UTC today, not local today
            if (this.o.todayHighlight && isUTCEquals(date, today)) {
                cls.push('today');
            }
            if (this.dates.contains(date) !== -1)
                cls.push('active');
            if (!this.dateWithinRange(date)) {
                cls.push('disabled');
            }
            if (this.dateIsDisabled(date)) {
                cls.push('disabled', 'disabled-date');
            }
            if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1) {
                cls.push('highlighted');
            }

            if (this.range) {
                if (date > this.range[0] && date < this.range[this.range.length - 1]) {
                    cls.push('range');
                }
                if ($.inArray(date.valueOf(), this.range) !== -1) {
                    cls.push('selected');
                }
                if (date.valueOf() === this.range[0]) {
                    cls.push('range-start');
                }
                if (date.valueOf() === this.range[this.range.length - 1]) {
                    cls.push('range-end');
                }
            }
            return cls;
        },

        _fill_yearsView: function (selector, cssClass, factor, year, startYear, endYear, beforeFn) {
            var html = '';
            var step = factor / 10;
            var view = this.picker.find(selector);
            var startVal = Math.floor(year / factor) * factor;
            var endVal = startVal + step * 9;
            var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
            var selected = $.map(this.dates, function (d) {
                return Math.floor(d.getUTCFullYear() / step) * step;
            });

            var classes, tooltip, before;
            for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
                classes = [cssClass];
                tooltip = null;

                if (currVal === startVal - step) {
                    classes.push('old');
                } else if (currVal === endVal + step) {
                    classes.push('new');
                }
                if ($.inArray(currVal, selected) !== -1) {
                    classes.push('active');
                }
                if (currVal < startYear || currVal > endYear) {
                    classes.push('disabled');
                }
                if (currVal === focusedVal) {
                    classes.push('focused');
                }

                if (beforeFn !== $.noop) {
                    before = beforeFn(new Date(currVal, 0, 1));
                    if (before === undefined) {
                        before = {};
                    } else if (typeof before === 'boolean') {
                        before = { enabled: before };
                    } else if (typeof before === 'string') {
                        before = { classes: before };
                    }
                    if (before.enabled === false) {
                        classes.push('disabled');
                    }
                    if (before.classes) {
                        classes = classes.concat(before.classes.split(/\s+/));
                    }
                    if (before.tooltip) {
                        tooltip = before.tooltip;
                    }
                }

                html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
            }

            view.find('.datepicker-switch').text(startVal + '-' + endVal);
            view.find('td').html(html);
        },

        fill: function () {
            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                todaytxt = dates[this.o.language].today || dates['en'].today || '',
                cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
                titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
                todayDate = UTCToday(),
                titleBtnVisible = (this.o.todayBtn === true || this.o.todayBtn === 'linked') && todayDate >= this.o.startDate && todayDate <= this.o.endDate && !this.weekOfDateIsDisabled(todayDate),
                tooltip,
                before;
            if (isNaN(year) || isNaN(month))
                return;
            this.picker.find('.datepicker-days .datepicker-switch')
                .text(DPGlobal.formatDate(d, titleFormat, this.o.language));
            this.picker.find('tfoot .today')
                .text(todaytxt)
                .css('display', titleBtnVisible ? 'table-cell' : 'none');
            this.picker.find('tfoot .clear')
                .text(cleartxt)
                .css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
            this.picker.find('thead .datepicker-title')
                .text(this.o.title)
                .css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month, 0),
                day = prevMonth.getUTCDate();
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
            var nextMonth = new Date(prevMonth);
            if (prevMonth.getUTCFullYear() < 100) {
                nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
            }
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var weekDay, clsName;
            while (prevMonth.valueOf() < nextMonth) {
                weekDay = prevMonth.getUTCDay();
                if (weekDay === this.o.weekStart) {
                    html.push('<tr>');
                    if (this.o.calendarWeeks) {
                        // ISO 8601: First week contains first thursday.
                        // ISO also states week starts on Monday, but we can be more abstract here.
                        var
                            // Start of current week: based on weekstart/current date
                            ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
                            // Thursday of this week
                            th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
                            // First Thursday of year, year from thursday
                            yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
                            // Calendar week: ms between thursdays, div ms per day, div 7 days
                            calWeek = (th - yth) / 864e5 / 7 + 1;
                        html.push('<td class="cw">' + calWeek + '</td>');
                    }
                }
                clsName = this.getClassNames(prevMonth);
                clsName.push('day');

                var content = prevMonth.getUTCDate();

                if (this.o.beforeShowDay !== $.noop) {
                    before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
                    if (before === undefined)
                        before = {};
                    else if (typeof before === 'boolean')
                        before = { enabled: before };
                    else if (typeof before === 'string')
                        before = { classes: before };
                    if (before.enabled === false)
                        clsName.push('disabled');
                    if (before.classes)
                        clsName = clsName.concat(before.classes.split(/\s+/));
                    if (before.tooltip)
                        tooltip = before.tooltip;
                    if (before.content)
                        content = before.content;
                }

                //Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
                //Fallback to unique function for older jquery versions
                if ($.isFunction($.uniqueSort)) {
                    clsName = $.uniqueSort(clsName);
                } else {
                    clsName = $.unique(clsName);
                }

                html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
                tooltip = null;
                if (weekDay === this.o.weekEnd) {
                    html.push('</tr>');
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
            }
            this.picker.find('.datepicker-days tbody').html(html.join(''));

            var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
            var months = this.picker.find('.datepicker-months')
                .find('.datepicker-switch')
                .text(this.o.maxViewMode < 2 ? monthsTitle : year)
                .end()
                .find('tbody span').removeClass('active');

            $.each(this.dates, function (i, d) {
                if (d.getUTCFullYear() === year)
                    months.eq(d.getUTCMonth()).addClass('active');
            });

            if (year < startYear || year > endYear) {
                months.addClass('disabled');
            }
            if (year === startYear) {
                months.slice(0, startMonth).addClass('disabled');
            }
            if (year === endYear) {
                months.slice(endMonth + 1).addClass('disabled');
            }

            if (this.o.beforeShowMonth !== $.noop) {
                var that = this;
                $.each(months, function (i, month) {
                    var moDate = new Date(year, i, 1);
                    var before = that.o.beforeShowMonth(moDate);
                    if (before === undefined)
                        before = {};
                    else if (typeof before === 'boolean')
                        before = { enabled: before };
                    else if (typeof before === 'string')
                        before = { classes: before };
                    if (before.enabled === false && !$(month).hasClass('disabled'))
                        $(month).addClass('disabled');
                    if (before.classes)
                        $(month).addClass(before.classes);
                    if (before.tooltip)
                        $(month).prop('title', before.tooltip);
                });
            }

            // Generating decade/years picker
            this._fill_yearsView(
                '.datepicker-years',
                'year',
                10,
                year,
                startYear,
                endYear,
                this.o.beforeShowYear
            );

            // Generating century/decades picker
            this._fill_yearsView(
                '.datepicker-decades',
                'decade',
                100,
                year,
                startYear,
                endYear,
                this.o.beforeShowDecade
            );

            // Generating millennium/centuries picker
            this._fill_yearsView(
                '.datepicker-centuries',
                'century',
                1000,
                year,
                startYear,
                endYear,
                this.o.beforeShowCentury
            );
        },

        updateNavArrows: function () {
            if (!this._allow_update)
                return;

            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                prevIsDisabled,
                nextIsDisabled,
                factor = 1;
            switch (this.viewMode) {
                case 4:
                    factor *= 10;
                /* falls through */
                case 3:
                    factor *= 10;
                /* falls through */
                case 2:
                    factor *= 10;
                /* falls through */
                case 1:
                    prevIsDisabled = Math.floor(year / factor) * factor <= startYear;
                    nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
                    break;
                case 0:
                    prevIsDisabled = year <= startYear && month <= startMonth;
                    nextIsDisabled = year >= endYear && month >= endMonth;
                    break;
            }

            this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
            this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
        },

        click: function (e) {
            e.preventDefault();
            e.stopPropagation();

            var target, dir, day, year, month;
            target = $(e.target);

            // Clicked on the switch
            if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode) {
                this.setViewMode(this.viewMode + 1);
            }

            // Clicked on today button
            if (target.hasClass('today') && !target.hasClass('day')) {
                this.setViewMode(0);
                this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
            }

            // Clicked on clear button
            if (target.hasClass('clear')) {
                this.clearDates();
            }

            if (!target.hasClass('disabled')) {
                // Clicked on a month, year, decade, century
                if (target.hasClass('month')
                    || target.hasClass('year')
                    || target.hasClass('decade')
                    || target.hasClass('century')) {
                    this.viewDate.setUTCDate(1);

                    day = 1;
                    if (this.viewMode === 1) {
                        month = target.parent().find('span').index(target);
                        year = this.viewDate.getUTCFullYear();
                        this.viewDate.setUTCMonth(month);
                    } else {
                        month = 0;
                        year = Number(target.text());
                        this.viewDate.setUTCFullYear(year);
                    }

                    this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);

                    if (this.viewMode === this.o.minViewMode) {
                        this._setDate(UTCDate(year, month, day));
                    } else {
                        this.setViewMode(this.viewMode - 1);
                        this.fill();
                    }
                }
            }

            if (this.picker.is(':visible') && this._focused_from) {
                this._focused_from.focus();
            }
            delete this._focused_from;
        },

        dayCellClick: function (e) {
            var $target = $(e.currentTarget);
            var timestamp = $target.data('date');
            var date = new Date(timestamp);

            if (this.o.updateViewDate) {
                if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
                    this._trigger('changeYear', this.viewDate);
                }

                if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
                    this._trigger('changeMonth', this.viewDate);
                }
            }
            this._setDate(date);
        },

        // Clicked on prev or next
        navArrowsClick: function (e) {
            var $target = $(e.currentTarget);
            var dir = $target.hasClass('prev') ? -1 : 1;
            if (this.viewMode !== 0) {
                dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
            }
            this.viewDate = this.moveMonth(this.viewDate, dir);
            this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
            this.fill();
        },

        _toggle_multidate: function (date) {
            var ix = this.dates.contains(date);
            if (!date) {
                this.dates.clear();
            }

            if (ix !== -1) {
                if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive) {
                    this.dates.remove(ix);
                }
            } else if (this.o.multidate === false) {
                this.dates.clear();
                this.dates.push(date);
            }
            else {
                this.dates.push(date);
            }

            if (typeof this.o.multidate === 'number')
                while (this.dates.length > this.o.multidate)
                    this.dates.remove(0);
        },

        _setDate: function (date, which) {
            if (!which || which === 'date')
                this._toggle_multidate(date && new Date(date));
            if ((!which && this.o.updateViewDate) || which === 'view')
                this.viewDate = date && new Date(date);

            this.fill();
            this.setValue();
            if (!which || which !== 'view') {
                this._trigger('changeDate');
            }
            this.inputField.trigger('change');
            if (this.o.autoclose && (!which || which === 'date')) {
                this.hide();
            }
        },

        moveDay: function (date, dir) {
            var newDate = new Date(date);
            newDate.setUTCDate(date.getUTCDate() + dir);

            return newDate;
        },

        moveWeek: function (date, dir) {
            return this.moveDay(date, dir * 7);
        },

        moveMonth: function (date, dir) {
            if (!isValidDate(date))
                return this.o.defaultViewDate;
            if (!dir)
                return date;
            var new_date = new Date(date.valueOf()),
                day = new_date.getUTCDate(),
                month = new_date.getUTCMonth(),
                mag = Math.abs(dir),
                new_month, test;
            dir = dir > 0 ? 1 : -1;
            if (mag === 1) {
                test = dir === -1
                    // If going back one month, make sure month is not current month
                    // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
                    ? function () {
                        return new_date.getUTCMonth() === month;
                    }
                    // If going forward one month, make sure month is as expected
                    // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
                    : function () {
                        return new_date.getUTCMonth() !== new_month;
                    };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
                new_month = (new_month + 12) % 12;
            }
            else {
                // For magnitudes >1, move one month at a time...
                for (var i = 0; i < mag; i++)
                    // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                    new_date = this.moveMonth(new_date, dir);
                // ...then reset the day, keeping it in the new month
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function () {
                    return new_month !== new_date.getUTCMonth();
                };
            }
            // Common date-resetting loop -- if date is beyond end of month, make it
            // end of month
            while (test()) {
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month);
            }
            return new_date;
        },

        moveYear: function (date, dir) {
            return this.moveMonth(date, dir * 12);
        },

        moveAvailableDate: function (date, dir, fn) {
            do {
                date = this[fn](date, dir);

                if (!this.dateWithinRange(date))
                    return false;

                fn = 'moveDay';
            }
            while (this.dateIsDisabled(date));

            return date;
        },

        weekOfDateIsDisabled: function (date) {
            return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
        },

        dateIsDisabled: function (date) {
            return (
                this.weekOfDateIsDisabled(date) ||
                $.grep(this.o.datesDisabled, function (d) {
                    return isUTCEquals(date, d);
                }).length > 0
            );
        },

        dateWithinRange: function (date) {
            return date >= this.o.startDate && date <= this.o.endDate;
        },

        keydown: function (e) {
            if (!this.picker.is(':visible')) {
                if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
                    this.show();
                    e.stopPropagation();
                }
                return;
            }
            var dateChanged = false,
                dir, newViewDate,
                focusDate = this.focusDate || this.viewDate;
            switch (e.keyCode) {
                case 27: // escape
                    if (this.focusDate) {
                        this.focusDate = null;
                        this.viewDate = this.dates.get(-1) || this.viewDate;
                        this.fill();
                    }
                    else
                        this.hide();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                case 37: // left
                case 38: // up
                case 39: // right
                case 40: // down
                    if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
                        break;
                    dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
                    if (this.viewMode === 0) {
                        if (e.ctrlKey) {
                            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

                            if (newViewDate)
                                this._trigger('changeYear', this.viewDate);
                        } else if (e.shiftKey) {
                            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

                            if (newViewDate)
                                this._trigger('changeMonth', this.viewDate);
                        } else if (e.keyCode === 37 || e.keyCode === 39) {
                            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
                        } else if (!this.weekOfDateIsDisabled(focusDate)) {
                            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
                        }
                    } else if (this.viewMode === 1) {
                        if (e.keyCode === 38 || e.keyCode === 40) {
                            dir = dir * 4;
                        }
                        newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
                    } else if (this.viewMode === 2) {
                        if (e.keyCode === 38 || e.keyCode === 40) {
                            dir = dir * 4;
                        }
                        newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
                    }
                    if (newViewDate) {
                        this.focusDate = this.viewDate = newViewDate;
                        this.setValue();
                        this.fill();
                        e.preventDefault();
                    }
                    break;
                case 13: // enter
                    if (!this.o.forceParse)
                        break;
                    focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
                    if (this.o.keyboardNavigation) {
                        this._toggle_multidate(focusDate);
                        dateChanged = true;
                    }
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    if (this.picker.is(':visible')) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (this.o.autoclose)
                            this.hide();
                    }
                    break;
                case 9: // tab
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide();
                    break;
            }
            if (dateChanged) {
                if (this.dates.length)
                    this._trigger('changeDate');
                else
                    this._trigger('clearDate');
                this.inputField.trigger('change');
            }
        },

        setViewMode: function (viewMode) {
            this.viewMode = viewMode;
            this.picker
                .children('div')
                .hide()
                .filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
                .show();
            this.updateNavArrows();
            this._trigger('changeViewMode', new Date(this.viewDate));
        }
    };

    var DateRangePicker = function (element, options) {
        $.data(element, 'datepicker', this);
        this.element = $(element);
        this.inputs = $.map(options.inputs, function (i) {
            return i.jquery ? i[0] : i;
        });
        delete options.inputs;

        this.keepEmptyValues = options.keepEmptyValues;
        delete options.keepEmptyValues;

        datepickerPlugin.call($(this.inputs), options)
            .on('changeDate', $.proxy(this.dateUpdated, this));

        this.pickers = $.map(this.inputs, function (i) {
            return $.data(i, 'datepicker');
        });
        this.updateDates();
    };
    DateRangePicker.prototype = {
        updateDates: function () {
            this.dates = $.map(this.pickers, function (i) {
                return i.getUTCDate();
            });
            this.updateRanges();
        },
        updateRanges: function () {
            var range = $.map(this.dates, function (d) {
                return d.valueOf();
            });
            $.each(this.pickers, function (i, p) {
                p.setRange(range);
            });
        },
        clearDates: function () {
            $.each(this.pickers, function (i, p) {
                p.clearDates();
            });
        },
        dateUpdated: function (e) {
            // `this.updating` is a workaround for preventing infinite recursion
            // between `changeDate` triggering and `setUTCDate` calling.  Until
            // there is a better mechanism.
            if (this.updating)
                return;
            this.updating = true;

            var dp = $.data(e.target, 'datepicker');

            if (dp === undefined) {
                return;
            }

            var new_date = dp.getUTCDate(),
                keep_empty_values = this.keepEmptyValues,
                i = $.inArray(e.target, this.inputs),
                j = i - 1,
                k = i + 1,
                l = this.inputs.length;
            if (i === -1)
                return;

            $.each(this.pickers, function (i, p) {
                if (!p.getUTCDate() && (p === dp || !keep_empty_values))
                    p.setUTCDate(new_date);
            });

            if (new_date < this.dates[j]) {
                // Date being moved earlier/left
                while (j >= 0 && new_date < this.dates[j]) {
                    this.pickers[j--].setUTCDate(new_date);
                }
            } else if (new_date > this.dates[k]) {
                // Date being moved later/right
                while (k < l && new_date > this.dates[k]) {
                    this.pickers[k++].setUTCDate(new_date);
                }
            }
            this.updateDates();

            delete this.updating;
        },
        destroy: function () {
            $.map(this.pickers, function (p) { p.destroy(); });
            $(this.inputs).off('changeDate', this.dateUpdated);
            delete this.element.data().datepicker;
        },
        remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
    };

    function opts_from_el(el, prefix) {
        // Derive options from element data-attrs
        var data = $(el).data(),
            out = {}, inkey,
            replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
        prefix = new RegExp('^' + prefix.toLowerCase());
        function re_lower(_, a) {
            return a.toLowerCase();
        }
        for (var key in data)
            if (prefix.test(key)) {
                inkey = key.replace(replace, re_lower);
                out[inkey] = data[key];
            }
        return out;
    }

    function opts_from_locale(lang) {
        // Derive options from locale plugins
        var out = {};
        // Check if "de-DE" style date is available, if not language should
        // fallback to 2 letter code eg "de"
        if (!dates[lang]) {
            lang = lang.split('-')[0];
            if (!dates[lang])
                return;
        }
        var d = dates[lang];
        $.each(locale_opts, function (i, k) {
            if (k in d)
                out[k] = d[k];
        });
        return out;
    }

    var old = $.fn.datepicker;
    var datepickerPlugin = function (option) {
        var args = Array.apply(null, arguments);
        args.shift();
        var internal_return;
        this.each(function () {
            var $this = $(this),
                data = $this.data('datepicker'),
                options = typeof option === 'object' && option;
            if (!data) {
                var elopts = opts_from_el(this, 'date'),
                    // Preliminary otions
                    xopts = $.extend({}, defaults, elopts, options),
                    locopts = opts_from_locale(xopts.language),
                    // Options priority: js args, data-attrs, locales, defaults
                    opts = $.extend({}, defaults, locopts, elopts, options);
                if ($this.hasClass('input-daterange') || opts.inputs) {
                    $.extend(opts, {
                        inputs: opts.inputs || $this.find('input').toArray()
                    });
                    data = new DateRangePicker(this, opts);
                }
                else {
                    data = new Datepicker(this, opts);
                }
                $this.data('datepicker', data);
            }
            if (typeof option === 'string' && typeof data[option] === 'function') {
                internal_return = data[option].apply(data, args);
            }
        });

        if (
            internal_return === undefined ||
            internal_return instanceof Datepicker ||
            internal_return instanceof DateRangePicker
        )
            return this;

        if (this.length > 1)
            throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
        else
            return internal_return;
    };
    $.fn.datepicker = datepickerPlugin;

    var defaults = $.fn.datepicker.defaults = {
        assumeNearbyYear: false,
        autoclose: false,
        beforeShowDay: $.noop,
        beforeShowMonth: $.noop,
        beforeShowYear: $.noop,
        beforeShowDecade: $.noop,
        beforeShowCentury: $.noop,
        calendarWeeks: false,
        clearBtn: false,
        toggleActive: false,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: 'mm/dd/yyyy',
        keepEmptyValues: false,
        keyboardNavigation: true,
        language: 'en',
        minViewMode: 0,
        maxViewMode: 4,
        multidate: false,
        multidateSeparator: ',',
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: false,
        updateViewDate: true,
        weekStart: 0,
        disableTouchKeyboard: false,
        enableOnReadonly: true,
        showOnFocus: true,
        zIndexOffset: 10,
        container: 'body',
        immediateUpdates: false,
        title: '',
        templates: {
            leftArrow: '&#x00AB;',
            rightArrow: '&#x00BB;'
        },
        showWeekDays: true
    };
    var locale_opts = $.fn.datepicker.locale_opts = [
        'format',
        'rtl',
        'weekStart'
    ];
    $.fn.datepicker.Constructor = Datepicker;
    var dates = $.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    };

    var DPGlobal = {
        viewModes: [
            {
                names: ['days', 'month'],
                clsName: 'days',
                e: 'changeMonth'
            },
            {
                names: ['months', 'year'],
                clsName: 'months',
                e: 'changeYear',
                navStep: 1
            },
            {
                names: ['years', 'decade'],
                clsName: 'years',
                e: 'changeDecade',
                navStep: 10
            },
            {
                names: ['decades', 'century'],
                clsName: 'decades',
                e: 'changeCentury',
                navStep: 100
            },
            {
                names: ['centuries', 'millennium'],
                clsName: 'centuries',
                e: 'changeMillennium',
                navStep: 1000
            }
        ],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (format) {
            if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
            // so it's a bad format delimiter, anyway
            var separators = format.replace(this.validParts, '\0').split('\0'),
                parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0) {
                throw new Error("Invalid date format.");
            }
            return { separators: separators, parts: parts };
        },
        parseDate: function (date, format, language, assumeNearby) {
            if (!date)
                return undefined;
            if (date instanceof Date)
                return date;
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            if (format.toValue)
                return format.toValue(date, format, language);
            var fn_map = {
                d: 'moveDay',
                m: 'moveMonth',
                w: 'moveWeek',
                y: 'moveYear'
            },
                dateAliases = {
                    yesterday: '-1d',
                    today: '+0d',
                    tomorrow: '+1d'
                },
                parts, part, dir, i, fn;
            if (date in dateAliases) {
                date = dateAliases[date];
            }
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)) {
                parts = date.match(/([\-+]\d+)([dmwy])/gi);
                date = new Date();
                for (i = 0; i < parts.length; i++) {
                    part = parts[i].match(/([\-+]\d+)([dmwy])/i);
                    dir = Number(part[1]);
                    fn = fn_map[part[2].toLowerCase()];
                    date = Datepicker.prototype[fn](date, dir);
                }
                return Datepicker.prototype._zero_utc_time(date);
            }

            parts = date && date.match(this.nonpunctuation) || [];

            function applyNearbyYear(year, threshold) {
                if (threshold === true)
                    threshold = 10;

                // if year is 2 digits or less, than the user most likely is trying to get a recent century
                if (year < 100) {
                    year += 2000;
                    // if the new year is more than threshold years in advance, use last century
                    if (year > ((new Date()).getFullYear() + threshold)) {
                        year -= 100;
                    }
                }

                return year;
            }

            var parsed = {},
                setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
                setters_map = {
                    yyyy: function (d, v) {
                        return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
                    },
                    m: function (d, v) {
                        if (isNaN(d))
                            return d;
                        v -= 1;
                        while (v < 0) v += 12;
                        v %= 12;
                        d.setUTCMonth(v);
                        while (d.getUTCMonth() !== v)
                            d.setUTCDate(d.getUTCDate() - 1);
                        return d;
                    },
                    d: function (d, v) {
                        return d.setUTCDate(v);
                    }
                },
                val, filtered;
            setters_map['yy'] = setters_map['yyyy'];
            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
            setters_map['dd'] = setters_map['d'];
            date = UTCToday();
            var fparts = format.parts.slice();
            // Remove noop parts
            if (parts.length !== fparts.length) {
                fparts = $(fparts).filter(function (i, p) {
                    return $.inArray(p, setters_order) !== -1;
                }).toArray();
            }
            // Process remainder
            function match_part() {
                var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                return m.toLowerCase() === p.toLowerCase();
            }
            if (parts.length === fparts.length) {
                var cnt;
                for (i = 0, cnt = fparts.length; i < cnt; i++) {
                    val = parseInt(parts[i], 10);
                    part = fparts[i];
                    if (isNaN(val)) {
                        switch (part) {
                            case 'MM':
                                filtered = $(dates[language].months).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case 'M':
                                filtered = $(dates[language].monthsShort).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break;
                        }
                    }
                    parsed[part] = val;
                }
                var _date, s;
                for (i = 0; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s])) {
                        _date = new Date(date);
                        setters_map[s](_date, parsed[s]);
                        if (!isNaN(_date))
                            date = _date;
                    }
                }
            }
            return date;
        },
        formatDate: function (date, format, language) {
            if (!date)
                return '';
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
                d: date.getUTCDate(),
                D: dates[language].daysShort[date.getUTCDay()],
                DD: dates[language].days[date.getUTCDay()],
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.dd = (val.d < 10 ? '0' : '') + val.d;
            val.mm = (val.m < 10 ? '0' : '') + val.m;
            date = [];
            var seps = $.extend([], format.separators);
            for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
                if (seps.length)
                    date.push(seps.shift());
                date.push(val[format.parts[i]]);
            }
            return date.join('');
        },
        headTemplate: '<thead>' +
            '<tr>' +
            '<th colspan="7" class="datepicker-title"></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="prev">' + defaults.templates.leftArrow + '</th>' +
            '<th colspan="5" class="datepicker-switch"></th>' +
            '<th class="next">' + defaults.templates.rightArrow + '</th>' +
            '</tr>' +
            '</thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot>' +
            '<tr>' +
            '<th colspan="7" class="today"></th>' +
            '</tr>' +
            '<tr>' +
            '<th colspan="7" class="clear"></th>' +
            '</tr>' +
            '</tfoot>'
    };
    DPGlobal.template = '<div class="datepicker">' +
        '<div class="datepicker-days">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        '<tbody></tbody>' +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-months">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-years">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-decades">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-centuries">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '</div>';

    $.fn.datepicker.DPGlobal = DPGlobal;


    /* DATEPICKER NO CONFLICT
    * =================== */

    $.fn.datepicker.noConflict = function () {
        $.fn.datepicker = old;
        return this;
    };

    /* DATEPICKER VERSION
     * =================== */
    $.fn.datepicker.version = '1.9.0';

    $.fn.datepicker.deprecated = function (msg) {
        var console = window.console;
        if (console && console.warn) {
            console.warn('DEPRECATED: ' + msg);
        }
    };


    /* DATEPICKER DATA-API
    * ================== */

    $(document).on(
        'focus.datepicker.data-api click.datepicker.data-api',
        '[data-provide="datepicker"]',
        function (e) {
            var $this = $(this);
            if ($this.data('datepicker'))
                return;
            e.preventDefault();
            // component click requires us to explicitly show it
            datepickerPlugin.call($this, 'show');
        }
    );
    $(function () {
        datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
    });

}));

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function (window) {
    /*jshint eqnull:true */
    var ua = navigator.userAgent;

    if (window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45)) {
        addEventListener("resize", (function () {
            var timer;

            var dummySrc = document.createElement("source");

            var fixRespimg = function (img) {
                var source, sizes;
                var picture = img.parentNode;

                if (picture.nodeName.toUpperCase() === "PICTURE") {
                    source = dummySrc.cloneNode();

                    picture.insertBefore(source, picture.firstElementChild);
                    setTimeout(function () {
                        picture.removeChild(source);
                    });
                } else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
                    img._pfLastSize = img.offsetWidth;
                    sizes = img.sizes;
                    img.sizes += ",100vw";
                    setTimeout(function () {
                        img.sizes = sizes;
                    });
                }
            };

            var findPictureImgs = function () {
                var i;
                var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (i = 0; i < imgs.length; i++) {
                    fixRespimg(imgs[i]);
                }
            };
            var onResize = function () {
                clearTimeout(timer);
                timer = setTimeout(findPictureImgs, 99);
            };
            var mq = window.matchMedia && matchMedia("(orientation: landscape)");
            var init = function () {
                onResize();

                if (mq && mq.addListener) {
                    mq.addListener(onResize);
                }
            };

            dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

            if (/^[c|i]|d$/.test(document.readyState || "")) {
                init();
            } else {
                document.addEventListener("DOMContentLoaded", init);
            }

            return onResize;
        })());
    }
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function (window, document, undefined) {
    // Enable strict mode
    "use strict";

    // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
    document.createElement("picture");

    var warn, eminpx, alwaysCheckWDescriptor, evalId;
    // local object for method references and testing exposure
    var pf = {};
    var isSupportTestReady = false;
    var noop = function () { };
    var image = document.createElement("img");
    var getImgAttr = image.getAttribute;
    var setImgAttr = image.setAttribute;
    var removeImgAttr = image.removeAttribute;
    var docElem = document.documentElement;
    var types = {};
    var cfg = {
        //resource selection:
        algorithm: ""
    };
    var srcAttr = "data-pfsrc";
    var srcsetAttr = srcAttr + "set";
    // ua sniffing is done for undetectable img loading features,
    // to do some non crucial perf optimizations
    var ua = navigator.userAgent;
    var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35);
    var curSrcProp = "currentSrc";
    var regWDesc = /\s+\+?\d+(e\d+)?w/;
    var regSize = /(\([^)]+\))?\s*(.+)/;
    var setOptions = window.picturefillCFG;
    /**
     * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
     */
    // baseStyle also used by getEmValue (i.e.: width: 1em is important)
    var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
    var fsCss = "font-size:100%!important;";
    var isVwDirty = true;

    var cssCache = {};
    var sizeLengthCache = {};
    var DPR = window.devicePixelRatio;
    var units = {
        px: 1,
        "in": 96
    };
    var anchor = document.createElement("a");
    /**
     * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
     * @type {boolean}
     */
    var alreadyRun = false;

    // Reusable, non-"g" Regexes

    // (Don't use \s, to avoid matching non-breaking space.)
    var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
        regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
        regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
        regexTrailingCommas = /[,]+$/,
        regexNonNegativeInteger = /^\d+$/,

        // ( Positive or negative or unsigned integers or decimals, without or without exponents.
        // Must include at least one digit.
        // According to spec tests any decimal point must be followed by a digit.
        // No leading plus sign is allowed.)
        // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
        regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

    var on = function (obj, evt, fn, capture) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, capture || false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn);
        }
    };

    /**
     * simple memoize function:
     */

    var memoize = function (fn) {
        var cache = {};
        return function (input) {
            if (!(input in cache)) {
                cache[input] = fn(input);
            }
            return cache[input];
        };
    };

    // UTILITY FUNCTIONS

    // Manual is faster than RegEx
    // http://jsperf.com/whitespace-character/5
    function isSpace(c) {
        return (c === "\u0020" || // space
            c === "\u0009" || // horizontal tab
            c === "\u000A" || // new line
            c === "\u000C" || // form feed
            c === "\u000D");  // carriage return
    }

    /**
     * gets a mediaquery and returns a boolean or gets a css length and returns a number
     * @param css mediaqueries or css length
     * @returns {boolean|number}
     *
     * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
     */
    var evalCSS = (function () {

        var regLength = /^([\d\.]+)(em|vw|px)$/;
        var replace = function () {
            var args = arguments, index = 0, string = args[0];
            while (++index in args) {
                string = string.replace(args[index], args[++index]);
            }
            return string;
        };

        var buildStr = memoize(function (css) {

            return "return " + replace((css || "").toLowerCase(),
                // interpret `and`
                /\band\b/g, "&&",

                // interpret `,`
                /,/g, "||",

                // interpret `min-` as >=
                /min-([a-z-\s]+):/g, "e.$1>=",

                // interpret `max-` as <=
                /max-([a-z-\s]+):/g, "e.$1<=",

                //calc value
                /calc([^)]+)/g, "($1)",

                // interpret css values
                /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
                //make eval less evil
                /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
            ) + ";";
        });

        return function (css, length) {
            var parsedLength;
            if (!(css in cssCache)) {
                cssCache[css] = false;
                if (length && (parsedLength = css.match(regLength))) {
                    cssCache[css] = parsedLength[1] * units[parsedLength[2]];
                } else {
                    /*jshint evil:true */
                    try {
                        cssCache[css] = new Function("e", buildStr(css))(units);
                    } catch (e) { }
                    /*jshint evil:false */
                }
            }
            return cssCache[css];
        };
    })();

    var setResolution = function (candidate, sizesattr) {
        if (candidate.w) { // h = means height: || descriptor.type === 'h' do not handle yet...
            candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
            candidate.res = candidate.w / candidate.cWidth;
        } else {
            candidate.res = candidate.d;
        }
        return candidate;
    };

    /**
     *
     * @param opt
     */
    var picturefill = function (opt) {

        if (!isSupportTestReady) { return; }

        var elements, i, plen;

        var options = opt || {};

        if (options.elements && options.elements.nodeType === 1) {
            if (options.elements.nodeName.toUpperCase() === "IMG") {
                options.elements = [options.elements];
            } else {
                options.context = options.elements;
                options.elements = null;
            }
        }

        elements = options.elements || pf.qsa((options.context || document), (options.reevaluate || options.reselect) ? pf.sel : pf.selShort);

        if ((plen = elements.length)) {

            pf.setupRun(options);
            alreadyRun = true;

            // Loop through all elements
            for (i = 0; i < plen; i++) {
                pf.fillImg(elements[i], options);
            }

            pf.teardownRun(options);
        }
    };

    /**
     * outputs a warning for the developer
     * @param {message}
     * @type {Function}
     */
    warn = (window.console && console.warn) ?
        function (message) {
            console.warn(message);
        } :
        noop
        ;

    if (!(curSrcProp in image)) {
        curSrcProp = "src";
    }

    // Add support for standard mime types.
    types["image/jpeg"] = true;
    types["image/gif"] = true;
    types["image/png"] = true;

    function detectTypeSupport(type, typeUri) {
        // based on Modernizr's lossless img-webp test
        // note: asynchronous
        var image = new window.Image();
        image.onerror = function () {
            types[type] = false;
            picturefill();
        };
        image.onload = function () {
            types[type] = image.width === 1;
            picturefill();
        };
        image.src = typeUri;
        return "pending";
    }

    // test svg support
    types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

    /**
     * updates the internal vW property with the current viewport width in px
     */
    function updateMetrics() {

        isVwDirty = false;
        DPR = window.devicePixelRatio;
        cssCache = {};
        sizeLengthCache = {};

        pf.DPR = DPR || 1;

        units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
        units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

        units.vw = units.width / 100;
        units.vh = units.height / 100;

        evalId = [units.height, units.width, DPR].join("-");

        units.em = pf.getEmValue();
        units.rem = units.em;
    }

    function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
        var bonusFactor, tooMuch, bonus, meanDensity;

        //experimental
        if (cfg.algorithm === "saveData") {
            if (lowerValue > 2.7) {
                meanDensity = dprValue + 1;
            } else {
                tooMuch = higherValue - dprValue;
                bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

                bonus = tooMuch * bonusFactor;

                if (isCached) {
                    bonus += 0.1 * bonusFactor;
                }

                meanDensity = lowerValue + bonus;
            }
        } else {
            meanDensity = (dprValue > 1) ?
                Math.sqrt(lowerValue * higherValue) :
                lowerValue;
        }

        return meanDensity > dprValue;
    }

    function applyBestCandidate(img) {
        var srcSetCandidates;
        var matchingSet = pf.getSet(img);
        var evaluated = false;
        if (matchingSet !== "pending") {
            evaluated = evalId;
            if (matchingSet) {
                srcSetCandidates = pf.setRes(matchingSet);
                pf.applySetCandidate(srcSetCandidates, img);
            }
        }
        img[pf.ns].evaled = evaluated;
    }

    function ascendingSort(a, b) {
        return a.res - b.res;
    }

    function setSrcToCur(img, src, set) {
        var candidate;
        if (!set && src) {
            set = img[pf.ns].sets;
            set = set && set[set.length - 1];
        }

        candidate = getCandidateForSrc(src, set);

        if (candidate) {
            src = pf.makeUrl(src);
            img[pf.ns].curSrc = src;
            img[pf.ns].curCan = candidate;

            if (!candidate.res) {
                setResolution(candidate, candidate.set.sizes);
            }
        }
        return candidate;
    }

    function getCandidateForSrc(src, set) {
        var i, candidate, candidates;
        if (src && set) {
            candidates = pf.parseSet(set);
            src = pf.makeUrl(src);
            for (i = 0; i < candidates.length; i++) {
                if (src === pf.makeUrl(candidates[i].url)) {
                    candidate = candidates[i];
                    break;
                }
            }
        }
        return candidate;
    }

    function getAllSourceElements(picture, candidates) {
        var i, len, source, srcset;

        // SPEC mismatch intended for size and perf:
        // actually only source elements preceding the img should be used
        // also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
        var sources = picture.getElementsByTagName("source");

        for (i = 0, len = sources.length; i < len; i++) {
            source = sources[i];
            source[pf.ns] = true;
            srcset = source.getAttribute("srcset");

            // if source does not have a srcset attribute, skip
            if (srcset) {
                candidates.push({
                    srcset: srcset,
                    media: source.getAttribute("media"),
                    type: source.getAttribute("type"),
                    sizes: source.getAttribute("sizes")
                });
            }
        }
    }

    /**
     * Srcset Parser
     * By Alex Bell |  MIT License
     *
     * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
     *
     * Based super duper closely on the reference algorithm at:
     * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
     */

    // 1. Let input be the value passed to this algorithm.
    // (TO-DO : Explain what "set" argument is here. Maybe choose a more
    // descriptive & more searchable name.  Since passing the "set" in really has
    // nothing to do with parsing proper, I would prefer this assignment eventually
    // go in an external fn.)
    function parseSrcset(input, set) {

        function collectCharacters(regEx) {
            var chars,
                match = regEx.exec(input.substring(pos));
            if (match) {
                chars = match[0];
                pos += chars.length;
                return chars;
            }
        }

        var inputLength = input.length,
            url,
            descriptors,
            currentDescriptor,
            state,
            c,

            // 2. Let position be a pointer into input, initially pointing at the start
            //    of the string.
            pos = 0,

            // 3. Let candidates be an initially empty source set.
            candidates = [];

        /**
        * Adds descriptor properties to a candidate, pushes to the candidates array
        * @return undefined
        */
        // (Declared outside of the while loop so that it's only created once.
        // (This fn is defined before it is used, in order to pass JSHINT.
        // Unfortunately this breaks the sequencing of the spec comments. :/ )
        function parseDescriptors() {

            // 9. Descriptor parser: Let error be no.
            var pError = false,

                // 10. Let width be absent.
                // 11. Let density be absent.
                // 12. Let future-compat-h be absent. (We're implementing it now as h)
                w, d, h, i,
                candidate = {},
                desc, lastChar, value, intVal, floatVal;

            // 13. For each descriptor in descriptors, run the appropriate set of steps
            // from the following list:
            for (i = 0; i < descriptors.length; i++) {
                desc = descriptors[i];

                lastChar = desc[desc.length - 1];
                value = desc.substring(0, desc.length - 1);
                intVal = parseInt(value, 10);
                floatVal = parseFloat(value);

                // If the descriptor consists of a valid non-negative integer followed by
                // a U+0077 LATIN SMALL LETTER W character
                if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

                    // If width and density are not both absent, then let error be yes.
                    if (w || d) { pError = true; }

                    // Apply the rules for parsing non-negative integers to the descriptor.
                    // If the result is zero, let error be yes.
                    // Otherwise, let width be the result.
                    if (intVal === 0) { pError = true; } else { w = intVal; }

                    // If the descriptor consists of a valid floating-point number followed by
                    // a U+0078 LATIN SMALL LETTER X character
                } else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

                    // If width, density and future-compat-h are not all absent, then let error
                    // be yes.
                    if (w || d || h) { pError = true; }

                    // Apply the rules for parsing floating-point number values to the descriptor.
                    // If the result is less than zero, let error be yes. Otherwise, let density
                    // be the result.
                    if (floatVal < 0) { pError = true; } else { d = floatVal; }

                    // If the descriptor consists of a valid non-negative integer followed by
                    // a U+0068 LATIN SMALL LETTER H character
                } else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

                    // If height and density are not both absent, then let error be yes.
                    if (h || d) { pError = true; }

                    // Apply the rules for parsing non-negative integers to the descriptor.
                    // If the result is zero, let error be yes. Otherwise, let future-compat-h
                    // be the result.
                    if (intVal === 0) { pError = true; } else { h = intVal; }

                    // Anything else, Let error be yes.
                } else { pError = true; }
            } // (close step 13 for loop)

            // 15. If error is still no, then append a new image source to candidates whose
            // URL is url, associated with a width width if not absent and a pixel
            // density density if not absent. Otherwise, there is a parse error.
            if (!pError) {
                candidate.url = url;

                if (w) { candidate.w = w; }
                if (d) { candidate.d = d; }
                if (h) { candidate.h = h; }
                if (!h && !d && !w) { candidate.d = 1; }
                if (candidate.d === 1) { set.has1x = true; }
                candidate.set = set;

                candidates.push(candidate);
            }
        } // (close parseDescriptors fn)

        /**
        * Tokenizes descriptor properties prior to parsing
        * Returns undefined.
        * (Again, this fn is defined before it is used, in order to pass JSHINT.
        * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
        */
        function tokenize() {

            // 8.1. Descriptor tokeniser: Skip whitespace
            collectCharacters(regexLeadingSpaces);

            // 8.2. Let current descriptor be the empty string.
            currentDescriptor = "";

            // 8.3. Let state be in descriptor.
            state = "in descriptor";

            while (true) {

                // 8.4. Let c be the character at position.
                c = input.charAt(pos);

                //  Do the following depending on the value of state.
                //  For the purpose of this step, "EOF" is a special character representing
                //  that position is past the end of input.

                // In descriptor
                if (state === "in descriptor") {
                    // Do the following, depending on the value of c:

                    // Space character
                    // If current descriptor is not empty, append current descriptor to
                    // descriptors and let current descriptor be the empty string.
                    // Set state to after descriptor.
                    if (isSpace(c)) {
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                            currentDescriptor = "";
                            state = "after descriptor";
                        }

                        // U+002C COMMA (,)
                        // Advance position to the next character in input. If current descriptor
                        // is not empty, append current descriptor to descriptors. Jump to the step
                        // labeled descriptor parser.
                    } else if (c === ",") {
                        pos += 1;
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                        }
                        parseDescriptors();
                        return;

                        // U+0028 LEFT PARENTHESIS (()
                        // Append c to current descriptor. Set state to in parens.
                    } else if (c === "\u0028") {
                        currentDescriptor = currentDescriptor + c;
                        state = "in parens";

                        // EOF
                        // If current descriptor is not empty, append current descriptor to
                        // descriptors. Jump to the step labeled descriptor parser.
                    } else if (c === "") {
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                        }
                        parseDescriptors();
                        return;

                        // Anything else
                        // Append c to current descriptor.
                    } else {
                        currentDescriptor = currentDescriptor + c;
                    }
                    // (end "in descriptor"

                    // In parens
                } else if (state === "in parens") {

                    // U+0029 RIGHT PARENTHESIS ())
                    // Append c to current descriptor. Set state to in descriptor.
                    if (c === ")") {
                        currentDescriptor = currentDescriptor + c;
                        state = "in descriptor";

                        // EOF
                        // Append current descriptor to descriptors. Jump to the step labeled
                        // descriptor parser.
                    } else if (c === "") {
                        descriptors.push(currentDescriptor);
                        parseDescriptors();
                        return;

                        // Anything else
                        // Append c to current descriptor.
                    } else {
                        currentDescriptor = currentDescriptor + c;
                    }

                    // After descriptor
                } else if (state === "after descriptor") {

                    // Do the following, depending on the value of c:
                    // Space character: Stay in this state.
                    if (isSpace(c)) {

                        // EOF: Jump to the step labeled descriptor parser.
                    } else if (c === "") {
                        parseDescriptors();
                        return;

                        // Anything else
                        // Set state to in descriptor. Set position to the previous character in input.
                    } else {
                        state = "in descriptor";
                        pos -= 1;

                    }
                }

                // Advance position to the next character in input.
                pos += 1;

                // Repeat this step.
            } // (close while true loop)
        }

        // 4. Splitting loop: Collect a sequence of characters that are space
        //    characters or U+002C COMMA characters. If any U+002C COMMA characters
        //    were collected, that is a parse error.
        while (true) {
            collectCharacters(regexLeadingCommasOrSpaces);

            // 5. If position is past the end of input, return candidates and abort these steps.
            if (pos >= inputLength) {
                return candidates; // (we're done, this is the sole return path)
            }

            // 6. Collect a sequence of characters that are not space characters,
            //    and let that be url.
            url = collectCharacters(regexLeadingNotSpaces);

            // 7. Let descriptors be a new empty list.
            descriptors = [];

            // 8. If url ends with a U+002C COMMA character (,), follow these substeps:
            //		(1). Remove all trailing U+002C COMMA characters from url. If this removed
            //         more than one character, that is a parse error.
            if (url.slice(-1) === ",") {
                url = url.replace(regexTrailingCommas, "");
                // (Jump ahead to step 9 to skip tokenization and just push the candidate).
                parseDescriptors();

                //	Otherwise, follow these substeps:
            } else {
                tokenize();
            } // (close else of step 8)

            // 16. Return to the step labeled splitting loop.
        } // (Close of big while loop.)
    }

    /*
     * Sizes Parser
     *
     * By Alex Bell |  MIT License
     *
     * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
     *
     * Reference algorithm at:
     * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
     *
     * Most comments are copied in directly from the spec
     * (except for comments in parens).
     *
     * Grammar is:
     * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
     * <source-size> = <media-condition> <source-size-value>
     * <source-size-value> = <length>
     * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
     *
     * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
     * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
     *
     * Returns the first valid <css-length> with a media condition that evaluates to true,
     * or "100vw" if all valid media conditions evaluate to false.
     *
     */

    function parseSizes(strValue) {

        // (Percentage CSS lengths are not allowed in this case, to avoid confusion:
        // https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
        // CSS allows a single optional plus or minus sign:
        // http://www.w3.org/TR/CSS2/syndata.html#numbers
        // CSS is ASCII case-insensitive:
        // http://www.w3.org/TR/CSS2/syndata.html#characters )
        // Spec allows exponential notation for <number> type:
        // http://dev.w3.org/csswg/css-values/#numbers
        var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

        // (This is a quick and lenient test. Because of optional unlimited-depth internal
        // grouping parens and strict spacing rules, this could get very complicated.)
        var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

        var i;
        var unparsedSizesList;
        var unparsedSizesListLength;
        var unparsedSize;
        var lastComponentValue;
        var size;

        // UTILITY FUNCTIONS

        //  (Toy CSS parser. The goals here are:
        //  1) expansive test coverage without the weight of a full CSS parser.
        //  2) Avoiding regex wherever convenient.
        //  Quick tests: http://jsfiddle.net/gtntL4gr/3/
        //  Returns an array of arrays.)
        function parseComponentValues(str) {
            var chrctr;
            var component = "";
            var componentArray = [];
            var listArray = [];
            var parenDepth = 0;
            var pos = 0;
            var inComment = false;

            function pushComponent() {
                if (component) {
                    componentArray.push(component);
                    component = "";
                }
            }

            function pushComponentArray() {
                if (componentArray[0]) {
                    listArray.push(componentArray);
                    componentArray = [];
                }
            }

            // (Loop forwards from the beginning of the string.)
            while (true) {
                chrctr = str.charAt(pos);

                if (chrctr === "") { // ( End of string reached.)
                    pushComponent();
                    pushComponentArray();
                    return listArray;
                } else if (inComment) {
                    if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
                        inComment = false;
                        pos += 2;
                        pushComponent();
                        continue;
                    } else {
                        pos += 1; // (Skip all characters inside comments.)
                        continue;
                    }
                } else if (isSpace(chrctr)) {
                    // (If previous character in loop was also a space, or if
                    // at the beginning of the string, do not add space char to
                    // component.)
                    if ((str.charAt(pos - 1) && isSpace(str.charAt(pos - 1))) || !component) {
                        pos += 1;
                        continue;
                    } else if (parenDepth === 0) {
                        pushComponent();
                        pos += 1;
                        continue;
                    } else {
                        // (Replace any space character with a plain space for legibility.)
                        chrctr = " ";
                    }
                } else if (chrctr === "(") {
                    parenDepth += 1;
                } else if (chrctr === ")") {
                    parenDepth -= 1;
                } else if (chrctr === ",") {
                    pushComponent();
                    pushComponentArray();
                    pos += 1;
                    continue;
                } else if ((chrctr === "/") && (str.charAt(pos + 1) === "*")) {
                    inComment = true;
                    pos += 2;
                    continue;
                }

                component = component + chrctr;
                pos += 1;
            }
        }

        function isValidNonNegativeSourceSizeValue(s) {
            if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) { return true; }
            if (regexCssCalc.test(s)) { return true; }
            // ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
            // "-0 is equivalent to 0 and is not a negative number." which means that
            // unitless zero and unitless negative zero must be accepted as special cases.)
            if ((s === "0") || (s === "-0") || (s === "+0")) { return true; }
            return false;
        }

        // When asked to parse a sizes attribute from an element, parse a
        // comma-separated list of component values from the value of the element's
        // sizes attribute (or the empty string, if the attribute is absent), and let
        // unparsed sizes list be the result.
        // http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

        unparsedSizesList = parseComponentValues(strValue);
        unparsedSizesListLength = unparsedSizesList.length;

        // For each unparsed size in unparsed sizes list:
        for (i = 0; i < unparsedSizesListLength; i++) {
            unparsedSize = unparsedSizesList[i];

            // 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
            // ( parseComponentValues() already omits spaces outside of parens. )

            // If unparsed size is now empty, that is a parse error; continue to the next
            // iteration of this algorithm.
            // ( parseComponentValues() won't push an empty array. )

            // 2. If the last component value in unparsed size is a valid non-negative
            // <source-size-value>, let size be its value and remove the component value
            // from unparsed size. Any CSS function other than the calc() function is
            // invalid. Otherwise, there is a parse error; continue to the next iteration
            // of this algorithm.
            // http://dev.w3.org/csswg/css-syntax/#parse-component-value
            lastComponentValue = unparsedSize[unparsedSize.length - 1];

            if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
                size = lastComponentValue;
                unparsedSize.pop();
            } else {
                continue;
            }

            // 3. Remove all consecutive <whitespace-token>s from the end of unparsed
            // size. If unparsed size is now empty, return size and exit this algorithm.
            // If this was not the last item in unparsed sizes list, that is a parse error.
            if (unparsedSize.length === 0) {
                return size;
            }

            // 4. Parse the remaining component values in unparsed size as a
            // <media-condition>. If it does not parse correctly, or it does parse
            // correctly but the <media-condition> evaluates to false, continue to the
            // next iteration of this algorithm.
            // (Parsing all possible compound media conditions in JS is heavy, complicated,
            // and the payoff is unclear. Is there ever an situation where the
            // media condition parses incorrectly but still somehow evaluates to true?
            // Can we just rely on the browser/polyfill to do it?)
            unparsedSize = unparsedSize.join(" ");
            if (!(pf.matchesMedia(unparsedSize))) {
                continue;
            }

            // 5. Return size and exit this algorithm.
            return size;
        }

        // If the above algorithm exhausts unparsed sizes list without returning a
        // size value, return 100vw.
        return "100vw";
    }

    // namespace
    pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

    // srcset support test
    pf.supSrcset = "srcset" in image;
    pf.supSizes = "sizes" in image;
    pf.supPicture = !!window.HTMLPictureElement;

    // UC browser does claim to support srcset and picture, but not sizes,
    // this extended test reveals the browser does support nothing
    if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
        (function (image2) {
            image.srcset = "data:,a";
            image2.src = "data:,a";
            pf.supSrcset = image.complete === image2.complete;
            pf.supPicture = pf.supSrcset && pf.supPicture;
        })(document.createElement("img"));
    }

    // Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
    if (pf.supSrcset && !pf.supSizes) {

        (function () {
            var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
            var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            var img = document.createElement("img");
            var test = function () {
                var width = img.width;

                if (width === 2) {
                    pf.supSizes = true;
                }

                alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

                isSupportTestReady = true;
                // force async
                setTimeout(picturefill);
            };

            img.onload = test;
            img.onerror = test;
            img.setAttribute("sizes", "9px");

            img.srcset = width1 + " 1w," + width2 + " 9w";
            img.src = width1;
        })();

    } else {
        isSupportTestReady = true;
    }

    // using pf.qsa instead of dom traversing does scale much better,
    // especially on sites mixing responsive and non-responsive images
    pf.selShort = "picture>img,img[srcset]";
    pf.sel = pf.selShort;
    pf.cfg = cfg;

    /**
     * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
     */
    pf.DPR = (DPR || 1);
    pf.u = units;

    // container of supported mime types that one might need to qualify before using
    pf.types = types;

    pf.setSize = noop;

    /**
     * Gets a string and returns the absolute URL
     * @param src
     * @returns {String} absolute URL
     */

    pf.makeUrl = memoize(function (src) {
        anchor.href = src;
        return anchor.href;
    });

    /**
     * Gets a DOM element or document and a selctor and returns the found matches
     * Can be extended with jQuery/Sizzle for IE7 support
     * @param context
     * @param sel
     * @returns {NodeList|Array}
     */
    pf.qsa = function (context, sel) {
        return ("querySelector" in context) ? context.querySelectorAll(sel) : [];
    };

    /**
     * Shortcut method for matchMedia ( for easy overriding in tests )
     * wether native or pf.mMQ is used will be decided lazy on first call
     * @returns {boolean}
     */
    pf.matchesMedia = function () {
        if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
            pf.matchesMedia = function (media) {
                return !media || (matchMedia(media).matches);
            };
        } else {
            pf.matchesMedia = pf.mMQ;
        }

        return pf.matchesMedia.apply(this, arguments);
    };

    /**
     * A simplified matchMedia implementation for IE8 and IE9
     * handles only min-width/max-width with px or em values
     * @param media
     * @returns {boolean}
     */
    pf.mMQ = function (media) {
        return media ? evalCSS(media) : true;
    };

    /**
     * Returns the calculated length in css pixel from the given sourceSizeValue
     * http://dev.w3.org/csswg/css-values-3/#length-value
     * intended Spec mismatches:
     * * Does not check for invalid use of CSS functions
     * * Does handle a computed length of 0 the same as a negative and therefore invalid value
     * @param sourceSizeValue
     * @returns {Number}
     */
    pf.calcLength = function (sourceSizeValue) {

        var value = evalCSS(sourceSizeValue, true) || false;
        if (value < 0) {
            value = false;
        }

        return value;
    };

    /**
     * Takes a type string and checks if its supported
     */

    pf.supportsType = function (type) {
        return (type) ? types[type] : true;
    };

    /**
     * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
     * @param sourceSizeStr
     * @returns {*}
     */
    pf.parseSize = memoize(function (sourceSizeStr) {
        var match = (sourceSizeStr || "").match(regSize);
        return {
            media: match && match[1],
            length: match && match[2]
        };
    });

    pf.parseSet = function (set) {
        if (!set.cands) {
            set.cands = parseSrcset(set.srcset, set);
        }
        return set.cands;
    };

    /**
     * returns 1em in css px for html/body default size
     * function taken from respondjs
     * @returns {*|number}
     */
    pf.getEmValue = function () {
        var body;
        if (!eminpx && (body = document.body)) {
            var div = document.createElement("div"),
                originalHTMLCSS = docElem.style.cssText,
                originalBodyCSS = body.style.cssText;

            div.style.cssText = baseStyle;

            // 1em in a media query is the value of the default font size of the browser
            // reset docElem and body to ensure the correct value is returned
            docElem.style.cssText = fsCss;
            body.style.cssText = fsCss;

            body.appendChild(div);
            eminpx = div.offsetWidth;
            body.removeChild(div);

            //also update eminpx before returning
            eminpx = parseFloat(eminpx, 10);

            // restore the original values
            docElem.style.cssText = originalHTMLCSS;
            body.style.cssText = originalBodyCSS;

        }
        return eminpx || 16;
    };

    /**
     * Takes a string of sizes and returns the width in pixels as a number
     */
    pf.calcListLength = function (sourceSizeListStr) {
        // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
        //
        //                           or (min-width:30em) calc(30% - 15px)
        if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
            var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));

            sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
        }

        return sizeLengthCache[sourceSizeListStr];
    };

    /**
     * Takes a candidate object with a srcset property in the form of url/
     * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
     *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
     *     "images/pic-small.png"
     * Get an array of image candidates in the form of
     *      {url: "/foo/bar.png", resolution: 1}
     * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
     * If sizes is specified, res is calculated
     */
    pf.setRes = function (set) {
        var candidates;
        if (set) {

            candidates = pf.parseSet(set);

            for (var i = 0, len = candidates.length; i < len; i++) {
                setResolution(candidates[i], set.sizes);
            }
        }
        return candidates;
    };

    pf.setRes.res = setResolution;

    pf.applySetCandidate = function (candidates, img) {
        if (!candidates.length) { return; }
        var candidate,
            i,
            j,
            length,
            bestCandidate,
            curSrc,
            curCan,
            candidateSrc,
            abortCurSrc;

        var imageData = img[pf.ns];
        var dpr = pf.DPR;

        curSrc = imageData.curSrc || img[curSrcProp];

        curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

        // if we have a current source, we might either become lazy or give this source some advantage
        if (curCan && curCan.set === candidates[0].set) {

            // if browser can abort image request and the image has a higher pixel density than needed
            // and this image isn't downloaded yet, we skip next part and try to save bandwidth
            abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

            if (!abortCurSrc) {
                curCan.cached = true;

                // if current candidate is "best", "better" or "okay",
                // set it to bestCandidate
                if (curCan.res >= dpr) {
                    bestCandidate = curCan;
                }
            }
        }

        if (!bestCandidate) {

            candidates.sort(ascendingSort);

            length = candidates.length;
            bestCandidate = candidates[length - 1];

            for (i = 0; i < length; i++) {
                candidate = candidates[i];
                if (candidate.res >= dpr) {
                    j = i - 1;

                    // we have found the perfect candidate,
                    // but let's improve this a little bit with some assumptions ;-)
                    if (candidates[j] &&
                        (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) &&
                        chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {

                        bestCandidate = candidates[j];

                    } else {
                        bestCandidate = candidate;
                    }
                    break;
                }
            }
        }

        if (bestCandidate) {

            candidateSrc = pf.makeUrl(bestCandidate.url);

            imageData.curSrc = candidateSrc;
            imageData.curCan = bestCandidate;

            if (candidateSrc !== curSrc) {
                pf.setSrc(img, bestCandidate);
            }
            pf.setSize(img);
        }
    };

    pf.setSrc = function (img, bestCandidate) {
        var origWidth;
        img.src = bestCandidate.url;

        // although this is a specific Safari issue, we don't want to take too much different code paths
        if (bestCandidate.set.type === "image/svg+xml") {
            origWidth = img.style.width;
            img.style.width = (img.offsetWidth + 1) + "px";

            // next line only should trigger a repaint
            // if... is only done to trick dead code removal
            if (img.offsetWidth + 1) {
                img.style.width = origWidth;
            }
        }
    };

    pf.getSet = function (img) {
        var i, set, supportsType;
        var match = false;
        var sets = img[pf.ns].sets;

        for (i = 0; i < sets.length && !match; i++) {
            set = sets[i];

            if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
                continue;
            }

            if (supportsType === "pending") {
                set = supportsType;
            }

            match = set;
            break;
        }

        return match;
    };

    pf.parseSets = function (element, parent, options) {
        var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

        var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
        var imageData = element[pf.ns];

        if (imageData.src === undefined || options.src) {
            imageData.src = getImgAttr.call(element, "src");
            if (imageData.src) {
                setImgAttr.call(element, srcAttr, imageData.src);
            } else {
                removeImgAttr.call(element, srcAttr);
            }
        }

        if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
            srcsetAttribute = getImgAttr.call(element, "srcset");
            imageData.srcset = srcsetAttribute;
            srcsetParsed = true;
        }

        imageData.sets = [];

        if (hasPicture) {
            imageData.pic = true;
            getAllSourceElements(parent, imageData.sets);
        }

        if (imageData.srcset) {
            imageSet = {
                srcset: imageData.srcset,
                sizes: getImgAttr.call(element, "sizes")
            };

            imageData.sets.push(imageSet);

            isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

            // add normal src as candidate, if source has no w descriptor
            if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
                imageSet.srcset += ", " + imageData.src;
                imageSet.cands.push({
                    url: imageData.src,
                    d: 1,
                    set: imageSet
                });
            }

        } else if (imageData.src) {
            imageData.sets.push({
                srcset: imageData.src,
                sizes: null
            });
        }

        imageData.curCan = null;
        imageData.curSrc = undefined;

        // if img has picture or the srcset was removed or has a srcset and does not support srcset at all
        // or has a w descriptor (and does not support sizes) set support to false to evaluate
        imageData.supported = !(hasPicture || (imageSet && !pf.supSrcset) || (isWDescripor && !pf.supSizes));

        if (srcsetParsed && pf.supSrcset && !imageData.supported) {
            if (srcsetAttribute) {
                setImgAttr.call(element, srcsetAttr, srcsetAttribute);
                element.srcset = "";
            } else {
                removeImgAttr.call(element, srcsetAttr);
            }
        }

        if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) || element.src !== pf.makeUrl(imageData.src))) {
            if (imageData.src === null) {
                element.removeAttribute("src");
            } else {
                element.src = imageData.src;
            }
        }

        imageData.parsed = true;
    };

    pf.fillImg = function (element, options) {
        var imageData;
        var extreme = options.reselect || options.reevaluate;

        // expando for caching data on the img
        if (!element[pf.ns]) {
            element[pf.ns] = {};
        }

        imageData = element[pf.ns];

        // if the element has already been evaluated, skip it
        // unless `options.reevaluate` is set to true ( this, for example,
        // is set to true when running `picturefill` on `resize` ).
        if (!extreme && imageData.evaled === evalId) {
            return;
        }

        if (!imageData.parsed || options.reevaluate) {
            pf.parseSets(element, element.parentNode, options);
        }

        if (!imageData.supported) {
            applyBestCandidate(element);
        } else {
            imageData.evaled = evalId;
        }
    };

    pf.setupRun = function () {
        if (!alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio)) {
            updateMetrics();
        }
    };

    // If picture is supported, well, that's awesome.
    if (pf.supPicture) {
        picturefill = noop;
        pf.fillImg = noop;
    } else {

        // Set up picture polyfill by polling the document
        (function () {
            var isDomReady;
            var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

            var run = function () {
                var readyState = document.readyState || "";

                timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
                if (document.body) {
                    pf.fillImgs();
                    isDomReady = isDomReady || regReady.test(readyState);
                    if (isDomReady) {
                        clearTimeout(timerId);
                    }

                }
            };

            var timerId = setTimeout(run, document.body ? 9 : 99);

            // Also attach picturefill on resize and readystatechange
            // http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
            var debounce = function (func, wait) {
                var timeout, timestamp;
                var later = function () {
                    var last = (new Date()) - timestamp;

                    if (last < wait) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        func();
                    }
                };

                return function () {
                    timestamp = new Date();

                    if (!timeout) {
                        timeout = setTimeout(later, wait);
                    }
                };
            };
            var lastClientWidth = docElem.clientHeight;
            var onResize = function () {
                isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
                lastClientWidth = docElem.clientHeight;
                if (isVwDirty) {
                    pf.fillImgs();
                }
            };

            on(window, "resize", debounce(onResize, 99));
            on(document, "readystatechange", run);
        })();
    }

    pf.picturefill = picturefill;
    //use this internally for easy monkey patching/performance testing
    pf.fillImgs = picturefill;
    pf.teardownRun = noop;

    /* expose methods for testing */
    picturefill._ = pf;

    window.picturefillCFG = {
        pf: pf,
        push: function (args) {
            var name = args.shift();
            if (typeof pf[name] === "function") {
                pf[name].apply(pf, args);
            } else {
                cfg[name] = args[0];
                if (alreadyRun) {
                    pf.fillImgs({ reselect: true });
                }
            }
        }
    };

    while (setOptions && setOptions.length) {
        window.picturefillCFG.push(setOptions.shift());
    }

    /* expose picturefill */
    window.picturefill = picturefill;

    /* expose picturefill */
    if (typeof module === "object" && typeof module.exports === "object") {
        // CommonJS, just export
        module.exports = picturefill;
    } else if (typeof define === "function" && define.amd) {
        // AMD support
        define("picturefill", function () { return picturefill; });
    }

    // IE8 evals this sync, so it must be the last thing we do
    if (!pf.supPicture) {
        types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
    }

})(window, document);
/*
 * Stellarnav.js 2.6.0
 * Responsive, lightweight, multi-level dropdown menu.
 * Copyright (c) 2018 Vinny Moreira - http://vinnymoreira.com
 * Released under the MIT license
 */
window.mobileAndTabletcheck = function () {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

!function (factory) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof module && module.exports ? module.exports = factory(require("jquery")) : jQuery && !jQuery.fn.hoverIntent && factory(jQuery) }(function ($) { "use strict"; var cX, cY, _cfg = { interval: 100, sensitivity: 6, timeout: 0 }, INSTANCE_COUNT = 0, track = function (ev) { cX = ev.pageX, cY = ev.pageY }, compare = function (ev, $el, s, cfg) { if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) return $el.off(s.event, track), delete s.timeoutId, s.isActive = !0, ev.pageX = cX, ev.pageY = cY, delete s.pX, delete s.pY, cfg.over.apply($el[0], [ev]); s.pX = cX, s.pY = cY, s.timeoutId = setTimeout(function () { compare(ev, $el, s, cfg) }, cfg.interval) }; $.fn.hoverIntent = function (handlerIn, handlerOut, selector) { var instanceId = INSTANCE_COUNT++, cfg = $.extend({}, _cfg); $.isPlainObject(handlerIn) ? (cfg = $.extend(cfg, handlerIn), $.isFunction(cfg.out) || (cfg.out = cfg.over)) : cfg = $.isFunction(handlerOut) ? $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector }) : $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut }); var handleHover = function (e) { var ev = $.extend({}, e), $el = $(this), hoverIntentData = $el.data("hoverIntent"); hoverIntentData || $el.data("hoverIntent", hoverIntentData = {}); var state = hoverIntentData[instanceId]; state || (hoverIntentData[instanceId] = state = { id: instanceId }), state.timeoutId && (state.timeoutId = clearTimeout(state.timeoutId)); var mousemove = state.event = "mousemove.hoverIntent.hoverIntent" + instanceId; if ("mouseenter" === e.type) { if (state.isActive) return; state.pX = ev.pageX, state.pY = ev.pageY, $el.off(mousemove, track).on(mousemove, track), state.timeoutId = setTimeout(function () { compare(ev, $el, state, cfg) }, cfg.interval) } else { if (!state.isActive) return; $el.off(mousemove, track), state.timeoutId = setTimeout(function () { !function (ev, $el, s, out) { delete $el.data("hoverIntent")[s.id], out.apply($el[0], [ev]) }(ev, $el, state, cfg.out) }, cfg.timeout) } }; return this.on({ "mouseenter.hoverIntent": handleHover, "mouseleave.hoverIntent": handleHover }, cfg.selector) } });
!function (e, t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.debounce = t() }(this, function () { "use strict"; return function (e, t) { var n; return function () { var o = this, i = arguments; clearTimeout(n), n = setTimeout(function () { e.apply(o, i) }, t) } } });

(function ($) {
    $.fn.stellarNav = function (options, width, breakpoint) {

        var $nav, $width, $breakpoint, $parentItems, isDesktop;
        nav = $(this);
        width = $(window).width();

        // default settings
        var settings = $.extend({
            theme: 'plain', // adds default color to nav. (light, dark)
            breakpoint: 768, // number in pixels to determine when the nav should turn mobile friendly
            menuLabel: 'Menu', // label for the mobile nav
            sticky: false, // makes nav sticky on scroll (desktop only)
            position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
            openingSpeed: 250, // how fast the dropdown should open in milliseconds
            closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
            showArrows: true, // shows dropdown arrows next to the items that have sub menus
            phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
            phoneLabel: 'Call Us', // label for the phone button
            locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
            locationLabel: 'Location', // label for the location button
            closeBtn: false, // adds a close button to the end of nav
            closeLabel: 'Close', // label for the close button
            mobileMode: false,
            scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
        }, options);

        return this.each(function () {
            nav.children("ul").addClass('level1');
            // defines black or white themes
            if (settings.theme == 'light' || settings.theme == 'dark') {
                nav.addClass(settings.theme);
            }

            if (settings.breakpoint) {
                breakpoint = settings.breakpoint;
            }

            if (settings.menuLabel) {
                menuLabel = settings.menuLabel;
            } else {
                menuLabel = '';
            }

            if (settings.phoneLabel) {
                phoneLabel = settings.phoneLabel;
            } else {
                phoneLabel = '';
            }

            if (settings.locationLabel) {
                locationLabel = settings.locationLabel;
            } else {
                locationLabel = '';
            }

            if (settings.closeLabel) {
                closeLabel = settings.closeLabel;
            } else {
                closeLabel = '';
            }

            // css classes for main menu mobile buttons
            if (settings.phoneBtn && settings.locationBtn) {
                var cssClass = 'third';
            } else if (settings.phoneBtn || settings.locationBtn) {
                var cssClass = 'half';
            } else {
                var cssClass = 'full';
            }

            // adds the toggle button to open and close nav
            if (settings.position == 'right' || settings.position == 'left') {
                nav.prepend('<a href="#" class="menu-toggle"><span class="bars"><span></span><span></span><span></span></span> ' + menuLabel + '</a>');
            } else {
                nav.prepend('<a href="#" class="menu-toggle ' + cssClass + '"><span class="menu-icon"></span><span class="menu-label">' + menuLabel + '</span></a>');
            }

            // adds a click-to-call link
            if (settings.phoneBtn && !(settings.position == 'right' || settings.position == 'left')) {
                var btn = '<a href="tel:' + settings.phoneBtn + '" class="call-btn-mobile ' + cssClass + '"><svg id="icon-phone"></svg> <span>' + phoneLabel + '</span></a>';
                nav.find('a.menu-toggle').after(btn);
            }

            // adds a location page link to the beginning of nav
            if (settings.locationBtn && !(settings.position == 'right' || settings.position == 'left')) {
                var btn = '<a href="' + settings.locationBtn + '" class="location-btn-mobile ' + cssClass + '" target="_blank"><svg id="icon-location"></svg> <span>' + locationLabel + '</span></a>';
                nav.find('a.menu-toggle').after(btn);
            }

            // Makes nav sticky on scroll
            if (settings.sticky) {
                navPos = nav.offset().top;
                if (width >= breakpoint) {
                    $(window).on('scroll', function () {
                        if ($(window).scrollTop() > navPos) {
                            nav.addClass('fixed');
                        }
                        else {
                            nav.removeClass('fixed');
                        }
                    });
                }
            }

            if (settings.position == 'top') {
                nav.addClass('top');
            }

            if (settings.position == 'left' || settings.position == 'right') {
                var closeBtn = '<a href="#" class="close-menu ' + cssClass + '"><span class="icon-close"></span>' + closeLabel + '</a>';
                var phoneBtn = '<a href="tel:' + settings.phoneBtn + '" class="call-btn-mobile ' + cssClass + '"><svg id="icon-phone"></svg></a>';
                var locationBtn = '<a href="' + settings.locationBtn + '" class="location-btn-mobile ' + cssClass + '" target="_blank"><svg id="icon-location"></svg></i></a>';

                nav.find('ul:first').prepend(closeBtn);

                if (settings.locationBtn) {
                    nav.find('ul:first').prepend(locationBtn);
                }
                if (settings.phoneBtn) {
                    nav.find('ul:first').prepend(phoneBtn);
                }
            }

            if (settings.position == 'right') {
                nav.addClass('right');
            }

            if (settings.position == 'left') {
                nav.addClass('left');
            }

            if (!settings.showArrows) {
                nav.addClass('hide-arrows');
            }

            if (settings.closeBtn && !(settings.position == 'right' || settings.position == 'left')) {
                // adds a link to end of nav to close it
                nav.find('ul:first').append('<li><a href="#" class="close-menu"><span class="icon-close"></span> ' + closeLabel + '</a></li>');
            }

            if (settings.scrollbarFix) {
                $('body').addClass('stellarnav-noscroll-x');
            }

            // svg graphics
            // phone icon
            var phoneIcon = document.getElementById('icon-phone'); // Gets phone icon element
            if (phoneIcon) {
                phoneIcon.setAttribute('viewBox', '0 0 480 480');
                var newPhoneIcon = document.createElementNS("http://www.w3.org/2000/svg", 'path'); // Create a path in SVG's namespace
                newPhoneIcon.setAttribute('d', 'M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076 c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257     c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194 C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02     C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876 c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029     C350.631,303.527,350.95,285.795,340.273,275.083z'); // Sets path's data
                phoneIcon.appendChild(newPhoneIcon);
            }

            // location icon
            var locationIcon = document.getElementById('icon-location'); //Gets phone icon element
            if (locationIcon) {
                locationIcon.setAttribute('viewBox', '0 0 480 480');
                var newLocationIcon = document.createElementNS("http://www.w3.org/2000/svg", 'path'); // Create a path in SVG's namespace
                newLocationIcon.setAttribute('d', 'M322.621,42.825C294.073,14.272,259.619,0,219.268,0c-40.353,0-74.803,14.275-103.353,42.825 c-28.549,28.549-42.825,63-42.825,103.353c0,20.749,3.14,37.782,9.419,51.106l104.21,220.986   c2.856,6.276,7.283,11.225,13.278,14.838c5.996,3.617,12.419,5.428,19.273,5.428c6.852,0,13.278-1.811,19.273-5.428 c5.996-3.613,10.513-8.562,13.559-14.838l103.918-220.986c6.282-13.324,9.424-30.358,9.424-51.106 C365.449,105.825,351.176,71.378,322.621,42.825z M270.942,197.855c-14.273,14.272-31.497,21.411-51.674,21.411 s-37.401-7.139-51.678-21.411c-14.275-14.277-21.414-31.501-21.414-51.678c0-20.175,7.139-37.402,21.414-51.675 c14.277-14.275,31.504-21.414,51.678-21.414c20.177,0,37.401,7.139,51.674,21.414c14.274,14.272,21.413,31.5,21.413,51.675 C292.355,166.352,285.217,183.575,270.942,197.855z'); // Sets path's data
                locationIcon.appendChild(newLocationIcon);
            }

            var resetTriggers = function () {
                $(nav).find('.dd-toggle').removeAttr('style');
                nav.find('li').off('mouseenter');
                nav.find('li').off('mouseleave');
                nav.find('li').off('mouseover');
                $('.menu-toggle, .stellarnav-open').off('mouseover');
                $('.menu-toggle, .stellarnav-open').unbind('mouseenter').unbind('mouseleave');
                $('.menu-toggle, .stellarnav-open').off('click');
                $('.menu-toggle, .stellarnav-open').removeProp('hoverIntent_t');
                $('.menu-toggle, .stellarnav-open').removeProp('hoverIntent_s');
                nav.find('li .dd-toggle').off('mouseover');
                nav.find('li .dd-toggle').off('click');
                $('body').off('mouseover');
            }

            // defines top level items
            parentItems = nav.find('> ul > li');

            var setTriggers = function () {
                // $(parentItems).each(function() {
                // 	if( $(this).hasClass('mega') ) {
                // 		// mega dropdown
                // 		$(this).on('mouseenter', function(){
                // 			$(this).find('ul').first().stop(true, true).slideDown(settings.openingSpeed);
                // 		});
                // 		$(this).on('mouseleave', function(){
                // 			$(this).find('ul').first().stop(true, true).slideUp(settings.openingSpeed);
                // 		});
                // 	} else {
                // 		// normal dropdown
                // 		// first-level
                // 		$(this).on('mouseenter', function(){
                // 			$('.li-active').removeClass('li-active');
                // 			$(this).addClass('li-active');
                // 			$(this).children('ul').stop(true, true).slideDown(settings.openingSpeed);
                // 		});
                // 		$(this).on('mouseleave', function(){
                // 			$(this).children('ul').stop(true, true).delay(settings.closingDelay).slideUp(settings.openingSpeed);
                // 		});

                // 		// second level and below
                // 		$(this).find('>ul>li').on('mouseenter', function(){
                // 			$('.sub-li-active').removeClass('sub-li-active');
                // 			if ($(this).hasClass('has-sub')){
                // 				$(this).addClass('sub-li-active');
                // 			}
                // 		});
                // 		$(this).find('li.has-sub').on('mouseenter', function(){
                // 			$(this).children('ul').stop(true, true).slideDown(settings.openingSpeed);
                // 		});
                // 		$(this).find('li.has-sub').on('mouseleave', function(){
                // 			$(this).children('ul').stop(true, true).delay(settings.closingDelay).slideUp(settings.openingSpeed);
                // 		});
                // 	}
                // });

                // opens and closes menu
                var triggerAction = isDesktop ? 'mouseover click' : 'click';
                var willExpandAll = (mobileAndTabletcheck() && $(window).width() > breakpoint) || isDesktop;
                var onTriggerMenu = function (e, elm) {
                    e.preventDefault();

                    var willTriggerAction = isDesktop ? !nav.hasClass('active') : true;
                    if (willTriggerAction) {
                        if (isDesktop) {
                            elm.addClass('overActive');
                        }
                        elm.addClass('opened');
                        // if nav position is left or right, uses fadeToggle instead of slideToggle
                        if (settings.position == 'left' || settings.position == 'right') {
                            nav.find('ul:first').stop(true, true).fadeToggle(settings.openingSpeed);
                            nav.toggleClass('active');

                            if (nav.hasClass('active') && nav.hasClass('mobile')) {
                                // closes the menu when clicked outside of it
                                $(document).on('click', function (event) {
                                    // ensures menu hides only on mobile nav
                                    if (nav.hasClass('mobile')) {
                                        if (!$(event.target).closest(nav).length) {
                                            nav.find('ul:first').stop(true, true).fadeOut(settings.openingSpeed);
                                            nav.removeClass('active');
                                        }
                                    }
                                });
                            }

                        } else {
                            // static position - normal open and close animation
                            nav.find('ul:first').stop(true, true).slideToggle(settings.openingSpeed);
                            nav.toggleClass('active');
                            if (willExpandAll && nav.hasClass('active')) {
                                nav.find('ul:first li.has-sub:visible:first > .dd-toggle').trigger(isDesktop ? 'mouseover' : 'click');
                            }
                            if (!nav.hasClass('active')) {
                                nav.find('li.has-sub.open ul').hide();
                                nav.find('li.has-sub.open').removeClass('open');
                            }
                        }

                        if (isDesktop) {
                            $(nav).find('ul.level1 > li > .dd-toggle').each(function () {
                                var parentHeight = $(this).parent('li').height();
                                $(this).css('height', parentHeight);
                                $(this).css('margin-top', -1 * parentHeight + 'px');
                            });
                        }

                        $('body').toggleClass('menu-opened');
                    }
                };

                if (isDesktop) {
                    $('.menu-toggle, .stellarnav-open').hoverIntent({
                        over: function (e) {
                            if ($(this).hasClass('overActive')) {
                                return;
                            }
                            onTriggerMenu(e, $(this));
                        },
                        out: function (e) {
                            $(this).removeClass('overActive');
                        },
                    });
                    $('.menu-toggle').on('click', function (e) {
                        if (isDesktop) {
                            if (nav.hasClass('active') && $(this).hasClass('opened')) {
                                nav.find('ul:first').stop(true, true).slideToggle(settings.openingSpeed);
                                nav.removeClass('active');
                                nav.find('li.has-sub.open ul').hide();
                                nav.find('li.has-sub.open').removeClass('open');
                                $('body').toggleClass('menu-opened');
                            } else {
                                onTriggerMenu(e, $(this));
                            }
                        }
                    });
                    $('body').on('mouseover', function (e) {
                        if ($(e.target).hasClass('menu-overlay') && $(this).hasClass('menu-opened')) {
                            $('.menu-toggle').trigger('click');
                        }
                    });
                } else {
                    $('.menu-toggle, .stellarnav-open').on('click', function (e) {
                        onTriggerMenu(e, $(this));
                    });
                }

                // activates the close button
                $('.close-menu, .stellarnav-close').on('click', function () {
                    setTimeout(function () {
                        nav.removeClass('active');

                    }, 500);

                    if (settings.position == 'left' || settings.position == 'right') {
                        nav.find('ul:first').stop(true, true).fadeToggle(settings.openingSpeed);
                    } else {
                        nav.find('ul:first').stop(true, true).slideUp(settings.openingSpeed).toggleClass('active');
                    }
                });

                // expands the dropdown menu on each click
                nav.find('li .dd-toggle').on(triggerAction, function (e) {
                    e.preventDefault();
                    var parentLi = $(this).parent('li');
                    if (isDesktop && $(parentLi).hasClass('open')) {
                        return;
                    }
                    if (willExpandAll) {
                        $(parentLi).siblings().each(function () {
                            if ($(this).hasClass('open')) {
                                $(this).find('ul').hide();
                                $(this).find('li').removeClass('open');
                                $(this).removeClass('open');
                            }
                        });
                    }
                    $(parentLi).children('ul').stop(true, true).slideToggle(settings.openingSpeed);
                    $(parentLi).toggleClass('open');

                    if (isDesktop) {
                        $(parentLi).find('li .dd-toggle').each(function () {
                            var parentHeight = $(this).parent('li').height();
                            $(this).css('height', parentHeight);
                            $(this).css('margin-top', -1 * parentHeight + 'px');
                        });
                    }

                    //auto open all menu
                    if (willExpandAll && $(parentLi).closest('ul').hasClass('level1')) {
                        var nextLevelLi = $(parentLi).find('ul li.has-sub');
                        if (nextLevelLi.length) {
                            $(nextLevelLi).first().children('ul').stop(true, true).slideToggle(settings.openingSpeed);
                            $(nextLevelLi).first().toggleClass('open');
                        }
                    }
                });
                if (isDesktop) {
                    nav.find('li').on(triggerAction, function (e) {
                        if (!$(this).hasClass('has-sub')) {
                            $(this).siblings().each(function () {
                                if ($(this).hasClass('open')) {
                                    $(this).find('ul').hide();
                                    $(this).find('li').removeClass('open');
                                    $(this).removeClass('open');
                                }
                            });
                        }
                    });
                }
            }

            // check browser width in real-time
            var windowCheck = debounce(function () {
                var browserWidth = $(window).width();
                isDesktop = (browserWidth <= breakpoint || mobileAndTabletcheck()) ? false : true;
                if (browserWidth <= breakpoint || settings.mobileMode) {
                    // mobile/tablet nav

                    resetTriggers();
                    nav.addClass('mobile');
                    nav.removeClass('desktop');
                    if (browserWidth > breakpoint) {
                        nav.addClass('view-desktop');
                    } else {
                        nav.removeClass('view-desktop');
                    }

                    // closes the menu when resizing window back to desktop
                    if (!nav.hasClass('active') && nav.find('ul:first').is(':visible')) {
                        nav.find('ul:first').hide();
                    }

                    // resets all the styles back to normal that are added on the desktop for the mega dropdown
                    nav.find('li.mega').each(function () {
                        $(this).find('ul').first().removeAttr('style');
                        $(this).find('ul').first().children().removeAttr('style');
                    });
                    setTimeout(function () { setTriggers(); }, 10);


                } else {
                    // desktop nav
                    nav.addClass('desktop');
                    nav.removeClass('mobile');

                    // ensures stellarnav is visible after resizing window
                    if (!nav.hasClass('active') && nav.find('ul:first').is(':hidden')) {
                        nav.find('ul:first').show();
                    }

                    // hides items that were open on mobile
                    $('li.open').removeClass('open').find('ul:visible').hide();

                    resetTriggers();
                    setTriggers();

                    // mega dropdown
                    navWidth = 0;

                    $(parentItems).each(function () {
                        // calculates the nav width based on the sum of all top-level items
                        navWidth += $(this)[0].getBoundingClientRect().width;
                        navWidth = Math.round(navWidth);

                        if ($(this).hasClass('mega')) {
                            // left aligns mega dropdown with nav
                            $(this).find('ul').first().css({ 'left': 0, 'right': 0, 'margin': '0px auto' });

                            // gets the data-column attribute and divides the columns equally
                            numCols = $(this).attr('data-columns');
                            if (numCols == 2) {
                                $(this).find('li.has-sub').width('50%');
                            } else if (numCols == 3) {
                                $(this).find('ul').first().children().width('33.33%');
                            } else if (numCols == 4) {
                                $(this).find('ul').first().children().width('25%');
                            } else if (numCols == 5) {
                                $(this).find('ul').first().children().width('20%');
                            } else if (numCols == 6) {
                                $(this).find('ul').first().children().width('16.66%');
                            } else if (numCols == 7) {
                                $(this).find('ul').first().children().width('14.28%');
                            } else if (numCols == 8) {
                                $(this).find('ul').first().children().width('12.5%');
                            } else {
                                // defaults to 4 column
                                $(this).find('ul').first().children().width('25%');
                            }
                        }

                    });

                    // defines the mega dropdown width to be the same as nav width
                    if (parentItems.hasClass('mega')) {
                        nav.find('li.mega > ul').css({ 'max-width': navWidth });
                    }
                    // end mega dropdown

                } // end desktop nav

                if (nav.hasClass('view-desktop')) {
                    var minHeight = 0, liHeight = 52, subLiHeight = 39;
                    nav.find('ul').each(function () {
                        var isSubLi = $(this).parent('.mega-menu.clearfix').length;
                        var numOfLi = $(this).children('li').length;
                        var liType = isSubLi ? subLiHeight : liHeight;
                        var padding = isSubLi ? 10 : 0;
                        var height = numOfLi * liType + padding;
                        minHeight = height > minHeight ? height : minHeight;
                    });
                    nav.find('ul').css('min-height', minHeight + 'px');
                } else {
                    nav.find('ul').css('min-height', 0 + 'px');
                }

            }, 200); // windowCheck()

            windowCheck();


            // adds toggle button to li items that have children
            nav.find('li a').each(function () {
                if ($(this).next().length > 0) {
                    $(this).parent('li').addClass('has-sub').append('<a class="dd-toggle" href="#"><span class="icon-plus"></span></a>');
                }
            });

            $(window).on('resize', function () {
                windowCheck();
            });
        });
    }
}(jQuery));

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.StickySidebar = e() }(this, function () { "use strict"; function t(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var e = function () { function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function (e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(), i = function () { var i = ".stickySidebar", n = { topSpacing: 0, bottomSpacing: 0, containerSelector: !1, innerWrapperSelector: ".inner-wrapper-sticky", stickyClass: "is-affixed", resizeSensor: !0, minWidth: !1 }; return function () { function s(e) { var i = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (t(this, s), this.options = s.extend(n, o), this.sidebar = "string" == typeof e ? document.querySelector(e) : e, void 0 === this.sidebar) throw new Error("There is no specific sidebar element."); this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = { transform: !1, transform3d: !1 }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this._resizeListeners = [], this.dimensions = { translateY: 0, topSpacing: 0, lastTopSpacing: 0, bottomSpacing: 0, lastBottomSpacing: 0, sidebarHeight: 0, sidebarWidth: 0, containerTop: 0, containerHeight: 0, viewportHeight: 0, viewportTop: 0, lastViewportTop: 0 }, ["handleEvent"].forEach(function (t) { i[t] = i[t].bind(i) }), this.initialize() } return e(s, [{ key: "initialize", value: function () { var t = this; if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) { var e = document.createElement("div"); for (e.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(e); this.sidebar.firstChild != e;)e.appendChild(this.sidebar.firstChild); this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky") } if (this.options.containerSelector) { var i = document.querySelectorAll(this.options.containerSelector); if ((i = Array.prototype.slice.call(i)).forEach(function (e, i) { e.contains(t.sidebar) && (t.container = e) }), !i.length) throw new Error("The container does not contains on the sidebar.") } "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0 } }, { key: "bindEvents", value: function () { window.addEventListener("resize", this, { passive: !0, capture: !1 }), window.addEventListener("scroll", this, { passive: !0, capture: !1 }), this.sidebar.addEventListener("update" + i, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent)) } }, { key: "handleEvent", value: function (t) { this.updateSticky(t) } }, { key: "calcDimensions", value: function () { if (!this._breakpoint) { var t = this.dimensions; t.containerTop = s.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebar.offsetWidth, t.viewportHeight = window.innerHeight, this._calcDimensionsWithScroll() } } }, { key: "_calcDimensionsWithScroll", value: function () { var t = this.dimensions; t.sidebarLeft = s.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing } }, { key: "isSidebarFitsViewport", value: function () { return this.dimensions.sidebarHeight < this.dimensions.viewportHeight } }, { key: "observeScrollDir", value: function () { var t = this.dimensions; if (t.lastViewportTop !== t.viewportTop) { var e = "down" === this.direction ? Math.min : Math.max; t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down") } } }, { key: "getAffixType", value: function () { var t = this.dimensions, e = !1; this._calcDimensionsWithScroll(); var i = t.sidebarHeight + t.containerTop, n = t.viewportTop + t.topSpacing, s = t.viewportBottom - t.bottomSpacing; return "up" === this.direction ? n <= t.containerTop ? (t.translateY = 0, e = "STATIC") : n <= t.translateY + t.containerTop ? (t.translateY = n - t.containerTop, e = "VIEWPORT-TOP") : !this.isSidebarFitsViewport() && t.containerTop <= n && (e = "VIEWPORT-UNBOTTOM") : this.isSidebarFitsViewport() ? t.sidebarHeight + n >= t.containerBottom ? (t.translateY = t.containerBottom - i, e = "CONTAINER-BOTTOM") : n >= t.containerTop && (t.translateY = n - t.containerTop, e = "VIEWPORT-TOP") : t.containerBottom <= s ? (t.translateY = t.containerBottom - i, e = "CONTAINER-BOTTOM") : i + t.translateY <= s ? (t.translateY = s - i, e = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= n && (e = "VIEWPORT-UNBOTTOM"), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.lastViewportTop = t.viewportTop, e } }, { key: "_getStyle", value: function (t) { if (void 0 !== t) { var e = { inner: {}, outer: {} }, i = this.dimensions; switch (t) { case "VIEWPORT-TOP": e.inner = { position: "fixed", top: i.topSpacing, left: i.sidebarLeft - i.viewportLeft, width: i.sidebarWidth }; break; case "VIEWPORT-BOTTOM": e.inner = { position: "fixed", top: "auto", left: i.sidebarLeft, bottom: i.bottomSpacing, width: i.sidebarWidth }; break; case "CONTAINER-BOTTOM": case "VIEWPORT-UNBOTTOM": var n = this._getTranslate(0, i.translateY + "px"); e.inner = n ? { transform: n } : { position: "absolute", top: i.translateY, width: i.sidebarWidth } }switch (t) { case "VIEWPORT-TOP": case "VIEWPORT-BOTTOM": case "VIEWPORT-UNBOTTOM": case "CONTAINER-BOTTOM": e.outer = { height: i.sidebarHeight, position: "relative" } }return e.outer = s.extend({ height: "", position: "" }, e.outer), e.inner = s.extend({ position: "relative", top: "", left: "", bottom: "", width: "", transform: this._getTranslate() }, e.inner), e } } }, { key: "stickyPosition", value: function (t) { if (!this._breakpoint) { t = this._reStyle || t || !1; var e = this.getAffixType(), n = this._getStyle(e); if ((this.affixedType != e || t) && e) { var o = "affix." + e.toLowerCase().replace("viewport-", "") + i; s.eventTrigger(this.sidebar, o), "STATIC" === e ? s.removeClass(this.sidebar, this.options.stickyClass) : s.addClass(this.sidebar, this.options.stickyClass); for (var r in n.outer) this.sidebar.style[r] = n.outer[r]; for (var a in n.inner) { var p = "number" == typeof n.inner[a] ? "px" : ""; this.sidebarInner.style[a] = n.inner[a] + p } var c = "affixed." + e.toLowerCase().replace("viewport-", "") + i; s.eventTrigger(this.sidebar, c) } else this._initialized && (this.sidebarInner.style.left = n.inner.left); this.affixedType = e } } }, { key: "_widthBreakpoint", value: function () { window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), s.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1 } }, { key: "updateSticky", value: function () { var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; this._running || (this._running = !0, function (e) { requestAnimationFrame(function () { switch (e) { case "scroll": t._calcDimensionsWithScroll(), t.observeScrollDir(), t.stickyPosition(); break; case "resize": default: t._widthBreakpoint(), t.calcDimensions(), t.stickyPosition(!0) }t._running = !1 }) }(e.type)) } }, { key: "_setSupportFeatures", value: function () { var t = this.support; t.transform = s.supportTransform(), t.transform3d = s.supportTransform(!0) } }, { key: "_getTranslate", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")" } }, { key: "destroy", value: function () { window.removeEventListener("resize", this, { caption: !1 }), window.removeEventListener("scroll", this, { caption: !1 }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + i, this); var t = { inner: {}, outer: {} }; t.inner = { position: "", top: "", left: "", bottom: "", width: "", transform: "" }, t.outer = { height: "", position: "" }; for (var e in t.outer) this.sidebar.style[e] = t.outer[e]; for (var n in t.inner) this.sidebarInner.style[n] = t.inner[n]; this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent)) } }], [{ key: "supportTransform", value: function (t) { var e = !1, i = t ? "perspective" : "transform", n = i.charAt(0).toUpperCase() + i.slice(1), s = ["Webkit", "Moz", "O", "ms"], o = document.createElement("support").style; return (i + " " + s.join(n + " ") + n).split(" ").forEach(function (t, i) { if (void 0 !== o[t]) return e = t, !1 }), e } }, { key: "eventTrigger", value: function (t, e, i) { try { var n = new CustomEvent(e, { detail: i }) } catch (t) { (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i) } t.dispatchEvent(n) } }, { key: "extend", value: function (t, e) { var i = {}; for (var n in t) void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n]; return i } }, { key: "offsetRelative", value: function (t) { var e = { left: 0, top: 0 }; do { var i = t.offsetTop, n = t.offsetLeft; isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent } while (t); return e } }, { key: "addClass", value: function (t, e) { s.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e) } }, { key: "removeClass", value: function (t, e) { s.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")) } }, { key: "hasClass", value: function (t, e) { return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) } }]), s }() }(); return window.StickySidebar = i, i });
!function (i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function (i) { "use strict"; var e = window.Slick || {}; (e = function () { var e = 0; return function (t, o) { var s, n = this; n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function (e, t) { return i('<button type="button" />').text(t + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0) } }()).prototype.activateADA = function () { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) { var s = this; if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1; s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) { i(t).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit() }, e.prototype.animateHeight = function () { var i = this; if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.animate({ height: e }, i.options.speed) } }, e.prototype.animateSlide = function (e, t) { var o = {}, s = this; s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function (i) { i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o)) }, complete: function () { t && t.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () { s.disableTransition(), t.call() }, s.options.speed)) }, e.prototype.getNavTarget = function () { var e = this, t = e.options.asNavFor; return t && null !== t && (t = i(t).not(e.$slider)), t }, e.prototype.asNavFor = function (e) { var t = this.getNavTarget(); null !== t && "object" == typeof t && t.each(function () { var t = i(this).slick("getSlick"); t.unslicked || t.slideHandler(e, !0) }) }, e.prototype.applyTransition = function (i) { var e = this, t = {}; !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.autoPlay = function () { var i = this; i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed)) }, e.prototype.autoPlayClear = function () { var i = this; i.autoPlayTimer && clearInterval(i.autoPlayTimer) }, e.prototype.autoPlayIterator = function () { var i = this, e = i.currentSlide + i.options.slidesToScroll; i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e)) }, e.prototype.buildArrows = function () { var e = this; !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function () { var e, t, o = this; if (!0 === o.options.dots) { for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1)t.append(i("<li />").append(o.options.customPaging.call(this, o, e))); o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active") } }, e.prototype.buildOut = function () { var e = this; e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) { i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable") }, e.prototype.buildRows = function () { var i, e, t, o, s, n, r, l = this; if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) { for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) { var d = document.createElement("div"); for (e = 0; e < l.options.rows; e++) { var a = document.createElement("div"); for (t = 0; t < l.options.slidesPerRow; t++) { var c = i * r + (e * l.options.slidesPerRow + t); n.get(c) && a.appendChild(n.get(c)) } d.appendChild(a) } o.appendChild(d) } l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" }) } }, e.prototype.checkResponsive = function (e, t) { var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width(); if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) { s = null; for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o])); null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]) } }, e.prototype.changeSlide = function (e, t) { var o, s, n, r = this, l = i(e.currentTarget); switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) { case "previous": s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t); break; case "next": s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t); break; case "index": var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll; r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus"); break; default: return } }, e.prototype.checkNavigable = function (i) { var e, t; if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) { if (i < e[o]) { i = t; break } t = e[o] } return i }, e.prototype.cleanUpEvents = function () { var e = this; e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition) }, e.prototype.cleanUpSlideEvents = function () { var e = this; e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.cleanUpRows = function () { var i, e = this; e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i)) }, e.prototype.clickHandler = function (i) { !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault()) }, e.prototype.destroy = function (e) { var t = this; t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () { i(this).attr("style", i(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]) }, e.prototype.disableTransition = function (i) { var e = this, t = {}; t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.fadeSlide = function (i, e) { var t = this; !1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () { t.disableTransition(i), e.call() }, t.options.speed)) }, e.prototype.fadeSlideOut = function (i) { var e = this; !1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) { var e = this; null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit()) }, e.prototype.focusHandler = function () { var e = this; e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) { t.stopImmediatePropagation(); var o = i(this); setTimeout(function () { e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay()) }, 0) }) }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () { return this.currentSlide }, e.prototype.getDotCount = function () { var i = this, e = 0, t = 0, o = 0; if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll); return o - 1 }, e.prototype.getLeft = function (i) { var e, t, o, s, n = this, r = 0; return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e }, e.prototype.getOption = e.prototype.slickGetOption = function (i) { return this.options[i] }, e.prototype.getNavigableIndexes = function () { var i, e = this, t = 0, o = 0, s = []; for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;)s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; return s }, e.prototype.getSlick = function () { return this }, e.prototype.getSlideCount = function () { var e, t, o = this; return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) { if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1 }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) { this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e) }, e.prototype.init = function (e) { var t = this; i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay()) }, e.prototype.initADA = function () { var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter(function (i) { return i >= 0 && i < e.slideCount }); e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) { var s = o.indexOf(t); i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s }) }), e.$dots.attr("role", "tablist").find("li").each(function (s) { var n = o[s]; i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" }) }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end()); for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)e.$slides.eq(s).attr("tabindex", 0); e.activateADA() }, e.prototype.initArrowEvents = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler))) }, e.prototype.initDotEvents = function () { var e = this; !0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function () { var e = this; e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1))) }, e.prototype.initializeEvents = function () { var e = this; e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition) }, e.prototype.initUI = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show() }, e.prototype.keyHandler = function (i) { var e = this; i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } })) }, e.prototype.lazyLoad = function () { function e(e) { i("img[data-lazy]", e).each(function () { var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"), s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img"); r.onload = function () { e.animate({ opacity: 0 }, 100, function () { o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function () { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), n.$slider.trigger("lazyLoaded", [n, e, t]) }) }, r.onerror = function () { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]) }, r.src = t }) } var t, o, s, n = this; if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++; e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)) }, e.prototype.loadSlider = function () { var i = this; i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad() }, e.prototype.next = e.prototype.slickNext = function () { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function () { var i = this; i.checkResponsive(), i.setPosition() }, e.prototype.pause = e.prototype.slickPause = function () { var i = this; i.autoPlayClear(), i.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function () { var i = this; i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1 }, e.prototype.postSlide = function (e) { var t = this; t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus())) }, e.prototype.prev = e.prototype.slickPrev = function () { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function (i) { i.preventDefault() }, e.prototype.progressiveLazyLoad = function (e) { e = e || 1; var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider); d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () { s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad() }, r.onerror = function () { e < 3 ? setTimeout(function () { l.progressiveLazyLoad(e + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad()) }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]) }, e.prototype.refresh = function (e) { var t, o, s = this; o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1) }, e.prototype.registerBreakpoints = function () { var e, t, o, s = this, n = s.options.responsive || null; if ("array" === i.type(n) && n.length) { s.respondTo = s.options.respondTo || "window"; for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) { for (t = n[e].breakpoint; o >= 0;)s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--; s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings } s.breakpoints.sort(function (i, e) { return s.options.mobileFirst ? i - e : e - i }) } }, e.prototype.reinit = function () { var e = this; e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]) }, e.prototype.resize = function () { var e = this; i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () { e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50)) }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) { var o = this; if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1; o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit() }, e.prototype.setCSS = function (i) { var e, t, o = this, s = {}; !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s))) }, e.prototype.setDimensions = function () { var i = this; !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))); var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width(); !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e) }, e.prototype.setFade = function () { var e, t = this; t.$slides.each(function (o, s) { e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 }) }, e.prototype.setHeight = function () { var i = this; if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.css("height", e) } }, e.prototype.setOption = e.prototype.slickSetOption = function () { var e, t, o, s, n, r = this, l = !1; if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) { r.options[i] = e }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else { for (e = r.options.responsive.length - 1; e >= 0;)r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--; r.options.responsive.push(s[t]) } l && (r.unload(), r.reinit()) }, e.prototype.setPosition = function () { var i = this; i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]) }, e.prototype.setProps = function () { var i = this, e = document.body.style; i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType }, e.prototype.setSlideClasses = function (i) { var e, t, o, s, n = this; if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) { var r = n.options.slidesToShow % 2 == 0 ? 1 : 0; e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center") } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")); "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad() }, e.prototype.setupInfinite = function () { var e, t, o, s = this; if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) { for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned"); for (e = 0; e < o + s.slideCount; e += 1)t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned"); s.$slideTrack.find(".slick-cloned").find("[id]").each(function () { i(this).attr("id", "") }) } }, e.prototype.interrupt = function (i) { var e = this; i || e.autoPlay(), e.interrupted = i }, e.prototype.selectHandler = function (e) { var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index")); s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s) }, e.prototype.slideHandler = function (i, e, t) { var o, s, n, r, l, d = null, a = this; if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () { a.postSlide(o) }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () { a.postSlide(o) }) : a.postSlide(o)); else { if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight(); !0 !== t ? a.animateSlide(d, function () { a.postSlide(s) }) : a.postSlide(s) } }, e.prototype.startLoad = function () { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function () { var i, e, t, o, s = this; return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function (i) { var e, t, o = this; if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1; if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1; if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) { switch (t = o.swipeDirection()) { case "left": case "down": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0; break; case "right": case "up": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1 }"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t])) } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {}) }, e.prototype.swipeHandler = function (i) { var e = this; if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) { case "start": e.swipeStart(i); break; case "move": e.swipeMove(i); break; case "end": e.swipeEnd(i) } }, e.prototype.swipeMove = function (i) { var e, t, o, s, n, r, l = this; return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft)))) }, e.prototype.swipeStart = function (i) { var e, t = this; if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1; void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0 }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () { var i = this; null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit()) }, e.prototype.unload = function () { var e = this; i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, e.prototype.unslick = function (i) { var e = this; e.$slider.trigger("unslick", [e, i]), e.destroy() }, e.prototype.updateArrows = function () { var i = this; Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, e.prototype.updateDots = function () { var i = this; null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active")) }, e.prototype.visibility = function () { var i = this; i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1) }, i.fn.slick = function () { var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length; for (i = 0; i < r; i++)if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t; return o } });

/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function (e, t) { "function" == typeof define && define.amd ? define([], (function () { return t(e) })) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e) })("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function (C) { "use strict"; var L = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: !0, speed: 500, speedAsDuration: !1, durationMax: null, durationMin: null, clip: !0, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: !0, popstate: !0, emitEvents: !0 }, H = function () { var n = {}; return Array.prototype.forEach.call(arguments, (function (e) { for (var t in e) { if (!e.hasOwnProperty(t)) return; n[t] = e[t] } })), n }, r = function (e) { "#" === e.charAt(0) && (e = e.substr(1)); for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) { if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000."); 1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a) } return "#" + r }, q = function () { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) }, x = function (e) { return e ? (t = e, parseInt(C.getComputedStyle(t).height, 10) + e.offsetTop) : 0; var t }, Q = function (e, t, n, o) { if (t.emitEvents && "function" == typeof C.CustomEvent) { var a = new CustomEvent(e, { bubbles: !0, detail: { anchor: n, toggle: o } }); document.dispatchEvent(a) } }; return function (o, e) { var M, a, I, A, w = {}; w.cancelScroll = function (e) { cancelAnimationFrame(A), A = null, e || Q("scrollCancel", M) }, w.animateScroll = function (i, s, e) { w.cancelScroll(); var c = H(M || L, e || {}), u = "[object Number]" === Object.prototype.toString.call(i), t = u || !i.tagName ? null : i; if (u || t) { var l = C.pageYOffset; c.header && !I && (I = document.querySelector(c.header)); var n, o, a, d, r, f, m, h, p = x(I), g = u ? i : (function (e, t, n, o) { var a = 0; if (e.offsetParent) for (; a += e.offsetTop, e = e.offsetParent;); return a = Math.max(a - t - n, 0), o && (a = Math.min(a, q() - C.innerHeight)), a })(t, p, parseInt("function" == typeof c.offset ? c.offset(i, s) : c.offset, 10), c.clip), y = g - l, v = q(), S = 0, E = (n = y, a = (o = c).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && a > o.durationMax ? o.durationMax : o.durationMin && a < o.durationMin ? o.durationMin : parseInt(a, 10)), b = function (e, t) { var n, o, a, r = C.pageYOffset; if (e == t || r == t || (l < t && C.innerHeight + r) >= v) return w.cancelScroll(!0), o = t, a = u, 0 === (n = i) && document.body.focus(), a || (n.focus(), document.activeElement !== n && (n.setAttribute("tabindex", "-1"), n.focus(), n.style.outline = "none"), C.scrollTo(0, o)), Q("scrollStop", c, i, s), !(A = d = null) }, O = function (e) { var t, n, o; d || (d = e), S += e - d, f = l + y * (n = r = 1 < (r = 0 === E ? 0 : S / E) ? 1 : r, "easeInQuad" === (t = c).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), C.scrollTo(0, Math.floor(f)), b(f, g) || (A = C.requestAnimationFrame(O), d = e) }; 0 === C.pageYOffset && C.scrollTo(0, 0), m = i, h = c, u || history.pushState && h.updateURL && history.pushState({ smoothScroll: JSON.stringify(h), anchor: m.id }, document.title, m === document.documentElement ? "#top" : "#" + m.id), "matchMedia" in C && C.matchMedia("(prefers-reduced-motion)").matches ? C.scrollTo(0, Math.floor(g)) : (Q("scrollStart", c, i, s), w.cancelScroll(!0), C.requestAnimationFrame(O)) } }; var t = function (e) { if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(M.ignore) && a.hostname === C.location.hostname && a.pathname === C.location.pathname && /#/.test(a.href)) { var t, n = r(a.hash); if ("#" === n) { if (!M.topOnEmptyHash) return; t = document.documentElement } else t = document.querySelector(n); (t = t || "#top" !== n ? t : document.documentElement) && (e.preventDefault(), (function (e) { if (history.replaceState && e.updateURL && !history.state) { var t = C.location.hash; t = t || "", history.replaceState({ smoothScroll: JSON.stringify(e), anchor: t || C.pageYOffset }, document.title, t || C.location.href) } })(M), w.animateScroll(t, a)) } }, n = function (e) { if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(M)) { var t = history.state.anchor; "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || w.animateScroll(t, null, { updateURL: !1 }) } }; w.destroy = function () { M && (document.removeEventListener("click", t, !1), C.removeEventListener("popstate", n, !1), w.cancelScroll(), A = I = a = M = null) }; return (function () { if (!("querySelector" in document && "addEventListener" in C && "requestAnimationFrame" in C && "closest" in C.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs."; w.destroy(), M = H(L, e || {}), I = M.header ? document.querySelector(M.header) : null, document.addEventListener("click", t, !1), M.updateURL && M.popstate && C.addEventListener("popstate", n, !1) })(), w } }));
/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function (t, i, e, s) { function o(i, e) { var h = this; "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src")); var r = (this.position + "").toLowerCase().match(/\S+/g) || []; if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [r[1], r[0]]), this.positionX !== s && (r[0] = this.positionX.toLowerCase()), this.positionY !== s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: 'url("' + this.imageSrc + '")', backgroundSize: "cover", backgroundPosition: this.position }), this; if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: 'url("' + this.imageSrc + '")', backgroundSize: "cover", backgroundPosition: this.position }), this; this.$mirror = t("<div />").prependTo(this.mirrorContainer); var a = this.$element.find(">.parallax-slider"), n = !1; 0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }), this.$slider.addClass("parallax-slider").one("load", function () { h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender() }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load") } !function () { for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s)i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"]; i.requestAnimationFrame || (i.requestAnimationFrame = function (e) { var s = (new Date).getTime(), o = Math.max(0, 16 - (s - t)), h = i.setTimeout(function () { e(s + o) }, o); return t = s + o, h }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) { clearTimeout(t) }) }(), t.extend(o.prototype, { speed: .2, bleed: 0, zIndex: -100, iosFix: !0, androidFix: !0, position: "center", overScrollFix: !1, mirrorContainer: "body", refresh: function () { this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight; var t, i = o.winHeight, e = o.docHeight, s = Math.min(this.boxOffsetTop, e - i), h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0), r = this.boxHeight + (s - h) * (1 - this.speed) | 0, a = (this.boxOffsetTop - s) * (1 - this.speed) | 0; r * this.aspectRatio >= this.boxWidth ? (this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = a, t = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -t : isNaN(this.positionX) ? this.offsetLeft = -t / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -t)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, t = this.imageHeight - r, "top" == this.positionY ? this.offsetBaseTop = a : "bottom" == this.positionY ? this.offsetBaseTop = a - t : isNaN(this.positionY) ? this.offsetBaseTop = a - t / 2 | 0 : this.offsetBaseTop = a + Math.max(this.positionY, -t)) }, render: function () { var t = o.scrollTop, i = o.scrollLeft, e = this.overScrollFix ? o.overScroll : 0, s = t + o.winHeight; this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({ transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - e) + "px, 0px)", visibility: this.visibility, height: this.boxHeight, width: this.boxWidth }), this.$slider.css({ transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)", position: "absolute", height: this.imageHeight, width: this.imageWidth, maxWidth: "none" }) } }), t.extend(o, { scrollTop: 0, scrollLeft: 0, winHeight: 0, winWidth: 0, docHeight: 1 << 30, docWidth: 1 << 30, sliders: [], isReady: !1, isFresh: !1, isBusy: !1, setup: function () { function s() { if (p == i.pageYOffset) return i.requestAnimationFrame(s), !1; p = i.pageYOffset, h.render(), i.requestAnimationFrame(s) } if (!this.isReady) { var h = this, r = t(e), a = t(i), n = function () { o.winHeight = a.height(), o.winWidth = a.width(), o.docHeight = r.height(), o.docWidth = r.width() }, l = function () { var t = a.scrollTop(), i = o.docHeight - o.winHeight, e = o.docWidth - o.winWidth; o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0)) }; a.on("resize.px.parallax load.px.parallax", function () { n(), h.refresh(), o.isFresh = !1, o.requestRender() }).on("scroll.px.parallax load.px.parallax", function () { l(), o.requestRender() }), n(), l(), this.isReady = !0; var p = -1; s() } }, configure: function (i) { "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i)) }, refresh: function () { t.each(this.sliders, function () { this.refresh() }), this.isFresh = !0 }, render: function () { this.isFresh || this.refresh(), t.each(this.sliders, function () { this.render() }) }, requestRender: function () { var t = this; t.render(), t.isBusy = !1 }, destroy: function (e) { var s, h = t(e).data("px.parallax"); for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)this.sliders[s] == h && this.sliders.splice(s, 1); t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1) } }); var h = t.fn.parallax; t.fn.parallax = function (s) { return this.each(function () { var h = t(this), r = "object" == typeof s && s; this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]()) }) }, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () { return t.fn.parallax = h, this }, t(function () { t('[data-parallax="scroll"]').parallax() }) }(jQuery, window, document);
/*!
 * Bootstrap-select v1.13.10 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2019 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!function (e, t) { void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], function (e) { return t(e) }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery) }(this, function (e) { !function (z) { "use strict"; var d = ["sanitize", "whiteList", "sanitizeFn"], r = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], e = { "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i; function v(e, t) { var i = e.nodeName.toLowerCase(); if (-1 !== z.inArray(i, t)) return -1 === z.inArray(i, r) || Boolean(e.nodeValue.match(l) || e.nodeValue.match(a)); for (var s = z(t).filter(function (e, t) { return t instanceof RegExp }), n = 0, o = s.length; n < o; n++)if (i.match(s[n])) return !0; return !1 } function P(e, t, i) { if (i && "function" == typeof i) return i(e); for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)for (var r = e[n].querySelectorAll("*"), l = 0, a = r.length; l < a; l++) { var c = r[l], d = c.nodeName.toLowerCase(); if (-1 !== s.indexOf(d)) for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) { var m = h[u]; v(m, p) || c.removeAttribute(m.nodeName) } else c.parentNode.removeChild(c) } } "classList" in document.createElement("_") || function (e) { if ("Element" in e) { var t = "classList", i = "prototype", s = e.Element[i], n = Object, o = function () { var i = z(this); return { add: function (e) { return e = Array.prototype.slice.call(arguments).join(" "), i.addClass(e) }, remove: function (e) { return e = Array.prototype.slice.call(arguments).join(" "), i.removeClass(e) }, toggle: function (e, t) { return i.toggleClass(e, t) }, contains: function (e) { return i.hasClass(e) } } }; if (n.defineProperty) { var r = { get: o, enumerable: !0, configurable: !0 }; try { n.defineProperty(s, t, r) } catch (e) { void 0 !== e.number && -2146823252 !== e.number || (r.enumerable = !1, n.defineProperty(s, t, r)) } } else n[i].__defineGetter__ && s.__defineGetter__(t, o) } }(window); var t, c, i, s = document.createElement("_"); if (s.classList.add("c1", "c2"), !s.classList.contains("c2")) { var n = DOMTokenList.prototype.add, o = DOMTokenList.prototype.remove; DOMTokenList.prototype.add = function () { Array.prototype.forEach.call(arguments, n.bind(this)) }, DOMTokenList.prototype.remove = function () { Array.prototype.forEach.call(arguments, o.bind(this)) } } if (s.classList.toggle("c3", !1), s.classList.contains("c3")) { var h = DOMTokenList.prototype.toggle; DOMTokenList.prototype.toggle = function (e, t) { return 1 in arguments && !this.contains(e) == !t ? t : h.call(this, e) } } function O(e, t) { for (var i, s = [], n = t || e.selectedOptions, o = 0, r = n.length; o < r; o++)(i = n[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || s.push(i.value || i.text); return e.multiple ? s : s.length ? s[0] : null } s = null, String.prototype.startsWith || (t = function () { try { var e = {}, t = Object.defineProperty, i = t(e, e, e) && t } catch (e) { } return i }(), c = {}.toString, i = function (e) { if (null == this) throw new TypeError; var t = String(this); if (e && "[object RegExp]" == c.call(e)) throw new TypeError; var i = t.length, s = String(e), n = s.length, o = 1 < arguments.length ? arguments[1] : void 0, r = o ? Number(o) : 0; r != r && (r = 0); var l = Math.min(Math.max(r, 0), i); if (i < n + l) return !1; for (var a = -1; ++a < n;)if (t.charCodeAt(l + a) != s.charCodeAt(a)) return !1; return !0 }, t ? t(String.prototype, "startsWith", { value: i, configurable: !0, writable: !0 }) : String.prototype.startsWith = i), Object.keys || (Object.keys = function (e, t, i) { for (t in i = [], e) i.hasOwnProperty.call(e, t) && i.push(t); return i }), HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", { get: function () { return this.querySelectorAll(":checked") } }); var p = { useDefault: !1, _set: z.valHooks.select.set }; z.valHooks.select.set = function (e, t) { return t && !p.useDefault && z(e).data("selected", !0), p._set.apply(this, arguments) }; var T = null, u = function () { try { return new Event("change"), !0 } catch (e) { return !1 } }(); function k(e, t, i, s) { for (var n = ["display", "subtext", "tokens"], o = !1, r = 0; r < n.length; r++) { var l = n[r], a = e[l]; if (a && (a = a.toString(), "display" === l && (a = a.replace(/<[^>]+>/g, "")), s && (a = w(a)), a = a.toUpperCase(), o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break } return o } function A(e) { return parseInt(e, 10) || 0 } z.fn.triggerNative = function (e) { var t, i = this[0]; i.dispatchEvent ? (u ? t = new Event(e, { bubbles: !0 }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e) }; var f = { "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010a": "C", "\u010c": "C", "\u0107": "c", "\u0109": "c", "\u010b": "c", "\u010d": "c", "\u010e": "D", "\u0110": "D", "\u010f": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011a": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011b": "e", "\u011c": "G", "\u011e": "G", "\u0120": "G", "\u0122": "G", "\u011d": "g", "\u011f": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012a": "I", "\u012c": "I", "\u012e": "I", "\u0130": "I", "\u0129": "i", "\u012b": "i", "\u012d": "i", "\u012f": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013b": "L", "\u013d": "L", "\u013f": "L", "\u0141": "L", "\u013a": "l", "\u013c": "l", "\u013e": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014a": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014b": "n", "\u014c": "O", "\u014e": "O", "\u0150": "O", "\u014d": "o", "\u014f": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015a": "S", "\u015c": "S", "\u015e": "S", "\u0160": "S", "\u015b": "s", "\u015d": "s", "\u015f": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016a": "U", "\u016c": "U", "\u016e": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016b": "u", "\u016d": "u", "\u016f": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017b": "Z", "\u017d": "Z", "\u017a": "z", "\u017c": "z", "\u017e": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017f": "s" }, m = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, g = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g"); function b(e) { return f[e] } function w(e) { return (e = e.toString()) && e.replace(m, b).replace(g, "") } var I, x, $, y, S, E = (I = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, x = function (e) { return I[e] }, $ = "(?:" + Object.keys(I).join("|") + ")", y = RegExp($), S = RegExp($, "g"), function (e) { return e = null == e ? "" : "" + e, y.test(e) ? e.replace(S, x) : e }), C = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" }, L = 27, N = 13, D = 32, H = 9, B = 38, W = 40, M = { success: !1, major: "3" }; try { M.full = (z.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), M.major = M.full[0], M.success = !0 } catch (e) { } var R = 0, U = ".bs.select", j = { DISABLED: "disabled", DIVIDER: "divider", SHOW: "open", DROPUP: "dropup", MENU: "dropdown-menu", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left", BUTTONCLASS: "btn-default", POPOVERHEADER: "popover-title", ICONBASE: "glyphicon", TICKICON: "glyphicon-ok" }, V = { MENU: "." + j.MENU }, F = { span: document.createElement("span"), i: document.createElement("i"), subtext: document.createElement("small"), a: document.createElement("a"), li: document.createElement("li"), whitespace: document.createTextNode("\xa0"), fragment: document.createDocumentFragment() }; F.a.setAttribute("role", "option"), F.subtext.className = "text-muted", F.text = F.span.cloneNode(!1), F.text.className = "text", F.checkMark = F.span.cloneNode(!1); var _ = new RegExp(B + "|" + W), G = new RegExp("^" + H + "$|" + L), q = function (e, t, i) { var s = F.li.cloneNode(!1); return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s }, K = function (e, t, i) { var s = F.a.cloneNode(!0); return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && (s.className = t), "4" === M.major && s.classList.add("dropdown-item"), i && s.setAttribute("style", i), s }, Y = function (e, t) { var i, s, n = F.text.cloneNode(!1); if (e.content) n.innerHTML = e.content; else { if (n.textContent = e.text, e.icon) { var o = F.whitespace.cloneNode(!1); (s = (!0 === t ? F.i : F.span).cloneNode(!1)).className = e.iconBase + " " + e.icon, F.fragment.appendChild(s), F.fragment.appendChild(o) } e.subtext && ((i = F.subtext.cloneNode(!1)).textContent = e.subtext, n.appendChild(i)) } if (!0 === t) for (; 0 < n.childNodes.length;)F.fragment.appendChild(n.childNodes[0]); else F.fragment.appendChild(n); return F.fragment }, Z = function (e) { var t, i, s = F.text.cloneNode(!1); if (s.innerHTML = e.label, e.icon) { var n = F.whitespace.cloneNode(!1); (i = F.span.cloneNode(!1)).className = e.iconBase + " " + e.icon, F.fragment.appendChild(i), F.fragment.appendChild(n) } return e.subtext && ((t = F.subtext.cloneNode(!1)).textContent = e.subtext, s.appendChild(t)), F.fragment.appendChild(s), F.fragment }, J = function (e, t) { var i = this; p.useDefault || (z.valHooks.select.set = p._set, p.useDefault = !0), this.$element = z(e), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t, this.selectpicker = { main: {}, search: {}, current: {}, view: {}, keydown: { keyHistory: "", resetKeyHistory: { start: function () { return setTimeout(function () { i.selectpicker.keydown.keyHistory = "" }, 800) } } } }, null === this.options.title && (this.options.title = this.$element.attr("title")); var s = this.options.windowPadding; "number" == typeof s && (this.options.windowPadding = [s, s, s, s]), this.val = J.prototype.val, this.render = J.prototype.render, this.refresh = J.prototype.refresh, this.setStyle = J.prototype.setStyle, this.selectAll = J.prototype.selectAll, this.deselectAll = J.prototype.deselectAll, this.destroy = J.prototype.destroy, this.remove = J.prototype.remove, this.show = J.prototype.show, this.hide = J.prototype.hide, this.init() }; function Q(e) { var l, a = arguments, c = e; if ([].shift.apply(a), !M.success) { try { M.full = (z.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".") } catch (e) { J.BootstrapVersion ? M.full = J.BootstrapVersion.split(" ")[0].split(".") : (M.full = [M.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e)) } M.major = M.full[0], M.success = !0 } if ("4" === M.major) { var t = []; J.DEFAULTS.style === j.BUTTONCLASS && t.push({ name: "style", className: "BUTTONCLASS" }), J.DEFAULTS.iconBase === j.ICONBASE && t.push({ name: "iconBase", className: "ICONBASE" }), J.DEFAULTS.tickIcon === j.TICKICON && t.push({ name: "tickIcon", className: "TICKICON" }), j.DIVIDER = "dropdown-divider", j.SHOW = "show", j.BUTTONCLASS = "btn-light", j.POPOVERHEADER = "popover-header", j.ICONBASE = "", j.TICKICON = "bs-ok-default"; for (var i = 0; i < t.length; i++) { e = t[i]; J.DEFAULTS[e.name] = j[e.className] } } var s = this.each(function () { var e = z(this); if (e.is("select")) { var t = e.data("selectpicker"), i = "object" == typeof c && c; if (t) { if (i) for (var s in i) i.hasOwnProperty(s) && (t.options[s] = i[s]) } else { var n = e.data(); for (var o in n) n.hasOwnProperty(o) && -1 !== z.inArray(o, d) && delete n[o]; var r = z.extend({}, J.DEFAULTS, z.fn.selectpicker.defaults || {}, n, i); r.template = z.extend({}, J.DEFAULTS.template, z.fn.selectpicker.defaults ? z.fn.selectpicker.defaults.template : {}, n.template, i.template), e.data("selectpicker", t = new J(this, r)) } "string" == typeof c && (l = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c]) } }); return void 0 !== l ? l : s } J.VERSION = "1.13.10", J.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function (e, t) { return 1 == e ? "{0} item selected" : "{0} items selected" }, maxOptionsText: function (e, t) { return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"] }, selectAllText: "Select All", deselectAllText: "Deselect All", doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: j.BUTTONCLASS, size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: j.ICONBASE, tickIcon: j.TICKICON, showTick: !1, template: { caret: '<span class="caret"></span>' }, maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1, windowPadding: 0, virtualScroll: 600, display: !1, sanitize: !0, sanitizeFn: null, whiteList: e }, J.prototype = { constructor: J, init: function () { var i = this, e = this.$element.attr("id"); R++, this.selectId = "bs-select-" + R, this.$element[0].classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$element[0].classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.$element.after(this.$newElement).prependTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(V.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element[0].classList.remove("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(j.MENURIGHT), void 0 !== e && this.$button.attr("data-id", e), this.checkDisabled(), this.clickListener(), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.render(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + U, function () { if (i.isVirtual()) { var e = i.$menuInner[0], t = e.firstChild.cloneNode(!1); e.replaceChild(t, e.firstChild), e.scrollTop = 0 } }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function (e) { i.$element.trigger("hide" + U, e) }, "hidden.bs.dropdown": function (e) { i.$element.trigger("hidden" + U, e) }, "show.bs.dropdown": function (e) { i.$element.trigger("show" + U, e) }, "shown.bs.dropdown": function (e) { i.$element.trigger("shown" + U, e) } }), i.$element[0].hasAttribute("required") && this.$element.on("invalid" + U, function () { i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + U + ".invalid", function () { i.$element.val(i.$element.val()).off("shown" + U + ".invalid") }).on("rendered" + U, function () { this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + U) }), i.$button.on("blur" + U, function () { i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + U) }) }), setTimeout(function () { i.createLi(), i.$element.trigger("loaded" + U) }) }, createDropdown: function () { var e = this.multiple || this.options.showTick ? " show-tick" : "", t = this.multiple ? ' aria-multiselectable="true"' : "", i = "", s = this.autofocus ? " autofocus" : ""; M.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn"); var n, o = "", r = "", l = "", a = ""; return this.options.header && (o = '<div class="' + j.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (r = '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + E(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (l = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + j.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + j.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (a = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + j.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), n = '<div class="dropdown bootstrap-select' + e + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + s + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === M.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + j.MENU + " " + ("4" === M.major ? "" : j.SHOW) + '">' + o + r + l + '<div class="inner ' + j.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + t + '><ul class="' + j.MENU + " inner " + ("4" === M.major ? j.SHOW : "") + '" role="presentation"></ul></div>' + a + "</div></div>", z(n) }, setPositionData: function () { this.selectpicker.view.canHighlight = []; for (var e = this.selectpicker.view.size = 0; e < this.selectpicker.current.data.length; e++) { var t = this.selectpicker.current.data[e], i = !0; "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, t.posinset = this.selectpicker.view.size), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height } }, isVirtual: function () { return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll }, createView: function (A, e, t) { var L, N, D = this, i = 0, H = []; if (this.selectpicker.current = A ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), e) if (t) i = this.$menuInner[0].scrollTop; else if (!D.multiple) { var s = D.$element[0], n = (s.options[s.selectedIndex] || {}).liIndex; if ("number" == typeof n && !1 !== D.options.size) { var o = D.selectpicker.main.data[n], r = o && o.position; r && (i = r - (D.sizeInfo.menuInnerHeight + D.sizeInfo.liHeight) / 2) } } function l(e, t) { var i, s, n, o, r, l, a, c, d, h, p = D.selectpicker.current.elements.length, u = [], f = !0, m = D.isVirtual(); D.selectpicker.view.scrollTop = e, !0 === m && D.sizeInfo.hasScrollBar && D.$menu[0].offsetWidth > D.sizeInfo.totalMenuWidth && (D.sizeInfo.menuWidth = D.$menu[0].offsetWidth, D.sizeInfo.totalMenuWidth = D.sizeInfo.menuWidth + D.sizeInfo.scrollBarWidth, D.$menu.css("min-width", D.sizeInfo.menuWidth)), i = Math.ceil(D.sizeInfo.menuInnerHeight / D.sizeInfo.liHeight * 1.5), s = Math.round(p / i) || 1; for (var v = 0; v < s; v++) { var g = (v + 1) * i; if (v === s - 1 && (g = p), u[v] = [v * i + (v ? 1 : 0), g], !p) break; void 0 === r && e <= D.selectpicker.current.data[g - 1].position - D.sizeInfo.menuInnerHeight && (r = v) } if (void 0 === r && (r = 0), l = [D.selectpicker.view.position0, D.selectpicker.view.position1], n = Math.max(0, r - 1), o = Math.min(s - 1, r + 1), D.selectpicker.view.position0 = !1 === m ? 0 : Math.max(0, u[n][0]) || 0, D.selectpicker.view.position1 = !1 === m ? p : Math.min(p, u[o][1]) || 0, a = l[0] !== D.selectpicker.view.position0 || l[1] !== D.selectpicker.view.position1, void 0 !== D.activeIndex && (N = D.selectpicker.main.elements[D.prevActiveIndex], H = D.selectpicker.main.elements[D.activeIndex], L = D.selectpicker.main.elements[D.selectedIndex], t && (D.activeIndex !== D.selectedIndex && D.defocusItem(H), D.activeIndex = void 0), D.activeIndex && D.activeIndex !== D.selectedIndex && D.defocusItem(L)), void 0 !== D.prevActiveIndex && D.prevActiveIndex !== D.activeIndex && D.prevActiveIndex !== D.selectedIndex && D.defocusItem(N), (t || a) && (c = D.selectpicker.view.visibleElements ? D.selectpicker.view.visibleElements.slice() : [], D.selectpicker.view.visibleElements = !1 === m ? D.selectpicker.current.elements : D.selectpicker.current.elements.slice(D.selectpicker.view.position0, D.selectpicker.view.position1), D.setOptionStatus(), (A || !1 === m && t) && (d = c, h = D.selectpicker.view.visibleElements, f = !(d.length === h.length && d.every(function (e, t) { return e === h[t] }))), (t || !0 === m) && f)) { var b, w, I = D.$menuInner[0], x = document.createDocumentFragment(), k = I.firstChild.cloneNode(!1), $ = D.selectpicker.view.visibleElements, y = []; I.replaceChild(k, I.firstChild); v = 0; for (var S = $.length; v < S; v++) { var E, C, O = $[v]; D.options.sanitize && (E = O.lastChild) && (C = D.selectpicker.current.data[v + D.selectpicker.view.position0]) && C.content && !C.sanitized && (y.push(E), C.sanitized = !0), x.appendChild(O) } D.options.sanitize && y.length && P(y, D.options.whiteList, D.options.sanitizeFn), I.firstChild.style.marginBottom = !0 === m ? (b = 0 === D.selectpicker.view.position0 ? 0 : D.selectpicker.current.data[D.selectpicker.view.position0 - 1].position, w = D.selectpicker.view.position1 > p - 1 ? 0 : D.selectpicker.current.data[p - 1].position - D.selectpicker.current.data[D.selectpicker.view.position1 - 1].position, I.firstChild.style.marginTop = b + "px", w + "px") : I.firstChild.style.marginTop = 0, I.firstChild.appendChild(x) } if (D.prevActiveIndex = D.activeIndex, D.options.liveSearch) { if (A && t) { var z, T = 0; D.selectpicker.view.canHighlight[T] || (T = 1 + D.selectpicker.view.canHighlight.slice(1).indexOf(!0)), z = D.selectpicker.view.visibleElements[T], D.defocusItem(D.selectpicker.view.currentActive), D.activeIndex = (D.selectpicker.current.data[T] || {}).index, D.focusItem(z) } } else D.$menuInner.trigger("focus") } l(i, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function (e, t) { D.noScroll || l(this.scrollTop, t), D.noScroll = !1 }), z(window).off("resize" + U + "." + this.selectId + ".createView").on("resize" + U + "." + this.selectId + ".createView", function () { D.$newElement.hasClass(j.SHOW) && l(D.$menuInner[0].scrollTop) }) }, focusItem: function (e, t, i) { if (e) { t = t || this.selectpicker.main.data[this.activeIndex]; var s = e.firstChild; s && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", t.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), e.classList.add("active"), s.classList.add("active"))) } }, defocusItem: function (e) { e && (e.classList.remove("active"), e.firstChild && e.firstChild.classList.remove("active")) }, setPlaceholder: function () { var e = !1; if (this.options.title && !this.multiple) { this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), e = !0; var t = this.$element[0], i = !1, s = !this.selectpicker.view.titleOption.parentNode; if (s) this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", i = void 0 === z(t.options[t.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected"); (s || 0 !== this.selectpicker.view.titleOption.index) && t.insertBefore(this.selectpicker.view.titleOption, t.firstChild), i && (t.selectedIndex = 0) } return e }, createLi: function () { var c = this, f = this.options.iconBase, m = ':not([hidden]):not([data-hidden="true"])', v = [], g = [], d = 0, b = 0, e = this.setPlaceholder() ? 1 : 0; this.options.hideDisabled && (m += ":not(:disabled)"), !c.options.showTick && !c.multiple || F.checkMark.parentNode || (F.checkMark.className = f + " " + c.options.tickIcon + " check-mark", F.a.appendChild(F.checkMark)); var t = this.$element[0].querySelectorAll("select > *" + m); function w(e) { var t = g[g.length - 1]; t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider", v.push(q(!1, j.DIVIDER, e.optID ? e.optID + "div" : void 0)), g.push(e)) } function I(e, t) { if ((t = t || {}).divider = "true" === e.getAttribute("data-divider"), t.divider) w({ optID: t.optID }); else { var i = g.length, s = e.style.cssText, n = s ? E(s) : "", o = (e.className || "") + (t.optgroupClass || ""); t.optID && (o = "opt " + o), t.text = e.textContent, t.content = e.getAttribute("data-content"), t.tokens = e.getAttribute("data-tokens"), t.subtext = e.getAttribute("data-subtext"), t.icon = e.getAttribute("data-icon"), t.iconBase = f; var r = Y(t), l = q(K(r, o, n), "", t.optID); l.firstChild && (l.firstChild.id = c.selectId + "-" + i), v.push(l), e.liIndex = i, t.display = t.content || t.text, t.type = "option", t.index = i, t.option = e, t.disabled = t.disabled || e.disabled, g.push(t); var a = 0; t.display && (a += t.display.length), t.subtext && (a += t.subtext.length), t.icon && (a += 1), d < a && (d = a, c.selectpicker.view.widestOption = v[v.length - 1]) } } function i(e, t) { var i = t[e], s = t[e - 1], n = t[e + 1], o = i.querySelectorAll("option" + m); if (o.length) { var r, l, a = { label: E(i.label), subtext: i.getAttribute("data-subtext"), icon: i.getAttribute("data-icon"), iconBase: f }, c = " " + (i.className || ""); b++, s && w({ optID: b }); var d = Z(a); v.push(q(d, "dropdown-header" + c, b)), g.push({ display: a.label, subtext: a.subtext, type: "optgroup-label", optID: b }); for (var h = 0, p = o.length; h < p; h++) { var u = o[h]; 0 === h && (l = (r = g.length - 1) + p), I(u, { headerIndex: r, lastIndex: l, optID: b, optgroupClass: c, disabled: i.disabled }) } n && w({ optID: b }) } } for (var s = t.length; e < s; e++) { var n = t[e]; "OPTGROUP" !== n.tagName ? I(n, {}) : i(e, t) } this.selectpicker.main.elements = v, this.selectpicker.main.data = g, this.selectpicker.current = this.selectpicker.main }, findLis: function () { return this.$menuInner.find(".inner > li") }, render: function () { this.setPlaceholder(); var e, t, i = this, s = this.$element[0], n = function (e, t) { var i, s = e.selectedOptions, n = []; if (t) { for (var o = 0, r = s.length; o < r; o++)(i = s[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || n.push(i); return n } return s }(s, this.options.hideDisabled), o = n.length, r = this.$button[0], l = r.querySelector(".filter-option-inner-inner"), a = document.createTextNode(this.options.multipleSeparator), c = F.fragment.cloneNode(!1), d = !1; if (r.classList.toggle("bs-placeholder", i.multiple ? !o : !O(s, n)), this.tabIndex(), "static" === this.options.selectedTextFormat) c = Y({ text: this.options.title }, !0); else if ((e = this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < o) && (e = 1 < (t = this.options.selectedTextFormat.split(">")).length && o > t[1] || 1 === t.length && 2 <= o), !1 === e) { for (var h = 0; h < o && h < 50; h++) { var p = n[h], u = {}, f = { content: p.getAttribute("data-content"), subtext: p.getAttribute("data-subtext"), icon: p.getAttribute("data-icon") }; this.multiple && 0 < h && c.appendChild(a.cloneNode(!1)), p.title ? u.text = p.title : f.content && i.options.showContent ? (u.content = f.content.toString(), d = !0) : (i.options.showIcon && (u.icon = f.icon, u.iconBase = this.options.iconBase), i.options.showSubtext && !i.multiple && f.subtext && (u.subtext = " " + f.subtext), u.text = p.textContent.trim()), c.appendChild(Y(u, !0)) } 49 < o && c.appendChild(document.createTextNode("...")) } else { var m = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])'; this.options.hideDisabled && (m += ":not(:disabled)"); var v = this.$element[0].querySelectorAll("select > option" + m + ", optgroup" + m + " option" + m).length, g = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o, v) : this.options.countSelectedText; c = Y({ text: g.replace("{0}", o.toString()).replace("{1}", v.toString()) }, !0) } if (null == this.options.title && (this.options.title = this.$element.attr("title")), c.childNodes.length || (c = Y({ text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText }, !0)), r.title = c.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && d && P([c], i.options.whiteList, i.options.sanitizeFn), l.innerHTML = "", l.appendChild(c), M.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) { var b = r.querySelector(".filter-expand"), w = l.cloneNode(!0); w.className = "filter-expand", b ? r.replaceChild(w, b) : r.appendChild(w) } this.$element.trigger("rendered" + U) }, setStyle: function (e, t) { var i, s = this.$button[0], n = this.$newElement[0], o = this.options.style.trim(); this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), M.major < 4 && (n.classList.add("bs3"), n.parentNode.classList.contains("input-group") && (n.previousElementSibling || n.nextElementSibling) && (n.previousElementSibling || n.nextElementSibling).classList.contains("input-group-addon") && n.classList.add("bs3-has-addon")), i = e ? e.trim() : o, "add" == t ? i && s.classList.add.apply(s.classList, i.split(" ")) : "remove" == t ? i && s.classList.remove.apply(s.classList, i.split(" ")) : (o && s.classList.remove.apply(s.classList, o.split(" ")), i && s.classList.add.apply(s.classList, i.split(" "))) }, liHeight: function (e) { if (e || !1 !== this.options.size && !this.sizeInfo) { this.sizeInfo || (this.sizeInfo = {}); var t = document.createElement("div"), i = document.createElement("div"), s = document.createElement("div"), n = document.createElement("ul"), o = document.createElement("li"), r = document.createElement("li"), l = document.createElement("li"), a = document.createElement("a"), c = document.createElement("span"), d = this.options.header && 0 < this.$menu.find("." + j.POPOVERHEADER).length ? this.$menu.find("." + j.POPOVERHEADER)[0].cloneNode(!0) : null, h = this.options.liveSearch ? document.createElement("div") : null, p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null, u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null, f = this.$element.find("option")[0]; if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, c.className = "text", a.className = "dropdown-item " + (f ? f.className : ""), t.className = this.$menu[0].parentNode.className + " " + j.SHOW, t.style.width = this.sizeInfo.selectWidth + "px", "auto" === this.options.width && (i.style.minWidth = 0), i.className = j.MENU + " " + j.SHOW, s.className = "inner " + j.SHOW, n.className = j.MENU + " inner " + ("4" === M.major ? j.SHOW : ""), o.className = j.DIVIDER, r.className = "dropdown-header", c.appendChild(document.createTextNode("\u200b")), a.appendChild(c), l.appendChild(a), r.appendChild(c.cloneNode(!0)), this.selectpicker.view.widestOption && n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), n.appendChild(l), n.appendChild(o), n.appendChild(r), d && i.appendChild(d), h) { var m = document.createElement("input"); h.className = "bs-searchbox", m.className = "form-control", h.appendChild(m), i.appendChild(h) } p && i.appendChild(p), s.appendChild(n), i.appendChild(s), u && i.appendChild(u), t.appendChild(i), document.body.appendChild(t); var v, g = l.offsetHeight, b = r ? r.offsetHeight : 0, w = d ? d.offsetHeight : 0, I = h ? h.offsetHeight : 0, x = p ? p.offsetHeight : 0, k = u ? u.offsetHeight : 0, $ = z(o).outerHeight(!0), y = !!window.getComputedStyle && window.getComputedStyle(i), S = i.offsetWidth, E = y ? null : z(i), C = { vert: A(y ? y.paddingTop : E.css("paddingTop")) + A(y ? y.paddingBottom : E.css("paddingBottom")) + A(y ? y.borderTopWidth : E.css("borderTopWidth")) + A(y ? y.borderBottomWidth : E.css("borderBottomWidth")), horiz: A(y ? y.paddingLeft : E.css("paddingLeft")) + A(y ? y.paddingRight : E.css("paddingRight")) + A(y ? y.borderLeftWidth : E.css("borderLeftWidth")) + A(y ? y.borderRightWidth : E.css("borderRightWidth")) }, O = { vert: C.vert + A(y ? y.marginTop : E.css("marginTop")) + A(y ? y.marginBottom : E.css("marginBottom")) + 2, horiz: C.horiz + A(y ? y.marginLeft : E.css("marginLeft")) + A(y ? y.marginRight : E.css("marginRight")) + 2 }; s.style.overflowY = "scroll", v = i.offsetWidth - S, document.body.removeChild(t), this.sizeInfo.liHeight = g, this.sizeInfo.dropdownHeaderHeight = b, this.sizeInfo.headerHeight = w, this.sizeInfo.searchHeight = I, this.sizeInfo.actionsHeight = x, this.sizeInfo.doneButtonHeight = k, this.sizeInfo.dividerHeight = $, this.sizeInfo.menuPadding = C, this.sizeInfo.menuExtras = O, this.sizeInfo.menuWidth = S, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = v, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData() } }, getSelectPosition: function () { var e, t = z(window), i = this.$newElement.offset(), s = z(this.options.container); this.options.container && s.length && !s.is("body") ? ((e = s.offset()).top += parseInt(s.css("borderTopWidth")), e.left += parseInt(s.css("borderLeftWidth"))) : e = { top: 0, left: 0 }; var n = this.options.windowPadding; this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(), this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - n[2], this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(), this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - n[1], this.sizeInfo.selectOffsetTop -= n[0], this.sizeInfo.selectOffsetLeft -= n[3] }, setMenuSize: function (e) { this.getSelectPosition(); var t, i, s, n, o, r, l, a = this.sizeInfo.selectWidth, c = this.sizeInfo.liHeight, d = this.sizeInfo.headerHeight, h = this.sizeInfo.searchHeight, p = this.sizeInfo.actionsHeight, u = this.sizeInfo.doneButtonHeight, f = this.sizeInfo.dividerHeight, m = this.sizeInfo.menuPadding, v = 0; if (this.options.dropupAuto && (l = c * this.selectpicker.current.elements.length + m.vert, this.$newElement.toggleClass(j.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot)), "auto" === this.options.size) n = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = n + d + h + p + u, r = Math.max(n - m.vert, 0), this.$newElement.hasClass(j.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), t = (o = i) - d - h - p - u - m.vert; else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) { for (var g = 0; g < this.options.size; g++)"divider" === this.selectpicker.current.data[g].type && v++; t = (i = c * this.options.size + v * f + m.vert) - m.vert, o = i + d + h + p + u, s = r = "" } "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(j.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a), this.$menu.css({ "max-height": o + "px", overflow: "hidden", "min-height": s + "px" }), this.$menuInner.css({ "max-height": t + "px", "overflow-y": "auto", "min-height": r + "px" }), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth, this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)), this.dropdown && this.dropdown._popper && this.dropdown._popper.update() }, setSize: function (e) { if (this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) { var t = this, i = z(window); this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function () { return t.setMenuSize() }), "auto" === this.options.size ? i.off("resize" + U + "." + this.selectId + ".setMenuSize scroll" + U + "." + this.selectId + ".setMenuSize").on("resize" + U + "." + this.selectId + ".setMenuSize scroll" + U + "." + this.selectId + ".setMenuSize", function () { return t.setMenuSize() }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + U + "." + this.selectId + ".setMenuSize scroll" + U + "." + this.selectId + ".setMenuSize"), t.createView(!1, !0, e) } }, setWidth: function () { var i = this; "auto" === this.options.width ? requestAnimationFrame(function () { i.$menu.css("min-width", "0"), i.$element.on("loaded" + U, function () { i.liHeight(), i.setMenuSize(); var e = i.$newElement.clone().appendTo("body"), t = e.css("width", "auto").children("button").outerWidth(); e.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t), i.$newElement.css("width", i.sizeInfo.selectWidth + "px") }) }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width") }, selectPosition: function () { this.$bsContainer = z('<div class="bs-container" />'); var s, n, o, r = this, l = z(this.options.container), e = function (e) { var t = {}, i = r.options.display || !!z.fn.dropdown.Constructor.Default && z.fn.dropdown.Constructor.Default.display; r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(j.DROPUP, e.hasClass(j.DROPUP)), s = e.offset(), l.is("body") ? n = { top: 0, left: 0 } : ((n = l.offset()).top += parseInt(l.css("borderTopWidth")) - l.scrollTop(), n.left += parseInt(l.css("borderLeftWidth")) - l.scrollLeft()), o = e.hasClass(j.DROPUP) ? 0 : e[0].offsetHeight, (M.major < 4 || "static" === i) && (t.top = s.top - n.top + o, t.left = s.left - n.left), t.width = e[0].offsetWidth, r.$bsContainer.css(t) }; this.$button.on("click.bs.dropdown.data-api", function () { r.isDisabled() || (e(r.$newElement), r.$bsContainer.appendTo(r.options.container).toggleClass(j.SHOW, !r.$button.hasClass(j.SHOW)).append(r.$menu)) }), z(window).off("resize" + U + "." + this.selectId + " scroll" + U + "." + this.selectId).on("resize" + U + "." + this.selectId + " scroll" + U + "." + this.selectId, function () { r.$newElement.hasClass(j.SHOW) && e(r.$newElement) }), this.$element.on("hide" + U, function () { r.$menu.data("height", r.$menu.height()), r.$bsContainer.detach() }) }, setOptionStatus: function (e) { var t = this; if (t.noScroll = !1, t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length) for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) { var s = t.selectpicker.current.data[i + t.selectpicker.view.position0], n = s.option; n && (!0 !== e && t.setDisabled(s.index, s.disabled), t.setSelected(s.index, n.selected)) } }, setSelected: function (e, t) { var i, s, n = this.selectpicker.main.elements[e], o = this.selectpicker.main.data[e], r = void 0 !== this.activeIndex, l = this.activeIndex === e || t && !this.multiple && !r; o.selected = t, s = n.firstChild, t && (this.selectedIndex = e), n.classList.toggle("selected", t), l ? (this.focusItem(n, o), this.selectpicker.view.currentActive = n, this.activeIndex = e) : this.defocusItem(n), s && (s.classList.toggle("selected", t), t ? s.setAttribute("aria-selected", !0) : this.multiple ? s.setAttribute("aria-selected", !1) : s.removeAttribute("aria-selected")), l || r || !t || void 0 === this.prevActiveIndex || (i = this.selectpicker.main.elements[this.prevActiveIndex], this.defocusItem(i)) }, setDisabled: function (e, t) { var i, s = this.selectpicker.main.elements[e]; this.selectpicker.main.data[e].disabled = t, i = s.firstChild, s.classList.toggle(j.DISABLED, t), i && ("4" === M.major && i.classList.toggle(j.DISABLED, t), t ? (i.setAttribute("aria-disabled", t), i.setAttribute("tabindex", -1)) : (i.removeAttribute("aria-disabled"), i.setAttribute("tabindex", 0))) }, isDisabled: function () { return this.$element[0].disabled }, checkDisabled: function () { var e = this; this.isDisabled() ? (this.$newElement[0].classList.add(j.DISABLED), this.$button.addClass(j.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button[0].classList.contains(j.DISABLED) && (this.$newElement[0].classList.remove(j.DISABLED), this.$button.removeClass(j.DISABLED).attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.on("click", function () { return !e.isDisabled() }) }, tabIndex: function () { this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98) }, clickListener: function () { var C = this, t = z(document); function e() { C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$menuInner.trigger("focus") } function i() { C.dropdown && C.dropdown._popper && C.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i) } t.data("spaceSelect", !1), this.$button.on("keyup", function (e) { /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1)) }), this.$newElement.on("show.bs.dropdown", function () { 3 < M.major && !C.dropdown && (C.dropdown = C.$button.data("bs.dropdown"), C.dropdown._menu = C.$menu[0]) }), this.$button.on("click.bs.dropdown.data-api", function () { C.$newElement.hasClass(j.SHOW) || C.setSize() }), this.$element.on("shown" + U, function () { C.$menuInner[0].scrollTop !== C.selectpicker.view.scrollTop && (C.$menuInner[0].scrollTop = C.selectpicker.view.scrollTop), 3 < M.major ? requestAnimationFrame(i) : e() }), this.$menuInner.on("mouseenter", "li a", function (e) { var t = this.parentElement, i = C.isVirtual() ? C.selectpicker.view.position0 : 0, s = Array.prototype.indexOf.call(t.parentElement.children, t), n = C.selectpicker.current.data[s + i]; C.focusItem(t, n, !0) }), this.$menuInner.on("click", "li a", function (e, t) { var i = z(this), s = C.$element[0], n = C.isVirtual() ? C.selectpicker.view.position0 : 0, o = C.selectpicker.current.data[i.parent().index() + n], r = o.index, l = O(s), a = s.selectedIndex, c = s.options[a], d = !0; if (C.multiple && 1 !== C.options.maxOptions && e.stopPropagation(), e.preventDefault(), !C.isDisabled() && !i.parent().hasClass(j.DISABLED)) { var h = C.$element.find("option"), p = o.option, u = z(p), f = p.selected, m = u.parent("optgroup"), v = m.find("option"), g = C.options.maxOptions, b = m.data("maxOptions") || !1; if (r === C.activeIndex && (t = !0), t || (C.prevActiveIndex = C.activeIndex, C.activeIndex = void 0), C.multiple) { if (p.selected = !f, C.setSelected(r, !f), i.trigger("blur"), !1 !== g || !1 !== b) { var w = g < h.filter(":selected").length, I = b < m.find("option:selected").length; if (g && w || b && I) if (g && 1 == g) { h.prop("selected", !1), u.prop("selected", !0); for (var x = 0; x < h.length; x++)C.setSelected(x, !1); C.setSelected(r, !0) } else if (b && 1 == b) { m.find("option:selected").prop("selected", !1), u.prop("selected", !0); for (x = 0; x < v.length; x++) { p = v[x]; C.setSelected(h.index(p), !1) } C.setSelected(r, !0) } else { var k = "string" == typeof C.options.maxOptionsText ? [C.options.maxOptionsText, C.options.maxOptionsText] : C.options.maxOptionsText, $ = "function" == typeof k ? k(g, b) : k, y = $[0].replace("{n}", g), S = $[1].replace("{n}", b), E = z('<div class="notify"></div>'); $[2] && (y = y.replace("{var}", $[2][1 < g ? 0 : 1]), S = S.replace("{var}", $[2][1 < b ? 0 : 1])), u.prop("selected", !1), C.$menu.append(E), g && w && (E.append(z("<div>" + y + "</div>")), d = !1, C.$element.trigger("maxReached" + U)), b && I && (E.append(z("<div>" + S + "</div>")), d = !1, C.$element.trigger("maxReachedGrp" + U)), setTimeout(function () { C.setSelected(r, !1) }, 10), E.delay(750).fadeOut(300, function () { z(this).remove() }) } } } else c.selected = !1, p.selected = !0, C.setSelected(r, !0); !C.multiple || C.multiple && 1 === C.options.maxOptions ? C.$button.trigger("focus") : C.options.liveSearch && C.$searchbox.trigger("focus"), d && (C.multiple || a !== s.selectedIndex) && (T = [p.index, u.prop("selected"), l], C.$element.triggerNative("change")) } }), this.$menu.on("click", "li." + j.DISABLED + " a, ." + j.POPOVERHEADER + ", ." + j.POPOVERHEADER + " :not(.close)", function (e) { e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), C.options.liveSearch && !z(e.target).hasClass("close") ? C.$searchbox.trigger("focus") : C.$button.trigger("focus")) }), this.$menuInner.on("click", ".divider, .dropdown-header", function (e) { e.preventDefault(), e.stopPropagation(), C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$button.trigger("focus") }), this.$menu.on("click", "." + j.POPOVERHEADER + " .close", function () { C.$button.trigger("click") }), this.$searchbox.on("click", function (e) { e.stopPropagation() }), this.$menu.on("click", ".actions-btn", function (e) { C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$button.trigger("focus"), e.preventDefault(), e.stopPropagation(), z(this).hasClass("bs-select-all") ? C.selectAll() : C.deselectAll() }), this.$element.on("change" + U, function () { C.render(), C.$element.trigger("changed" + U, T), T = null }).on("focus" + U, function () { C.options.mobile || C.$button.trigger("focus") }) }, liveSearchListener: function () { var u = this, f = document.createElement("li"); this.$button.on("click.bs.dropdown.data-api", function () { u.$searchbox.val() && u.$searchbox.val("") }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function (e) { e.stopPropagation() }), this.$searchbox.on("input propertychange", function () { var e = u.$searchbox.val(); if (u.selectpicker.search.elements = [], u.selectpicker.search.data = [], e) { var t = [], i = e.toUpperCase(), s = {}, n = [], o = u._searchStyle(), r = u.options.liveSearchNormalize; r && (i = w(i)), u._$lisSelected = u.$menuInner.find(".selected"); for (var l = 0; l < u.selectpicker.main.data.length; l++) { var a = u.selectpicker.main.data[l]; s[l] || (s[l] = k(a, i, o, r)), s[l] && void 0 !== a.headerIndex && -1 === n.indexOf(a.headerIndex) && (0 < a.headerIndex && (s[a.headerIndex - 1] = !0, n.push(a.headerIndex - 1)), s[a.headerIndex] = !0, n.push(a.headerIndex), s[a.lastIndex + 1] = !0), s[l] && "optgroup-label" !== a.type && n.push(l) } l = 0; for (var c = n.length; l < c; l++) { var d = n[l], h = n[l - 1], p = (a = u.selectpicker.main.data[d], u.selectpicker.main.data[h]); ("divider" !== a.type || "divider" === a.type && p && "divider" !== p.type && c - 1 !== l) && (u.selectpicker.search.data.push(a), t.push(u.selectpicker.main.elements[d])) } u.activeIndex = void 0, u.noScroll = !0, u.$menuInner.scrollTop(0), u.selectpicker.search.elements = t, u.createView(!0), t.length || (f.className = "no-results", f.innerHTML = u.options.noneResultsText.replace("{0}", '"' + E(e) + '"'), u.$menuInner[0].firstChild.appendChild(f)) } else u.$menuInner.scrollTop(0), u.createView(!1) }) }, _searchStyle: function () { return this.options.liveSearchStyle || "contains" }, val: function (e) { var t = this.$element[0]; if (void 0 === e) return this.$element.val(); var i = O(t); if (T = [null, null, i], this.$element.val(e).trigger("changed" + U, T), this.$newElement.hasClass(j.SHOW)) if (this.multiple) this.setOptionStatus(!0); else { var s = (t.options[t.selectedIndex] || {}).liIndex; "number" == typeof s && (this.setSelected(this.selectedIndex, !1), this.setSelected(s, !0)) } return this.render(), T = null, this.$element }, changeAll: function (e) { if (this.multiple) { void 0 === e && (e = !0); var t = this.$element[0], i = 0, s = 0, n = O(t); t.classList.add("bs-select-hidden"); for (var o = 0, r = this.selectpicker.current.elements.length; o < r; o++) { var l = this.selectpicker.current.data[o], a = l.option; a && !l.disabled && "divider" !== l.type && (l.selected && i++, (a.selected = e) && s++) } t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), T = [null, null, n], this.$element.triggerNative("change")) } }, selectAll: function () { return this.changeAll(!0) }, deselectAll: function () { return this.changeAll(!1) }, toggle: function (e) { (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api") }, keydown: function (e) { var t, i, s, n, o, r = z(this), l = r.hasClass("dropdown-toggle"), a = (l ? r.closest(".dropdown") : r.closest(V.MENU)).data("this"), c = a.findLis(), d = !1, h = e.which === H && !l && !a.options.selectOnTab, p = _.test(e.which) || h, u = a.$menuInner[0].scrollTop, f = !0 === a.isVirtual() ? a.selectpicker.view.position0 : 0; if (!(i = a.$newElement.hasClass(j.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && (a.$button.trigger("click.bs.dropdown.data-api"), a.options.liveSearch)) a.$searchbox.trigger("focus"); else { if (e.which === L && i && (e.preventDefault(), a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), p) { if (!c.length) return; -1 !== (t = (s = a.selectpicker.main.elements[a.activeIndex]) ? Array.prototype.indexOf.call(s.parentElement.children, s) : -1) && a.defocusItem(s), e.which === B ? (-1 !== t && t--, t + f < 0 && (t += c.length), a.selectpicker.view.canHighlight[t + f] || -1 === (t = a.selectpicker.view.canHighlight.slice(0, t + f).lastIndexOf(!0) - f) && (t = c.length - 1)) : (e.which === W || h) && (++t + f >= a.selectpicker.view.canHighlight.length && (t = 0), a.selectpicker.view.canHighlight[t + f] || (t = t + 1 + a.selectpicker.view.canHighlight.slice(t + f + 1).indexOf(!0))), e.preventDefault(); var m = f + t; e.which === B ? 0 === f && t === c.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight, m = a.selectpicker.current.elements.length - 1) : d = (o = (n = a.selectpicker.current.data[m]).position - n.height) < u : (e.which === W || h) && (0 === t ? m = a.$menuInner[0].scrollTop = 0 : d = u < (o = (n = a.selectpicker.current.data[m]).position - a.sizeInfo.menuInnerHeight)), s = a.selectpicker.current.elements[m], a.activeIndex = a.selectpicker.current.data[m].index, a.focusItem(s), a.selectpicker.view.currentActive = s, d && (a.$menuInner[0].scrollTop = o), a.options.liveSearch ? a.$searchbox.trigger("focus") : r.trigger("focus") } else if (!r.is("input") && !G.test(e.which) || e.which === D && a.selectpicker.keydown.keyHistory) { var v, g, b = []; e.preventDefault(), a.selectpicker.keydown.keyHistory += C[e.which], a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel), a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(), g = a.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(g) && (g = g.charAt(0)); for (var w = 0; w < a.selectpicker.current.data.length; w++) { var I = a.selectpicker.current.data[w]; k(I, g, "startsWith", !0) && a.selectpicker.view.canHighlight[w] && b.push(I.index) } if (b.length) { var x = 0; c.removeClass("active").find("a").removeClass("active"), 1 === g.length && (-1 === (x = b.indexOf(a.activeIndex)) || x === b.length - 1 ? x = 0 : x++), v = b[x], d = 0 < u - (n = a.selectpicker.main.data[v]).position ? (o = n.position - n.height, !0) : (o = n.position - a.sizeInfo.menuInnerHeight, n.position > u + a.sizeInfo.menuInnerHeight), s = a.selectpicker.main.elements[v], a.activeIndex = b[x], a.focusItem(s), s && s.firstChild.focus(), d && (a.$menuInner[0].scrollTop = o), r.trigger("focus") } } i && (e.which === D && !a.selectpicker.keydown.keyHistory || e.which === N || e.which === H && a.options.selectOnTab) && (e.which !== D && e.preventDefault(), a.options.liveSearch && e.which === D || (a.$menuInner.find(".active a").trigger("click", !0), r.trigger("focus"), a.options.liveSearch || (e.preventDefault(), z(document).data("spaceSelect", !0)))) } }, mobile: function () { this.$element[0].classList.add("mobile-device") }, refresh: function () { var e = z.extend({}, this.options, this.$element.data()); this.options = e, this.checkDisabled(), this.setStyle(), this.render(), this.createLi(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + U) }, hide: function () { this.$newElement.hide() }, show: function () { this.$newElement.show() }, remove: function () { this.$newElement.remove(), this.$element.remove() }, destroy: function () { this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(U).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), z(window).off(U + "." + this.selectId) } }; var X = z.fn.selectpicker; z.fn.selectpicker = Q, z.fn.selectpicker.Constructor = J, z.fn.selectpicker.noConflict = function () { return z.fn.selectpicker = X, this }, z(document).off("keydown.bs.dropdown.data-api").on("keydown" + U, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', J.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (e) { e.stopPropagation() }), z(window).on("load" + U + ".data-api", function () { z(".selectpicker").each(function () { var e = z(this); Q.call(e, e.data()) }) }) }(e) });
//# sourceMappingURL=bootstrap-select.min.js.map
/*! =======================================================
                      VERSION  10.6.1              
========================================================= */
"use strict"; var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }, windowIsDefined = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)); !function (a) { if ("function" == typeof define && define.amd) define(["jquery"], a); else if ("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) { var b; try { b = require("jquery") } catch (c) { b = null } module.exports = a(b) } else window && (window.Slider = a(window.jQuery)) }(function (a) {
    var b = "slider", c = "bootstrapSlider"; windowIsDefined && !window.console && (window.console = {}), windowIsDefined && !window.console.log && (window.console.log = function () { }), windowIsDefined && !window.console.warn && (window.console.warn = function () { }); var d; return function (a) { function b() { } function c(a) { function c(b) { b.prototype.option || (b.prototype.option = function (b) { a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b)) }) } function e(b, c) { a.fn[b] = function (e) { if ("string" == typeof e) { for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) { var j = this[h], k = a.data(j, b); if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) { var l = k[e].apply(k, g); if (void 0 !== l && l !== k) return l } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'") } return this } var m = this.map(function () { var d = a.data(this, b); return d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)), a(this) }); return !m || m.length > 1 ? m : m[0] } } if (a) { var f = "undefined" == typeof console ? b : function (a) { console.error(a) }; return a.bridget = function (a, b) { c(b), e(a, b) }, a.bridget } } var d = Array.prototype.slice; c(a) }(a), function (a) {
        function e(b, c) { function d(a, b) { var c = "data-slider-" + b.replace(/_/g, "-"), d = a.getAttribute(c); try { return JSON.parse(d) } catch (e) { return d } } this._state = { value: null, enabled: null, offset: null, size: null, percentage: null, inDrag: !1, over: !1, tickIndex: null }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, "string" == typeof b ? this.element = document.querySelector(b) : b instanceof HTMLElement && (this.element = b), c = c ? c : {}; for (var e = Object.keys(this.defaultOptions), f = c.hasOwnProperty("min"), g = c.hasOwnProperty("max"), i = 0; i < e.length; i++) { var j = e[i], k = c[j]; k = "undefined" != typeof k ? k : d(this.element, j), k = null !== k ? k : this.defaultOptions[j], this.options || (this.options = {}), this.options[j] = k } if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), "auto" === this.options.rtl) { var l = window.getComputedStyle(this.element); null != l ? this.options.rtl = "rtl" === l.direction : this.options.rtl = "rtl" === this.element.style.direction } "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right"; var m, n, o, p, q, r = this.element.style.width, s = !1, t = this.element.parentNode; if (this.sliderElem) s = !0; else { this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider"; var u = document.createElement("div"); u.className = "slider-track", n = document.createElement("div"), n.className = "slider-track-low", m = document.createElement("div"), m.className = "slider-selection", o = document.createElement("div"), o.className = "slider-track-high", p = document.createElement("div"), p.className = "slider-handle min-slider-handle", p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", this.options.min), p.setAttribute("aria-valuemax", this.options.max), q = document.createElement("div"), q.className = "slider-handle max-slider-handle", q.setAttribute("role", "slider"), q.setAttribute("aria-valuemin", this.options.min), q.setAttribute("aria-valuemax", this.options.max), u.appendChild(n), u.appendChild(m), u.appendChild(o), this.rangeHighlightElements = []; var v = this.options.rangeHighlights; if (Array.isArray(v) && v.length > 0) for (var w = 0; w < v.length; w++) { var x = document.createElement("div"), y = v[w]["class"] || ""; x.className = "slider-rangeHighlight slider-selection " + y, this.rangeHighlightElements.push(x), u.appendChild(x) } var z = Array.isArray(this.options.labelledby); if (z && this.options.labelledby[0] && p.setAttribute("aria-labelledby", this.options.labelledby[0]), z && this.options.labelledby[1] && q.setAttribute("aria-labelledby", this.options.labelledby[1]), !z && this.options.labelledby && (p.setAttribute("aria-labelledby", this.options.labelledby), q.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) { for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", i = 0; i < this.options.ticks.length; i++) { var A = document.createElement("div"); if (A.className = "slider-tick", this.options.ticks_tooltip) { var B = this._addTickListener(), C = B.addMouseEnter(this, A, i), D = B.addMouseLeave(this, A); this.ticksCallbackMap[i] = { mouseEnter: C, mouseLeave: D } } this.ticks.push(A), this.ticksContainer.appendChild(A) } m.className += " tick-slider-selection" } if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", i = 0; i < this.options.ticks_labels.length; i++) { var E = document.createElement("div"), F = 0 === this.options.ticks_positions.length, G = this.options.reversed && F ? this.options.ticks_labels.length - (i + 1) : i; E.className = "slider-tick-label", E.innerHTML = this.options.ticks_labels[G], this.tickLabels.push(E), this.tickLabelContainer.appendChild(E) } var H = function (a) { var b = document.createElement("div"); b.className = "tooltip-arrow"; var c = document.createElement("div"); c.className = "tooltip-inner", a.appendChild(b), a.appendChild(c) }, I = document.createElement("div"); I.className = "tooltip tooltip-main", I.setAttribute("role", "presentation"), H(I); var J = document.createElement("div"); J.className = "tooltip tooltip-min", J.setAttribute("role", "presentation"), H(J); var K = document.createElement("div"); K.className = "tooltip tooltip-max", K.setAttribute("role", "presentation"), H(K), this.sliderElem.appendChild(u), this.sliderElem.appendChild(I), this.sliderElem.appendChild(J), this.sliderElem.appendChild(K), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(p), this.sliderElem.appendChild(q), t.insertBefore(this.sliderElem, this.element), this.element.style.display = "none" } if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), h[this.options.scale] && (this.options.scale = h[this.options.scale]), s === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function (a) { this._removeProperty(this.trackLow, a), this._removeProperty(this.trackSelection, a), this._removeProperty(this.trackHigh, a) }, this), [this.handle1, this.handle2].forEach(function (a) { this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top") }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (a) { this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top"), this._removeClass(a, "right"), this._removeClass(a, "left"), this._removeClass(a, "top") }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = r, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (g || (this.options.max = Math.max.apply(Math, this.options.ticks)), f || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = n || this.trackLow, this.trackSelection = m || this.trackSelection, this.trackHigh = o || this.trackHigh, "none" === this.options.selection ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : ("after" === this.options.selection || "before" === this.options.selection) && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = p || this.handle1, this.handle2 = q || this.handle2, s === !0) for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), i = 0; i < this.ticks.length; i++)this._removeClass(this.ticks[i], "round triangle hide"); var L = ["round", "triangle", "custom"], M = -1 !== L.indexOf(this.options.handle); if (M) for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), i = 0; i < this.ticks.length; i++)this._addClass(this.ticks[i], this.options.handle); if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip) this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide"); else if ("always" === this.options.tooltip) this._showTooltip(), this._alwaysShowTooltip = !0; else { if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) { var N = this._addTickListener(), O = N.addMouseEnter(this, this.handle1), P = N.addMouseLeave(this, this.handle1); this.handleCallbackMap.handle1 = { mouseEnter: O, mouseLeave: P }, O = N.addMouseEnter(this, this.handle2), P = N.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = { mouseEnter: O, mouseLeave: P } } else this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.showTooltip, !1), this.sliderElem.addEventListener("touchmove", this.showTooltip, !1), this.sliderElem.addEventListener("touchend", this.hideTooltip, !1)); this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1), this.touchCapable && (this.handle1.addEventListener("touchstart", this.showTooltip, !1), this.handle1.addEventListener("touchmove", this.showTooltip, !1), this.handle1.addEventListener("touchend", this.hideTooltip, !1), this.handle2.addEventListener("touchstart", this.showTooltip, !1), this.handle2.addEventListener("touchmove", this.showTooltip, !1), this.handle2.addEventListener("touchend", this.hideTooltip, !1)) } this.options.enabled ? this.enable() : this.disable() } var f = void 0, g = { formatInvalidInputErrorMsg: function (a) { return "Invalid input value '" + a + "' passed in" }, callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method" }, h = { linear: { getValue: function (a, b) { return a < b.min ? b.min : a > b.max ? b.max : a }, toValue: function (a) { var b = a / 100 * (this.options.max - this.options.min), c = !0; if (this.options.ticks_positions.length > 0) { for (var d, e, f, g = 0, i = 1; i < this.options.ticks_positions.length; i++)if (a <= this.options.ticks_positions[i]) { d = this.options.ticks[i - 1], f = this.options.ticks_positions[i - 1], e = this.options.ticks[i], g = this.options.ticks_positions[i]; break } var j = (a - f) / (g - f); b = d + j * (e - d), c = !1 } var k = c ? this.options.min : 0, l = k + Math.round(b / this.options.step) * this.options.step; return h.linear.getValue(l, this.options) }, toPercentage: function (a) { if (this.options.max === this.options.min) return 0; if (this.options.ticks_positions.length > 0) { for (var b, c, d, e = 0, f = 0; f < this.options.ticks.length; f++)if (a <= this.options.ticks[f]) { b = f > 0 ? this.options.ticks[f - 1] : 0, d = f > 0 ? this.options.ticks_positions[f - 1] : 0, c = this.options.ticks[f], e = this.options.ticks_positions[f]; break } if (f > 0) { var g = (a - b) / (c - b); return d + g * (e - d) } } return 100 * (a - this.options.min) / (this.options.max - this.options.min) } }, logarithmic: { toValue: function (a) { var b = 1 - this.options.min, c = Math.log(this.options.min + b), d = Math.log(this.options.max + b), e = Math.exp(c + (d - c) * a / 100) - b; return Math.round(e) === d ? d : (e = this.options.min + Math.round((e - this.options.min) / this.options.step) * this.options.step, h.linear.getValue(e, this.options)) }, toPercentage: function (a) { if (this.options.max === this.options.min) return 0; var b = 1 - this.options.min, c = Math.log(this.options.max + b), d = Math.log(this.options.min + b), e = Math.log(a + b); return 100 * (e - d) / (c - d) } } }; d = function (a, b) { return e.call(this, a, b), this }, d.prototype = {
            _init: function () { }, constructor: d, defaultOptions: { id: "", min: 0, max: 10, step: 1, precision: 0, orientation: "horizontal", value: 1, range: !1, selection: "before", tooltip: "show", tooltip_split: !1, lock_to_ticks: !1, handle: "round", reversed: !1, rtl: "auto", enabled: !0, formatter: function (a) { return Array.isArray(a) ? a[0] + " : " + a[1] : a }, natural_arrow_keys: !1, ticks: [], ticks_positions: [], ticks_labels: [], ticks_snap_bounds: 0, ticks_tooltip: !1, scale: "linear", focus: !1, tooltip_position: null, labelledby: null, rangeHighlights: [] }, getElement: function () { return this.sliderElem }, getValue: function () { return this.options.range ? this._state.value : this._state.value[0] }, setValue: function (a, b, c) { a || (a = 0); var d = this.getValue(); this._state.value = this._validateInputValue(a); var e = this._applyPrecision.bind(this); this.options.range ? (this._state.value[0] = e(this._state.value[0]), this._state.value[1] = e(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = e(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout(); var f = this.options.range ? this._state.value : this._state.value[0]; this._setDataVal(f), b === !0 && this._trigger("slide", f); var g = !1; return g = Array.isArray(f) ? d[0] !== f[0] || d[1] !== f[1] : d !== f, g && c === !0 && this._trigger("change", { oldValue: d, newValue: f }), this }, destroy: function () { this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), f === b && this.$element.removeData(f), this.$element.removeData(c)) }, disable: function () { return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this }, enable: function () { return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this }, toggle: function () { return this._state.enabled ? this.disable() : this.enable(), this }, isEnabled: function () { return this._state.enabled }, on: function (a, b) { return this._bindNonQueryEventHandler(a, b), this }, off: function (b, c) { a ? (this.$element.off(b, c), this.$sliderElem.off(b, c)) : this._unbindNonQueryEventHandler(b, c) }, getAttribute: function (a) { return a ? this.options[a] : this.options }, setAttribute: function (a, b) { return this.options[a] = b, this }, refresh: function (d) { var g = this.getValue(); return this._removeSliderEventHandlers(), e.call(this, this.element, this.options), d && d.useCurrentValue === !0 && this.setValue(g), a && (f === b ? (a.data(this.element, b, this), a.data(this.element, c, this)) : a.data(this.element, c, this)), this }, relayout: function () { return this._resize(), this }, _removeTooltipListener: function (a, b) { this.handle1.removeEventListener(a, b, !1), this.handle2.removeEventListener(a, b, !1) }, _removeSliderEventHandlers: function () { if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) { for (var a = this.ticksContainer.getElementsByClassName("slider-tick"), b = 0; b < a.length; b++)a[b].removeEventListener("mouseenter", this.ticksCallbackMap[b].mouseEnter, !1), a[b].removeEventListener("mouseleave", this.ticksCallbackMap[b].mouseLeave, !1); this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1)) } this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1)), window.removeEventListener("resize", this.resize, !1) }, _bindNonQueryEventHandler: function (a, b) { void 0 === this.eventToCallbackMap[a] && (this.eventToCallbackMap[a] = []), this.eventToCallbackMap[a].push(b) }, _unbindNonQueryEventHandler: function (a, b) { var c = this.eventToCallbackMap[a]; if (void 0 !== c) for (var d = 0; d < c.length; d++)if (c[d] === b) { c.splice(d, 1); break } }, _cleanUpEventCallbacksMap: function () { for (var a = Object.keys(this.eventToCallbackMap), b = 0; b < a.length; b++) { var c = a[b]; delete this.eventToCallbackMap[c] } }, _showTooltip: function () { this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"), this._state.over = !0 }, _hideTooltip: function () { this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this._state.over = !1 }, _setToolTipOnMouseOver: function (a) { function b(a, b) { return b ? [100 - a.percentage[0], c.options.range ? 100 - a.percentage[1] : a.percentage[1]] : [a.percentage[0], a.percentage[1]] } var c = this, d = this.options.formatter(a ? a.value[0] : this._state.value[0]), e = a ? b(a, this.options.reversed) : b(this._state, this.options.reversed); this._setText(this.tooltipInner, d), this.tooltip.style[this.stylePos] = e[0] + "%" }, _copyState: function () { return { value: [this._state.value[0], this._state.value[1]], enabled: this._state.enabled, offset: this._state.offset, size: this._state.size, percentage: [this._state.percentage[0], this._state.percentage[1], this._state.percentage[2]], inDrag: this._state.inDrag, over: this._state.over, dragged: this._state.dragged, keyCtrl: this._state.keyCtrl } }, _addTickListener: function () { return { addMouseEnter: function (a, b, c) { var d = function () { var d = a._copyState(), e = b === a.handle1 ? d.value[0] : d.value[1], f = void 0; void 0 !== c ? (e = a.options.ticks[c], f = a.options.ticks_positions.length > 0 && a.options.ticks_positions[c] || a._toPercentage(a.options.ticks[c])) : f = a._toPercentage(e), d.value[0] = e, d.percentage[0] = f, a._setToolTipOnMouseOver(d), a._showTooltip() }; return b.addEventListener("mouseenter", d, !1), d }, addMouseLeave: function (a, b) { var c = function () { a._hideTooltip() }; return b.addEventListener("mouseleave", c, !1), c } } }, _layout: function () { var a, b; if (a = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = a[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), b = this.options.formatter(this._state.value[0]), isNaN(b) ? this.handle1.setAttribute("aria-valuetext", b) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = a[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), b = this.options.formatter(this._state.value[1]), isNaN(b) ? this.handle2.setAttribute("aria-valuetext", b) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) for (var c = 0; c < this.options.rangeHighlights.length; c++) { var d = this._toPercentage(this.options.rangeHighlights[c].start), e = this._toPercentage(this.options.rangeHighlights[c].end); if (this.options.reversed) { var f = 100 - e; e = 100 - d, d = f } var g = this._createHighlightRange(d, e); g ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[c].style.top = g.start + "%", this.rangeHighlightElements[c].style.height = g.size + "%") : (this.options.rtl ? this.rangeHighlightElements[c].style.right = g.start + "%" : this.rangeHighlightElements[c].style.left = g.start + "%", this.rangeHighlightElements[c].style.width = g.size + "%") : this.rangeHighlightElements[c].style.display = "none" } if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) { var h, i = "vertical" === this.options.orientation ? "height" : "width"; h = "vertical" === this.options.orientation ? "marginTop" : this.options.rtl ? "marginRight" : "marginLeft"; var j = this._state.size / (this.options.ticks.length - 1); if (this.tickLabelContainer) { var k = 0; if (0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[h] = -j / 2 + "px"), k = this.tickLabelContainer.offsetHeight; else for (l = 0; l < this.tickLabelContainer.childNodes.length; l++)this.tickLabelContainer.childNodes[l].offsetHeight > k && (k = this.tickLabelContainer.childNodes[l].offsetHeight); "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = k + "px") } for (var l = 0; l < this.options.ticks.length; l++) { var m = this.options.ticks_positions[l] || this._toPercentage(this.options.ticks[l]); this.options.reversed && (m = 100 - m), this.ticks[l].style[this.stylePos] = m + "%", this._removeClass(this.ticks[l], "in-selection"), this.options.range ? m >= a[0] && m <= a[1] && this._addClass(this.ticks[l], "in-selection") : "after" === this.options.selection && m >= a[0] ? this._addClass(this.ticks[l], "in-selection") : "before" === this.options.selection && m <= a[0] && this._addClass(this.ticks[l], "in-selection"), this.tickLabels[l] && (this.tickLabels[l].style[i] = j + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[l] ? (this.tickLabels[l].style.position = "absolute", this.tickLabels[l].style[this.stylePos] = m + "%", this.tickLabels[l].style[h] = -j / 2 + "px") : "vertical" === this.options.orientation && (this.options.rtl ? this.tickLabels[l].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[l].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[h] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[l], "label-in-selection label-is-selection"), this.options.range ? m >= a[0] && m <= a[1] && (this._addClass(this.tickLabels[l], "label-in-selection"), (m === a[0] || a[1]) && this._addClass(this.tickLabels[l], "label-is-selection")) : ("after" === this.options.selection && m >= a[0] ? this._addClass(this.tickLabels[l], "label-in-selection") : "before" === this.options.selection && m <= a[0] && this._addClass(this.tickLabels[l], "label-in-selection"), m === a[0] && this._addClass(this.tickLabels[l], "label-is-selection"))) } } var n; if (this.options.range) { n = this.options.formatter(this._state.value), this._setText(this.tooltipInner, n), this.tooltip.style[this.stylePos] = (a[1] + a[0]) / 2 + "%"; var o = this.options.formatter(this._state.value[0]); this._setText(this.tooltipInner_min, o); var p = this.options.formatter(this._state.value[1]); this._setText(this.tooltipInner_max, p), this.tooltip_min.style[this.stylePos] = a[0] + "%", this.tooltip_max.style[this.stylePos] = a[1] + "%" } else n = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, n), this.tooltip.style[this.stylePos] = a[0] + "%"; if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(a[0], a[1]) + "%", this.trackSelection.style.top = Math.min(a[0], a[1]) + "%", this.trackSelection.style.height = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%"; else { "right" === this.stylePos ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(a[0], a[1]) + "%", "right" === this.stylePos ? this.trackSelection.style.right = Math.min(a[0], a[1]) + "%" : this.trackSelection.style.left = Math.min(a[0], a[1]) + "%", this.trackSelection.style.width = Math.abs(a[0] - a[1]) + "%", "right" === this.stylePos ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%"; var q = this.tooltip_min.getBoundingClientRect(), r = this.tooltip_max.getBoundingClientRect(); "bottom" === this.options.tooltip_position ? q.right > r.left ? (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : q.right > r.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top) } }, _createHighlightRange: function (a, b) { return this._isHighlightRange(a, b) ? a > b ? { start: b, size: a - b } : { start: a, size: b - a } : null }, _isHighlightRange: function (a, b) { return a >= 0 && 100 >= a && b >= 0 && 100 >= b ? !0 : !1 }, _resize: function (a) { this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout() }, _removeProperty: function (a, b) { a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b) }, _mousedown: function (a) { if (!this._state.enabled) return !1; a.preventDefault && a.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos]; var b = this._getPercentage(a); if (this.options.range) { var c = Math.abs(this._state.percentage[0] - b), d = Math.abs(this._state.percentage[1] - b); this._state.dragged = d > c ? 0 : 1, this._adjustPercentageForRangeSliders(b) } else this._state.dragged = 0; this._state.percentage[this._state.dragged] = b, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0; var e = this._calculateValue(); return this._trigger("slideStart", e), this.setValue(e, !1, !0), a.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0 }, _touchstart: function (a) { this._mousedown(a) }, _triggerFocusOnHandle: function (a) { 0 === a && this.handle1.focus(), 1 === a && this.handle2.focus() }, _keydown: function (a, b) { if (!this._state.enabled) return !1; var c; switch (b.keyCode) { case 37: case 40: c = -1; break; case 39: case 38: c = 1 }if (c) { if (this.options.natural_arrow_keys) { var d = "horizontal" === this.options.orientation, e = "vertical" === this.options.orientation, f = this.options.rtl, g = this.options.reversed; d ? f ? g || (c = -c) : g && (c = -c) : e && (g || (c = -c)) } var h; if (this.ticksAreValid && this.options.lock_to_ticks) { var i = void 0; i = this.options.ticks.indexOf(this._state.value[a]), -1 === i && (i = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), i += c, i = Math.max(0, Math.min(this.options.ticks.length - 1, i)), h = this.options.ticks[i] } else h = this._state.value[a] + c * this.options.step; var j = this._toPercentage(h); if (this._state.keyCtrl = a, this.options.range) { this._adjustPercentageForRangeSliders(j); var k = this._state.keyCtrl ? this._state.value[0] : h, l = this._state.keyCtrl ? h : this._state.value[1]; h = [Math.max(this.options.min, Math.min(this.options.max, k)), Math.max(this.options.min, Math.min(this.options.max, l))] } else h = Math.max(this.options.min, Math.min(this.options.max, h)); return this._trigger("slideStart", h), this.setValue(h, !0, !0), this._trigger("slideStop", h), this._pauseEvent(b), delete this._state.keyCtrl, !1 } }, _pauseEvent: function (a) { a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1 }, _mousemove: function (a) {
                if (!this._state.enabled) return !1;
                var b = this._getPercentage(a); this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b; var c = this._calculateValue(!0); return this.setValue(c, !0, !0), !1
            }, _touchmove: function (a) { void 0 !== a.changedTouches && a.preventDefault && a.preventDefault() }, _adjustPercentageForRangeSliders: function (a) { if (this.options.range) { var b = this._getNumDigitsAfterDecimalPlace(a); b = b ? b - 1 : 0; var c = this._applyToFixedAndParseFloat(a, b); 0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], b) < c ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], b) > c ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : 0 === this._state.keyCtrl && this._toPercentage(this._state.value[1]) < a ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : 1 === this._state.keyCtrl && this._toPercentage(this._state.value[0]) > a && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus()) } }, _mouseup: function (a) { if (!this._state.enabled) return !1; var b = this._getPercentage(a); this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip(); var c = this._calculateValue(!0); return this.setValue(c, !1, !0), this._trigger("slideStop", c), this._state.dragged = null, !1 }, _setValues: function (a, b) { var c = 0 === a ? 0 : 100; this._state.percentage[a] !== c && (b.data[a] = this._toValue(this._state.percentage[a]), b.data[a] = this._applyPrecision(b.data[a])) }, _calculateValue: function (a) { var b = {}; return this.options.range ? (b.data = [this.options.min, this.options.max], this._setValues(0, b), this._setValues(1, b), a && (b.data[0] = this._snapToClosestTick(b.data[0]), b.data[1] = this._snapToClosestTick(b.data[1]))) : (b.data = this._toValue(this._state.percentage[0]), b.data = parseFloat(b.data), b.data = this._applyPrecision(b.data), a && (b.data = this._snapToClosestTick(b.data))), b.data }, _snapToClosestTick: function (a) { for (var b = [a, 1 / 0], c = 0; c < this.options.ticks.length; c++) { var d = Math.abs(this.options.ticks[c] - a); d <= b[1] && (b = [this.options.ticks[c], d]) } return b[1] <= this.options.ticks_snap_bounds ? b[0] : a }, _applyPrecision: function (a) { var b = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step); return this._applyToFixedAndParseFloat(a, b) }, _getNumDigitsAfterDecimalPlace: function (a) { var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/); return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0 }, _applyToFixedAndParseFloat: function (a, b) { var c = a.toFixed(b); return parseFloat(c) }, _getPercentage: function (a) { !this.touchCapable || "touchstart" !== a.type && "touchmove" !== a.type && "touchend" !== a.type || (a = a.changedTouches[0]); var b = a[this.mousePos], c = this._state.offset[this.stylePos], d = b - c; "right" === this.stylePos && (d = -d); var e = d / this._state.size * 100; return e = Math.round(e / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (e = 100 - e), Math.max(0, Math.min(100, e)) }, _validateInputValue: function (a) { if (isNaN(+a)) { if (Array.isArray(a)) return this._validateArray(a), a; throw new Error(g.formatInvalidInputErrorMsg(a)) } return +a }, _validateArray: function (a) { for (var b = 0; b < a.length; b++) { var c = a[b]; if ("number" != typeof c) throw new Error(g.formatInvalidInputErrorMsg(c)) } }, _setDataVal: function (a) { this.element.setAttribute("data-value", a), this.element.setAttribute("value", a), this.element.value = a }, _trigger: function (b, c) { c = c || 0 === c ? c : void 0; var d = this.eventToCallbackMap[b]; if (d && d.length) for (var e = 0; e < d.length; e++) { var f = d[e]; f(c) } a && this._triggerJQueryEvent(b, c) }, _triggerJQueryEvent: function (a, b) { var c = { type: a, value: b }; this.$element.trigger(c), this.$sliderElem.trigger(c) }, _unbindJQueryEventHandlers: function () { this.$element.off(), this.$sliderElem.off() }, _setText: function (a, b) { "undefined" != typeof a.textContent ? a.textContent = b : "undefined" != typeof a.innerText && (a.innerText = b) }, _removeClass: function (a, b) { for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) { var f = c[e], g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"); d = d.replace(g, " ") } a.className = d.trim() }, _addClass: function (a, b) { for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) { var f = c[e], g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"), h = g.test(d); h || (d += " " + f) } a.className = d.trim() }, _offsetLeft: function (a) { return a.getBoundingClientRect().left }, _offsetRight: function (a) { return a.getBoundingClientRect().right }, _offsetTop: function (a) { for (var b = a.offsetTop; (a = a.offsetParent) && !isNaN(a.offsetTop);)b += a.offsetTop, "BODY" !== a.tagName && (b -= a.scrollTop); return b }, _offset: function (a) { return { left: this._offsetLeft(a), right: this._offsetRight(a), top: this._offsetTop(a) } }, _css: function (b, c, d) { if (a) a.style(b, c, d); else { var e = c.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (a, b) { return b.toUpperCase() }); b.style[e] = d } }, _toValue: function (a) { return this.options.scale.toValue.apply(this, [a]) }, _toPercentage: function (a) { return this.options.scale.toPercentage.apply(this, [a]) }, _setTooltipPosition: function () { var a = [this.tooltip, this.tooltip_min, this.tooltip_max]; if ("vertical" === this.options.orientation) { var b; b = this.options.tooltip_position ? this.options.tooltip_position : this.options.rtl ? "left" : "right"; var c = "left" === b ? "right" : "left"; a.forEach(function (a) { this._addClass(a, b), a.style[c] = "100%" }.bind(this)) } else "bottom" === this.options.tooltip_position ? a.forEach(function (a) { this._addClass(a, "bottom"), a.style.top = "22px" }.bind(this)) : a.forEach(function (a) { this._addClass(a, "top"), a.style.top = -this.tooltip.outerHeight - 14 + "px" }.bind(this)) }, _getClosestTickIndex: function (a) { for (var b = Math.abs(a - this.options.ticks[0]), c = 0, d = 0; d < this.options.ticks.length; ++d) { var e = Math.abs(a - this.options.ticks[d]); b > e && (b = e, c = d) } return c }, _setTickIndex: function () { this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])]) }
        }, a && a.fn && (a.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), f = c) : (a.bridget(b, d), f = b), a.bridget(c, d), a(function () { a("input[data-provide=slider]")[f]() }))
    }(a), d
});
/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4/dt-1.10.18/b-1.5.6/b-colvis-1.5.6/fc-3.2.5/fh-3.1.4/r-2.2.2
 *
 * Included libraries:
 *   DataTables 1.10.18, Buttons 1.5.6, Column visibility 1.5.6, FixedColumns 3.2.5, FixedHeader 3.1.4, Responsive 2.2.2
 */

/*!
 DataTables 1.10.18
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function (h) { "function" === typeof define && define.amd ? define(["jquery"], function (E) { return h(E, window, document) }) : "object" === typeof exports ? module.exports = function (E, H) { E || (E = window); H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E)); return h(H, E, E.document) } : h(jQuery, window, document) })(function (h, E, H, k) {
    function Z(a) {
        var b, c, d = {}; h.each(a, function (e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
                d[c] = e, "o" === b[1] && Z(a[e])
        }); a._hungarianMap = d
    } function J(a, b, c) { a._hungarianMap || Z(a); var d; h.each(b, function (e) { d = a._hungarianMap[e]; if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e] }) } function Ca(a) {
        var b = n.defaults.oLanguage, c = b.sDecimal; c && Da(c); if (a) {
            var d = a.sZeroRecords; !a.sEmptyTable && (d && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable"); !a.sLoadingRecords && (d && "Loading..." === b.sLoadingRecords) && F(a,
                a, "sZeroRecords", "sLoadingRecords"); a.sInfoThousands && (a.sThousands = a.sInfoThousands); (a = a.sDecimal) && c !== a && Da(a)
        }
    } function eb(a) {
        A(a, "ordering", "bSort"); A(a, "orderMulti", "bSortMulti"); A(a, "orderClasses", "bSortClasses"); A(a, "orderCellsTop", "bSortCellsTop"); A(a, "order", "aaSorting"); A(a, "orderFixed", "aaSortingFixed"); A(a, "paging", "bPaginate"); A(a, "pagingType", "sPaginationType"); A(a, "pageLength", "iDisplayLength"); A(a, "searching", "bFilter"); "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" :
            ""); "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : ""); if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++)a[b] && J(n.models.oSearch, a[b])
    } function fb(a) { A(a, "orderable", "bSortable"); A(a, "orderData", "aDataSort"); A(a, "orderSequence", "asSorting"); A(a, "orderDataType", "sortDataType"); var b = a.aDataSort; "number" === typeof b && !h.isArray(b) && (a.aDataSort = [b]) } function gb(a) {
        if (!n.__browser) {
            var b = {}; n.__browser = b; var c = h("<div/>").css({
                position: "fixed", top: 0, left: -1 * h(E).scrollLeft(), height: 1, width: 1,
                overflow: "hidden"
            }).append(h("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"), d = c.children(), e = d.children(); b.barWidth = d[0].offsetWidth - d[0].clientWidth; b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth; b.bScrollbarLeft = 1 !== Math.round(e.offset().left); b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1; c.remove()
        } h.extend(a.oBrowser, n.__browser); a.oScroll.iBarWidth = n.__browser.barWidth
    }
    function hb(a, b, c, d, e, f) { var g, j = !1; c !== k && (g = c, j = !0); for (; d !== e;)a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f); return g } function Ea(a, b) { var c = n.defaults.column, d = a.aoColumns.length, c = h.extend({}, n.models.oColumn, c, { nTh: b ? b : H.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d }); a.aoColumns.push(c); c = a.aoPreSearchCols; c[d] = h.extend({}, n.models.oSearch, c[d]); ka(a, d, h(b).data()) } function ka(a, b, c) {
        var b = a.aoColumns[b],
        d = a.oClasses, e = h(b.nTh); if (!b.sWidthOrig) { b.sWidthOrig = e.attr("width") || null; var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/); f && (b.sWidthOrig = f[1]) } c !== k && null !== c && (fb(c), J(n.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort")); var g = b.mData, j = S(g), i = b.mRender ?
            S(b.mRender) : null, c = function (a) { return "string" === typeof a && -1 !== a.indexOf("@") }; b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter)); b._setter = null; b.fnGetData = function (a, b, c) { var d = j(a, b, k, c); return i && b ? i(d, b, a, c) : d }; b.fnSetData = function (a, b, c) { return N(g)(a, b, c) }; "number" !== typeof g && (a._rowReadObject = !0); a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone)); a = -1 !== h.inArray("asc", b.asSorting); c = -1 !== h.inArray("desc", b.asSorting); !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone,
                b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    } function $(a) { if (!1 !== a.oFeatures.bAutoWidth) { var b = a.aoColumns; Fa(a); for (var c = 0, d = b.length; c < d; c++)b[c].nTh.style.width = b[c].sWidth } b = a.oScroll; ("" !== b.sY || "" !== b.sX) && la(a); r(a, null, "column-sizing", [a]) } function aa(a, b) {
        var c = ma(a, "bVisible"); return "number" ===
            typeof c[b] ? c[b] : null
    } function ba(a, b) { var c = ma(a, "bVisible"), c = h.inArray(b, c); return -1 !== c ? c : null } function V(a) { var b = 0; h.each(a.aoColumns, function (a, d) { d.bVisible && "none" !== h(d.nTh).css("display") && b++ }); return b } function ma(a, b) { var c = []; h.map(a.aoColumns, function (a, e) { a[b] && c.push(e) }); return c } function Ga(a) {
        var b = a.aoColumns, c = a.aoData, d = n.ext.type.detect, e, f, g, j, i, h, l, q, t; e = 0; for (f = b.length; e < f; e++)if (l = b[e], t = [], !l.sType && l._sManualType) l.sType = l._sManualType; else if (!l.sType) {
            g = 0; for (j = d.length; g <
                j; g++) { i = 0; for (h = c.length; i < h; i++) { t[i] === k && (t[i] = B(a, i, e, "type")); q = d[g](t[i], a); if (!q && g !== d.length - 1) break; if ("html" === q) break } if (q) { l.sType = q; break } } l.sType || (l.sType = "string")
        }
    } function ib(a, b, c, d) {
        var e, f, g, j, i, m, l = a.aoColumns; if (b) for (e = b.length - 1; 0 <= e; e--) {
            m = b[e]; var q = m.targets !== k ? m.targets : m.aTargets; h.isArray(q) || (q = [q]); f = 0; for (g = q.length; f < g; f++)if ("number" === typeof q[f] && 0 <= q[f]) { for (; l.length <= q[f];)Ea(a); d(q[f], m) } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], m); else if ("string" ===
                typeof q[f]) { j = 0; for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, m) }
        } if (c) { e = 0; for (a = c.length; e < a; e++)d(e, c[e]) }
    } function O(a, b, c, d) { var e = a.aoData.length, f = h.extend(!0, {}, n.models.oRow, { src: c ? "dom" : "data", idx: e }); f._aData = b; a.aoData.push(f); for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++)g[j].sType = null; a.aiDisplayMaster.push(e); b = a.rowIdFn(b); b !== k && (a.aIds[b] = f); (c || !a.oFeatures.bDeferRender) && Ha(a, e, c, d); return e } function na(a, b) {
        var c; b instanceof h || (b = h(b)); return b.map(function (b,
            e) { c = Ia(a, e); return O(a, c.data, e, c.cells) })
    } function B(a, b, c, d) { var e = a.iDraw, f = a.aoColumns[c], g = a.aoData[b]._aData, j = f.sDefaultContent, i = f.fnGetData(g, d, { settings: a, row: b, col: c }); if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j; if ((i === g || null === i) && null !== j && d !== k) i = j; else if ("function" === typeof i) return i.call(g); return null === i && "display" == d ? "" : i } function jb(a,
        b, c, d) { a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c }) } function Ja(a) { return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) { return a.replace(/\\\./g, ".") }) } function S(a) {
            if (h.isPlainObject(a)) { var b = {}; h.each(a, function (a, c) { c && (b[a] = S(c)) }); return function (a, c, f, g) { var j = b[c] || b._; return j !== k ? j(a, c, f, g) : a } } if (null === a) return function (a) { return a }; if ("function" === typeof a) return function (b, c, f, g) { return a(b, c, f, g) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") ||
                -1 !== a.indexOf("("))) { var c = function (a, b, f) { var g, j; if ("" !== f) { j = Ja(f); for (var i = 0, m = j.length; i < m; i++) { f = j[i].match(ca); g = j[i].match(W); if (f) { j[i] = j[i].replace(ca, ""); "" !== j[i] && (a = a[j[i]]); g = []; j.splice(0, i + 1); j = j.join("."); if (h.isArray(a)) { i = 0; for (m = a.length; i < m; i++)g.push(c(a[i], b, j)) } a = f[0].substring(1, f[0].length - 1); a = "" === a ? g : g.join(a); break } else if (g) { j[i] = j[i].replace(W, ""); a = a[j[i]](); continue } if (null === a || a[j[i]] === k) return k; a = a[j[i]] } } return a }; return function (b, e) { return c(b, e, a) } } return function (b) { return b[a] }
        }
    function N(a) {
        if (h.isPlainObject(a)) return N(a._); if (null === a) return function () { }; if ("function" === typeof a) return function (b, d, e) { a(b, "set", d, e) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function (a, d, e) {
                var e = Ja(e), f; f = e[e.length - 1]; for (var g, j, i = 0, m = e.length - 1; i < m; i++) {
                    g = e[i].match(ca); j = e[i].match(W); if (g) {
                        e[i] = e[i].replace(ca, ""); a[e[i]] = []; f = e.slice(); f.splice(0, i + 1); g = f.join("."); if (h.isArray(d)) {
                            j = 0; for (m = d.length; j < m; j++)f = {}, b(f, d[j], g),
                                a[e[i]].push(f)
                        } else a[e[i]] = d; return
                    } j && (e[i] = e[i].replace(W, ""), a = a[e[i]](d)); if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {}; a = a[e[i]]
                } if (f.match(W)) a[f.replace(W, "")](d); else a[f.replace(ca, "")] = d
            }; return function (c, d) { return b(c, d, a) }
        } return function (b, d) { b[a] = d }
    } function Ka(a) { return D(a.aoData, "_aData") } function oa(a) { a.aoData.length = 0; a.aiDisplayMaster.length = 0; a.aiDisplay.length = 0; a.aIds = {} } function pa(a, b, c) {
        for (var d = -1, e = 0, f = a.length; e < f; e++)a[e] == b ? d = e : a[e] > b && a[e]--; -1 != d && c === k && a.splice(d,
            1)
    } function da(a, b, c, d) { var e = a.aoData[b], f, g = function (c, d) { for (; c.childNodes.length;)c.removeChild(c.firstChild); c.innerHTML = B(a, b, d, "display") }; if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ia(a, e, d, d === k ? k : e._aData).data; else { var j = e.anCells; if (j) if (d !== k) g(j[d], d); else { c = 0; for (f = j.length; c < f; c++)g(j[c], c) } } e._aSortData = null; e._aFilterData = null; g = a.aoColumns; if (d !== k) g[d].sType = null; else { c = 0; for (f = g.length; c < f; c++)g[c].sType = null; La(a, e) } } function Ia(a, b, c, d) {
        var e = [], f = b.firstChild, g,
        j, i = 0, m, l = a.aoColumns, q = a._rowReadObject, d = d !== k ? d : q ? {} : [], t = function (a, b) { if ("string" === typeof a) { var c = a.indexOf("@"); -1 !== c && (c = a.substring(c + 1), N(a)(d, b.getAttribute(c))) } }, G = function (a) { if (c === k || c === i) j = l[i], m = h.trim(a.innerHTML), j && j._bAttrSrc ? (N(j.mData._)(d, m), t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)) : q ? (j._setter || (j._setter = N(j.mData)), j._setter(d, m)) : d[i] = m; i++ }; if (f) for (; f;) { g = f.nodeName.toUpperCase(); if ("TD" == g || "TH" == g) G(f), e.push(f); f = f.nextSibling } else {
            e = b.anCells;
            f = 0; for (g = e.length; f < g; f++)G(e[f])
        } if (b = b.firstChild ? b : b.nTr) (b = b.getAttribute("id")) && N(a.rowId)(d, b); return { data: d, cells: e }
    } function Ha(a, b, c, d) {
        var e = a.aoData[b], f = e._aData, g = [], j, i, m, l, q; if (null === e.nTr) {
            j = c || H.createElement("tr"); e.nTr = j; e.anCells = g; j._DT_RowIndex = b; La(a, e); l = 0; for (q = a.aoColumns.length; l < q; l++) {
                m = a.aoColumns[l]; i = c ? d[l] : H.createElement(m.sCellType); i._DT_CellIndex = { row: b, column: l }; g.push(i); if ((!c || m.mRender || m.mData !== l) && (!h.isPlainObject(m.mData) || m.mData._ !== l + ".display")) i.innerHTML =
                    B(a, b, l, "display"); m.sClass && (i.className += " " + m.sClass); m.bVisible && !c ? j.appendChild(i) : !m.bVisible && c && i.parentNode.removeChild(i); m.fnCreatedCell && m.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
            } r(a, "aoRowCreatedCallback", null, [j, f, b, g])
        } e.nTr.setAttribute("role", "row")
    } function La(a, b) {
        var c = b.nTr, d = b._aData; if (c) {
            var e = a.rowIdFn(d); e && (c.id = e); d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? qa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr); d.DT_RowData && h(c).data(d.DT_RowData)
        }
    } function kb(a) {
        var b, c, d, e, f, g = a.nTHead, j = a.nTFoot, i = 0 === h("th, td", g).length, m = a.oClasses, l = a.aoColumns; i && (e = h("<tr/>").appendTo(g)); b = 0; for (c = l.length; b < c; b++)f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Ma(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Na(a, "header")(a, d,
            f, m); i && ea(a.aoHeader, g); h(g).find(">tr").attr("role", "row"); h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH); h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH); if (null !== j) { a = a.aoFooter[0]; b = 0; for (c = a.length; b < c; b++)f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass) }
    } function fa(a, b, c) {
        var d, e, f, g = [], j = [], i = a.aoColumns.length, m; if (b) {
            c === k && (c = !1); d = 0; for (e = b.length; d < e; d++) { g[d] = b[d].slice(); g[d].nTr = b[d].nTr; for (f = i - 1; 0 <= f; f--)!a.aoColumns[f].bVisible && !c && g[d].splice(f, 1); j.push([]) } d =
                0; for (e = g.length; d < e; d++) { if (a = g[d].nTr) for (; f = a.firstChild;)a.removeChild(f); f = 0; for (b = g[d].length; f < b; f++)if (m = i = 1, j[d][f] === k) { a.appendChild(g[d][f].cell); for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;)j[d + i][f] = 1, i++; for (; g[d][f + m] !== k && g[d][f].cell == g[d][f + m].cell;) { for (c = 0; c < i; c++)j[d + c][f + m] = 1; m++ } h(g[d][f].cell).attr("rowspan", i).attr("colspan", m) } }
        }
    } function P(a) {
        var b = r(a, "aoPreDrawCallback", "preDraw", [a]); if (-1 !== h.inArray(!1, b)) C(a, !1); else {
            var b = [], c = 0, d = a.asStripeClasses, e =
                d.length, f = a.oLanguage, g = a.iInitDisplayStart, j = "ssp" == y(a), i = a.aiDisplay; a.bDrawing = !0; g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1); var g = a._iDisplayStart, m = a.fnDisplayEnd(); if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1); else if (j) { if (!a.bDestroying && !lb(a)) return } else a.iDraw++; if (0 !== i.length) {
                    f = j ? a.aoData.length : m; for (j = j ? 0 : g; j < f; j++) {
                        var l = i[j], q = a.aoData[l]; null === q.nTr && Ha(a, l); var t = q.nTr; if (0 !== e) {
                            var G = d[c % e]; q._sRowStripe != G && (h(t).removeClass(q._sRowStripe).addClass(G),
                                q._sRowStripe = G)
                        } r(a, "aoRowCallback", null, [t, q._aData, c, j, l]); b.push(t); c++
                    }
                } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: V(a), "class": a.oClasses.sRowEmpty }).html(c))[0]; r(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ka(a), g, m, i]); r(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ka(a), g, m, i]); d = h(a.nTBody); d.children().detach();
            d.append(h(b)); r(a, "aoDrawCallback", "draw", [a]); a.bSorted = !1; a.bFiltered = !1; a.bDrawing = !1
        }
    } function T(a, b) { var c = a.oFeatures, d = c.bFilter; c.bSort && mb(a); d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice(); !0 !== b && (a._iDisplayStart = 0); a._drawHold = b; P(a); a._drawHold = !1 } function nb(a) {
        var b = a.oClasses, c = h(a.nTable), c = h("<div/>").insertBefore(c), d = a.oFeatures, e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) }); a.nHolding = c[0]; a.nTableWrapper = e[0]; a.nTableReinsertBefore =
            a.nTable.nextSibling; for (var f = a.sDom.split(""), g, j, i, m, l, q, k = 0; k < f.length; k++) {
                g = null; j = f[k]; if ("<" == j) { i = h("<div/>")[0]; m = f[k + 1]; if ("'" == m || '"' == m) { l = ""; for (q = 2; f[k + q] != m;)l += f[k + q], q++; "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); -1 != l.indexOf(".") ? (m = l.split("."), i.id = m[0].substr(1, m[0].length - 1), i.className = m[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l; k += q } e.append(i); e = h(i) } else if (">" == j) e = e.parent(); else if ("l" == j && d.bPaginate && d.bLengthChange) g = ob(a); else if ("f" == j &&
                    d.bFilter) g = pb(a); else if ("r" == j && d.bProcessing) g = qb(a); else if ("t" == j) g = rb(a); else if ("i" == j && d.bInfo) g = sb(a); else if ("p" == j && d.bPaginate) g = tb(a); else if (0 !== n.ext.feature.length) { i = n.ext.feature; q = 0; for (m = i.length; q < m; q++)if (j == i[q].cFeature) { g = i[q].fnInit(a); break } } g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
            } c.replaceWith(e); a.nHolding = null
    } function ea(a, b) {
        var c = h(b).children("tr"), d, e, f, g, j, i, m, l, q, k; a.splice(0, a.length); f = 0; for (i = c.length; f < i; f++)a.push([]); f = 0; for (i = c.length; f <
            i; f++) { d = c[f]; for (e = d.firstChild; e;) { if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) { l = 1 * e.getAttribute("colspan"); q = 1 * e.getAttribute("rowspan"); l = !l || 0 === l || 1 === l ? 1 : l; q = !q || 0 === q || 1 === q ? 1 : q; g = 0; for (j = a[f]; j[g];)g++; m = g; k = 1 === l ? !0 : !1; for (j = 0; j < l; j++)for (g = 0; g < q; g++)a[f + g][m + j] = { cell: e, unique: k }, a[f + g].nTr = d } e = e.nextSibling } }
    } function ra(a, b, c) {
        var d = []; c || (c = a.aoHeader, b && (c = [], ea(c, b))); for (var b = 0, e = c.length; b < e; b++)for (var f = 0, g = c[b].length; f < g; f++)if (c[b][f].unique && (!d[f] ||
            !a.bSortCellsTop)) d[f] = c[b][f].cell; return d
    } function sa(a, b, c) {
        r(a, "aoServerParams", "serverParams", [b]); if (b && h.isArray(b)) { var d = {}, e = /(.*?)\[\]$/; h.each(b, function (a, b) { var c = b.name.match(e); c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value }); b = d } var f, g = a.ajax, j = a.oInstance, i = function (b) { r(a, null, "xhr", [a, b, a.jqXHR]); c(b) }; if (h.isPlainObject(g) && g.data) { f = g.data; var m = "function" === typeof f ? f(b, a) : f, b = "function" === typeof f && m ? m : h.extend(!0, b, m); delete g.data } m = {
            data: b, success: function (b) {
                var c =
                    b.error || b.sError; c && K(a, 0, c); a.json = b; i(b)
            }, dataType: "json", cache: !1, type: a.sServerMethod, error: function (b, c) { var d = r(a, null, "xhr", [a, null, a.jqXHR]); -1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7)); C(a, !1) }
        }; a.oAjaxData = b; r(a, null, "preXhr", [a, b]); a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) { return { name: b, value: a } }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(m, { url: g || a.sAjaxSource })) :
            "function" === typeof g ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(m, g)), g.data = f)
    } function lb(a) { return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), sa(a, ub(a), function (b) { vb(a, b) }), !1) : !0 } function ub(a) {
        var b = a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, f = a.aoPreSearchCols, g, j = [], i, m, l, k = X(a); g = a._iDisplayStart; i = !1 !== d.bPaginate ? a._iDisplayLength : -1; var t = function (a, b) { j.push({ name: a, value: b }) }; t("sEcho", a.iDraw); t("iColumns", c); t("sColumns", D(b, "sName").join(",")); t("iDisplayStart", g); t("iDisplayLength",
            i); var G = { draw: a.iDraw, columns: [], order: [], start: g, length: i, search: { value: e.sSearch, regex: e.bRegex } }; for (g = 0; g < c; g++)m = b[g], l = f[g], i = "function" == typeof m.mData ? "function" : m.mData, G.columns.push({ data: i, name: m.sName, searchable: m.bSearchable, orderable: m.bSortable, search: { value: l.sSearch, regex: l.bRegex } }), t("mDataProp_" + g, i), d.bFilter && (t("sSearch_" + g, l.sSearch), t("bRegex_" + g, l.bRegex), t("bSearchable_" + g, m.bSearchable)), d.bSort && t("bSortable_" + g, m.bSortable); d.bFilter && (t("sSearch", e.sSearch), t("bRegex",
                e.bRegex)); d.bSort && (h.each(k, function (a, b) { G.order.push({ column: b.col, dir: b.dir }); t("iSortCol_" + a, b.col); t("sSortDir_" + a, b.dir) }), t("iSortingCols", k.length)); b = n.ext.legacy.ajax; return null === b ? a.sAjaxSource ? j : G : b ? j : G
    } function vb(a, b) {
        var c = ta(a, b), d = b.sEcho !== k ? b.sEcho : b.draw, e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal, f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered; if (d) { if (1 * d < a.iDraw) return; a.iDraw = 1 * d } oa(a); a._iRecordsTotal = parseInt(e, 10); a._iRecordsDisplay = parseInt(f,
            10); d = 0; for (e = c.length; d < e; d++)O(a, c[d]); a.aiDisplay = a.aiDisplayMaster.slice(); a.bAjaxDataGet = !1; P(a); a._bInitComplete || ua(a, b); a.bAjaxDataGet = !0; C(a, !1)
    } function ta(a, b) { var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp; return "data" === c ? b.aaData || b[c] : "" !== c ? S(c)(b) : b } function pb(a) {
        var b = a.oClasses, c = a.sTableId, d = a.oLanguage, e = a.oPreviousSearch, f = a.aanFeatures, g = '<input type="search" class="' + b.sFilterInput + '"/>', j = d.sSearch, j = j.match(/_INPUT_/) ? j.replace("_INPUT_",
            g) : j + g, b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(j)), f = function () { var b = !this.value ? "" : this.value; b != e.sSearch && (ga(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), a._iDisplayStart = 0, P(a)) }, g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0, i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Oa(f, g) : f).on("keypress.DT", function (a) { if (13 == a.keyCode) return !1 }).attr("aria-controls",
                c); h(a.nTable).on("search.dt.DT", function (b, c) { if (a === c) try { i[0] !== H.activeElement && i.val(e.sSearch) } catch (d) { } }); return b[0]
    } function ga(a, b, c) {
        var d = a.oPreviousSearch, e = a.aoPreSearchCols, f = function (a) { d.sSearch = a.sSearch; d.bRegex = a.bRegex; d.bSmart = a.bSmart; d.bCaseInsensitive = a.bCaseInsensitive }; Ga(a); if ("ssp" != y(a)) {
            wb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive); f(b); for (b = 0; b < e.length; b++)xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex,
                e[b].bSmart, e[b].bCaseInsensitive); yb(a)
        } else f(b); a.bFiltered = !0; r(a, null, "search", [a])
    } function yb(a) { for (var b = n.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) { for (var j = [], i = 0, m = c.length; i < m; i++)e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e); c.length = 0; h.merge(c, j) } } function xb(a, b, c, d, e, f) { if ("" !== b) { for (var g = [], j = a.aiDisplay, d = Pa(b, d, e, f), e = 0; e < j.length; e++)b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]); a.aiDisplay = g } } function wb(a, b, c, d, e, f) {
        var d = Pa(b,
            d, e, f), f = a.oPreviousSearch.sSearch, g = a.aiDisplayMaster, j, e = []; 0 !== n.ext.search.length && (c = !0); j = zb(a); if (0 >= b.length) a.aiDisplay = g.slice(); else { if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice(); b = a.aiDisplay; for (c = 0; c < b.length; c++)d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]); a.aiDisplay = e }
    } function Pa(a, b, c, d) {
        a = b ? a : Qa(a); c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
            if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/), a = b ? b[1] : a; return a.replace('"',
                "")
        }).join(")(?=.*?") + ").*$"); return RegExp(a, d ? "i" : "")
    } function zb(a) {
        var b = a.aoColumns, c, d, e, f, g, j, i, h, l = n.ext.type.search; c = !1; d = 0; for (f = a.aoData.length; d < f; d++)if (h = a.aoData[d], !h._aFilterData) {
            j = []; e = 0; for (g = b.length; e < g; e++)c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (va.innerHTML = i, i = Wb ? va.textContent : va.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
            h._aFilterData = j; h._sFilterRow = j.join("  "); c = !0
        } return c
    } function Ab(a) { return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive } } function Bb(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } } function sb(a) {
        var b = a.sTableId, c = a.aanFeatures.i, d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null }); c || (a.aoDrawCallback.push({ fn: Cb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby",
            b + "_info")); return d[0]
    } function Cb(a) { var b = a.aanFeatures.i; if (0 !== b.length) { var c = a.oLanguage, d = a._iDisplayStart + 1, e = a.fnDisplayEnd(), f = a.fnRecordsTotal(), g = a.fnRecordsDisplay(), j = g ? c.sInfo : c.sInfoEmpty; g !== f && (j += " " + c.sInfoFiltered); j += c.sInfoPostFix; j = Db(a, j); c = c.fnInfoCallback; null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j)); h(b).html(j) } } function Db(a, b) {
        var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), g = -1 === e; return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g,
            c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
    } function ha(a) {
        var b, c, d = a.iInitDisplayStart, e = a.aoColumns, f; c = a.oFeatures; var g = a.bDeferLoading; if (a.bInitialised) {
            nb(a); kb(a); fa(a, a.aoHeader); fa(a, a.aoFooter); C(a, !0); c.bAutoWidth && Fa(a); b = 0; for (c = e.length; b < c; b++)f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth)); r(a, null, "preInit", [a]); T(a); e =
                y(a); if ("ssp" != e || g) "ajax" == e ? sa(a, [], function (c) { var f = ta(a, c); for (b = 0; b < f.length; b++)O(a, f[b]); a.iInitDisplayStart = d; T(a); C(a, !1); ua(a, c) }, a) : (C(a, !1), ua(a))
        } else setTimeout(function () { ha(a) }, 200)
    } function ua(a, b) { a._bInitComplete = !0; (b || a.oInit.aaData) && $(a); r(a, null, "plugin-init", [a, b]); r(a, "aoInitComplete", "init", [a, b]) } function Ra(a, b) { var c = parseInt(b, 10); a._iDisplayLength = c; Sa(a); r(a, null, "length", [a, c]) } function ob(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f =
            e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, j = f.length; g < j; g++)e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]); var i = h("<div><label/></div>").addClass(b.sLength); a.aanFeatures.l || (i[0].id = c + "_length"); i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)); h("select", i).val(a._iDisplayLength).on("change.DT", function () { Ra(a, h(this).val()); P(a) }); h(a.nTable).on("length.dt.DT", function (b, c, d) {
                a ===
                c && h("select", i).val(d)
            }); return i[0]
    } function tb(a) {
        var b = a.sPaginationType, c = n.ext.pager[b], d = "function" === typeof c, e = function (a) { P(a) }, b = h("<div/>").addClass(a.oClasses.sPaging + b)[0], f = a.aanFeatures; d || c.fnInit(a, b, e); f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function (a) {
                if (d) { var b = a._iDisplayStart, i = a._iDisplayLength, h = a.fnRecordsDisplay(), l = -1 === i, b = l ? 0 : Math.ceil(b / i), i = l ? 1 : Math.ceil(h / i), h = c(b, i), k, l = 0; for (k = f.p.length; l < k; l++)Na(a, "pageButton")(a, f.p[l], l, h, b, i) } else c.fnUpdate(a,
                    e)
            }, sName: "pagination"
        })); return b
    } function Ta(a, b, c) { var d = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay(); 0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5); b = a._iDisplayStart !== d; a._iDisplayStart = d; b && (r(a, null, "page", [a]), c && P(a)); return b } function qb(a) { return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] }
    function C(a, b) { a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none"); r(a, null, "processing", [a, b]) } function rb(a) {
        var b = h(a.nTable); b.attr("role", "grid"); var c = a.oScroll; if ("" === c.sX && "" === c.sY) return a.nTable; var d = c.sX, e = c.sY, f = a.oClasses, g = b.children("caption"), j = g.length ? g[0]._captionSide : null, i = h(b[0].cloneNode(!1)), m = h(b[0].cloneNode(!1)), l = b.children("tfoot"); l.length || (l = null); i = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({
            overflow: "hidden",
            position: "relative", border: 0, width: d ? !d ? null : v(d) : "100%"
        }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : v(d) }).append(b)); l && i.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>",
            { "class": f.sScrollFootInner }).append(m.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot"))))); var b = i.children(), k = b[0], f = b[1], t = l ? b[2] : null; if (d) h(f).on("scroll.DT", function () { var a = this.scrollLeft; k.scrollLeft = a; l && (t.scrollLeft = a) }); h(f).css(e && c.bCollapse ? "max-height" : "height", e); a.nScrollHead = k; a.nScrollBody = f; a.nScrollFoot = t; a.aoDrawCallback.push({ fn: la, sName: "scrolling" }); return i[0]
    } function la(a) {
        var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY, b = b.iBarWidth,
        f = h(a.nScrollHead), g = f[0].style, j = f.children("div"), i = j[0].style, m = j.children("table"), j = a.nScrollBody, l = h(j), q = j.style, t = h(a.nScrollFoot).children("div"), n = t.children("table"), o = h(a.nTHead), p = h(a.nTable), s = p[0], r = s.style, u = a.nTFoot ? h(a.nTFoot) : null, x = a.oBrowser, U = x.bScrollOversize, Xb = D(a.aoColumns, "nTh"), Q, L, R, w, Ua = [], y = [], z = [], A = [], B, C = function (a) { a = a.style; a.paddingTop = "0"; a.paddingBottom = "0"; a.borderTopWidth = "0"; a.borderBottomWidth = "0"; a.height = 0 }; L = j.scrollHeight > j.clientHeight; if (a.scrollBarVis !==
            L && a.scrollBarVis !== k) a.scrollBarVis = L, $(a); else {
                a.scrollBarVis = L; p.children("thead, tfoot").remove(); u && (R = u.clone().prependTo(p), Q = u.find("tr"), R = R.find("tr")); w = o.clone().prependTo(p); o = o.find("tr"); L = w.find("tr"); w.find("th, td").removeAttr("tabindex"); c || (q.width = "100%", f[0].style.width = "100%"); h.each(ra(a, w), function (b, c) { B = aa(a, b); c.style.width = a.aoColumns[B].sWidth }); u && I(function (a) { a.style.width = "" }, R); f = p.outerWidth(); if ("" === c) {
                    r.width = "100%"; if (U && (p.find("tbody").height() > j.offsetHeight ||
                        "scroll" == l.css("overflow-y"))) r.width = v(p.outerWidth() - b); f = p.outerWidth()
                } else "" !== d && (r.width = v(d), f = p.outerWidth()); I(C, L); I(function (a) { z.push(a.innerHTML); Ua.push(v(h(a).css("width"))) }, L); I(function (a, b) { if (h.inArray(a, Xb) !== -1) a.style.width = Ua[b] }, o); h(L).height(0); u && (I(C, R), I(function (a) { A.push(a.innerHTML); y.push(v(h(a).css("width"))) }, R), I(function (a, b) { a.style.width = y[b] }, Q), h(R).height(0)); I(function (a, b) {
                    a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>"; a.childNodes[0].style.height =
                        "0"; a.childNodes[0].style.overflow = "hidden"; a.style.width = Ua[b]
                }, L); u && I(function (a, b) { a.innerHTML = '<div class="dataTables_sizing">' + A[b] + "</div>"; a.childNodes[0].style.height = "0"; a.childNodes[0].style.overflow = "hidden"; a.style.width = y[b] }, R); if (p.outerWidth() < f) { Q = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f; if (U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) r.width = v(Q - b); ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6) } else Q = "100%"; q.width = v(Q);
            g.width = v(Q); u && (a.nScrollFoot.style.width = v(Q)); !e && U && (q.height = v(s.offsetHeight + b)); c = p.outerWidth(); m[0].style.width = v(c); i.width = v(c); d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y"); e = "padding" + (x.bScrollbarLeft ? "Left" : "Right"); i[e] = d ? b + "px" : "0px"; u && (n[0].style.width = v(c), t[0].style.width = v(c), t[0].style[e] = d ? b + "px" : "0px"); p.children("colgroup").insertBefore(p.children("thead")); l.scroll(); if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
        }
    } function I(a, b, c) {
        for (var d = 0, e = 0,
            f = b.length, g, j; e < f;) { g = b[e].firstChild; for (j = c ? c[e].firstChild : null; g;)1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null; e++ }
    } function Fa(a) {
        var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, f = d.sX, g = d.sXInner, j = c.length, i = ma(a, "bVisible"), m = h("th", a.nTHead), l = b.getAttribute("width"), k = b.parentNode, t = !1, n, o, p = a.oBrowser, d = p.bScrollOversize; (n = b.style.width) && -1 !== n.indexOf("%") && (l = n); for (n = 0; n < i.length; n++)o = c[i[n]], null !== o.sWidth && (o.sWidth = Eb(o.sWidthOrig, k), t = !0); if (d ||
            !t && !f && !e && j == V(a) && j == m.length) for (n = 0; n < j; n++)i = aa(a, n), null !== i && (c[i].sWidth = v(m.eq(n).width())); else {
                j = h(b).clone().css("visibility", "hidden").removeAttr("id"); j.find("tbody tr").remove(); var s = h("<tr/>").appendTo(j.find("tbody")); j.find("thead, tfoot").remove(); j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone()); j.find("tfoot th, tfoot td").css("width", ""); m = ra(a, j.find("thead")[0]); for (n = 0; n < i.length; n++)o = c[i[n]], m[n].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? v(o.sWidthOrig) :
                    "", o.sWidthOrig && f && h(m[n]).append(h("<div/>").css({ width: o.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 })); if (a.aoData.length) for (n = 0; n < i.length; n++)t = i[n], o = c[t], h(Fb(a, t)).clone(!1).append(o.sContentPadding).appendTo(s); h("[name]", j).removeAttr("name"); o = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(j).appendTo(k); f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) :
                        l && j.width(l); for (n = e = 0; n < i.length; n++)k = h(m[n]), g = k.outerWidth() - k.width(), k = p.bBounding ? Math.ceil(m[n].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[n]].sWidth = v(k - g); b.style.width = v(e); o.remove()
        } l && (b.style.width = v(l)); if ((l || f) && !a._reszEvt) b = function () { h(E).on("resize.DT-" + a.sInstance, Oa(function () { $(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    } function Eb(a, b) { if (!a) return 0; var c = h("<div/>").css("width", v(a)).appendTo(b || H.body), d = c[0].offsetWidth; c.remove(); return d } function Fb(a,
        b) { var c = Gb(a, b); if (0 > c) return null; var d = a.aoData[c]; return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b] } function Gb(a, b) { for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)c = B(a, f, b, "display") + "", c = c.replace(Yb, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f); return e } function v(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a } function X(a) {
            var b, c, d = [], e = a.aoColumns, f, g, j, i; b = a.aaSortingFixed; c = h.isPlainObject(b); var m = []; f = function (a) {
                a.length &&
                !h.isArray(a[0]) ? m.push(a) : h.merge(m, a)
            }; h.isArray(b) && f(b); c && b.pre && f(b.pre); f(a.aaSorting); c && b.post && f(b.post); for (a = 0; a < m.length; a++) { i = m[a][0]; f = e[i].aDataSort; b = 0; for (c = f.length; b < c; b++)g = f[b], j = e[g].sType || "string", m[a]._idx === k && (m[a]._idx = h.inArray(m[a][1], e[g].asSorting)), d.push({ src: i, col: g, dir: m[a][1], index: m[a]._idx, type: j, formatter: n.ext.type.order[j + "-pre"] }) } return d
        } function mb(a) {
            var b, c, d = [], e = n.ext.type.order, f = a.aoData, g = 0, j, i = a.aiDisplayMaster, h; Ga(a); h = X(a); b = 0; for (c = h.length; b <
                c; b++)j = h[b], j.formatter && g++, Hb(a, j.col); if ("ssp" != y(a) && 0 !== h.length) {
                    b = 0; for (c = i.length; b < c; b++)d[i[b]] = b; g === h.length ? i.sort(function (a, b) { var c, e, g, j, i = h.length, k = f[a]._aSortData, n = f[b]._aSortData; for (g = 0; g < i; g++)if (j = h[g], c = k[j.col], e = n[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c; c = d[a]; e = d[b]; return c < e ? -1 : c > e ? 1 : 0 }) : i.sort(function (a, b) {
                        var c, g, j, i, k = h.length, n = f[a]._aSortData, o = f[b]._aSortData; for (j = 0; j < k; j++)if (i = h[j], c = n[i.col], g = o[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir],
                            c = i(c, g), 0 !== c) return c; c = d[a]; g = d[b]; return c < g ? -1 : c > g ? 1 : 0
                    })
                } a.bSorted = !0
        } function Ib(a) { for (var b, c, d = a.aoColumns, e = X(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) { c = d[f]; var j = c.asSorting; b = c.sTitle.replace(/<.*?>/g, ""); var i = c.nTh; i.removeAttribute("aria-sort"); c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending); i.setAttribute("aria-label", b) } } function Va(a,
            b, c, d) {
                var e = a.aaSorting, f = a.aoColumns[b].asSorting, g = function (a, b) { var c = a._idx; c === k && (c = h.inArray(a[1], f)); return c + 1 < f.length ? c + 1 : b ? null : 0 }; "number" === typeof e[0] && (e = a.aaSorting = [e]); c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0); T(a); "function" ==
                    typeof d && d(a)
    } function Ma(a, b, c, d) { var e = a.aoColumns[c]; Wa(b, {}, function (b) { !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () { Va(a, c, b.shiftKey, d); "ssp" !== y(a) && C(a, !1) }, 0)) : Va(a, c, b.shiftKey, d)) }) } function wa(a) {
        var b = a.aLastSort, c = a.oClasses.sSortColumn, d = X(a), e = a.oFeatures, f, g; if (e.bSort && e.bSortClasses) {
            e = 0; for (f = b.length; e < f; e++)g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3)); e = 0; for (f = d.length; e < f; e++)g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c +
                (2 > e ? e + 1 : 3))
        } a.aLastSort = d
    } function Hb(a, b) { var c = a.aoColumns[b], d = n.ext.order[c.sSortDataType], e; d && (e = d.call(a.oInstance, a, b, ba(a, b))); for (var f, g = n.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f } function xa(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date, start: a._iDisplayStart, length: a._iDisplayLength, order: h.extend(!0, [], a.aaSorting), search: Ab(a.oPreviousSearch),
                columns: h.map(a.aoColumns, function (b, d) { return { visible: b.bVisible, search: Ab(a.aoPreSearchCols[d]) } })
            }; r(a, "aoStateSaveParams", "stateSaveParams", [a, b]); a.oSavedState = b; a.fnStateSaveCallback.call(a.oInstance, a, b)
        }
    } function Jb(a, b, c) {
        var d, e, f = a.aoColumns, b = function (b) {
            if (b && b.time) {
                var g = r(a, "aoStateLoadParams", "stateLoadParams", [a, b]); if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date - 1E3 * g) && !(b.columns && f.length !== b.columns.length))) {
                    a.oLoadedState = h.extend(!0, {}, b); b.start !== k &&
                        (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start); b.length !== k && (a._iDisplayLength = b.length); b.order !== k && (a.aaSorting = [], h.each(b.order, function (b, c) { a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c) })); b.search !== k && h.extend(a.oPreviousSearch, Bb(b.search)); if (b.columns) { d = 0; for (e = b.columns.length; d < e; d++)g = b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Bb(g.search)) } r(a, "aoStateLoaded", "stateLoaded", [a, b])
                }
            } c()
        }; if (a.oFeatures.bStateSave) {
            var g =
                a.fnStateLoadCallback.call(a.oInstance, a, b); g !== k && b(g)
        } else c()
    } function ya(a) { var b = n.settings, a = h.inArray(a, D(b, "nTable")); return -1 !== a ? b[a] : null } function K(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c; d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d); if (b) E.console && console.log && console.log(c); else if (b = n.ext, b = b.sErrMode || b.errMode, a && r(a, null, "error", [a, d, c]), "alert" == b) alert(c); else {
            if ("throw" == b) throw Error(c); "function" ==
                typeof b && b(a, d, c)
        }
    } function F(a, b, c, d) { h.isArray(c) ? h.each(c, function (c, d) { h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d) }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c])) } function Xa(a, b, c) { var d, e; for (e in b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d); return a } function Wa(a, b, c) {
        h(a).on("click.DT", b, function (b) { h(a).blur(); c(b) }).on("keypress.DT", b, function (a) { 13 === a.which && (a.preventDefault(), c(a)) }).on("selectstart.DT",
            function () { return !1 })
    } function z(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) } function r(a, b, c, d) { var e = []; b && (e = h.map(a[b].slice().reverse(), function (b) { return b.fn.apply(a.oInstance, d) })); null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result)); return e } function Sa(a) { var b = a._iDisplayStart, c = a.fnDisplayEnd(), d = a._iDisplayLength; b >= c && (b = c - d); b -= b % d; if (-1 === d || 0 > b) b = 0; a._iDisplayStart = b } function Na(a, b) {
        var c = a.renderer, d = n.ext.renderer[b]; return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" ===
            typeof c ? d[c] || d._ : d._
    } function y(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" } function ia(a, b) { var c = [], c = Kb.numbers_length, d = Math.floor(c / 2); b <= c ? c = Y(0, b) : a <= d ? (c = Y(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = Y(b - (c - 2), b) : (c = Y(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0)); c.DT_el = "span"; return c } function Da(a) {
        h.each({
            num: function (b) { return za(b, a) }, "num-fmt": function (b) { return za(b, a, Ya) }, "html-num": function (b) {
                return za(b,
                    a, Aa)
            }, "html-num-fmt": function (b) { return za(b, a, Aa, Ya) }
        }, function (b, c) { x.type.order[b + a + "-pre"] = c; b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html) })
    } function Lb(a) { return function () { var b = [ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return n.ext.internal[a].apply(this, b) } } var n = function (a) {
        this.$ = function (a, b) { return this.api(!0).$(a, b) }; this._ = function (a, b) { return this.api(!0).rows(a, b).data() }; this.api = function (a) { return a ? new s(ya(this[x.iApiIndex])) : new s(this) };
        this.fnAddData = function (a, b) { var c = this.api(!0), d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a); (b === k || b) && c.draw(); return d.flatten().toArray() }; this.fnAdjustColumnSizing = function (a) { var b = this.api(!0).columns.adjust(), c = b.settings()[0], d = c.oScroll; a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && la(c) }; this.fnClearTable = function (a) { var b = this.api(!0).clear(); (a === k || a) && b.draw() }; this.fnClose = function (a) { this.api(!0).row(a).child.hide() }; this.fnDeleteRow = function (a,
            b, c) { var d = this.api(!0), a = d.rows(a), e = a.settings()[0], h = e.aoData[a[0][0]]; a.remove(); b && b.call(this, e, h); (c === k || c) && d.draw(); return h }; this.fnDestroy = function (a) { this.api(!0).destroy(a) }; this.fnDraw = function (a) { this.api(!0).draw(a) }; this.fnFilter = function (a, b, c, d, e, h) { e = this.api(!0); null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h); e.draw() }; this.fnGetData = function (a, b) {
                var c = this.api(!0); if (a !== k) {
                    var d = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() :
                        c.row(a).data() || null
                } return c.data().toArray()
            }; this.fnGetNodes = function (a) { var b = this.api(!0); return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray() }; this.fnGetPosition = function (a) { var b = this.api(!0), c = a.nodeName.toUpperCase(); return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null }; this.fnIsOpen = function (a) { return this.api(!0).row(a).child.isShown() }; this.fnOpen = function (a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] };
        this.fnPageChange = function (a, b) { var c = this.api(!0).page(a); (b === k || b) && c.draw(!1) }; this.fnSetColumnVis = function (a, b, c) { a = this.api(!0).column(a).visible(b); (c === k || c) && a.columns.adjust().draw() }; this.fnSettings = function () { return ya(this[x.iApiIndex]) }; this.fnSort = function (a) { this.api(!0).order(a).draw() }; this.fnSortListener = function (a, b, c) { this.api(!0).order.listener(a, b, c) }; this.fnUpdate = function (a, b, c, d, e) {
            var h = this.api(!0); c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a); (e === k || e) && h.columns.adjust();
            (d === k || d) && h.draw(); return 0
        }; this.fnVersionCheck = x.fnVersionCheck; var b = this, c = a === k, d = this.length; c && (a = {}); this.oApi = this.internal = x.internal; for (var e in n.ext.internal) e && (this[e] = Lb(e)); this.each(function () {
            var e = {}, g = 1 < d ? Xa(e, a, !0) : a, j = 0, i, e = this.getAttribute("id"), m = !1, l = n.defaults, q = h(this); if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2); else {
                eb(l); fb(l.column); J(l, l, !0); J(l.column, l.column, !0); J(l, h.extend(g, q.data())); var t = n.settings,
                    j = 0; for (i = t.length; j < i; j++) { var o = t[j]; if (o.nTable == this || o.nTHead && o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) { var s = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve; if (c || s) return o.oInstance; if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) { o.oInstance.fnDestroy(); break } else { K(o, 0, "Cannot reinitialise DataTable", 3); return } } if (o.sTableId == this.id) { t.splice(j, 1); break } } if (null === e || "" === e) this.id = e = "DataTables_Table_" + n.ext._unique++; var p = h.extend(!0, {}, n.models.oSettings, {
                        sDestroyWidth: q[0].style.width,
                        sInstance: e, sTableId: e
                    }); p.nTable = this; p.oApi = b.internal; p.oInit = g; t.push(p); p.oInstance = 1 === b.length ? b : q.dataTable(); eb(g); Ca(g.oLanguage); g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]); g = Xa(h.extend(!0, {}, l), g); F(p.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")); F(p, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod",
                        "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]); F(p.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]); F(p.oLanguage, g, "fnInfoCallback");
                z(p, "aoDrawCallback", g.fnDrawCallback, "user"); z(p, "aoServerParams", g.fnServerParams, "user"); z(p, "aoStateSaveParams", g.fnStateSaveParams, "user"); z(p, "aoStateLoadParams", g.fnStateLoadParams, "user"); z(p, "aoStateLoaded", g.fnStateLoaded, "user"); z(p, "aoRowCallback", g.fnRowCallback, "user"); z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user"); z(p, "aoHeaderCallback", g.fnHeaderCallback, "user"); z(p, "aoFooterCallback", g.fnFooterCallback, "user"); z(p, "aoInitComplete", g.fnInitComplete, "user"); z(p, "aoPreDrawCallback",
                    g.fnPreDrawCallback, "user"); p.rowIdFn = S(g.rowId); gb(p); var u = p.oClasses; h.extend(u, n.ext.classes, g.oClasses); q.addClass(u.sTable); p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart); null !== g.iDeferLoading && (p.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading); var v = p.oLanguage; h.extend(!0, v, g.oLanguage); v.sUrl && (h.ajax({
                        dataType: "json", url: v.sUrl, success: function (a) {
                            Ca(a);
                            J(l.oLanguage, a); h.extend(true, v, a); ha(p)
                        }, error: function () { ha(p) }
                    }), m = !0); null === g.asStripeClasses && (p.asStripeClasses = [u.sStripeOdd, u.sStripeEven]); var e = p.asStripeClasses, x = q.children("tbody").find("tr").eq(0); -1 !== h.inArray(!0, h.map(e, function (a) { return x.hasClass(a) })) && (h("tbody tr", this).removeClass(e.join(" ")), p.asDestroyStripes = e.slice()); e = []; t = this.getElementsByTagName("thead"); 0 !== t.length && (ea(p.aoHeader, t[0]), e = ra(p)); if (null === g.aoColumns) { t = []; j = 0; for (i = e.length; j < i; j++)t.push(null) } else t =
                        g.aoColumns; j = 0; for (i = t.length; j < i; j++)Ea(p, e ? e[j] : null); ib(p, g.aoColumnDefs, t, function (a, b) { ka(p, a, b) }); if (x.length) { var w = function (a, b) { return a.getAttribute("data-" + b) !== null ? b : null }; h(x[0]).children("th, td").each(function (a, b) { var c = p.aoColumns[a]; if (c.mData === a) { var d = w(b, "sort") || w(b, "order"), e = w(b, "filter") || w(b, "search"); if (d !== null || e !== null) { c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k }; ka(p, a) } } }) } var U = p.oFeatures,
                            e = function () {
                                if (g.aaSorting === k) { var a = p.aaSorting; j = 0; for (i = a.length; j < i; j++)a[j][1] = p.aoColumns[j].asSorting[0] } wa(p); U.bSort && z(p, "aoDrawCallback", function () { if (p.bSorted) { var a = X(p), b = {}; h.each(a, function (a, c) { b[c.src] = c.dir }); r(p, null, "order", [p, a, b]); Ib(p) } }); z(p, "aoDrawCallback", function () { (p.bSorted || y(p) === "ssp" || U.bDeferRender) && wa(p) }, "sc"); var a = q.children("caption").each(function () { this._captionSide = h(this).css("caption-side") }), b = q.children("thead"); b.length === 0 && (b = h("<thead/>").appendTo(q));
                                p.nTHead = b[0]; b = q.children("tbody"); b.length === 0 && (b = h("<tbody/>").appendTo(q)); p.nTBody = b[0]; b = q.children("tfoot"); if (b.length === 0 && a.length > 0 && (p.oScroll.sX !== "" || p.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q); if (b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter); else if (b.length > 0) { p.nTFoot = b[0]; ea(p.aoFooter, p.nTFoot) } if (g.aaData) for (j = 0; j < g.aaData.length; j++)O(p, g.aaData[j]); else (p.bDeferLoading || y(p) == "dom") && na(p, h(p.nTBody).children("tr")); p.aiDisplay = p.aiDisplayMaster.slice();
                                p.bInitialised = true; m === false && ha(p)
                            }; g.bStateSave ? (U.bStateSave = !0, z(p, "aoDrawCallback", xa, "state_save"), Jb(p, g, e)) : e()
            }
        }); b = null; return this
    }, x, s, o, u, Za = {}, Mb = /[\r\n]/g, Aa = /<.*?>/g, Zb = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, $b = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), Ya = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, M = function (a) { return !a || !0 === a || "-" === a ? !0 : !1 }, Nb = function (a) {
        var b = parseInt(a, 10); return !isNaN(b) &&
            isFinite(a) ? b : null
    }, Ob = function (a, b) { Za[b] || (Za[b] = RegExp(Qa(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Za[b], ".") : a }, $a = function (a, b, c) { var d = "string" === typeof a; if (M(a)) return !0; b && d && (a = Ob(a, b)); c && d && (a = a.replace(Ya, "")); return !isNaN(parseFloat(a)) && isFinite(a) }, Pb = function (a, b, c) { return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : $a(a.replace(Aa, ""), b, c) ? !0 : null }, D = function (a, b, c) {
        var d = [], e = 0, f = a.length; if (c !== k) for (; e < f; e++)a[e] && a[e][b] && d.push(a[e][b][c]); else for (; e <
            f; e++)a[e] && d.push(a[e][b]); return d
    }, ja = function (a, b, c, d) { var e = [], f = 0, g = b.length; if (d !== k) for (; f < g; f++)a[b[f]][c] && e.push(a[b[f]][c][d]); else for (; f < g; f++)e.push(a[b[f]][c]); return e }, Y = function (a, b) { var c = [], d; b === k ? (b = 0, d = a) : (d = b, b = a); for (var e = b; e < d; e++)c.push(e); return c }, Qb = function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)a[c] && b.push(a[c]); return b }, qa = function (a) {
        var b; a: { if (!(2 > a.length)) { b = a.slice().sort(); for (var c = b[0], d = 1, e = b.length; d < e; d++) { if (b[d] === c) { b = !1; break a } c = b[d] } } b = !0 } if (b) return a.slice();
        b = []; var e = a.length, f, g = 0, d = 0; a: for (; d < e; d++) { c = a[d]; for (f = 0; f < g; f++)if (b[f] === c) continue a; b.push(c); g++ } return b
    }; n.util = { throttle: function (a, b) { var c = b !== k ? b : 200, d, e; return function () { var b = this, g = +new Date, j = arguments; d && g < d + c ? (clearTimeout(e), e = setTimeout(function () { d = k; a.apply(b, j) }, c)) : (d = g, a.apply(b, j)) } }, escapeRegex: function (a) { return a.replace($b, "\\$1") } }; var A = function (a, b, c) { a[b] !== k && (a[c] = a[b]) }, ca = /\[.*?\]$/, W = /\(\)$/, Qa = n.util.escapeRegex, va = h("<div>")[0], Wb = va.textContent !== k, Yb =
        /<.*?>/g, Oa = n.util.throttle, Rb = [], w = Array.prototype, ac = function (a) { var b, c, d = n.settings, e = h.map(d, function (a) { return a.nTable }); if (a) { if (a.nTable && a.oApi) return [a]; if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null; if (a && "function" === typeof a.settings) return a.settings().toArray(); "string" === typeof a ? c = h(a) : a instanceof h && (c = a) } else return []; if (c) return c.map(function () { b = h.inArray(this, e); return -1 !== b ? d[b] : null }).toArray() }; s = function (a, b) {
            if (!(this instanceof
                s)) return new s(a, b); var c = [], d = function (a) { (a = ac(a)) && (c = c.concat(a)) }; if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++)d(a[e]); else d(a); this.context = qa(c); b && h.merge(this, b); this.selector = { rows: null, cols: null, opts: null }; s.extend(this, this, Rb)
        }; n.Api = s; h.extend(s.prototype, {
            any: function () { return 0 !== this.count() }, concat: w.concat, context: [], count: function () { return this.flatten().length }, each: function (a) { for (var b = 0, c = this.length; b < c; b++)a.call(this, this[b], b, this); return this }, eq: function (a) {
                var b =
                    this.context; return b.length > a ? new s(b[a], this[a]) : null
            }, filter: function (a) { var b = []; if (w.filter) b = w.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)a.call(this, this[c], c, this) && b.push(this[c]); return new s(this.context, b) }, flatten: function () { var a = []; return new s(this.context, a.concat.apply(a, this.toArray())) }, join: w.join, indexOf: w.indexOf || function (a, b) { for (var c = b || 0, d = this.length; c < d; c++)if (this[c] === a) return c; return -1 }, iterator: function (a, b, c, d) {
                var e = [], f, g, j, h, m, l = this.context,
                n, o, u = this.selector; "string" === typeof a && (d = c, c = b, b = a, a = !1); g = 0; for (j = l.length; g < j; g++) { var r = new s(l[g]); if ("table" === b) f = c.call(r, l[g], g), f !== k && e.push(f); else if ("columns" === b || "rows" === b) f = c.call(r, l[g], this[g], g), f !== k && e.push(f); else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) { o = this[g]; "column-rows" === b && (n = Ba(l[g], u.opts)); h = 0; for (m = o.length; h < m; h++)f = o[h], f = "cell" === b ? c.call(r, l[g], f.row, f.column, g, h) : c.call(r, l[g], f, g, h, n), f !== k && e.push(f) } } return e.length || d ? (a = new s(l, a ?
                    e.concat.apply([], e) : e), b = a.selector, b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this
            }, lastIndexOf: w.lastIndexOf || function (a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) }, length: 0, map: function (a) { var b = []; if (w.map) b = w.map.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)b.push(a.call(this, this[c], c)); return new s(this.context, b) }, pluck: function (a) { return this.map(function (b) { return b[a] }) }, pop: w.pop, push: w.push, reduce: w.reduce || function (a, b) {
                return hb(this, a, b, 0, this.length,
                    1)
            }, reduceRight: w.reduceRight || function (a, b) { return hb(this, a, b, this.length - 1, -1, -1) }, reverse: w.reverse, selector: null, shift: w.shift, slice: function () { return new s(this.context, this) }, sort: w.sort, splice: w.splice, toArray: function () { return w.slice.call(this) }, to$: function () { return h(this) }, toJQuery: function () { return h(this) }, unique: function () { return new s(this.context, qa(this)) }, unshift: w.unshift
        }); s.extend = function (a, b, c) {
            if (c.length && b && (b instanceof s || b.__dt_wrapper)) {
                var d, e, f, g = function (a, b, c) {
                    return function () {
                        var d =
                            b.apply(a, arguments); s.extend(d, d, c.methodExt); return d
                    }
                }; d = 0; for (e = c.length; d < e; d++)f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, s.extend(a, b[f.name], f.propExt)
            }
        }; s.register = o = function (a, b) {
            if (h.isArray(a)) for (var c = 0, d = a.length; c < d; c++)s.register(a[c], b); else for (var e = a.split("."), f = Rb, g, j, c = 0, d = e.length; c < d; c++) {
                g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c]; var i; a: {
                    i = 0; for (var m = f.length; i < m; i++)if (f[i].name === g) {
                        i =
                        f[i]; break a
                    } i = null
                } i || (i = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(i)); c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
            }
        }; s.registerPlural = u = function (a, b, c) { s.register(a, c); s.register(b, function () { var a = c.apply(this, arguments); return a === this ? this : a instanceof s ? a.length ? h.isArray(a[0]) ? new s(a.context, a[0]) : a[0] : k : a }) }; o("tables()", function (a) {
            var b; if (a) {
                b = s; var c = this.context; if ("number" === typeof a) a = [c[a]]; else var d = h.map(c, function (a) { return a.nTable }), a = h(d).filter(a).map(function () {
                    var a = h.inArray(this,
                        d); return c[a]
                }).toArray(); b = new b(a)
            } else b = this; return b
        }); o("table()", function (a) { var a = this.tables(a), b = a.context; return b.length ? new s(b[0]) : a }); u("tables().nodes()", "table().node()", function () { return this.iterator("table", function (a) { return a.nTable }, 1) }); u("tables().body()", "table().body()", function () { return this.iterator("table", function (a) { return a.nTBody }, 1) }); u("tables().header()", "table().header()", function () { return this.iterator("table", function (a) { return a.nTHead }, 1) }); u("tables().footer()",
            "table().footer()", function () { return this.iterator("table", function (a) { return a.nTFoot }, 1) }); u("tables().containers()", "table().container()", function () { return this.iterator("table", function (a) { return a.nTableWrapper }, 1) }); o("draw()", function (a) { return this.iterator("table", function (b) { "page" === a ? P(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a)) }) }); o("page()", function (a) { return a === k ? this.page.info().page : this.iterator("table", function (b) { Ta(b, a) }) }); o("page.info()", function () {
                if (0 ===
                    this.context.length) return k; var a = this.context[0], b = a._iDisplayStart, c = a.oFeatures.bPaginate ? a._iDisplayLength : -1, d = a.fnRecordsDisplay(), e = -1 === c; return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === y(a) }
            }); o("page.len()", function (a) { return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) { Ra(b, a) }) }); var Sb = function (a, b, c) {
                if (c) {
                    var d = new s(a);
                    d.one("draw", function () { c(d.ajax.json()) })
                } if ("ssp" == y(a)) T(a, b); else { C(a, !0); var e = a.jqXHR; e && 4 !== e.readyState && e.abort(); sa(a, [], function (c) { oa(a); for (var c = ta(a, c), d = 0, e = c.length; d < e; d++)O(a, c[d]); T(a, b); C(a, !1) }) }
            }; o("ajax.json()", function () { var a = this.context; if (0 < a.length) return a[0].json }); o("ajax.params()", function () { var a = this.context; if (0 < a.length) return a[0].oAjaxData }); o("ajax.reload()", function (a, b) { return this.iterator("table", function (c) { Sb(c, !1 === b, a) }) }); o("ajax.url()", function (a) {
                var b =
                    this.context; if (a === k) { if (0 === b.length) return k; b = b[0]; return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource } return this.iterator("table", function (b) { h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a })
            }); o("ajax.url().load()", function (a, b) { return this.iterator("table", function (c) { Sb(c, !1 === b, a) }) }); var ab = function (a, b, c, d, e) {
                var f = [], g, j, i, m, l, n; i = typeof b; if (!b || "string" === i || "function" === i || b.length === k) b = [b]; i = 0; for (m = b.length; i < m; i++) {
                    j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") :
                        [b[i]]; l = 0; for (n = j.length; l < n; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g))
                } a = x.selector[a]; if (a.length) { i = 0; for (m = a.length; i < m; i++)f = a[i](d, e, f) } return qa(f)
            }, bb = function (a) { a || (a = {}); a.filter && a.search === k && (a.search = a.filter); return h.extend({ search: "none", order: "current", page: "all" }, a) }, cb = function (a) { for (var b = 0, c = a.length; b < c; b++)if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a; a.length = 0; return a }, Ba = function (a, b) {
                var c,
                d, e, f = [], g = a.aiDisplay; e = a.aiDisplayMaster; var j = b.search; c = b.order; d = b.page; if ("ssp" == y(a)) return "removed" === j ? [] : Y(0, e.length); if ("current" == d) { c = a._iDisplayStart; for (d = a.fnDisplayEnd(); c < d; c++)f.push(g[c]) } else if ("current" == c || "applied" == c) if ("none" == j) f = e.slice(); else if ("applied" == j) f = g.slice(); else { if ("removed" == j) { var i = {}; c = 0; for (d = g.length; c < d; c++)i[g[c]] = null; f = h.map(e, function (a) { return !i.hasOwnProperty(a) ? a : null }) } } else if ("index" == c || "original" == c) {
                    c = 0; for (d = a.aoData.length; c < d; c++)"none" ==
                        j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c))
                } return f
            }; o("rows()", function (a, b) {
                a === k ? a = "" : h.isPlainObject(a) && (b = a, a = ""); var b = bb(b), c = this.iterator("table", function (c) {
                    var e = b, f; return ab("row", a, function (a) {
                        var b = Nb(a), i = c.aoData; if (b !== null && !e) return [b]; f || (f = Ba(c, e)); if (b !== null && h.inArray(b, f) !== -1) return [b]; if (a === null || a === k || a === "") return f; if (typeof a === "function") return h.map(f, function (b) { var c = i[b]; return a(b, c._aData, c.nTr) ? b : null }); if (a.nodeName) {
                            var b =
                                a._DT_RowIndex, m = a._DT_CellIndex; if (b !== k) return i[b] && i[b].nTr === a ? [b] : []; if (m) return i[m.row] && i[m.row].nTr === a ? [m.row] : []; b = h(a).closest("*[data-dt-row]"); return b.length ? [b.data("dt-row")] : []
                        } if (typeof a === "string" && a.charAt(0) === "#") { b = c.aIds[a.replace(/^#/, "")]; if (b !== k) return [b.idx] } b = Qb(ja(c.aoData, f, "nTr")); return h(b).filter(a).map(function () { return this._DT_RowIndex }).toArray()
                    }, c, e)
                }, 1); c.selector.rows = a; c.selector.opts = b; return c
            }); o("rows().nodes()", function () {
                return this.iterator("row",
                    function (a, b) { return a.aoData[b].nTr || k }, 1)
            }); o("rows().data()", function () { return this.iterator(!0, "rows", function (a, b) { return ja(a.aoData, b, "_aData") }, 1) }); u("rows().cache()", "row().cache()", function (a) { return this.iterator("row", function (b, c) { var d = b.aoData[c]; return "search" === a ? d._aFilterData : d._aSortData }, 1) }); u("rows().invalidate()", "row().invalidate()", function (a) { return this.iterator("row", function (b, c) { da(b, c, a) }) }); u("rows().indexes()", "row().index()", function () {
                return this.iterator("row",
                    function (a, b) { return b }, 1)
            }); u("rows().ids()", "row().id()", function (a) { for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)for (var f = 0, g = this[d].length; f < g; f++) { var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData); b.push((!0 === a ? "#" : "") + h) } return new s(c, b) }); u("rows().remove()", "row().remove()", function () {
                var a = this; this.iterator("row", function (b, c, d) {
                    var e = b.aoData, f = e[c], g, h, i, m, l; e.splice(c, 1); g = 0; for (h = e.length; g < h; g++)if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
                        i = 0; for (m =
                            l.length; i < m; i++)l[i]._DT_CellIndex.row = g
                    } pa(b.aiDisplayMaster, c); pa(b.aiDisplay, c); pa(a[d], c, !1); 0 < b._iRecordsDisplay && b._iRecordsDisplay--; Sa(b); c = b.rowIdFn(f._aData); c !== k && delete b.aIds[c]
                }); this.iterator("table", function (a) { for (var c = 0, d = a.aoData.length; c < d; c++)a.aoData[c].idx = c }); return this
            }); o("rows.add()", function (a) {
                var b = this.iterator("table", function (b) { var c, f, g, h = []; f = 0; for (g = a.length; f < g; f++)c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(na(b, c)[0]) : h.push(O(b, c)); return h },
                    1), c = this.rows(-1); c.pop(); h.merge(c, b); return c
            }); o("row()", function (a, b) { return cb(this.rows(a, b)) }); o("row().data()", function (a) { var b = this.context; if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k; var c = b[0].aoData[this[0]]; c._aData = a; h.isArray(a) && c.nTr.id && N(b[0].rowId)(a, c.nTr.id); da(b[0], this[0], "data"); return this }); o("row().node()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null }); o("row.add()", function (a) {
                a instanceof h &&
                a.length && (a = a[0]); var b = this.iterator("table", function (b) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? na(b, a)[0] : O(b, a) }); return this.row(b[0])
            }); var db = function (a, b) { var c = a.context; if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k }, Tb = function (a, b) {
                var c = a.context; if (c.length && a.length) {
                    var d = c[0].aoData[a[0]]; if (d._details) {
                        (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach(); var e = c[0], f = new s(e), g = e.aoData; f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                        0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) { e === b && f.rows({ page: "current" }).eq(0).each(function (a) { a = g[a]; a._detailsShow && a._details.insertAfter(a.nTr) }) }), f.on("column-visibility.dt.DT_details", function (a, b) { if (e === b) for (var c, d = V(b), f = 0, h = g.length; f < h; f++)c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d) }), f.on("destroy.dt.DT_details", function (a, b) { if (e === b) for (var c = 0, d = g.length; c < d; c++)g[c]._details && db(f, c) }))
                    }
                }
            }; o("row().child()", function (a, b) {
                var c =
                    this.context; if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k; if (!0 === a) this.child.show(); else if (!1 === a) db(this); else if (c.length && this.length) {
                        var d = c[0], c = c[0].aoData[this[0]], e = [], f = function (a, b) { if (h.isArray(a) || a instanceof h) for (var c = 0, k = a.length; c < k; c++)f(a[c], b); else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = V(d), e.push(c[0])) }; f(a, b); c._details && c._details.detach(); c._details = h(e);
                        c._detailsShow && c._details.insertAfter(c.nTr)
                    } return this
            }); o(["row().child.show()", "row().child().show()"], function () { Tb(this, !0); return this }); o(["row().child.hide()", "row().child().hide()"], function () { Tb(this, !1); return this }); o(["row().child.remove()", "row().child().remove()"], function () { db(this); return this }); o("row().child.isShown()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1 }); var bc = /^([^:]+):(name|visIdx|visible)$/, Ub = function (a, b,
                c, d, e) { for (var c = [], d = 0, f = e.length; d < f; d++)c.push(B(a, e[d], b)); return c }; o("columns()", function (a, b) {
                    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = ""); var b = bb(b), c = this.iterator("table", function (c) {
                        var e = a, f = b, g = c.aoColumns, j = D(g, "sName"), i = D(g, "nTh"); return ab("column", e, function (a) {
                            var b = Nb(a); if (a === "") return Y(g.length); if (b !== null) return [b >= 0 ? b : g.length + b]; if (typeof a === "function") { var e = Ba(c, f); return h.map(g, function (b, f) { return a(f, Ub(c, f, 0, 0, e), i[f]) ? f : null }) } var k = typeof a === "string" ? a.match(bc) :
                                ""; if (k) switch (k[2]) { case "visIdx": case "visible": b = parseInt(k[1], 10); if (b < 0) { var n = h.map(g, function (a, b) { return a.bVisible ? b : null }); return [n[n.length + b]] } return [aa(c, b)]; case "name": return h.map(j, function (a, b) { return a === k[1] ? b : null }); default: return [] }if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column]; b = h(i).filter(a).map(function () { return h.inArray(this, i) }).toArray(); if (b.length || !a.nodeName) return b; b = h(a).closest("*[data-dt-column]"); return b.length ? [b.data("dt-column")] : []
                        }, c, f)
                    },
                        1); c.selector.cols = a; c.selector.opts = b; return c
                }); u("columns().header()", "column().header()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTh }, 1) }); u("columns().footer()", "column().footer()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTf }, 1) }); u("columns().data()", "column().data()", function () { return this.iterator("column-rows", Ub, 1) }); u("columns().dataSrc()", "column().dataSrc()", function () {
                    return this.iterator("column", function (a, b) { return a.aoColumns[b].mData },
                        1)
                }); u("columns().cache()", "column().cache()", function (a) { return this.iterator("column-rows", function (b, c, d, e, f) { return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) }); u("columns().nodes()", "column().nodes()", function () { return this.iterator("column-rows", function (a, b, c, d, e) { return ja(a.aoData, e, "anCells", b) }, 1) }); u("columns().visible()", "column().visible()", function (a, b) {
                    var c = this.iterator("column", function (b, c) {
                        if (a === k) return b.aoColumns[c].bVisible; var f = b.aoColumns, g = f[c], j = b.aoData,
                            i, m, l; if (a !== k && g.bVisible !== a) { if (a) { var n = h.inArray(!0, D(f, "bVisible"), c + 1); i = 0; for (m = j.length; i < m; i++)l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[n] || null) } else h(D(b.aoData, "anCells", c)).detach(); g.bVisible = a; fa(b, b.aoHeader); fa(b, b.aoFooter); b.aiDisplay.length || h(b.nTBody).find("td[colspan]").attr("colspan", V(b)); xa(b) }
                    }); a !== k && (this.iterator("column", function (c, e) { r(c, null, "column-visibility", [c, e, a, b]) }), (b === k || b) && this.columns.adjust()); return c
                }); u("columns().indexes()", "column().index()",
                    function (a) { return this.iterator("column", function (b, c) { return "visible" === a ? ba(b, c) : c }, 1) }); o("columns.adjust()", function () { return this.iterator("table", function (a) { $(a) }, 1) }); o("column.index()", function (a, b) { if (0 !== this.context.length) { var c = this.context[0]; if ("fromVisible" === a || "toData" === a) return aa(c, b); if ("fromData" === a || "toVisible" === a) return ba(c, b) } }); o("column()", function (a, b) { return cb(this.columns(a, b)) }); o("cells()", function (a, b, c) {
                        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
                        h.isPlainObject(b) && (c = b, b = null); if (null === b || b === k) return this.iterator("table", function (b) {
                            var d = a, e = bb(c), f = b.aoData, g = Ba(b, e), j = Qb(ja(f, g, "anCells")), i = h([].concat.apply([], j)), l, m = b.aoColumns.length, n, o, u, s, r, v; return ab("cell", d, function (a) {
                                var c = typeof a === "function"; if (a === null || a === k || c) { n = []; o = 0; for (u = g.length; o < u; o++) { l = g[o]; for (s = 0; s < m; s++) { r = { row: l, column: s }; if (c) { v = f[l]; a(r, B(b, l, s), v.anCells ? v.anCells[s] : null) && n.push(r) } else n.push(r) } } return n } if (h.isPlainObject(a)) return a.column !==
                                    k && a.row !== k && h.inArray(a.row, g) !== -1 ? [a] : []; c = i.filter(a).map(function (a, b) { return { row: b._DT_CellIndex.row, column: b._DT_CellIndex.column } }).toArray(); if (c.length || !a.nodeName) return c; v = h(a).closest("*[data-dt-row]"); return v.length ? [{ row: v.data("dt-row"), column: v.data("dt-column") }] : []
                            }, b, e)
                        }); var d = this.columns(b), e = this.rows(a), f, g, j, i, m; this.iterator("table", function (a, b) { f = []; g = 0; for (j = e[b].length; g < j; g++) { i = 0; for (m = d[b].length; i < m; i++)f.push({ row: e[b][g], column: d[b][i] }) } }, 1); var l = this.cells(f,
                            c); h.extend(l.selector, { cols: b, rows: a, opts: c }); return l
                    }); u("cells().nodes()", "cell().node()", function () { return this.iterator("cell", function (a, b, c) { return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k }, 1) }); o("cells().data()", function () { return this.iterator("cell", function (a, b, c) { return B(a, b, c) }, 1) }); u("cells().cache()", "cell().cache()", function (a) { a = "search" === a ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function (b, c, d) { return b.aoData[c][a][d] }, 1) }); u("cells().render()", "cell().render()",
                        function (a) { return this.iterator("cell", function (b, c, d) { return B(b, c, d, a) }, 1) }); u("cells().indexes()", "cell().index()", function () { return this.iterator("cell", function (a, b, c) { return { row: b, column: c, columnVisible: ba(a, c) } }, 1) }); u("cells().invalidate()", "cell().invalidate()", function (a) { return this.iterator("cell", function (b, c, d) { da(b, c, a, d) }) }); o("cell()", function (a, b, c) { return cb(this.cells(a, b, c)) }); o("cell().data()", function (a) {
                            var b = this.context, c = this[0]; if (a === k) return b.length && c.length ? B(b[0],
                                c[0].row, c[0].column) : k; jb(b[0], c[0].row, c[0].column, a); da(b[0], c[0].row, "data", c[0].column); return this
                        }); o("order()", function (a, b) { var c = this.context; if (a === k) return 0 !== c.length ? c[0].aaSorting : k; "number" === typeof a ? a = [[a, b]] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments)); return this.iterator("table", function (b) { b.aaSorting = a.slice() }) }); o("order.listener()", function (a, b, c) { return this.iterator("table", function (d) { Ma(d, a, b, c) }) }); o("order.fixed()", function (a) {
                            if (!a) {
                                var b =
                                    this.context, b = b.length ? b[0].aaSortingFixed : k; return h.isArray(b) ? { pre: b } : b
                            } return this.iterator("table", function (b) { b.aaSortingFixed = h.extend(!0, {}, a) })
                        }); o(["columns().order()", "column().order()"], function (a) { var b = this; return this.iterator("table", function (c, d) { var e = []; h.each(b[d], function (b, c) { e.push([c, a]) }); c.aaSorting = e }) }); o("search()", function (a, b, c, d) {
                            var e = this.context; return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
                                e.oFeatures.bFilter && ga(e,
                                    h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1)
                            })
                        }); u("columns().search()", "column().search()", function (a, b, c, d) { return this.iterator("column", function (e, f) { var g = e.aoPreSearchCols; if (a === k) return g[f].sSearch; e.oFeatures.bFilter && (h.extend(g[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ga(e, e.oPreviousSearch, 1)) }) }); o("state()", function () {
                            return this.context.length ? this.context[0].oSavedState :
                                null
                        }); o("state.clear()", function () { return this.iterator("table", function (a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) }); o("state.loaded()", function () { return this.context.length ? this.context[0].oLoadedState : null }); o("state.save()", function () { return this.iterator("table", function (a) { xa(a) }) }); n.versionCheck = n.fnVersionCheck = function (a) { for (var b = n.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d; return !0 }; n.isDataTable =
                            n.fnIsDataTable = function (a) { var b = h(a).get(0), c = !1; if (a instanceof n.Api) return !0; h.each(n.settings, function (a, e) { var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null, g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null; if (e.nTable === b || f === b || g === b) c = !0 }); return c }; n.tables = n.fnTables = function (a) { var b = !1; h.isPlainObject(a) && (b = a.api, a = a.visible); var c = h.map(n.settings, function (b) { if (!a || a && h(b.nTable).is(":visible")) return b.nTable }); return b ? new s(c) : c }; n.camelToHungarian = J; o("$()", function (a, b) {
                                var c =
                                    this.rows(b).nodes(), c = h(c); return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
                            }); h.each(["on", "one", "off"], function (a, b) { o(b + "()", function () { var a = Array.prototype.slice.call(arguments); a[0] = h.map(a[0].split(/\s/), function (a) { return !a.match(/\.dt\b/) ? a + ".dt" : a }).join(" "); var d = h(this.tables().nodes()); d[b].apply(d, a); return this }) }); o("clear()", function () { return this.iterator("table", function (a) { oa(a) }) }); o("settings()", function () { return new s(this.context, this.context) }); o("init()", function () {
                                var a =
                                    this.context; return a.length ? a[0].oInit : null
                            }); o("data()", function () { return this.iterator("table", function (a) { return D(a.aoData, "_aData") }).flatten() }); o("destroy()", function (a) {
                                a = a || !1; return this.iterator("table", function (b) {
                                    var c = b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, g = b.nTHead, j = b.nTFoot, i = h(e), f = h(f), k = h(b.nTableWrapper), l = h.map(b.aoData, function (a) { return a.nTr }), o; b.bDestroying = !0; r(b, "aoDestroyCallback", "destroy", [b]); a || (new s(b)).columns().visible(!0); k.off(".DT").find(":not(tbody *)").off(".DT");
                                    h(E).off(".DT-" + b.sInstance); e != g.parentNode && (i.children("thead").detach(), i.append(g)); j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j)); b.aaSorting = []; b.aaSortingFixed = []; wa(b); h(l).removeClass(b.asStripeClasses.join(" ")); h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone); f.children().detach(); f.append(l); g = a ? "remove" : "detach"; i[g](); k[g](); !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable),
                                        (o = b.asDestroyStripes.length) && f.children().each(function (a) { h(this).addClass(b.asDestroyStripes[a % o]) })); c = h.inArray(b, n.settings); -1 !== c && n.settings.splice(c, 1)
                                })
                            }); h.each(["column", "row", "cell"], function (a, b) { o(b + "s().every()", function (a) { var d = this.selector.opts, e = this; return this.iterator(b, function (f, g, h, i, m) { a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m) }) }) }); o("i18n()", function (a, b, c) {
                                var d = this.context[0], a = S(a)(d.oLanguage); a === k && (a = b); c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] :
                                    a._); return a.replace("%d", c)
                            }); n.version = "1.10.18"; n.settings = []; n.models = {}; n.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 }; n.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }; n.models.oColumn = {
                                idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null,
                                sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null
                            }; n.defaults = {
                                aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1,
                                bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function (a) { return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function (a) {
                                    try {
                                        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" +
                                            a.sInstance + "_" + location.pathname))
                                    } catch (b) { }
                                }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function (a, b) { try { (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b)) } catch (c) { } }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: {
                                    oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
                                    oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found"
                                }, oSearch: h.extend({},
                                    n.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId"
                            }; Z(n.defaults); n.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null };
    Z(n.defaults.column); n.models.oSettings = {
        oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [],
        aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button",
        iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: k, oAjaxData: k, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function () {
            return "ssp" == y(this) ? 1 * this._iRecordsTotal :
                this.aiDisplayMaster.length
        }, fnRecordsDisplay: function () { return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function () { var a = this._iDisplayLength, b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e = this.oFeatures, f = e.bPaginate; return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null
    }; n.ext = x = {
        buttons: {},
        classes: {}, build: "bs4/dt-1.10.18/b-1.5.6/b-colvis-1.5.6/fc-3.2.5/fh-3.1.4/r-2.2.2", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: n.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: n.version
    }; h.extend(x, { afnFiltering: x.search, aTypes: x.type.detect, ofnSearch: x.type.search, oSort: x.type.order, afnSortData: x.order, aoFeatures: x.feature, oApi: x.internal, oStdClasses: x.classes, oPagination: x.pager });
    h.extend(n.ext.classes, {
        sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "",
        sJUIHeader: "", sJUIFooter: ""
    }); var Kb = n.ext.pager; h.extend(Kb, { simple: function () { return ["previous", "next"] }, full: function () { return ["first", "previous", "next", "last"] }, numbers: function (a, b) { return [ia(a, b)] }, simple_numbers: function (a, b) { return ["previous", ia(a, b), "next"] }, full_numbers: function (a, b) { return ["first", "previous", ia(a, b), "next", "last"] }, first_last_numbers: function (a, b) { return ["first", ia(a, b), "last"] }, _numbers: ia, numbers_length: 7 }); h.extend(!0, n.ext.renderer, {
        pageButton: {
            _: function (a, b, c, d, e,
                f) {
                    var g = a.oClasses, j = a.oLanguage.oPaginate, i = a.oLanguage.oAria.paginate || {}, m, l, n = 0, o = function (b, d) {
                        var k, s, u, r, v = function (b) { Ta(a, b.data.action, true) }; k = 0; for (s = d.length; k < s; k++) {
                            r = d[k]; if (h.isArray(r)) { u = h("<" + (r.DT_el || "div") + "/>").appendTo(b); o(u, r) } else {
                                m = null; l = ""; switch (r) {
                                    case "ellipsis": b.append('<span class="ellipsis">&#x2026;</span>'); break; case "first": m = j.sFirst; l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled); break; case "previous": m = j.sPrevious; l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled); break; case "next": m =
                                        j.sNext; l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled); break; case "last": m = j.sLast; l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled); break; default: m = r + 1; l = e === r ? g.sPageButtonActive : ""
                                }if (m !== null) { u = h("<a>", { "class": g.sPageButton + " " + l, "aria-controls": a.sTableId, "aria-label": i[r], "data-dt-idx": n, tabindex: a.iTabIndex, id: c === 0 && typeof r === "string" ? a.sTableId + "_" + r : null }).html(m).appendTo(b); Wa(u, { action: r }, v); n++ }
                            }
                        }
                    }, s; try { s = h(b).find(H.activeElement).data("dt-idx") } catch (u) { } o(h(b).empty(), d); s !== k && h(b).find("[data-dt-idx=" +
                        s + "]").focus()
            }
        }
    }); h.extend(n.ext.type.detect, [function (a, b) { var c = b.oLanguage.sDecimal; return $a(a, c) ? "num" + c : null }, function (a) { if (a && !(a instanceof Date) && !Zb.test(a)) return null; var b = Date.parse(a); return null !== b && !isNaN(b) || M(a) ? "date" : null }, function (a, b) { var c = b.oLanguage.sDecimal; return $a(a, c, !0) ? "num-fmt" + c : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Pb(a, c) ? "html-num" + c : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Pb(a, c, !0) ? "html-num-fmt" + c : null }, function (a) {
        return M(a) ||
            "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
    }]); h.extend(n.ext.type.search, { html: function (a) { return M(a) ? a : "string" === typeof a ? a.replace(Mb, " ").replace(Aa, "") : "" }, string: function (a) { return M(a) ? a : "string" === typeof a ? a.replace(Mb, " ") : a } }); var za = function (a, b, c, d) { if (0 !== a && (!a || "-" === a)) return -Infinity; b && (a = Ob(a, b)); a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, ""))); return 1 * a }; h.extend(x.type.order, {
        "date-pre": function (a) { a = Date.parse(a); return isNaN(a) ? -Infinity : a }, "html-pre": function (a) {
            return M(a) ?
                "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
        }, "string-pre": function (a) { return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString() }, "string-asc": function (a, b) { return a < b ? -1 : a > b ? 1 : 0 }, "string-desc": function (a, b) { return a < b ? 1 : a > b ? -1 : 0 }
    }); Da(""); h.extend(!0, n.ext.renderer, {
        header: {
            _: function (a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                    if (a === f) {
                        e = c.idx; b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc :
                            c.sSortingClass)
                    }
                })
            }, jqueryui: function (a, b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b); h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
                    if (a === f) {
                        e = c.idx; b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass); b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] ==
                            "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                    }
                })
            }
        }
    }); var Vb = function (a) { return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a }; n.render = {
        number: function (a, b, c, d, e) {
            return {
                display: function (f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f; var g = 0 > f ? "-" : "", h = parseFloat(f); if (isNaN(h)) return Vb(f); h = h.toFixed(c); f = Math.abs(h); h = parseInt(f, 10); f = c ? b + (f - h).toFixed(c).substring(2) : ""; return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                        a) + f + (e || "")
                }
            }
        }, text: function () { return { display: Vb } }
    }; h.extend(n.ext.internal, {
        _fnExternApiFunc: Lb, _fnBuildAjax: sa, _fnAjaxUpdate: lb, _fnAjaxParameters: ub, _fnAjaxUpdateDraw: vb, _fnAjaxDataSrc: ta, _fnAddColumn: Ea, _fnColumnOptions: ka, _fnAdjustColumnSizing: $, _fnVisibleToColumnIndex: aa, _fnColumnIndexToVisible: ba, _fnVisbleColumns: V, _fnGetColumns: ma, _fnColumnTypes: Ga, _fnApplyColumnDefs: ib, _fnHungarianMap: Z, _fnCamelToHungarian: J, _fnLanguageCompat: Ca, _fnBrowserDetect: gb, _fnAddData: O, _fnAddTr: na, _fnNodeToDataIndex: function (a,
            b) { return b._DT_RowIndex !== k ? b._DT_RowIndex : null }, _fnNodeToColumnIndex: function (a, b, c) { return h.inArray(c, a.aoData[b].anCells) }, _fnGetCellData: B, _fnSetCellData: jb, _fnSplitObjNotation: Ja, _fnGetObjectDataFn: S, _fnSetObjectDataFn: N, _fnGetDataMaster: Ka, _fnClearTable: oa, _fnDeleteIndex: pa, _fnInvalidate: da, _fnGetRowElements: Ia, _fnCreateTr: Ha, _fnBuildHead: kb, _fnDrawHead: fa, _fnDraw: P, _fnReDraw: T, _fnAddOptionsHtml: nb, _fnDetectHeader: ea, _fnGetUniqueThs: ra, _fnFeatureHtmlFilter: pb, _fnFilterComplete: ga, _fnFilterCustom: yb,
        _fnFilterColumn: xb, _fnFilter: wb, _fnFilterCreateSearch: Pa, _fnEscapeRegex: Qa, _fnFilterData: zb, _fnFeatureHtmlInfo: sb, _fnUpdateInfo: Cb, _fnInfoMacros: Db, _fnInitialise: ha, _fnInitComplete: ua, _fnLengthChange: Ra, _fnFeatureHtmlLength: ob, _fnFeatureHtmlPaginate: tb, _fnPageChange: Ta, _fnFeatureHtmlProcessing: qb, _fnProcessingDisplay: C, _fnFeatureHtmlTable: rb, _fnScrollDraw: la, _fnApplyToChildren: I, _fnCalculateColumnWidths: Fa, _fnThrottle: Oa, _fnConvertToWidth: Eb, _fnGetWidestNode: Fb, _fnGetMaxLenString: Gb, _fnStringToCss: v,
        _fnSortFlatten: X, _fnSort: mb, _fnSortAria: Ib, _fnSortListener: Va, _fnSortAttachListener: Ma, _fnSortingClasses: wa, _fnSortData: Hb, _fnSaveState: xa, _fnLoadState: Jb, _fnSettingsFromNode: ya, _fnLog: K, _fnMap: F, _fnBindAction: Wa, _fnCallbackReg: z, _fnCallbackFire: r, _fnLengthOverflow: Sa, _fnRenderer: Na, _fnDataSource: y, _fnRowAttributes: La, _fnExtend: Xa, _fnCalculateEnd: function () { }
    }); h.fn.dataTable = n; n.$ = h; h.fn.dataTableSettings = n.settings; h.fn.dataTableExt = n.ext; h.fn.DataTable = function (a) { return h(this).dataTable(a).api() };
    h.each(n, function (a, b) { h.fn.DataTable[a] = b }); return h.fn.dataTable
});


/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
(function (b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return b(d, a, a.document) } : b(jQuery, window, document) })(function (b, a, d, m) {
    var f = b.fn.dataTable; b.extend(!0, f.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    }); b.extend(f.ext.classes, { sWrapper: "dataTables_wrapper dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "custom-select custom-select-sm form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" }); f.ext.renderer.pageButton.bootstrap = function (a, h, r, s, j, n) {
        var o = new f.Api(a), t = a.oClasses, k = a.oLanguage.oPaginate, u = a.oLanguage.oAria.paginate || {}, e, g, p = 0, q = function (d, f) {
            var l, h, i, c, m = function (a) {
                a.preventDefault();
                !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page")
            }; l = 0; for (h = f.length; l < h; l++)if (c = f[l], b.isArray(c)) q(d, c); else {
                g = e = ""; switch (c) { case "ellipsis": e = "&#x2026;"; g = "disabled"; break; case "first": e = k.sFirst; g = c + (0 < j ? "" : " disabled"); break; case "previous": e = k.sPrevious; g = c + (0 < j ? "" : " disabled"); break; case "next": e = k.sNext; g = c + (j < n - 1 ? "" : " disabled"); break; case "last": e = k.sLast; g = c + (j < n - 1 ? "" : " disabled"); break; default: e = c + 1, g = j === c ? "active" : "" }e && (i = b("<li>",
                    { "class": t.sPageButton + " " + g, id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null }).append(b("<a>", { href: "#", "aria-controls": a.sTableId, "aria-label": u[c], "data-dt-idx": p, tabindex: a.iTabIndex, "class": "page-link" }).html(e)).appendTo(d), a.oApi._fnBindAction(i, { action: c }, m), p++)
            }
        }, i; try { i = b(h).find(d.activeElement).data("dt-idx") } catch (v) { } q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s); i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    }; return f
});


/*!
 Buttons for DataTables 1.5.6
 ©2016-2019 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.findInternal = function (d, q, n) { d instanceof String && (d = String(d)); for (var l = d.length, u = 0; u < l; u++) { var p = d[u]; if (q.call(n, p, u, d)) return { i: u, v: p } } return { i: -1, v: void 0 } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, q, n) { d != Array.prototype && d != Object.prototype && (d[q] = n.value) }; $jscomp.getGlobal = function (d) { return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, q, n, l) { if (q) { n = $jscomp.global; d = d.split("."); for (l = 0; l < d.length - 1; l++) { var u = d[l]; u in n || (n[u] = {}); n = n[u] } d = d[d.length - 1]; l = n[d]; q = q(l); q != l && null != q && $jscomp.defineProperty(n, d, { configurable: !0, writable: !0, value: q }) } }; $jscomp.polyfill("Array.prototype.find", function (d) { return d ? d : function (d, n) { return $jscomp.findInternal(this, d, n).v } }, "es6", "es3");
(function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (q) { return d(q, window, document) }) : "object" === typeof exports ? module.exports = function (q, n) { q || (q = window); n && n.fn.dataTable || (n = require("datatables.net")(q, n).$); return d(n, q, q.document) } : d(jQuery, window, document) })(function (d, q, n, l) {
    function u(a) { a = new p.Api(a); var b = a.init().buttons || p.defaults.buttons; return (new t(a, b)).container() } var p = d.fn.dataTable, B = 0, C = 0, r = p.ext.buttons, t = function (a, b) {
        if (!(this instanceof
            t)) return function (b) { return (new t(b, a)).container() }; "undefined" === typeof b && (b = {}); !0 === b && (b = {}); d.isArray(b) && (b = { buttons: b }); this.c = d.extend(!0, {}, t.defaults, b); b.buttons && (this.c.buttons = b.buttons); this.s = { dt: new p.Api(a), buttons: [], listenKeys: "", namespace: "dtb" + B++ }; this.dom = { container: d("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className) }; this._constructor()
    }; d.extend(t.prototype, {
        action: function (a, b) {
            a = this._nodeToButton(a); if (b === l) return a.conf.action; a.conf.action =
                b; return this
        }, active: function (a, b) { var c = this._nodeToButton(a); a = this.c.dom.button.active; c = d(c.node); if (b === l) return c.hasClass(a); c.toggleClass(a, b === l ? !0 : b); return this }, add: function (a, b) { var c = this.s.buttons; if ("string" === typeof b) { b = b.split("-"); c = this.s; for (var d = 0, f = b.length - 1; d < f; d++)c = c.buttons[1 * b[d]]; c = c.buttons; b = 1 * b[b.length - 1] } this._expandButton(c, a, !1, b); this._draw(); return this }, container: function () { return this.dom.container }, disable: function (a) {
            a = this._nodeToButton(a); d(a.node).addClass(this.c.dom.button.disabled);
            return this
        }, destroy: function () { d("body").off("keyup." + this.s.namespace); var a = this.s.buttons.slice(), b; var c = 0; for (b = a.length; c < b; c++)this.remove(a[c].node); this.dom.container.remove(); a = this.s.dt.settings()[0]; c = 0; for (b = a.length; c < b; c++)if (a.inst === this) { a.splice(c, 1); break } return this }, enable: function (a, b) { if (!1 === b) return this.disable(a); a = this._nodeToButton(a); d(a.node).removeClass(this.c.dom.button.disabled); return this }, name: function () { return this.c.name }, node: function (a) {
            if (!a) return this.dom.container;
            a = this._nodeToButton(a); return d(a.node)
        }, processing: function (a, b) { a = this._nodeToButton(a); if (b === l) return d(a.node).hasClass("processing"); d(a.node).toggleClass("processing", b); return this }, remove: function (a) { var b = this._nodeToButton(a), c = this._nodeToHost(a), e = this.s.dt; if (b.buttons.length) for (var f = b.buttons.length - 1; 0 <= f; f--)this.remove(b.buttons[f].node); b.conf.destroy && b.conf.destroy.call(e.button(a), e, d(a), b.conf); this._removeKey(b.conf); d(b.node).remove(); a = d.inArray(b, c); c.splice(a, 1); return this },
        text: function (a, b) { var c = this._nodeToButton(a); a = this.c.dom.collection.buttonLiner; a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag; var e = this.s.dt, f = d(c.node), g = function (a) { return "function" === typeof a ? a(e, f, c.conf) : a }; if (b === l) return g(c.conf.text); c.conf.text = b; a ? f.children(a).html(g(b)) : f.html(g(b)); return this }, _constructor: function () {
            var a = this, b = this.s.dt, c = b.settings()[0], e = this.c.buttons; c._buttons || (c._buttons = []); c._buttons.push({ inst: this, name: this.c.name }); for (var f = 0, g = e.length; f <
                g; f++)this.add(e[f]); b.on("destroy", function (b, d) { d === c && a.destroy() }); d("body").on("keyup." + this.s.namespace, function (b) { if (!n.activeElement || n.activeElement === n.body) { var c = String.fromCharCode(b.keyCode).toLowerCase(); -1 !== a.s.listenKeys.toLowerCase().indexOf(c) && a._keypress(c, b) } })
        }, _addKey: function (a) { a.key && (this.s.listenKeys += d.isPlainObject(a.key) ? a.key.key : a.key) }, _draw: function (a, b) {
            a || (a = this.dom.container, b = this.s.buttons); a.children().detach(); for (var c = 0, d = b.length; c < d; c++)a.append(b[c].inserter),
                a.append(" "), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons)
        }, _expandButton: function (a, b, c, e) {
            var f = this.s.dt, g = 0; b = d.isArray(b) ? b : [b]; for (var h = 0, k = b.length; h < k; h++) {
                var v = this._resolveExtends(b[h]); if (v) if (d.isArray(v)) this._expandButton(a, v, c, e); else {
                    var m = this._buildButton(v, c); if (m) {
                        e !== l ? (a.splice(e, 0, m), e++) : a.push(m); if (m.conf.buttons) {
                            var y = this.c.dom.collection; m.collection = d("<" + y.tag + "/>").addClass(y.className).attr("role", "menu"); m.conf._collection = m.collection;
                            this._expandButton(m.buttons, m.conf.buttons, !0, e)
                        } v.init && v.init.call(f.button(m.node), f, d(m.node), v); g++
                    }
                }
            }
        }, _buildButton: function (a, b) {
            var c = this.c.dom.button, e = this.c.dom.buttonLiner, f = this.c.dom.collection, g = this.s.dt, h = function (b) { return "function" === typeof b ? b(g, m, a) : b }; b && f.button && (c = f.button); b && f.buttonLiner && (e = f.buttonLiner); if (a.available && !a.available(g, a)) return !1; var k = function (a, b, c, e) {
                e.action.call(b.button(c), a, b, c, e); d(b.table().node()).triggerHandler("buttons-action.dt", [b.button(c),
                    b, c, e])
            }; f = a.tag || c.tag; var v = a.clickBlurs === l ? !0 : a.clickBlurs, m = d("<" + f + "/>").addClass(c.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function (b) { b.preventDefault(); !m.hasClass(c.disabled) && a.action && k(b, g, m, a); v && m.blur() }).on("keyup.dtb", function (b) { 13 === b.keyCode && !m.hasClass(c.disabled) && a.action && k(b, g, m, a) }); "a" === f.toLowerCase() && m.attr("href", "#"); "button" === f.toLowerCase() && m.attr("type", "button"); e.tag ? (f =
                d("<" + e.tag + "/>").html(h(a.text)).addClass(e.className), "a" === e.tag.toLowerCase() && f.attr("href", "#"), m.append(f)) : m.html(h(a.text)); !1 === a.enabled && m.addClass(c.disabled); a.className && m.addClass(a.className); a.titleAttr && m.attr("title", h(a.titleAttr)); a.attr && m.attr(a.attr); a.namespace || (a.namespace = ".dt-button-" + C++); e = (e = this.c.dom.buttonContainer) && e.tag ? d("<" + e.tag + "/>").addClass(e.className).append(m) : m; this._addKey(a); this.c.buttonCreated && (e = this.c.buttonCreated(a, e)); return {
                    conf: a, node: m.get(0),
                    inserter: e, buttons: [], inCollection: b, collection: null
                }
        }, _nodeToButton: function (a, b) { b || (b = this.s.buttons); for (var c = 0, d = b.length; c < d; c++) { if (b[c].node === a) return b[c]; if (b[c].buttons.length) { var f = this._nodeToButton(a, b[c].buttons); if (f) return f } } }, _nodeToHost: function (a, b) { b || (b = this.s.buttons); for (var c = 0, d = b.length; c < d; c++) { if (b[c].node === a) return b; if (b[c].buttons.length) { var f = this._nodeToHost(a, b[c].buttons); if (f) return f } } }, _keypress: function (a, b) {
            if (!b._buttonsHandled) {
                var c = function (e) {
                    for (var f =
                        0, g = e.length; f < g; f++) { var h = e[f].conf, k = e[f].node; h.key && (h.key === a ? (b._buttonsHandled = !0, d(k).click()) : !d.isPlainObject(h.key) || h.key.key !== a || h.key.shiftKey && !b.shiftKey || h.key.altKey && !b.altKey || h.key.ctrlKey && !b.ctrlKey || h.key.metaKey && !b.metaKey || (b._buttonsHandled = !0, d(k).click())); e[f].buttons.length && c(e[f].buttons) }
                }; c(this.s.buttons)
            }
        }, _removeKey: function (a) {
            if (a.key) {
                var b = d.isPlainObject(a.key) ? a.key.key : a.key; a = this.s.listenKeys.split(""); b = d.inArray(b, a); a.splice(b, 1); this.s.listenKeys =
                    a.join("")
            }
        }, _resolveExtends: function (a) {
            var b = this.s.dt, c, e = function (c) { for (var e = 0; !d.isPlainObject(c) && !d.isArray(c);) { if (c === l) return; if ("function" === typeof c) { if (c = c(b, a), !c) return !1 } else if ("string" === typeof c) { if (!r[c]) throw "Unknown button type: " + c; c = r[c] } e++; if (30 < e) throw "Buttons: Too many iterations"; } return d.isArray(c) ? c : d.extend({}, c) }; for (a = e(a); a && a.extend;) {
                if (!r[a.extend]) throw "Cannot extend unknown button type: " + a.extend; var f = e(r[a.extend]); if (d.isArray(f)) return f; if (!f) return !1;
                var g = f.className; a = d.extend({}, f, a); g && a.className !== g && (a.className = g + " " + a.className); var h = a.postfixButtons; if (h) { a.buttons || (a.buttons = []); g = 0; for (c = h.length; g < c; g++)a.buttons.push(h[g]); a.postfixButtons = null } if (h = a.prefixButtons) { a.buttons || (a.buttons = []); g = 0; for (c = h.length; g < c; g++)a.buttons.splice(g, 0, h[g]); a.prefixButtons = null } a.extend = f.extend
            } return a
        }
    }); t.background = function (a, b, c, e) {
        c === l && (c = 400); e || (e = n.body); a ? d("<div/>").addClass(b).css("display", "none").insertAfter(e).stop().fadeIn(c) :
            d("div." + b).stop().fadeOut(c, function () { d(this).removeClass(b).remove() })
    }; t.instanceSelector = function (a, b) { if (!a) return d.map(b, function (a) { return a.inst }); var c = [], e = d.map(b, function (a) { return a.name }), f = function (a) { if (d.isArray(a)) for (var g = 0, k = a.length; g < k; g++)f(a[g]); else "string" === typeof a ? -1 !== a.indexOf(",") ? f(a.split(",")) : (a = d.inArray(d.trim(a), e), -1 !== a && c.push(b[a].inst)) : "number" === typeof a && c.push(b[a].inst) }; f(a); return c }; t.buttonSelector = function (a, b) {
        for (var c = [], e = function (a, b, c) {
            for (var d,
                f, g = 0, k = b.length; g < k; g++)if (d = b[g]) f = c !== l ? c + g : g + "", a.push({ node: d.node, name: d.conf.name, idx: f }), d.buttons && e(a, d.buttons, f + "-")
        }, f = function (a, b) {
            var g, h = []; e(h, b.s.buttons); var k = d.map(h, function (a) { return a.node }); if (d.isArray(a) || a instanceof d) for (k = 0, g = a.length; k < g; k++)f(a[k], b); else if (null === a || a === l || "*" === a) for (k = 0, g = h.length; k < g; k++)c.push({ inst: b, node: h[k].node }); else if ("number" === typeof a) c.push({ inst: b, node: b.s.buttons[a].node }); else if ("string" === typeof a) if (-1 !== a.indexOf(",")) for (h =
                a.split(","), k = 0, g = h.length; k < g; k++)f(d.trim(h[k]), b); else if (a.match(/^\d+(\-\d+)*$/)) k = d.map(h, function (a) { return a.idx }), c.push({ inst: b, node: h[d.inArray(a, k)].node }); else if (-1 !== a.indexOf(":name")) for (a = a.replace(":name", ""), k = 0, g = h.length; k < g; k++)h[k].name === a && c.push({ inst: b, node: h[k].node }); else d(k).filter(a).each(function () { c.push({ inst: b, node: this }) }); else "object" === typeof a && a.nodeName && (h = d.inArray(a, k), -1 !== h && c.push({ inst: b, node: k[h] }))
        }, g = 0, h = a.length; g < h; g++)f(b, a[g]); return c
    }; t.defaults =
        { buttons: ["copy", "excel", "csv", "pdf", "print"], name: "main", tabIndex: 0, dom: { container: { tag: "div", className: "dt-buttons" }, collection: { tag: "div", className: "dt-button-collection" }, button: { tag: "ActiveXObject" in q ? "a" : "button", className: "dt-button", active: "active", disabled: "disabled" }, buttonLiner: { tag: "span", className: "" } } }; t.version = "1.5.6"; d.extend(r, {
            collection: {
                text: function (a) { return a.i18n("buttons.collection", "Collection") }, className: "buttons-collection", init: function (a, b, c) {
                    b.attr("aria-expanded",
                        !1)
                }, action: function (a, b, c, e) {
                    var f = function () { b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes().each(function () { var a = d(this).siblings(".dt-button-collection"); a.length && a.stop().fadeOut(e.fade, function () { a.detach() }); d(this).attr("aria-expanded", "false") }); d("div.dt-button-background").off("click.dtb-collection"); t.background(!1, e.backgroundClassName, e.fade, l); d("body").off(".dtb-collection"); b.off("buttons-action.b-internal") }; a = "true" === c.attr("aria-expanded"); f(); if (!a) {
                        var g =
                            d(c).parents("div.dt-button-collection"); a = c.position(); var h = d(b.table().container()), k = !1, l = c; c.attr("aria-expanded", "true"); g.length && (k = d(".dt-button-collection").position(), l = g, d("body").trigger("click.dtb-collection")); l.parents("body")[0] !== n.body && (l = n.body.lastChild); e._collection.find(".dt-button-collection-title").remove(); e._collection.prepend('<div class="dt-button-collection-title">' + e.collectionTitle + "</div>"); e._collection.addClass(e.collectionLayout).css("display", "none").insertAfter(l).stop().fadeIn(e.fade);
                        g = e._collection.css("position"); if (k && "absolute" === g) e._collection.css({ top: k.top, left: k.left }); else if ("absolute" === g) {
                            e._collection.css({ top: a.top + c.outerHeight(), left: a.left }); k = h.offset().top + h.height(); k = a.top + c.outerHeight() + e._collection.outerHeight() - k; g = a.top - e._collection.outerHeight(); var m = h.offset().top; (k > m - g || e.dropup) && e._collection.css("top", a.top - e._collection.outerHeight() - 5); e._collection.hasClass(e.rightAlignClassName) && e._collection.css("left", a.left + c.outerWidth() - e._collection.outerWidth());
                            k = a.left + e._collection.outerWidth(); h = h.offset().left + h.width(); k > h && e._collection.css("left", a.left - (k - h)); c = c.offset().left + e._collection.outerWidth(); c > d(q).width() && e._collection.css("left", a.left - (c - d(q).width()))
                        } else c = e._collection.height() / 2, c > d(q).height() / 2 && (c = d(q).height() / 2), e._collection.css("marginTop", -1 * c); e.background && t.background(!0, e.backgroundClassName, e.fade, l); setTimeout(function () {
                            d("div.dt-button-background").on("click.dtb-collection", function () { }); d("body").on("click.dtb-collection",
                                function (a) { var b = d.fn.addBack ? "addBack" : "andSelf"; d(a.target).parents()[b]().filter(e._collection).length || f() }).on("keyup.dtb-collection", function (a) { 27 === a.keyCode && f() }); if (e.autoClose) b.on("buttons-action.b-internal", function () { f() })
                        }, 10)
                    }
                }, background: !0, collectionLayout: "", collectionTitle: "", backgroundClassName: "dt-button-background", rightAlignClassName: "dt-button-right", autoClose: !1, fade: 400, attr: { "aria-haspopup": !0 }
            }, copy: function (a, b) {
                if (r.copyHtml5) return "copyHtml5"; if (r.copyFlash && r.copyFlash.available(a,
                    b)) return "copyFlash"
            }, csv: function (a, b) { if (r.csvHtml5 && r.csvHtml5.available(a, b)) return "csvHtml5"; if (r.csvFlash && r.csvFlash.available(a, b)) return "csvFlash" }, excel: function (a, b) { if (r.excelHtml5 && r.excelHtml5.available(a, b)) return "excelHtml5"; if (r.excelFlash && r.excelFlash.available(a, b)) return "excelFlash" }, pdf: function (a, b) { if (r.pdfHtml5 && r.pdfHtml5.available(a, b)) return "pdfHtml5"; if (r.pdfFlash && r.pdfFlash.available(a, b)) return "pdfFlash" }, pageLength: function (a) {
                a = a.settings()[0].aLengthMenu; var b = d.isArray(a[0]) ?
                    a[0] : a, c = d.isArray(a[0]) ? a[1] : a; return {
                        extend: "collection", text: function (a) { return a.i18n("buttons.pageLength", { "-1": "Show all rows", _: "Show %d rows" }, a.page.len()) }, className: "buttons-page-length", autoClose: !0, buttons: d.map(b, function (a, b) { return { text: c[b], className: "button-page-length", action: function (b, c) { c.page.len(a).draw() }, init: function (b, c, d) { var e = this; c = function () { e.active(b.page.len() === a) }; b.on("length.dt" + d.namespace, c); c() }, destroy: function (a, b, c) { a.off("length.dt" + c.namespace) } } }),
                        init: function (a, b, c) { var d = this; a.on("length.dt" + c.namespace, function () { d.text(c.text) }) }, destroy: function (a, b, c) { a.off("length.dt" + c.namespace) }
                    }
            }
        }); p.Api.register("buttons()", function (a, b) { b === l && (b = a, a = l); this.selector.buttonGroup = a; var c = this.iterator(!0, "table", function (c) { if (c._buttons) return t.buttonSelector(t.instanceSelector(a, c._buttons), b) }, !0); c._groupSelector = a; return c }); p.Api.register("button()", function (a, b) { a = this.buttons(a, b); 1 < a.length && a.splice(1, a.length); return a }); p.Api.registerPlural("buttons().active()",
            "button().active()", function (a) { return a === l ? this.map(function (a) { return a.inst.active(a.node) }) : this.each(function (b) { b.inst.active(b.node, a) }) }); p.Api.registerPlural("buttons().action()", "button().action()", function (a) { return a === l ? this.map(function (a) { return a.inst.action(a.node) }) : this.each(function (b) { b.inst.action(b.node, a) }) }); p.Api.register(["buttons().enable()", "button().enable()"], function (a) { return this.each(function (b) { b.inst.enable(b.node, a) }) }); p.Api.register(["buttons().disable()",
                "button().disable()"], function () { return this.each(function (a) { a.inst.disable(a.node) }) }); p.Api.registerPlural("buttons().nodes()", "button().node()", function () { var a = d(); d(this.each(function (b) { a = a.add(b.inst.node(b.node)) })); return a }); p.Api.registerPlural("buttons().processing()", "button().processing()", function (a) { return a === l ? this.map(function (a) { return a.inst.processing(a.node) }) : this.each(function (b) { b.inst.processing(b.node, a) }) }); p.Api.registerPlural("buttons().text()", "button().text()", function (a) {
                    return a ===
                        l ? this.map(function (a) { return a.inst.text(a.node) }) : this.each(function (b) { b.inst.text(b.node, a) })
                }); p.Api.registerPlural("buttons().trigger()", "button().trigger()", function () { return this.each(function (a) { a.inst.node(a.node).trigger("click") }) }); p.Api.registerPlural("buttons().containers()", "buttons().container()", function () {
                    var a = d(), b = this._groupSelector; this.iterator(!0, "table", function (c) { if (c._buttons) { c = t.instanceSelector(b, c._buttons); for (var d = 0, f = c.length; d < f; d++)a = a.add(c[d].container()) } });
                    return a
                }); p.Api.register("button().add()", function (a, b) { var c = this.context; c.length && (c = t.instanceSelector(this._groupSelector, c[0]._buttons), c.length && c[0].add(b, a)); return this.button(this._groupSelector, a) }); p.Api.register("buttons().destroy()", function () { this.pluck("inst").unique().each(function (a) { a.destroy() }); return this }); p.Api.registerPlural("buttons().remove()", "buttons().remove()", function () { this.each(function (a) { a.inst.remove(a.node) }); return this }); var w; p.Api.register("buttons.info()",
                    function (a, b, c) {
                        var e = this; if (!1 === a) return d("#datatables_buttons_info").fadeOut(function () { d(this).remove() }), clearTimeout(w), w = null, this; w && clearTimeout(w); d("#datatables_buttons_info").length && d("#datatables_buttons_info").remove(); a = a ? "<h2>" + a + "</h2>" : ""; d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(d("<div/>")["string" === typeof b ? "html" : "append"](b)).css("display", "none").appendTo("body").fadeIn(); c !== l && 0 !== c && (w = setTimeout(function () { e.buttons.info(!1) }, c));
                        return this
                    }); p.Api.register("buttons.exportData()", function (a) { if (this.context.length) return D(new p.Api(this.context[0]), a) }); p.Api.register("buttons.exportInfo()", function (a) {
                        a || (a = {}); var b = a; var c = "*" === b.filename && "*" !== b.title && b.title !== l && null !== b.title && "" !== b.title ? b.title : b.filename; "function" === typeof c && (c = c()); c === l || null === c ? c = null : (-1 !== c.indexOf("*") && (c = d.trim(c.replace("*", d("head > title").text()))), c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, ""), (b = x(b.extension)) ||
                            (b = ""), c += b); b = x(a.title); b = null === b ? null : -1 !== b.indexOf("*") ? b.replace("*", d("head > title").text() || "Exported data") : b; return { filename: c, title: b, messageTop: z(this, a.message || a.messageTop, "top"), messageBottom: z(this, a.messageBottom, "bottom") }
                    }); var x = function (a) { return null === a || a === l ? null : "function" === typeof a ? a() : a }, z = function (a, b, c) { b = x(b); if (null === b) return null; a = d("caption", a.table().container()).eq(0); return "*" === b ? a.css("caption-side") !== c ? null : a.length ? a.text() : "" : b }, A = d("<textarea/>")[0],
                        D = function (a, b) {
                            var c = d.extend(!0, {}, { rows: null, columns: "", modifier: { search: "applied", order: "applied" }, orthogonal: "display", stripHtml: !0, stripNewlines: !0, decodeEntities: !0, trim: !0, format: { header: function (a) { return e(a) }, footer: function (a) { return e(a) }, body: function (a) { return e(a) } }, customizeData: null }, b), e = function (a) {
                                if ("string" !== typeof a) return a; a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""); a = a.replace(/<!\-\-.*?\-\->/g, ""); c.stripHtml && (a = a.replace(/<[^>]*>/g, "")); c.trim &&
                                    (a = a.replace(/^\s+|\s+$/g, "")); c.stripNewlines && (a = a.replace(/\n/g, " ")); c.decodeEntities && (A.innerHTML = a, a = A.value); return a
                            }; b = a.columns(c.columns).indexes().map(function (b) { var d = a.column(b).header(); return c.format.header(d.innerHTML, b, d) }).toArray(); var f = a.table().footer() ? a.columns(c.columns).indexes().map(function (b) { var d = a.column(b).footer(); return c.format.footer(d ? d.innerHTML : "", b, d) }).toArray() : null, g = d.extend({}, c.modifier); a.select && "function" === typeof a.select.info && g.selected === l &&
                                a.rows(c.rows, d.extend({ selected: !0 }, g)).any() && d.extend(g, { selected: !0 }); g = a.rows(c.rows, g).indexes().toArray(); var h = a.cells(g, c.columns); g = h.render(c.orthogonal).toArray(); h = h.nodes().toArray(); for (var k = b.length, p = [], m = 0, n = 0, q = 0 < k ? g.length / k : 0; n < q; n++) { for (var t = [k], r = 0; r < k; r++)t[r] = c.format.body(g[m], n, r, h[m]), m++; p[n] = t } b = { header: b, footer: f, body: p }; c.customizeData && c.customizeData(b); return b
                        }; d.fn.dataTable.Buttons = t; d.fn.DataTable.Buttons = t; d(n).on("init.dt plugin-init.dt", function (a, b) {
                            "dt" ===
                            a.namespace && (a = b.oInit.buttons || p.defaults.buttons) && !b._buttons && (new t(b, a)).container()
                        }); p.ext.feature.push({ fnInit: u, cFeature: "B" }); p.ext.features && p.ext.features.register("buttons", u); return t
});


/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-buttons"], function (a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, b) { a || (a = window); b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$); b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function (c, a, b, d) {
    a = c.fn.dataTable; c.extend(!0, a.Buttons.defaults, {
        dom: {
            container: { className: "dt-buttons btn-group" },
            button: { className: "btn btn-secondary" }, collection: { tag: "div", className: "dt-button-collection dropdown-menu", button: { tag: "a", className: "dt-button dropdown-item", active: "active", disabled: "disabled" } }
        }, buttonCreated: function (a, b) { return a.buttons ? c('<div class="btn-group"/>').append(b) : b }
    }); a.ext.buttons.collection.className += " dropdown-toggle"; a.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right"; return a.Buttons
});


/*!
 Column visibility buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license
*/
(function (f) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (c) { return f(c, window, document) }) : "object" === typeof exports ? module.exports = function (c, e) { c || (c = window); e && e.fn.dataTable || (e = require("datatables.net")(c, e).$); e.fn.dataTable.Buttons || require("datatables.net-buttons")(c, e); return f(e, c, c.document) } : f(jQuery, window, document) })(function (f, c, e, h) {
    c = f.fn.dataTable; f.extend(c.ext.buttons, {
        colvis: function (b, a) {
            return {
                extend: "collection",
                text: function (a) { return a.i18n("buttons.colvis", "Column visibility") }, className: "buttons-colvis", buttons: [{ extend: "columnsToggle", columns: a.columns, columnText: a.columnText }]
            }
        }, columnsToggle: function (b, a) { return b.columns(a.columns).indexes().map(function (b) { return { extend: "columnToggle", columns: b, columnText: a.columnText } }).toArray() }, columnToggle: function (b, a) { return { extend: "columnVisibility", columns: a.columns, columnText: a.columnText } }, columnsVisibility: function (b, a) {
            return b.columns(a.columns).indexes().map(function (b) {
                return {
                    extend: "columnVisibility",
                    columns: b, visibility: a.visibility, columnText: a.columnText
                }
            }).toArray()
        }, columnVisibility: {
            columns: h, text: function (b, a, d) { return d._columnText(b, d) }, className: "buttons-columnVisibility", action: function (b, a, d, g) { b = a.columns(g.columns); a = b.visible(); b.visible(g.visibility !== h ? g.visibility : !(a.length && a[0])) }, init: function (b, a, d) {
                var g = this; a.attr("data-cv-idx", d.columns); b.on("column-visibility.dt" + d.namespace, function (a, c) { c.bDestroying || c.nTable != b.settings()[0].nTable || g.active(b.column(d.columns).visible()) }).on("column-reorder.dt" +
                    d.namespace, function (c, g, e) { 1 === b.columns(d.columns).count() && (d.columns = f.inArray(d.columns, e.mapping), a.attr("data-cv-idx", d.columns), a.parent().children("[data-cv-idx]").sort(function (a, b) { return 1 * a.getAttribute("data-cv-idx") - 1 * b.getAttribute("data-cv-idx") }).appendTo(a.parent())) }); this.active(b.column(d.columns).visible())
            }, destroy: function (b, a, d) { b.off("column-visibility.dt" + d.namespace).off("column-reorder.dt" + d.namespace) }, _columnText: function (b, a) {
                var d = b.column(a.columns).index(), c = b.settings()[0].aoColumns[d].sTitle.replace(/\n/g,
                    " ").replace(/<br\s*\/?>/gi, " ").replace(/<select(.*?)<\/select>/g, "").replace(/<!\-\-.*?\-\->/g, "").replace(/<.*?>/g, "").replace(/^\s+|\s+$/g, ""); return a.columnText ? a.columnText(b, d, c) : c
            }
        }, colvisRestore: {
            className: "buttons-colvisRestore", text: function (b) { return b.i18n("buttons.colvisRestore", "Restore visibility") }, init: function (b, a, d) { d._visOriginal = b.columns().indexes().map(function (a) { return b.column(a).visible() }).toArray() }, action: function (b, a, d, c) {
                a.columns().every(function (b) {
                    b = a.colReorder &&
                        a.colReorder.transpose ? a.colReorder.transpose(b, "toOriginal") : b; this.visible(c._visOriginal[b])
                })
            }
        }, colvisGroup: { className: "buttons-colvisGroup", action: function (b, a, d, c) { a.columns(c.show).visible(!0, !1); a.columns(c.hide).visible(!1, !1); a.columns.adjust() }, show: [], hide: [] }
    }); return c.Buttons
});


/*!
 FixedColumns 3.2.5
 ©2010-2018 SpryMedia Ltd - datatables.net/license
*/
(function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (p) { return d(p, window, document) }) : "object" === typeof exports ? module.exports = function (p, r) { p || (p = window); if (!r || !r.fn.dataTable) r = require("datatables.net")(p, r).$; return d(r, p, p.document) } : d(jQuery, window, document) })(function (d, p, r, t) {
    var s = d.fn.dataTable, u, m = function (a, b) {
        var c = this; if (this instanceof m) {
            if (b === t || !0 === b) b = {}; var e = d.fn.dataTable.camelToHungarian; e && (e(m.defaults, m.defaults, !0), e(m.defaults,
                b)); e = (new d.fn.dataTable.Api(a)).settings()[0]; this.s = { dt: e, iTableColumns: e.aoColumns.length, aiOuterWidths: [], aiInnerWidths: [], rtl: "rtl" === d(e.nTable).css("direction") }; this.dom = { scroller: null, header: null, body: null, footer: null, grid: { wrapper: null, dt: null, left: { wrapper: null, head: null, body: null, foot: null }, right: { wrapper: null, head: null, body: null, foot: null } }, clone: { left: { header: null, body: null, footer: null }, right: { header: null, body: null, footer: null } } }; if (e._oFixedColumns) throw "FixedColumns already initialised on this table";
            e._oFixedColumns = this; e._bInitComplete ? this._fnConstruct(b) : e.oApi._fnCallbackReg(e, "aoInitComplete", function () { c._fnConstruct(b) }, "FixedColumns")
        } else alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.")
    }; d.extend(m.prototype, {
        fnUpdate: function () { this._fnDraw(!0) }, fnRedrawLayout: function () { this._fnColCalc(); this._fnGridLayout(); this.fnUpdate() }, fnRecalculateHeight: function (a) { delete a._DTTC_iHeight; a.style.height = "auto" }, fnSetRowHeight: function (a, b) {
            a.style.height =
            b + "px"
        }, fnGetPosition: function (a) { var b = this.s.dt.oInstance; if (d(a).parents(".DTFC_Cloned").length) { if ("tr" === a.nodeName.toLowerCase()) return a = d(a).index(), b.fnGetPosition(d("tr", this.s.dt.nTBody)[a]); var c = d(a).index(), a = d(a.parentNode).index(); return [b.fnGetPosition(d("tr", this.s.dt.nTBody)[a]), c, b.oApi._fnVisibleToColumnIndex(this.s.dt, c)] } return b.fnGetPosition(a) }, _fnConstruct: function (a) {
            var b = this; if ("function" != typeof this.s.dt.oInstance.fnVersionCheck || !0 !== this.s.dt.oInstance.fnVersionCheck("1.8.0")) alert("FixedColumns " +
                m.VERSION + " required DataTables 1.8.0 or later. Please upgrade your DataTables installation"); else if ("" === this.s.dt.oScroll.sX) this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled"); else {
                    this.s = d.extend(!0, this.s, m.defaults, a); a = this.s.dt.oClasses; this.dom.grid.dt = d(this.s.dt.nTable).parents("div." + a.sScrollWrapper)[0]; this.dom.scroller = d("div." +
                        a.sScrollBody, this.dom.grid.dt)[0]; this._fnColCalc(); this._fnGridSetup(); var c, e = !1; d(this.s.dt.nTableWrapper).on("mousedown.DTFC", function (a) { 0 === a.button && (e = !0, d(r).one("mouseup", function () { e = !1 })) }); d(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC", function () { e || (c = "main") }).on("scroll.DTFC", function (a) { !c && a.originalEvent && (c = "main"); if ("main" === c && (0 < b.s.iLeftColumns && (b.dom.grid.left.liner.scrollTop = b.dom.scroller.scrollTop), 0 < b.s.iRightColumns)) b.dom.grid.right.liner.scrollTop = b.dom.scroller.scrollTop });
                    var f = "onwheel" in r.createElement("div") ? "wheel.DTFC" : "mousewheel.DTFC"; if (0 < b.s.iLeftColumns) d(b.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC", function () { e || (c = "left") }).on("scroll.DTFC", function (a) { !c && a.originalEvent && (c = "left"); "left" === c && (b.dom.scroller.scrollTop = b.dom.grid.left.liner.scrollTop, 0 < b.s.iRightColumns && (b.dom.grid.right.liner.scrollTop = b.dom.grid.left.liner.scrollTop)) }).on(f, function (a) { b.dom.scroller.scrollLeft -= "wheel" === a.type ? -a.originalEvent.deltaX : a.originalEvent.wheelDeltaX });
                    if (0 < b.s.iRightColumns) d(b.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC", function () { e || (c = "right") }).on("scroll.DTFC", function (a) { !c && a.originalEvent && (c = "right"); "right" === c && (b.dom.scroller.scrollTop = b.dom.grid.right.liner.scrollTop, 0 < b.s.iLeftColumns && (b.dom.grid.left.liner.scrollTop = b.dom.grid.right.liner.scrollTop)) }).on(f, function (a) { b.dom.scroller.scrollLeft -= "wheel" === a.type ? -a.originalEvent.deltaX : a.originalEvent.wheelDeltaX }); d(p).on("resize.DTFC", function () { b._fnGridLayout.call(b) });
                    var g = !0, h = d(this.s.dt.nTable); h.on("draw.dt.DTFC", function () { b._fnColCalc(); b._fnDraw.call(b, g); g = !1 }).on("column-sizing.dt.DTFC", function () { b._fnColCalc(); b._fnGridLayout(b) }).on("column-visibility.dt.DTFC", function (a, c, d, e, f) { if (f === t || f) b._fnColCalc(), b._fnGridLayout(b), b._fnDraw(!0) }).on("select.dt.DTFC deselect.dt.DTFC", function (a) { "dt" === a.namespace && b._fnDraw(!1) }).on("destroy.dt.DTFC", function () {
                        h.off(".DTFC"); d(b.dom.scroller).off(".DTFC"); d(p).off(".DTFC"); d(b.s.dt.nTableWrapper).off(".DTFC");
                        d(b.dom.grid.left.liner).off(".DTFC " + f); d(b.dom.grid.left.wrapper).remove(); d(b.dom.grid.right.liner).off(".DTFC " + f); d(b.dom.grid.right.wrapper).remove()
                    }); this._fnGridLayout(); this.s.dt.oInstance.fnDraw(!1)
                }
        }, _fnColCalc: function () {
            var a = this, b = 0, c = 0; this.s.aiInnerWidths = []; this.s.aiOuterWidths = []; d.each(this.s.dt.aoColumns, function (e, f) {
                var g = d(f.nTh), h; if (g.filter(":visible").length) {
                    var i = g.outerWidth(); 0 === a.s.aiOuterWidths.length && (h = d(a.s.dt.nTable).css("border-left-width"), i += "string" ===
                        typeof h && -1 === h.indexOf("px") ? 1 : parseInt(h, 10)); a.s.aiOuterWidths.length === a.s.dt.aoColumns.length - 1 && (h = d(a.s.dt.nTable).css("border-right-width"), i += "string" === typeof h && -1 === h.indexOf("px") ? 1 : parseInt(h, 10)); a.s.aiOuterWidths.push(i); a.s.aiInnerWidths.push(g.width()); e < a.s.iLeftColumns && (b += i); a.s.iTableColumns - a.s.iRightColumns <= e && (c += i)
                } else a.s.aiInnerWidths.push(0), a.s.aiOuterWidths.push(0)
            }); this.s.iLeftWidth = b; this.s.iRightWidth = c
        }, _fnGridSetup: function () {
            var a = this._fnDTOverflow(), b; this.dom.body =
                this.s.dt.nTable; this.dom.header = this.s.dt.nTHead.parentNode; this.dom.header.parentNode.parentNode.style.position = "relative"; var c = d('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;" aria-hidden="true"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; right:0;" aria-hidden="true"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],
                    e = c.childNodes[0], f = c.childNodes[1]; this.dom.grid.dt.parentNode.insertBefore(c, this.dom.grid.dt); c.appendChild(this.dom.grid.dt); this.dom.grid.wrapper = c; 0 < this.s.iLeftColumns && (this.dom.grid.left.wrapper = e, this.dom.grid.left.head = e.childNodes[0], this.dom.grid.left.body = e.childNodes[1], this.dom.grid.left.liner = d("div.DTFC_LeftBodyLiner", c)[0], c.appendChild(e)); 0 < this.s.iRightColumns && (this.dom.grid.right.wrapper = f, this.dom.grid.right.head = f.childNodes[0], this.dom.grid.right.body = f.childNodes[1], this.dom.grid.right.liner =
                        d("div.DTFC_RightBodyLiner", c)[0], f.style.right = a.bar + "px", b = d("div.DTFC_RightHeadBlocker", c)[0], b.style.width = a.bar + "px", b.style.right = -a.bar + "px", this.dom.grid.right.headBlock = b, b = d("div.DTFC_RightFootBlocker", c)[0], b.style.width = a.bar + "px", b.style.right = -a.bar + "px", this.dom.grid.right.footBlock = b, c.appendChild(f)); if (this.s.dt.nTFoot && (this.dom.footer = this.s.dt.nTFoot.parentNode, 0 < this.s.iLeftColumns && (this.dom.grid.left.foot = e.childNodes[2]), 0 < this.s.iRightColumns)) this.dom.grid.right.foot = f.childNodes[2];
            this.s.rtl && d("div.DTFC_RightHeadBlocker", c).css({ left: -a.bar + "px", right: "" })
        }, _fnGridLayout: function () {
            var a = this, b = this.dom.grid; d(b.wrapper).width(); var c = this.s.dt.nTable.parentNode.offsetHeight, e = this.s.dt.nTable.parentNode.parentNode.offsetHeight, f = this._fnDTOverflow(), g = this.s.iLeftWidth, h = this.s.iRightWidth, i = "rtl" === d(this.dom.body).css("direction"), j = function (b, c) {
                f.bar ? a._firefoxScrollError() ? 34 < d(b).height() && (b.style.width = c + f.bar + "px") : b.style.width = c + f.bar + "px" : (b.style.width = c + 20 +
                    "px", b.style.paddingRight = "20px", b.style.boxSizing = "border-box")
            }; f.x && (c -= f.bar); b.wrapper.style.height = e + "px"; 0 < this.s.iLeftColumns && (e = b.left.wrapper, e.style.width = g + "px", e.style.height = "1px", i ? (e.style.left = "", e.style.right = 0) : (e.style.left = 0, e.style.right = ""), b.left.body.style.height = c + "px", b.left.foot && (b.left.foot.style.top = (f.x ? f.bar : 0) + "px"), j(b.left.liner, g), b.left.liner.style.height = c + "px", b.left.liner.style.maxHeight = c + "px"); 0 < this.s.iRightColumns && (e = b.right.wrapper, e.style.width = h + "px",
                e.style.height = "1px", this.s.rtl ? (e.style.left = f.y ? f.bar + "px" : 0, e.style.right = "") : (e.style.left = "", e.style.right = f.y ? f.bar + "px" : 0), b.right.body.style.height = c + "px", b.right.foot && (b.right.foot.style.top = (f.x ? f.bar : 0) + "px"), j(b.right.liner, h), b.right.liner.style.height = c + "px", b.right.liner.style.maxHeight = c + "px", b.right.headBlock.style.display = f.y ? "block" : "none", b.right.footBlock.style.display = f.y ? "block" : "none")
        }, _fnDTOverflow: function () {
            var a = this.s.dt.nTable, b = a.parentNode, c = { x: !1, y: !1, bar: this.s.dt.oScroll.iBarWidth };
            a.offsetWidth > b.clientWidth && (c.x = !0); a.offsetHeight > b.clientHeight && (c.y = !0); return c
        }, _fnDraw: function (a) { this._fnGridLayout(); this._fnCloneLeft(a); this._fnCloneRight(a); null !== this.s.fnDrawCallback && this.s.fnDrawCallback.call(this, this.dom.clone.left, this.dom.clone.right); d(this).trigger("draw.dtfc", { leftClone: this.dom.clone.left, rightClone: this.dom.clone.right }) }, _fnCloneRight: function (a) {
            if (!(0 >= this.s.iRightColumns)) {
                var b, c = []; for (b = this.s.iTableColumns - this.s.iRightColumns; b < this.s.iTableColumns; b++)this.s.dt.aoColumns[b].bVisible &&
                    c.push(b); this._fnClone(this.dom.clone.right, this.dom.grid.right, c, a)
            }
        }, _fnCloneLeft: function (a) { if (!(0 >= this.s.iLeftColumns)) { var b, c = []; for (b = 0; b < this.s.iLeftColumns; b++)this.s.dt.aoColumns[b].bVisible && c.push(b); this._fnClone(this.dom.clone.left, this.dom.grid.left, c, a) } }, _fnCopyLayout: function (a, b, c) {
            for (var e = [], f = [], g = [], h = 0, i = a.length; h < i; h++) {
                var j = []; j.nTr = d(a[h].nTr).clone(c, !1)[0]; for (var l = 0, o = this.s.iTableColumns; l < o; l++)if (-1 !== d.inArray(l, b)) {
                    var q = d.inArray(a[h][l].cell, g); -1 === q ? (q =
                        d(a[h][l].cell).clone(c, !1)[0], f.push(q), g.push(a[h][l].cell), j.push({ cell: q, unique: a[h][l].unique })) : j.push({ cell: f[q], unique: a[h][l].unique })
                } e.push(j)
            } return e
        }, _fnClone: function (a, b, c, e) {
            var f = this, g, h, i, j, l, o, q, n, m, k = this.s.dt; if (e) {
                d(a.header).remove(); a.header = d(this.dom.header).clone(!0, !1)[0]; a.header.className += " DTFC_Cloned"; a.header.style.width = "100%"; b.head.appendChild(a.header); n = this._fnCopyLayout(k.aoHeader, c, !0); j = d(">thead", a.header); j.empty(); g = 0; for (h = n.length; g < h; g++)j[0].appendChild(n[g].nTr);
                k.oApi._fnDrawHead(k, n, !0)
            } else { n = this._fnCopyLayout(k.aoHeader, c, !1); m = []; k.oApi._fnDetectHeader(m, d(">thead", a.header)[0]); g = 0; for (h = n.length; g < h; g++) { i = 0; for (j = n[g].length; i < j; i++)m[g][i].cell.className = n[g][i].cell.className, d("span.DataTables_sort_icon", m[g][i].cell).each(function () { this.className = d("span.DataTables_sort_icon", n[g][i].cell)[0].className }) } } this._fnEqualiseHeights("thead", this.dom.header, a.header); "auto" == this.s.sHeightMatch && d(">tbody>tr", f.dom.body).css("height", "auto"); null !==
                a.body && (d(a.body).remove(), a.body = null); a.body = d(this.dom.body).clone(!0)[0]; a.body.className += " DTFC_Cloned"; a.body.style.paddingBottom = k.oScroll.iBarWidth + "px"; a.body.style.marginBottom = 2 * k.oScroll.iBarWidth + "px"; null !== a.body.getAttribute("id") && a.body.removeAttribute("id"); d(">thead>tr", a.body).empty(); d(">tfoot", a.body).remove(); var p = d("tbody", a.body)[0]; d(p).empty(); if (0 < k.aiDisplay.length) {
                    h = d(">thead>tr", a.body)[0]; for (q = 0; q < c.length; q++)l = c[q], o = d(k.aoColumns[l].nTh).clone(!0)[0], o.innerHTML =
                        "", j = o.style, j.paddingTop = "0", j.paddingBottom = "0", j.borderTopWidth = "0", j.borderBottomWidth = "0", j.height = 0, j.width = f.s.aiInnerWidths[l] + "px", h.appendChild(o); d(">tbody>tr", f.dom.body).each(function (a) {
                            var a = f.s.dt.oFeatures.bServerSide === false ? f.s.dt.aiDisplay[f.s.dt._iDisplayStart + a] : a, b = f.s.dt.aoData[a].anCells || d(this).children("td, th"), e = this.cloneNode(false); e.removeAttribute("id"); e.setAttribute("data-dt-row", a); for (q = 0; q < c.length; q++) {
                                l = c[q]; if (b.length > 0) {
                                    o = d(b[l]).clone(true, true)[0]; o.removeAttribute("id");
                                    o.setAttribute("data-dt-row", a); o.setAttribute("data-dt-column", l); e.appendChild(o)
                                }
                            } p.appendChild(e)
                        })
                } else d(">tbody>tr", f.dom.body).each(function () { o = this.cloneNode(true); o.className = o.className + " DTFC_NoData"; d("td", o).html(""); p.appendChild(o) }); a.body.style.width = "100%"; a.body.style.margin = "0"; a.body.style.padding = "0"; k.oScroller !== t && (h = k.oScroller.dom.force, b.forcer ? b.forcer.style.height = h.style.height : (b.forcer = h.cloneNode(!0), b.liner.appendChild(b.forcer))); b.liner.appendChild(a.body); this._fnEqualiseHeights("tbody",
                    f.dom.body, a.body); if (null !== k.nTFoot) {
                        if (e) { null !== a.footer && a.footer.parentNode.removeChild(a.footer); a.footer = d(this.dom.footer).clone(!0, !0)[0]; a.footer.className += " DTFC_Cloned"; a.footer.style.width = "100%"; b.foot.appendChild(a.footer); n = this._fnCopyLayout(k.aoFooter, c, !0); b = d(">tfoot", a.footer); b.empty(); g = 0; for (h = n.length; g < h; g++)b[0].appendChild(n[g].nTr); k.oApi._fnDrawHead(k, n, !0) } else {
                            n = this._fnCopyLayout(k.aoFooter, c, !1); b = []; k.oApi._fnDetectHeader(b, d(">tfoot", a.footer)[0]); g = 0; for (h = n.length; g <
                                h; g++) { i = 0; for (j = n[g].length; i < j; i++)b[g][i].cell.className = n[g][i].cell.className }
                        } this._fnEqualiseHeights("tfoot", this.dom.footer, a.footer)
                    } b = k.oApi._fnGetUniqueThs(k, d(">thead", a.header)[0]); d(b).each(function (a) { l = c[a]; this.style.width = f.s.aiInnerWidths[l] + "px" }); null !== f.s.dt.nTFoot && (b = k.oApi._fnGetUniqueThs(k, d(">tfoot", a.footer)[0]), d(b).each(function (a) { l = c[a]; this.style.width = f.s.aiInnerWidths[l] + "px" }))
        }, _fnGetTrNodes: function (a) {
            for (var b = [], c = 0, d = a.childNodes.length; c < d; c++)"TR" == a.childNodes[c].nodeName.toUpperCase() &&
                b.push(a.childNodes[c]); return b
        }, _fnEqualiseHeights: function (a, b, c) {
            if (!("none" == this.s.sHeightMatch && "thead" !== a && "tfoot" !== a)) {
                var e, f, g = b.getElementsByTagName(a)[0], c = c.getElementsByTagName(a)[0], a = d(">" + a + ">tr:eq(0)", b).children(":first"); a.outerHeight(); a.height(); for (var g = this._fnGetTrNodes(g), b = this._fnGetTrNodes(c), h = [], c = 0, a = b.length; c < a; c++)e = g[c].offsetHeight, f = b[c].offsetHeight, e = f > e ? f : e, "semiauto" == this.s.sHeightMatch && (g[c]._DTTC_iHeight = e), h.push(e); c = 0; for (a = b.length; c < a; c++)b[c].style.height =
                    h[c] + "px", g[c].style.height = h[c] + "px"
            }
        }, _firefoxScrollError: function () { if (u === t) { var a = d("<div/>").css({ position: "absolute", top: 0, left: 0, height: 10, width: 50, overflow: "scroll" }).appendTo("body"); u = a[0].clientWidth === a[0].offsetWidth && 0 !== this._fnDTOverflow().bar; a.remove() } return u }
    }); m.defaults = { iLeftColumns: 1, iRightColumns: 0, fnDrawCallback: null, sHeightMatch: "semiauto" }; m.version = "3.2.5"; s.Api.register("fixedColumns()", function () { return this }); s.Api.register("fixedColumns().update()", function () {
        return this.iterator("table",
            function (a) { a._oFixedColumns && a._oFixedColumns.fnUpdate() })
    }); s.Api.register("fixedColumns().relayout()", function () { return this.iterator("table", function (a) { a._oFixedColumns && a._oFixedColumns.fnRedrawLayout() }) }); s.Api.register("rows().recalcHeight()", function () { return this.iterator("row", function (a, b) { a._oFixedColumns && a._oFixedColumns.fnRecalculateHeight(this.row(b).node()) }) }); s.Api.register("fixedColumns().rowIndex()", function (a) {
        a = d(a); return a.parents(".DTFC_Cloned").length ? this.rows({ page: "current" }).indexes()[a.index()] :
            this.row(a).index()
    }); s.Api.register("fixedColumns().cellIndex()", function (a) { a = d(a); if (a.parents(".DTFC_Cloned").length) { var b = a.parent().index(), b = this.rows({ page: "current" }).indexes()[b], a = a.parents(".DTFC_LeftWrapper").length ? a.index() : this.columns().flatten().length - this.context[0]._oFixedColumns.s.iRightColumns + a.index(); return { row: b, column: this.column.index("toData", a), columnVisible: a } } return this.cell(a).index() }); d(r).on("init.dt.fixedColumns", function (a, b) {
        if ("dt" === a.namespace) {
            var c = b.oInit.fixedColumns,
            e = s.defaults.fixedColumns; if (c || e) e = d.extend({}, c, e), !1 !== c && new m(b, e)
        }
    }); d.fn.dataTable.FixedColumns = m; return d.fn.DataTable.FixedColumns = m
});


/*!
 FixedHeader 3.1.4
 ©2009-2018 SpryMedia Ltd - datatables.net/license
*/
(function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (g) { return d(g, window, document) }) : "object" === typeof exports ? module.exports = function (g, i) { g || (g = window); if (!i || !i.fn.dataTable) i = require("datatables.net")(g, i).$; return d(i, g, g.document) } : d(jQuery, window, document) })(function (d, g, i, k) {
    var j = d.fn.dataTable, l = 0, h = function (a, b) {
        if (!(this instanceof h)) throw "FixedHeader must be initialised with the 'new' keyword."; !0 === b && (b = {}); a = new j.Api(a); this.c = d.extend(!0,
            {}, h.defaults, b); this.s = { dt: a, position: { theadTop: 0, tbodyTop: 0, tfootTop: 0, tfootBottom: 0, width: 0, left: 0, tfootHeight: 0, theadHeight: 0, windowHeight: d(g).height(), visible: !0 }, headerMode: null, footerMode: null, autoWidth: a.settings()[0].oFeatures.bAutoWidth, namespace: ".dtfc" + l++, scrollLeft: { header: -1, footer: -1 }, enable: !0 }; this.dom = {
                floatingHeader: null, thead: d(a.table().header()), tbody: d(a.table().body()), tfoot: d(a.table().footer()), header: { host: null, floating: null, placeholder: null }, footer: {
                    host: null, floating: null,
                    placeholder: null
                }
            }; this.dom.header.host = this.dom.thead.parent(); this.dom.footer.host = this.dom.tfoot.parent(); var e = a.settings()[0]; if (e._fixedHeader) throw "FixedHeader already initialised on table " + e.nTable.id; e._fixedHeader = this; this._constructor()
    }; d.extend(h.prototype, {
        enable: function (a) { this.s.enable = a; this.c.header && this._modeChange("in-place", "header", !0); this.c.footer && this.dom.tfoot.length && this._modeChange("in-place", "footer", !0); this.update() }, headerOffset: function (a) {
            a !== k && (this.c.headerOffset =
                a, this.update()); return this.c.headerOffset
        }, footerOffset: function (a) { a !== k && (this.c.footerOffset = a, this.update()); return this.c.footerOffset }, update: function () { this._positions(); this._scroll(!0) }, _constructor: function () {
            var a = this, b = this.s.dt; d(g).on("scroll" + this.s.namespace, function () { a._scroll() }).on("resize" + this.s.namespace, j.util.throttle(function () { a.s.position.windowHeight = d(g).height(); a.update() }, 50)); var e = d(".fh-fixedHeader"); !this.c.headerOffset && e.length && (this.c.headerOffset = e.outerHeight());
            e = d(".fh-fixedFooter"); !this.c.footerOffset && e.length && (this.c.footerOffset = e.outerHeight()); b.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc responsive-display.dt.dtfc", function () { a.update() }); b.on("destroy.dtfc", function () { a.c.header && a._modeChange("in-place", "header", true); a.c.footer && a.dom.tfoot.length && a._modeChange("in-place", "footer", true); b.off(".dtfc"); d(g).off(a.s.namespace) }); this._positions(); this._scroll()
        }, _clone: function (a, b) {
            var e = this.s.dt,
            c = this.dom[a], f = "header" === a ? this.dom.thead : this.dom.tfoot; !b && c.floating ? c.floating.removeClass("fixedHeader-floating fixedHeader-locked") : (c.floating && (c.placeholder.remove(), this._unsize(a), c.floating.children().detach(), c.floating.remove()), c.floating = d(e.table().node().cloneNode(!1)).css("table-layout", "fixed").attr("aria-hidden", "true").removeAttr("id").append(f).appendTo("body"), c.placeholder = f.clone(!1), c.placeholder.find("*[id]").removeAttr("id"), c.host.prepend(c.placeholder), this._matchWidths(c.placeholder,
                c.floating))
        }, _matchWidths: function (a, b) { var e = function (b) { return d(b, a).map(function () { return d(this).width() }).toArray() }, c = function (a, c) { d(a, b).each(function (a) { d(this).css({ width: c[a], minWidth: c[a] }) }) }, f = e("th"), e = e("td"); c("th", f); c("td", e) }, _unsize: function (a) { var b = this.dom[a].floating; b && ("footer" === a || "header" === a && !this.s.autoWidth) ? d("th, td", b).css({ width: "", minWidth: "" }) : b && "header" === a && d("th, td", b).css("min-width", "") }, _horizontal: function (a, b) {
            var e = this.dom[a], c = this.s.position,
            d = this.s.scrollLeft; e.floating && d[a] !== b && (e.floating.css("left", c.left - b), d[a] = b)
        }, _modeChange: function (a, b, e) {
            var c = this.dom[b], f = this.s.position, g = this.dom["footer" === b ? "tfoot" : "thead"], h = d.contains(g[0], i.activeElement) ? i.activeElement : null; h && h.blur(); if ("in-place" === a) { if (c.placeholder && (c.placeholder.remove(), c.placeholder = null), this._unsize(b), "header" === b ? c.host.prepend(g) : c.host.append(g), c.floating) c.floating.remove(), c.floating = null } else "in" === a ? (this._clone(b, e), c.floating.addClass("fixedHeader-floating").css("header" ===
                b ? "top" : "bottom", this.c[b + "Offset"]).css("left", f.left + "px").css("width", f.width + "px"), "footer" === b && c.floating.css("top", "")) : "below" === a ? (this._clone(b, e), c.floating.addClass("fixedHeader-locked").css("top", f.tfootTop - f.theadHeight).css("left", f.left + "px").css("width", f.width + "px")) : "above" === a && (this._clone(b, e), c.floating.addClass("fixedHeader-locked").css("top", f.tbodyTop).css("left", f.left + "px").css("width", f.width + "px")); h && h !== i.activeElement && setTimeout(function () { h.focus() }, 10); this.s.scrollLeft.header =
                    -1; this.s.scrollLeft.footer = -1; this.s[b + "Mode"] = a
        }, _positions: function () {
            var a = this.s.dt.table(), b = this.s.position, e = this.dom, a = d(a.node()), c = a.children("thead"), f = a.children("tfoot"), e = e.tbody; b.visible = a.is(":visible"); b.width = a.outerWidth(); b.left = a.offset().left; b.theadTop = c.offset().top; b.tbodyTop = e.offset().top; b.theadHeight = b.tbodyTop - b.theadTop; f.length ? (b.tfootTop = f.offset().top, b.tfootBottom = b.tfootTop + f.outerHeight(), b.tfootHeight = b.tfootBottom - b.tfootTop) : (b.tfootTop = b.tbodyTop + e.outerHeight(),
                b.tfootBottom = b.tfootTop, b.tfootHeight = b.tfootTop)
        }, _scroll: function (a) {
            var b = d(i).scrollTop(), e = d(i).scrollLeft(), c = this.s.position, f; if (this.s.enable && (this.c.header && (f = !c.visible || b <= c.theadTop - this.c.headerOffset ? "in-place" : b <= c.tfootTop - c.theadHeight - this.c.headerOffset ? "in" : "below", (a || f !== this.s.headerMode) && this._modeChange(f, "header", a), this._horizontal("header", e)), this.c.footer && this.dom.tfoot.length)) b = !c.visible || b + c.windowHeight >= c.tfootBottom + this.c.footerOffset ? "in-place" : c.windowHeight +
                b > c.tbodyTop + c.tfootHeight + this.c.footerOffset ? "in" : "above", (a || b !== this.s.footerMode) && this._modeChange(b, "footer", a), this._horizontal("footer", e)
        }
    }); h.version = "3.1.4"; h.defaults = { header: !0, footer: !1, headerOffset: 0, footerOffset: 0 }; d.fn.dataTable.FixedHeader = h; d.fn.DataTable.FixedHeader = h; d(i).on("init.dt.dtfh", function (a, b) { if ("dt" === a.namespace) { var e = b.oInit.fixedHeader, c = j.defaults.fixedHeader; if ((e || c) && !b._fixedHeader) c = d.extend({}, c, e), !1 !== e && new h(b, c) } }); j.Api.register("fixedHeader()", function () { });
    j.Api.register("fixedHeader.adjust()", function () { return this.iterator("table", function (a) { (a = a._fixedHeader) && a.update() }) }); j.Api.register("fixedHeader.enable()", function (a) { return this.iterator("table", function (b) { b = b._fixedHeader; a = a !== k ? a : !0; b && a !== b.s.enable && b.enable(a) }) }); j.Api.register("fixedHeader.disable()", function () { return this.iterator("table", function (a) { (a = a._fixedHeader) && a.s.enable && a.enable(!1) }) }); d.each(["header", "footer"], function (a, b) {
        j.Api.register("fixedHeader." + b + "Offset()",
            function (a) { var c = this.context; return a === k ? c.length && c[0]._fixedHeader ? c[0]._fixedHeader[b + "Offset"]() : k : this.iterator("table", function (c) { if (c = c._fixedHeader) c[b + "Offset"](a) }) })
    }); return h
});


/*!
 Responsive 2.2.2
 2014-2018 SpryMedia Ltd - datatables.net/license
*/
(function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (l) { return d(l, window, document) }) : "object" === typeof exports ? module.exports = function (l, j) { l || (l = window); if (!j || !j.fn.dataTable) j = require("datatables.net")(l, j).$; return d(j, l, l.document) } : d(jQuery, window, document) })(function (d, l, j, q) {
    function t(a, b, c) { var e = b + "-" + c; if (n[e]) return n[e]; for (var d = [], a = a.cell(b, c).node().childNodes, b = 0, c = a.length; b < c; b++)d.push(a[b]); return n[e] = d } function r(a, b, d) {
        var e = b +
            "-" + d; if (n[e]) { for (var a = a.cell(b, d).node(), d = n[e][0].parentNode.childNodes, b = [], f = 0, g = d.length; f < g; f++)b.push(d[f]); d = 0; for (f = b.length; d < f; d++)a.appendChild(b[d]); n[e] = q }
    } var o = d.fn.dataTable, i = function (a, b) {
        if (!o.versionCheck || !o.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer"; this.s = { dt: new o.Api(a), columns: [], current: [] }; this.s.dt.settings()[0].responsive || (b && "string" === typeof b.details ? b.details = { type: b.details } : b && !1 === b.details ? b.details = { type: !1 } :
            b && !0 === b.details && (b.details = { type: "inline" }), this.c = d.extend(!0, {}, i.defaults, o.defaults.responsive, b), a.responsive = this, this._constructor())
    }; d.extend(i.prototype, {
        _constructor: function () {
            var a = this, b = this.s.dt, c = b.settings()[0], e = d(l).width(); b.settings()[0]._responsive = this; d(l).on("resize.dtr orientationchange.dtr", o.util.throttle(function () { var b = d(l).width(); b !== e && (a._resize(), e = b) })); c.oApi._fnCallbackReg(c, "aoRowCreatedCallback", function (e) {
                -1 !== d.inArray(!1, a.s.current) && d(">td, >th",
                    e).each(function (e) { e = b.column.index("toData", e); !1 === a.s.current[e] && d(this).css("display", "none") })
            }); b.on("destroy.dtr", function () { b.off(".dtr"); d(b.table().body()).off(".dtr"); d(l).off("resize.dtr orientationchange.dtr"); d.each(a.s.current, function (b, e) { !1 === e && a._setColumnVis(b, !0) }) }); this.c.breakpoints.sort(function (a, b) { return a.width < b.width ? 1 : a.width > b.width ? -1 : 0 }); this._classLogic(); this._resizeAuto(); c = this.c.details; !1 !== c.type && (a._detailsInit(), b.on("column-visibility.dtr", function () {
                a._timer &&
                clearTimeout(a._timer); a._timer = setTimeout(function () { a._timer = null; a._classLogic(); a._resizeAuto(); a._resize(); a._redrawChildren() }, 100)
            }), b.on("draw.dtr", function () { a._redrawChildren() }), d(b.table().node()).addClass("dtr-" + c.type)); b.on("column-reorder.dtr", function () { a._classLogic(); a._resizeAuto(); a._resize() }); b.on("column-sizing.dtr", function () { a._resizeAuto(); a._resize() }); b.on("preXhr.dtr", function () {
                var e = []; b.rows().every(function () { this.child.isShown() && e.push(this.id(true)) }); b.one("draw.dtr",
                    function () { a._resizeAuto(); a._resize(); b.rows(e).every(function () { a._detailsDisplay(this, false) }) })
            }); b.on("init.dtr", function () { a._resizeAuto(); a._resize(); d.inArray(false, a.s.current) && b.columns.adjust() }); this._resize()
        }, _columnsVisiblity: function (a) {
            var b = this.s.dt, c = this.s.columns, e, f, g = c.map(function (a, b) { return { columnIdx: b, priority: a.priority } }).sort(function (a, b) { return a.priority !== b.priority ? a.priority - b.priority : a.columnIdx - b.columnIdx }), h = d.map(c, function (e, c) {
                return !1 === b.column(c).visible() ?
                    "not-visible" : e.auto && null === e.minWidth ? !1 : !0 === e.auto ? "-" : -1 !== d.inArray(a, e.includeIn)
            }), m = 0; e = 0; for (f = h.length; e < f; e++)!0 === h[e] && (m += c[e].minWidth); e = b.settings()[0].oScroll; e = e.sY || e.sX ? e.iBarWidth : 0; m = b.table().container().offsetWidth - e - m; e = 0; for (f = h.length; e < f; e++)c[e].control && (m -= c[e].minWidth); var s = !1; e = 0; for (f = g.length; e < f; e++) { var k = g[e].columnIdx; "-" === h[k] && (!c[k].control && c[k].minWidth) && (s || 0 > m - c[k].minWidth ? (s = !0, h[k] = !1) : h[k] = !0, m -= c[k].minWidth) } g = !1; e = 0; for (f = c.length; e < f; e++)if (!c[e].control &&
                !c[e].never && !1 === h[e]) { g = !0; break } e = 0; for (f = c.length; e < f; e++)c[e].control && (h[e] = g), "not-visible" === h[e] && (h[e] = !1); -1 === d.inArray(!0, h) && (h[0] = !0); return h
        }, _classLogic: function () {
            var a = this, b = this.c.breakpoints, c = this.s.dt, e = c.columns().eq(0).map(function (a) { var b = this.column(a), e = b.header().className, a = c.settings()[0].aoColumns[a].responsivePriority; a === q && (b = d(b.header()).data("priority"), a = b !== q ? 1 * b : 1E4); return { className: e, includeIn: [], auto: !1, control: !1, never: e.match(/\bnever\b/) ? !0 : !1, priority: a } }),
            f = function (a, b) { var c = e[a].includeIn; -1 === d.inArray(b, c) && c.push(b) }, g = function (d, c, g, k) { if (g) if ("max-" === g) { k = a._find(c).width; c = 0; for (g = b.length; c < g; c++)b[c].width <= k && f(d, b[c].name) } else if ("min-" === g) { k = a._find(c).width; c = 0; for (g = b.length; c < g; c++)b[c].width >= k && f(d, b[c].name) } else { if ("not-" === g) { c = 0; for (g = b.length; c < g; c++)-1 === b[c].name.indexOf(k) && f(d, b[c].name) } } else e[d].includeIn.push(c) }; e.each(function (a, e) {
                for (var c = a.className.split(" "), f = !1, i = 0, l = c.length; i < l; i++) {
                    var j = d.trim(c[i]);
                    if ("all" === j) { f = !0; a.includeIn = d.map(b, function (a) { return a.name }); return } if ("none" === j || a.never) { f = !0; return } if ("control" === j) { f = !0; a.control = !0; return } d.each(b, function (a, b) { var d = b.name.split("-"), c = j.match(RegExp("(min\\-|max\\-|not\\-)?(" + d[0] + ")(\\-[_a-zA-Z0-9])?")); c && (f = !0, c[2] === d[0] && c[3] === "-" + d[1] ? g(e, b.name, c[1], c[2] + c[3]) : c[2] === d[0] && !c[3] && g(e, b.name, c[1], c[2])) })
                } f || (a.auto = !0)
            }); this.s.columns = e
        }, _detailsDisplay: function (a, b) {
            var c = this, e = this.s.dt, f = this.c.details; if (f && !1 !== f.type) {
                var g =
                    f.display(a, b, function () { return f.renderer(e, a[0], c._detailsObj(a[0])) }); (!0 === g || !1 === g) && d(e.table().node()).triggerHandler("responsive-display.dt", [e, a, g, b])
            }
        }, _detailsInit: function () {
            var a = this, b = this.s.dt, c = this.c.details; "inline" === c.type && (c.target = "td:first-child, th:first-child"); b.on("draw.dtr", function () { a._tabIndexes() }); a._tabIndexes(); d(b.table().body()).on("keyup.dtr", "td, th", function (a) { a.keyCode === 13 && d(this).data("dtr-keyboard") && d(this).click() }); var e = c.target; d(b.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",
                "string" === typeof e ? e : "td, th", function (c) { if (d(b.table().node()).hasClass("collapsed") && d.inArray(d(this).closest("tr").get(0), b.rows().nodes().toArray()) !== -1) { if (typeof e === "number") { var g = e < 0 ? b.columns().eq(0).length + e : e; if (b.cell(this).index().column !== g) return } g = b.row(d(this).closest("tr")); c.type === "click" ? a._detailsDisplay(g, false) : c.type === "mousedown" ? d(this).css("outline", "none") : c.type === "mouseup" && d(this).blur().css("outline", "") } })
        }, _detailsObj: function (a) {
            var b = this, c = this.s.dt; return d.map(this.s.columns,
                function (e, d) { if (!e.never && !e.control) return { title: c.settings()[0].aoColumns[d].sTitle, data: c.cell(a, d).render(b.c.orthogonal), hidden: c.column(d).visible() && !b.s.current[d], columnIndex: d, rowIndex: a } })
        }, _find: function (a) { for (var b = this.c.breakpoints, c = 0, e = b.length; c < e; c++)if (b[c].name === a) return b[c] }, _redrawChildren: function () { var a = this, b = this.s.dt; b.rows({ page: "current" }).iterator("row", function (c, e) { b.row(e); a._detailsDisplay(b.row(e), !0) }) }, _resize: function () {
            var a = this, b = this.s.dt, c = d(l).width(),
            e = this.c.breakpoints, f = e[0].name, g = this.s.columns, h, m = this.s.current.slice(); for (h = e.length - 1; 0 <= h; h--)if (c <= e[h].width) { f = e[h].name; break } var i = this._columnsVisiblity(f); this.s.current = i; e = !1; h = 0; for (c = g.length; h < c; h++)if (!1 === i[h] && !g[h].never && !g[h].control && !1 === !b.column(h).visible()) { e = !0; break } d(b.table().node()).toggleClass("collapsed", e); var k = !1, j = 0; b.columns().eq(0).each(function (b, c) { !0 === i[c] && j++; i[c] !== m[c] && (k = !0, a._setColumnVis(b, i[c])) }); k && (this._redrawChildren(), d(b.table().node()).trigger("responsive-resize.dt",
                [b, this.s.current]), 0 === b.page.info().recordsDisplay && d("td", b.table().body()).eq(0).attr("colspan", j))
        }, _resizeAuto: function () {
            var a = this.s.dt, b = this.s.columns; if (this.c.auto && -1 !== d.inArray(!0, d.map(b, function (a) { return a.auto }))) {
                d.isEmptyObject(n) || d.each(n, function (b) { b = b.split("-"); r(a, 1 * b[0], 1 * b[1]) }); a.table().node(); var c = a.table().node().cloneNode(!1), e = d(a.table().header().cloneNode(!1)).appendTo(c), f = d(a.table().body()).clone(!1, !1).empty().appendTo(c), g = a.columns().header().filter(function (b) { return a.column(b).visible() }).to$().clone(!1).css("display",
                    "table-cell").css("min-width", 0); d(f).append(d(a.rows({ page: "current" }).nodes()).clone(!1)).find("th, td").css("display", ""); if (f = a.table().footer()) { var f = d(f.cloneNode(!1)).appendTo(c), h = a.columns().footer().filter(function (b) { return a.column(b).visible() }).to$().clone(!1).css("display", "table-cell"); d("<tr/>").append(h).appendTo(f) } d("<tr/>").append(g).appendTo(e); "inline" === this.c.details.type && d(c).addClass("dtr-inline collapsed"); d(c).find("[name]").removeAttr("name"); d(c).css("position", "relative");
                c = d("<div/>").css({ width: 1, height: 1, overflow: "hidden", clear: "both" }).append(c); c.insertBefore(a.table().node()); g.each(function (c) { c = a.column.index("fromVisible", c); b[c].minWidth = this.offsetWidth || 0 }); c.remove()
            }
        }, _setColumnVis: function (a, b) { var c = this.s.dt, e = b ? "" : "none"; d(c.column(a).header()).css("display", e); d(c.column(a).footer()).css("display", e); c.column(a).nodes().to$().css("display", e); d.isEmptyObject(n) || c.cells(null, a).indexes().each(function (a) { r(c, a.row, a.column) }) }, _tabIndexes: function () {
            var a =
                this.s.dt, b = a.cells({ page: "current" }).nodes().to$(), c = a.settings()[0], e = this.c.details.target; b.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"); "number" === typeof e ? a.cells(null, e, { page: "current" }).nodes().to$().attr("tabIndex", c.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === e && (e = ">td:first-child, >th:first-child"), d(e, a.rows({ page: "current" }).nodes()).attr("tabIndex", c.iTabIndex).data("dtr-keyboard", 1))
        }
    }); i.breakpoints = [{ name: "desktop", width: Infinity }, {
        name: "tablet-l",
        width: 1024
    }, { name: "tablet-p", width: 768 }, { name: "mobile-l", width: 480 }, { name: "mobile-p", width: 320 }]; i.display = {
        childRow: function (a, b, c) { if (b) { if (d(a.node()).hasClass("parent")) return a.child(c(), "child").show(), !0 } else { if (a.child.isShown()) return a.child(!1), d(a.node()).removeClass("parent"), !1; a.child(c(), "child").show(); d(a.node()).addClass("parent"); return !0 } }, childRowImmediate: function (a, b, c) {
            if (!b && a.child.isShown() || !a.responsive.hasHidden()) return a.child(!1), d(a.node()).removeClass("parent"),
                !1; a.child(c(), "child").show(); d(a.node()).addClass("parent"); return !0
        }, modal: function (a) {
            return function (b, c, e) {
                if (c) d("div.dtr-modal-content").empty().append(e()); else {
                    var f = function () { g.remove(); d(j).off("keypress.dtr") }, g = d('<div class="dtr-modal"/>').append(d('<div class="dtr-modal-display"/>').append(d('<div class="dtr-modal-content"/>').append(e())).append(d('<div class="dtr-modal-close">&times;</div>').click(function () { f() }))).append(d('<div class="dtr-modal-background"/>').click(function () { f() })).appendTo("body");
                    d(j).on("keyup.dtr", function (a) { 27 === a.keyCode && (a.stopPropagation(), f()) })
                } a && a.header && d("div.dtr-modal-content").prepend("<h2>" + a.header(b) + "</h2>")
            }
        }
    }; var n = {}; i.renderer = {
        listHiddenNodes: function () {
            return function (a, b, c) {
                var e = d('<ul data-dtr-index="' + b + '" class="dtr-details"/>'), f = !1; d.each(c, function (b, c) {
                    c.hidden && (d('<li data-dtr-index="' + c.columnIndex + '" data-dt-row="' + c.rowIndex + '" data-dt-column="' + c.columnIndex + '"><span class="dtr-title">' + c.title + "</span> </li>").append(d('<span class="dtr-data"/>').append(t(a,
                        c.rowIndex, c.columnIndex))).appendTo(e), f = !0)
                }); return f ? e : !1
            }
        }, listHidden: function () { return function (a, b, c) { return (a = d.map(c, function (a) { return a.hidden ? '<li data-dtr-index="' + a.columnIndex + '" data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><span class="dtr-title">' + a.title + '</span> <span class="dtr-data">' + a.data + "</span></li>" : "" }).join("")) ? d('<ul data-dtr-index="' + b + '" class="dtr-details"/>').append(a) : !1 } }, tableAll: function (a) {
            a = d.extend({ tableClass: "" }, a); return function (b,
                c, e) { b = d.map(e, function (a) { return '<tr data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><td>' + a.title + ":</td> <td>" + a.data + "</td></tr>" }).join(""); return d('<table class="' + a.tableClass + ' dtr-details" width="100%"/>').append(b) }
        }
    }; i.defaults = { breakpoints: i.breakpoints, auto: !0, details: { display: i.display.childRow, renderer: i.renderer.listHidden(), target: 0, type: "inline" }, orthogonal: "display" }; var p = d.fn.dataTable.Api; p.register("responsive()", function () { return this }); p.register("responsive.index()",
        function (a) { a = d(a); return { column: a.data("dtr-index"), row: a.parent().data("dtr-index") } }); p.register("responsive.rebuild()", function () { return this.iterator("table", function (a) { a._responsive && a._responsive._classLogic() }) }); p.register("responsive.recalc()", function () { return this.iterator("table", function (a) { a._responsive && (a._responsive._resizeAuto(), a._responsive._resize()) }) }); p.register("responsive.hasHidden()", function () {
            var a = this.context[0]; return a._responsive ? -1 !== d.inArray(!1, a._responsive.s.current) :
                !1
        }); p.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function () { return this.iterator("column", function (a, b) { return a._responsive ? a._responsive.s.current[b] : !1 }, 1) }); i.version = "2.2.2"; d.fn.dataTable.Responsive = i; d.fn.DataTable.Responsive = i; d(j).on("preInit.dt.dtr", function (a, b) {
            if ("dt" === a.namespace && (d(b.nTable).hasClass("responsive") || d(b.nTable).hasClass("dt-responsive") || b.oInit.responsive || o.defaults.responsive)) {
                var c = b.oInit.responsive; !1 !== c && new i(b, d.isPlainObject(c) ?
                    c : {})
            }
        }); return i
});


/*!
 Bootstrap 4 integration for DataTables' Responsive
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-responsive"], function (a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, b) { a || (a = window); if (!b || !b.fn.dataTable) b = require("datatables.net-bs4")(a, b).$; b.fn.dataTable.Responsive || require("datatables.net-responsive")(a, b); return c(b, a, a.document) } : c(jQuery, window, document) })(function (c) {
    var a = c.fn.dataTable, b = a.Responsive.display, g = b.modal, e = c('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
    b.modal = function (a) { return function (b, d, f) { if (c.fn.modal) { if (!d) { if (a && a.header) { var d = e.find("div.modal-header"), h = d.find("button").detach(); d.empty().append('<h4 class="modal-title">' + a.header(b) + "</h4>").append(h) } e.find("div.modal-body").empty().append(f()); e.appendTo("body").modal() } } else g(b, d, f) } }; return a.Responsive
});



(function ($) {
    "use strict";

    var defaultOptions = {
        tagClass: function (item) {
            return 'label label-info';
        },
        focusClass: 'focus',
        itemValue: function (item) {
            return item ? item.toString() : item;
        },
        itemText: function (item) {
            return this.itemValue(item);
        },
        itemTitle: function (item) {
            return null;
        },
        freeInput: true,
        addOnBlur: true,
        maxTags: undefined,
        maxChars: undefined,
        confirmKeys: [13, 44],
        delimiter: ',',
        delimiterRegex: null,
        cancelConfirmKeysOnEmpty: false,
        onTagExists: function (item, $tag) {
            $tag.hide().fadeIn();
        },
        trimValue: false,
        allowDuplicates: false,
        triggerChange: true
    };

    /**
     * Constructor function
     */
    function TagsInput(element, options) {
        this.isInit = true;
        this.itemsArray = [];

        this.$element = $(element);
        this.$element.hide();

        this.isSelect = (element.tagName === 'SELECT');
        this.multiple = (this.isSelect && element.hasAttribute('multiple'));
        this.objectItems = options && options.itemValue;
        this.placeholderText = element.hasAttribute('placeholder') ? this.$element.attr('placeholder') : '';
        this.inputSize = Math.max(1, this.placeholderText.length);

        this.$container = $('<div class="bootstrap-tagsinput"></div>');
        this.$input = $('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container);

        this.$element.before(this.$container);

        this.build(options);
        this.isInit = false;
    }

    TagsInput.prototype = {
        constructor: TagsInput,

        /**
         * Adds the given item as a new tag. Pass true to dontPushVal to prevent
         * updating the elements val()
         */
        add: function (item, dontPushVal, options) {
            var self = this;

            if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags)
                return;

            // Ignore falsey values, except false
            if (item !== false && !item)
                return;

            // Trim value
            if (typeof item === "string" && self.options.trimValue) {
                item = $.trim(item);
            }

            // Throw an error when trying to add an object while the itemValue option was not set
            if (typeof item === "object" && !self.objectItems)
                throw ("Can't add objects when itemValue option is not set");

            // Ignore strings only containg whitespace
            if (item.toString().match(/^\s*$/))
                return;

            // If SELECT but not multiple, remove current tag
            if (self.isSelect && !self.multiple && self.itemsArray.length > 0)
                self.remove(self.itemsArray[0]);

            if (typeof item === "string" && this.$element[0].tagName === 'INPUT') {
                var delimiter = (self.options.delimiterRegex) ? self.options.delimiterRegex : self.options.delimiter;
                var items = item.split(delimiter);
                if (items.length > 1) {
                    for (var i = 0; i < items.length; i++) {
                        this.add(items[i], true);
                    }

                    if (!dontPushVal)
                        self.pushVal(self.options.triggerChange);
                    return;
                }
            }

            var itemValue = self.options.itemValue(item),
                itemText = self.options.itemText(item),
                tagClass = self.options.tagClass(item),
                itemTitle = self.options.itemTitle(item);

            // Ignore items allready added
            var existing = $.grep(self.itemsArray, function (item) { return self.options.itemValue(item) === itemValue; })[0];
            if (existing && !self.options.allowDuplicates) {
                // Invoke onTagExists
                if (self.options.onTagExists) {
                    var $existingTag = $(".tag", self.$container).filter(function () { return $(this).data("item") === existing; });
                    self.options.onTagExists(item, $existingTag);
                }
                return;
            }

            // if length greater than limit
            if (self.items().toString().length + item.length + 1 > self.options.maxInputLength)
                return;

            // raise beforeItemAdd arg
            var beforeItemAddEvent = $.Event('beforeItemAdd', { item: item, cancel: false, options: options });
            self.$element.trigger(beforeItemAddEvent);
            if (beforeItemAddEvent.cancel)
                return;

            // register item in internal array and map
            self.itemsArray.push(item);

            // add a tag element

            var $tag = $('<span class="tag ' + htmlEncode(tagClass) + (itemTitle !== null ? ('" title="' + itemTitle) : '') + '">' + htmlEncode(itemText) + '<span data-role="remove"></span></span>');
            $tag.data('item', item);
            self.findInputWrapper().before($tag);
            $tag.after(' ');

            // Check to see if the tag exists in its raw or uri-encoded form
            var optionExists = (
                $('option[value="' + encodeURIComponent(itemValue) + '"]', self.$element).length ||
                $('option[value="' + htmlEncode(itemValue) + '"]', self.$element).length
            );

            // add <option /> if item represents a value not present in one of the <select />'s options
            if (self.isSelect && !optionExists) {
                var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
                $option.data('item', item);
                $option.attr('value', itemValue);
                self.$element.append($option);
            }

            if (!dontPushVal)
                self.pushVal(self.options.triggerChange);

            // Add class when reached maxTags
            if (self.options.maxTags === self.itemsArray.length || self.items().toString().length === self.options.maxInputLength)
                self.$container.addClass('bootstrap-tagsinput-max');

            // If using typeahead, once the tag has been added, clear the typeahead value so it does not stick around in the input.
            if ($('.typeahead, .twitter-typeahead', self.$container).length) {
                self.$input.typeahead('val', '');
            }

            if (this.isInit) {
                self.$element.trigger($.Event('itemAddedOnInit', { item: item, options: options }));
            } else {
                self.$element.trigger($.Event('itemAdded', { item: item, options: options }));
            }
        },

        /**
         * Removes the given item. Pass true to dontPushVal to prevent updating the
         * elements val()
         */
        remove: function (item, dontPushVal, options) {
            var self = this;

            if (self.objectItems) {
                if (typeof item === "object")
                    item = $.grep(self.itemsArray, function (other) { return self.options.itemValue(other) == self.options.itemValue(item); });
                else
                    item = $.grep(self.itemsArray, function (other) { return self.options.itemValue(other) == item; });

                item = item[item.length - 1];
            }

            if (item) {
                var beforeItemRemoveEvent = $.Event('beforeItemRemove', { item: item, cancel: false, options: options });
                self.$element.trigger(beforeItemRemoveEvent);
                if (beforeItemRemoveEvent.cancel)
                    return;

                $('.tag', self.$container).filter(function () { return $(this).data('item') === item; }).remove();
                $('option', self.$element).filter(function () { return $(this).data('item') === item; }).remove();
                if ($.inArray(item, self.itemsArray) !== -1)
                    self.itemsArray.splice($.inArray(item, self.itemsArray), 1);
            }

            if (!dontPushVal)
                self.pushVal(self.options.triggerChange);

            // Remove class when reached maxTags
            if (self.options.maxTags > self.itemsArray.length)
                self.$container.removeClass('bootstrap-tagsinput-max');

            self.$element.trigger($.Event('itemRemoved', { item: item, options: options }));
        },

        /**
         * Removes all items
         */
        removeAll: function () {
            var self = this;

            $('.tag', self.$container).remove();
            $('option', self.$element).remove();

            while (self.itemsArray.length > 0)
                self.itemsArray.pop();

            self.pushVal(self.options.triggerChange);
        },

        /**
         * Refreshes the tags so they match the text/value of their corresponding
         * item.
         */
        refresh: function () {
            var self = this;
            $('.tag', self.$container).each(function () {
                var $tag = $(this),
                    item = $tag.data('item'),
                    itemValue = self.options.itemValue(item),
                    itemText = self.options.itemText(item),
                    tagClass = self.options.tagClass(item);

                // Update tag's class and inner text
                $tag.attr('class', null);
                $tag.addClass('tag ' + htmlEncode(tagClass));
                $tag.contents().filter(function () {
                    return this.nodeType == 3;
                })[0].nodeValue = htmlEncode(itemText);

                if (self.isSelect) {
                    var option = $('option', self.$element).filter(function () { return $(this).data('item') === item; });
                    option.attr('value', itemValue);
                }
            });
        },

        /**
         * Returns the items added as tags
         */
        items: function () {
            return this.itemsArray;
        },

        /**
         * Assembly value by retrieving the value of each item, and set it on the
         * element.
         */
        pushVal: function () {
            var self = this,
                val = $.map(self.items(), function (item) {
                    return self.options.itemValue(item).toString();
                });

            self.$element.val(val, true);

            if (self.options.triggerChange)
                self.$element.trigger('change');
        },

        /**
         * Initializes the tags input behaviour on the element
         */
        build: function (options) {
            var self = this;

            self.options = $.extend({}, defaultOptions, options);
            // When itemValue is set, freeInput should always be false
            if (self.objectItems)
                self.options.freeInput = false;

            makeOptionItemFunction(self.options, 'itemValue');
            makeOptionItemFunction(self.options, 'itemText');
            makeOptionFunction(self.options, 'tagClass');

            // Typeahead Bootstrap version 2.3.2
            if (self.options.typeahead) {
                var typeahead = self.options.typeahead || {};

                makeOptionFunction(typeahead, 'source');

                self.$input.typeahead($.extend({}, typeahead, {
                    source: function (query, process) {
                        function processItems(items) {
                            var texts = [];

                            for (var i = 0; i < items.length; i++) {
                                var text = self.options.itemText(items[i]);
                                map[text] = items[i];
                                texts.push(text);
                            }
                            process(texts);
                        }

                        this.map = {};
                        var map = this.map,
                            data = typeahead.source(query);

                        if ($.isFunction(data.success)) {
                            // support for Angular callbacks
                            data.success(processItems);
                        } else if ($.isFunction(data.then)) {
                            // support for Angular promises
                            data.then(processItems);
                        } else {
                            // support for functions and jquery promises
                            $.when(data)
                                .then(processItems);
                        }
                    },
                    updater: function (text) {
                        self.add(this.map[text]);
                        return this.map[text];
                    },
                    matcher: function (text) {
                        return (text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !== -1);
                    },
                    sorter: function (texts) {
                        return texts.sort();
                    },
                    highlighter: function (text) {
                        var regex = new RegExp('(' + this.query + ')', 'gi');
                        return text.replace(regex, "<strong>$1</strong>");
                    }
                }));
            }

            // typeahead.js
            if (self.options.typeaheadjs) {

                // Determine if main configurations were passed or simply a dataset
                var typeaheadjs = self.options.typeaheadjs;
                if (!$.isArray(typeaheadjs)) {
                    typeaheadjs = [null, typeaheadjs];
                }
                var valueKey = typeaheadjs[1].valueKey; // We should test typeaheadjs.size >= 1
                var f_datum = valueKey ? function (datum) { return datum[valueKey]; }
                    : function (datum) { return datum; }
                $.fn.typeahead.apply(self.$input, typeaheadjs).on('typeahead:selected', $.proxy(function (obj, datum) {
                    self.add(f_datum(datum));
                    self.$input.typeahead('val', '');
                }, self));

            }

            self.$container.on('click', $.proxy(function (event) {
                if (!self.$element.attr('disabled')) {
                    self.$input.removeAttr('disabled');
                }
                self.$input.focus();
            }, self));

            if (self.options.addOnBlur && self.options.freeInput) {
                self.$input.on('focusout', $.proxy(function (event) {
                    // HACK: only process on focusout when no typeahead opened, to
                    //       avoid adding the typeahead text as tag
                    if ($('.typeahead, .twitter-typeahead', self.$container).length === 0) {
                        self.add(self.$input.val());
                        self.$input.val('');
                    }
                }, self));
            }

            // Toggle the 'focus' css class on the container when it has focus
            self.$container.on({
                focusin: function () {
                    self.$container.addClass(self.options.focusClass);
                },
                focusout: function () {
                    self.$container.removeClass(self.options.focusClass);
                },
            });

            self.$container.on('keydown', 'input', $.proxy(function (event) {
                var $input = $(event.target),
                    $inputWrapper = self.findInputWrapper();

                if (self.$element.attr('disabled')) {
                    self.$input.attr('disabled', 'disabled');
                    return;
                }

                switch (event.which) {
                    // BACKSPACE
                    case 8:
                        if (doGetCaretPosition($input[0]) === 0) {
                            var prev = $inputWrapper.prev();
                            if (prev.length) {
                                self.remove(prev.data('item'));
                            }
                        }
                        break;

                    // DELETE
                    case 46:
                        if (doGetCaretPosition($input[0]) === 0) {
                            var next = $inputWrapper.next();
                            if (next.length) {
                                self.remove(next.data('item'));
                            }
                        }
                        break;

                    // LEFT ARROW
                    case 37:
                        // Try to move the input before the previous tag
                        var $prevTag = $inputWrapper.prev();
                        if ($input.val().length === 0 && $prevTag[0]) {
                            $prevTag.before($inputWrapper);
                            $input.focus();
                        }
                        break;
                    // RIGHT ARROW
                    case 39:
                        // Try to move the input after the next tag
                        var $nextTag = $inputWrapper.next();
                        if ($input.val().length === 0 && $nextTag[0]) {
                            $nextTag.after($inputWrapper);
                            $input.focus();
                        }
                        break;
                    default:
                    // ignore
                }

                // Reset internal input's size
                var textLength = $input.val().length,
                    wordSpace = Math.ceil(textLength / 5),
                    size = textLength + wordSpace + 1;
                $input.attr('size', Math.max(this.inputSize, $input.val().length));
            }, self));

            self.$container.on('keypress', 'input', $.proxy(function (event) {
                var $input = $(event.target);

                if (self.$element.attr('disabled')) {
                    self.$input.attr('disabled', 'disabled');
                    return;
                }

                var text = $input.val(),
                    maxLengthReached = self.options.maxChars && text.length >= self.options.maxChars;
                if (self.options.freeInput && (keyCombinationInList(event, self.options.confirmKeys) || maxLengthReached)) {
                    // Only attempt to add a tag if there is data in the field
                    if (text.length !== 0) {
                        self.add(maxLengthReached ? text.substr(0, self.options.maxChars) : text);
                        $input.val('');
                    }

                    // If the field is empty, let the event triggered fire as usual
                    if (self.options.cancelConfirmKeysOnEmpty === false) {
                        event.preventDefault();
                    }
                }

                // Reset internal input's size
                var textLength = $input.val().length,
                    wordSpace = Math.ceil(textLength / 5),
                    size = textLength + wordSpace + 1;
                $input.attr('size', Math.max(this.inputSize, $input.val().length));
            }, self));

            // Remove icon clicked
            self.$container.on('click', '[data-role=remove]', $.proxy(function (event) {
                if (self.$element.attr('disabled')) {
                    return;
                }
                self.remove($(event.target).closest('.tag').data('item'));
            }, self));

            // Only add existing value as tags when using strings as tags
            if (self.options.itemValue === defaultOptions.itemValue) {
                if (self.$element[0].tagName === 'INPUT') {
                    self.add(self.$element.val());
                } else {
                    $('option', self.$element).each(function () {
                        self.add($(this).attr('value'), true);
                    });
                }
            }
        },

        /**
         * Removes all tagsinput behaviour and unregsiter all event handlers
         */
        destroy: function () {
            var self = this;

            // Unbind events
            self.$container.off('keypress', 'input');
            self.$container.off('click', '[role=remove]');

            self.$container.remove();
            self.$element.removeData('tagsinput');
            self.$element.show();
        },

        /**
         * Sets focus on the tagsinput
         */
        focus: function () {
            this.$input.focus();
        },

        /**
         * Returns the internal input element
         */
        input: function () {
            return this.$input;
        },

        /**
         * Returns the element which is wrapped around the internal input. This
         * is normally the $container, but typeahead.js moves the $input element.
         */
        findInputWrapper: function () {
            var elt = this.$input[0],
                container = this.$container[0];
            while (elt && elt.parentNode !== container)
                elt = elt.parentNode;

            return $(elt);
        }
    };

    /**
     * Register JQuery plugin
     */
    $.fn.tagsinput = function (arg1, arg2, arg3) {
        var results = [];

        this.each(function () {
            var tagsinput = $(this).data('tagsinput');
            // Initialize a new tags input
            if (!tagsinput) {
                tagsinput = new TagsInput(this, arg1);
                $(this).data('tagsinput', tagsinput);
                results.push(tagsinput);

                if (this.tagName === 'SELECT') {
                    $('option', $(this)).attr('selected', 'selected');
                }

                // Init tags from $(this).val()
                $(this).val($(this).val());
            } else if (!arg1 && !arg2) {
                // tagsinput already exists
                // no function, trying to init
                results.push(tagsinput);
            } else if (tagsinput[arg1] !== undefined) {
                // Invoke function on existing tags input
                if (tagsinput[arg1].length === 3 && arg3 !== undefined) {
                    var retVal = tagsinput[arg1](arg2, null, arg3);
                } else {
                    var retVal = tagsinput[arg1](arg2);
                }
                if (retVal !== undefined)
                    results.push(retVal);
            }
        });

        if (typeof arg1 == 'string') {
            // Return the results from the invoked function calls
            return results.length > 1 ? results : results[0];
        } else {
            return results;
        }
    };

    $.fn.tagsinput.Constructor = TagsInput;

    /**
     * Most options support both a string or number as well as a function as
     * option value. This function makes sure that the option with the given
     * key in the given options is wrapped in a function
     */
    function makeOptionItemFunction(options, key) {
        if (typeof options[key] !== 'function') {
            var propertyName = options[key];
            options[key] = function (item) { return item[propertyName]; };
        }
    }
    function makeOptionFunction(options, key) {
        if (typeof options[key] !== 'function') {
            var value = options[key];
            options[key] = function () { return value; };
        }
    }
    /**
     * HtmlEncodes the given value
     */
    var htmlEncodeContainer = $('<div />');
    function htmlEncode(value) {
        if (value) {
            return htmlEncodeContainer.text(value).html();
        } else {
            return '';
        }
    }

    /**
     * Returns the position of the caret in the given input field
     * http://flightschool.acylt.com/devnotes/caret-position-woes/
     */
    function doGetCaretPosition(oField) {
        var iCaretPos = 0;
        if (document.selection) {
            oField.focus();
            var oSel = document.selection.createRange();
            oSel.moveStart('character', -oField.value.length);
            iCaretPos = oSel.text.length;
        } else if (oField.selectionStart || oField.selectionStart == '0') {
            iCaretPos = oField.selectionStart;
        }
        return (iCaretPos);
    }

    /**
      * Returns boolean indicates whether user has pressed an expected key combination.
      * @param object keyPressEvent: JavaScript event object, refer
      *     http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
      * @param object lookupList: expected key combinations, as in:
      *     [13, {which: 188, shiftKey: true}]
      */
    function keyCombinationInList(keyPressEvent, lookupList) {
        var found = false;
        $.each(lookupList, function (index, keyCombination) {
            if (typeof (keyCombination) === 'number' && keyPressEvent.which === keyCombination) {
                found = true;
                return false;
            }

            if (keyPressEvent.which === keyCombination.which) {
                var alt = !keyCombination.hasOwnProperty('altKey') || keyPressEvent.altKey === keyCombination.altKey,
                    shift = !keyCombination.hasOwnProperty('shiftKey') || keyPressEvent.shiftKey === keyCombination.shiftKey,
                    ctrl = !keyCombination.hasOwnProperty('ctrlKey') || keyPressEvent.ctrlKey === keyCombination.ctrlKey;
                if (alt && shift && ctrl) {
                    found = true;
                    return false;
                }
            }
        });

        return found;
    }

    /**
     * Initialize tagsinput behaviour on inputs and selects which have
     * data-role=tagsinput
     */
    $(function () {
        $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
    });
})(window.jQuery);
/*! DataTables styling integration
 * ©2018 SpryMedia Ltd - datatables.net/license
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'datatables.net'], function ($) {
            return factory($, window, document);
        });
    }
    else if (typeof exports === 'object') {
        // CommonJS
        module.exports = function (root, $) {
            if (!root) {
                root = window;
            }

            if (!$ || !$.fn.dataTable) {
                // Require DataTables, which attaches to jQuery, including
                // jQuery if needed and have a $ property so we can access the
                // jQuery object that is used
                $ = require('datatables.net')(root, $).$;
            }

            return factory($, root, root.document);
        };
    }
    else {
        // Browser
        factory(jQuery, window, document);
    }
}(function ($, window, document, undefined) {

    return $.fn.dataTable;

}));

/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */
!function (t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t) { "use strict"; function e(t, e, i) { var o; return function () { var n = this, a = arguments, s = function () { o = null, i || t.apply(n, a) }, r = i && !o; clearTimeout(o), o = setTimeout(s, e), r && t.apply(n, a) } } function i(t) { var e = ++h; return String(null == t ? "rmjs-" : t) + e } function o(t) { var e = t.clone().css({ height: "auto", width: t.width(), maxHeight: "none", overflow: "hidden" }).insertAfter(t), i = e.outerHeight(), o = parseInt(e.css({ maxHeight: "" }).css("max-height").replace(/[^-\d\.]/g, ""), 10), n = t.data("defaultHeight"); e.remove(); var a = o || t.data("collapsedHeight") || n; t.data({ expandedHeight: i, maxHeight: o, collapsedHeight: a }).css({ maxHeight: "none" }) } function n(t) { if (!d[t.selector]) { var e = " "; t.embedCSS && "" !== t.blockCSS && (e += t.selector + " + [data-readmore-toggle], " + t.selector + "[data-readmore]{" + t.blockCSS + "}"), e += t.selector + "[data-readmore]{transition: height " + t.speed + "ms;overflow: hidden;}", function (t, e) { var i = t.createElement("style"); i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), t.getElementsByTagName("head")[0].appendChild(i) }(document, e), d[t.selector] = !0 } } function a(e, i) { this.element = e, this.options = t.extend({}, r, i), n(this.options), this._defaults = r, this._name = s, this.init(), window.addEventListener ? (window.addEventListener("load", c), window.addEventListener("resize", c)) : (window.attachEvent("load", c), window.attachEvent("resize", c)) } var s = "readmore", r = { speed: 100, collapsedHeight: 200, heightMargin: 16, moreLink: '<a href="#">Read More</a>', lessLink: '<a href="#">Close</a>', embedCSS: !0, blockCSS: "display: block; width: 100%;", startOpen: !1, blockProcessed: function () { }, beforeToggle: function () { }, afterToggle: function () { } }, d = {}, h = 0, c = e(function () { t("[data-readmore]").each(function () { var e = t(this), i = "true" === e.attr("aria-expanded"); o(e), e.css({ height: e.data(i ? "expandedHeight" : "collapsedHeight") }) }) }, 100); a.prototype = { init: function () { var e = t(this.element); e.data({ defaultHeight: this.options.collapsedHeight, heightMargin: this.options.heightMargin }), o(e); var n = e.data("collapsedHeight"), a = e.data("heightMargin"); if (e.outerHeight(!0) <= n + a) return this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(e, !1), !0; var s = e.attr("id") || i(), r = this.options.startOpen ? this.options.lessLink : this.options.moreLink; e.attr({ "data-readmore": "", "aria-expanded": this.options.startOpen, id: s }), e.after(t(r).on("click", function (t) { return function (i) { t.toggle(this, e[0], i) } }(this)).attr({ "data-readmore-toggle": s, "aria-controls": s })), this.options.startOpen || e.css({ height: n }), this.options.blockProcessed && "function" == typeof this.options.blockProcessed && this.options.blockProcessed(e, !0) }, toggle: function (e, i, o) { o && o.preventDefault(), e || (e = t('[aria-controls="' + this.element.id + '"]')[0]), i || (i = this.element); var n = t(i), a = "", s = "", r = !1, d = n.data("collapsedHeight"); n.height() <= d ? (a = n.data("expandedHeight") + "px", s = "lessLink", r = !0) : (a = d, s = "moreLink"), this.options.beforeToggle && "function" == typeof this.options.beforeToggle && this.options.beforeToggle(e, n, !r), n.css({ height: a }), n.on("transitionend", function (i) { return function () { i.options.afterToggle && "function" == typeof i.options.afterToggle && i.options.afterToggle(e, n, r), t(this).attr({ "aria-expanded": r }).off("transitionend") } }(this)), t(e).replaceWith(t(this.options[s]).on("click", function (t) { return function (e) { t.toggle(this, i, e) } }(this)).attr({ "data-readmore-toggle": n.attr("id"), "aria-controls": n.attr("id") })) }, destroy: function () { t(this.element).each(function () { var e = t(this); e.attr({ "data-readmore": null, "aria-expanded": null }).css({ maxHeight: "", height: "" }).next("[data-readmore-toggle]").remove(), e.removeData() }) } }, t.fn.readmore = function (e) { var i = arguments, o = this.selector; return e = e || {}, "object" == typeof e ? this.each(function () { if (t.data(this, "plugin_" + s)) { var i = t.data(this, "plugin_" + s); i.destroy.apply(i) } e.selector = o, t.data(this, "plugin_" + s, new a(this, e)) }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () { var o = t.data(this, "plugin_" + s); o instanceof a && "function" == typeof o[e] && o[e].apply(o, Array.prototype.slice.call(i, 1)) }) : void 0 } });
$(document).ready(function () {

    // ===== Scroll to Top ====
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('.float-button.top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.float-button.top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('.float-button.top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });
    $('.datepicker').datepicker();

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        offset: 60,
        speedAsDuration: true,
        updateURL: false
    });

    var header = $(".top-nav");
    var scroll = $(window).scrollTop();
    if (scroll >= 76) {
        header.removeClass('clearHeader').addClass("darkHeader");
    } else {
        header.removeClass("darkHeader").addClass('clearHeader');
    }
    $(function () {
        //caches a jQuery object containing the header element
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 76) {
                header.removeClass('clearHeader').addClass("darkHeader");
            } else {
                header.removeClass("darkHeader").addClass('clearHeader');
            }
        });
    });

    if ($('.section-our-services').length) {
        $('.service-header').each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();
                var thisCol = $(this).closest('.product-container');
                $('.product-container').not($(thisCol)).removeClass('active');
                $('.product-container').not($(thisCol)).css('z-index', '1');
                $(thisCol).toggleClass('active');
                $(thisCol).css('z-index', '2');
            });
        });
    }
    if ($('.tab-switcher').length) {
        $('.vt-tabs .nav-link').each(function () {
            $(this).on('click', function (e) {
                if ($('.tab-switcher').is(':visible')) {
                    $('.tab-switcher').trigger('click');
                    $('.tab-switcher span').html($(this).html());
                }
            });
        });
    }

    $('.menu-overlay').on('click', function (e) {
        $('.megamenu .menu-toggle').trigger('click');
    });

    $('.top-nav').on('click', function (e) {
        var clickedTo = $(e.target).prop('tagName');
        if (['DIV', 'UL', 'LI'].indexOf(clickedTo) >= 0 && $('.search-expanded').length) {
            $('#search-toggler').trigger('click');
        }
    });

    $('#search-toggler').on('click', function (e) {
        var container = $(this).closest('.col-md-5');
        var searchInput = container.find('.search-input');
        var spacing = $(this).attr('data-spacing') ? parseInt($(this).attr('data-spacing')) : 0;
        var inputWidth = $(this).offset().left - container.offset().left - spacing;
        searchInput.css('width', inputWidth + 'px');
        container.toggleClass('search-expanded');
        $(this).toggleClass('hide-btn');
        setTimeout(function () {
            $('#searchInput').focus();
        }, 500);
    });

    $('body').on('click', function (e) {

        var elm = $(e.target);
        if (!$(elm).closest('#search-toggler').length && !$(elm).closest('.search-form').length && $('.search-expanded').length) {
            $('#search-toggler').trigger('click');
        }
    });

    $('#search-desktop').on('focus', function (e) {
        $(this).addClass('focused');
        $(this).addClass('position-absolute');
    });

    $('#search-desktop').on('blur', function (e) {
        var self = $(this);
        self.addClass('collapsing');
        self.removeClass('focused');
        setTimeout(function () {
            self.removeClass('position-absolute');
            self.removeClass('collapsing');
        }, 500);
    });

    $('#tabServiceSelected a').on('click', function (e) {
        e.preventDefault();
        var tabName = $(this).attr('tab-name');
        $('body').find('.tab-service-list a[href="#' + tabName + '"]').trigger("click");
    });

    $('#myTab a').on('click', function (e) {
        var tabName = $(this).attr('tab-name');
        if (tabName === 'listService') {
            e.preventDefault();
            var position = $('#listService').offset().top - 125;
            $("body, html").animate({
                scrollTop: position
            } /* speed */);
        }
        $('body').find('.tab-service-list-selected a').removeClass("active");
        $('body').find('.tab-service-list-selected a[href="#' + tabName + '"]').addClass("active");
    });

    var serviceEqualHeight = function () {
        var isExpanded = $(window).width() > 991;
        if ($('.services-container').length) {
            var sBlocks = $('.services-container').find('.service-block');
            if (isExpanded) {
                var maxHeight = 0;
                $.each(sBlocks, function (block) {
                    var currHeight = $(this).height();
                    if (currHeight > maxHeight) {
                        maxHeight = currHeight;
                    }
                });
                $.each(sBlocks, function (block) {
                    $(this).height(maxHeight);
                });
                $('.section-our-services .products-line').css('min-height', maxHeight + 'px');
            } else {
                $.each(sBlocks, function (block) {
                    $(this).height('auto');
                });
                $('.section-our-services .products-line').css('min-height', 'auto');
            }
        }
    };
    serviceEqualHeight();

    $('.search-form .close-button').on('click', function (e) {
        e.preventDefault();
        $('#search-toggler').removeClass('hide-btn');
        $('.search-expanded').removeClass('search-expanded');
    });

    $('.custom-form-control').focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $('.custom-form-control').blur(function () {
        var inputValue = $(this).val();
        if (inputValue === "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    });

    readMore($('.spoiler'), 1);

    $('ul.tab-service-list').each(function () {
        var LiN = $(this).find('li').length;
        if (LiN > 6) {
            $('li', this).eq(5).nextAll().hide().addClass('toggleable');
            $(this).append('<li class="more"><i class="vt-icon icon-chevron-down"></i></li>');
        }
    });
    $('ul.tab-service-list').on('click', '.more', function () {
        if ($(this).hasClass('less')) {
            $(this).removeClass('less').find('.vt-icon').removeClass('icon-chevron-up').addClass('icon-chevron-down');
        } else {
            $(this).addClass('less').find('.vt-icon').removeClass('icon-chevron-down').addClass('icon-chevron-up');
        }
        $(this).siblings('li.toggleable').slideToggle();
    });

    function readMore(jObj, lineNum) {
        if (isNaN(lineNum)) {
            lineNum = 1;
        }
        var go = new ReadMore(jObj, lineNum);
    }

    function ReadMore(_jObj, lineNum) {
        var READ_MORE_LABEL = 'i want read more';
        var HIDE_LABEL = 'minimize it';

        var jObj = _jObj;
        var textMinHeight = '' + (parseInt(jObj.children('.hidden-text').css('line-height'), 10) * lineNum) + 'px';
        var textMaxHeight = '' + jObj.children('.hidden-text').css('height');

        jObj.children('.hidden-text').css('height', '' + textMaxHeight);
        jObj.children('.hidden-text').css('transition', 'height .5s');
        jObj.children('.hidden-text').css('height', '' + textMinHeight);

        jObj.append('<button class="read-more">' + READ_MORE_LABEL + '</button>');

        jObj.children('.read-more').click(function () {
            if (jObj.children('.hidden-text').css('height') === textMinHeight) {
                jObj.children('.hidden-text').css('height', '' + textMaxHeight);
                jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
            } else {
                jObj.children('.hidden-text').css('height', '' + textMinHeight);
                jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
            }
        });

    }

    if ($('.data-table').length) {
        $('.data-table').each(function () {
            var visibleCols = [];

            $(this).find('thead tr th').each(function (index) {
                if (!$(this).hasClass('hide-def')) {
                    visibleCols.push(index);
                }
            });

            var numOfCols = $(this).find('thead tr th').length;
            var emptyCol = '<td class="d-none d-md-table-cell">&nbsp;</td>';
            var emptyColHeading = '<th class="d-none d-md-table-cell">&nbsp;</th>';
            $(this).find('tbody tr').each(function (index, row) {
                if ($(row).hasClass('child header')) {
                    for (var i = 0; i < numOfCols - 2; i++) {
                        $(row).append(emptyCol);
                    }
                    $(row).append($(emptyCol).removeClass());
                }
                if ($(row)[0].hasAttribute('data-col-count')) {
                    var colCount = $(row).attr('data-col-count');
                    var emptyColCount = numOfCols - parseInt(colCount);
                    for (var i = 0; i < emptyColCount; i++) {
                        $(row).find('th').eq(0).after(emptyColHeading);
                    }
                }
                if ($(row).hasClass('child child-row')) {
                    var firstCol = $(row).find('td').eq(0),
                        secondCol = $(row).find('td').eq(1),
                        thirdCol = $(row).find('td').eq(2)
                    lastCol = $(row).find('td').last();
                    firstCol.after(emptyCol);
                    thirdCol.after(emptyCol);
                    for (var i = 0; i < numOfCols - 8; i++) {
                        lastCol.after(emptyCol);
                    }
                }
            });

            var table = $(this).DataTable({
                "paging": false,
                "ordering": false,
                "info": false,
                "searching": false,
                "buttons": ['colvis'],
                "columnDefs": [
                    { targets: visibleCols, visible: true },
                    { targets: '_all', visible: false },
                    { "width": "44px", "targets": 8 }
                ],
                responsive: false
            });

            table.buttons().container()
                .appendTo($('.visibility-toggler:eq(0)', table.table().container()));
        });
    }

    $('.toggle-vis').on('change', function (e) {
        e.preventDefault();
        // Get the column API object
        var column = table.column($(this).attr('data-column'));
        // Toggle the visibility
        column.visible(!column.visible());
    });

    if ($('.select-qtt').length) {
        $('.select-qtt').on('change', function () {
            var qtt = parseInt($(this).val());
            if (qtt == 1) {
                $('.package-options').addClass('single').removeClass('multiple');
            } else {
                $('.package-options').removeClass('single').addClass('multiple');
            }
        });
    }

    if ($('.bill-check').length) {
        $('.bill-check').on('change', function () {
            var ref = $(this).attr('id');
            $('[data-ref=' + ref + ']').toggleClass('d-none');
        });
    }

    if ($('.bank-pay').length) {
        $('.bank-pay').on('change', function () {
            if ($(this).val() == 'mb-bank-pay') {
                $('.mb-bank-pay-content').removeClass('d-none');
            } else {
                $('.mb-bank-pay-content').addClass('d-none');
            }
            if ($(this).val() == 'vietcombank-pay') {
                $('.vietcombank-pay-content').removeClass('d-none');
            } else {
                $('.vietcombank-pay-content').addClass('d-none');
            }
            if ($(this).val() == 'sacobank-pay') {
                $('.sacobank-pay-content').removeClass('d-none');
            } else {
                $('.sacobank-pay-content').addClass('d-none');
            }
        });
    }

    function formatNumber(nStr, decSeperate, groupSeperate) {
        nStr += '';
        x = nStr.split(decSeperate);
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
        }
        return x1 + x2;
    }

    $("#otherValue").on("change paste keyup", function () {
        $(".method-selector-recharge").prop('checked', false);
        $(".inputValue").text(formatNumber($(this).val(), '.', ','))
    });

    if ($('.method-selector-recharge').length) {
        $('.method-selector-recharge').on('change', function () {
            $("#otherValue").val('');
            $(".inputValue").text(formatNumber($(this).val(), '.', ','))
        });
    }

    if ($('.method-selector').length) {
        $('.method-selector').on('change', function () {
            if ($(this).val() == 'bank') {
                $('.checkout-bank-content').removeClass('d-none');
            } else {
                $('.checkout-bank-content').addClass('d-none');
            }
        });

        $('.method-selector').on('change', function () {
            if ($(this).val() == 'online-pay') {
                $('.online-pay-content').removeClass('d-none');
                $('.online-pay-content-guide-info').addClass('d-none');
            } else {
                $('.online-pay-content').addClass('d-none');
                $('.online-pay-content-guide-info').removeClass('d-none');
            }
        });

        $('.method-selector').on('change', function () {
            if ($(this).val() == 'offline-pay') {
                $('.offline-pay-content').removeClass('d-none');
                $('.offline-pay-content-guide-info').removeClass('d-none');
            } else {
                $('.offline-pay-content').addClass('d-none');
                $('.offline-pay-content-guide-info').addClass('d-none');
            }
        });
    }

    if ($('.method-selector-card').is(":checked")) {
        $('.checkout-card-content').removeClass('d-none');
        $('.checkout-bank-content').addClass('d-none');
        $('.checkout-voucher-content').addClass('d-none');
    } else {
        $('.checkout-card-content').addClass('d-none');
        $('.checkout-bank-content').removeClass('d-none');
        $('.checkout-voucher-content').removeClass('d-none');
    }

    $('.method-selector-card').change(function () {
        if ($(this).is(":checked")) {
            $('.checkout-card-content').removeClass('d-none');
            $('.checkout-voucher-content').addClass('d-none');
            $('.checkout-bank-content').addClass('d-none');
        } else {
            $('.checkout-card-content').addClass('d-none');
            $('.checkout-bank-content').removeClass('d-none');
            $('.checkout-voucher-content').removeClass('d-none');
        }
    });

    if ($('.method-selector-bank').is(":checked")) {
        $('.checkout-bank-content').removeClass('d-none');
        $('.checkout-card-content').addClass('d-none');
        $('.checkout-voucher-content').addClass('d-none');
    } else {
        $('.checkout-bank-content').addClass('d-none');
        $('.checkout-card-content').removeClass('d-none');
        $('.checkout-voucher-content').removeClass('d-none');
    }

    $('.method-selector-bank').change(function () {
        if ($(this).is(":checked")) {
            $('.checkout-bank-content').removeClass('d-none');
            $('.checkout-voucher-content').addClass('d-none');
            $('.checkout-card-content').addClass('d-none');
        } else {
            $('.checkout-bank-content').addClass('d-none');
            $('.checkout-card-content').removeClass('d-none');
            $('.checkout-voucher-content').removeClass('d-none');
        }
    });

    if ($('.method-selector-voucher').is(":checked")) {
        $('.checkout-voucher-content').removeClass('d-none');
        $('.checkout-card-content').addClass('d-none');
        $('.checkout-bank-content').addClass('d-none');
    } else {
        $('.checkout-voucher-content').addClass('d-none');
        $('.checkout-card-content').removeClass('d-none');
        $('.checkout-bank-content').removeClass('d-none');
    }

    $('.method-selector-voucher').change(function () {
        if ($(this).is(":checked")) {
            $('.checkout-voucher-content').removeClass('d-none');
            $('.checkout-bank-content').addClass('d-none');
            $('.checkout-card-content').addClass('d-none');
        } else {
            $('.checkout-voucher-content').addClass('d-none');
            $('.checkout-card-content').removeClass('d-none');
            $('.checkout-bank-content').removeClass('d-none');
        }
    });

    $(".selectpicker").on("changed.bs.select", function (e, clickedIndex, newValue, oldValue) {
        if (newValue) {
            $(this).closest('.bootstrap-select').addClass('selected');
        }
    });

    $(".input-tags").tagsinput({});
    $('.input-tags').on('itemAdded itemRemoved', function (event) {
        var numOfTags = $('.coupon-form .bootstrap-tagsinput .tag.label').length;
        $('.coupon-form .bootstrap-tagsinput input').eq(0).attr('placeholder', numOfTags > 0 ? '' : 'Voucher');
        setTimeout(function () {
            $('.coupon-form .bootstrap-tagsinput input:first').css('width', numOfTags > 0 ? '25px' : 'auto');
        }, 10);
    });
    $('body').on('keydown', '.coupon-form .bootstrap-tagsinput input:first', function () {
        $(this).css('width', $(this).val().length > 0 ? 'auto' : '25px');
    });

    $('[data-toggle="tooltip"]').tooltip();

    //	SLICK SLIDER
    $('.certificate-wrapper').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    function slickPause() {
        $('.certificate-wrapper').slick('slickPause');
    }
    slickPause();

    $('.certificate-wrapper').mouseover(function () {
        $('.certificate-wrapper').slick('slickPlay')
    });
    $('.certificate-wrapper').mouseout(function () {
        slickPause();
    });

    $('.certificate-brand-wrapper').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    function slickPauseBrand() {
        $('.certificate-brand-wrapper').slick('slickPause');
    }
    slickPauseBrand();

    $('.certificate-brand-wrapper').mouseover(function () {
        $('.certificate-brand-wrapper').slick('slickPlay')
    });
    $('.certificate-brand-wrapper').mouseout(function () {
        slickPauseBrand();
    });
    $('.vt-feature').slick({
        dots: false,
        infinite: false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow-right'></i></button>",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.service-group-4').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-back-arrow'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-right-arrow'></i></button>",
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.promotion-news').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.service-group').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-back-arrow'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-right-arrow'></i></button>",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.partner-list-wrapper').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-back-arrow'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-right-arrow'></i></button>",
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.news-list-wrapper').slick({
        dots: false,
        infinite: false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.double-list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.grid-list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    });

    $('.grid-service-list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.grid-service-list',
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.vtChoose-block').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.promotion-domain').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        initialSlide: 1,
        autoplaySpeed: 5000,
    });

    if ($('.promotion-domain .promotion-item').length === 1) {
        $('.promotion-domain').slick('slickSetOption', 'slidesToShow', 1, true)
            .find('.slick-dots').addClass('hide-dots');
    }

    $('.review-solution').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>"
    });

    $('.service-solution-list').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href"); // activated tab
        var bgImage = $(e.target).attr("bg-image"); // activated tab
        var titleImage = $(e.target).attr("title-detail"); // activated tab
        $(this).parents('.section-about-us').attr('tab-id', target).css('background-image', 'url(' + bgImage + ')');
        $(this).parents('.agency-page').attr('tab-id', target).css('background-image', 'url(' + bgImage + ')');
        $(this).parents('.agency-page').find('h2').html(titleImage);
        $(".grid-list, .double-list, .vt-feature, .vtChoose-block, .grid-service-list").slick("unslick");
        $('.grid-list').slick({
            dots: false,
            infinite: false,
            speed: 300,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                }
            ]
        });
        $('.double-list').slick({
            dots: false,
            infinite: false,
            speed: 300,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.vt-feature').slick({
            dots: false,
            infinite: false,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-back-arrow'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-right-arrow'></i></button>",
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.vtChoose-block').slick({
            dots: false,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.grid-service-list').slick({
            dots: false,
            infinite: false,
            speed: 0,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.grid-service-list',
            responsive: [
                {
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    var resetSlick = function (action) {
        $('#accordionExample').on(action, function () {
            $(".vtChoose-block").slick("unslick");
            $('.vtChoose-block').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-arrow_prev'></i></button>",
                nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-arrow_next'></i></button>",
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1224,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1080,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    };

    resetSlick('show.bs.collapse');

    $('.dropdown.dropdown-discount, .dropdown.dropdown-hover').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $('.toast__close').click(function (e) {
        e.preventDefault();
        var parent = $(this).parent('.toast');
        parent.fadeOut("slow", function () {
            $(this).remove();
        });
    });

    if ($('.clearable-input').length) {
        $('.clearable-input').each(function () {
            var input = $(this).find('input');
            input.on('keyup', function () {
                var closeIcon = $(this).siblings('.icon-close-icn');
                if (input.val()) {
                    closeIcon.show();
                } else {
                    closeIcon.hide();
                }
                closeIcon.on('click', function (e) {
                    input.val('');
                    closeIcon.hide();
                });
            });
        });
    }

    if ($('.password-group').length) {
        $('.password-group').each(function () {
            var input = $(this).find('input');
            var eyeIcon = $(this).find('.icon-eye-close');
            eyeIcon.on('click', function () {
                if ($(this).hasClass('icon-eye-close')) {
                    input.attr('type', 'text');
                    $(this).addClass('icon-eye-open').removeClass('icon-eye-close');
                } else {
                    input.attr('type', 'password');
                    $(this).removeClass('icon-eye-open').addClass('icon-eye-close');
                }
            });
        });
    }

    var c, currentScrollTop = 0, navbar = $('.top-nav');
    var elementPosition = $('.pint-tab-list-service').offset();

    $('.edit-button').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parents('.manager-user').find('.action-form').toggleClass('d-none');
    });

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("fixed scrollUp");
            $('.inner-wrapper-sticky').addClass("scrollUp");
            
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("fixed scrollUp");
            $('.inner-wrapper-sticky').removeClass("scrollUp");
        }
        if ($('.inner-wrapper-sticky').css('position') == 'relative' && $('.order-info').hasClass('is-affixed') == true) {
            $('.inner-wrapper-sticky').css("bottom", b + "px");
        }
        c = currentScrollTop;
    });
    $(window).resize(function () {
        serviceEqualHeight();
    });
});

//# sourceMappingURL=main.js.map
