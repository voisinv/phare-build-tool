'use strict';

var del = require('del');

module.exports = function(gulp) {

  gulp.task('clean', function() {
    return del.sync(['../../build'], {
      force: true
    });
  });
};