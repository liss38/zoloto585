$(document).ready(function() {

	// ********
	// FOTORAMA
	// ********
	$('.fotorama').on('fotorama:ready', function (e, fotorama, extra) {
		$('.zoom').zoom();
	});
	$('.fotorama').on('fotorama:show', function (e, fotorama, extra) {
		$('.zoom').zoom();
	});




	// *******************************
	// "ИНТЕРФЕЙС БРОНИРОВАНИЯ ТОВАРА"
	// *******************************
	var $pcardItem = $('.pcard__title'),
		 pcardItem = $pcardItem.text(),
		$pcardSize = $('.pcard-store-fitting-select__menu_default'),
		 pcardSize = +$pcardSize.val(),
		pcardOrderSMSCode = +'777'; // код-заглушка для подтверждения смс

	/*
		ЭЛЕМЕНТЫ 
		ИНТЕРФЕЙСА 
		БРОНИРОВАНИЯ
	*/
	var $pcardVideo = $('.pcard-video'),
		$pcardStore = $('.pcard-store'),

		$pcardOrder = $('.pcard-order'),

		$pcardOrderStep = $('.pcard-order__step'),
		$pcardOrderStep_1 = $('.pcard-order__step-1'),
		$pcardOrderStep_2 = $('.pcard-order__step-2'),
		$pcardOrderStep_3 = $('.pcard-order__step-3'),
		$pcardOrderStep_4 = $('.pcard-order__step-4'),

		$pcardOrderStepTitle = $('.pcard-order-step__title'),
		$pcardOrderStepTitle_1 = $pcardOrderStep_1.find($pcardOrderStepTitle),
		$pcardOrderStepTitle_2 = $pcardOrderStep_2.find($pcardOrderStepTitle),
		$pcardOrderStepTitle_3 = $pcardOrderStep_3.find($pcardOrderStepTitle),
		$pcardOrderStepTitle_4 = $pcardOrderStep_4.find($pcardOrderStepTitle),

		$pcardOrderStepState = $('.pcard-order-step__state'),
		$pcardOrderStepState_1 = $pcardOrderStep_1.find($pcardOrderStepState),
		$pcardOrderStepState_2 = $pcardOrderStep_2.find($pcardOrderStepState),
		$pcardOrderStepState_3 = $pcardOrderStep_3.find($pcardOrderStepState),
		$pcardOrderStepState_4 = $pcardOrderStep_4.find($pcardOrderStepState),

		$pcardOrderStepTitle = $('.pcard-order-step__title'),
		$pcardOrderCloseButton = $('.pcard-order__close-but'),
		$pcardOrderReserveButton = $('.pcard-store__reserve-button'),
		$pcardOorderShops = $('.pcard-order-shops'),

		$pcardMapPopUp = $('.pcard-map-shop'),
		$pcardMapAddress = $('.pcard-map-shop__address'),
		$pcardMapTimeshift = $('.pcard-map-shop__time'),
		$pcardMapWhen = $('.pcard-map-shop__when_strike'),

		$pcardOrderPhoneForm = $('.pcard-order__user-phone'),
		$pcardOrderPhoneField = $pcardOrderPhoneForm.find('.pcard-order-form__field'),
		$pcardOrderPhoneButton = $pcardOrderPhoneForm.find('.pcard-order-form__button'),

		$pcardOrderFormMessage = $('.pcard-order-form__message'),

		$pcardOrderSmsForm = $('.pcard-order__sms-code'),
		$pcardOrderSmsField = $pcardOrderSmsForm.find('.pcard-order-form__field'),
		$pcardOrderSmsButton = $pcardOrderSmsForm.find('.pcard-order-form__button'),

		$pcardOrderReturnButton = $('.pcard-order__return'),

		$pcardOrderCity = $('.pcard-order-city'),
		$pcardOrderShops = $('.pcard-order-shops'),
		$pcardOrderShopsCount = $('.pcard-order-city__result-value');

		// магазины
	var shopsData = [
			{
				cityId: 1,
				city: 'Москва',
				cityLat: 55.75396,
				cityLon: 37.620393,
				shops: [
					{ id: 1, shopLat: 55.837737, shopLon: 37.576465, title: '585GOLD, ювелирный гипермаркет', address: 'Локомотивный проезд, 4, ТЦ \'Парус\' (ст. м. Петровско-Разумовская)', time: '10:00 - 22:00' },
					{ id: 2, shopLat: 55.630386, shopLon: 37.423043, address: 'Киевское шоссе, 23-й километр, 8с1', title: 'TRK \'RIO\'', time: '10:00 - 18:00' },
					{ id: 118, shopLat: 55.733969, shopLon: 37.620944, address: 'ул. Научный проезд, д.1', title: 'TRK \'VEGAS\'', time: '10:00 - 23:00' },
					{ id: 3, shopLat: 55.754422, shopLon: 37.621514, address: 'ул. Научный проезд, д.35', title: 'TRK \'SomeThing\'', time: '10:00 - 19:00' },
					{ id: 4, shopLat: 55.759822, shopLon: 37.664117, address: 'ул. Научный проезд, д.100', title: 'TRK \'SomeThing\'', time: '8:00 - 22:00' },
					{ id: 5, address: 'ул. Научный проезд, д.113', title: 'TRK \'SomeThing\'', time: '10:00 - 23:00' },
					{ id: 6, address: 'ул. Научный проезд, д.113', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 7, address: 'ул. Научный проезд, д.113', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 8, address: 'ул. Научный проезд, д.113', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 9, address: 'ул. Научный проезд, д.113', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 10, address: 'ул. Научный проезд, д.113', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 11, address: 'ул. Научный проезд, д.113', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
				]
			},
			{
				cityId: 2,
				city: 'Санкт-Петербург',
				cityLat: 59.939095,
				cityLon: 30.315868,
				shops: [
					{ id: 1, shopLat: 59.916408, shopLon: 30.315861, address: '1-ая Красноармейская ул., 1', title: 'Технологическая', time: '9:00 - 21:00' },
					{ id: 2, shopLat: 59.876848, shopLon: 30.443004, address: 'ул. Площадь восстания, д.13, ', title: 'Ломоносовская', time: '10:00 - 23:00' },
					{ id: 3, shopLat: 59.927156, shopLon: 30.360105, address: 'ул. Площадь восстания, д.15, ', title: 'TRK \'Галерея\'', time: '11:00 - 21:00' },
					{ id: 4, shopLat: 59.929534, shopLon: 30.433667, address: 'ул. Площадь восстания, д.17, ', title: 'TRK \'ОКей\'', time: '10:00 - 18:00' },
					{ id: 5, shopLat: 59.891066, shopLon: 30.477862, address: 'ул. Площадь восстания, д.19, ', title: 'TRK \'Кириши\'', time: '10:00 - 21:00' },
					{ id: 6, shopLat: 59.833446, shopLon: 30.511128, address: 'ул. Площадь восстания, д.18, ', title: 'TRK \'Диана\'', time: '10:00 - 21:00' },
					{ id: 7, shopLat: 59.877901, shopLon: 30.315831, address: 'ул. Площадь восстания, д.8, ', title: 'TRK \'Ковчег\'', time: '10:00 - 21:00' },
				]
			},
			{
				cityId: 3,
				city: 'Псков',
				cityLat: 57.819365,
				cityLon: 28.331786,
				shops: [
					{ id: 6, shopLat: 57.811592, shopLon: 28.358624, address: 'ул. Псковская, д.1, ', title: 'TRK \'PSKOV\'', time: '10:00 - 24:00' },
					{ id: 7, shopLat: 57.817067, shopLon: 28.314462, address: 'ул. Псковская, д.7, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 8, address: 'ул. Псковская, д.12, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 9, address: 'ул. Псковская, д.19, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 10, address: 'ул. Псковская, д.45, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 11, address: 'ул. Псковская, д.45, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 12, address: 'ул. Псковская, д.45, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
				]
			},
			{
				cityId: 4,
				city: 'Тверь',
				cityLat: 56.859611,
				cityLon: 35.911896,
				shops: [
					{ id: 115, shopLat: 56.825612, shopLon: 35.910882, address: 'ул. Проспект мира, д.8, ', title: 'TRK \'TVER\'', time: '10:00 - 21:00' },
					{ id: 1, address: 'ул. Проспект мира, д.19, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 2, address: 'ул. Проспект мира, д.24, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 3, address: 'ул. Проспект мира, д.32, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 9, address: 'ул. Проспект мира, д.25, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
				]
			},
			{
				cityId: 5,
				city: 'Кострома',
				cityLat: 57.767961,
				cityLon: 40.926858,
				shops: [
					{ id: 23, shopLat: 57.762562, shopLon: 40.927648, address: 'ул. Костромская, д.8, ', title: 'TRK \'KOSTROMA\'', time: '10:00 - 21:00' },
					{ id: 4, address: 'ул. Московская, д.19, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 78, address: 'ул. Псковская, д.24, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 2, address: 'ул. Проспект мира, д.32, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
					{ id: 17, address: 'ул. Проспект мира, д.25, ', title: 'TRK \'SomeThing\'', time: '10:00 - 21:00' },
				]
			}
		];


	// информация о сделанном заказе
	var orderInfo = { // контейнер для данных бронирования данного изделия
			item: 'Название изделия',
			size: 'Размер изделия',
			cityId: '',
			cityLat: '',
			cityLon: '',
			city: 'Город доставки',
			shopId: '',
			shop: 'Магазин',
			address: 'Адрес текущей торговой точки',
			timeshift: 'Часы работы магазина',
			when: 'Когда можно забрать',
			phone: 'Телефон заказчика',

			/**************/
			defaultData: {
				cityId: 2,
				cityLat: 59.939095,
				cityLon: 30.315868,
				city: 'Санкт-Петербург',
			},
			setDefault: function () {
				this.cityId = this.defaultData['cityId'];
				this.city = this.defaultData['city'];
				this.cityLat = this.defaultData['cityLat'];
				this.cityLon = this.defaultData['cityLon'];
			},
			/**************/
			
			refresh: function($selector) {
				var shopId    = $selector.attr('data-pcard-order-shop-id'),
					shop      = $selector.attr('data-pcard-order-shop-name'),
					address   = $selector.attr('data-pcard-order-shop-address'),
					timeshift = $selector.attr('data-pcard-order-shop-time'),
					cityId    = $selector.attr('data-pcard-order-city-id')
					city      = $selector.attr('data-pcard-order-city'),
					phone     = $selector.val();

				var is_ShopId    = shopId    !== undefined && shopId !== '',
					is_Shop      = shop      !== undefined && shop !== '',
					is_Address   = address   !== undefined && address !== '',
					is_TimeShift = timeshift !== undefined && timeshift !== '',
					is_CityId    = cityId    !== undefined && cityId !== '',
					is_City      = city      !== undefined && city !== '',
					is_Phone     = phone     !== undefined && phone !== '';

				is_ShopId    ? this.shopId    = +shopId : '';
				is_Shop      ? this.shop      = shop : '';
				is_Address   ? this.address   = address : '';
				is_TimeShift ? this.timeshift = timeshift : '';
				is_CityId    ? this.cityId    = cityId : '';
				is_City      ? this.city      = city : '';
			},
			reset: function (prop, resetValue) {
				// var resetValue = resetValue
				if(!prop || typeof prop === 'string') {
					for(var p in this) {
						if(!this.hasOwnProperty(p)) continue;
						this[p] = resetValue;
					}
				}
				else if(typeof prop === 'array') {
					for(var i = 0, l = prop.length; i < l; i++) {
						if(this.hasOwnProperty(prop[i])) this[prop[i]] = resetValue;
					}
				}
				else {
					// ничего не делать
				}
			},
			print: function () {
				var printText = '';
				
				for(var prop in this) {
					if(!this.hasOwnProperty(prop)) continue;
					printText += prop + ': ' + this[prop] + ';\n'
				}
				return printText;
			},
			printAsTable: function () {
				var printText = '';
				printText += '<table align="center" style="font-size: 16px;">'
				for(var prop in this) {
					if(!this.hasOwnProperty(prop) || typeof this[prop] === 'function' || typeof this[prop] === 'object') continue;
					printText += '<tr><td style="border-bottom: 1px solid #ccc; padding-right: 25px;"><b>' + prop + '</b></td><td style="border-bottom: 1px solid #ccc;">' + this[prop] + '</td></tr>'
				}
				printText += '</table>'
				return printText;
			},
			init: function (array) {},
			getGeoCoordsByCityId: function (cityId) {},
		};

	Object.defineProperties(orderInfo, {
		refresh: { enumerable: false, writable: false, configurable: false },
		reset: { enumerable: false, writable: false, configurable: false },
		print: { enumerable: false, writable: false, configurable: false }
	});


	// установки по умолчанию
	orderInfo.item = pcardItem; // записываем текущее название изделия в объект-контейнер интерфейса бронирования
	orderInfo.size = pcardSize; // записываем текущий размер изделия в объект-контейнер интерфейса бронирования
	orderInfo.cityId = 2; // делаем дефолтнам грод с id=2 (Санкт-Петербург)
	orderInfo.city = 'Санкт-Петербург';
	orderInfo.cityLat = 59.939095;
	orderInfo.cityLon = 30.315868;
	// orderInfo.init([pcardItem, pcardSize, cityId, city]);



	// интерфейс бронирования(контроллер)
	var orderInterface = {
			// $pcardOrder:
			currentStep: '',
			state: 'cancel',
			stateValues: ['init', 'cancel', 'getshop', 'setshop', 'smsstart', 'smssubmitphone', 'smsgetcode', 'smscheckcode', ],

			currentWidth: parseInt(window.innerWidth),
			setTopOffset: function (topOffset) {
				var topOffset = topOffset || (parseInt($('.pcard-store-fitting').offset().top) + parseInt($('.pcard-store-fitting').outerHeight()) - parseInt($('.header-top').outerHeight()));
				$('body').animate({'scrollTop': topOffset}, 'slow');
			},

			popUpOn: function () {
				if($('.pcard-popup__overlay').css('display') === 'none') $('.pcard-popup__overlay').css({'display' : 'block'}).prepend($('.pcard-order').detach());
			},
			popUpOff: function () {
				$('.pcard-popup__overlay').css({'display' : 'none'});
			},
			stepActivate: function ($selector) {
				return $selector.removeClass('pcard-order__step_hidden').removeClass('pcard-order__step_done').addClass('pcard-order__step_active');
			},
			stepHide: function ($selector) {
				return $selector.removeClass('pcard-order__step_active').removeClass('pcard-order__step_done').addClass('pcard-order__step_hidden');
			},
			stepComplete: function ($selector) {
				return $selector.removeClass('pcard-order__step_hidden').addClass('pcard-order__step_done');
			},

			// методы работы с интерфесом того шага, где карта
			buildCitiesList: function (cityId) {
				var htmlCode = '';
				htmlCode += '<select class="pcard-order-city__select">';
				
				for(var i = 0; i < shopsData.length; i++)
					htmlCode += '<option ' + (shopsData[i].cityId === +cityId ? 'selected' : '') + ' value="' + shopsData[i].cityId + '" data-pcard-order-city-id="' + shopsData[i].cityId + '" data-pcard-order-city-latitude="' + shopsData[i].cityLat + '" data-pcard-order-city-longitude="' + shopsData[i].cityLon + '" data-pcard-order-city="' + shopsData[i].city + '">' + shopsData[i].city + '</option>';
				htmlCode += '</select>';

				$('.pcard-order-city').append(htmlCode);
			},
			buildShopsList: function (cityId, shopId) {
				var htmlCode = '';

				// вариант отображения через select-меню, для меньших устройств
				htmlCode += '<select class="pcard-order-shops__select" data-pcard-order-city-id="' + cityId + '">';
				for(var i = 0, lc = shopsData.length; i < lc; i++) 
					if(shopsData[i].cityId === cityId) 
						for(var j = 0, ls = shopsData[i].shops.length; j < ls; j++) 
							if(shopsData[i].shops[j].shopLat !== undefined && shopsData[i].shops[j].shopLon !== undefined)
								htmlCode += '<option ' + (shopsData[i].shops[j].id === shopId ? ' selected' : '') + ' value="' + shopsData[i].shops[j].title + '" data-pcard-order-placemark-id="' + shopsData[i].shops[j].shopLat + '_' + shopsData[i].shops[j].shopLon + '" data-pcard-order-shop-id="' + shopsData[i].shops[j].id + '"" data-pcard-order-shop-address="' + shopsData[i].shops[j].address + '" data-pcard-order-shop-name="' + shopsData[i].shops[j].title + '" data-pcard-order-shop-time="' + shopsData[i].shops[j].time + '">' + shopsData[i].shops[j].address + '</option>'
				htmlCode += '</select>';

				// вариант отображения через ul-список, для больших устройств
				htmlCode += '<ul class="pcard-order-shops__list" data-pcard-order-city-id="' + cityId + '">';
				for(var i = 0, lc = shopsData.length; i < lc; i++) 
					if(shopsData[i].cityId === cityId) 
						for(var j = 0, ls = shopsData[i].shops.length; j < ls; j++) 
							if(shopsData[i].shops[j].shopLat !== undefined && shopsData[i].shops[j].shopLon !== undefined)
								htmlCode += '<li class="pcard-order-shops__item' + (shopsData[i].shops[j].id === shopId ? ' active' : '') + '" data-pcard-order-placemark-id="' + shopsData[i].shops[j].shopLat + '_' + shopsData[i].shops[j].shopLon + '" data-pcard-order-shop-id="' + shopsData[i].shops[j].id + '"" data-pcard-order-shop-address="' + shopsData[i].shops[j].address + '" data-pcard-order-shop-name="' + shopsData[i].shops[j].title + '" data-pcard-order-shop-time="' + shopsData[i].shops[j].time + '">' + shopsData[i].shops[j].title + '<br>' + shopsData[i].shops[j].address + '</li>'
				htmlCode += '</ul>';

				$('.pcard-order-shops').append(htmlCode);
			},
			selectCity: function (cityId) {
				$('.pcard-order-shops__list').detach();
				$('.pcard-order-shops__select').detach();
				$('.pcard-order-city__select').detach();
				this.buildCitiesList(cityId);
				this.buildShopsList(cityId);
			},
			shopCounter: function (cityId) {
				var count = 0;
				for(var i = 0, l = shopsData.length; i < l; i++) 
					if(shopsData[i].cityId === cityId) 
						for(var j = 0, ls = shopsData[i].shops.length; j < ls; j++) 
							if(shopsData[i].shops[j].shopLat !== undefined && shopsData[i].shops[j].shopLon !== undefined) 
								count++;
				return count;
			},
			setShopCount: function (cityId) {
				$('.pcard-order-city__result-value').text(' ' + this.shopCounter(cityId) + ' магазинов');
			},

			selectShop: function (cityId, shopId) {
				$('.pcard-order-shops__list').find('.pcard-order-shops__item').removeClass('active');
				$('.pcard-order-shops__list').find('.pcard-order-shops__item[data-pcard-order-shop-id=' + shopId + ']').addClass('active');
				$('.pcard-order-shops__select').find('option[data-pcard-order-shop-id=' + shopId + ']').attr('selected', 'selected');
			},
			setShopModal: function (data, display) {
				var display = display || 'block';
				$('.pcard-map-shop').css({'display' : display});
				$('.pcard-map-shop__address').text(orderInfo.address);
				$('.pcard-map-shop__time').text(orderInfo.timeshift);
			},

			setSMSAlert: function(showhide) {
				$('.pcard-order-form__message')
					.empty()
					.prepend('<div class="pcard-order-form-message__close-but"></div><p>На номер <b>' + orderInfo.phone + '</b> отправлен SMS код!</p><p>Введите полученный номер в поле ниже для подтверждения Вашего заказа. </p>');
					
				if(showhide === 'show') $('.pcard-order-form__message').css({'display' : 'block'});
				else if(showhide === 'hide') $('.pcard-order-form__message').css({'display' : 'none'});
			},


			init: function (array) {
				$('body').prepend('<div class="pcard-popup__overlay"></div>');
				$('.pcard-popup__overlay').css({'display' : 'none'});

				// $('.pcard-map-shop').css({'display' : 'none'});
				this.setShopModal([], 'none');

				/*
					array[0] is cityId;
				*/
				this.buildCitiesList(array[0]);
				this.buildShopsList(array[0]);
			},

			refresh: function (array) {},

			reset: function (dump) {
				this.state = 'cancel';
				orderInterface.popUpOff();
				$('.pcard-order').hide();
				orderInterface.state = 'cancel';

				this.stepHide($('.pcard-order__step'));

				if(typeof dump === 'object' && dump !== null) {
					if(typeof dump['cityId'] === 'number' && dump['cityId'] > 0) this.selectCity(dump['cityId']);
				}
			},
		};

	// создаём "теневой" объект интерфейса с начальными данными
	orderInterface.init([
		orderInfo.cityId,
	]);




	// Начальные установки
	$pcardOrderStep.addClass('pcard-order__step_hidden');

	// манипуляция размерами кольца для бронирования
	$pcardSize.on('change', function () {
		orderInfo.size = +$(this).val(); // записываем выбранный размер изделия в объект-контейнер интерфейса бронирования
	});



	function activatePcardOrderStep($selector) { return $selector.removeClass('pcard-order__step_hidden').removeClass('pcard-order__step_done').addClass('pcard-order__step_active'); }
	// function resetPcardOrderStep($selector) { return $selector; }
	function hidePcardOrderStep($selector) { return $selector.removeClass('pcard-order__step_active').removeClass('pcard-order__step_done').addClass('pcard-order__step_hidden'); }
	function completePcardOrderStep($selector) { $selector.removeClass('pcard-order__step_hidden').addClass('pcard-order__step_done'); }
	function hide() { return this.css({'display' : 'none'}); }
	function show() { return this.css({'display' : 'block'}); }

	function isHide($selector) { return $selector.css('display') === 'none' ? true : false; }
	function isShow($selector) { return $selector.css('display') === 'block' ? true : false; }






	// ###yamaps
	var myMap;
	ymaps.ready(pcardMapInit); // Ожидание загрузки API с сервера Яндекса
	function pcardMapInit() {
		var geolocation = ymaps.geolocation,
			coords = [orderInfo.cityLat, orderInfo.cityLon];

		myMap = new ymaps.Map('pcard-map-container', {
			center: coords, //[59.939095, 30.315868], //coords, // Координаты центра карты
			zoom: 10 // Zoom
		});

		myMap.controls.add(new ymaps.control.ZoomControl());
		myMap.behaviors.enable('scrollZoom'); // возможность скпроллировать масштаб карты(колесо мишы)


		// *************************************
		// переключение между картами городов
		// *************************************
		$(document).on('change', function(event){
			if($(event.target).hasClass('pcard-order-city__select')) {
				coords[0] = +$(event.target).find('option:selected').attr('data-pcard-order-city-latitude');
				coords[1] = +$(event.target).find('option:selected').attr('data-pcard-order-city-longitude');
				myMap.panTo([coords[0],coords[1]], {flying: true});
				myMap.setCenter([coords[0],coords[1]], 10);
				orderInfo.cityLat = coords[0];
				orderInfo.cityLon = coords[1];
			};
			
		});




		// **************************************
		// создание коллекции меток
		// с целевыми данными о каждой метке
		// для всех магазинов во всех городах
		// **************************************
		var placemarkData = []; // массив объектов с данными о каждом магазине для меток Яндекс карт
		for(var i = 0, l = shopsData.length; i < l; i++) {
			for(var j = 0, s = shopsData[i].shops.length; j < s; j++) {
				if(shopsData[i].shops[j]['shopLat'] !== undefined && shopsData[i].shops[j]['shopLon'] !== undefined) {
					placemarkData.push({
						cityId:      shopsData[i]['cityId'],
						cityName:    shopsData[i]['city'],
						shopId:      shopsData[i].shops[j]['id'],
						shopCoords:  [shopsData[i].shops[j]['shopLat'], shopsData[i].shops[j]['shopLon']],
						shopName:    shopsData[i].shops[j]['title'],
						shopAddress: shopsData[i].shops[j]['address'],
						shopWhen:    'Завтра',
						shopTime:    shopsData[i].shops[j]['time'],
					});
				}
			}
		}

		var myCollection = new ymaps.GeoObjectCollection(), // добавлений коллекции меток на карту
			myPlacemark = [];
		for (var i = 0; i < placemarkData.length; i++) {
			myPlacemark[i] = new ymaps.Placemark(placemarkData[i]['shopCoords'],
				{
					placemarkId: placemarkData[i]['shopCoords'][0] + '_' + placemarkData[i]['shopCoords'][1],
					cityId:      placemarkData[i]['cityId'],
					cityName:    placemarkData[i]['cityName'],
					shopId:      placemarkData[i]['shopId'],
					shopName:    placemarkData[i]['shopName'],
					shopAddress: placemarkData[i]['shopAddress'],
					shopWhen:    placemarkData[i]['shopWhen'],
					shopTime:    placemarkData[i]['shopTime'],
				},
				{
					iconImageHref: 'img/sprites/pcard_order_sprite.png', // картинка иконки
					iconImageSize: [27, 35], // размеры картинки
					// активная точка(с галочкой)
					iconImageClipRect: [[0, 502], [27, 538]], //координаты картинки в спрайте "активная"
					// неактивная точка(выколотая)
					// iconImageClipRect: [[0, 452], [27, 487]], //координаты картинки в спрайте "неактивная"

					hideIconOnBalloonOpen: false,
					balloonOffset: [0, -100], //расположение балуна относительно метки
				});
			// добавляем метку в коллекцию
			myCollection.add(myPlacemark[i]);
		}
		myMap.geoObjects.add(myCollection);




		// ********************************
		// свой html-шаблон для баллуна
		// (всплывающее окно над картой)
		// ********************************
		var shopsBalloonLayout = ymaps.templateLayoutFactory.createClass(
				'<div class="pcard-map-shop" style="display: block;">' + 
					'<div class="pcard-map-shop__header">' + 
						'<div class="pcard-map-shop__address">$[properties.shopAddress]</div>' + 
						'<div class="pcard-map-shop__close-but">X</div>' + 
					'</div>' + 
					'<div class="pcard-map-shop__content">' + 
						'<div class="pcard-map-shop__when">можно забрать:</div>' + 
						'<div class="pcard-map-shop__when_strike">$[properties.shopWhen]</div>' + 
						'<div class="pcard-map-shop__time">$[properties.shopTime]</div>' + 
						'<div class="pcard-map-shop__button">бронировать изделие</div>' + 
					'</div>' + 
				'</div>',
				{
					build: function () {
						this.constructor.superclass.build.call(this);
						this._$element = $('.pcard-map-shop', this.getParentElement());
						this._$element.find('.pcard-map-shop__close-but').on('click', $.proxy(this.onCloseClick, this));
						$('.pcard-order__close-but').on('click', $.proxy(this.onCloseClick, this));
						$('.pcard-order-city__select').on('change', $.proxy(this.onCloseClick, this));
					},
					clear: function () {
						// this._$element.find('.pcard-map-shop__close-but').off('click');
						this.constructor.superclass.clear.call(this);
						console.log('clear');
					},
					onCloseClick: function (e) {
						e.preventDefault();
						this.events.fire('userclose');
						console.log('userclose');
					},
				});

		ymaps.layout.storage.add('my#shopsBalloon', shopsBalloonLayout);
		myCollection.options.set({balloonLayout:'my#shopsBalloon'});





		// ****************************************
		// клик по метке на карте
		// модальное окно с предложением 
		// "БРОНИРОВАТЬ ИЗДЕЛИЕ" в этом магазине
		// ****************************************
		myMap.geoObjects.events.add('click', function (e) {
			var object = e.get('target'),
				position = e.get('globalPixelPosition'),
				placemarkId = object.properties.get('placemarkId'),
				// связи со списком из магазинов слева от карты
				$item = $('.pcard-order-shops__item'),
				$thisItem = $('.pcard-order-shops__item[data-pcard-order-placemark-id="' + placemarkId + '"]');

			$item.removeClass('active');
			$thisItem.addClass('active');

			orderInfo.cityId    = object.properties.get('cityId');
			orderInfo.city      = object.properties.get('cityName');
			orderInfo.shopId    = object.properties.get('shopId');
			orderInfo.shop      = object.properties.get('shopName');
			orderInfo.address   = object.properties.get('shopAddress');
			orderInfo.timeshift = object.properties.get('shopTime');
			orderInfo.when      = object.properties.get('shopWhen');


			myMap.panTo([object.geometry.getCoordinates()[0],object.geometry.getCoordinates()[1]], {flying: true});
			myMap.setCenter([object.geometry.getCoordinates()[0],object.geometry.getCoordinates()[1]], 15);
		});


		$(document).on('click', function(event){
			// левосторонняя связь списка магазинов с метками и балунами на карте
			if($(event.target).hasClass('pcard-order-shops__item')) {
				var placemarkId = $(event.target).attr('data-pcard-order-placemark-id');
				myPlacemark.forEach(function (e) {
					if(e!= null) {
						e.balloon.close();
						if (e.properties.get('placemarkId') === placemarkId) {
							e.balloon.open();
							//console.log(e.geometry.getCoordinates());
							myMap.setCenter(e.geometry.getCoordinates(), 15);
						}
					}
				});
			}
			else if($(event.target).hasClass('pcard-order__return')) {
				myPlacemark.forEach(function (e) {
					e.balloon.close();
				});

				myMap.setCenter([orderInfo.cityLat, orderInfo.cityLon], 10);
			}
		});


		// 
		// 
		// 
		myMap.geoObjects.events.add('mouseenter', function (e) {
			// alert('Дошло до коллекции объектов карты');
			// Получение ссылки на дочерний объект, на котором произошло событие.
			var object = e.get('target');
			// object iconImageClipRect: [[0, 452], [27, 487]]
			// console.log(object.geometry.getCoordinates());
			// console.log(object.properties.get('placemarkId')); //['id_14599500099481019']  placemarkId
			// console.log(object.properties.getAll());
			// console.log('###########hover');
			// data-pcard-order-placemark-id
		});
		// 
		// 
		// 
		myMap.geoObjects.events.add('mouseleave', function (e) {
			// alert('Дошло до коллекции объектов карты');
			// Получение ссылки на дочерний объект, на котором произошло событие.
			var object = e.get('target');
			// object iconImageClipRect: [[0, 452], [27, 487]]
			// console.log(object.geometry.getCoordinates());
			// console.log('mouseleave');
		});

	}// end Map Init Function



	function pcardMapDefaultCity() {
		myMap.setCenter([orderInfo.cityLat, orderInfo.cityLon]);
	}
	// ###yamaps





	/*
		makeOrderInterface(state)  -  функция прохождения по цепочки шагов интерфейса бронирования, 
		state  -  текстовый идентификатор шага

		state === 'init'  -  открытие первого шага бронирования
		state === 'getshop'  -  второй шаг, выбор нужного магазина
		state === 'setshop'  -  второй шаг, подтверждение выбранного магазина
		state === 'smssubmitphone'  -  третий шаг, добавление телефона
		state === 'smscheckcode'  -  третий шаг, проверка смскода
		state === 'cancel'  -  закрытие, отмена
	*/
	function makeOrderInterface(state, event) {
		var toBreak = orderInterface.currentWidth < 640;


		// отмена события по умолчанию для элементов интерфейса
		if(event.type === 'click') event.preventDefault();
		console.log(event.target);

		// зависимости ширины экрана
		if(toBreak) { // для меньших(к мобильнику)
			$pcardStore.append($pcardOrder.detach());
			orderInterface.popUpOff();
		}
		else { // для больших(к десктопу)
			$pcardStore.find($pcardOrder) ? $('.pcard-main').after($pcardOrder.detach()) : '';
			orderInterface.popUpOn();
		}


		if(state === 'init') {

			pcardMapDefaultCity();
			$pcardOrder.show();

			// сброс значений смс кода и номера телефона
			$('#pcard-order-user-phone').val('');
			$('#pcard-order-sms-code').val('');

			if(!isShow($pcardOrderStep_1)) $pcardOrderStep_1.show();

			// активируем 1-й шаг
			orderInterface.stepActivate($pcardOrderStep_1);
			orderInterface.state = 'init';

			// делаем заголовок 1шага информативным
			$pcardOrderStepState_1.text(' ' + orderInfo.item + ', '+ orderInfo.size + ' размер');


			// проверка с формы бонусной карты
			$('#pcard-bonus-card-form').on('submit', function (event) {
				var $this = $(this),
					$submitButton = $this.find('.pcard-order-promo-submit'),
					$warningMessage = $this.find('.pcard-order-promo-warning'),
					$textField = $this.find('.form-textline'),

					bonusCard = $this.find('.form-textline__default').val(),
					bonusCardValid = false;

				event.preventDefault();

				// console.log(bonusCard);

				// 

				if(bonusCard != false) bonusCardValid = true;

				if(bonusCardValid) {
					$warningMessage.removeClass('pcard-order-promo-warning--invalid');
					$submitButton.removeClass('pcard-order-promo-submit--invalid');
					$textField.removeClass('form-textline--invalid');

					$warningMessage.addClass('pcard-order-promo-warning--valid');
					$submitButton.addClass('pcard-order-promo-submit--valid');
					$textField.addClass('form-textline--valid');
				}
				else {
					$warningMessage.removeClass('pcard-order-promo-warning--valid');
					$submitButton.removeClass('pcard-order-promo-submit--valid');
					$textField.removeClass('form-textline--valid');

					$warningMessage.addClass('pcard-order-promo-warning--invalid');
					$submitButton.addClass('pcard-order-promo-submit--invalid');
					$textField.addClass('form-textline--invalid');
				}
			});

			// проверка с формы промокода
			$('#pcard-promo-code-form').on('submit', function (event) {
				var $this = $(this),
					$submitButton = $this.find('.pcard-order-promo-submit'),
					$warningMessage = $this.find('.pcard-order-promo-warning'),
					$textField = $this.find('.form-textline'),

					promoCode = $this.find('.form-textline__default').val(),
					promoCodeValid = false;

				event.preventDefault();

				// console.log(promoCode);

				if(promoCode != false) promoCodeValid = true;

				if(promoCodeValid) {
					$warningMessage.removeClass('pcard-order-promo-warning--invalid');
					$submitButton.removeClass('pcard-order-promo-submit--invalid');
					$textField.removeClass('form-textline--invalid');

					$warningMessage.addClass('pcard-order-promo-warning--valid');
					$submitButton.addClass('pcard-order-promo-submit--valid');
					$textField.addClass('form-textline--valid');
				}
				else {
					$warningMessage.removeClass('pcard-order-promo-warning--valid');
					$submitButton.removeClass('pcard-order-promo-submit--valid');
					$textField.removeClass('form-textline--valid');

					$warningMessage.addClass('pcard-order-promo-warning--invalid');
					$submitButton.addClass('pcard-order-promo-submit--invalid');
					$textField.addClass('form-textline--invalid');
				}
			});
		}

		else if(state === 'getshop') {
			// скрываем предыдущий шаг
			completePcardOrderStep($pcardOrderStep_1);

			// дефолтный город в выпадающем списке
			orderInfo.setDefault();
			orderInterface.selectCity(orderInfo.cityId);

			$pcardOrderCloseButton.show();
			
			if(!isShow($pcardOrderStep_2)) $pcardOrderStep_2.show();
			
			orderInterface.stepActivate($pcardOrderStep_2);
			
			$pcardOrderStepTitle_2.text('2 шаг: Выберите магазин');
			
			orderInterface.setShopCount(orderInfo.cityId); // количество магазинов в этом городе

			orderInterface.stepHide($('.pcard-order__step-3'));

			orderInterface.state = 'getshop';
			orderInterface.selectCity(+$('.pcard-order-city__select').find('option:selected').attr('data-pcard-order-city-id'));
			orderInterface.setShopCount(+$('.pcard-order-city__select').find('option:selected').attr('data-pcard-order-city-id'));

			// 
			// console.log(orderInterface.state + ' + ' + orderInfo.cityId);


			// 
			// myMap.setCenter([orderInfo.cityLat, orderInfo.cityLon], 10);
		}

		else if(state === 'setshop') {
			orderInterface.state = 'setshop';
			orderInterface.selectShop(orderInfo.cityId, orderInfo.shopId);
		}

		else if(state === 'smsstart') {
			orderInterface.state = 'smsstart';
			orderInterface.setSMSAlert('hide');
			$('#pcard-order-user-phone').val('');
			
			isHide($pcardOrderStep_3) ? $pcardOrderStep_3.show() : '';

			// делаем информативынм заголовок окна 2-го шага
			$pcardOrderStepTitle_2.text('2 шаг. Ваш магазин');
			$pcardOrderStepState_2.text(orderInfo.shop + ', ' + orderInfo.address);

			// а само окно 2-го шага скрываем и делаем "Выполненным"
			completePcardOrderStep($pcardOrderStep_2);

			// открываем 3й шаг
			activatePcardOrderStep($pcardOrderStep_3);
		}

		else if(state === 'smssubmitphone') {
			orderInterface.state = 'smssubmitphone';
			orderInfo.refresh($('#pcard-order-user-phone'));
			orderInfo.phone = $('#pcard-order-user-phone').val();
			orderInterface.setSMSAlert('show');

			// 
			// console.log(orderInterface.state);
		}

		else if(state === 'smscheckcode') {
			orderInterface.state = 'smscheckcode';

			// здесь должно быть условие "Если высланный смс-код совпадет с тем, что ввёл пользователь, то открываем завершающий шаг"
			// {
			if(!isShow($pcardOrderStep_4)) $pcardOrderStep_4.show();
			completePcardOrderStep($pcardOrderStep_3);
			$pcardOrderStep_1.hide();
			$pcardOrderStep_2.hide();
			$pcardOrderStep_3.hide();
			activatePcardOrderStep($pcardOrderStep_4);
		}

		else if(state === 'cancel') {
			orderInfo.setDefault();
			orderInterface.reset({cityId: orderInfo['cityId']});

			// orderInfo.setDefault();
			myMap.setCenter([orderInfo.cityLat, orderInfo.cityLon], 10);

			if(isShow($pcardOrderStep_4)) $pcardOrderStep_4.hide();
		}// "ШАГИ БРОНИРОВАНИЯ";end


		// зависимости ширины экрана
		if(toBreak) { // для меньших(к мобильнику)
			orderInterface.state !== 'cancel' ? $pcardOrderReserveButton.hide() : $pcardOrderReserveButton.show();
			orderInterface.setShopModal();
			
			if(orderInterface.state !== 'cancel') {
				orderInterface.setTopOffset();
			}
		}
		else { // для больших(к десктопу)
			$pcardOrderReserveButton.show();
			orderInterface.setShopModal([], 'none');
		}
	}


	// обработка событий связанных с интерфейсом
	$(document).on('click', function (event) {
		// order-button-to-getshop
		if($(event.target).hasClass('pcard-store__reserve-button')) makeOrderInterface('init', event);
		else if($(event.target).hasClass('order-button-to-getshop')) makeOrderInterface('getshop', event);
		else if($(event.target).hasClass('pcard-order__close-but')) makeOrderInterface('cancel', event);
		else if($(event.target).hasClass('pcard-popup__overlay')) makeOrderInterface('cancel', event);
		else if($(event.target).hasClass('pcard-map-shop__close-but')) makeOrderInterface('getshop', event);
		else if($(event.target).hasClass('pcard-order-shops__item')) {
			orderInfo.refresh($(event.target));
			makeOrderInterface('setshop', event);
		}
		else if($(event.target).hasClass('pcard-map-shop__button')) makeOrderInterface('smsstart', event);
		else if($(event.target).hasClass('pcard-order__return')) makeOrderInterface('getshop', event);
		else if($(event.target).hasClass('pcard-order__submit-phone')) makeOrderInterface('smssubmitphone', event);
		else if($(event.target).hasClass('pcard-order__submit-smscode')) makeOrderInterface('smscheckcode', event);
		else if($(event.target).hasClass('pcard-order-form-message__close-but')) makeOrderInterface('smsstart', event);
		else if($(event.target).hasClass('pcard-order-form__field')) console.log('continue', event);

		// console.log('doc on click');
	});

	$(document).on('change', function (event) {
		if($(event.target).hasClass('pcard-order-city__select')) {
			orderInfo.refresh($(event.target).find('option:selected'));
			makeOrderInterface('getshop');
		}
		else if($(event.target).hasClass('pcard-order-shops__select')) {
			orderInfo.refresh($(event.target).find('option:selected'));
			makeOrderInterface('setshop');
			
		}
	});

	var pcardOlderWidth = parseInt(window.innerWidth);
	$(window).on('resize', function () {
		orderInterface.currentWidth = parseInt(window.innerWidth); // ширина экрана после ресайза записывется как свойство объекта

		/*
			Суть if-else'а:
			
			если происходит ресайз по ширине/горизонтали экрана,
			то вызываем функцию "makeOrderInterface()" 
			и иперестраиваем/адаптируем вид интерфейса под 
			текущую ширину,
			
			если горизонтально, ширина страницы не меняется то ничего не делаем
		*/
		if(pcardOlderWidth === orderInterface.currentWidth) {
			// console.log('горизонтального ресайза не происходит');
		}
		else if(pcardOlderWidth > orderInterface.currentWidth) {
			// console.log('происходит горизонтальный ресайз: ширина страницы уменьшается');
			pcardOlderWidth = orderInterface.currentWidth;
			makeOrderInterface(orderInterface.state);
		}
		else if(pcardOlderWidth < orderInterface.currentWidth) {
			// console.log('происходит горизонтальный ресайз: ширина страницы увеличивается');
			pcardOlderWidth = orderInterface.currentWidth;
			makeOrderInterface(orderInterface.state);
		}
	});

	$('#pcard-order-user-phone').inputmask('+7(999) 999-99-99');







// ####
	$('body').prepend('<div class="popup__overlay"></div>')
	var $popUpOverlay = $('.popup__overlay');
	$popUpOverlay.hide();

	// ******************************
	// POPUP для "КAК УЗНАТЬ РАЗМЕР?"
	// ******************************

	// добавляет кнопку закрытия попАпа
	$('.pcard-fitting__header').prepend('<div class="pcard-popup__close-but"></div>'); 
	$('.pcard-fitting__header').find('.pcard-popup__close-but').on('click', function () {
		$('.pcard-fitting__header').removeClass('pcard-popup__header');
		$popUpOverlay.hide();
		$('.pcard-fitting')
			.removeClass('is-show')
			.removeClass('pcard-popup__wrap');
	});

	// всплытие окна
	$('.pcard-store-fitting__popup-but').on('click', function () {
		$popUpOverlay.show();
		$('.pcard-fitting')
			.addClass('pcard-popup__wrap')
			.addClass('is-show');

		// закрытие попАпа по клику на затемнённое пространство
		$popUpOverlay.on('click', function (event) {
			var e = $('.pcard-fitting ');
			if (!e.is(event.target) && e.has(event.target).length === 0) {
				$('.pcard-fitting__header').removeClass('pcard-popup__header');
				e.removeClass('is-show')
				.removeClass('pcard-popup__wrap');

				$popUpOverlay.hide();
			}
		});

		$('.pcard-fitting__header').addClass('pcard-popup__header');
		$('.pcard-popup__close-but').show();
		
	});

	// Подбор размера кольца
	$('.pcard-fitting-select__menu').on('change', function () {
		$('.pcard-fitting-result__value').empty().prepend(parseInt(+$(this).val()/3.14));
	});

	$(window).on('resize', function () {
		if(parseInt(window.innerWidth) <= 1024) {
			console.log('noDesktop');
			$('.pcard-fitting__header').removeClass('pcard-popup__header');
			$('.pcard-fitting ')
				.removeClass('is-show')
				.removeClass('pcard-popup__wrap');
			$popUpOverlay.hide();
		}
		else console.log('Desktop');
	});






	// **************************
	// POPUP для "ХОЧУ В ПОДАРОК"
	// **************************
	$('.pcard-gift__header').prepend('<div class="pcard-popup__close-but"></div>'); // добавляет кнопку закрытия попАпа
	$('.pcard-gift__header').find('.pcard-popup__close-but').on('click', function () {
		$popUpOverlay.hide();
		$('.pcard-gift__header').removeClass('pcard-popup__header');
		$('.pcard-gift')
			.removeClass('is-show')
			.removeClass('pcard-popup__wrap');
	});

	// всплытие окна
	$('.pcard-store-panel__button-want_popup').on('click', function () {
		$popUpOverlay.show();
		$('.pcard-gift')
			.addClass('pcard-popup__wrap')
			.addClass('is-show');

		// закрытие попАпа по клику на затемнённое пространство
		$popUpOverlay.on('click', function (event) {
			var e = $('.pcard-gift');
			if (!e.is(event.target) && e.has(event.target).length === 0) {
				$('.pcard-gift__header').removeClass('pcard-popup__header');
				e.removeClass('is-show').removeClass('pcard-popup__wrap');

				$popUpOverlay.hide();
			}
		});

		$('.pcard-gift__header').addClass('pcard-popup__header');
		$('.pcard-popup__close-but').css('display', 'block');
	});

	$(window).on('resize', function () {
		if(parseInt(window.innerWidth) <= 1024) {
			console.log('noDesktop');
			$('.pcard-gift__header').removeClass('pcard-popup__header');
			$('.pcard-gift')
				.removeClass('is-show')
				.removeClass('pcard-popup__wrap');
			$popUpOverlay.hide();
		}
		else console.log('Desktop');
	});



	// ***********************************************
	// СХЛОПЫВАНИЕ/ВЫПАДАНИЕ/ПРОВЕРКА НА ШИРИНУ ЭКРАНА
	// ***********************************************
	function pcardTabs(tabSelector) {
		var $tab = $(tabSelector);

		$tab.hasClass('pcard-tab_closed') ?
		$tab.removeClass('pcard-tab_closed') :
		$tab.addClass('pcard-tab_closed');
	}
	$('.pcard-properties__header').on('click', function () { pcardTabs('.pcard-properties'); });
	$('.pcard-fitting__header').on('click', function () { pcardTabs('.pcard-fitting'); });
	$('.pcard-gift__header').on('click', function () { pcardTabs('.pcard-gift'); });
});
