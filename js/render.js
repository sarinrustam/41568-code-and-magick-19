'use strict';

(function () {
  var WIZARDS_COUNT = 4;

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
    var firstFour = wizards.length > WIZARDS_COUNT ? WIZARDS_COUNT : wizards.length;
    var fragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';

    for (var j = 0; j < firstFour; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }

    similarListElement.appendChild(fragment);
  };

  window.render = renderWizards;

}());
