import { Command } from './Command'
import { Element } from '../'

export class AddCommand extends Command {
  constructor(props) {
    super()
  }

  execute() {
    this.element = this.diagram.addPath()
  }

  undo() {
    this.diagram.removePath(this.element.getId())
  }

  redo() {
    this.execute()
  }
}
