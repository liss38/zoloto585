// 
// 
// 
// джейсонификация
// mainNavData - структура из файла main-nav-data.js
// mainNavData2JSON - содержит структуру mainNavData прегнанную в JSON-строку
// далее эту JSON-строку вставляем в data-атрибут html-элемента с классом '.alt-main-nav'
// 
var mainNavData2JSON = JSON.stringify(mainNavData);
$('.alt-main-nav').attr('data-main-nav', mainNavData2JSON);



// 
// 
// 
// 
// 
// 
// 
// ищем элемент с css-классом '.alt-main-nav'
// у этого элемента берём значение data-атрибута 'data-main-nav'
// парсим эту JSON-строку в нормальный JavaScript-объект
// этот объект/структуру называем mainNavData
// 
// объявляем переменную mainNavBanners, которая представляет
// массив из html-кусков групп баннеров для каждой вкладки
// 8 вкладок = 8 баннеров
// 
var mainNavData = JSON.parse($('.alt-main-nav').attr('data-main-nav'));
var mainNavBanners = [];



// 
// 
// 
// 
// 
// функция, которая делает html-шаблонизацию для объекта/струтктуры mainNavData
// и записвает этот html с данными в массив mainNavBanners
// 
function mainNavBannersHTMLWrapper () {
	mainNavData.forEach(function (item, index, array) {
		var bannersHTML = '';

		if(item['nav-banners'] !== undefined) {
			Array.prototype.forEach.call(item['nav-banners']['nav-banners-item'], function (item, index, array) {
				var image = '<a class="nav-banners-link" href="' + item['href'] + '"><img class="nav-banners-link__img" src="' + item['img'] + '" alt=""></a>';
				var button = item['button'] !== false ? ('<a class="b-button nav-banners-button" href="' + item['href'] + '">' + item['button'] + '</a>') : '';
				var banner = '<div class="nav-banners__item  nav-banners__item--type-' + item['type'] + '">' + image + button + '</div>';

				bannersHTML += banner;
			});
			mainNavBanners[item['tab-number']] = '<div class="nav-banners  nav-banners--type-' + item['nav-banners']['nav-banners-type'] + '">' + bannersHTML + '</div>';
		}
	});

	return mainNavBanners;
}



// 
// 
// 
// 
// функция, которая вставляет в html-разметку главной навигации на странице 
// сгенерированную разметку баннеров
// каждая группа баннеров вставляется в свой лист
// 
function addMainNavBanners() {
	if($('.nav-banners').length === 0) {
		mainNavBanners.forEach(function (item, index, array) {
			$('.main-nav__item[data-inner-list=' + index + ']').append(item);
		});
	}
}


// 
// 
// 
// 
// функция, котрая удаляет баннеры из вкладок
// 
function removeMainNavBanners() {
	$('.nav-banners').remove();
}




// 
// 
// 
// 
// 
// функция, которая устанавливает значение для data-атрибутов фонов и фоновых цветов
// выпадающих вкладок главной навигации
// 
function setMainNavBGImages() {
	mainNavData.forEach(function (item, index, array) {
		$('.alt-main-nav__item[data-inner-list=' + item['tab-number'] + ']').attr('data-inner-background-image', item['inner-background-image']);
		$('.alt-main-nav__item[data-inner-list=' + item['tab-number'] + ']').attr('data-inner-background-color', item['inner-background-color']);
		$('.alt-main-nav__item[data-inner-list=' + item['tab-number'] + ']').attr('data-outer-background-image', item['outer-background-image']);
		$('.alt-main-nav__item[data-inner-list=' + item['tab-number'] + ']').attr('data-outer-background-color', item['outer-background-color']);
		console.log(item['tab-number']);
	});
}





// 
// 
// 
// инициализация баннеров
// в главной навигации
// 
mainNavBannersHTMLWrapper();
setMainNavBGImages();

// убираю старые значения которые в верстке есть, в проде убрать строку
// removeMainNavBanners(); 

// адаптайзер
if(parseInt(window.innerWidth) > 1024) {
	addMainNavBanners();
} else {
	removeMainNavBanners();
}

$(window).on('resize', function () {
	if(parseInt(window.innerWidth) > 1024) {
		addMainNavBanners();
	} else {
		removeMainNavBanners();
	}
});