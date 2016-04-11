var EC = protractor.ExpectedConditions;

exports.login = function() {
  'use strict'

  var login = element(by.model('vm.login'));
  var password = element(by.model('vm.password'));
  var submit = element(by.tagName('button'));

  login.sendKeys('e2e');
  password.sendKeys('e2eARVUT2014');
  submit.click();

  return browser.sleep(3500);
}

exports.waitForVideo = function(cssSelector) {
  'use strict';

  var ret = browser.wait(function () {
    var deferred = protractor.promise.defer();

    var script = "return getAverageVideoColor('" + cssSelector + "');";
    var scriptPromise = browser.driver.executeScript(script);

    scriptPromise.then(function (color) {
      // Check avg color green component is big enough
      // deferred.fulfill(color && color[1] > 100);
      deferred.fulfill(color);
    });

    return deferred.promise;
  }, 15000);

  return ret;
};

exports.openNewWindow = function(url) {
  'use strict';

  return browser.driver.executeScript("$(window.open('" + url + "'))");
};

exports.switchToSpecificHandle = function(handle) {
  'use strict';
  var deferred = protractor.promise.defer();
  browser.switchTo().window(handle).then(function () {
    //console.log("Switched to window:", handles[number]);
    browser.driver.executeScript('window.focus();').then(function() {
      browser.getCurrentUrl().then(function(url) {
        console.log('Switch to ' + url);
        deferred.fulfill();
      });
    });
  });
  return deferred.promise;
};

exports.switchToWindow = function(number, url_contains) {
  'use strict';

  var deferred = protractor.promise.defer();

  browser.getAllWindowHandles().then(function(handles) {
    console.log("All window handles:", handles);
    browser.switchTo().window(handles[number]).then(function () {
      browser.driver.executeScript('window.focus();').then(function() {
        browser.driver.executeScript('return window.location.toString();').then(function(url) {
          if (url_contains) {
            expect(url).toContain(url_contains);
          }
          console.log('Switch to [' + handles[number] + ']: ' + url);
          deferred.fulfill();
        }, function() { throw 'Could not get current url.'; });
      }, function() { throw 'Could not focus.'; });
    }, function() { throw 'Could not switchTo.'; });
  });

  return deferred.promise;
};

exports.closeOtherWindows = function() {
  'use strict';

  browser.getAllWindowHandles().then(function (handles) {
    if (!handles.length) {
      return;
    }
    handles.forEach(function (handle, index) {
      // Leave one window not deleted
      if (index > 0) {
        browser.switchTo().window(handles[index]);
        browser.driver.close();
      }
    });
    browser.switchTo().window(handles[0]);
  });
};
