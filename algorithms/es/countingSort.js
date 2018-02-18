/*
  A JavaScript module which performs a counting sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const countingSort = (array = []) => {
  if (array.length === 0) return []
  let min = 100000000000000000000000000000
  let max = 0
  let val = 0
  let counts = null
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i]
    else if (max < array[i]) max = array[i]
  }
  for (let i = -1; i < array.length; i++) i === -1 ? counts = new Array(max - min + 1).fill(0) : counts[array[i] - min]++
  for (let i = 0; i < counts.length; i++) for (let j = 0; j < counts[i]; j++) array[val++] = i + min
  return array
}

export default countingSort
