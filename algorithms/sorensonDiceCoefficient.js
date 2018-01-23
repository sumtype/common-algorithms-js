/*
  A JavaScript module which returns the Sørensen–Dice coefficient between two input strings.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Dice's coefficient - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Dice%27s_coefficient#Javascript.
*/
module.exports = exports = function (s1, s2) {
  if (s1.length < 1 || s2.length < 1) return 0
  var intersection = 0
  for (var i = 0; i < s1.length - 1; i++) {
    for (var j = 0; j < s2.length - 1; j++) {
      if (s1.substr(i, 2) === s2.substr(i, 2)) {
        intersection += 1
        break
      }
    }
  }
  return (2.0 * intersection) / (s1.length + s2.length - 2)
}
