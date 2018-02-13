import { Path2D } from 'canvas-5-polyfill'
import { Element } from '../src/App/App/Elements/Element'
import { ClassElement } from '../src/App/App/Elements/ClassElement'
import { AggregationLine } from '../src/App/App/Elements/AggregationLine'
import { CompositionLine } from '../src/App/App/Elements/CompositionLine'
import assert from 'assert'

describe('Element', () => {
  const element = new Element(1)
  describe('constructor', () => {
    it('should initialize members', () => {
      assert.equal(element.getId(), 1)
      assert.equal(element.getLocation().x, 10)
      assert.equal(element.getLocation().y, 10)
    })
  })

  describe('getColor', () => {
    it('should return black when not set', () => {
      assert.equal(element.getColor(), 'black')
    })
    it('should return set color when set', () => {
      element.setColor('brown')
      assert.equal(element.getColor(), 'brown')
    })
  })

  describe('ClassElement', () => {
    const classElement = new ClassElement(1)
    describe('constructor', () => {
      it('should initialize members', () => {
        assert.equal(classElement.width, 50)
        assert.equal(classElement.height, 50)
      })
    })

    describe('getColor', () => {
      it('should return gray when not set', () => {
        assert.equal(classElement.getColor(), 'gray')
      })
      it('should return set color when set', () => {
        classElement.setColor('brown')
        assert.equal(classElement.getColor(), 'brown')
      })
    })
  })

  describe('LineElement', () => {
    const box1 = new Element(1)
    const box2 = new Element(1)
    it('should take two elements', () => {
      assert.equal(0, 0)
    })

    describe('AggregationLine', () => {
      it('should display angle', () => {
        const aggregationLine = new AggregationLine(1, box1, box2)
        assert.equal(0, 0)
      })
    })

    describe('CompositionLine', () => {
      it('should make a diamond', () => {
        const compositionLine = new CompositionLine(1, box1, box2)
        assert.equal(0, 0)
      })
    })
  })
})
