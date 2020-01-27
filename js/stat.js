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
var FONT_COLOR = '#000';
var FONT_FAMILY = '16px PT Mono';

var renderFieldStat = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, FIELD_STAT_WIDTH, FIELD_STAT_HEIGHT);
};

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

  renderFieldStat(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderFieldStat(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура вы победили!', 150, 30, FONT_COLOR, FONT_FAMILY);
  renderText(ctx, 'Список результатов:', 150, 46, FONT_COLOR, FONT_FAMILY);

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
};
