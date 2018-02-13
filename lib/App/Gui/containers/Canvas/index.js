'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = exports.Canvas = function (_React$Component) {
  _inherits(Canvas, _React$Component);

  function Canvas(props) {
    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props));

    _this.shiftPressed = false;

    _this.setDiagram(props.diagram);

    _this.draw = _this.draw.bind(_this);
    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.keydown = _this.keydown.bind(_this);
    _this.keyup = _this.keyup.bind(_this);
    return _this;
  }

  _createClass(Canvas, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('canvas', {
          width: this.props.width,
          height: this.props.height,
          ref: function ref(_ref) {
            return _this2.canvas = _ref;
          },
          id: 'canvas',
          className: 'canvas'
        })
      );
    }

    // ------------------ Getters ------------------

  }, {
    key: 'setCommandFactory',
    value: function setCommandFactory(factory) {
      this.commandFactory = factory;
    }
  }, {
    key: 'setDiagram',
    value: function setDiagram(diagram) {
      console.log('diagram', this.diagram);
      this.diagram = diagram;
    }

    // ------------------ Draw ------------------

  }, {
    key: 'draw',
    value: function draw() {
      var _this3 = this;

      //this.adam.should.stop.coding.and.hang.with.the.freinds((['Jack', 'Bryant',        'Anna', 'Bobby']).because('it\'s friday night and its time to party!!')
      this.clear();
      this.ctx.font = '20px serif';
      this.diagram.getPaths().map(function (item) {
        _this3.ctx.fillStyle = item.getColor();
        _this3.ctx.fill(item.getPath());
        _this3.ctx.fillStyle = "black";
        _this3.ctx.fillText(item.getTitle(), item.getBox().x, item.getBox().y + 20);
        // item.getAssociations().map((association) => {
        //   this.ctx.stroke(association.getPath())
        // })
      });

      this.diagram.getSelectedElements().map(function (item) {
        _this3.ctx.fillStyle = '#d3d3d3';
        _this3.ctx.fill(item.getPath());
        _this3.ctx.fillStyle = "black";
        _this3.ctx.fillText(item.getTitle(), item.getBox().x, item.getBox().y + 20);
      });

      this.diagram.getAssociations().map(function (item) {
        _this3.ctx.stroke(item.getPath());
      });
    }
  }, {
    key: 'getPoint',
    value: function getPoint(e) {
      var offset = e.target.getBoundingClientRect();
      var mouseX = e.clientX - offset.left;
      var mouseY = e.clientY - offset.top;
      return { x: mouseX, y: mouseY };
    }

    // ------------------ Events ------------------

  }, {
    key: 'clear',
    value: function clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(e) {
      var _getPoint = this.getPoint(e),
          x = _getPoint.x,
          y = _getPoint.y;

      this.diagram.dragElementAtPosition(x, y);
      if (this.shiftPressed) {
        this.diagram.selectElementAtPosition(x, y);
      } else {
        console.log('clearSelectedElements');
        this.diagram.clearSelectedElements();
      }

      this.draw();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      var _getPoint2 = this.getPoint(e),
          x = _getPoint2.x,
          y = _getPoint2.y;

      this.diagram.updateDragElements(x, y);
      this.draw();
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      var _getPoint3 = this.getPoint(e),
          x = _getPoint3.x,
          y = _getPoint3.y;

      this.diagram.clearDragElements();
      // if (this.dragElement) {
      //   this.commandFactory.invokeAndDo('Move', {element: this.dragElement, x: x, y: y})
      //   this.dragElement = null
      // }
      this.draw();
    }
  }, {
    key: 'keydown',
    value: function keydown(e) {
      console.log('keydown', e.which);

      if (e.which === 16) {
        this.shiftPressed = true;
      }
      switch (e.which) {
        case 67:
          this.diagram.makeBinaryAssociation();break;
        case 86:
          this.diagram.makeAggregationAssociation();break;
        case 88:
          this.diagram.makeCompositionAssociation();break;
        case 81:
          this.diagram.clear();break;
      }
      this.draw();
    }
  }, {
    key: 'keyup',
    value: function keyup(e) {
      this.shiftPressed = false;
      this.draw();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ctx = this.canvas.getContext('2d');

      this.canvas.onmousedown = this.onMouseDown;
      this.canvas.onmousemove = this.onMouseMove;
      this.canvas.onmouseup = this.onMouseUp;

      window.addEventListener('keydown', this.keydown);
      window.addEventListener('keyup', this.keyup);
    }
  }]);

  return Canvas;
}(_react2.default.Component);