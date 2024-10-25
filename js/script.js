// Owlcarousel
$(document).ready(function(){
  $("#idc-related-service-section .owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
});
});


