'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;
var conf = require('./gulp/common');

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': [
        'use-fake-device-for-media-stream',
        'use-fake-ui-for-media-stream'
      ]
    }
  },

  // Uncomment to maximize the browser window
  // onPrepare: function() {
  //     browser.driver.manage().window().maximize();
  // },

  baseUrl: 'https://localhost:' + conf.argv.port,

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [paths.e2e + '/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
