'use strict';

var gulp = require('gulp');
var jeditor = require('gulp-json-editor');
var _ = require('lodash');

/*
 * These tasks read JSON config files from the project root and convert it into an AngularJS module that specifies a
 * 'config' constant so that the configuration can be injected anywhere.
 *
 * Create config.json for dev or prod use and config.testing.json for E2E tests.
 *
 **/

function configPipe(fileName, extendObject) {
  var gulpNgConfig = require('gulp-ng-config');

  gulp.src('config.json')
    .pipe(jeditor(function (json) {
      var conf = {
        config: _.assign(json, extendObject || {})
      };
      return conf;
    }))
    .pipe(gulpNgConfig('frontend.config'))
    .pipe(gulp.dest('src/assets/scripts'));
}

// Generate config from template
gulp.task('config', function () {
  configPipe('config.json');
});

gulp.task('config:e2e', function () {
  configPipe('config.testing.json');

  // TODO: uncomment and change once we have testing backend
  // var backendConfig = require('../test/backend.conf.js').config;
  //
  // configPipe({
  //   backend: 'http://localhost:' + backendConfig.port  + '/v2.0/_'
  // });
});
