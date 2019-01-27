/*
  A JavaScript module which performs a topological sort on an input array of edges using Kahn's algorithm.
*/

'use strict'

const kahnTopologicalSort = edges => {
  if (!Array.isArray(edges) || edges.length === 0) return null
  let nodes = {}
  let sorted = []
  let visited = {}

  let Node = function (id) {
    this.id = id
    this.afters = []
  }

  edges.forEach(v => {
    let from = v[0]
    let to = v[1]
    if (!nodes[from]) nodes[from] = new Node(from)
    if (!nodes[to]) nodes[to] = new Node(to)
    nodes[from].afters.push(to)
  })

  const visit = (idstr, ancestors) => {
    let node = nodes[idstr]
    let id = node.id
    if (visited[idstr]) return null
    if (!Array.isArray(ancestors)) ancestors = []
    ancestors.push(id)
    visited[idstr] = true
    node.afters.forEach(afterID => {
      if (ancestors.indexOf(afterID) >= 0) {
        throw new Error(`Edges are not part of a directed acyclic graph: ${afterID} is in ${id}.`)
      }
      visit(afterID.toString(), ancestors.map(v => v))
    })
    sorted.unshift(id)
  }

  Object.keys(nodes).forEach(visit)

  return sorted
}

export default kahnTopologicalSort
