'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var getRandom = function (array) {
  var index = function (from, to) {
    return Math.floor(Math.random() * to) + from;
  };

  var i = index(0, array.length - 1);

  return array[i];
};

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: getRandom(NAMES) + ' ' + getRandom(SURNAMES),
    coatColor: getRandom(COAT_COLOR),
    eyesColor: getRandom(EYES_COLOR)
  });
}

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
// блок с похожими персонажами
var similarListElement = document.querySelector('.setup-similar-list');
// блок с уже отрисованным персонажем
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var generateWizards = function () {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
};

generateWizards();
