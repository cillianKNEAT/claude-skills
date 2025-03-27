'use strict';

import gulp from 'gulp';
import { src, dest, task, watch } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

function buildStyles() {
  return gulp.src('./assets/sass/**/*.scss', { sourcemaps: true })
    .pipe(sass({
      style: 'compressed',
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./assets/css', { sourcemaps: '.' }));
};

task('default', buildStyles);
