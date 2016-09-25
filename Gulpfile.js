let requireDir = require('require-dir')
let gulp = require('gulp')

requireDir('./gulp')

gulp.task('default', ['build'])
