'use strict';

(function () {
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');

  window.wizard = {
    onChangeCoat: function () {},
    onChangeEyes: function () {}
  };

  var onCoatClicked = function () {
    var currentCoatColor = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = currentCoatColor;
    wizardCoatInput.value = currentCoatColor;
    window.wizard.onChangeCoat(currentCoatColor);
  };

  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');

  var onEyesClicked = function () {
    var currentEyesColor = window.util.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = currentEyesColor;
    wizardEyesInput.value = currentEyesColor;
    window.wizard.onChangeEyes(currentEyesColor);
  };

  var fireBall = document.querySelector('.setup-fireball-wrap');
  var fireBallInput = document.querySelector('input[name="fireball-color"]');

  var onFireballClicked = function () {
    var currentFireballColor = window.util.getRandomElement(FIREBALL_COLORS);
    fireBall.style.backgroundColor = currentFireballColor;
    fireBallInput.value = currentFireballColor;
  };

  wizardCoat.addEventListener('click', onCoatClicked);
  wizardEyes.addEventListener('click', onEyesClicked);
  fireBall.addEventListener('click', onFireballClicked);
})();
