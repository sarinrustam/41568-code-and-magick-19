'use strict';

var FIELD_STAT_WIDTH = 420;
var FIELD_STAT_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FIELD_STAT_X = 150;
var FIELD_STAT_START = 80;
var FIELD_STAT_END = FIELD_STAT_START + FIELD_STAT_X;
var BAR_SPACE = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;

// функция для отрисовки поля статистики
var renderFieldStat = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, FIELD_STAT_WIDTH, FIELD_STAT_HEIGHT);
};
// функция для отрисовки текста
var renderText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

var getElementMax = function (arr) {
  if (!arr.length) {
    return 0;
  }

  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  // вызов функции отрисовки поля статистики
  renderFieldStat(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderFieldStat(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var fontColor = '#000';
  var fontFamily = '16px PT Mono';
  // вызов функции отрисовки тайтла
  renderText(ctx, 'Ура вы победили!', 150, 30, fontColor, fontFamily);
  renderText(ctx, 'Список результатов:', 150, 46, fontColor, fontFamily);

  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // 50, 100 and 150 - это значения, которые я получу при вычислении их в цикле

  // var players = ['Вы', 'Настя', 'Рустам', 'Popa'];

  var maxTime = getElementMax(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + (Math.round(Math.random() * 10) / 10 + 0.1) + ')';
    }
    ctx.fillText(names[i], FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * i, FIELD_STAT_HEIGHT - GAP);
    ctx.fillRect(FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * i, FIELD_STAT_END - (MAX_BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(Math.round(times[i]), FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * i, FIELD_STAT_END - (MAX_BAR_HEIGHT * times[i]) / maxTime - GAP);
  }
  // (MAX_BAR_HEIGHT * times[i]) / maxTime
  // ctx.fillText(playerName, FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * palyerIndex, FIELD_STAT_HEIGHT - GAP);
  // ctx.fillRect(FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * palyerIndex, FIELD_STAT_END - 50, BAR_WIDTH, 50);

  // palyerIndex = 1;
  // playerName = 'Настя';

  // ctx.fillText(playerName, FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * palyerIndex, FIELD_STAT_HEIGHT - GAP);
  // ctx.fillRect(FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * palyerIndex, FIELD_STAT_END - 100, BAR_WIDTH, 100);

  // palyerIndex = 2;
  // playerName = 'Рустам';

  // ctx.fillText(playerName, FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * palyerIndex, FIELD_STAT_HEIGHT - GAP);
  // ctx.fillRect(FIELD_STAT_X + (BAR_SPACE + BAR_WIDTH) * palyerIndex, FIELD_STAT_END - 150, BAR_WIDTH, 150);
};
