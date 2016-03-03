var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var source = require('vinyl-source-stream');
var htmlreplace = require('gulp-html-replace');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require("babelify")
var source = require('vinyl-source-stream');

gulp.task('es6', function () {
	browserify('app/js/app.js')
		.transform(babelify, {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest(''));
});

gulp.task('sass', function () {
	return gulp.src('app/scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			basseDir: 'app'
		},
	});
});

gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/**/*.js', ['es6']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});