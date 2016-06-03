$(document).ready(function(){

	// tooltips init
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});


	// mobile menu toggle
	$('[data-toggle="mobile-menu"]').click(function() {
		$('.menu-container').slideToggle();
	});

	// search form toggle
	$(window).resize(function() {
		if ($(this).width() < 769) {
			$('.search input').show();
		}
	});

	$('[data-toggle="search-box"]').click(function() {
		if ($(window).width() > 768)
			$('.search input').fadeToggle(50);
	});

	// simple accordion
	$(function() {
	
		var allPanels = $('.c-accordion__inner').hide();

		$('.c-accordion__expand').click(function() {
			allPanels.slideUp();
			$(this).siblings().slideDown();
			return false;
		});

	});
});