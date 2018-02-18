/*
  A JavaScript module which performs a radix sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

const radixSort = (input = null, base = 10) => {
  if (input === null) return null
  for (let i = 0; i < Math.round(Math.log(Math.max(...input.map(n => Math.abs(n)))) / Math.log(base)) + 1; i++) input = merge(split(input, base, i))
  return merge(splitBySign(input))
}

const merge = (array) => {
  let output = []
  for (let i = 0; i < array.length; i++) output = output.concat(array[i])
  return output
}

const split = (array, base, digit) => {
  let buckets = []
  for (let i = 0; i < base; i++) buckets.push([])
  for (let i = 0; i < array.length; i++) buckets[Math.abs(Math.floor(array[i] / Math.pow(base, digit)) % base)].push(array[i])
  return buckets
}

const splitBySign = (array) => {
  let buckets = [[], []]
  for (let i = 0; i < array.length; i++) array[i] < 0 ? buckets[0].unshift(array[i]) : buckets[1].push(array[i])
  return buckets
}

export default radixSort
