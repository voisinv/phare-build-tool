'use strict';
const copy = require('gulp-copy');
module.exports = function(gulp, $, config) {
  gulp.task('copy', function() {
    return gulp.src(config.to.client.dev.images.all)
      .pipe(gulp.dest(config.to.client.build.images.all + '/img'));
  });
};