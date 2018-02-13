import React from 'react'
import './index.css'

export class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.shiftPressed = false
  
    this.setDiagram(props.diagram)
    this.setCommandFactory(props.commandFactory)

    this.draw = this.draw.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.keydown = this.keydown.bind(this)
    this.keyup = this.keyup.bind(this)
  }

  render() {
    return <div>
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref={(ref) => this.canvas = ref}
        id="canvas"
        className="canvas"
        style={{backgroundColor: this.props.backgroundColor}}
      />
    </div>
  }

  // ------------------ Getters ------------------

  setCommandFactory(factory) {
    this.commandFactory = factory
  }

  setDiagram(diagram) {
    this.diagram = diagram
  }

  // ------------------ Draw ------------------
  
  draw() {
    //this.adam.should.stop.coding.and.hang.with.the.freinds((['Jack', 'Bryant',        'Anna', 'Bobby']).because('it\'s friday night and its time to party!!')
    this.clear() 
    this.ctx.font = '20px serif';
    this.diagram.getPaths().map((item) => {
      this.ctx.fillStyle = item.color
      this.ctx.fillStyle = item.getColor()
      //this.ctx.fill(item.path)
      this.ctx.fill(item.getPath())
      this.ctx.fillStyle = "black"
      this.ctx.fillText(item.getTitle(), item.getBox().x, item.getBox().y + 20);
    })

    this.diagram.getSelectedElements().map((item) => {
      this.ctx.fillStyle = '#d3d3d3'
      //this.ctx.fill(item.path)
      this.ctx.fill(item.getPath())
      this.ctx.fillStyle = "black"
      this.ctx.fillText(item.getTitle(), item.getBox().x, item.getBox().y + 20);
    })

    this.diagram.getAssociations().map((item) => {
      //this.ctx.stroke(item.path)
      this.ctx.stroke(item.getPath())
    })
  }

  getPoint(e) {
    const offset = e.target.getBoundingClientRect()
    const mouseX = e.clientX - offset.left
    const mouseY = e.clientY - offset.top
    return {x: mouseX, y: mouseY }
  }

  // ------------------ Events ------------------

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  onMouseDown(e) {
    const { x, y } = this.getPoint(e)
    this.startXY = {x, y}
    this.commandFactory.invokeAndDo('DragElementAtPosition', { x, y })


    if (this.shiftPressed) {
      this.commandFactory.invokeAndDo('SelectElementAtPosition', {x, y})
    }
    else {
      if (this.diagram.getSelectedElements().length > 0)
        this.commandFactory.invokeAndDo('ClearSelectedElements')
    }

    this.draw()
  }

  onMouseMove(e) {
    const { x, y } = this.getPoint(e)
    if (this.diagram.getDragElements().length > 0) {
      this.commandFactory.invokeAndDo('UpdateDragElements', {x, y})
    }
    this.draw()
  }

  onMouseUp(e) {
    const { x, y } = this.getPoint(e)
    if (this.diagram.getDragElements().length > 0) {
      const x1 = this.startXY.x
      const y1 = this.startXY.y
      this.commandFactory.invokeAndDo('Move', {x1, y1, x2: x, y2: y})
      this.commandFactory.invokeAndDo('ClearDragElements')
    }
    
    this.draw()
  }

  keydown(e) {
    console.log('keydown', e.which)

    if (e.which === 16) {
      this.shiftPressed = true
    }
    switch (e.which) {
      case 67: this.commandFactory.invokeAndDo('MakeBinaryAssociation'); break;
      case 86: this.commandFactory.invokeAndDo('MakeAggregationAssociation'); break;
      case 88: this.commandFactory.invokeAndDo('MakeCompositionAssociation'); break;
      case 81: this.commandFactory.invokeAndDo('Clear'); break;
      case 90: 
        if (this.shiftPressed) {
          this.commandFactory.invokeAndDo('Redo'); break;
        }
        else {
          this.commandFactory.invokeAndDo('Undo'); break;
        }
    }
    this.draw()
  }

  keyup(e) {
    this.shiftPressed = false
    this.draw()
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d')

    this.canvas.onmousedown = this.onMouseDown
    this.canvas.onmousemove = this.onMouseMove
    this.canvas.onmouseup = this.onMouseUp

    window.addEventListener('keydown', this.keydown)
    window.addEventListener('keyup', this.keyup)
  }
}
