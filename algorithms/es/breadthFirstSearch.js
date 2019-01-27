/*
  A JavaScript module which performs a breadth first search on a graph using the graph's adjacency matrix as input to determine whether or not the graph is connected.  If a connected graph's adjacency matrix is input, true is returned.  If a disconnected graph's adjacency matrix is input, false is returned.
*/

'use strict'

const breadthFirstSearch = (input = null) => {
  if (input === null) return null
  const queue = []
  const visited = []
  let connected = true
  const search = (value, input, f, r) => {
    for (let i = 0; i < input.length; i++) if (input[value][i] && !visited[i]) queue[++r] = i
    if (f <= r) {
      visited[queue[f]] = 1
      search(queue[f++], input, f, r)
    }
  }
  for (let i = 0; i < input.length; i++) {
    queue[i] = 0
    visited[i] = 0
  }
  search(0, input, 0, -1)
  for (let i = 0; i < visited.length; i++) if (!visited[i]) connected = false
  return connected
}

export default breadthFirstSearch
