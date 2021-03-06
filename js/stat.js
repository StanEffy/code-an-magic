'use strict';

var drawBackground = function (ctx) {
  ctx.fillStyle = 'white';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';

  ctx.fillRect(100, 10, 420, 270);
};

var drawBackgroundText = function (ctx) {
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);
};

var shadowReset = function (ctx) {
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = 'transparent';
};

var findMaxElement = function (times) {
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  return max;
};

var drawHistogram = function (ctx, names, times) {
  var max = findMaxElement(times);
  var histogramHeight = 150;
  var step = histogramHeight / max - 0;
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 90;
  var indentForTimes = 15;
  var yForNames = 260;

  for (var i = 0; i < times.length; i++) {
    var y = initialY + histogramHeight - times[i] * step;
    var x = initialX + indent * i + barWidth * i;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'blue';
      ctx.globalAlpha = Math.random();
    }
    ctx.fillRect(x, y, barWidth, times[i] * step);

    ctx.fillStyle = '#000000';
    ctx.globalAlpha = 1;
    ctx.fillText(names[i], x, yForNames);
    ctx.fillText(Math.floor(times[i]), x, y - indentForTimes);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawBackground(ctx);
  shadowReset(ctx);
  drawBackgroundText(ctx);
  drawHistogram(ctx, names, times);
};