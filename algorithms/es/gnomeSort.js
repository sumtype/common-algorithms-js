/*
  A JavaScript module which performs a gnome sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const gnomeSort = (array = [], index = 0) => {
  while (index < array.length) index === 0 || array[index - 1] <= array[index] ? index++ : swapIndicies(array, index--)
  return array
}

const swapIndicies = (array, index, temp = array[index]) => {
  array[index] = array[--index]
  array[index] = temp
}

export default gnomeSort
