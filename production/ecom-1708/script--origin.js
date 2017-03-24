/**
 * ОБОБЩЕНИЕ:
 * для модальных окон и действия клик на крестик(закрытие окна)
 */
$(document).on('click', '.js-modal-close-button', function () {
    var $modalWindow = $(this).closest('.js-modal-window');
    if($modalWindow) {
        $modalWindow.removeClass($modalWindow.attr('data-js-modal-active-modifier'));
    }
});



/**
 * ленивая погрузка шаблонов
 * для jsrender
 * lazyGetTemplate
 *    name - имя шаблона в $.templates,
 *    pathToTemplateFile - путь к файлу шаблона
 */
function lazyGetTemplate(name, pathToTemplateFile) {
    var deferred = $.Deferred();
    var basePath = pathToTemplateFile || '/bitrix/templates/zoloto/js/views/';
    if ($.templates[name]) {
        deferred.resolve();
    } else {
        $.getScript(basePath + name + '.js')
            .then(function() {
                if ($.templates[name]) {
                    deferred.resolve();
                    // console.log('@lazyGetTemplate: шаблон "' + name + '.js"(' + basePath + ') подгрузился');
                } else {
                    console.log('@lazyGetTemplate: шаблон "' + name + '.js"(' + basePath + ') не подгрузился');
                    deferred.reject();
                }
            });
    }
    return deferred.promise();
}

/*
 =
 =
 =
 =
 =
 =
 =
 =
 =
 =
 =
 =
 =
 */
var storeCurrentCityName = ''; // название текущего города

$.when(
    lazyGetTemplate('store-item-template', '/bitrix/templates/zoloto/js/views/store/'),
    lazyGetTemplate('store-list-template', '/bitrix/templates/zoloto/js/views/store/'),
    lazyGetTemplate('store-cities-list-template', '/bitrix/templates/zoloto/js/views/store/')
)
    .done(function () {
        var city = $.cookie('city') ? $.cookie('city') : 'Санкт-Петербург';
        storeCurrentCityName = city;
        $.getJSON('/bitrix/templates/zoloto/components/bitrix/catalog.store/custom/zoloto585/catalog.store.list/custom/json.php', function (data) {
            /**
             * [storeData description]
             * @type {Object}
             */
            var storeData = {
                currentCityValues: { // значения для текущего города
                    cityName: $.cookie('city') ? $.cookie('city') : 'Санкт-Петербург',
                },
                citiesList: [], // массив из названий гoродов
                citiesListAdvanced: [], // массив объектов с полями {имя_города, колво_магазинов_в_городе}
            };
            var currentCityData = [];
            var citiesList = [];

            data.forEach(function (item, index, array) {
                if(item['CITY'] == city) currentCityData.push(item);

                if(storeData.citiesList.indexOf(item['CITY']) === -1) {
                    // если такой город не попадалася добаляем его в массив городов
                    // создаем массив городов без повторяющихся значений
                    storeData.citiesList.push(item['CITY']);
                    storeData.citiesListAdvanced.push({ cityName: item['CITY'], cityStoresCount: 1 });
                } else {
                    // storeData.citiesListAdvanced
                }
            });


            /**
             * рендерит миникарточки магазинов
             * текущего города
             */
                // $("#store-item-list").html($.templates['store-item-template'].render(currentCityData));
            $("#store-item-list").html($.templates['store-item-template'].render(data));



            $('#store-about-count').html(currentCityData.length);
            $('.store-about__title').find('a').html(city);
            $('.store-about__sub-title').find('a').html(city);
            $('.store-about__sub-title').find('a').html($('#store-list-combobox option:selected').attr('value'));

            $(document).on('change', '#store-list-combobox', function () {
                var cityName = $(this).find(':checked').val();

                $('.store-about__sub-title').find('a').html(cityName);
                $('.store-about__title').find('a').html(cityName);
                $('#store-about-count').html(currentCityData.length);
            });


            $('#store-list-combobox').html($.templates['store-list-template'].render(citiesList));
            $('.store-list').html($.templates['store-cities-list-template'].render(storeData));



            // инициализация карты
            ymaps.ready(storeMapInit(data));
            console.log(data);
            console.log(currentCityData);
        });
    });



// ф-я описывающая работу с картой на странице "Адреса магазинов"
function storeMapInit(storeData) {
    return function () {
        var STORE_POINT_FOCUS_ZOOM = 17; // уровень zoom'а для конкретного магазина(т.е. после того как пользователь кликнул на метку)
        var myMap = new ymaps.Map("map", {
            center: [55.753994, 37.622093], // Координаты центра карты
            zoom: 16 // Zoom
        });

        /**
         * УСТАНОВКА КОНТРОЛОВ КАРТЫ:
         *  - кнопки зума
         *  - возможность скпроллировать масштаб карты(колесо мишы)
         */
        myMap.controls.add(new ymaps.control.ZoomControl());
        myMap.behaviors.enable('scrollZoom');


        /**
         * Создаем массив меток
         * и помещаем их
         * на карте
         */
        var storesPlacemarkCollection = new ymaps.GeoObjectCollection();
        var storesPlacemarks = [];
        for (var i = 0; i < storeData.length; i++) {
            storesPlacemarks[i] = new ymaps.Placemark([storeData[i]['GPS_N'], storeData[i]['GPS_S']],
                {
                    storeIDByGPS: storeData[i]['GPS_N'] + '__' + storeData[i]['GPS_S'],
                    storeIDByXML: storeData[i]['XML_ID'],
                    storeCity: storeData[i]['CITY'],
                    storeAddress: storeData[i]['ADDRESS'],
                    storeGPSCoords: [storeData[i]['GPS_N'], storeData[i]['GPS_S']],
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: '/about/address/pointer.png',
                    iconImageSize: [30, 42],
                    iconImageOffset: [-3, -42],
                });
            storesPlacemarkCollection.add(storesPlacemarks[i]);
        }
        myMap.geoObjects.add(storesPlacemarkCollection);

        // ****************************************
        // клик по метке на карте
        // модальное окно с предложением
        // "БРОНИРОВАТЬ ИЗДЕЛИЕ" в этом магазине
        // ****************************************
        myMap.geoObjects.events.add('click', function (e) {
            var object = e.get('target'),
                position = e.get('globalPixelPosition');

            var storeIDByXML = object.properties.get('storeIDByXML');
            var storePointCoords = object.properties.get('storeGPSCoords');
            $('.store-item').removeClass('store-item--active');
            $('#store-item-id' + storeIDByXML).addClass('store-item--active');
            myMap.setCenter(storePointCoords, STORE_POINT_FOCUS_ZOOM, {
                checkZoomRange: true
            });
        });






        $('#store-list-combobox').bind('change', function () {
            var option = $('#store-list-combobox option:selected');
            // var coords = option.attr('value').split(',');
            var storeCurrentCityName = option.attr('value');

            $('.store-item').removeClass('store-item--active');

            ymaps.geocode(storeCurrentCityName, {
                results: 1
            }).then(function (res) {
                // Выбираем первый результат геокодирования.
                var firstGeoObject = res.geoObjects.get(0),
                // Координаты геообъекта.
                    coords = firstGeoObject.geometry.getCoordinates(),
                // Область видимости геообъекта.
                    bounds = firstGeoObject.properties.get('boundedBy');

                // Масштабируем карту на область видимости геообъекта.
                myMap.setBounds(bounds, {
                    // Проверяем наличие тайлов на данном масштабе.
                    checkZoomRange: true
                });
            });
        });

        $('#store-list-combobox').trigger('change');


        ymaps.geocode(storeCurrentCityName, {
            results: 1
        }).then(function (res) {
            // Выбираем первый результат геокодирования.
            var firstGeoObject = res.geoObjects.get(0),
            // Координаты геообъекта.
                coords = firstGeoObject.geometry.getCoordinates(),
            // Область видимости геообъекта.
                bounds = firstGeoObject.properties.get('boundedBy');

            // Масштабируем карту на область видимости геообъекта.
            myMap.setBounds(bounds, {
                // Проверяем наличие тайлов на данном масштабе.
                checkZoomRange: true
            });
        });
        console.log('585');
        console.log(storeCurrentCityName);
    };
}