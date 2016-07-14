var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	zip = require('gulp-zip');
	fileinclude = require('gulp-file-include');


/*gulp.task('lessmain', function () {
	return gulp.src(dev_lessmain)
		.pipe(concat('main.less'))
		.pipe(less())
		.pipe(rename('main.css'))
		.pipe(gulp.dest(dev_css));
});*/





var dev_or_prod = '_2dev'; // '_2dev' либо '_2prod', переключатель между версией на продакшн('prod') и версией на тест/показ('dev')

// main.css
gulp.task('make-main-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/main.less', 'development/less/_external.less'])
		.pipe(concat('main.temp.less'))
		.pipe(less())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('development/css'));
});


// index.css
gulp.task('make-index-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/index.less'])
		.pipe(concat('index.temp.less'))
		.pipe(less())
		.pipe(rename('index.css'))
		.pipe(gulp.dest('development/css'));
});


// pcard.css
gulp.task('make-pcard-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/pcard.less'])
		.pipe(concat('pcard.temp.less'))
		.pipe(less())
		.pipe(rename('pcard.css'))
		.pipe(gulp.dest('development/css'));
});


// catalog.css
gulp.task('make-catalog-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_mix.less', 'development/less/catalog.less'])
		.pipe(concat('catalog.temp.less'))
		.pipe(less())
		.pipe(rename('catalog.css'))
		.pipe(gulp.dest('development/css'));
});



// make-dev
gulp.task('make-dev', ['make-main-css', 'make-index-css', 'make-pcard-css', 'make-catalog-css'], function () {
	return gulp.src(['development/css/*.css', '!development/css/*.min.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('development/css'));
});







// msalnikov.min.css
// var dev_or_prod = '_2prod';
gulp.task('make-msalnikov', ['make-main-css', 'make-index-css', 'make-pcard-css'], function () {
	return gulp.src(['development/css/*.css', '!development/css/*.min.css'])
		.pipe(concat('msalnikov.css'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
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
gulp.task('make-index-page-full', ['make-header-block'], function () {
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