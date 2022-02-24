// Gulp module imports
// ----
const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-clean-css');
const gulpif = require('gulp-if');
const purgecss = require('gulp-purgecss')
const yargs = require('yargs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Variables
// ----
const sassOpts = {
    outputStyle: 'compressed',
    errLogToConsole: true
};

// Recognise `--production` argument
const argv = yargs.argv;
const production = !!argv.production;


// Build Directories
// ----
const dirs = {
    src: 'src',
    dest: 'assets'
};


// File Sources
// ----
const sources = {
    styles: `${dirs.src}/styles/**/*.sass`,
    scripts: `${dirs.src}/js/**/*.js`
};


// Main Tasks
// ----

// Styles
const buildStyles = () => {
    return gulp.src(sources.styles)
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dirs.dest));
};

const cleanStyles = () => {
    return gulp.src('assets/styles.css')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(purgecss({
            content: ['./**/*.liquid'],
            safelist: [
              'header-mini',
              'scroll-up',
              'scroll-down',
              'modal-backdrop',
              'offcanvas-backdrop',
              'leaflet-tile-pane',
              /^icon/
            ]
        }))
        .pipe(gulpif(production, minifycss()))
        .pipe(gulp.dest(dirs.dest));
};

// Scripts
const webpackDev = webpack({
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'application.js',
    }
});
const webpackProd = webpack({
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'application.min.js',
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            extractComments: true
          })
        ]
    }
});

const buildScripts = () => {
    return gulp.src(sources.scripts)
        .pipe(gulpif(!production, webpackDev))
        .pipe(gulpif(production, webpackProd))
        .pipe(gulp.dest(dirs.dest));
};

// Clean
const clean = () => del(['build']);

// Watch
const devWatch = () => {
    watch(sources.styles, buildStyles);
    watch(sources.scripts, buildScripts);
};

exports.watch = devWatch;
exports.dev = gulp.series(clean, gulp.parallel(buildStyles, buildScripts), devWatch);
exports.default = gulp.series(clean, gulp.parallel(buildStyles, buildScripts), cleanStyles);
