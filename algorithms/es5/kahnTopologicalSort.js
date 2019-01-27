(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports !== 'undefined') {
    factory(exports)
  } else {
    var mod = {
      exports: {}
    }
    factory(mod.exports)
    global.kahnTopologicalSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var kahnTopologicalSort = function kahnTopologicalSort (edges) {
    if (!Array.isArray(edges) || edges.length === 0) return null
    var nodes = {}
    var sorted = []
    var visited = {}

    var Node = function Node (id) {
      this.id = id
      this.afters = []
    }

    edges.forEach(function (v) {
      var from = v[0]
      var to = v[1]
      if (!nodes[from]) nodes[from] = new Node(from)
      if (!nodes[to]) nodes[to] = new Node(to)
      nodes[from].afters.push(to)
    })

    var visit = function visit (idstr, ancestors) {
      var node = nodes[idstr]
      var id = node.id
      if (visited[idstr]) return null
      if (!Array.isArray(ancestors)) ancestors = []
      ancestors.push(id)
      visited[idstr] = true
      node.afters.forEach(function (afterID) {
        if (ancestors.indexOf(afterID) >= 0) {
          throw new Error('Edges are not part of a directed acyclic graph: ' + afterID + ' is in ' + id + '.')
        }
        visit(afterID.toString(), ancestors.map(function (v) {
          return v
        }))
      })
      sorted.unshift(id)
    }

    Object.keys(nodes).forEach(visit)

    return sorted
  }

  exports.default = kahnTopologicalSort
})
