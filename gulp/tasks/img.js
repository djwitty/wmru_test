module.exports = () => {
  $.gulp.task('img:build', () => {
    return $.gulp.src('src/assets/**/*.{png,jpg,webp,svg}')
      .pipe($.gp.imagemin([
        $.mozjpeg({
          quality: 65
        })
      ]))
      .pipe($.gulp.dest('dist/img/'));
  });
}