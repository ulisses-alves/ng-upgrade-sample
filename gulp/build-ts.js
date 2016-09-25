var browserify = require('browserify')
var gulp = require('gulp')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var gutil = require('gulp-util')
var tap = require('gulp-tap')
var rename = require('gulp-rename')
var tsify = require('tsify')
var babelify = require('babelify')

module.exports = gulp.task('build-ts', () => {
  return browserify({
    entries: [
      './src/ng2/main.ts'
    ],
    debug: true
  })
  .plugin(tsify)
  .transform('babelify', {extensions: ['.ts', '.tsx']})
  .bundle()
  .pipe(source('main-ng2.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public'))
})
