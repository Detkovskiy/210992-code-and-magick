'use strict';

var setupOpen = document.querySelector('.setup-open');
var blockSetup = document.querySelector('.setup');
var setupClose = blockSetup.querySelector('.setup-close');
var userName = blockSetup.querySelector('.setup-user-name');

var onEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closeBlockSetup();
  }
};

var openBlockSetup = function () {
  blockSetup.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
};

var closeBlockSetup = function () {
  blockSetup.classList.add('hidden');
  document.removeEventListener('keydown', onEscPress);
};

setupOpen.addEventListener('click', function () {
  openBlockSetup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openBlockSetup();
  }
});

setupClose.addEventListener('click', function () {
  closeBlockSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeBlockSetup();
  }
});

userName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.stopPropagation();
  }
});

var WIZZARD_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZZARS_SECOND_NAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COLOR_C = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var COLOR_E = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var COLOR_FAREBALL = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var orderName = true; // переключатель последовательности ФИО

/* функция возвращает рандомное значение из массива */
var getRandomItemArr = function (arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);

  return arr[randomNumber];
};

var renderName = function () {
  var wizardFio = 0;
  var nameRandom = getRandomItemArr(WIZZARD_NAME); // генерация рандомного имени
  var secondNameRandom = getRandomItemArr(WIZZARS_SECOND_NAME); // генерация рандомной фамилии

  if (orderName === true) {
    wizardFio = nameRandom + ' ' + secondNameRandom; // склейка имя + фамилия
  } else {
    wizardFio = secondNameRandom + ' ' + nameRandom; // склейка фамилия + имя
  }

  return wizardFio;
};

var wizards = [  // массив случайных магов
  {
    name: renderName(),
    coatColor: getRandomItemArr(COLOR_C),
    eyesColor: getRandomItemArr(COLOR_E)
  },
  {
    name: renderName(),
    coatColor: getRandomItemArr(COLOR_C),
    eyesColor: getRandomItemArr(COLOR_E)
  },
  {
    name: renderName(),
    coatColor: getRandomItemArr(COLOR_C),
    eyesColor: getRandomItemArr(COLOR_E)
  },
  {
    name: renderName(),
    coatColor: getRandomItemArr(COLOR_C),
    eyesColor: getRandomItemArr(COLOR_E)
  }
];

var listWizard = blockSetup.querySelector('.setup-similar-list');
var WizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = WizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = renderName();
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomItemArr(COLOR_C);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomItemArr(COLOR_E);

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

listWizard.appendChild(fragment);

/* меняем цвет мага */
var wizard = document.querySelector('.setup-player');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var wizardFireball = wizard.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomItemArr(COLOR_C);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomItemArr(COLOR_E);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = getRandomItemArr(COLOR_FAREBALL);
});
