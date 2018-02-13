import { Element } from './Element'

export class BinaryElement extends Element {
  constructor(id, x1=10, y1=10, x2=20, y2=20) {
    super(id)
    this.x1 = x1
    this.x2 = x2
    this.y1 = y1
    this.y2 = y2
    this.setPath(x1, y1, x2, y2)
  }

  setPath(x1, y1, x2, y2) {
    this.x1 = x1
    this.x2 = x2
    this.y1 = y1
    this.y2 = y2

    this.path = new Path2D()
    this.path.moveTo(x1, y1)
    this.path.lineTo(x1, y1)
    this.path.lineTo(x2, y2)
  }
}
