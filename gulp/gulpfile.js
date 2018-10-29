var syntax        = 'sass'; // Syntax: sass or scss;

var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    sass          = require('gulp-sass'),
    watch         = require('gulp-watch')


var sass_files = '../sass/**.scss';

gulp.task('sass', function() {
	return gulp.src(sass_files)
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('../css'));
});


gulp.task('watch', ['sass'], function() {
	gulp.watch(sass_files, ['default']);
});

gulp.task('default', ['sass']);
