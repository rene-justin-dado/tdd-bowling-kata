var test = require('tape')
var game = require('../game')

test('initial', function (t) {
  t.plan(1) // Can be done with t.pass
  t.equal('a', 'a') // Does the test
})

test('scores a gutterball frame', function (t) {
  //Arrange
  var frame = [0, 0]
  var expected = 0

  //Act
  var actual = game.scoreFrame(frame)

  //Assert
  t.equal(actual, expected)
  t.end()
})

test('scores a normal frame', function (t) {
  //Arrange
  var frame = [2, 3]
  var expected = 5

  //Act
  var actual = game.scoreFrame(frame)

  //Assert
  t.equal(actual, expected)
  t.end()
})

test('scores a spare frame', function (t) {
  //Arrange
  var frame1 = [7, 3]
  var frame2 = [3, 5]
  var expected = 13

  //Act
  var actual = game.scoreFrame(frame1, frame2)

  //Assert
  t.equal(actual, expected)
  t.end()
})

test('scores a single strike frame', function (t) {
  //Arrange
  var frame1 = [10, 0]
  var frame2 = [7, 2]
  var expected = 19

  //Act
  var actual = game.scoreFrame(frame1, frame2)

  //Assert
  t.equal(actual, expected)
  t.end()
})

test ('scores a double strike frame', function (t) {
  //Arrange
  var frame1 = [10, 0]
  var frame2 = [10, 0]
  var frame3 = [7, 0]
  var expected = 27

  //Act
  var actual = game.scoreFrame(frame1, frame2)

  //Assert
  t.equal(actual, expected)
  t.end()
})
