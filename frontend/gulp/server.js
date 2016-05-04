'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./common');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');
var port_util = require('./port')

var proxyMiddleware = require('http-proxy-middleware');


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
    https: {
      key: '/home/negus/ssl/server.key',
      cert: '/home/negus/ssl/server.crt'
    },
    browser: browser === undefined ? 'default' : browser
  };

  var port = port_util.getPortFromCommandLine();
  if (port) {
    options.port = port;
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
  port_util.requirePortOnCommandLine();
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['config:e2e', 'build'], function () {
  port_util.requirePortOnCommandLine();
  browserSyncInit(conf.paths.dist, []);
});
