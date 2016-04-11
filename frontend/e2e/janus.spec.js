var utils = require('./utils');
var fs = require('fs');
var HttpBackend = require('httpbackend');

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
    browser.get('/#/user').then(function() {
      utils.login();
      utils.openNewWindow("/index.html").then(function() {
        utils.switchToWindow(1, 'index').then(function() {
          utils.waitForVideo('.preview');
        });
      });
    });
  });

  xit('should display user video when the user logged in after shidur page loaded', function() {
    browser.get('/index.html').then(function() {
      utils.login();
      utils.openNewWindow("/#/user").then(function() {
        utils.waitForVideo('.preview');
      });
    });
  });

  xit('should resume getting dynamic video when user reloads the page', function() {
    // Open user
    browser.get('/#/user').then(function() {
      utils.login();
      // Open shidur
      utils.openNewWindow("/index.html").then(function() {
        utils.switchToWindow(1, 'index').then(function() {
          // Check video color is changing
          utils.waitForVideo('.preview').then(function() {
            utils.switchToWindow(0, 'user').then(function() {
              // Check video color is changing
              // Reload user => checks reload works fine.
              browser.refresh();
              utils.switchToWindow(1, 'index').then(function() {
                utils.waitForVideo('.preview');
              });
            });
          });
        });
      });
    });
  });

  xit('should resume getting user video when shidur reloads the page', function() {
    // Open user
    browser.get('/#/user').then(function() {
      utils.login();
      // Open shidur
      utils.openNewWindow("/index.html").then(function() {
        utils.switchToWindow(1, 'index').then(function() {
          // Check video color is changing
          utils.waitForVideo('.preview').then(function() {
            // Reload shidur => checks reload works fine.
            browser.refresh();
            // Check video color is changing
            utils.waitForVideo('.preview');
          });
        });
      });
    });
  });

  it('should test mock http', function() {
    var backend = new HttpBackend(browser);
    backend.whenPOST(/.*rest\/shidur_state.*/).respond(function(method,url,data) {
      console.log("Getting sdi");
      return [200, "TTT"];
    });
    backend.whenGET(/.*rest\/shidur_state.*/).respond(function(method,url,data) {
      console.log("Getting sdi");
      return [200, "TTT"];
    });
    backend.whenGET(/.*/).passThrough();
    backend.whenPOST(/.*/).passThrough();

    var testing_config = 'config.testing.json';
    var config = readConfig(testing_config);
    var large1_port = config.janus.sdiPorts.large1.video.program;

    // Open user
    browser.get('/#/user')
    .then(utils.login()
    // Open SDI page
    .then(utils.openNewWindow("/#/sdi")
    // Open shidur
    .then(utils.openNewWindow("/index.html")
    // Switch to Shidur page
    .then(utils.switchToWindow(1, 'index')
    // Click on preview to switch SDI
    .then(utils.waitForVideo('[kind=preview] video')
    .then(function() {
      var channel = element(by.css('large-channel-widget[name="large1"]'));
      var slot = channel.element(by.css('slot-widget[kind="preview"]'));
      // expect(slot.getOuterHtml()).toEqual('!!!');  // Debug
      slot.click();
      return utils.switchToWindow(2, 'sdi').then(
        // Check video color is changing
        utils.waitForVideo('#remoteVideo' + large1_port).then(function(color) {
          console.log('color is:' + color);
        })
      );
    }))))));
  });

  xit('should forward user to SDI when click on program', function() {
    var testing_config = 'config.testing.json';
    var config = readConfig(testing_config);
    var large1_port = config.janus.sdiPorts.large1.video.program;

    // Open user
    browser.get('/#/user')
    .then(utils.login()
    // Open SDI page
    .then(utils.openNewWindow("/#/sdi")
    // Open shidur
    .then(utils.openNewWindow("/index.html")
    // Switch to Shidur page
    .then(utils.switchToWindow(1, 'index')
    // Click on preview to switch SDI
    .then(utils.waitForVideo('[kind=preview] video')
    .then(function() {
      var channel = element(by.css('large-channel-widget[name="large1"]'));
      var slot = channel.element(by.css('slot-widget[kind="preview"]'));
      // expect(slot.getOuterHtml()).toEqual('!!!');  // Debug
      slot.click();
      return utils.switchToWindow(2, 'sdi').then(
        // Check video color is changing
        utils.waitForVideo('#remoteVideo' + large1_port).then(function(color) {
          console.log('color is:' + color);
        })
      );
    }))))));
  });
});
