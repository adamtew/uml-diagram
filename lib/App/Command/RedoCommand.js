'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedoCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RedoCommand = exports.RedoCommand = function (_Command) {
  _inherits(RedoCommand, _Command);

  function RedoCommand() {
    _classCallCheck(this, RedoCommand);

    return _possibleConstructorReturn(this, (RedoCommand.__proto__ || Object.getPrototypeOf(RedoCommand)).call(this));
  }

  _createClass(RedoCommand, [{
    key: 'execute',
    value: function execute() {
      console.log('RedoCommand::execute()');
    }
  }, {
    key: 'undo',
    value: function undo() {
      console.log('RedoCommand::undo()');
    }
  }, {
    key: 'redo',
    value: function redo() {
      console.log('RedoCommand::redo()');
    }
  }]);

  return RedoCommand;
}(_Command2.Command);