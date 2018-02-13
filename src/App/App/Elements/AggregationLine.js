import { LineElement } from './'

export class AggregationLine extends LineElement {
  setPath() {
    this.path = new Path2D()
    const { x1, y1, x2, y2 } = this.getLocations()
    const head = 10
    const angle = Math.atan(y2-y1, x2-x1)
    this.path.moveTo(x1, y1)
    this.path.lineTo(x2-head,y2-head)
    this.path.lineTo(x2,y2-head)
    this.path.lineTo(x2, y2)
    this.path.lineTo(x2-head,y2)
    this.path.lineTo(x2-head,y2-head)
  }
}
