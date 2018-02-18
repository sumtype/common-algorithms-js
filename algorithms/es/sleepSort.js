/*
  A JavaScript module which performs a sleep sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const sleepSort = (array = null, cb) => {
  if (array === null) return null
  let negative = []
  let positive = []
  let max = Math.max(...array.map(n => Math.abs(n)))
  let min = Math.min(...array)
  for (let i = 0; i < array.length; i++) setTimeout(wake(array[i], max, min, array.length, negative, positive, cb), Math.abs(array[i]) * 3)
}

const wake = (n, max, min, arrayLength, negative, positive, cb) => {
  return () => {
    n < 0 ? negative.unshift(n) : positive.push(n)
    if ((n === max || n === min) && negative.concat(positive).length === arrayLength) cb(negative.concat(positive))
  }
}

export default sleepSort
