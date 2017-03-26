/**
 * Created by Yura on 26.03.17.
 */
'use strict';

window.renderStatistics = function (ctx, names, times) {

  var shadow = 'rgba(0, 0, 0, 0.7)';    // цвет тени
  ctx.fillStyle = shadow;

  ctx.strokeRect = (110, 20, 420, 270); // тень
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';              // основное окно
  ctx.strokeRect = (100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // поиск лучшего и худшего времени с индексом игрока
  var lengthMassive = times.length;
  var bestTime = times[0];
  var indexBestName = 0;

  var badTime = times[0];
  //var indexBadName = 0; // ругается сборщик пулреквеста

  while (lengthMassive--) {
    i = lengthMassive;
    if (times[i] < bestTime) {
      bestTime = times[i];
      indexBestName = i;
    } /*else if (times[i] > badTime) {
        badTime = times[i];
        indexBadName = i;
      }*/
  }
  // ------

  var histogramWidth = 150;
  var step = histogramWidth / (badTime - 0);

  for (var i = 0; i < times.length; i++) {
    var barWidth = 50;
    var indent = 94;
    var initialX = 144;
    var initialY = 250;

    var name = names[i];

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {

      // попытка сделать рандомную прозрачность
      var minOpacity = 0.1;
      var randomOpacity = Math.random();
      var Opacity = (randomOpacity < minOpacity) ? (randomOpacity + 0.2) : randomOpacity;
      // ---

      ctx.fillStyle = 'rgba(0, 179, 255,' + Opacity + ')';
    }

    ctx.fillRect(initialX + indent * i, initialY , barWidth, -times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indent * i, initialY + 20);

    var timeX = (-times[i] * step) - 10; // смещение значения времени игрока по Y
    ctx.fillText(Math.ceil(times[i]), initialX + indent * i, initialY + timeX); // вывод времени игрока
  }

  // вывод текта
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, победитель ' + names[indexBestName] + '!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};
