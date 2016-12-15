var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	zip = require('gulp-zip');
	fileinclude = require('gulp-file-include');






var dev_or_prod = '_2dev'; // префикс для dev-версии
// var dev_or_prod = '_2prod'; // префикс для prod-версии

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
gulp.task('make-css-prod', ['make-main-css', 'make-index-css', 'make-catalog-css', 'make-pcard-css', 'make-regcard-css', 'make-404-css', 'make-mycrutch-css', 'make-after-all-css'], function () {
	return gulp.src(['production/zoloto/css/*.css', '!production/zoloto/css/*.min.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(gulpDestFolder));
});




// msalnikov.min.css для ПРОДА
gulp.task('make-msalnikov-css', function () {
	return gulp.src(['production/zoloto/css/main.min.css', 'production/zoloto/css/index.min.css', 'production/zoloto/css/catalog.min.css', 'production/zoloto/css/pcard.min.css', 'production/zoloto/css/registration-card.min.css', 'production/zoloto/css/page-404.min.css', 'production/zoloto/css/after_all.min.css', 'production/zoloto/css/mycrutch.min.css'])
		.pipe(concat('msalnikov.min.css'))
		// .pipe(cssmin())
		// .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(gulpDestFolder));
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

// cataloп page
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