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
    if (visited[idstr]) return
    if (!Array.isArray(ancestors)) ancestors = []
    ancestors.push(id)
    visited[idstr] = true
    node.afters.forEach(afterID => {
      if (ancestors.indexOf(afterID) >= 0) {
        throw new Error('closed chain : ' + afterID + ' is in ' + id)
      }
      visit(
        afterID.toString(),
        ancestors.map(v => {
          return v
        })
      )
    })
    sorted.unshift(id)
  }

  Object.keys(nodes).forEach(visit)

  return sorted
}
export default kahnTopologicalSort
