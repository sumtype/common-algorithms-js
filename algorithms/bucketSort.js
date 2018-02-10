/*
  A JavaScript module which performs a bucket sort on a given array of numbers, ordering the elements from lowest to highest.  Slightly modified from an existing JavaScript implementation.

  Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com) (MIT), 2016 James Mason
  Citation: http://www.growingwiththeweb.com/2015/06/bucket-sort.html.
*/

'use strict'

module.exports = exports = function (input, bucketSize) {
  if (!input.length) return input
  var min, max, output
  min = input[0]
  max = input[0]
  output = []
  for (var i = 1; i < input.length; i++) {
    if (input[i] < min) min = input[i]
    if (input[i] > max) max = input[i]
  }
  var bucketCount, buckets
  bucketCount = Math.floor((max - min) / bucketSize) + 1
  buckets = new Array(bucketCount)
  for (i = 0; i < buckets.length; i++) buckets[i] = []
  for (i = 0; i < input.length; i++) buckets[Math.floor((input[i] - min) / bucketSize)].push(input[i])
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i])
    for (var j = 0; j < buckets[i].length; j++) output.push(buckets[i][j])
  }
  return output
}

function insertionSort (input) {
  for (var i = 0; i < input.length; i++) {
    var index = i
    while (index > 0 && input[index] < input[index - 1]) {
      var swap = input[index]
      input[index] = input[index - 1]
      input[index - 1] = swap
      index -= 1
    }
  }
  return input
}

/*
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
