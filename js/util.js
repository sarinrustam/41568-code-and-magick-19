'use strict';

(function () {

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * (array.length - 1))];
  };

  var showMessage = function (text) {
    var node = document.createElement('div');
    node.textContent = text;
    node.classList.add('message');
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.util = {
    getRandomElement: getRandomElement,
    showMessage: showMessage
  };
})();
