'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('./App');

var _Gui = require('./Gui');

var _Command = require('./Command');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.id = 0;
    _this.invoker = new _App.Invoker();
    _this.commandFactory = new _Command.CommandFactory();
    _this.commandFactory.setInvoker(_this.invoker);
    _this.diagram = new _App.Diagram();
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'body' },
        _react2.default.createElement(
          'div',
          { className: 'body-squeeze' },
          _react2.default.createElement(_Gui.Palette, {
            onNew: function onNew() {
              return _this2.commandFactory.invokeAndDo('New', {});
            },
            onClear: function onClear() {
              return _this2.commandFactory.invokeAndDo('Clear', {});
            },
            onCreateClass: function onCreateClass() {
              return _this2.commandFactory.invokeAndDo('Add', {});
            },
            onUndo: function onUndo() {
              return _this2.invoker.undo();
            },
            onRedo: function onRedo() {
              return _this2.invoker.redo();
            },
            onSave: function onSave() {
              return _this2.commandFactory.invokeAndDo('Save', { filename: '' });
            }
          }),
          _react2.default.createElement(_Gui.Canvas, {
            width: 500,
            height: 500,
            commandFactory: this.commandFactory,
            diagram: this.diagram,
            ref: function ref(el) {
              return _this2.canvas = el;
            }
          }),
          _react2.default.createElement('div', { className: 'float--left' })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.commandFactory.setDiagram(this.diagram);
      this.canvas.setCommandFactory(this.commandFactory);
    }
  }]);

  return App;
}(_react2.default.Component);