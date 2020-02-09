'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COUNT_WIZARDS = 4;
var ENUM_BUTTONS = {
  ESC: 'Escape',
  ENT: 'Enter'
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2 символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя должно состоять не более чем 25 символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Это поле обязательно для заполнения');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var onPopupEscPress = function (evt) {
  var userNameInputFocus = setup.querySelector('.setup-user-name:focus');
  if (evt.key === ENUM_BUTTONS.ESC && !userNameInputFocus) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENUM_BUTTONS.ENT) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENUM_BUTTONS.ENT) {
    closePopup();
  }
});

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
};

var getWizards = function () {
  var wizards = [];

  for (var i = 0; i < COUNT_WIZARDS; i++) {
    wizards.push({
      name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    });
  }
  return wizards;
};

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
};

renderWizards(getWizards());

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = document.querySelector('input[name="coat-color"]');

var onCoatClicked = function () {
  var currentCoatColor = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = currentCoatColor;
  wizardCoatInput.value = currentCoatColor;
};

wizardCoat.addEventListener('click', onCoatClicked);

var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = document.querySelector('input[name="eyes-color"]');

var onEyesClicked = function () {
  var currentEyesColor = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = currentEyesColor;
  wizardEyesInput.value = currentEyesColor;
};

wizardEyes.addEventListener('click', onEyesClicked);

var fireBall = document.querySelector('.setup-fireball-wrap');
var fireBallInput = document.querySelector('input[name="fireball-color"]');

var onFireballClicked = function () {
  var currentFireballColor = getRandomElement(FIREBALL_COLORS);
  fireBall.style.backgroundColor = currentFireballColor;
  fireBallInput.value = currentFireballColor;
};

fireBall.addEventListener('click', onFireballClicked);
