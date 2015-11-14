describe('The main view', function () {
  'use strict';
  var page;

  beforeEach(function () {
    page = require('./shidur.po');
  });

  it('should verify that user is visible in the channel when user logged in after shidur page open', function() {
    browser.get('/#/user');
    openNewWindow("/index.html");

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

  it('should verify that user is visible in the channel when user logged in after shidur page open', function() {
    browser.get('/index.html');
    openNewWindow("/#/user");

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

  function openNewWindow(url) {
    browser.driver.executeScript("$(window.open('" + url + "'))");
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

});
