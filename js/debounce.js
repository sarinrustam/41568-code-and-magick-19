'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;

  var lastTimeOut;

  var debounce = function (cb) {
    if (lastTimeOut) {
      window.clearTimeout(lastTimeOut);
    }
    lastTimeOut = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };

  window.debounce = debounce;
}());
