import { UndoCommand, RedoCommand } from '../../Command'

export class Invoker {
  constructor() {
    this.undoStack = []
    this.redoStack = []
    this.undo = this.undo.bind(this)
    this.redo = this.redo.bind(this)
  }

  invoke(cmd) {
    if (cmd.constructor.name === 'UndoCommand') {
      this.executeUndo()
    }
    else if (cmd.constructor.name === 'RedoCommand') {
      this.executeRedo()
    }
    else {
      cmd.execute()
      if (cmd.isUndoable()) {
        this.undoStack.push(cmd)
      }
    }
  }

  undo() {
    this.invoke(new UndoCommand())
  }

  redo() {
    this.invoke(new RedoCommand())
  }

  executeUndo() {
    if (this.undoStack.length <= 0) return
    console.log('undostack is not empty...', this.undoStack)

    const cmd = this.undoStack.pop()
    cmd.undo()
    this.redoStack.push(cmd)
  }

  executeRedo() {
    if (this.redoStack.length <= 0) return
    
    const cmd = this.redoStack.pop()
    cmd.redo()
    this.undoStack.push(cmd)
  }
}
