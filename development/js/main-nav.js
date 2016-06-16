/*
	Обработчик основной навигации
*/
$(document).ready(function() {

	$(document).on('click', function (el) {
		// функция сбрасывает меню до дефолтного состояния
		function resetMainNav() {
			$('.main-nav-level-1__header').removeClass('main-nav-level-1__header--active');
			$('.main-nav-level-1__list').removeClass('main-nav-level-1__list--active');
			$('.main-nav-level-2__header').removeClass('main-nav-level-2__header--active');
			$('.main-nav-level-2__list').removeClass('main-nav-level-2__list--active');
		}


		var wanted = el.target,
			$wanted = $(wanted);


		if($wanted.hasClass('top-sandwich__button')) {

			// закрываем меню
			if($wanted.hasClass('top-sandwich__button--active')) { 
				$('.section').removeClass('section--offset-left');

				$wanted.removeClass('top-sandwich__button--active');
				$('.header-bottom').removeClass('header-bottom--active');
				$('.header-bottom__inner').removeClass('header-bottom__inner--active');

				resetMainNav();
			}

			// открываем меню
			else { 
				$('.section').addClass('section--offset-left');
				$('.header-bottom').removeClass('section--offset-left');

				$wanted.addClass('top-sandwich__button--active');
				$('.header-bottom').addClass('header-bottom--active');
				$('.header-bottom__inner').addClass('header-bottom__inner--active');
			}
		}

		// закрытие панели(которая слева) 
		// по нажатию по пустой области(эскейпер)
		if($wanted.hasClass('header-bottom')) {
			$wanted.removeClass('header-bottom--active');
			$('.header-bottom__inner').removeClass('header-bottom__inner--active');
			$('.section').removeClass('section--offset-left');
			$('.top-sandwich__button').removeClass('top-sandwich__button--active');

			resetMainNav();
		}






		// обработка кликов по табам для "выпадайки"
		// выриант когда выпадайка ведёт себя как аккордеон

		// уровень вложенности 1
		if($wanted.hasClass('main-nav-level-1__header')) {
			if($(wanted).hasClass('main-nav-level-1__header--active')) { // закрываем открытое
				$('.main-nav-level-1__header').removeClass('main-nav-level-1__header--active');
				$('.main-nav-level-1__list').removeClass('main-nav-level-1__list--active');
			}
			else { // открываем нажатое
				resetMainNav();

				$('.main-nav-level-1__header').removeClass('main-nav-level-1__header--active');
				$('.main-nav-level-1__list').removeClass('main-nav-level-1__list--active');
				$(wanted).addClass('main-nav-level-1__header--active');
				$(wanted).next('.main-nav-level-1__list').addClass('main-nav-level-1__list--active');
			}
		}

		// уровень вложенности 1
		if($wanted.hasClass('main-nav-level-2__header')) {
			if($(wanted).hasClass('main-nav-level-2__header--active')) { // закрываем открытое
				$('.main-nav-level-2__header').removeClass('main-nav-level-2__header--active');
				$('.main-nav-level-2__list').removeClass('main-nav-level-2__list--active');
			}
			else { // открываем нажатое
				$('.main-nav-level-2__header').removeClass('main-nav-level-2__header--active');
				$('.main-nav-level-2__list').removeClass('main-nav-level-2__list--active');
				$(wanted).addClass('main-nav-level-2__header--active');
				$(wanted).next('.main-nav-level-2__list').addClass('main-nav-level-2__list--active');
			}
		}
	});
});