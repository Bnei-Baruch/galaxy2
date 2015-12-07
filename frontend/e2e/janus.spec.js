var utils = require('./utils');

describe('Janus video room', function () {
  'use strict';
  var page;

  beforeEach(function () {
    utils.closeOtherWindows();
  });

  it('should display user video when the user logged in before shidur page loaded', function() {
    browser.get('/#/user');
    utils.openNewWindow("/index.html");
    utils.switchToWindow(1);
    utils.waitForVideo('.preview');
  });

  xit('should display user video when the user logged in after shidur page loaded', function() {
    browser.get('/index.html');
    utils.openNewWindow("/#/user");
    utils.switchToWindow(0);
    // utils.waitForVideo('.preview');
  });

  xit('should resume getting dynamic video when user reloads the page', function() {
    // Open shidur
    // Open user
    // Check vido color is changing
    // Reload user => checks reload works fine.
    // Check vido color is changing
  });

  xit('should resume getting user video when shidur reloads the page', function() {
    // Open shidur
    // Open user
    // Check vido color is changing
    // Reload shidur => checks reload works fine.
    // Check video color is changing
  });
});
