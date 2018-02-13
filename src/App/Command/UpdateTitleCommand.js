import { Command } from './Command'

export class UpdateTitleCommand extends Command {
  constructor(props) {
    super()
    this.prevTitle = props.diagram.getTitle()
    this.title = props.title
  }

  execute() {
    this.diagram.setTitle(this.title)
  }

  undo() {
    this.diagram.setTitle(this.prevTitle)
  }

  redo() {
    this.execute()
  }
}
