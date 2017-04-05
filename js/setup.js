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

var ListWizard = blockSetup.querySelector('.setup-similar-list');
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

ListWizard.appendChild(fragment);

