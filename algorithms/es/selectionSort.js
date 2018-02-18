/*
  A JavaScript module which performs a selection sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const selectionSort = (array = null) => {
  if (array === null) return null
  for (let i = 0, min = i; i < array.length; i++, min = i) {
    for (let j = i; j < array.length; j++) if (array[j] < array[min]) min = j
    let swap = array[i]
    array[i] = array[min]
    array[min] = swap
  }
  return array
}

export default selectionSort
