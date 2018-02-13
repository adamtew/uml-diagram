'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCanvasText = exports.getCanvasText = function getCanvasText() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  ctx.font = '48px serif';
  ctx.fillText('Hello World', 360, 50);
};