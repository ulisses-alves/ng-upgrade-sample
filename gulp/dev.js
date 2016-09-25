let gulp = require('gulp')

gulp.task('dev', ['build'], function () {
  return gulp.watch(['src/**/*.{js,html}'], ['build'])
})
