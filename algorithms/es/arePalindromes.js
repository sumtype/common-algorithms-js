/*
  A JavaScript module which outputs a boolean based on whether the input array of strings are all palindromes.
*/

'use strict'

const arePalindromes = (s = []) => s.length < 1 ? false : s.map(e => {
  for (let i = 0, j = e.length - 1, halfway = Math.floor(e.length / 2); i < halfway; i++, j--) if (e[i] !== e[j]) return false
  return true
}).every(e => e)

export default arePalindromes
