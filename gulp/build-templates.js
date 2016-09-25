let gulp = require('gulp')
let flatten = require('gulp-flatten')

gulp.task('build-templates', function () {
  return gulp.src([
    'src/**/*.html'
  ])
  .pipe(flatten())
  .pipe(gulp.dest('./public/'))
})
