$(document).ready(function() {
	$( ".datepicker" ).datepicker();
	$(".owl-carousel").owlCarousel({
		responsiveClass:true,
		rows: true,
		rowsCount: 2,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:false
	        }
	    }
	});

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
      	}
    });
    $(window).resize(function() {
	  var ww = $(window).width();
	  if (ww>1000) swiper.params.slidesPerView = 3;
	  if (ww>468 && ww<=1000) swiper.params.slidesPerView = 2;
	  if (ww<=468) swiper.params.slidesPerView = 1;
	  swiper.update();
	})
	$(window).trigger('resize');
});