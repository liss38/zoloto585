// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// ================================
// = ОБРАБОТЧИК НАВИГАЦИИ В ШАПКЕ =
// ================================
;$(document).ready(function() {

	// -------------------
	// @TOUCH NAVI HANDLER
	// -------------------
	// обработка поведения навигации
	// когда ширина экрана <= 1024px
	// т.е. для @touch
	$(document).on('click', function (el) {
		// функция сбрасывает меню до дефолтного состояния(все вкладки становятся закрытыми)
		function resetMainNav() {
			$('.main-nav-level-1__header').removeClass('main-nav-level-1__header--active');
			$('.main-nav-level-1__list').removeClass('main-nav-level-1__list--active');
			$('.main-nav-level-2__header').removeClass('main-nav-level-2__header--active');
			$('.main-nav-level-2__list').removeClass('main-nav-level-2__list--active');
		}

		// настройка для вкладок открытых по умолчанию для первого открытия меню
		function defaultMainNav() {
			$('.main-nav-level-1__header').first().addClass('main-nav-level-1__header--active');
			$('.main-nav-level-1__list').first().addClass('main-nav-level-1__list--active');
			$('.main-nav-level-2__header').first().addClass('main-nav-level-2__header--active');
			$('.main-nav-level-2__list').first().addClass('main-nav-level-2__list--active');
		}

		function resetTouchNavi() {
			$('.section').removeClass('section--offset-left');

			$('.top-sandwich__button').removeClass('top-sandwich__button--active');
			$('.header-bottom').removeClass('header-bottom--active');
			$('.header-bottom__inner').removeClass('header-bottom__inner--active');

			// убирает заморозку вертикального скролла для страницы
			$('body').removeClass('h-canvas-freeze-for-touch-navi');

			// сбрасывает меню до дефолтного состояния(все вкладки становятся закрытыми)
			$('.main-nav-level-1__header').removeClass('main-nav-level-1__header--active');
			$('.main-nav-level-1__list').removeClass('main-nav-level-1__list--active');
			$('.main-nav-level-2__header').removeClass('main-nav-level-2__header--active');
			$('.main-nav-level-2__list').removeClass('main-nav-level-2__list--active');
		}

		function openTouchNavi() {

		}


		var wanted = el.target,
			$wanted = $(wanted);


		// клик по "сэндвичу"
		if($wanted.hasClass('top-sandwich__button')) {

			// закрывает меню по клику на кнопку с тремя полосками "Сандвич"
			if($wanted.hasClass('top-sandwich__button--active')) resetTouchNavi();

			// открываем меню
			else { 
				$('.section').addClass('section--offset-left');
				$('.header-bottom').removeClass('section--offset-left');

				$wanted.addClass('top-sandwich__button--active');
				$('.header-bottom').addClass('header-bottom--active');
				$('.header-bottom__inner').addClass('header-bottom__inner--active');

				// добавляет заморозку вертикального скролла для страницы
				$('body').addClass('h-canvas-freeze-for-touch-navi');

				defaultMainNav();
			}
		}

		// закрывает меню по клику по надписи "Скрыть каталог"
		if($wanted.hasClass('top-sandwich__button-text')) resetTouchNavi();

		// закрывает меню по клику по пустой белой области справа от меню(эскейпер)
		if($wanted.hasClass('header-bottom')) resetTouchNavi();




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



	// ---------------------
	// @DESKTOP NAVI HANDLER
	// ---------------------
	// обработка поведения навигации, 
	// для разрешения экрана > 1024px по ширине
	// т.е. для @desktop
	var $mainNav = $('.main-nav'),
		$mainNavItems = $('.main-nav__item'),
		$altMainNav = $('.alt-main-nav'),
		$altMainNavItems = $('.alt-main-nav__item'),
		$headerBottom = $('.header-bottom');



	// (1) hover
	// рассматривается hover когда
	// указатель мыши находится над одной из
	// кнопок "КАТАЛОГ", "КОЛЬЦА", "СЕРьГИ", ..., для варианта в десктоп-версии
	// и открывает соответствующее кнопке внутренне подменю;
	$('.alt-main-nav__item').hover(function (el) {
		var innerListId = $(this).attr('data-inner-list');

		$altMainNavItems.removeClass('alt-main-nav__item--active');

		if(innerListId != 0) {
			$mainNav.addClass('main-nav--hover');
			$mainNavItems.removeClass('main-nav__item--active');
			$('.main-nav__item[data-inner-list = ' + innerListId + ']').addClass('main-nav__item--active');
			$('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').addClass('alt-main-nav__item--active');
			$headerBottom.addClass('header-bottom--hover');
		}
		
	}, function (el) {
		var innerListId = $(this).attr('data-inner-list');

		$mainNav.removeClass('main-nav--hover');
		$headerBottom.removeClass('header-bottom--hover');
		$altMainNavItems.removeClass('alt-main-nav__item--active');
	});


	// (2) hover
	// рассматривается hover когда
	// указатель мыши находится над одной из
	// выпадших вкладок
	// находит соответствующий "надпункт" из "alt-main-nav", который соответствует данной активной вкладке
	// и делает этот "надпункт" активным;
	// 
	// оставляет черный треуголник активности на кнопке
	// когда курсор ушёл с этой кнопке
	// на выпадающий блок
	$('.main-nav__item').hover(function (el) {
		var innerListId = $(this).attr('data-inner-list');

		$('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').addClass('alt-main-nav__item--active');

	}, function (el) {
		var innerListId = $(this).attr('data-inner-list');

		$('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').removeClass('alt-main-nav__item--active');
	});


	// (3) hover
	// рассматривается hover когда
	// указатель мыши находится или покидает
	// всю навигацию;
	// 
	// отображает/скрывает
	// заднюю подложку(которая тянется на весь экран по ширине) для выпадающего блока меню
	$('.main-nav').hover(function (el) {
		$headerBottom.addClass('header-bottom--hover');
		$mainNav.addClass('main-nav--hover');
	}, function (el) {
		$headerBottom.removeClass('header-bottom--hover');
		$mainNav.removeClass('main-nav--hover');
		$altMainNavItems.removeClass('alt-main-nav__item--active');
	});



	// ---------
	// ADAPTIZER
	// ---------
	$(window).on('resize', function () {
		if(parseInt(window.innerWidth) > 1024) {
			console.log('navi @desktop: reset touch-active');
			$('body').removeClass('h-canvas-freeze-for-touch-navi');
		}
		else console.log('navi @touch');
	});
});