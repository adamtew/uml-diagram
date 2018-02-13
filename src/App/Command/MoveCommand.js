import { Command } from './Command'
import { Element } from '../'

export class MoveCommand extends Command {
  constructor(props) {
    super()
    const { x1, y1, x2, y2} = props
    
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.diagram = props.diagram
    this.moveElements = [ ...this.diagram.getDragElements() ]
  }

  execute() {
    this.diagram.updatePaths(this.x2, this.y2, this.moveElements)
  }

  undo() {
    this.diagram.updatePaths(this.x1, this.y1, this.moveElements)
  }

  redo() {
    this.execute()
  }
}
