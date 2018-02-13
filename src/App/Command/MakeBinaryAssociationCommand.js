import { Command } from './Command'

export class MakeBinaryAssociationCommand extends Command {
  execute() {
    this.element = this.diagram.makeBinaryAssociation()
  }

  undo() {
    this.diagram.removeAssociation(this.element.getId())
  }

  redo() {
    this.execute()
  }
}
