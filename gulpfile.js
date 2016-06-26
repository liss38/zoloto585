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



// main.css
gulp.task('make-main-css', function () {
	return gulp.src('development/less/_main.less')
		// .pipe(concat('main.less'))
		.pipe(less())
		.pipe(gulp.dest('development/less'));
});





// pcard-description.css
gulp.task('make-pcard-css', function () {
	return gulp.src('development/less/_pcard--unstable.less')
		.pipe(less())
		.pipe(rename('pcard_description.css'))
		.pipe(gulp.dest('development/css'));
});







/*gulp.task('cssmain', function () {
	return gulp.src(dev_css + 'main.css')
		.pipe(cssmin())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(dev_css));
});*/







// Make "DEVELOPMENT"
/*gulp.task('make-dev', ['lessmain', 'cssmain'],  function () {
	// return gulp.dest(dev_css);
	console.log('dev-OK');
});*/


// Make "PCARD"
/*gulp.task('make-pcard', function () {
	return gulp.src(dev_lesspcard)
		.pipe(concat('pcard.less'))
		.pipe(less())
		.pipe(rename('pcard-motivate.css'))
		.pipe(gulp.dest(dev_css));
});*/



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