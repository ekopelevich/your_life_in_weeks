var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

gulp.task('default', ['styles', 'minify-js'], function() {
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('javascripts/**/*.js',['minify-js']);
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('minify-js', function () {
  gulp.src('javascripts/**/*.js')
      .pipe(minify())
      .pipe(gulp.dest('build/javascripts/'));
});
