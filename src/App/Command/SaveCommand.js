import { Command } from './Command'

export class SaveCommand extends Command {
  constructor(props) {
    super()
    this.filename = props.filename
  }

  execute() {
    console.log('SaveCommand::execute()')
    const state = this.diagram.getState()
    //console.log('state', state)
    const stateString = JSON.stringify(state)
    console.log('JSON.stringify(state)', JSON.stringify(state))
    //const paths = this.canvas.getPaths()
    //this.canvas.save()
    console.log('this.canvas.getPaths()', this.filename, state)
    const uriContent = "data:application/octet-stream," + encodeURIComponent(stateString);
    const newWindow = window.open(uriContent, 'saved');
  }

  undo() {
    console.log('SaveCommand::undo()')
  }

  redo() {
    console.log('SaveCommand::redo()')
    this.execute()
  }
}
