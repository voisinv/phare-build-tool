'use strict';

require('vinyl-buffer');
module.exports = function(gulp, $, config) {

  gulp.task('build:js', ['build:js:client', 'build:js:server']);

  gulp.task('build:js:client', function() {
    return $.browserify(config.to.client.dev.js.main)
      .transform($.babelify, {
        presets: ['es2015']
      })
      // .transform('browserify-css', {global: true})
      .bundle()
      .pipe($.vinylSourceStream(config.to.client.build.js.main))
      .pipe(gulp.dest(config.to.build.directory.client));
  });
  gulp.task('build:js:server', function() {
    return gulp.src(config.to.server.dev.js.all)
      .pipe(gulp.dest(config.to.build.directory.server));
  });
};