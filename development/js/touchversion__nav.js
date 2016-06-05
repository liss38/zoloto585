// обработчик хэдер навигации для тач-версии сайта
/*$(document).ready(function() {
	var navModeLikeToster = true;

	$(document).on('click', function (el) {
		var wanted = el.target,
			$wanted = $(wanted);

		if($wanted.hasClass('top-sandwich')) { // закрываем меню
			if($wanted.hasClass('top-sandwich--active')) {
				if(navModeLikeToster) $('.section').removeClass('section--left_offset_for_nav');

				$wanted.removeClass('top-sandwich--active');
				$('.top-nav').removeClass('top-nav--active');
			}
			else { // открываем меню
				if(navModeLikeToster) $('.section').addClass('section--left_offset_for_nav');

				$wanted.addClass('top-sandwich--active');
				$('.top-nav').addClass('top-nav--active');
			}
		}

		if($wanted.hasClass('top-nav__button')) {
			if($(wanted).hasClass('top-nav__button--active')) { // закрываем открытое
				$(wanted).removeClass('top-nav__button--active');
				$(wanted).next('.top-nav__list').removeClass('top-nav__list--active');
			}
			else { // открываем нажатое
				$(wanted).addClass('top-nav__button--active');
				$(wanted).next('.top-nav__list').addClass('top-nav__list--active');
			}
		}
	});
});*/ /* старая версия */


/* Новая версия */
$(document).ready(function() {

	$(document).on('click', function (el) {
		var wanted = el.target,
			$wanted = $(wanted);

	/*
		-1-
		Манипуляция с панелью, 
		которая выезжает с левой 
		части экрана
	*/
		// открытие/закрытие по клику
		// на "сандвич"(кнопка, которая
		// графически предсталена в виде
		if($wanted.hasClass('top-sandwich')) {

			// закрываем меню
			if($wanted.hasClass('top-sandwich--active')) { 
				$('.section').removeClass('section--offset_for_left-ear');

				$wanted.removeClass('top-sandwich--active');
				$('.left-ear').removeClass('left-ear--active');
				$('.left-ear__inner').removeClass('left-ear__inner--active');
			}

			// открываем меню
			else { 
				$('.section').addClass('section--offset_for_left-ear');

				$wanted.addClass('top-sandwich--active');
				$('.left-ear').addClass('left-ear--active');
				$('.left-ear__inner').addClass('left-ear__inner--active');
			}
		}

		// закрытие панели(которая слева) 
		// по нажатию по пустой области(эскейпер)
		if($wanted.hasClass('left-ear')) {
			$wanted.removeClass('left-ear--active');
			$('.left-ear__inner').removeClass('left-ear__inner--active');
			$('.section').removeClass('section--offset_for_left-ear');
			$('.top-sandwich').removeClass('top-sandwich--active');
		}

		if($wanted.hasClass('touch-nav__button')) {
			if($(wanted).hasClass('touch-nav__button--active')) { // закрываем открытое
				$(wanted).removeClass('touch-nav__button--active');
				$(wanted).next('.touch-nav__list').removeClass('touch-nav__list--active');
			}
			else { // открываем нажатое
				$(wanted).addClass('touch-nav__button--active');
				$(wanted).next('.touch-nav__list').addClass('touch-nav__list--active');
			}
		}
	});
});