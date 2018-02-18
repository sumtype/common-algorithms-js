/*
  A JavaScript module which performs a binary search on an array of numbers ordered low to high.  If the specified value is found its index in the input array is returned.  If the specified value is not found null is returned.
*/

'use strict'

const binarySearch = (input = [], value = null) => {
  if (input.length === 0) return null
  let bottom = 0
  let top = input.length - 1
  let index = null
  do {
    index = parseInt((bottom + top) / 2)
    if (value < input[index]) top = index - 1
    if (value > input[index]) bottom = index + 1
  } while (input[index] !== value && bottom <= top)
  if (value === input[index]) return index
  return null
}

export default binarySearch
