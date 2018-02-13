'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClearCommand = exports.ClearCommand = function (_Command) {
  _inherits(ClearCommand, _Command);

  function ClearCommand(props) {
    _classCallCheck(this, ClearCommand);

    return _possibleConstructorReturn(this, (ClearCommand.__proto__ || Object.getPrototypeOf(ClearCommand)).call(this));
  }

  _createClass(ClearCommand, [{
    key: 'execute',
    value: function execute() {
      console.log('AddCommand::execute()');
      this.paths = this.canvas.getPaths();
      this.canvas.clearPaths();
    }
  }, {
    key: 'undo',
    value: function undo() {
      console.log('AddCommand::undo()');
      this.canvas.setPaths(this.paths);
    }
  }, {
    key: 'redo',
    value: function redo() {
      console.log('AddCommand::redo()');
      this.execute();
    }
  }]);

  return ClearCommand;
}(_Command2.Command);