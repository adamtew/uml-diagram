import { Command } from './Command'

export class SelectElementAtPositionCommand extends Command {
  constructor(props) {
    super()
    const { x, y } = props
    this.x = x
    this.y = y
  }

  execute() {
    this.element = this.diagram.selectElementAtPosition(this.x, this.y)
    if (this.element)
      this.canUndo = true
    else
      this.canUndo = false
  }

  undo() {
    this.diagram.removeSelectedElement(this.element.getId())
  }

  redo() {
    this.execute()
  }
}
