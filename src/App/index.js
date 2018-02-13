import React from 'react'

import { Element, Diagram, } from './App'
import { Canvas, Palette, Menu } from './Gui'
import { CommandFactory } from './Command'
import { Invoker } from './App'

import './index.css'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.invoker = new Invoker()
    this.commandFactory = new CommandFactory()
    this.commandFactory.setInvoker(this.invoker)
    this.diagram = new Diagram()
    this.handleDrawFunction = this.handleDrawFunction.bind(this)
  }

  handleDrawFunction(func, name, props) {
    func(name, props)
    this.canvas.draw()
  }

  handleRerenderFunction(func, name, props) {
    func(name, props)
    this.forceUpdate()
  }

  handleBoth(func, name, props) {
    func(name, props)
    this.forceUpdate()
    this.canvas.draw()
  }

  render() {
    return <div className="body">
      <div className="body-squeeze">
        <Menu
          diagram={this.diagram}
          onTitle={(e) => this.handleBoth(this.commandFactory.invokeAndDo,'UpdateTitle', {title: e.target.value})}
          onNew={() => this.handleDrawFunction(this.commandFactory.invokeAndDo, 'New', {})}
          onClear={() => this.handleDrawFunction(this.commandFactory.invokeAndDo, 'Clear', {})}
          onLoad={(fileContent) => this.handleBoth(this.commandFactory.invokeAndDo, 'Load', {fileContent})}
          onUndo={() => this.handleBoth(this.invoker.undo)}
          onRedo={() => this.handleBoth(this.invoker.redo)}
          onSave={() => this.handleBoth(this.commandFactory.invokeAndDo, 'Save', {filename: ''})}
          onColorChange={(e) => this.handleRerenderFunction(this.commandFactory.invokeAndDo, 'Color', {color: e.target.value})}
          onSelectedColorChange={(e) => this.commandFactory.invokeAndDo('ColorSelected', {color: e.target.value})}
        />
        <Palette
          onCreateClass={() => this.handleDrawFunction(this.commandFactory.invokeAndDo, 'Add', {})}
          onMakeBinary={() => this.handleDrawFunction(this.commandFactory.invokeAndDo, 'MakeBinaryAssociation', {})}
          onMakeAggregation={() => this.handleDrawFunction(this.commandFactory.invokeAndDo, 'MakeAggregationAssociation', {})}
          onMakeComposition={() => this.handleDrawFunction(this.commandFactory.invokeAndDo, 'MakeCompositionAssociation', {})}
          onMakeGeneralization={() => this.handleDrawFunction(this.commandFactory.invokeAndDo, 'MakeGeneralizationAssociation', {})}
        />
        <div className="canvas-container">
          <Canvas
            width={1000}
            height={700}
            commandFactory={this.commandFactory}
            diagram={this.diagram}
            backgroundColor={this.diagram.backgroundColor}
            ref={(el) => this.canvas = el}
          />
        </div>
        <div className="float--left">
        </div>
      </div>
    </div>
  }

  keydown(e) {
    //console.log('keydown', e.which)
    if (e.which === 17) {
      this.controlPressed = true
    }
    //this.shiftPress = e.which === 16 ? true : false // shift

    if (this.controlPressed) {
      switch (e.which) {
        case 83: this.commandFactory.invokeAndDo('Save'); break; // s
        case 67: this.commandFactory.invokeAndDo('Clear'); break; // c
        case 66: this.commandFactory.invokeAndDo('Add', {}); break; // b
        case 90: this.commandFactory.invokeAndDo('Undo'); break; // z
        case 89: this.commandFactory.invokeAndDo('Redo'); break; // y
        case 78: this.commandFactory.invokeAndDo('New'); break; // n
      }
    }
    switch (e.which) {
        case 87: this.commandFactory.invokeAndDo('DeleteSelectedElements'); break; // w
    }
    this.canvas.draw()
  }

  keyup(e) {
    //console.log('keyup', e.which)
    this.controlPressed = false
    this.shiftPressed = false
  }

  componentDidMount() {
    this.commandFactory.setDiagram(this.diagram)
    this.canvas.setCommandFactory(this.commandFactory)

    this.keydown = this.keydown.bind(this)
    this.keyup = this.keyup.bind(this)
    this.controlPressed = false
    this.shiftPressed = false

    window.addEventListener('keydown', this.keydown)
    window.addEventListener('keyup', this.keyup)
    //this.canvas.height = height
  }
}
