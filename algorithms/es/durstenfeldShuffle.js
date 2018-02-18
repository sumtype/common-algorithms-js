/*
  A JavaScript module which performs a Durstenfeld shuffle on a given array.
*/

'use strict'

const durstenfeldShuffle = (input = [], index = input.length) => {
  while (index !== 0) {
    let shuffleIndex = Math.floor(Math.random() * index--)
    let swap = input[index]
    input[index] = input[shuffleIndex]
    input[shuffleIndex] = swap
  }
  return input
}

export default durstenfeldShuffle
