var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	zip = require('gulp-zip');


/*gulp.task('lessmain', function () {
	return gulp.src(dev_lessmain)
		.pipe(concat('main.less'))
		.pipe(less())
		.pipe(rename('main.css'))
		.pipe(gulp.dest(dev_css));
});*/





var dev_or_prod = '_2prod'; // '_2dev' либо '_2prod', переключатель между версией на продакшн('prod') и версией на тест/показ('dev')

// main.css
gulp.task('make-main-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_main.less'])
		.pipe(concat('main.temp.less'))
		.pipe(less())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('development/css'));
});


// index.css
gulp.task('make-index-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_index.less'])
		.pipe(less())
		.pipe(rename('index.css'))
		.pipe(gulp.dest('development/css'));
});


// pcard-description.css
gulp.task('make-pcard-css', function () {
	return gulp.src(['development/less/' + dev_or_prod + '.less', 'development/less/_pcard--unstable.less'])
		.pipe(less())
		.pipe(rename('pcard_description.css'))
		.pipe(gulp.dest('development/css'));
});



// make-dev
gulp.task('make-dev', ['make-main-css', 'make-index-css', 'make-pcard-css'], function () {
	return gulp.src('development/css/main.css')
		.pipe(cssmin())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('development/css'));
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