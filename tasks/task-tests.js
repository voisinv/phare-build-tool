'use strict';

require('vinyl-buffer');


module.exports = function(gulp, $, config) {
  var runSequence = require('run-sequence').use(gulp);


  gulp.task('test:api:babel', function() {
    return gulp.src([config.to.client.dev.test.api])
      .pipe($.babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest(config.to.build.directory.test))
  });

  gulp.task('test:api:mocha', function() {
    return gulp.src(config.to.build.directory.test + '/*.js')
    // gulp-mocha needs filepaths so you can't have any plugins before it
      .pipe(require('gulp-mocha')({
        reporter: 'list',
        timeout: 10000
      }));
  });

  gulp.task('test:api', ['test:api:babel', 'test:api:mocha']);
};