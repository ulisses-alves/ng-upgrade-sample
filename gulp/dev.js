let gulp = require('gulp')

gulp.task('watch-scripts', function () {
  return gulp.watch(['src/**/*.js'], ['build-scripts'])
})

gulp.task('watch-templates', function () {
  return gulp.watch(['src/**/*.html'], ['build-templates'])
})

gulp.task('watch-ts', function () {
  return gulp.watch(['src/**/*.ts'], ['build-ts'])
})

gulp.task('dev', [
  'build',
  'watch-scripts',
  'watch-templates',
  'watch-ts'
])
