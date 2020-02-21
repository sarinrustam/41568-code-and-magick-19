'use strict';

var setup = document.querySelector('.setup');
var form = setup.querySelector('.setup-wizard-form');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }

  similarListElement.appendChild(fragment);
};

var onLoad = function (response) {
  var firstFour = response.splice(0, 4);
  renderWizards(firstFour);
};

var onError = function (errorMessage) {
  window.util.showMessage(errorMessage, 'tomato');
};

var onSubmitForm = function (evt) {
  evt.preventDefault();

  var onLoadForm = function () {
    setup.classList.add('hidden');
  };

  var onErrorForm = function (error) {
    window.util.showMessage(error, 'red');
  };

  window.backend.save(new FormData(form), onLoadForm, onErrorForm);
};

form.addEventListener('submit', onSubmitForm);

window.backend.load(onLoad, onError);
