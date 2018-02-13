import { Command } from './Command'

export class UndoCommand extends Command {
  constructor() {
    super()
  }

  execute() {
    console.log('UndoCommand::execute()')
  }
  
  undo() {
    console.log('UndoCommand::undo()')
  }

  redo() {
    console.log('UndoCommand::redo()')
  }
}
