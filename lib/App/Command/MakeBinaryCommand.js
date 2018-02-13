'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeBinaryCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command2 = require('./Command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MakeBinaryCommand = exports.MakeBinaryCommand = function (_Command) {
  _inherits(MakeBinaryCommand, _Command);

  function MakeBinaryCommand(props) {
    _classCallCheck(this, MakeBinaryCommand);

    var _this = _possibleConstructorReturn(this, (MakeBinaryCommand.__proto__ || Object.getPrototypeOf(MakeBinaryCommand)).call(this));

    _this.first = props.first;
    _this.second = props.second;
    return _this;
  }

  _createClass(MakeBinaryCommand, [{
    key: 'execute',
    value: function execute() {
      console.log('MakeBinaryCommand::execute()');

      var _first$getBox = this.first.getBox(),
          x = _first$getBox.x,
          y = _first$getBox.y;

      var x2 = this.second.getBox().x;
      var y2 = this.second.getBox().y;
      this.element = this.canvas.connectPaths(x, y, x2, y2);
    }
  }, {
    key: 'undo',
    value: function undo() {
      console.log('MakeBinaryCommand::undo()');
    }
  }, {
    key: 'redo',
    value: function redo() {
      console.log('MakeBinaryCommand::redo()');
      this.execute();
    }
  }]);

  return MakeBinaryCommand;
}(_Command2.Command);