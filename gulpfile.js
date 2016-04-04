var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');

gulp.task('jade', function() {

	gulp.src('source/jade/*.jade')
		.pipe(jade({ pretty:true }))
		.pipe(gulp.dest('build/'));
});

gulp.task('less', function() {

	gulp.src('source/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('build/'));
});

gulp.task('scripts', function() {

	gulp.src('source/scripts/*.js')
		.pipe(gulp.dest('build/'));
});

gulp.task('default', ['jade', 'less', 'scripts']);

module.exports = gulp;