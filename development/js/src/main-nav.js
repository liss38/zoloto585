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

	// --------------------------
	// вспомогательные переменные
	// --------------------------
	var $altMainNavItems = $('.alt-main-nav__item'),
		$naviInnerListWrapper = $('.navi-inner-list-wrapper');



	// -----------------------
	// вспомогательные функции
	// -----------------------

	// закрывает touchnavi и/или сбрасывает настройки активности навгиции, 
	// которые доступны только для touch-устройств
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

	// 
	// function openTouchNavi() {}

	// сбрасывает/удаляет элементы присущие навигации только для desktop-устройств
	function resetDesktopNavi() {}

	// фон тянущийся на всю ширину для каждой вкладки
	function setDesktopNaviOuterBackground(innerListId) {
		var bg = $('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').attr('data-outer-background-image') === 'none' ? 'none' : 'url(' + $('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').attr('data-outer-background-image') + ')';
		if(innerListId != 0) {
			$('.navi-inner-list-wrapper').addClass('navi-inner-list-wrapper--active');
			$('.navi-inner-list-wrapper').css({'background-image' : bg});
		}
		// console.log(bg);
	}
	// убирает фон тянущийся на всю ширину
	function resetDesktopNaviOuterBackground(innerListId) {
		$('.navi-inner-list-wrapper').removeClass('navi-inner-list-wrapper--active');
	}

	function setDesktopNaviInnerListWrapper(innerListId) {
		var bg = $('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').attr('data-outer-background-image') === 'none' ? 'none' : 'url(' + $('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').attr('data-outer-background-image') + ')';
		if(innerListId != 0) {
			$naviInnerListWrapper
				.addClass('navi-inner-list-wrapper--active')
				.css({'background-image' : bg})
				.attr('data-inner-list', innerListId);
		}
		
	}
	function resetDesktopNaviInnerListWrapper() {
		$('.navi-inner-list-wrapper').removeClass('navi-inner-list-wrapper--active');
	}




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

		// уровень вложенности 2
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
		
		$headerBottom = $('.header-bottom');

	// #ref
	function showInnerListForDesktop(el) {
		var innerListId = $(this).attr('data-inner-list'),
			bg = $('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').attr('data-outer-background-image') === 'none' ? 'none' : 'url(' + $('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').attr('data-outer-background-image') + ')';

		$('.alt-main-nav__item').removeClass('alt-main-nav__item--active');
		if(innerListId != 0) {
			$('.main-nav').addClass('main-nav--hover');
			$('.main-nav__item').removeClass('main-nav__item--active');
			$('.main-nav__item[data-inner-list = ' + innerListId + ']').addClass('main-nav__item--active');
			$('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').addClass('alt-main-nav__item--active');
			$('.navi-inner-list-wrapper').attr('data-inner-list', innerListId);
			$('.navi-inner-list-wrapper[data-inner-list = ' + innerListId + ']')
				.addClass('navi-inner-list-wrapper--active')
				.css({'background-image' : bg});
			$('.header-bottom').addClass('header-bottom--hover');
		}
	}

	// (1) hover
	// рассматривается hover когда
	// указатель мыши находится над одной из
	// кнопок "КАТАЛОГ", "КОЛЬЦА", "СЕРbГИ", ..., для варианта в десктоп-версии
	// и открывает соответствующее кнопке внутренне подменю;
	$('.alt-main-nav__item').hover(showInnerListForDesktop, function (el) {
		var innerListId = $(this).attr('data-inner-list');

		$mainNav.removeClass('main-nav--hover');
		$headerBottom.removeClass('header-bottom--hover');
		$altMainNavItems.removeClass('alt-main-nav__item--active');


		// test
		resetDesktopNaviOuterBackground(innerListId);
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
	$('.main-nav__item').hover(showInnerListForDesktop, function (el) {
		var innerListId = $(this).attr('data-inner-list');

		$('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').removeClass('alt-main-nav__item--active');
		resetDesktopNaviOuterBackground(innerListId);
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


	

	
	// #ref
	function resetNaviInnerList(el) {
		var innerListId = $(this).attr('data-inner-list');

		$mainNav.removeClass('main-nav--hover');
		$mainNavItems.removeClass('main-nav__item--active');
		$('.main-nav__item[data-inner-list = ' + innerListId + ']').removeClass('main-nav__item--active');
		$('.alt-main-nav__item[data-inner-list = ' + innerListId + ']').removeClass('alt-main-nav__item--active');
		$headerBottom.removeClass('header-bottom--hover');
		resetDesktopNaviInnerListWrapper(innerListId);
		console.log(innerListId);
	}

	// (2) hover
	// (3) hover
	// (4) hover
	// для naviInnerListWrapper
	$naviInnerListWrapper.hover(showInnerListForDesktop, resetNaviInnerList);



	// ---------
	// ADAPTIZER
	// ---------
	$(window).on('resize', function () {
		if(parseInt(window.innerWidth) > 1024) {
			resetTouchNavi();
		}
	});
});