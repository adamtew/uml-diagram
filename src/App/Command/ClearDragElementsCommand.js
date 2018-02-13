import { Command } from './Command'

export class ClearDragElementsCommand extends Command {
  execute() {
    this.dragElements = this.diagram.getDragElements()
    this.diagram.clearDragElements()
    this.canUndo = false
  }

  undo() {
    // we don't want to undo this
    //this.diagram.setDragElements(this.dragElements)
  }

  redo() {
    this.execute()
  }
}
