var utils = require('./utils');

describe('The Shidur view', function () {
  'use strict';
  var page;

  beforeEach(function () {
    page = require('./shidur.po');
    utils.closeOtherWindows();
  });

  xit('should display online users with preview video and mark them offline on disconnect', function() {
    browser.get('/');
    expect(page.onlineUserEls.count()).toBe(0);
    expect(page.offlineUserEls.count()).toBeGreaterThan(1);

    utils.openNewWindow("/#/fake");
    utils.switchToWindow(0);

    utils.waitForVideo('.preview');
    utils.waitForVideo('.program');

    // Check that all users are displayed offline
    // Open fake users page
    // Check online users displayed
    // Check previews present for every channel
    // Close fake users page
    // Check that all users are displayed offline
    // Check that preview and program is empty
  });

  xit('should display program and show next user on preview when next user is triggered', function () {
    utils.openNewWindow("/index.html");
    // Open fake users page
    // Open shidur
    // Trigger next user
    // Verify program video updated
    // Verify preview updated
    // Verify users list updated
    // Verify rotation
  });

});
