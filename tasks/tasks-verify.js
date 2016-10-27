'use strict';

// TASK VERIFY
// verify:client
// verify:server
module.exports = function(gulp, $, config) {

  gulp.task('verify:client', function() {
    gulp.src([config.to.client.dev.js.all])
      .pipe($.eslint())
      .pipe($.eslint.format());
  });

  gulp.task('verify:server', function() {
    gulp.src([config.to.server.dev.js.all])
      .pipe($.eslint())
      .pipe($.eslint.format());
  });

  gulp.task('verify', ['verify:client', 'verify:server']);
};