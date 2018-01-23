/*
  A JavaScript module which performs a quick sort on a given array of numbers, ordering the elements from lowest to highest.
*/

var input

module.exports = exports = function (a) {
  input = a
  return quickSort()
}
function quickSort (first, last) {
  if (typeof first === 'undefined') first = 0
  if (typeof last === 'undefined') last = input.length - 1
  if (first < last) {
    var swap, pivot, lowIndex, highIndex
    swap = null
    pivot = first
    lowIndex = first
    highIndex = last
    while (lowIndex < highIndex) {
      while (input[lowIndex] <= input[pivot] && lowIndex < last) lowIndex += 1
      while (input[highIndex] > input[pivot]) highIndex -= 1
      if (lowIndex < highIndex) {
        swap = input[lowIndex]
        input[lowIndex] = input[highIndex]
        input[highIndex] = swap
      }
    }
    swap = input[pivot]
    input[pivot] = input[highIndex]
    input[highIndex] = swap
    quickSort(first, highIndex - 1)
    quickSort(highIndex + 1, last)
  }
  return input
}
