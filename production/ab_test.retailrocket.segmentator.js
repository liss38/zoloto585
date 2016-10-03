/*
	=====================
	# Зависиомсти: https://github.com/RetailRocket/RetailRocket.Segmentator
	# Автор: Макс Сальников
	# email: liss38@yandex.ru
	# skype: liss38
	# старт: 30.09.2016г.
	=====================
*/


/*
	BlackFriday, сквозной баннер в шапке, A/B тест

	1: баннер показывается
	2: баннер скрывается
*/
var numberOfSegments = 2;
var visitorSegment = retailrocket.segmentator.getVisitorSegment(numberOfSegments);
var variation = 'BlackFriday, сквозной баннер в шапке, группа: ' + visitorSegment;

$(function () {
	if (visitorSegment == 2) {
		$('.header-promo-banner').addClass('h-hidden'); // на сайте выше по коду должна быть подключена библиотека jQuery
	}
	/*else if (visitorSegment == 2) {
		$.('.button_ver2').css('display', 'block'); // на сайте выше по коду должна быть подключена библиотека jQuery
	}*/

	console.log(variation);
});