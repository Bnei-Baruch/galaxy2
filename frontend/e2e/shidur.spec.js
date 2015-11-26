var utils = require('./utils');

describe('The Shidur view', function () {
  'use strict';
  var page;

  beforeEach(function () {
    page = require('./shidur.po');
    // utils.closeOtherWindows();
  });

  it('should display online users with preview video and mark them offline on disconnect', function() {
    utils.openNewWindow("/index.html");
    // Check that all users are displayed offline
    // Open fake users page
    // Check online users displayed
    // Check previews present for every channel
    // Close fake users page
    // Check that all users are displayed offline
    // Check that preview and program is empty
  });

  it('should display program and show next user on preview when next user is triggered', function () {
    // Open fake users page
    // Open shidur
    // Trigger next user
    // Verify program video updated
    // Verify preview updated
    // Verify users list updated
    // Verify rotation
  });

});
