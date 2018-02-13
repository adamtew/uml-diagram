import { CommandFactory } from '../src/App/Command/CommandFactory'
import assert from 'assert'

describe('Commands', () => {
  describe('CommandFactory', () => {
    describe('constructor', () => {
      it('should initialize elements', () => {
        const commandFactory = new CommandFactory()
        assert.equal(commandFactory.getInvoker(), null)
        assert.equal(commandFactory.getDiagram(), null)
      })
    })

    describe('invokeAndDo', () => {
      it('should execute a command based on the commandNme', () => {
        assert.equal(0, 0)
      })
    })
  })

  describe('Command', () => {
    it('should execute an Command', () => {
      assert.equal(0, 0)
    })
  })

  describe('ClearCommand', () => {
    it('should execute an ClearCommand', () => {
      assert.equal(0, 0)
    })
  })
  describe('LoadCommand', () => {
    it('should execute an LoadCommand', () => {
      assert.equal(0, 0)
    })
  })
  describe('SaveCommand', () => {
    it('should execute an SaveCommand', () => {
      assert.equal(0, 0)
    })
  })
  describe('MoveCommand', () => {
    it('should execute an MoveCommand', () => {
      assert.equal(0, 0)
    })
  })
  describe('NewCommand', () => {
    it('should execute an NewCommand', () => {
      assert.equal(0, 0)
    })
  })
  describe('RedoCommand', () => {
    it('should execute an RedoCommand', () => {
      assert.equal(0, 0)
    })
  })
  describe('UndoCommand', () => {
    it('should execute an UndoCommand', () => {
      assert.equal(0, 0)
    })
  })
})
