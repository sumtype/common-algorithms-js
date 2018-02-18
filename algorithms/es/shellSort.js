/*
  A JavaScript module which performs a shell sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const shellSort = (array = null) => {
  if (array === null) return null
  let gap = array.length
  do {
    for (let i = gap, value = array[i], j = i; i < array.length; i++, value = array[i], j = i) {
      while (j >= gap && array[j - gap] > value) {
        array[j] = array[j - gap]
        j -= gap
      }
      array[j] = value
    }
    gap = parseInt(gap / 2)
  } while (gap > 0)
  return array
}

export default shellSort
