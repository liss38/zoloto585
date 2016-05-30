// обработчик хэдер навигации для тач-версии сайта
$(document).ready(function() {
	$(document).on('click', function (el) {
		var wanted = el.target,
			$wanted = $(wanted);

		if($wanted.hasClass('top-sandwich')) { // закрываем меню
			if($wanted.hasClass('top-sandwich--active')) {
				$wanted.removeClass('top-sandwich--active');
				$('.top-nav').removeClass('top-nav--active');
			}
			else { // открываем меню
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
});