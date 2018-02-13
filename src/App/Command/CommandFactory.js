import { SaveCommand } from './SaveCommand'
import { UndoCommand } from './UndoCommand'
import { RedoCommand } from './RedoCommand'
import { LoadCommand } from './LoadCommand'
import { AddCommand } from './AddCommand'
import { ClearCommand } from './ClearCommand'
import { MoveCommand } from './MoveCommand'
import { NewCommand } from './NewCommand'
import { DragElementAtPositionCommand } from './DragElementAtPositionCommand'
import { SelectElementAtPositionCommand } from './SelectElementAtPositionCommand'
import { ClearSelectedElementsCommand } from './ClearSelectedElementsCommand'
import { UpdateDragElementsCommand } from './UpdateDragElementsCommand'
import { ClearDragElementsCommand } from './ClearDragElementsCommand'
import { MakeBinaryAssociationCommand } from './MakeBinaryAssociationCommand'
import { MakeAggregationAssociationCommand } from './MakeAggregationAssociationCommand'
import { MakeCompositionAssociationCommand } from './MakeCompositionAssociationCommand'
import { MakeGeneralizationAssociationCommand } from './MakeGeneralizationAssociationCommand'
import { DeleteSelectedElementsCommand } from './DeleteSelectedElementsCommand'
import { ColorCommand } from './ColorCommand'
import { ColorSelectedCommand } from './ColorSelectedCommand'
import { UpdateTitleCommand } from './UpdateTitleCommand'

export class CommandFactory {
  constructor() {
    this.invoker = null
    this.diagram = null
    this.invokeAndDo = this.invokeAndDo.bind(this)
  }

  getInvoker() {
    return this.invoker
  }

  getDiagram() {
    return this.diagram
  }

  setInvoker(invoker) {
    this.invoker = invoker
  }

  setDiagram(diagram) {
    this.diagram = diagram
  }

  invokeAndDo(commandName, props={}) {
    let command = null
    props.diagram = this.diagram
    switch (commandName) {
      case 'Undo': this.invoker.undo(); break;
      case 'Redo': this.invoker.redo(); break;
      case 'Save': command = new SaveCommand(props); break;
      case 'Load': command = new LoadCommand(props); break;
      case 'Add': command = new AddCommand(props); break;
      case 'Clear': command = new ClearCommand(props); break;
      case 'Move': command = new MoveCommand(props); break;
      case 'New': command = new NewCommand(props); break;
      case 'DragElementAtPosition': command = new DragElementAtPositionCommand(props); break;
      case 'SelectElementAtPosition': command = new SelectElementAtPositionCommand(props); break;
      case 'ClearSelectedElements': command = new ClearSelectedElementsCommand(props); break;
      case 'UpdateDragElements': command = new UpdateDragElementsCommand(props); break;
      case 'ClearDragElements': command = new ClearDragElementsCommand(props); break;
      case 'MakeBinaryAssociation': command = new MakeBinaryAssociationCommand(props); break;
      case 'MakeAggregationAssociation': command = new MakeAggregationAssociationCommand(props); break;
      case 'MakeCompositionAssociation': command = new MakeCompositionAssociationCommand(props); break;
      case 'MakeGeneralizationAssociation': command = new MakeGeneralizationAssociationCommand(props); break;
      case 'DeleteSelectedElements': command = new DeleteSelectedElementsCommand(props); break;
      case 'Color': command = new ColorCommand(props); break;
      case 'ColorSelected': command = new ColorSelectedCommand(props); break;
      case 'UpdateTitle': command = new UpdateTitleCommand(props); break;
    }
    
    if (command != null) {
      command.setDiagram(this.diagram)
      this.invoker.invoke(command)
    }
  }
}
