(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports !== 'undefined') {
    factory(exports)
  } else {
    var mod = {
      exports: {}
    }
    factory(mod.exports)
    global.matchingDelimiters = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var matchingDelimiters = function matchingDelimiters () {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { '[': ']', '{': '}' }

    if (s === null) return null
    var stack = []
    var opening = []
    var closing = []
    for (var k in m) {
      opening.push(k)
      closing.push(m[k])
    }
    for (var i = 0; i < s.length; i++) {
      if (opening.includes(s[i])) stack.push(s[i])
      if (closing.includes(s[i])) {
        if (!stack.length) return false
        if (s[i] !== m[stack.pop()]) return false
      }
    }
    return !stack.length
  }

  exports.default = matchingDelimiters
})
