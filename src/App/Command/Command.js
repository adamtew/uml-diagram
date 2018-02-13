export class Command {
  constructor() {
    this.canUndo = true
  }

  isUndoable() {
    return this.canUndo
  }
  setDiagram(diagram) {
    this.diagram = diagram
  }

  execute() {
    console.log('unimplemented Command::execute()')
  }
  
  undo() {
    console.log('unimplemented Command::undo()')
  }

  redo() {
    console.log('unimplemented Command::redo()')
  }
}
