/*
  A JavaScript module which performs a Sattolo cycle on an array, returning an array composed of the input array's elements where no elements are in the same position.
*/

'use strict'

module.exports = exports = function (input) {
  if (input.length <= 1) return input
  var array = input.slice()
  var i = null
  for (i = array.length - 1; i > 0; i--) array = swapIndicies(array, i, Math.floor(Math.random() * i))
  return array
}

function swapIndicies (array, index, newIndex) {
  var temp = array[index]
  array[index] = array[newIndex]
  array[newIndex] = temp
  return array
}
