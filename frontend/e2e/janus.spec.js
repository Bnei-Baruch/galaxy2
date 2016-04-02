var utils = require('./utils');
var fs = require('fs');

function readConfig(path) {
  var buf = fs.readFileSync(path, "utf8").toString();
  return JSON.parse(buf);
}

describe('Janus video room', function () {
  'use strict';
  var page;

  beforeEach(function () {
    utils.closeOtherWindows();
    browser.driver.manage().deleteAllCookies();
    browser.ignoreSynchronization = false;
  });

  xit('should display user video when the user logged in before shidur page loaded', function() {
    browser.get('/#/user');
    utils.login();
    utils.openNewWindow("/index.html");
    utils.switchToWindow(1);
    utils.waitForVideo('.preview');
  });

  xit('should display user video when the user logged in after shidur page loaded', function() {
    browser.get('/index.html');
    utils.login();
    utils.openNewWindow("/#/user");
    utils.switchToWindow(0);
    utils.waitForVideo('.preview');
  });

  xit('should resume getting dynamic video when user reloads the page', function() {
    // Open user
    browser.get('/#/user');
    utils.login();
    // Open shidur
    utils.openNewWindow("/index.html");
    utils.switchToWindow(1);
    // Check video color is changing
    utils.waitForVideo('.preview');
    // Reload user => checks reload works fine.
    utils.switchToWindow(0);
    browser.refresh()
    // Check video color is changing
    utils.switchToWindow(1);
    utils.waitForVideo('.preview');
  });

  xit('should resume getting user video when shidur reloads the page', function() {
    // Open user
    browser.get('/#/user');
    utils.login();
    // Open shidur
    utils.openNewWindow("/index.html");
    utils.switchToWindow(1);
    // Check video color is changing
    utils.waitForVideo('.preview');
    // Reload shidur => checks reload works fine.
    browser.refresh()
    // Check video color is changing
    utils.waitForVideo('.preview');
  });

  it('should forward user to SDI when click on program', function() {
    var testing_config = 'config.testing.json';
    var config = readConfig(testing_config);
    var large1_port = config.janus.sdiPorts.large1.video.program;

    // Open user
    browser.get('/#/user').then(function() {
      utils.login();
      // Open SDI page
      utils.openNewWindow("/#/sdi").then(function() {
        // Open shidur
        utils.openNewWindow("/index.html").then(function() {
          // Switch to Shidur page
          utils.switchToWindow(1).then(function() {
            // Click on preview to switch SDI
            utils.waitForVideo('[kind=preview] video').then(function() {
              var test = element(by.model('test'));
              //expect(test.getOuterHtml()).toEqual('!!!');  // Debug
              test.click();
              utils.switchToWindow(2).then(function() {
                // Check video color is changing
                utils.waitForVideo('#remoteVideo' + large1_port).then(function(color) {
                  console.log('color is:' + color);
                });
              });
            });
          });
        });
      });
    });
  });
});
