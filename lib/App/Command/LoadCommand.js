'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadCommand = exports.LoadCommand = function (_Command) {
  _inherits(LoadCommand, _Command);

  function LoadCommand(props) {
    _classCallCheck(this, LoadCommand);

    var _this = _possibleConstructorReturn(this, (LoadCommand.__proto__ || Object.getPrototypeOf(LoadCommand)).call(this));

    _this.filename = props.filename;
    return _this;
  }

  _createClass(LoadCommand, [{
    key: 'execute',
    value: function execute() {
      console.log('LoadCommand::execute()');
      console.log('saving to file:', this.filename);
    }
  }, {
    key: 'undo',
    value: function undo() {
      console.log('LoadCommand::undo()');
    }
  }, {
    key: 'redo',
    value: function redo() {
      console.log('LoadCommand::redo()');
      this.execute();
    }
  }]);

  return LoadCommand;
}(_Command2.Command);