'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Invoker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Command = require('../../Command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Invoker = exports.Invoker = function () {
  function Invoker() {
    _classCallCheck(this, Invoker);

    console.log('Invoker::constructor()');
    this.undoStack = [];
    this.redoStack = [];
  }

  _createClass(Invoker, [{
    key: 'invoke',
    value: function invoke(cmd) {
      if (cmd.constructor.name === 'UndoCommand') {
        this.executeUndo();
      } else if (cmd.constructor.name === 'RedoCommand') {
        this.executeRedo();
      } else {
        cmd.execute();
        this.undoStack.push(cmd);
      }
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.invoke(new _Command.UndoCommand());
    }
  }, {
    key: 'redo',
    value: function redo() {
      this.invoke(new _Command.RedoCommand());
    }
  }, {
    key: 'executeUndo',
    value: function executeUndo() {
      if (this.undoStack.length <= 0) return;

      var cmd = this.undoStack.pop();
      cmd.undo();
      this.redoStack.push(cmd);
    }
  }, {
    key: 'executeRedo',
    value: function executeRedo() {
      if (this.redoStack.length <= 0) return;

      var cmd = this.redoStack.pop();
      cmd.redo();
      this.undoStack.push(cmd);
    }
  }]);

  return Invoker;
}();