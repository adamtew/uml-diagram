'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveCommand = exports.SaveCommand = function (_Command) {
  _inherits(SaveCommand, _Command);

  function SaveCommand(props) {
    _classCallCheck(this, SaveCommand);

    var _this = _possibleConstructorReturn(this, (SaveCommand.__proto__ || Object.getPrototypeOf(SaveCommand)).call(this));

    _this.filename = props.filename;
    return _this;
  }

  _createClass(SaveCommand, [{
    key: 'execute',
    value: function execute() {
      console.log('SaveCommand::execute()');
      var paths = this.canvas.getPaths();
      this.canvas.save();
      console.log('this.canvas.getPaths()', this.filename, JSON.stringify(paths));
    }
  }, {
    key: 'undo',
    value: function undo() {
      console.log('SaveCommand::undo()');
    }
  }, {
    key: 'redo',
    value: function redo() {
      console.log('SaveCommand::redo()');
      this.execute();
    }
  }]);

  return SaveCommand;
}(_Command2.Command);