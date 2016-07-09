import gulp from 'gulp';
import bro from 'gulp-bro';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import watch from 'gulp-watch';

gulp.task('js', () =>
  gulp.src('app/index.js')
    .pipe(bro({
      transform: ['babelify'],
      debug: true
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public/js'))
);

gulp.task('css', () =>
  gulp.src('app/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public/css'))
);

gulp.task('copyassets', () =>
  gulp.src('assets/**/*.*')
    .pipe(gulp.dest('public'))
);

gulp.task('prod-js', () =>
  gulp.src('app/index.js')
    .pipe(bro({
      transform: ['babelify'],
      debug: false
    }))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('public/js'))
);

gulp.task('prod-css', () =>
  gulp.src('app/styles/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('public/css'))
);

gulp.task('watch', ['js', 'css'], () => {
  watch('app/**/*.js', () => gulp.start('js'));
  watch('app/**/*.scss', () => gulp.start('css'));
  watch('assets/**/*.*', () => gulp.start('copyassets'));
});

gulp.task('default', ['js', 'css', 'copyassets']);
gulp.task('build-prod', ['prod-js', 'prod-css', 'copyassets']);