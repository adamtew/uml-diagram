import { Command } from './Command'

export class RedoCommand extends Command {
  constructor() {
    super()
  }

  execute() {
    console.log('RedoCommand::execute()')
  }
  
  undo() {
    console.log('RedoCommand::undo()')
  }

  redo() {
    console.log('RedoCommand::redo()')
  }
}
