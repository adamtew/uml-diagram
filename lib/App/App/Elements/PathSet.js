'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Diagram = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('../');

var _2 = require('./');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Diagram = exports.Diagram = function () {
  function Diagram() {
    _classCallCheck(this, Diagram);

    this.id = 0;
    this.associations = [];
    this.selectedElements = [];
    this.dragElements = [];
    this.paths = [];
    this.savedPaths = [];
    this.dragElement = null;

    this.updatePath = this.updatePath.bind(this);
  }

  // ------------------ Getters ------------------

  _createClass(Diagram, [{
    key: 'getPaths',
    value: function getPaths() {
      return this.paths;
    }
  }, {
    key: 'getAssociations',
    value: function getAssociations() {
      return this.associations;
    }
  }, {
    key: 'getSelectedElements',
    value: function getSelectedElements() {
      return this.selectedElements;
    }
  }, {
    key: 'newId',
    value: function newId() {
      return this.id++;
    }
  }, {
    key: 'getDragElement',
    value: function getDragElement() {
      return this.dragElement;
    }
  }, {
    key: 'getSavedPaths',
    value: function getSavedPaths() {
      return this.savedPaths;
    }
  }, {
    key: 'getElementAtPosition',
    value: function getElementAtPosition(x, y) {
      var foundItem = null;
      this.paths.forEach(function (item, index) {
        var box = item.getBox();
        if (x > box.x && x < box.x + box.width && y > box.y && y < box.y + box.height) {
          foundItem = item;
        }
      });
      return foundItem;
    }
  }, {
    key: 'selectElementAtPosition',
    value: function selectElementAtPosition(x, y) {
      var element = this.getElementAtPosition(x, y);
      if (element) {
        this.selectElement(element);
      }
    }
  }, {
    key: 'dragElementAtPosition',
    value: function dragElementAtPosition(x, y) {
      var element = this.getElementAtPosition(x, y);
      if (element) {
        this.addDragElement(element);
      }
    }
  }, {
    key: 'selectElement',
    value: function selectElement(element) {
      this.selectedElements = [].concat(_toConsumableArray(this.selectedElements), [element]);
    }
  }, {
    key: 'addDragElement',
    value: function addDragElement(element) {
      this.dragElements = [].concat(_toConsumableArray(this.dragElements), [element]);
    }

    // ------------------ Setters ------------------

  }, {
    key: 'setPaths',
    value: function setPaths(paths) {
      this.paths = paths;
    }

    // ------------------ Adders ------------------

  }, {
    key: 'addPath',
    value: function addPath() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 70;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;

      console.log('new classElement', new _2.ClassElement(1, 2, 3, 4, 5));
      var element = new _2.ClassElement(this.newId(), x, y, width, height);
      this.paths = [].concat(_toConsumableArray(this.paths), [element]);
      return element;
    }
  }, {
    key: 'addAssociation',
    value: function addAssociation(association) {
      this.associations = [].concat(_toConsumableArray(this.associations), [association]);
    }

    // ------------------ Removers ------------------

  }, {
    key: 'removePath',
    value: function removePath(id) {
      this.paths = this.paths.filter(function (element) {
        return element.getId() !== id;
      });
    }

    // ------------------ Updaters ------------------

  }, {
    key: 'updatePaths',
    value: function updatePaths(x, y) {
      var paths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.paths;

      paths.map(function (item, index) {
        item.setPath(x, y);
      });
    }
  }, {
    key: 'updateDragElements',
    value: function updateDragElements(x, y) {
      this.updatePaths(x, y, this.dragElements);
    }
  }, {
    key: 'updateSelected',
    value: function updateSelected(x, y) {
      this.updatePaths(x, y, this.selectedElements);
    }
  }, {
    key: 'updatePath',
    value: function updatePath(id, x, y) {
      var path = this.paths.filter(function (element) {
        return element.getId() === id;
      })[0];
      path.setPath(x, y);
      this.paths = this.paths.filter(function (element) {
        return element.getId() !== id;
      });
      this.paths = [].concat(_toConsumableArray(this.paths), [path]);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.clearPaths();
      this.clearDragElements();
      this.clearSelectedElements();
      this.clearAssociations();
    }
  }, {
    key: 'clearPaths',
    value: function clearPaths() {
      this.paths = [];
    }
  }, {
    key: 'clearDragElements',
    value: function clearDragElements() {
      this.dragElements = [];
    }
  }, {
    key: 'clearSelectedElements',
    value: function clearSelectedElements() {
      this.selectedElements = [];
    }
  }, {
    key: 'clearAssociations',
    value: function clearAssociations() {
      this.associations = [];
    }
  }, {
    key: 'save',
    value: function save() {
      this.savedPaths = this.paths;
    }
  }, {
    key: 'saved',
    value: function saved() {
      return this.savedPaths.length == this.paths.length;
    }
  }, {
    key: 'makeAssociation',
    value: function makeAssociation(type) {
      if (this.selectedElements.length >= 2) {
        var first = this.selectedElements[0];
        var second = this.selectedElements[1];
        var association = null;
        switch (type) {
          case 'binary':
            association = new _2.LineElement(this.newId(), first, second);break;
          case 'aggregation':
            association = new _2.AggregationLine(this.newId(), first, second);break;
          case 'composition':
            association = new _2.CompositionLine(this.newId(), first, second);break;
        }
        if (association) this.associations = [].concat(_toConsumableArray(this.associations), [association]);
      }
    }
  }, {
    key: 'makeBinaryAssociation',
    value: function makeBinaryAssociation() {
      this.makeAssociation('binary');
    }
  }, {
    key: 'makeAggregationAssociation',
    value: function makeAggregationAssociation() {
      this.makeAssociation('aggregation');
    }
  }, {
    key: 'makeCompositionAssociation',
    value: function makeCompositionAssociation() {
      this.makeAssociation('composition');
    }
  }]);

  return Diagram;
}();