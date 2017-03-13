// переменные локализации
var z585Url = 'https://zoloto585.ru';

/*var baseHost = 'https://zoloto585.ru/';
var baseImageUrl = '/bitrix/templates/zoloto/images/';*/

var baseHost = 'http://localhost/zoloto585/development/';
var baseImageUrl = baseHost + 'img/';

var thingiesImageUrl = baseImageUrl + 'thingies/';
var bannersImageUrl = baseImageUrl + 'promo-banners/';

/*
	0 : "КАТАЛОГ"
	1 : "ОБРУЧАЛЬНЫЕ КОЛЬЦА"
	2 : "КОЛЬЦА"
	3 : "СЕРЬГИ"
	4 : "КУЛОНЫ"
	5 : "КОЛЬЕ и ЦЕПИ"
	6 : "ЧАСЫ"
	7 : "СЕРЕБРО"
	8 : "БИЖУТЕРИЯ"

 */


// 
// картинки фона вкладок:
// 
// 1: obruchalnye-kolca.jpg
// 
// 2: serebro-925-619-rublej.jpg
//    zoloto-375-999-rublej.jpg
//    
// 3: sergi.jpg
// 
// 4: kulony.jpg
// 
// 5: kole-i-cepi.jpg
// 
// 7: serebro__1.jpg
//    serebro__2.jpg
//    serebro__3.jpg
//    serebro__4.jpg
//    
// 8: bizhuteriya.jpg






// данные по нави
var mainNavData = [


		// "ОБРУЧАЛЬНЫЕ КОЛЬЦА"
		{
			'tab-number': 1,
			'tab-name': 'ОБРУЧАЛЬНЫЕ КОЛЬЦА',
			'tab-name-translit': 'obruchalnye-kolca',
			'tab-page-href': '/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/',
			'inner-background-image': 'none',
			'inner-background-color': 'inherit',
			'outer-background-image': 'none',
			'outer-background-color': 'inherit',
			'nav-banners': {
					'tab-number': 1,
					'nav-banners-type': 1,
					'nav-banners-item': [
						{ 'type': 6, 'href': '/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/', 'img': bannersImageUrl + 'obruchalnye-kolca.jpg', 'button': 'Обручальные кольца >' },
					]
			},
		},


		// "КОЛЬЦА"
		{
			'tab-number': 2,
			'tab-name': 'КОЛЬЦА',
			'tab-name-translit': 'kolca',
			'tab-page-href': '/catalog/yuvelirnye_izdeliya/kolca/',
			'inner-background-image': 'none',
			'inner-background-color': 'inherit',
			'outer-background-image': 'none',
			'outer-background-color': 'inherit',
			'nav-banners': {
					'tab-number': 2,
					'nav-banners-type': 1,
					'nav-banners-item': [
						{ 'type': 3, 'href': '/catalog/yuvelirnye_izdeliya/kolca/serebro-925-proby/', 'img': bannersImageUrl + 'serebro-925-619-rublej.jpg', 'button': 'Все кольца из серебра >' },
						{ 'type': 4, 'href': '/catalog/yuvelirnye_izdeliya/kolca/iz-zolota/', 'img': bannersImageUrl + 'zoloto-375-999-rublej.jpg', 'button': 'Все кольца из золота >' },
					]
			},
		},


		// "СЕРЬГИ"
		{
			'tab-number': 3,
			'tab-name': 'СЕРЬГИ',
			'tab-name-translit': 'sergi',
			'tab-page-href': '/catalog/yuvelirnye_izdeliya/sergi/',
			'inner-background-image': 'none',
			'inner-background-color': 'inherit',
			'outer-background-image': 'none',
			'outer-background-color': 'inherit',
			'nav-banners': {
					'tab-number': 3,
					'nav-banners-type': 1,
					'nav-banners-item': [
						{ 'type': 6, 'href': '/catalog/yuvelirnye_izdeliya/sergi/', 'img': bannersImageUrl + 'sergi-499-rublej.jpg', 'button': 'Смотреть все серьги >' },
					]
			},
		},


		// "КУЛОНЫ"
		{
			'tab-number': 4,
			'tab-name': 'КУЛОНЫ',
			'tab-name-translit': 'kulony',
			'tab-page-href': '/catalog/yuvelirnye_izdeliya/podveski/',
			'inner-background-image':'none',
			'inner-background-color': 'inherit',
			'outer-background-image': 'none',
			'outer-background-color': 'inherit',
			'nav-banners': {
					'tab-number': 4,
					'nav-banners-type': 2,
					'nav-banners-item': [
						{ 'type': 0, 'href': '/catalog/yuvelirnye_izdeliya/podveski/', 'img': bannersImageUrl + 'kulony.jpg', 'button': 'Смотреть все кулоны >' },
					]
			},
		},


		// "КОЛЬЕ и ЦЕПИ"
		{
			'tab-number': 5,
			'tab-name': 'КОЛЬЕ и ЦЕПИ',
			'tab-name-translit': 'kole-i-cepi',
			'tab-page-href': '/catalog/yuvelirnye_izdeliya/cepi_i_kole/',
			'inner-background-image':'none',
			'inner-background-color': 'inherit',
			'outer-background-image': 'none',
			'outer-background-color': 'inherit',
			'nav-banners': {
					'tab-number': 4,
					'nav-banners-type': 2,
					'nav-banners-item': [
						{ 'type': 0, 'href': '/catalog/yuvelirnye_izdeliya/cepi_i_kole/', 'img': bannersImageUrl + 'kole-i-cepi.jpg', 'button': 'Смотреть цепи и колье >' },
					]
			},
		},


		// "ЧАСЫ"
		{
			'tab-number': 6,
			'tab-name': 'ЧАСЫ',
			'tab-name-translit': 'chasy',
			'tab-page-href': '/catalog/chasy/',
			'inner-background-image': 'none',
			'inner-background-color': 'inherit',
			'outer-background-image': thingiesImageUrl + '/navi_bg_outer_6--3.jpg',
			'outer-background-color': 'inherit',
		},


		// "СЕРЕБРО"
		{
			'tab-number': 7,
			'tab-name': 'СЕРЕБРО',
			'tab-name-translit': 'serebro',
			'tab-page-href': '/catalog/yuvelirnye_izdeliya/serebro-925-proby/',
			'inner-background-image':'none',
			'inner-background-color': 'inherit',
			'outer-background-image': 'none',
			'outer-background-color': 'inherit',
			'nav-banners': {
					'tab-number': 7,
					'nav-banners-type': 3,
					'nav-banners-item': [
						{ 'type': 5, 'href': '/catalog/yuvelirnye_izdeliya/podveski-breloki-sharmy-s-karabinom/', 'img': bannersImageUrl + 'serebro__1.jpg', 'button': false },
						{ 'type': 5, 'href': '/catalog/yuvelirnye_izdeliya/podveski-breloki-sharmy-s-karabinom/', 'img': bannersImageUrl + 'serebro__2.jpg', 'button': false },
						{ 'type': 5, 'href': '/catalog/yuvelirnye_izdeliya/podveski-breloki-sharmy-s-karabinom/', 'img': bannersImageUrl + 'serebro__3.jpg', 'button': false },
						{ 'type': 5, 'href': '/catalog/yuvelirnye_izdeliya/podveski-breloki-sharmy-s-karabinom/', 'img': bannersImageUrl + 'serebro__4.jpg', 'button': false },
					]
			},
		},


		// "БИЖУТЕРИЯ"
		{
			'tab-number': 8,
			'tab-name': 'БИЖУТЕРИЯ',
			'tab-name-translit': 'bizhuteriya',
			'tab-page-href': '/catalog/bizhuteriya/',
			'inner-background-image':'none',
			'inner-background-color': 'inherit',
			'outer-background-image': 'none',
			'outer-background-color': 'inherit',
			'nav-banners': {
					'tab-number': 8,
					'nav-banners-type': 4,
					'nav-banners-item': [
						{ 'type': 0, 'href': '/catalog/bizhuteriya/', 'img': bannersImageUrl + 'bizhuteriya.jpg', 'button': false },
					]
			},
		},
	];