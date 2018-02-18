/*
  A JavaScript module which outputs a boolean based on whether the input string has duplicate characters.
*/

'use strict'

const hasDuplicateCharacters = (s = null) => s === null ? null : (new Set(s)).size !== s.length

export default hasDuplicateCharacters
