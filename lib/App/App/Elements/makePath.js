'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var makePath = exports.makePath = function makePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'M10 10 h 80 v 80 h -80 Z';

  var p = new Path2D(path);
  return p;

  // Stroked triangle
  // ctx.beginPath();
  // ctx.moveTo(125, 125);
  // ctx.lineTo(125, 45);
  // ctx.lineTo(45, 125);
  // ctx.closePath();
  // ctx.stroke();
};