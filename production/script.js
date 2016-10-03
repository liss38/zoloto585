var offerId;
var ajax_path_bron="/bitrix/templates/zoloto/components/bitrix/catalog/custom/bitrix/catalog.element/.default/ajax/"
var offerStoreData;
var myPlacemark = []
var phoneSendCheck=false;
var codeSendCheck=false;
var globalResizeFlag=false;

function button_el_det() {

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
			cityId: 1,
			cityLat:55.042762,
			cityLon:82.919109,
			city: 'Новосибирск',
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

			// console.log('refreshOrderInfo -> ');
			// console.log($selector);
			console.log(orderInfo);
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

	// orderInfo.init([pcardItem, pcardSize, cityId, city]);



	// интерфейс бронирования(контроллер)
	var orderInterface = {
		// $pcardOrder:
		currentStep: '',
		state: 'cancel',
		stateValues: ['init', 'cancel', 'getshop', 'setshop', 'smsstart', 'smssubmitphone', 'smsgetcode', 'smscheckcode', ],

		currentWidth: parseInt(window.innerWidth),
		// topOffset: $('.pcard-store__reserve-button').offset().top,
		setTopOffset: function (topOffset) {
			var topOffset = topOffset || (parseInt($('.pcard-store-fitting').offset().top) + parseInt($('.pcard-store-fitting').outerHeight()));
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
				.prepend('<div class="pcard-order-form-message__close-but"></div><p>Вам отправлен SMS код!</p><p>Введите полученный номер в поле ниже для подтверждения Вашего заказа. </p>');

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
		orderInfo.size = +$(this).val();
		offerId=$(".pcard-store-fitting-select__menu_default option:selected").data("id");
		$(".pcard-store").data("id",offerId);
		$(".pcard-store-prices").addClass("non");
		$(".pcard-properties__id").addClass("non");
		$(".pcard-properties__item-value-weight").addClass("non");
		$(".pcard-properties__item-value-size").addClass("non");
		$(".pcard-store-prices[data-id="+offerId+"]").removeClass("non");
		$(".pcard-properties__id[data-id="+offerId+"]").removeClass("non");
		$(".pcard-properties__item-value-size[data-id="+offerId+"]").removeClass("non");
		$(".pcard-properties__item-value-weight[data-id="+offerId+"]").removeClass("non");
		getOfferData();
		// записываем выбранный размер изделия в объект-контейнер интерфейса бронирования
	});



	function activatePcardOrderStep($selector) { return $selector.removeClass('pcard-order__step_hidden').removeClass('pcard-order__step_done').addClass('pcard-order__step_active'); }
	// function resetPcardOrderStep($selector) { return $selector; }
	function hidePcardOrderStep($selector) { return $selector.removeClass('pcard-order__step_active').removeClass('pcard-order__step_done').addClass('pcard-order__step_hidden'); }
	function completePcardOrderStep($selector) { return $selector.removeClass('pcard-order__step_hidden').addClass('pcard-order__step_done'); }
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
						shopWhen:    'Ежедневно',
						shopTime:    shopsData[i].shops[j]['time'],
					});
				}
			}
		}

		var myCollection = new ymaps.GeoObjectCollection(); // добавлений коллекции меток на карту

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
					iconImageHref: '/bitrix/templates/zoloto/images/pcard_order_sprite.png', // картинка иконки
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
			'<!--<div class="pcard-map-shop__when_strike">$[properties.shopWhen]</div>-->' +
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

			var object = e.get('target');
			var cId=object.properties.get('cityId');
			if(cId!=orderInfo.cityId)
			{
				$(".pcard-order-city__select option").removeAttr("selected");
				$(".pcard-order-city__select option[value="+cId+"]").attr("selected","selected");
				$(".pcard-order-city__select").trigger("change");
			}

			var 	position = e.get('globalPixelPosition'),
				placemarkId = object.properties.get('placemarkId'),
			// связи со списком из магазинов слева от карты
				$item = $('.pcard-order-shops__item'),
				$thisItem = $('.pcard-order-shops__item[data-pcard-order-placemark-id="' + placemarkId + '"]');

			$item.removeClass('active');
			$thisItem.addClass('active');

			/** Используется в ecommerce.php для отслеживания факта выбора магазина */
			$(document).trigger('shopOnMapSelect');

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



	// ###
	function makeOrderInterface(state) {
		var toBreak = orderInterface.currentWidth < 749;


		// отмена события по умолчанию для элементов интерфейса
		// if(event.type === 'click') event.preventDefault();
		// console.log(event.target);

		// зависимости ширины экрана
		if(toBreak) { // для меньших(к мобильнику)
			$pcardStore.append($pcardOrder.detach());
			orderInterface.popUpOff();
			// $pcardOrder.css({'height' : '620px'});
		}
		else { // для больших(к десктопу)
			//$pcardStore.find($pcardOrder) ? $pcardVideo.after($pcardOrder.detach()) : '';
			orderInterface.popUpOn();
			// $pcardOrder.css({'height' : '630px'});
		}


		//
		if(state === 'init') {

			phoneSendCheck = false;
			codeSendCheck = false;
			pcardMapDefaultCity();
			$pcardOrder.show();
			$('#pcard-order-user-phone').val('');
			$('#pcard-order-sms-code').val('');
			if(!isShow($pcardOrderStep_1)) $pcardOrderStep_1.show();

			// активируем 1-й шаг
			orderInterface.stepActivate($pcardOrderStep_1);
			orderInterface.state = 'init';

			// дефолтный город в выпадающем списке
			orderInfo.setDefault();
			orderInterface.selectCity(orderInfo.cityId);
			//console.log(orderInfo.size)
			// делаем заголовок 1шага информативным
			var titleStep=' ' + orderInfo.item;
			if(orderInfo.size!=0 && orderInfo.size!="")
			titleStep+= ', '+ orderInfo.size + ' размер';
			$pcardOrderStepState_1.text(titleStep);

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


			if(toBreak)
			{
				$(".pcard-order-shops__select option:eq(0)").attr("selected","selected");
				$(".pcard-order-shops__select").trigger("change");
				//console.log("sssssAA")
			}
			//
			//console.log(orderInterface.state);
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
			//console.log(orderInterface.state + ' + ' + orderInfo.cityId);

			if(toBreak)
			{
				$(".pcard-order-shops__select option:eq(0)").attr("selected","selected");
				$(".pcard-order-shops__select").trigger("change");
				console.log("sssssAA")
			}
			//
			// myMap.setCenter([orderInfo.cityLat, orderInfo.cityLon], 10);
		}

		else if(state === 'setshop') {
			orderInterface.state = 'setshop';
			orderInterface.selectShop(orderInfo.cityId, orderInfo.shopId);
			phoneSendCheck = false;
			codeSendCheck = false;
			// orderInterface.setShopModal();

			//
			//console.log(orderInterface.state + ' + ' + orderInfo.shopId + ' + ' + orderInfo.address);
		}

		else if(state === 'smsstart') {
			var address=$(".pcard-order-shops__item.active").data("pcard-order-shop-address");
			orderInfo.address=address;
			orderInfo.shopId=$(".pcard-order-shops__item.active").data("pcard-order-shop-id");
			orderInterface.state = 'smsstart';
			orderInterface.setSMSAlert('hide');
			//$('#pcard-order-user-phone').val('');

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
			$('#pcard-order-user-phone').removeClass("error-field");

			if(!globalResizeFlag) {
				var phone = $('#pcard-order-user-phone').inputmask("unmaskedvalue");

				if (phone.length == 10 ) {
					if(!phoneSendCheck) {
						phoneSendCheck = true;
						$.getJSON(ajax_path_bron + "send_phone.php", {phone: phone}, function (data) {
							if (data.response == "ok") {
								orderInterface.setSMSAlert('show');
								phoneSendCheck = true;
								$(document).trigger('goldOrderStep2Complete');
							}
							else {
								$('#pcard-order-user-phone').addClass("error-field")
								phoneSendCheck = false;
							}
						});
					}
				}
				else {
					$('#pcard-order-user-phone').addClass("error-field")
				}
			}
		}

		else if(state === 'smscheckcode') {
			orderInterface.state = 'smscheckcode';

			$('#pcard-order-sms-code').removeClass("error-field");
			var code=$("#pcard-order-sms-code").val();
			var regex = /\d{4}/;
			var phone=$('#pcard-order-user-phone').inputmask("unmaskedvalue");

			if(code!="" && (m = regex.exec(code)) !== null && code.length==4 )
			{
				if(!codeSendCheck) {
					codeSendCheck = true;
					$.getJSON(ajax_path_bron + "check_code.php", {
						code: code,
						id: offerId,
						city: orderInfo.city,
						phone: phone,
						shop: orderInfo.shopId,
						name: orderInfo.item
					}, function (data) {
						if (data.response == "ok") {							
							$pcardOrderStep_4.show();
							completePcardOrderStep($pcardOrderStep_3);
							$pcardOrderStep_1.hide();
							$pcardOrderStep_2.hide();
							$pcardOrderStep_3.hide();
							activatePcardOrderStep($pcardOrderStep_4);
							// if(toBreak) $pcardOrder.css({'height' : '750px'});
							$(".pcard-order__step-4 .step-4-text-1").html("Ваша заявка № "+data.order_id+" принята")
							succesText='Мы поверяем наличие товара <span class="step-4__item-info">«'+orderInfo.item;

							if(orderInfo.size*1>0)
							{
								succesText+=" размер "+orderInfo.size;
							}

							succesText+='»</span> в магазине по адресу: <span class="step-4__store-info">'+orderInfo.address+'</span>';

							$(".pcard-order__step-4 .step-4-text-2").html(succesText)

							//console.log(orderInfo)
							codeSendCheck = true;
							ga("create", "UA-24696049-1", "auto");
							ga('send', 'event', 'e-commerce', 'tobuy', 'Заказ создан');
							//$(".pcard-order__step-4 .pcard-order__thank").html("Спасибо")
							
							//используется в ecommerce.php для отслеживания факта оформления заказа
							$(document).trigger('goldOrderComplete', [data.order_id, orderInfo.address]);
						}
						if (data.response == "fail") {
							if (data.type == "order") {
								hidePcardOrderStep($pcardOrderStep_3);
								activatePcardOrderStep($pcardOrderStep_4);
								$(".pcard-order__step-4 .step-4__content").html("При бронировании украшения произошел сбой." +
									" Пожалуйста, попробуйте забронировать изделие ещё раз")
								codeSendCheck = false;
							} else {
								$('#pcard-order-sms-code').addClass("error-field");
								codeSendCheck = false;
							}
						}
					})
					//console.log("success")
				}

			}
			else
			{
				$('#pcard-order-sms-code').addClass("error-field");
			}

			//console.log(orderInterface.state);
		}

		else if(state === 'cancel') {
			orderInfo.setDefault();
			orderInterface.reset({cityId: orderInfo['cityId']});

			orderInfo.setDefault();
			myMap.setCenter([orderInfo.cityLat, orderInfo.cityLon], 10);

			if(isShow($pcardOrderStep_4)) $pcardOrderStep_4.hide();
			//
			getOfferData()
			console.log(orderInterface.state);
			console.log(orderInfo);
		}

		//console.log(state+"SSSSS");
		// зависимости ширины экрана
	/*	if(toBreak) { // для меньших(к мобильнику)
			orderInterface.state !== 'cancel' ? $pcardOrderReserveButton.hide() : $pcardOrderReserveButton.show();
			(orderInterface.state === 'init' || orderInterface.state === 'getshop' || orderInterface.state === 'setshop') ? $pcardOrder.css({'height' : '440px'}) : '';

		}
		else { // для больших(к десктопу)
			$pcardOrderReserveButton.show();
		}*/
		if(toBreak) { // для меньших(к мобильнику)
			orderInterface.state !== 'cancel' ? $pcardOrderReserveButton.hide() : $pcardOrderReserveButton.show();
			// (orderInterface.state === 'init' || orderInterface.state === 'getshop' || orderInterface.state === 'setshop') ? $pcardOrder.css({'height' : '530px'}) : '';
			orderInterface.setShopModal();

			if(orderInterface.state !== 'cancel') {
				orderInterface.topOffset = parseInt($('.pcard-store-fitting').offset().top) + parseInt($('.pcard-store-fitting').outerHeight());
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

		if($(event.target).hasClass('pcard-store__reserve-button'))
		{

			orderInfo.cityId = offerStoreData.currentCity.cityId;
			orderInfo.city = offerStoreData.currentCity.city;
			orderInfo.cityLat =offerStoreData.currentCity.cityLat;
			orderInfo.cityLon = offerStoreData.currentCity.cityLon;
			orderInfo.defaultData.cityId = offerStoreData.currentCity.cityId;
			orderInfo.defaultData.city = offerStoreData.currentCity.city;
			orderInfo.defaultData.cityLat =offerStoreData.currentCity.cityLat;
			orderInfo.defaultData.cityLon = offerStoreData.currentCity.cityLon;
			myMap.destroy();
			shopsData = offerStoreData.citList;
			
			pcardMapInit();
			console.log(offerStoreData.currentCity.cityId);
			makeOrderInterface('init');
			return false;
		}
		else if($(event.target).hasClass('order-button-to-getshop')) makeOrderInterface('getshop');
		else if($(event.target).hasClass('pcard-order__close-but')) {
			makeOrderInterface('cancel');
			return false

		}
		else if($(event.target).hasClass('pcard-popup__overlay')) {
			makeOrderInterface('cancel');
			return false

		}
		else if($(event.target).hasClass('pcard-map-shop__close-but')){
			makeOrderInterface('getshop');
			return false

		}
		else if($(event.target).hasClass('pcard-order-shops__item')) {
			orderInfo.refresh($(event.target));
			makeOrderInterface('setshop');
			return false

		}
		else if($(event.target).hasClass('pcard-map-shop__button')) {
			// if ($.cookie('GOLD585_ORDER_PHONE') != undefined) {
			// 	//Пользователь недавно оформил заказ, не требуем подтверждения телефона и сразу оформляем
			// } else {
				
			// }
			makeOrderInterface('smsstart');
			return false

		}
		else if($(event.target).hasClass('pcard-order__return')){
			makeOrderInterface('init');
			return false

		}
		else if($(event.target).hasClass('pcard-order__submit-phone')) {
			makeOrderInterface('smssubmitphone');
			return false

		}
		else if($(event.target).hasClass('pcard-order__submit-smscode')) {
			makeOrderInterface('smscheckcode');
			return false

		}
		else if($(event.target).hasClass('pcard-order-form-message__close-but')) {
			makeOrderInterface('smsstart');
			return false

		}
		else if($(event.target).hasClass('pcard-order-form__field')) {
			console.log('continue');
			return false

		}
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
		// orderInterface.topOffset = parseInt($('.pcard-store-fitting').offset().top) + parseInt($('.pcard-store-fitting').outerHeight());
		// orderInterface.setTopOffset();

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

	offerId=$(".pcard-store").data("id")
	getOfferData();

	console.log(orderInfo);


}

var ShowMotivePopup=true;
function getOfferData()
{

	var toBreak = parseInt(window.innerWidth) < 749;
	var openedModal = $(".pcard-order:visible").size();
	if(toBreak && openedModal)
	{
		$(".pcard-order__close-but").trigger("click")
			//makeOrderInterface('cancel');
	}

	var discount = 0;

	discount = $(".pcard-store option[data-id="+offerId+"]").data("discount");
	var labelType = $(".pcard-store option[data-id="+offerId+"]").data("label-type");

	if($(".pcard-fotorama .promo-label")!=undefined) {
		$(".pcard-fotorama .promo-label").remove()
	}

	if (labelType == 'shock') {
		$(".pcard-fotorama").append("<div class=\"promo-label  promo-label--shock-price\">шок цена</div>")
	} else if(discount > 0) {
		$(".pcard-fotorama").append("<div class='promo-label  promo-label--discount'>-"+discount+"%</div>")
	}

	$.getJSON(ajax_path_bron+"get_availability.php",{ID:offerId},function(data){
		offerStoreData=data;
		if(offerStoreData.type=="reserve")
		{
			$("#pcard-store-button-list").html('<a href="#" class="pcard-store__reserve-button ">Бронировать в магазине ></a>')
			if(toBreak && openedModal)
			{
				$(".pcard-store__reserve-button").trigger("click")
			}
			if(ShowMotivePopup)
			{
				setTimeout(function () {
						popupAnimate(1);
					},
					2000
				);

			}
		}
		if(offerStoreData.type=="availability")
		{
			$("#pcard-store-button-list").html('<a href="#podbor_popup" class="btn btn_podbor pcard-store__availability">' +
				'<img width="16" height="16" alt="" src="/images/nal.png">Посмотреть наличие ></a>');

			if(offerStoreData.citList.length>0)
			{

				$(".pcard-store__availability").magnificPopup({
					type: 'inline',
					preloader: false,
					modal: true
				});
				var htmlAvailability="";
				for(var i = 0; i < offerStoreData.citList.length; i++)
				{
					var item=offerStoreData.citList[i];
					htmlAvailability+='<tr><td><div><span class="name">'+item.title+'</span></div>' +
						'<div class="ulica">'+item.address+'</div></td><td><span class="ok"></span></td></tr>';
				}

				$("#podbor_popup thead tr:eq(1) td").html($('.pcard-store-fitting-select__menu_default').val());
				if(htmlAvailability!="")
					$("#podbor_popup tbody").html(htmlAvailability)
			}


		}
		if(offerStoreData.type=="soon")
		{
			$("#pcard-store-button-list").html('<a href="javascript:void(0);" class="pcard-store__soon-button ">Скоро в наличии ></a>')
		}
		ShowMotivePopup=false;

	})
}


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

if (!!window.frameCacheVars){
	BX.addCustomEvent("onFrameDataReceived" , function(json) {
		button_el_det();
	});
} else {
	BX.ready(function() {
		button_el_det();
	});
};

;$(function () {
	// ====================
	// == pcard-motivate.js ==
	// ====================


	// всплытие попапа через 2 секунды


	$('#pcard-motivate-button').on('click', function () {
		popupAnimate(0);
	});

});