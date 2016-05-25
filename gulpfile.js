var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename');


var dev_ = 'development/',
	dev_less = dev_ + 'less/',
	dev_lessmain = [
		dev_less + '@breakpoints.less',
		dev_less + '@fonts.less',
		dev_less + 'fonts.less',
		dev_less + 'grid.less',
		dev_less + 'forms.less',
		dev_less + 'header.less',
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

gulp.task('cssmain', ['lessmain'], function () {
	return gulp.src(dev_css + 'main.css')
		.pipe(cssmin())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest(dev_css));
});