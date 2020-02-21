'use strict';

(function () {

  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * (array.length - 1))];
  };

  var showMessage = function (text, color) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color:' + color + ';';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = text;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.util = {
    getRandomElement: getRandomElement,
    showMessage: showMessage
  };
})();
