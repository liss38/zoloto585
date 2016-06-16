var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	zip = require('gulp-zip');


var dev_ = 'development/',
	dev_less = dev_ + 'less/',
	dev_lessmain = [
		dev_less + '@path-local.less',
		dev_less + '@breakpoints.less',
		dev_less + '@fonts.less',
		dev_less + 'fonts.less',
		dev_less + 'grid.less',
		dev_less + 'forms.less',
		// dev_less + 'header-top.less',
		dev_less + 'header-top/_import.less',

		dev_less + 'header-middle.less',
		dev_less + 'header-bottom.less',
		dev_less + 'main-nav.less',
		// dev_less + 'header-nav.less',

		// для touchversion сайта
		dev_less + 'touchversion__ears.less',
		dev_less + 'touchversion__nav.less',

		// stub
		dev_less + 'stub__index-sections.less',
	],
	dev_css = dev_ + 'css/';


var prod_ = 'production/';


/*gulp.task('cssmain', function () {
	return gulp.src(dev_lessmain)
		.pipe(concat('all.less'))
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(dev_css));
});*/

gulp.task('lessmain', function () {
	return gulp.src(dev_lessmain)
		.pipe(concat('main.less'))
		.pipe(less())
		.pipe(rename('main.css'))
		.pipe(gulp.dest(dev_css));
});

gulp.task('cssmain', function () {
	return gulp.src(dev_css + 'main.css')
		.pipe(cssmin())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(dev_css));
});

// Make "DEVELOPMENT"
gulp.task('make-dev', ['lessmain', 'cssmain'],  function () {
	// return gulp.dest(dev_css);
	console.log('dev-OK');
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