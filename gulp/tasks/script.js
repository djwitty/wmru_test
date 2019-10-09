module.exports = () => {
  $.gulp.task('scripts:lib', () => {
    return $.gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'src/scripts/jquery-ui.min.js',
      'node_modules/slick-carousel/slick/slick.min.js'
    ])
      .pipe($.gp.concat("libs.min.js"))
      .pipe($.gulp.dest('dist/js/'))
      .on('end', $.browserSync.reload);
  });

  $.gulp.task('scripts', () => {
    return $.gulp.src('src/scripts/index.js')
      .pipe($.gulp.dest('dist/js/'))
      .on('end', $.browserSync.reload);
  });
}