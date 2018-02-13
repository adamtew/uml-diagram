import { Command } from './Command'

export class LoadCommand extends Command {
  constructor(props) {
    super()
    console.log('LoadCommand', props)
    //this.prevState = this.diagram.getState()
    this.state = JSON.parse(props.fileContent)
  }

  execute() {
    console.log('LoadCommand::execute()')
    console.log('this.state', this.state)
    this.prevState = this.diagram.getState()
    this.diagram.clear()
    this.diagram.setState(this.state)
  }

  undo() {
    console.log('LoadCommand::undo()')
    this.diagram.clear()
    this.diagram.setState(this.prevState)
  }

  redo() {
    console.log('LoadCommand::redo()')
    this.execute()
  }
}
