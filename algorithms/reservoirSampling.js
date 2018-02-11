/*
  A JavaScript module which randomly outputs a subset of an input array corresponding in length to the specified input integer using reservoir sampling.  Intended for large input arrays.
*/

'use strict'

module.exports = exports = (array = [], size = 0, output = array.slice(0, size)) => {
  if (!array.length || size === 0) return []
  for (let i = size; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i - 2)) + 1
    if (j <= size) output[j] = array[i]
  }
  return output
}
