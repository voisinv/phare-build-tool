'use strict';

var nodemon = require('gulp-nodemon');
var lr = require('tiny-lr')();
var livereload = require('gulp-livereload');
module.exports = function(gulp, $, config) {
  var server = void 0;

  gulp.task('livereload', function() {
    setTimeout(function() {
      livereload.reload();
    }, 250);
  });

  gulp.task('start', function() {
    //server = gls.new(['./build/server/server.js']);
    //server.start();

    nodemon({
      script: config.to.build.server.server,
      watch: [config.to.build.directory.server],
      tasks: [],
      quiet: true
    }).on('restart', function() {
      setTimeout(function() {
        livereload.reload();
        gulp.run('test:api');
      }, 1000);
    });

    livereload.listen();

    gulp.watch([config.to.client.dev.js.all], ['verify:client', 'build:js:client', 'livereload']);
    //    jade
    //gulp.watch(config.to.client.dev.js.all, ['verify:server', 'build:js']);
    //    less
    gulp.watch([config.to.client.dev.css.all], ['build:css', 'livereload']);
    //    html
    gulp.watch([config.to.client.dev.html.all], ['build:html', 'livereload']);

    //  server
    //    js
    gulp.watch(config.to.server.dev.js.all, ['verify:server', 'build:js:server']);

  });
};
