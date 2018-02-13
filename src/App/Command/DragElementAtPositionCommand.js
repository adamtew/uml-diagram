import { Command } from './Command'

export class DragElementAtPositionCommand extends Command {
  constructor(props) {
    super()
    const { x, y } = props
    this.x = x
    this.y = y
    this.canUndo = false
  }
  execute() {
    this.diagram.dragElementAtPosition(this.x, this.y)
  }

  undo() {
    
  }

  redo() {
    this.execute()
  }
}
