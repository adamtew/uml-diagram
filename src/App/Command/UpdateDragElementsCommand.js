import { Command } from './Command'

export class UpdateDragElementsCommand extends Command {
  constructor(props) {
    super()
    const { x, y } = props
    this.x = x
    this.y = y
    this.canUndo = false
  }

  execute() {
    this.diagram.updateDragElements(this.x, this.y)
  }

  undo() {
    
  }

  redo() {
    this.execute()
  }
}
