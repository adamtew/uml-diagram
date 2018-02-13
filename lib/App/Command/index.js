'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandFactory = exports.MakeBinaryCommand = exports.NewCommand = exports.MoveCommand = exports.ClearCommand = exports.AddCommand = exports.LoadCommand = exports.SaveCommand = exports.RedoCommand = exports.UndoCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UndoCommand = require('./UndoCommand');

Object.defineProperty(exports, 'UndoCommand', {
  enumerable: true,
  get: function get() {
    return _UndoCommand.UndoCommand;
  }
});

var _RedoCommand = require('./RedoCommand');

Object.defineProperty(exports, 'RedoCommand', {
  enumerable: true,
  get: function get() {
    return _RedoCommand.RedoCommand;
  }
});

var _SaveCommand = require('./SaveCommand');

Object.defineProperty(exports, 'SaveCommand', {
  enumerable: true,
  get: function get() {
    return _SaveCommand.SaveCommand;
  }
});

var _LoadCommand = require('./LoadCommand');

Object.defineProperty(exports, 'LoadCommand', {
  enumerable: true,
  get: function get() {
    return _LoadCommand.LoadCommand;
  }
});

var _AddCommand = require('./AddCommand');

Object.defineProperty(exports, 'AddCommand', {
  enumerable: true,
  get: function get() {
    return _AddCommand.AddCommand;
  }
});

var _ClearCommand = require('./ClearCommand');

Object.defineProperty(exports, 'ClearCommand', {
  enumerable: true,
  get: function get() {
    return _ClearCommand.ClearCommand;
  }
});

var _MoveCommand = require('./MoveCommand');

Object.defineProperty(exports, 'MoveCommand', {
  enumerable: true,
  get: function get() {
    return _MoveCommand.MoveCommand;
  }
});

var _NewCommand = require('./NewCommand');

Object.defineProperty(exports, 'NewCommand', {
  enumerable: true,
  get: function get() {
    return _NewCommand.NewCommand;
  }
});

var _MakeBinaryCommand = require('./MakeBinaryCommand');

Object.defineProperty(exports, 'MakeBinaryCommand', {
  enumerable: true,
  get: function get() {
    return _MakeBinaryCommand.MakeBinaryCommand;
  }
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandFactory = exports.CommandFactory = function () {
  function CommandFactory() {
    _classCallCheck(this, CommandFactory);
  }

  _createClass(CommandFactory, [{
    key: 'setInvoker',
    value: function setInvoker(invoker) {
      this.invoker = invoker;
    }
  }, {
    key: 'setDiagram',
    value: function setDiagram(diagram) {
      this.diagram = diagram;
    }

    // invoker queue
    // redo stack
    // undo stack

    // elements inside the commands
    // commands:
    // addLine
    // addBox
    // addLabeledBox

  }, {
    key: 'invokeAndDo',
    value: function invokeAndDo(commandName) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var command = null;
      switch (commandName) {
        case 'Save':
          command = new _SaveCommand.SaveCommand(props);break;
        case 'Load':
          command = new _LoadCommand.LoadCommand(props);break;
        case 'Add':
          command = new _AddCommand.AddCommand(props);break;
        case 'Clear':
          command = new _ClearCommand.ClearCommand(props);break;
        case 'Move':
          command = new _MoveCommand.MoveCommand(props);break;
        case 'New':
          command = new _NewCommand.NewCommand(props);break;
        case 'MakeBinary':
          command = new _MakeBinaryCommand.MakeBinaryCommand(props);break;
      }

      if (command != null) {
        command.setDiagram(this.diagram);
        this.invoker.invoke(command);
      }
    }
  }]);

  return CommandFactory;
}();