'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

var _ = require('../');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCommand = exports.AddCommand = function (_Command) {
  _inherits(AddCommand, _Command);

  function AddCommand(props) {
    _classCallCheck(this, AddCommand);

    var _this = _possibleConstructorReturn(this, (AddCommand.__proto__ || Object.getPrototypeOf(AddCommand)).call(this));

    _this.filename = props.filename;
    return _this;
  }

  _createClass(AddCommand, [{
    key: 'execute',
    value: function execute() {
      console.log('AddCommand::execute()');
      this.element = this.diagram.addPath();
      console.log('AddCommand::execute::element', this.element);
    }
  }, {
    key: 'undo',
    value: function undo() {
      console.log('AddCommand::undo()');
      this.canvas.removePath(this.element.getId());
    }
  }, {
    key: 'redo',
    value: function redo() {
      console.log('AddCommand::redo()');
      this.execute();
    }
  }]);

  return AddCommand;
}(_Command2.Command);