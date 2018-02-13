import { LineElement } from './'

export class CompositionLine extends LineElement {
  setPath() {
    this.path = new Path2D()
    const { x1, y1, x2, y2 } = this.getLocations()
    const head = 10
    const angle = Math.atan(y2-y1, x2-x1)
    this.path.moveTo(x1, y1)
    this.path.lineTo(x2, y2)
    this.path.lineTo(x2-head*Math.cos(angle-Math.PI/6),y2-head*Math.sin(angle-Math.PI/6));
    this.path.moveTo(x2, y2);
    this.path.lineTo(x2-head*Math.cos(angle+Math.PI/6),y2-head*Math.sin(angle+Math.PI/6));
  }
}
