'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var srcmaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

//gulp.task('prod', ['sass-prod', 'prefix']);
gulp.task('start', ['browsersync']);

// Gulp browsersync task
gulp.task('browsersync', ['sass'], function() {

    browserSync.init({
        proxy: "greensock.dev",
//        startPath: "/banner.svg"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("js/*.js").on('change', browserSync.reload);
//    gulp.watch("**/*.php" ).on('change', browserSync.reload);
    gulp.watch(["images/*.svg", "*.php" ]).on('change', browserSync.reload);
});

// Sass compiler
gulp.task('sass', function () {

    gulp.src('scss/banner.scss')

        //  Stops crashing watch on error.
        .pipe(plumber())

        //  Initialise sourcemaps.
        .pipe(srcmaps.init())

        //  Compile Sass files, log errors.
        .pipe(sass({
            outputStyle: 'nested'
        }).on('error', sass.logError))

        //  Write the sourcemaps to the current directory.
        .pipe(srcmaps.write('/'))

        //  Set the output destination for the final file.
        .pipe(gulp.dest('css'))

        // Sync with browsersync
        .pipe(browserSync.stream());

});

gulp.task('uglify', function () {
    gulp.src(['js/vendor/*.js', 'js/main.js'])

        //  Stops crashing watch on error.
        .pipe(plumber())

        //  Initialise sourcemaps.
        .pipe(srcmaps.init())

        //  Concat all files.
        .pipe(concat('app.js'))


        //  Set the destination folder for the concat file.
//        .pipe(gulp.dest('public/js'))

        //  Uglify, with settings.
        .pipe(uglify({
            mangle: true,
            warnings: true
        }))

        //  Rename the output.
        .pipe(rename({
            extname: '.min.js'
        }))

        //  Write the sourcemaps to the current directory.
        .pipe(srcmaps.write('/'))

        //  Set the output destination for the final file.
        .pipe(gulp.dest('js'));

});

// Prefix CSS
gulp.task('prefix', function () {
    gulp.src('css/banner.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/banner.css'));
});

gulp.task('watch', function () {

    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch(['main.js'], ['uglify']);

});
