var EC = protractor.ExpectedConditions;

exports.login = function() {
  'use strict'

  var login = element(by.model('vm.login'));
  var password = element(by.model('vm.password'));
  var submit = element(by.tagName('button'));

  login.sendKeys('e2e');
  password.sendKeys('e2eARVUT2014');

  submit.click();

  browser.sleep(3500);
}

exports.waitForVideo = function(cssSelector) {
  'use strict';

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
  }, 15000);
};

exports.openNewWindow = function(url) {
  'use strict';

  return browser.driver.executeScript("$(window.open('" + url + "'))");
};

exports.switchToWindow = function(number) {
  'use strict';

  var deferred = protractor.promise.defer();

  browser.getAllWindowHandles().then(function(handles) {
    console.log("All window handles:", handles);

    browser.switchTo().window(handles[number]).then(function () {
      console.log("Switched to window:", handles[number]);
      browser.driver.executeScript('window.focus();');
      deferred.fulfill();
    });
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
