module.exports = () => {
  $.gulp.task('stylus', () => {
    return $.gulp.src('src/stylus/styles.styl')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.stylus({
        'include css': true
      }))
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 10 versions']
      }))
      .on('error', $.gp.notify.onError({
        title: 'Error running something'
      }))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('dist/css/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });
}