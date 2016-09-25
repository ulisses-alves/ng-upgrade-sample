let gulp = require('gulp')
let concat = require('gulp-concat')
let uglify = require('gulp-uglify')
let sourcemaps = require('gulp-sourcemaps')
let rename = require('gulp-rename')
let gutil = require('gulp-util')

gulp.task('build-scripts', function () {
  return gulp.src([
    'node_modules/angular/angular.js',
    'src/**/*.js'
  ])
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(concat('main.js'))
  .pipe(uglify()).on('error', gutil.log)
  .pipe(rename({extname: '.min.js'}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/'))
})

