import { Command } from './Command'

export class ClearSelectedElementsCommand extends Command {
  constructor(props) {
    super()
    this.canUndo = false
  }

  execute() {
    this.diagram.clearSelectedElements()
  }

  undo() {
    
  }

  redo() {
    this.execute()
  }
}
