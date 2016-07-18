"use strict";

$(document).ready(function(){
	var headerposition = $(".headerbar").offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > headerposition) {
			$(".headerbar").css({
				position: 'fixed',
				top: '0px'
			});
		}else {
			$(".headerbar").css({
				position: 'static',
				top: '0px'
			});
		}
	});
});