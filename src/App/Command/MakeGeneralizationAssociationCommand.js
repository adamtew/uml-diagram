import { Command } from './Command'

export class MakeGeneralizationAssociationCommand extends Command {
  execute() {
    this.element = this.diagram.makeAggregationAssociation()
  }

  undo() {
    this.diagram.removeAssociation(this.element.getId())
  }

  redo() {
    this.execute()
  }
}
