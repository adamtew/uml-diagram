import { Command } from './Command'

export class ClearCommand extends Command {
  execute() {
    this.state = this.diagram.getState()
    this.diagram.clear()
  }

  undo() {
    this.diagram.setState(this.state)
  }

  redo() {
    this.execute()
  }
}

