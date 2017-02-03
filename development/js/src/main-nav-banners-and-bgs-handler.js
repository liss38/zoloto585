

// джейсонификация
var mainNavData2JSON = JSON.stringify(mainNavData);
$('.alt-main-nav').attr('data-main-nav', mainNavData2JSON);


// обработка нави
var mainNavData = JSON.parse($('.alt-main-nav').attr('data-main-nav'));
var mainNavBanners = [];



// шаблонизация баннеров из JSON в массив
// html-кусков, "html-кусок" - группа баннеров и их обёртка, 
// которые размещаются на одной вкладке

function mainNavBannersHTMLWrapper () {
	mainNavData.forEach(function (item, index, array) {
		var bannersHTML = '';

		Array.prototype.forEach.call(item['nav-banners']['nav-banners-item'], function (item, index, array) {
			var image = '<a class="nav-banners-link" href="' + item['href'] + '"><img class="nav-banners-link__img" src="' + item['img'] + '" alt=""></a>';
			var button = item['button'] !== false ? ('<a class="b-button nav-banners-button" href="' + item['href'] + '">' + item['button'] + '</a>') : '';
			var banner = '<div class="nav-banners__item  nav-banners__item--type-' + item['type'] + '">' + image + button + '</div>';

			bannersHTML += banner;
		});
		mainNavBanners[item['tab-number']] = '<div class="nav-banners  nav-banners--type-' + item['nav-banners']['nav-banners-type'] + '">' + bannersHTML + '</div>';
	});

	return mainNavBanners;
}

function addMainNavBanners() {
	mainNavBanners.forEach(function (item, index, array) {
		$('.main-nav__item[data-inner-list=' + index + ']').append(item);
	});
}

// функция, котрая удаляет баннеры из вкладок
function removeMainNavBanners() {
	$('.nav-banners').remove();
}

function setMainNavBGImages() {
	mainNavData.forEach(function (item, index, array) {
		$('.alt-main-nav__item[data-inner-list=' + item['tab-number'] + ']')
			.attr('data-inner-background-image', item['inner-background-image'])
			.attr('data-inner-background-color', item['inner-background-color'])
			.attr('data-outer-background-image', item['inner-background-image'])
			.attr('data-outer-background-color', item['inner-background-color'])
	});
}

mainNavBannersHTMLWrapper ();



// убираю старые значения которые в верстке есть, в проде убрать строку
removeMainNavBanners(); 




// адаптайзер
// 

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