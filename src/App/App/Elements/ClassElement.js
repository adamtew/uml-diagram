import { Element } from './Element'

export class ClassElement extends Element {
  constructor(id, x, y, width=50, height=50, title='title') {
    super(id, x, y)
    this.title = title
    this.width = width
    this.height = height

    this.associations = []
    this.path = null
    this.setPath(x, y, this.width, this.height)
  }

  // --------------- Getters -----------------

  getColor() {
    this.color = this.color ? this.color : 'gray'
    return this.color
  }

  getTitle() {
    return this.title
  }

  // --------------- Setters -----------------

  setTitle(title) {
    this.title = title
  }

  setAssociations() {
    this.associations.map((item) => {
      
    })
  }

  setPath(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.path = new Path2D()
    this.path.rect(x, y, width, height)
  }

  // --------------- Setters -----------------

  addAssociation(association) {
    this.associations = [ ...this.associations, association ]
  }
}
