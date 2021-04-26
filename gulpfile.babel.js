// Gulp module imports
import {src, dest, watch, parallel, series} from 'gulp';
import del from 'del';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import minifycss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import yargs from 'yargs';


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
export const buildStyles = () => src(sources.styles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(gulpif(production, minifycss()))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(dirs.dest));

// Scripts
export const buildScripts = () => src(sources.scripts)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('application.js'))
    .pipe(gulpif(production, uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(dirs.dest));

// Clean
export const clean = () => del(['build']);

// Watch Task
export const devWatch = () => {
    // livereload.listen();
    watch(sources.styles, buildStyles);
    watch(sources.scripts, buildScripts);
};

// Development Task
export const dev = series(clean, parallel(buildStyles, buildScripts), devWatch);

// Serve Task
export const build = series(clean, parallel(buildStyles, buildScripts));

// Default task
export default dev;
