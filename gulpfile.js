var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  bowerFiles = require('main-bower-files'),
  es = require('event-stream');

gulp.task('inject', function () {
  var cssFiles = gulp.src('./app/assets/css/*.css', {read: false}),
  jsFiles = gulp.src('./app/**/*.js', {read: false});

  return gulp.src('./index.html')
    .pipe($.inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe($.inject(es.merge(
      jsFiles,
      cssFiles
    )))
    .pipe(gulp.dest('./'));
});

gulp.task('less', function () {
  return gulp.src('./app/assets/less/app.less')
    .pipe($.less())
    .pipe(gulp.dest('./app/assets/css'))
});

gulp.task('watch', ['less'], function() {
  gulp.watch('./app/assets/less/*.less', ['less']);
});

gulp.task('default', ['inject']);