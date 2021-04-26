// Gulp module imports
// ----
const {task, src, dest, watch, parallel, series} = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-clean-css');
const gulpif = require('gulp-if');
const yargs = require('yargs');


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
    return src(sources.styles)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(gulpif(production, minifycss()))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(dirs.dest));
};

// Scripts
const buildScripts = () => {
    return src(sources.scripts)
        .pipe(webpack({
            devtool: 'source-map',
            mode: 'development',
            output: {
                filename: 'application.js'
            }
        }))
        .pipe(dest(dirs.dest));
};

// Clean
const clean = () => del(['build']);

// Watch
const devWatch = () => {
    watch(sources.styles, buildStyles);
    watch(sources.scripts, buildScripts);
};

exports.dev = series(clean, parallel(buildStyles, buildScripts), devWatch);
exports.default = series(clean, parallel(buildStyles, buildScripts));
