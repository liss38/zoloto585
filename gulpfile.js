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
gulp.task('make-jqueryteam', function () {
	return gulp.src(jQueryTeamOrderList)
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(concat('jqueryteam.js'))
		.pipe(uglifyjs())
		.pipe(rename('jqueryteam.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('development/js/'));
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

	// latest legacy
	'development/less/scaffolding/legacy__latest.less',

	// system
	'development/less/scaffolding/system__helpers.less',
];

// scaffolding z585-all-css import list
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



// msalnikov.min.css
var msalnikovScaffoldingList = [

	/* ******************************************* */
	/* одно из двух должно быть закомментировано */
	'development/less/_2prod.less', // для прода
	// 'development/less/_2dev.less', // для локальной сборки
	/* ******************************************* */

	'development/less/scaffolding/mixins.less',
	'development/less/scaffolding/layout__fonts.less',

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

	// latest legacy
	'development/less/scaffolding/legacy__latest.less',

	// system
	'development/less/scaffolding/system__helpers.less',
];

// scaffolding msalnikov-list
gulp.task('msalnikov-css:scaff', function () {
	return gulp.src(msalnikovScaffoldingList)
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(concat('msalnikov-list.less'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('development/less/'));
});

// build msalnikov.min.css
gulp.task('msalnikov-css:build', function () {
	return gulp.src('development/less/msalnikov-list.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename('msalnikov.min.css'))
		.pipe(gulp.dest('production/zoloto/css'));
});