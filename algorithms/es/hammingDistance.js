/*
  A JavaScript module which outputs the Hamming distance between two input strings.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: Felipe Ribeiro, "algorithms.js", https://github.com/felipernb/algorithms.js, https://github.com/felipernb/algorithms.js/blob/master/src/algorithms/string/hamming.js
*/

'use strict'

const hammingDistance = (s1 = '', s2 = '') => {
  if (s1.length !== s2.length) return null
  let distance = 0
  for (let i = 0; i < s1.length; i++) if (s1[i] !== s2[i]) distance += 1
  return distance
}

export default hammingDistance
