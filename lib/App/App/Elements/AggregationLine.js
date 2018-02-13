'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AggregationLine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('./');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AggregationLine = exports.AggregationLine = function (_LineElement) {
  _inherits(AggregationLine, _LineElement);

  function AggregationLine() {
    _classCallCheck(this, AggregationLine);

    return _possibleConstructorReturn(this, (AggregationLine.__proto__ || Object.getPrototypeOf(AggregationLine)).apply(this, arguments));
  }

  _createClass(AggregationLine, [{
    key: 'setPath',
    value: function setPath() {
      this.path = new Path2D();

      var _getLocations = this.getLocations(),
          x1 = _getLocations.x1,
          y1 = _getLocations.y1,
          x2 = _getLocations.x2,
          y2 = _getLocations.y2;

      var head = 10;
      var angle = Math.atan(y2 - y1, x2 - x1);
      this.path.moveTo(x1, y1);
      this.path.lineTo(x2, y2);
      this.path.lineTo(x2, y2 + head);
      this.path.lineTo(x2 + head, y2 + head);
      this.path.lineTo(x2 + head, y2);
      this.path.moveTo(x2, y2);
    }
  }]);

  return AggregationLine;
}(_.LineElement);