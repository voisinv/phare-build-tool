'use strict';
module.exports = function(gulp, $, config) {
  gulp.task('watch-server', function() {
    gulp.watch(config.to.server.dev.js.all, ['verify:server', 'build:js:server']);
  });
};