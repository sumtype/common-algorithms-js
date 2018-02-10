/*
  A JavaScript module which performs a selection sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

module.exports = exports = function selectionSort (input) {
  for (var i = 0; i < input.length; i++) {
    var min = i
    for (var j = i; j < input.length; j++) if (input[j] < input[min]) min = j
    var swap = input[i]
    input[i] = input[min]
    input[min] = swap
  }
  return input
}
