/*
  A JavaScript module which performs a Sattolo cycle on an array, returning an array composed of the input array's elements where no elements are in the same position.
*/

'use strict'

const sattoloCycle = (input = null) => {
  if (input === null) return null
  if (input.length === 0) return []
  let array = input.slice()
  for (let i = array.length - 1; i > 0; i--) array = swapIndicies(array, i, Math.floor(Math.random() * i))
  return array
}

const swapIndicies = (array, index, newIndex) => {
  let temp = array[index]
  array[index] = array[newIndex]
  array[newIndex] = temp
  return array
}

export default sattoloCycle
