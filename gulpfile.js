'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  mozjpeg: require('imagemin-mozjpeg'),

  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach(taskPath => {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'stylus', 'scripts', 'scripts:lib', 'libs:build', 'img:build'),
  $.gulp.parallel('watch', 'server')
));