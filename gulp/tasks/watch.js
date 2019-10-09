module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'), $.reload);
    $.gulp.watch('src/stylus/**/*.styl', $.gulp.series('stylus'));
    $.gulp.watch('src/scripts/**/*.js', $.gulp.series('scripts'));
  });
}