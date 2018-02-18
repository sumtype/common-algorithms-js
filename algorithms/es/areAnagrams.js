/*
  A JavaScript module which outputs a boolean based on whether the input array of strings are anagrams of one another.
*/

'use strict'

const areAnagrams = (s = []) => s.length <= 1 || !s.every(e => e.length === s[0].length) ? false : s.map(e => e.split('').map(c => c.codePointAt(0)).reduce((a, b) => a + b)).every((e, i, a) => e === a[0])

export default areAnagrams
