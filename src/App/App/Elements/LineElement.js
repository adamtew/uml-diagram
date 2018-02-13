import { Element } from './'

export class LineElement extends Element {
  constructor(id, firstElement, secondElement) {
    const { x, y } = firstElement.getLocation()
    super(id, x, y)
    this.firstElement = firstElement
    this.secondElement = secondElement
    this.setPath()
  }

  getLocations() {
    const { x, y } = this.firstElement.getLocation()
    return {
      x1: x,
      y1: y, 
      x2: this.secondElement.getLocation().x,
      y2: this.secondElement.getLocation().y,
    }
  }

  setPath() {
    this.path = new Path2D()
    const { x1, y1, x2, y2 } = this.getLocations()
    this.path.moveTo(x1, y1)
    this.path.lineTo(x1, y1)
    this.path.lineTo(x2, y2)
  }

  getPath() {
    this.setPath()
    return this.path
  }
}
