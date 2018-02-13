import { Command } from './Command'

export class DeleteSelectedElementsCommand extends Command {
  constructor(props) {
    super()
    console.log('inside that deleter thinger')
  }

  execute() {
    this.diagram.removeSelectedElements()
  }

  undo() {
    console.log('SaveCommand::undo()')
  }

  redo() {
    console.log('SaveCommand::redo()')
    this.execute()
  }
}
