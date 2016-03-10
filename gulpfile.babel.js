import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import watch from 'gulp-watch';

gulp.task('js:build', () => {
  mkdirp.sync('.tmp/js');
  return browserify('app/index.js')
    .transform(babelify)
    .bundle()
    .pipe(fs.createWriteStream('.tmp/js/app.js'));
});

gulp.task('js:copy-dist', ['js:build'], () => {
  mkdirp.sync('dist/js');
  return gulp.src(['.tmp/js/*.js'])
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('js', ['js:copy-dist']);

gulp.task('watch', () => {
  watch('app/**/*.js', () => gulp.start('js'));
});

gulp.task('default', ['js']);