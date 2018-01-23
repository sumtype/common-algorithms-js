/*
  A JavaScript module which performs a depth first search on a graph using the graph's adjacency matrix as input to determine whether or not the graph is connected.  If a connected graph's adjacency matrix is input, true is returned.  If a disconnected graph's adjacency matrix is input, false is returned.
*/
module.exports = exports = function (input) {
  var reach, totalConnections
  reach = []
  totalConnections = 0
  for (var i = 0; i < input.length; i++) reach[i] = 0
  depthFirstSearch(0, reach, input.length, input)
  for (i = 0; i < input.length; i++) if (reach[i]) totalConnections += 1
  if (totalConnections === input.length) return true
  return false
}
function depthFirstSearch (value, reach, numberOfVertices, adjacencyMatrix) {
  reach[value] = 1
  for (var i = 0; i < numberOfVertices; i++) if (adjacencyMatrix[value][i] && !reach[i]) depthFirstSearch(i, reach, numberOfVertices, adjacencyMatrix)
}
