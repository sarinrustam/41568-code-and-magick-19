'use strict';

var setup = document.querySelector('.setup');
var form = setup.querySelector('.setup-wizard-form');
var wizards = [];
var coatColor;
var eyesColor;

document.querySelector('.setup-similar').classList.remove('hidden');

window.wizard.onChangeCoat = function (color) {
  coatColor = color;
  window.debounce(updateWizards);
};

window.wizard.onChangeEyes = function (color) {
  eyesColor = color;
  window.debounce(updateWizards);
};

var getRank = function (wizard) {
  var rank = 0;

  if (wizard.colorCoat === coatColor) {
    rank += 2;
  }

  if (wizard.colorEyes === eyesColor) {
    rank += 1;
  }

  return rank;
};

var namesSorted = function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

var updateWizards = function () {
  var sortedWizards = wizards.slice();
  sortedWizards.sort(function (a, b) {
    var rankDiffence = getRank(b) - getRank(a);

    if (rankDiffence === 0) {
      rankDiffence = namesSorted(a.name, b.name);
    }

    return rankDiffence;
  });
  window.render(sortedWizards);
};

var onLoad = function (response) {
  wizards = response;
  updateWizards();
};

var onError = function (errorMessage) {
  window.util.showMessage(errorMessage);
};

var onSubmitForm = function (evt) {
  evt.preventDefault();

  var onLoadForm = function () {
    setup.classList.add('hidden');
  };

  var onErrorForm = function (error) {
    window.util.showMessage(error);
  };

  window.backend.save(new FormData(form), onLoadForm, onErrorForm);
};

form.addEventListener('submit', onSubmitForm);

window.backend.load(onLoad, onError);
