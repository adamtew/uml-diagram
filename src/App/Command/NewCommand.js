import { Command } from './Command'

export class NewCommand extends Command {
  constructor(props) {
    super()
  }

  execute() {
    this.diagram.clear()
  }

  undo() {
    //this.canvas.removePath(this.element.getId())
  }

  redo() {
    this.execute()
  }
}
