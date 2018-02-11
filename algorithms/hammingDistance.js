/*
  A JavaScript module which outputs the Hamming distance between two input strings.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: Felipe Ribeiro, "algorithms.js", https://github.com/felipernb/algorithms.js, https://github.com/felipernb/algorithms.js/blob/master/src/algorithms/string/hamming.js
*/

'use strict'

module.exports = exports = function (s1, s2) {
  if (s1.length !== s2.length) return -1
  var distance = 0, i = null
  for (i = 0; i < s1.length; i++) if (s1[i] !== s2[i]) distance += 1
  return distance
}
