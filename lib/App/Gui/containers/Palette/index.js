'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Palette = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Palette = exports.Palette = function (_React$Component) {
  _inherits(Palette, _React$Component);

  function Palette() {
    _classCallCheck(this, Palette);

    return _possibleConstructorReturn(this, (Palette.__proto__ || Object.getPrototypeOf(Palette)).apply(this, arguments));
  }

  _createClass(Palette, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'palette-container'
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            null,
            'Title'
          ),
          _react2.default.createElement('input', { type: 'textbox' })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.props.onNew },
            'New'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.props.onClear },
            'Clear'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.props.onUndo },
            'Undo'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.props.onRedo },
            'Redo'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.props.onCreateClass },
            'CreateClass'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.props.onSave },
            'Save'
          )
        ),
        'Palette'
      );
    }
  }, {
    key: 'keydown',
    value: function keydown(e) {
      //console.log('keydown', e.which)
      if (e.which === 17) {
        this.controlPressed = true;
      }
      //this.shiftPress = e.which === 16 ? true : false // shift

      if (this.controlPressed) {
        switch (e.which) {
          case 83:
            this.props.onSave();break; // s
          case 67:
            this.props.onClear();break; // c
          case 66:
            this.props.onCreateClass();break; // b
          case 90:
            this.props.onUndo();break; // z
          case 89:
            this.props.onRedo();break; // y
          case 78:
            this.props.onNew();break; // n
        }
      }
    }
  }, {
    key: 'keyup',
    value: function keyup(e) {
      //console.log('keyup', e.which)
      this.controlPressed = false;
      this.shiftPressed = false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.keydown = this.keydown.bind(this);
      this.keyup = this.keyup.bind(this);
      this.controlPressed = false;
      this.shiftPressed = false;

      window.addEventListener('keydown', this.keydown);
      window.addEventListener('keyup', this.keyup);
    }
  }]);

  return Palette;
}(_react2.default.Component);