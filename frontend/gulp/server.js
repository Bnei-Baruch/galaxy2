'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./common');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var argv = require('yargs').argv;
var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');


function ensurePortPresence() {
  if (!argv.port) {
    throw "Port not set, please run --port=9876";
  }
}

function browserSyncInit(baseDir, browser) {
  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components',
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
   */
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', proxyHost: 'jsonplaceholder.typicode.com'});

  var options = {
    startPath: '/',
    server: server,
    ghostMode: false,
    https: true,
    browser: browser === undefined ? 'default' : browser
  };

  if (argv.port) {
    options.port = argv.port;
  }

  if (argv.sslKey && argv.sslCert) {
    options.https = {
      key: argv.sslKey,
      cert: argv.sslCert
    }
  }

  browserSync.instance = browserSync.init(options);
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['config', 'watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src, '../misc']);
});

gulp.task('serve:dist', ['config', 'build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['config:e2e', 'inject'], function () {
  ensurePortPresence();
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['config:e2e', 'build'], function () {
  ensurePortPresence();
  browserSyncInit(conf.paths.dist, []);
});
