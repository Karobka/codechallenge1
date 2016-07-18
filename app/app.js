"use strict";

$(document).ready(function(){
	var navbarposition = $(".navbar").offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > navbarposition) {
			$(".navbar").css({
				position: 'fixed',
				top: '0px'
			});
		}else {
			$(".navbar").css({
				position: 'static',
				top: '0px'
			});
		}
	});
});