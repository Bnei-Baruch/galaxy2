describe('The main view', function () {
  'use strict';
  var page;

  beforeEach(function () {
    page = require('./shidur.po');
    closeOtherWindows();
  });

  xit('should verify that user is visible in the channel when user logged in before shidur page open', function() {
    browser.get('/#/user').then(function () {

      // TODO: This test is bad. Seems we don't really know when the user fully loaded
      // and connected to janus. Only then we should open shidur window and
      // test video.
      //browser.driver.sleep(3000);

      openNewWindow("/index.html").then(function() {
        switchToWindow(1).then(function () {
          browser.wait(function () {
            var deferred = protractor.promise.defer();

            browser.driver.executeScript("return getAverageVideoColor('.preview');").then(function (color) {
              console.log("Color:", color);
              deferred.fulfill(color);
            });

            return deferred.promise;
          }, 5000);
        });
      });
    });
  });

  it('should verify that user is visible in the channel when user logged in after shidur page open', function() {
    browser.get('/index.html').then(function() {
      openNewWindow("/#/user").then(function() {
        switchToWindow(0).then(function () {
          browser.wait(function () {
            var deferred = protractor.promise.defer();

            browser.driver.executeScript("return getAverageVideoColor('.preview');").then(function (color) {
              console.log("Color:", color);
              deferred.fulfill(color);
            });

            return deferred.promise;
          }, 5000);
        });
      });
    });
  });

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
