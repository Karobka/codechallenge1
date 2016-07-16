"use strict";

$(document).ready(function(){
	var headerposition = $(".theheader").offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > headerposition) {
			$(".theheader").css({
				position: 'fixed',
				top: '0px'
			});
		}else {
			$(".theheader").css({
				position: 'static',
				top: '0px'
			});
		}
	});
});