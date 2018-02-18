/*
  A JavaScript module which returns a boolean value depending on whether the input string has proper opening and closing delimiters given the specified mappings.  Mappings input should be of the form {'[': ']', '{': '}', ...} where the value of the keys correspond to an opening delimiter (one character max) with value corresponding to the closing delimiter (one character, not the same as the key).  Please note, no two key value mapping combinations may utilize the same characters.
*/

'use strict'

const matchingDelimiters = (s = null, m = {'[': ']', '{': '}'}) => {
  if (s === null) return null
  let stack = []
  let opening = []
  let closing = []
  for (let k in m) {
    opening.push(k)
    closing.push(m[k])
  }
  for (let i = 0; i < s.length; i++) {
    if (opening.includes(s[i])) stack.push(s[i])
    if (closing.includes(s[i])) {
      if (!stack.length) return false
      if (s[i] !== m[stack.pop()]) return false
    }
  }
  return !stack.length
}

export default matchingDelimiters
