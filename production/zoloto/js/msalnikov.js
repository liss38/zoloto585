// ==============
// == forms.js ==
// ==============
// 
// 
// что делает: стилизует состояния для полей форм,
// в зависимости от действия/манипуляции с полем формы
;$(function () {
	// старый вариант текстовго поля
	$('.form').on('focusin', function (event) {
		var $_this = $(event.target);
		if($_this.hasClass('form__field-input')) $_this.parent().addClass('focus');
	});
	$('.form').on('focusout', function (event) {
		var $_this = $(event.target);
		if($_this.hasClass('form__field-input')) $_this.parent().removeClass('focus');
	});


	// кастомизированное текстовое поле input type="text" (form-textline.less)
	$('.form-textline').on('focusin', function (event) {
		$(this).addClass('form-textline--active');
	});
	$('.form-textline').on('focusout', function (event) {
		$(this).removeClass('form-textline--active');
	});
});
// 
// 
// 
// 
// 
// =======================
// = ПОПАП ВЫБОРА ГОРОДА =
// =======================
;$(function () {
	function topGeoModal(a) {
		if(a) {
			$('.top-geo-modal').addClass('top-geo-modal--active');
			$('.top-geo-modal__inner').addClass('top-geo-modal__inner--active');
		}
		else if(!a) {
			$('.top-geo-modal').removeClass('top-geo-modal--active');
			$('.top-geo-modal__inner').removeClass('top-geo-modal__inner--active');
		}
	}

	$('#top-geo-wrap').on('click', '.top-geo__button', function(){
		topGeoModal(true);
	});
	
	$('#top-geo-wrap').on('click', '.top-geo-modal__close', function(){
		topGeoModal(false);
	});

	$('#top-geo-wrap').on('click', '.top-geo-form__button', function(event){
		event.preventDefault();

		var selectKey = $('.top-geo-form__option').find('.form__field-select').val(), // ключ либо идентификатор города
			selectValue = $('.top-geo-form__option').find('.form__field-select').find('option:selected').text(); // текстовое значание - название города

		//
		// код взаимодейтвия с сервером для установки выбранного города
		//

		$.cookie('city', selectKey, { expires: 365, path: '/' });
		set_city();
		$('.top-geo__button>span').text(selectValue); // устанавлмвает в рзамтке в шапке название выбранного города
		topGeoModal(false); // закрывает окно
	});	

	$(document).on('click', function (event) {
		if($(event.target).hasClass('top-geo-modal')) topGeoModal(false);
	});
	
});
// 
// 
// 
// ================================
// = ОБРАБОТЧИК НАВИГАЦИИ В ШАПКЕ =
// ================================
;$(document).ready(function() {

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

				defaultMainNav();
			}
		}

		// закрытие по клику на надпись в кнопке
		if($wanted.hasClass('top-sandwich__button-text')) {
			$('.section').removeClass('section--offset-left');

			$('.top-sandwich__button').removeClass('top-sandwich__button--active');
			$('.header-bottom').removeClass('header-bottom--active');
			$('.header-bottom__inner').removeClass('header-bottom__inner--active');

			resetMainNav();
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
// 
// 
// 
// ====================
// = ПОДБОР УКРАШЕНИЯ =
// ====================
;$(function () {
	var tab = 'index-filter__header',
		$tab = $('.' + tab),
		active = tab + '--active',

		filter = 'filter-mini',
		$filter = $('.' + filter),
		opened = filter + '--opened';

	$tab.on('click', function () {
		if($filter.hasClass(opened)) {
			$filter.removeClass(opened);
			$tab.removeClass(active);
		}
		else {
			$filter.addClass(opened);
			$tab.addClass(active);
		}
	});
});
// 
// 
// 
// =======================
// = ФИЛЬТР ДЛЯ КАТАЛОГА =
// =======================
;$(function() { // фильтр для каталога
	$('.js-filter-group-scroll-pane').jScrollPane({
		autoReinitialise : true,
		verticalDragMinHeight: 9,
		verticalDragMaxHeight: 9,
		horizontalDragMinWidth: 9,
		horizontalDragMaxWidth: 9
	});

	// открытие закрытие фильтра
	$('#catalog-filter-change-button').on('click', function (event) {
		event.preventDefault();
		$('.filter').hasClass('filter--closed') ? $('.filter').removeClass('filter--closed') : $('.filter').addClass('filter--closed');
	});

	// кнопка reset фильтра
	$('#catalog-filter-reset-button').on('click', function (event) {
		
	});

	// кнопка submit фильтра
	$('#catalog-filter-submit-button').on('click', function (event) {
		event.preventDefault();

		// 
		// отправка значений с формы фильтра на сервер
		// 

		$('.filter').addClass('filter--closed');
	});

	// кнопка с выбранным тегом поиска
	$('.filter-tags__tab').on('click', function (event) {
		$(this).remove();
	});
});
// 
// 
// 