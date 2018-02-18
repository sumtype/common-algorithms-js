/*
  A JavaScript module which outputs a boolean based on whether the input string has duplicate characters.
*/

'use strict'

const hasDuplicateCharacters = (s = '') => (new Set(s)).size !== s.length

export default hasDuplicateCharacters
