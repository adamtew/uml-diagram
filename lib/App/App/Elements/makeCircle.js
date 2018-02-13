"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var makeCanvasCircle = exports.makeCanvasCircle = function makeCanvasCircle() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;

  var path = new Path2D();
  //path.moveTo(x, y);
  path.arc(x, y, r, 0, Math.PI * 2, true);
  return path;
  // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  // ctx.moveTo(110, 75);
  // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  // ctx.moveTo(65, 65);
  // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
  // ctx.moveTo(95, 65);
  // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
  // ctx.stroke();
};