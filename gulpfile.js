var gulp = require('gulp'),
  inject = require('gulp-inject'),
  bowerFiles = require('main-bower-files'),
  es = require('event-stream');

gulp.task('inject', function () {
  //var cssFiles = gulp.src('./src/**/*.less')
  //  .pipe(less())
  //  .pipe(gulp.dest('./app'));

  return gulp.src('./index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(inject(es.merge(
      gulp.src('./app/**/*.js', {read: false})
      //,cssFiles
    )))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['inject']);