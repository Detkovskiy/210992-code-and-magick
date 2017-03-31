'use strict';

var toggleOpen = document.querySelector('.setup-open-icon'); // иконка открытия setup
var blockSetup = document.querySelector('.setup');           // окно setup
var toggleClose = document.querySelector('.setup-close');    // 'крестик' закрытия окна setup
var listWizard = document.querySelector('.setup-similar');   // похожие персонажи

function openBlock(toggleClass, closeSelector) {
  if (toggleClass.classList.contains(closeSelector)) {
    toggleClass.classList.remove(closeSelector);
  } else {
    toggleClass.classList.add(closeSelector);
  }
}

toggleOpen.addEventListener('click', function () {            // отслеживаем клик по кнопке и запускаем функцию openBlock
  openBlock(blockSetup, 'hidden');
  listWizard.classList.remove('hidden');                      // пока открываться будет одновременно с окном setup
});

toggleClose.addEventListener('click', function () {           // закрываем окно по крестику
  blockSetup.classList.add('hidden');
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

var orderName = true; // переключатель последовательности ФИО

var renderName = function () {
  var wizardFio = 0;
  var nameRandom = Math.floor(Math.random() * WIZZARD_NAME.length); // генерация рандомного имени
  var secondNameRandom = Math.floor(Math.random() * WIZZARS_SECOND_NAME.length); // генерация рандомной фамилии

  if (orderName === true) {
    wizardFio = WIZZARD_NAME[nameRandom] + ' ' + WIZZARS_SECOND_NAME[secondNameRandom]; // склейка имя + фамилия
  } else {
    wizardFio = WIZZARS_SECOND_NAME[secondNameRandom] + ' ' + WIZZARD_NAME[nameRandom]; // склейка фамилия + имя
  }

  return wizardFio;
};

var renderColorCoat = function () {
  var RandomColorNumber = Math.floor(Math.random() * COLOR_C.length); // генерация рандомного цвета накидки
  var renderColor = COLOR_C[RandomColorNumber]; // получение цвета накидки из массива

  return renderColor;
};

var renderColorEyes = function () {
  var RandomColorNumber = Math.floor(Math.random() * COLOR_E.length); // генерация рандомного цвета глаз
  var renderColor = COLOR_E[RandomColorNumber]; // получение цвета накидки из массива

  return renderColor;
};

var wizards = [  // массив случайных магов
  {
    name: renderName(),
    coatColor: renderColorCoat(),
    eyesColor: renderColorEyes()
  },
  {
    name: renderName(),
    coatColor: renderColorCoat(),
    eyesColor: renderColorEyes()
  },
  {
    name: renderName(),
    coatColor: renderColorCoat(),
    eyesColor: renderColorEyes()
  },
  {
    name: renderName(),
    coatColor: renderColorCoat(),
    eyesColor: renderColorEyes()
  }
];

var ListWizard = blockSetup.querySelector('.setup-similar-list');
var WizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = WizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = renderName();
  wizardElement.querySelector('.wizard-coat').style.fill = renderColorCoat();
  wizardElement.querySelector('.wizard-eyes').style.fill = renderColorEyes();

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

ListWizard.appendChild(fragment);

