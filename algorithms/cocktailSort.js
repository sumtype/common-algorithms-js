/*
  A JavaScript module which performs a cocktail sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

module.exports = function (array) {
  var sorted = true, i = null
  while(sorted) {
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        array = swapIndicies(array, i, 1)
        sorted = true
      }
    }
    if (!sorted) break
    sorted = false
    for (i = array.length - 1; i > 0; i--) {
      if (array[i - 1] > array[i]) {
        array = swapIndicies(array, i, -1)
        sorted = true
      }
    }
  }
  return array
}

function swapIndicies(array, index, direction) {
  var temp = array[index]
  array[index] = array[index + direction]
  array[index + direction] = temp
  return array
}
