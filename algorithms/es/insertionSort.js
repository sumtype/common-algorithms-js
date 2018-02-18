/*
  A JavaScript module which performs an insertion sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const insertionSort = (array = null) => {
  if (array === null) return null
  for (let i = 0, index = i; i < array.length; i++, index = i) {
    while (index > 0 && array[index] < array[index - 1]) {
      let swap = array[index]
      array[index] = array[index - 1]
      array[index - 1] = swap
      index -= 1
    }
  }
  return array
}

export default insertionSort
