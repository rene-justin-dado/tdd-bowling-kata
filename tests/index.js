var test = require('tape')
var game = require('../game')

test('initial', function (t) {
  t.plan(1) // Can be done with t.pass
  t.equal('a', 'a') // Does the test
})

test('scores a gutterball frame', function (t) {
  var frame = [0, 0]
  var expected = 0
  var actual = game.scoreFrame(frame)
  t.equal(actual, expected)
  t.end()
})
