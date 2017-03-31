var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	zip = require('gulp-zip');
	fileinclude = require('gulp-file-include'),
	order = require('gulp-order'),
	uglifyjs = require('gulp-uglifyjs');
var mainBowerFiles = require('gulp-main-bower-files');
var sourcemaps = require('gulp-sourcemaps');






// var dev_or_prod = '_2dev'; // префикс для dev-версии
var dev_or_prod = '_2prod'; // префикс для prod-версии

if(dev_or_prod === '_2prod') gulpDestFolder = 'production/zoloto/css';
else if(dev_or_prod === '_2dev') gulpDestFolder = 'development/css';

gulp.task('make-css-ext', function () {
	return gulp.src('development/less/_ext.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename('ext.min.css'))
		.pipe(gulp.dest(gulpDestFolder));
});

// main.css
gulp.task('make-main-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/main.less'])
		.pipe(concat('main.temp.less'))
		.pipe(less())
		.pipe(rename('main.css'))
		.pipe(gulp.dest(gulpDestFolder));
});


// index.css
gulp.task('make-index-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/index.less'])
		.pipe(concat('index.temp.less'))
		.pipe(less())
		.pipe(rename('index.css'))
		.pipe(gulp.dest(gulpDestFolder));
});


// pcard.css
gulp.task('make-pcard-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/pcard.less'])
		.pipe(concat('pcard.temp.less'))
		.pipe(less())
		.pipe(rename('pcard.css'))
		.pipe(gulp.dest(gulpDestFolder));
});


// catalog.css
gulp.task('make-catalog-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/catalog.less'])
		.pipe(concat('catalog.temp.less'))
		.pipe(less())
		.pipe(rename('catalog.css'))
		.pipe(gulp.dest(gulpDestFolder));
});

// registration-card.css
gulp.task('make-regcard-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/registration-card.less'])
		.pipe(concat('registration-card.temp.less'))
		.pipe(less())
		.pipe(rename('registration-card.css'))
		.pipe(gulp.dest(gulpDestFolder));
});


// 404 page
gulp.task('make-404-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/page-404.less'])
		.pipe(concat('page-404.temp.less'))
		.pipe(less())
		.pipe(rename('page-404.css'))
		.pipe(gulp.dest(gulpDestFolder));
});


// user cabinet
gulp.task('make-ucab-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/ucab.less'])
		.pipe(concat('ucab.temp.less'))
		.pipe(less())
		.pipe(rename('ucab.css'))
		.pipe(gulp.dest(gulpDestFolder));
});






// after_all.css
// классы хэлперы
gulp.task('make-after-all-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/after_all.less'])
		.pipe(concat('after_all.temp.less'))
		.pipe(less())
		.pipe(rename('after_all.css'))
		.pipe(gulp.dest(gulpDestFolder));
});


// костыль для продакшн наложения с новой вёрсткой
gulp.task('make-mycrutch-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/mycrutch.less'])
		.pipe(concat('mycrutch.temp.less'))
		.pipe(less())
		.pipe(rename('mycrutch.css'))
		.pipe(gulp.dest(gulpDestFolder));
});


// make-dev
gulp.task('make-dev', ['make-css-ext', 'make-main-css', 'make-index-css', 'make-pcard-css', 'make-catalog-css', 'make-regcard-css', 'make-404-css', 'make-ucab-css', 'make-mycrutch-css', 'make-after-all-css'], function () {
	return gulp.src(['development/css/*.css', '!development/css/*.min.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(gulpDestFolder));
});




/*
	2PROD
*/
// make-prod
gulp.task('make-css-prod', ['make-main-css', 'make-index-css', 'make-catalog-css', 'make-pcard-css', 'make-regcard-css', 'make-404-css', 'make-ucab-css', 'make-mycrutch-css', 'make-after-all-css'], function () {
	return gulp.src(['production/zoloto/css/*.css', '!production/zoloto/css/*.min.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(gulpDestFolder));
});




// msalnikov.min.css для ПРОДА
gulp.task('make-msalnikov-css', function () {
	return gulp.src(['production/zoloto/css/main.min.css', 'production/zoloto/css/index.min.css', 'production/zoloto/css/catalog.min.css', 'production/zoloto/css/pcard.min.css', 'production/zoloto/css/registration-card.min.css', 'production/zoloto/css/page-404.min.css', 'production/zoloto/css/ucab.min.css', 'production/zoloto/css/after_all.min.css', 'production/zoloto/css/mycrutch.min.css'])
		.pipe(concat('msalnikov.min.css'))
		// .pipe(cssmin())
		// .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(gulpDestFolder));
});





/**
 * @TODO
 * сдеалть сборку по новой LESS-структуре
 */
// new ***
gulp.task('make-msalnikov-list', function () {
	return gulp.src('development/less/msalnikov-list.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename({
			suffix: '.min',
			basename: 'msalnikov',
		}))
		.pipe(gulp.dest('production/zoloto/css'));
});











/*
	HTML INCLUDE 4 
	"HEADER"
*/
// html include header-top
gulp.task('html-include-header-top', function () {
	return gulp.src('development/htmls/blocks/header/top/_main.inc.html')
		.pipe(fileinclude({
			prefix: '@@'
		}))
		.pipe(rename({
			basename: 'top'
		}))
		.pipe(gulp.dest('development/htmls/blocks/header'));
});

// html include header-middle
gulp.task('html-include-header-middle', function () {
	return gulp.src('development/htmls/blocks/header/middle/_main.inc.html')
		.pipe(fileinclude({
			prefix: '@@'
		}))
		.pipe(rename({
			basename: 'middle'
		}))
		.pipe(gulp.dest('development/htmls/blocks/header'));
});

// html include header-bottom
gulp.task('html-include-header-bottom', function () {
	return gulp.src('development/htmls/blocks/header/bottom/_main.inc.html')
		.pipe(fileinclude({
			prefix: '@@'
		}))
		.pipe(rename({
			basename: 'bottom'
		}))
		.pipe(gulp.dest('development/htmls/blocks/header'));
});

// make header block
gulp.task('make-header-block', ['html-include-header-top', 'html-include-header-middle', 'html-include-header-bottom'], function () {
	return gulp.src(['development/htmls/blocks/header/top.html', 'development/htmls/blocks/header/middle.html', 'development/htmls/blocks/header/bottom.html'])
		.pipe(concat('header.html'))
		.pipe(gulp.dest('development/htmls/blocks'));
});






/*
	HTML INCLUDE 4 
	"CATALOG PAGE"
*/

// html include catalog-filter
gulp.task('html-include-catalog-filter', function () {
	return gulp.src('development/htmls/blocks/catalog/filter/main.inc.html')
		.pipe(fileinclude({
			prefix: '@@'
		}))
		.pipe(rename({
			basename: 'filter'
		}))
		.pipe(gulp.dest('development/htmls/blocks/catalog'));
});

// catalog page
gulp.task('make-catalog-page', ['html-include-catalog-filter'], function () {
	return gulp.src('development/htmls/catalog.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'catalog'
		}))
		.pipe(gulp.dest('development'));
});

// cataloп page FULL
gulp.task('make-catalog-page-full', ['make-header-block', 'html-include-catalog-filter'], function () {
	return gulp.src('development/htmls/catalog.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'catalog'
		}))
		.pipe(gulp.dest('development'));
});






/*
	HTML INCLUDE 4 
	"INDEX PAGE"
*/
// index-filter
gulp.task('make-index-filter', function () {
	return gulp.src('development/htmls/blocks/index/filter/_main.inc.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'filter'
		}))
		.pipe(gulp.dest('development/htmls/blocks/index'));
});


// index page
gulp.task('make-index-page', function () {
	return gulp.src('development/htmls/index.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'index'
		}))
		.pipe(gulp.dest('development'));
});

// index page FULL
gulp.task('make-index-page-full', ['make-header-block', 'make-index-filter'], function () {
	return gulp.src('development/htmls/index.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'index'
		}))
		.pipe(gulp.dest('development'));
});


/*
	HTML INCLUDE 4 
	"PRODUCT CARD PAGE"
*/
// pcard page
gulp.task('make-pcard-page', function () {
	return gulp.src('development/htmls/product-card.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'product-card'
		}))
		.pipe(gulp.dest('development'));
});

// pcard page FULL
gulp.task('make-pcard-page-full', ['make-header-block', 'make-pcard-page'], function () {
	return gulp.src('development/htmls/product-card.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'product-card'
		}))
		.pipe(gulp.dest('development'));
});





/*
	HTML INCLUDE 4 
	"USER CABINET"
*/

// USER-CABINET page FULL
gulp.task('make-ucab-page-full', ['make-header-block'], function () {
	return gulp.src('development/htmls/user-cabinet.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'user-cabinet'
		}))
		.pipe(gulp.dest('development'));
});

// USER-REGISTRATION page FULL
gulp.task('make-ureg-page-full', ['make-header-block'], function () {
	return gulp.src('development/htmls/user-registration.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'user-registration'
		}))
		.pipe(gulp.dest('development'));
});

// USER-LOGIN page FULL
gulp.task('make-ulog-page-full', ['make-header-block'], function () {
	return gulp.src('development/htmls/user-login.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'user-login'
		}))
		.pipe(gulp.dest('development'));
});

// USER-PASSWORD-RECOVERY page FULL
gulp.task('make-urec-page-full', ['make-header-block'], function () {
	return gulp.src('development/htmls/user-recovery.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'user-recovery'
		}))
		.pipe(gulp.dest('development'));
});


// USER-CABINET page FULL
gulp.task('make-ucab-all-page-full', ['make-ucab-page-full', 'make-ureg-page-full', 'make-ulog-page-full', 'make-urec-page-full'], function () {
	return gulp.src('development/htmls/user-cabinet.tmpl.html')
		.pipe(fileinclude({
			prefix: '@@',
			// basepath: '/development/'
		}))
		.pipe(rename({
			basename: 'user-cabinet'
		}))
		.pipe(gulp.dest('development'));
});











/*
	JS
*/
gulp.task('make-msalnikov-js', function () {
	return gulp.src(['development/js/inc/global.forms.js', 'development/js/inc/header.geo-form.js', 'development/js/inc/header.main-nav.js', 'development/js/inc/index.filter.js', 'development/js/inc/catalog.filter.js'])
		.pipe(concat('msalnikov.js'))
		.pipe(gulp.dest('development/js'));
});



// jQuery Team
var jQueryTeamPath = 'development/js/jqueryteam/', // 'js/jqueryteam_in/''
	jQueryTeamOrderList = [
		jQueryTeamPath + 'jquery-1.11.1.min.js',
		// jQueryTeamPath + 'jquery-1.11.0.min.js',
		jQueryTeamPath + 'owl.carousel.js',
		jQueryTeamPath + 'select.js',
		jQueryTeamPath + 'jquery-ui.js',
		jQueryTeamPath + 'jquery.ui.touch-punch.min.js',
		jQueryTeamPath + 'jquery.ui.datepicker-ru.js',
		jQueryTeamPath + 'jquery.touchSwipe.min.js',
		jQueryTeamPath + 'jquery.zoom.js',
		jQueryTeamPath + 'fotorama.js',
		jQueryTeamPath + 'jquery.mousewheel.js',
		jQueryTeamPath + 'perfect-scrollbar.js',
		jQueryTeamPath + 'jquery.magnific-popup.js',
		jQueryTeamPath + 'jquery.plugin.js',
		jQueryTeamPath + 'jquery.countdown.js',
		jQueryTeamPath + 'jquery.countdown-ru.js',
		jQueryTeamPath + 'jquery.inputmask.js',
		jQueryTeamPath + 'jquery.validate.min.js',
		jQueryTeamPath + 'jquery.cookie.js',
		jQueryTeamPath + 'jquery.jscrollpane.min.js',
		jQueryTeamPath + 'jquery.formstyler.min.js',
		jQueryTeamPath + 'jquery.session.js',
		jQueryTeamPath + 'jquery.easydropdown.js',
		jQueryTeamPath + 'jquery.maskedinput.min.js',
		jQueryTeamPath + 'selectivizr-min.js',
	];
/*gulp.task('make-jqueryteam', function () {
	return gulp.src(['development/js/jqueryteam/*.js', '!development/js/jqueryteam/jquery-1.11.0.min.js'])
		.pipe(order(jQueryTeamOrderList))
		.pipe(concat('jqueryteam.js'))
		.pipe(uglifyjs())
		.pipe(rename('jqueryteam.min.js'))
		.pipe(gulp.dest('development/js/'));
});*/
gulp.task('make-jqueryteam', function () {
	return gulp.src(jQueryTeamOrderList)
		/*.pipe(order([
			'development/js/jqueryteam/jquery-1.11.1.min.js',
			'development/js/jqueryteam/owl.carousel.js',
		]))*/
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(concat('jqueryteam.js'))
		.pipe(uglifyjs())
		.pipe(rename('jqueryteam.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('development/js/'));
});











// CSS NAMESPACE
gulp.task('namespace', function () {
	return gulp.src('development/less/**/.NAMESPACE')
		.pipe(concat('all.NAMESPACE'))
		.pipe(gulp.dest('about'));
});






// ZIP
var zip_src_1 = 'no_build/zoloto585__catalog2/',
	zip_files_1 = [zip_src_1 + '**/*.*', '!' + zip_src_1 + 'catalog_builder.css', '!' + zip_src_1 + 'grid.css'],
	zip_name_1 = 'zoloto585__catalog2.zip',
	zip_dest_1 = 'archives/';

gulp.task('zip', function () {
	return gulp.src(zip_files_1)
		.pipe(zip(zip_name_1))
		.pipe(gulp.dest(zip_dest_1));
});




/*
	SLIM-PROJECT
	
	CSS SLIM
*/
gulp.task('slim-index-css', function () {
	return gulp.src(['development/less/_2prod.less', 'development/less/_mix.less', 'development/less/slim.index-page.less'])
		.pipe(concat('index.temp.less'))
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename('slim.index-page.min.css'))
		.pipe(gulp.dest('production/zoloto/css/slim'));
});























/*
	========================
	===  LESS2CSS tasks  ===
	========================
*/
gulp.task('z585-css-dev', function () {
	return gulp.src('development/css/src/z585_all--dev.less')
		.pipe(less())
		// .pipe(cssmin())
		.pipe(rename('z585_all--dev.css'))
		.pipe(gulp.dest('development/css/'));
});

gulp.task('z585-css-prod', function () {
	return gulp.src('development/css/src/z585_all--prod.less')
		.pipe(less())
		// .pipe(cssmin())
		.pipe(rename('z585_all.css'))
		.pipe(gulp.dest('development/css/'));
});

// минимизация, углификация, оптимизация
gulp.task('css-min', function () {
	return gulp.src(['development/css/*.css', '!development/css/*.min.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('development/css'));
});

// комбо с минификацией и на прод и на дев делает общий стилевой файл
gulp.task('z585-css', ['z585-css-dev', 'z585-css-prod'], function () {
	return gulp.src(['development/css/*.css', '!development/css/*.min.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('development/css'));
});




















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
// 
// 
// 
// 
// 
// 
// 
// 
// 
/*
 * *************
 * NEW GULP FILE
 * *************
 */


// z585-all-css
var z585AllScaffoldingList = [

	/* ******************************************* */
	/* одно из двух должно быть закомментировано */
	'development/less/_2prod.less', // для прода
	// 'development/less/_2dev.less', // для локальной сборки
	/* ******************************************* */

	'development/less/scaffolding/mixins.less',
	'development/less/scaffolding/layout__fonts.less',
	'development/less/scaffolding/layout__external.less',

	// старый css
	'development/less/scaffolding/legacy__all.less',

	'development/less/scaffolding/layout__grid.less',
	'development/less/scaffolding/layout__uikit.less',
	'development/less/scaffolding/layout__header.less',
	'development/less/scaffolding/layout__footer.less',
	// 
	// 
	// стили страниц
	'development/less/scaffolding/pages__index.less',
	'development/less/scaffolding/pages__product-card.less',
	'development/less/scaffolding/pages__catalog.less',
	'development/less/scaffolding/pages__page-404.less',
	'development/less/scaffolding/pages__user-cabinet.less',
	'development/less/scaffolding/pages__store.less',

	// system
	'development/less/scaffolding/system__helpers.less',

	// after-all
	// 'development/less/scaffolding/pages__.less',
	// shame-list
	// 'development/less/scaffolding/pages__.less',
	// 'development/less/scaffolding/pages__.less',
	// 'development/less/scaffolding/pages__.less',
];

// scaffolding z585-all-caa import list
gulp.task('z585-css:scaff', function () {
	return gulp.src(z585AllScaffoldingList)
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(concat('z585-all-list.less'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('development/less/'));
});

// build z585_all.min.css
gulp.task('z585-css:build', function () {
	return gulp.src('development/less/z585-all-list.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename('z585_all.min.css'))
		.pipe(gulp.dest(gulpDestFolder));
});