'use strict';

module.exports = function(gulp, $, config) {
  gulp.task('build:css', function() {
    return gulp.src(config.to.client.dev.css.all)
      .pipe($.less())
      .pipe($.concat('app.css'))
      .pipe($.importCss())
      .pipe(gulp.dest(config.to.client.build.css.main));
  });
};