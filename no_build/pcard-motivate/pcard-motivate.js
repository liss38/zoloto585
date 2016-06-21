;$(function () {
	// ====================
	// == pcard-motivate.js ==
	// ====================

	function popupAnimate(swither) {
		if(swither) {
			$('.pcard-motivate').animate({opacity: 'show'}, 600);
			$('.pcard-motivate__inner').animate({opacity: 'show'}, 750);
		}
		else {
			$('.pcard-motivate').animate({opacity: 'hide'}, 750);
			$('.pcard-motivate__inner').animate({opacity: 'hide'}, 500);
		}
	}

	// всплытие попапа через 2 секунды
	setTimeout(function () {
			popupAnimate(1);
		},
		2000
	);

	$('#pcard-motivate-button').on('click', function () {
		popupAnimate(0);
	});

	/*
	// по нажатию на затемнённый слой попап закрывается
	$(document).on('click', function (el) {
		var $el = $(el.target);
		if($el.hasClass('index-popup__overlay')) {
			popupAnimate(0);
		}
	});*/
});