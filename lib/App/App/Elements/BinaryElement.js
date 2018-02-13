'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BinaryElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Element2 = require('./Element');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BinaryElement = exports.BinaryElement = function (_Element) {
  _inherits(BinaryElement, _Element);

  function BinaryElement(id) {
    var x1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var y1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var x2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
    var y2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;

    _classCallCheck(this, BinaryElement);

    var _this = _possibleConstructorReturn(this, (BinaryElement.__proto__ || Object.getPrototypeOf(BinaryElement)).call(this, id));

    _this.x1 = x1;
    _this.x2 = x2;
    _this.y1 = y1;
    _this.y2 = y2;
    _this.setPath(x1, y1, x2, y2);
    return _this;
  }

  _createClass(BinaryElement, [{
    key: 'setPath',
    value: function setPath(x1, y1, x2, y2) {
      this.x1 = x1;
      this.x2 = x2;
      this.y1 = y1;
      this.y2 = y2;

      this.path = new Path2D();
      this.path.moveTo(x1, y1);
      this.path.lineTo(x1, y1);
      this.path.lineTo(x2, y2);
    }
  }]);

  return BinaryElement;
}(_Element2.Element);