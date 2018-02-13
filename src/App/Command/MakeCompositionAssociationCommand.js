import { Command } from './Command'

export class MakeCompositionAssociationCommand extends Command {
  execute() {
    this.association = this.diagram.makeCompositionAssociation()
  }

  undo() {
    this.diagram.removeAssociation(this.association.getId())
  }

  redo() {
    this.execute()
  }
}
