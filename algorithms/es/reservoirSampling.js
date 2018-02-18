/*
  A JavaScript module which randomly outputs a subset of an input array corresponding in length to the specified input integer using reservoir sampling.  Intended for large input arrays.
*/

'use strict'

const reservoirSampling = (array = null, size = null) => {
  if (array === null || size === null) return null
  let output = array.slice(0, size)
  for (let i = size, j = Math.floor(Math.random() * (i - 2)) + 1; i < array.length; i++, j = Math.floor(Math.random() * (i - 2)) + 1) if (j <= size) output[j] = array[i]
  return output
}

export default reservoirSampling
