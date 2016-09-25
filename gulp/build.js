let gulp = require('gulp')
let concat = require('gulp-concat')
let uglify = require('gulp-uglify')
let sourcemaps = require('gulp-sourcemaps')
let rename = require('gulp-rename')
let gutil = require('gulp-util')
let flatten = require('gulp-flatten')

gulp.task('build-scripts', ['clean'], function () {
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

gulp.task('build-templates', ['clean'], function () {
  return gulp.src([
    'src/**/*.html'
  ])
  .pipe(flatten())
  .pipe(gulp.dest('./public/'))
})

gulp.task('build', ['build-scripts', 'build-templates'])
