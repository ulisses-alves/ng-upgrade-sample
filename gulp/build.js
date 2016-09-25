let gulp = require('gulp')

gulp.task('build', [
  'build-scripts',
  'build-ts',
  'build-templates'
])
