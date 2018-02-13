'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Element2 = require('./Element');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClassElement = exports.ClassElement = function (_Element) {
  _inherits(ClassElement, _Element);

  function ClassElement(id, x, y, width, height) {
    var title = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'title';

    _classCallCheck(this, ClassElement);

    var _this = _possibleConstructorReturn(this, (ClassElement.__proto__ || Object.getPrototypeOf(ClassElement)).call(this, id, x, y));

    _this.title = title;
    _this.width = width;
    _this.height = height;

    _this.associations = [];
    _this.setPath(x, y, _this.width, _this.height);
    return _this;
  }

  // --------------- Getters -----------------

  _createClass(ClassElement, [{
    key: 'getAssociations',
    value: function getAssociations() {
      var _this2 = this;

      console.log('getAssociations before', this.associations);
      this.associations.forEach(function (item) {
        return item.setPath(_this2.x, _this2.y, item.x2, item.y2);
      });
      console.log('getAssociations after', this.associations);
      return this.associations;
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      this.color = this.color ? this.color : 'gray';
      return this.color;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      return this.title;
    }

    // --------------- Setters -----------------

  }, {
    key: 'setTitle',
    value: function setTitle(title) {
      this.title = title;
    }
  }, {
    key: 'setAssociations',
    value: function setAssociations() {
      this.associations.map(function (item) {});
    }
  }, {
    key: 'setPath',
    value: function setPath(x, y) {
      this.x = x;
      this.y = y;
      this.path = new Path2D();
      this.path.rect(x, y, this.width, this.height);
    }

    // --------------- Setters -----------------

  }, {
    key: 'addAssociation',
    value: function addAssociation(association) {
      this.associations = [].concat(_toConsumableArray(this.associations), [association]);
    }
  }]);

  return ClassElement;
}(_Element2.Element);