$(document).ready(function() {
	$( ".datepicker" ).datepicker();
	$(".owl-carousel").owlCarousel({
		responsiveClass:true,
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
});