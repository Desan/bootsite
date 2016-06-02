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
	$('[data-toggle="search-box"]').click(function() {
		$('.search input').fadeToggle(50);
	});

	// accordion
});