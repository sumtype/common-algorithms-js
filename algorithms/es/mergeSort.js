/*
  A JavaScript module which performs a merge sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

let input = null

const mergeSort = (a = []) => {
  input = a
  return partition(0, input.length - 1)
}

const partition = (low, high) => {
  if (low < high) {
    let mid = parseInt((low + high) / 2, 10)
    partition(low, mid)
    partition(mid + 1, high)
    return merge(low, mid, high)
  }
  return input
}

const merge = (low, mid, high, index = low, lowIndex = low, midIndex = mid + 1, holder = []) => {
  while (lowIndex <= mid && midIndex <= high) {
    if (input[lowIndex] <= input[midIndex]) {
      holder[index] = input[lowIndex]
      lowIndex += 1
    } else {
      holder[index] = input[midIndex]
      midIndex += 1
    }
    index += 1
  }
  if (lowIndex > mid) {
    for (let i = midIndex; i <= high; i++) {
      holder[index] = input[i]
      index += 1
    }
  } else {
    for (let i = lowIndex; i <= mid; i++) {
      holder[index] = input[i]
      index += 1
    }
  }
  for (let i = low; i <= high; i++) input[i] = holder[i]
  return input
}

export default mergeSort
