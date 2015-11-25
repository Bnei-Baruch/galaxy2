describe('The main view', function () {
  'use strict';
  var page;

  beforeEach(function () {
    page = require('./shidur.po');
    closeOtherWindows();
  });

  xit('should verify that when user reloads the page, shidur will resume getting dynamic video.', function() {
    // Open shidur
    // Open user
    // Check vido color is changing
    // Reload user => checks reload works fine.
    // Check vido color is changing
  });

  xit('should verify that when shiduf reloads the page, shidur will resume getting user video.', function() {
    // Open shidur
    // Open user
    // Check vido color is changing
    // Reload shidur => checks reload works fine.
    // Check video color is changing
  });

  xit('should display user video when the user logged in before shidur page loaded', function() {
    browser.get('/#/user').then(function () {
      openNewWindow("/index.html").then(function() {
        switchToWindow(1).then(function () {
          waitForVideo('.preview');
        });
      });
    });
  });

  it('should display user video when the user logged in after shidur page loaded', function() {
    browser.get('/index.html').then(function() {
      openNewWindow("/#/user").then(function() {
        switchToWindow(0).then(function () {
          waitForVideo('.preview');
        });
      });
    });
  });

  function waitForVideo(cssSelector) {
    browser.wait(function () {
      var deferred = protractor.promise.defer();

      var script = "return getAverageVideoColor('" + cssSelector + "');";
      var scriptPromise = browser.driver.executeScript(script);

      scriptPromise.then(function (color) {
        // Check avg color green component is big enough
        // deferred.fulfill(color && color[1] > 100);
        deferred.fulfill(color);
      });

      return deferred.promise;
    }, 5000);
  }

  function openNewWindow(url) {
    return browser.driver.executeScript("$(window.open('" + url + "'))");
  }

  function switchToWindow(number) {
    var deferred = protractor.promise.defer();

    browser.getAllWindowHandles().then(function(handles) {
      console.log("All window handles:", handles);

      browser.switchTo().window(handles[number]).then(function () {
        console.log("Switched to window:", handles[number]);
        deferred.fulfill();
      });
    });

    return deferred.promise;
  }

  function closeOtherWindows() {
    browser.getAllWindowHandles().then(function (handles) {
      handles.forEach(function (handle, index) {
        // Don't delete one window.
        if (index) {
          browser.driver.close();
        }
      });
    });
  }

});
