/*
  A JavaScript module which performs a cocktail sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const cocktailSort = (array = []) => {
  if (array.length === 0) return []
  let sorted = true
  while (sorted) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        array = swapIndicies(array, i, 1)
        sorted = true
      }
    }
    sorted = false
    for (let i = array.length - 1; i > 0; i--) {
      if (array[i - 1] > array[i]) {
        array = swapIndicies(array, i, -1)
        sorted = true
      }
    }
  }
  return array
}

const swapIndicies = (array, index, direction) => {
  let temp = array[index]
  array[index] = array[index + direction]
  array[index + direction] = temp
  return array
}

export default cocktailSort
