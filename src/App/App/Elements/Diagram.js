import {
  ClassElement,
  LineElement,
  AggregationLine,
  CompositionLine,
  Element,
} from './'

export class Diagram {
  constructor() {
    this.id = 0
    this.title = ''
    this.associations = []
    this.selectedElements = []
    this.dragElements = []
    this.paths = []
    this.savedPaths = []
    this.dragElement = null
    this.backgroundColor = '#f9f0f1'
    this.defaultBackgroundColor = '#f9f0f1'

    this.updatePath = this.updatePath.bind(this)
  }

  // ------------------ Getters ------------------

  getBackgroundColor() {
    return this.backgroundColor
  }

  getTitle() {
    return this.title
  }

  getPaths() {
    return this.paths
  }

  getAssociations() {
    return this.associations
  }

  getSelectedElements() {
    return this.selectedElements
  }

  getDragElements() {
    return this.dragElements
  }

  getId() {
    return this.id
  }

  newId() {
    return this.id++
  }

  getDragElement() {
    return this.dragElement
  }

  getState() {
    return {
      paths: this.getPaths(),
      associations: this.getAssociations(),
      selectedElements: this.getSelectedElements(),
      title: this.getTitle(),
      backgroundColor: this.getBackgroundColor(),
    }
  }

  getSavedPaths() {
    return this.savedPaths
  }

  getElementAtPosition(x, y) {
    let foundItem = null
    this.paths.forEach((item, index) => {
      const box = item.getBox()
      if (x > box.x && x < box.x + box.width &&
          y > box.y && y < box.y + box.height) {
        foundItem = item
      }
    })
    return foundItem
  }

  selectElementAtPosition(x, y) {
    const element = this.getElementAtPosition(x, y)
    if (element) {
      this.selectElement(element)
      return element
    }
  }

  dragElementAtPosition(x, y) {
    const element = this.getElementAtPosition(x, y)
    if (element) {
      this.addDragElement(element)
    }
  }

  selectElement(element) {
    this.selectedElements = [ ...this.selectedElements, element ]
  }

  addDragElement(element) {
    this.dragElements = [ ...this.dragElements, element ]
  }

  // ------------------ Setters ------------------

  setBackgroundColor(color) {
    this.backgroundColor = color
  }

  setTitle(title) {
    this.title = title
  }

  setPaths(paths) {
    this.paths = paths
  }

  setAssociations(associations) {
    this.associations = associations
  }

  setDragElements(dragElements) {
    this.dragElements = dragElements
  }

  setSelectedElements(selectedElements) {
    this.selectedElements = selectedElements
  }

  setSelectedColors(color) {
    console.log('color', color)
    this.selectedElements.map((item) => item.setColor(color))
  }

  setState(state={}) {
    state.paths.map((item) => this.addPath(item.x, item.y, item.width, item.height, item.id))
    //this.setPaths(state.paths)
    //state.associations.map((item) => this.
    this.setAssociations(state.associations)
    this.setSelectedElements(state.selectedElements)
    this.setTitle(state.title)
    this.setBackgroundColor(state.backgroundColor)
  }

  // ------------------ Adders ------------------

  addPath(x=70, y=50, width=50, height=50) {
    const element = new ClassElement(this.newId(), x, y, width, height)
    this.paths = [ ...this.paths, element ]
    return element
  }

  addAssociation(association) {
    this.associations = [ ...this.associations, association ]
  }

  // ------------------ Removers ------------------

  removePath(id) {
    this.paths = this.paths.filter((element) => element.getId() !== id)
  }

  removeSelectedElement(id) {
    this.selectedElements = this.selectedElements.filter((element) => element.getId() !== id)
  }

  removeSelectedElements() {
    this.selectedElements.map((path) => {
      this.paths = this.paths.filter((element) => element.getId() !== path.getId())
      this.associations = this.associations.filter((element) => element.firstElement.getId() !== path.getId())
      this.associations = this.associations.filter((element) => element.secondElement.getId() !== path.getId())
    })
    this.clearSelectedElements()
  }

  removeAssociation(id) {
    this.associations = this.associations.filter((element) => element.getId() !== id)
  }


  // ------------------ Updaters ------------------

  updatePaths(x, y, paths=this.paths) {
    paths.map((item) => {
      item.setPath(x, y, item.width, item.height)
    })
  }

  updateDragElements(x, y) {
    this.updatePaths(x, y, this.dragElements)
  }

  updateSelected(x, y) {
    this.updatePaths(x, y, this.selectedElements)
  }

  updatePath(id, x, y) {
    const path = this.paths.filter((element) => element.getId() === id)[0]
    path.setPath(x, y)
    this.paths = this.paths.filter((element) => element.getId() !== id)
    this.paths = [ ...this.paths, path ]
  }

  clear() {
    this.clearPaths()
    this.clearDragElements()
    this.clearSelectedElements()
    this.clearAssociations()
  }

  clearPaths() {
    this.paths = []
  }

  clearDragElements() {
    this.dragElements = []
  }

  clearSelectedElements() {
    this.selectedElements = []
  }

  clearAssociations() {
    this.associations = []
  }

  save() {
    this.savedPaths = this.paths
  }

  saved() {
    return this.savedPaths.length == this.paths.length
  }

  makeAssociation(type='binary') {
    if (this.selectedElements.length >=2) {
      const first = this.selectedElements[0]
      const second = this.selectedElements[1]
      let association = null
      switch (type) {
        case 'binary': association = new LineElement(this.newId(), first, second); break;
        case 'aggregation': association = new AggregationLine(this.newId(), first, second); break;
        case 'composition': association = new CompositionLine(this.newId(), first, second); break;
      }
      if (association) {
        this.associations = [ ...this.associations, association]
        return association
      }
    }
  }

  makeBinaryAssociation() {
    return this.makeAssociation('binary')
  }
  
  makeAggregationAssociation() {
    return this.makeAssociation('aggregation')
  }

  makeCompositionAssociation() {
    return this.makeAssociation('composition')
  }

}
