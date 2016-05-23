var utils = require('./utils');
var fs = require('fs');
var mock = require('protractor-http-mock');

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

  var ngMockE2E = require('ng-mock-e2e');
  var $httpBackend = ngMockE2E.$httpBackend;

  beforeEach(function () {
    //browser.ignoreSynchronization = true;
    //console.log('angular');
    //var a = $();
    //for(var propName in a) {
    //  var propValue = a[propName];
    //  console.log(propName, propValue);
    //}
    //console.log('angular');

    ngMockE2E.addMockModule();
    ngMockE2E.addAsDependencyForModule('frontend');
    ngMockE2E.embedScript('../bower_components/angular-mocks/angular-mocks.js');
  });

  afterEach(function () {
    ngMockE2E.clearMockModules();

    //browser.manage().logs().get('browser').then(function(browserLog) {
    //  console.log('log: ' + require('util').inspect(browserLog));
    //});
  });

  it('should test mock http', function() {

    //$httpBackend.when('GET', /\.*/).respond(function() { return [200, 'TTT']; });
    //$httpBackend.when('POST', /\.*/).respond(function() { return [200, 'TTT']; });
    //$httpBackend.when('POST', /\.*/).passThrough();

    ngMockE2E.$httpBackend.passThrough();

    var testing_config = 'config.testing.json';
    var config = readConfig(testing_config);
    var large1_port = config.janus.sdiPorts.large1.video.program;

    console.log('Here');

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
