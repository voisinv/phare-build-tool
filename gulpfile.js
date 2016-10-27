'use strict';

var gulp = require('gulp');

var source = require('vinyl-source-stream');

var path = require('path');

var jade = require('gulp-jade');

var config = require('./tasks/config');

var $ = require('gulp-load-plugins')({
  // used for all plugins type not just with gulp-*
  pattern: '*'
});

// TASKS
// verirfy
require('./tasks/tasks-verify')(gulp, $, config);
//   verify:client
//   verify:server
// clean
require('./tasks/task-clean')(gulp, $, config);
// build
//   build
//     build:js
require('./tasks/tasks-js')(gulp, $, config);
//     build:html
require('./tasks/tasks-html')(gulp, $, config);
//     build:css
require('./tasks/tasks-less')(gulp, $, config);
//     build:client:assets
//   build:server
// serve
require('./tasks/task-serve')(gulp, $, config);
require('./tasks/task-tests')(gulp, $, config);
require('./tasks/tasks-watch')(gulp, $, config);
// watch
//   watch:client
//   watch:server
// test
//   test:client:unit
//   client:server:unit


gulp.task('serve', function(cb) {
  runSequence('verify', 'clean', 'build', 'watch', 'start', cb);
});

var runSequence = require('run-sequence').use(gulp);

gulp.task('styles', function(cb) {
  runSequence('less', cb);
});


gulp.task('build', function(cb) {
  runSequence(['build:html', 'build:js', 'build:css'], cb);
});

gulp.task('test', ['test:api']);

gulp.task('watch-test-api',function(cb) {
  runSequence('serve');
  gulp.watch([config.to.client.dev.test.api], ['test:api']);
});

gulp.task('watch', function() {
  // client
  //    js‡


});


