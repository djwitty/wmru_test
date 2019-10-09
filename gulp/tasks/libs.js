module.exports = () => {
  $.gulp.task('libs:build', () => {
    return $.gulp.src('src/libs/**/*.css')
      .pipe($.gulp.dest('dist/css/'));
  });
}