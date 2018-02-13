export class Element {
  constructor(id, x=10, y=10) {
    this.id = id
    this.x = x
    this.y = y
  }

  // ------------- Getters -----------------

  getLocation() {
    return { x: this.x, y: this.y }
  }

  getPath() {
    return this.path
  }

  getBox() {
    return { x: this.x, y: this.y, width: this.width, height: this.height }
  }

  getColor() {
    this.color = this.color ? this.color : 'black'
    return this.color
  }

  getCenter() {
    return { x: this.x + (this.width / 2), y: this.y + (this.height / 2)}
  }

  getId() {
    return this.id
  }

  // ------------- Getters -----------------

  setColor(color) {
    this.color = color
  }

}
