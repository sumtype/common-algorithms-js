/*
  A JavaScript module which performs a bubble sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const bubbleSort = (input = null) => {
  if (input === null) return input
  for (let i = 0, index = i; i < input.length; i++, index = i) {
    for (let j = i + 1; j < input.length; j++) if (input[index] > input[j]) index = j
    if (index !== i) {
      let swap = input[i]
      input[i] = input[index]
      input[index] = swap
    }
  }
  return input
}

export default bubbleSort
