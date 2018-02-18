/*
  A JavaScript module which outputs a boolean based on whether the input number is prime (uses trial division variant).  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: Felipe Ribeiro, "algorithms.js", https://github.com/felipernb/algorithms.js, https://github.com/felipernb/algorithms.js/blob/master/src/algorithms/math/primality_tests.js
*/

'use strict'

const isPrime = (n = null) => {
  if (n === null) return null
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); ++i) if (n % i === 0) return false
  return true
}

export default isPrime
