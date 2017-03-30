'use strict';

var toggleOpen = document.querySelector('.setup-open-icon'); // иконка открытия setup
var blockSetup = document.querySelector('.setup');           // окно setup
var toggleClose = document.querySelector('.setup-close');    // 'крестик' закрытия окна setup

var listWizzard = document.querySelector('.setup-similar');  // похожие персонажи

function openBlock(toggleClass, closeSelector){              //  функция для отрытия и закрытия окон
  if (toggleClass.classList.contains(closeSelector)) {
    toggleClass.classList.remove(closeSelector);
  } else {
    toggleClass.classList.add(closeSelector);
  }
}

toggleOpen.addEventListener('click', function() {             // отслеживаем клик по кнопке и запускаем функцию openBlock
  openBlock(blockSetup, 'hidden');
  listWizzard.classList.remove('hidden');                     // пока открываться будет одновременно с окном setup
});

toggleClose.addEventListener('click', function () {           // закрываем окно по крестику
  blockSetup.classList.add('hidden')
});
/*
var wizzardName = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var wizzardSecondName = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var orderName = true; // переключатель последовательности ФИО
var nameRandom = Math.floor(Math.random() * wizzardName.length); // генерация рандомного имени
var secondNameRandom = Math.floor(Math.random() * wizzardSecondName.length); // генерация рандомной фамилии

if ( orderName == true ) {
  var wizzardPersona = wizzardName[nameRandom] + ' ' + wizzardSecondName[secondNameRandom]; // склейка имя + фамилия
} else {
  var wizzardPersona = wizzardSecondName[secondNameRandom] + ' ' + wizzardName[nameRandom]; // склейка фамилия + имя
}*/

var wizzardName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizzardSecondName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var colorC = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var colorY = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var orderName = true; // переключатель последовательности ФИО
var nameRandom = Math.floor(Math.random() * wizzardName.length); // генерация рандомного имени
var secondNameRandom = Math.floor(Math.random() * wizzardSecondName.length); // генерация рандомной фамилии
var colorCRandom = Math.floor(Math.random() * colorC.length); // генерация рандомного цвета накидки
var colorYRandom = Math.floor(Math.random() * colorY.length); // генерация рандомного цвета глаз
var wizzardPersona = 0;

if ( orderName == true ) {
   wizzardPersona = wizzardName[nameRandom] + ' ' + wizzardSecondName[secondNameRandom]; // склейка имя + фамилия
} else {
   wizzardPersona = wizzardSecondName[secondNameRandom] + ' ' + wizzardName[nameRandom]; // склейка фамилия + имя
}

var cColor = colorC[colorCRandom]; // получение цвета накидки из массива
var yColor = colorY[colorYRandom]; // получение цвета глаз из массива

var wizzard = {
  name : wizzardPersona,
  coatColor : cColor,
  eyesColor : yColor
};


