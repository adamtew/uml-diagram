import { Command } from './Command'

export class ColorCommand extends Command {
  constructor(props) {
    super()
    this.prevColor = props.diagram.getBackgroundColor()
    this.color = props.color
  }

  execute() {
    this.diagram.setBackgroundColor(this.color)
  }

  undo() {
    this.diagram.setBackgroundColor(this.prevColor)
  }

  redo() {
    this.execute()
  }
}
