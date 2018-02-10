/*
  A JavaScript module which performs a merge sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

var index, lowIndex, midIndex, holder, input

module.exports = exports = function (a) {
  input = a
  return partition(0, input.length - 1)
}

function partition (low, high) {
  if (low < high) {
    var mid = parseInt((low + high) / 2, 10)
    partition(low, mid)
    partition(mid + 1, high)
    return merge(low, mid, high)
  }
  return input
}

function merge (low, mid, high) {
  index = low
  lowIndex = low
  midIndex = mid + 1
  holder = []
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
    for (var k = midIndex; k <= high; k++) {
      holder[index] = input[k]
      index += 1
    }
  } else {
    for (k = lowIndex; k <= mid; k++) {
      holder[index] = input[k]
      index += 1
    }
  }
  for (k = low; k <= high; k++) input[k] = holder[k]
  return input
}
