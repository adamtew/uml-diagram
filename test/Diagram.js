import { Diagram } from '../src/App/App/Elements/Diagram'
import { Path2D } from 'canvas-5-polyfill'
import { Element } from '../src/App/App/Elements/Element'
import { ClassElement } from '../src/App/App/Elements/ClassElement'
import { AggregationLine } from '../src/App/App/Elements/AggregationLine'
import { CompositionLine } from '../src/App/App/Elements/CompositionLine'
import assert from 'assert'

describe('Diagram', () => {
  const diagram = new Diagram()
  describe('constructor', () => {
    it('should initialize to empty', () => {
      assert.equal(diagram.getId(), 0)
      assert.equal(diagram.getAssociations().length, 0)
      assert.equal(diagram.getSelectedElements().length, 0)
      assert.equal(diagram.getDragElement(), null)
    })
  })

  describe('newId', () => {
    it('should return the current id', () => {
      assert.equal(diagram.newId(), 0)
    })
    it('should always increment when creating a new one', () => {
      assert.equal(diagram.getId(), 1)
    })
  })

  describe('paths', () => {
    it('should initialize to empty', () => {
      assert.equal(diagram.getPaths().length, 0)
    })

    describe('addPath', () => {
      it('should return an element', () => {
        const element = diagram.addPath(10, 10, 50, 50)
        assert.equal(element.constructor.name, 'ClassElement')
      })
      it('should add an element to paths array', () => {
        assert.equal(diagram.getPaths().length, 1)
      })
    })

    describe('removePath', () => {
      it('should remove item from paths with given id', () => {
        diagram.removePath(diagram.getPaths()[0].getId())
        assert.equal(diagram.getPaths().length, 0)
      })
    })
  })

  describe('getElementAtPosition', () => {
    it('should get an element from the paths array within a bounding box', () => {
      assert.equal(0, 0)
    })
  })


  describe('selectElementAtPosition', () => {
    it('should select an element from the paths array within a bounding box', () => {
      assert.equal(0, 0)
    })
  })

  describe('selectElement', () => {
    it('should add an item to the selected array', () => {
      assert.equal(0, 0)
    })
  })

  describe('AddDrageElement', () => {
    it('should add an item to the drag array', () => {
      assert.equal(0, 0)
    })
  })

  describe('clear', () => {
    it('should remove all items from all arrays', () => {
      assert.equal(0, 0)
    })
  })
  
  describe('associations', () => {
    describe('makeAssociation', () => {
      const diagram2 = new Diagram()
      it('should not do anything if nothing is selected', () => {
        assert.equal(diagram2.getAssociations().length, 0)
        diagram2.makeAssociation()
        assert.equal(diagram2.getAssociations().length, 0)
      })
      it('should create a new association between two classes', () => {
        diagram2.selectElement(new Element(1))
        diagram2.selectElement(new Element(1))
        assert.equal(diagram.getAssociations().length, 0)
      })

      it('should create a new binary association with type==binary', () => {
        diagram2.makeAssociation('binary')
        diagram2.selectElement(new Element(1))
        diagram2.selectElement(new Element(1))
        assert.equal(diagram2.getAssociations()[0].constructor.name, 'LineElement')
      })

      it('should create a new composition association with type==composition', () => {
        diagram2.selectElement(new Element(1))
        diagram2.selectElement(new Element(1))
        diagram2.makeAssociation('composition')
        assert.equal(diagram2.getAssociations()[1].constructor.name, 'CompositionLine')
      })

      it('should create a new aggregation association with type==aggregation', () => {
        diagram2.selectElement(new Element(1))
        diagram2.selectElement(new Element(1))
        diagram2.makeAssociation('aggregation')
        assert.equal(diagram2.getAssociations()[2].constructor.name, 'AggregationLine')
      })

      describe('getAssociations', () => {
        it('should return the given associations', () => {
          assert.equal(diagram2.getAssociations().length, 3)
        })
      })
    })

  })

})
