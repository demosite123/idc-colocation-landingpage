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
          {targets: visibleCols, visible: true},
          {targets: '_all', visible: false},
          {"width": "44px", "targets": 8}
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
  } else {
    $('.checkout-card-content').addClass('d-none');
    $('.checkout-bank-content').removeClass('d-none');
  }

  $('.method-selector-card').change(function () {
    if ($(this).is(":checked")) {
      $('.checkout-card-content').removeClass('d-none');
      $('.checkout-bank-content').addClass('d-none');
    } else {
      $('.checkout-card-content').addClass('d-none');
      $('.checkout-bank-content').removeClass('d-none');
    }
  });

  if ($('.method-selector-bank').is(":checked")) {
    $('.checkout-bank-content').removeClass('d-none');
    $('.checkout-card-content').addClass('d-none');
  } else {
    $('.checkout-bank-content').addClass('d-none');
    $('.checkout-card-content').removeClass('d-none');
  }

  $('.method-selector-bank').change(function () {
    if ($(this).is(":checked")) {
      $('.checkout-bank-content').removeClass('d-none');
      $('.checkout-card-content').addClass('d-none');
    } else {
      $('.checkout-bank-content').addClass('d-none');
      $('.checkout-card-content').removeClass('d-none');
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

  $('.certificate-wrapper').mouseover(function() {
    $('.certificate-wrapper').slick('slickPlay')
  });
  $('.certificate-wrapper').mouseout(function() {
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

  $('.certificate-brand-wrapper').mouseover(function() {
    $('.certificate-brand-wrapper').slick('slickPlay')
  });
  $('.certificate-brand-wrapper').mouseout(function() {
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

  $('.service-group').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='vt-icon icon-back-arrow'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='vt-icon icon-right-arrow'></i></button>",
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
    c = currentScrollTop;
  });
  $(window).resize(function () {
    serviceEqualHeight();
  });
});
