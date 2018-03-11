/*
  A JavaScript module which performs a Knuth-Morris-Pratt string match to determine whether a given value exists within an input string.  If the specified value is found, the index of the value string inside the input string is returned.  If the specified value is not found in the input string null is returned.  Slightly modified from an existing JavaScript implementation.

  Copyright (c) 2014 Project Nayuki (MIT License), 2016 James Mason
  Citation: https://www.nayuki.io/page/knuth-morris-pratt-string-matching.
*/

'use strict'

const knuthMorrisPrattStringMatch = (input = null, pattern = null) => {
  if (input === null || input.length === 0 || pattern === null || pattern.length === 0) return null
  let lsp = [0]
  for (let i = 1, j = lsp[i - 1]; i < pattern.length; i++, j = lsp[i - 1]) {
    while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) j = lsp[j - 1]
    if (pattern.charAt(i) === pattern.charAt(j)) j++
    lsp.push(j)
  }
  for (let i = 0, j = 0; i < input.length; i++) {
    while (j > 0 && input.charAt(i) !== pattern.charAt(j)) j = lsp[j - 1]
    if (input.charAt(i) === pattern.charAt(j) && ++j === pattern.length) return i - (j - 1)
  }
  return null
}

export default knuthMorrisPrattStringMatch

/*
 * (MIT License)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
*/
