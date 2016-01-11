'use strict';

// include gulp
var gulp = require('gulp'); 



// PLUG-INS
// include plug-ins
var jshint = require('gulp-jshint');

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var minifyHTML = require('gulp-minify-html');

var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

var gulp = require('gulp');
var sass = require('gulp-sass');





// TASKS
// JS hint task
gulp.task('jshint', function() {
  gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// Minify new images
gulp.task('imagemin', function() {
  var imgSrc = './images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});


// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './*.html',
      htmlDst = './build';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});


// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./js/app.js'])
    .pipe(concat('app.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});


// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./css/app.css'])
    .pipe(concat('app.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});


// CSS pre-processor
gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError, {outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/styles/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});
