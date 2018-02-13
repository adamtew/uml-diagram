import { Command } from './Command'

export class MakeAggregationAssociationCommand extends Command {
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
