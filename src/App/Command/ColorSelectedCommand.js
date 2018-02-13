import { Command } from './Command'

export class ColorSelectedCommand extends Command {
  constructor(props) {
    super()
    this.prevColor = props.diagram.color
    this.color = props.color
  }

  execute() {
    this.diagram.setSelectedColors(this.color)
  }

  undo() {
    this.diagram.setSelectedColors(this.prevColor)
  }

  redo() {
    this.execute()
  }
}
