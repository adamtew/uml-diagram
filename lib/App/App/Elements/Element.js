'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//export const getCanvasBox = (x=10, y=10, width=50, height=50) => {
var Element = exports.Element = function () {
  function Element(id) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
    var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 50;

    _classCallCheck(this, Element);

    this.id = id;
    this.x = x;
    this.y = y;
  }

  // ------------- Getters -----------------

  _createClass(Element, [{
    key: 'getLocation',
    value: function getLocation() {
      return { x: this.x, y: this.y };
    }
  }, {
    key: 'getPath',
    value: function getPath() {
      return this.path;
    }
  }, {
    key: 'getBox',
    value: function getBox() {
      return { x: this.x, y: this.y, width: this.width, height: this.height };
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      this.color = this.color ? this.color : 'black';
      return this.color;
    }
  }, {
    key: 'getCenter',
    value: function getCenter() {
      return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    }
  }, {
    key: 'getId',
    value: function getId() {
      return this.id;
    }

    // ------------- Getters -----------------

  }, {
    key: 'setColor',
    value: function setColor(color) {
      this.color = color;
    }
  }]);

  return Element;
}();