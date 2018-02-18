/*
  A JavaScript module which outputs a boolean based on whether the input string has duplicate characters.
*/

'use strict'

const hasDuplicateCharacters = (s = '', characters = new Set(s)) => characters.size !== s.length

export default hasDuplicateCharacters
