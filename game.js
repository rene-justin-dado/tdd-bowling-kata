module.exports = {
  scoreFrame: scoreFrame,
  scoreSpecial: scoreSpecial,
  scoreGame: scoreGame,
  isStrike: isStrike,
  isSpare: isSpare
}

function scoreGame (frames) {
  var score = 0
  var i = 0
  while (i < frames.length) {
    if (isStrike(frames[i]) || isSpare(frames[i])) {
      score += scoreSpecial(frames[i], frames[i + 1], frames[i + 2])
      console.log(score)
    } else {
      score += scoreFrame(frames[i])
      console.log(score)
    }
    i++
  }
  return score
}

function isStrike(frame) {
  return frame[0] === 10
}

function isSpare(frame) {
  return (frame[0] + frame[1] === 10 && frame[0] < 10)
}

function scoreFrame (frame) {
  //Normal
  return frame[0] + frame[1]
}

function scoreSpecial (frame1, frame2, frame3) {
  //Multi Strike
  if (isStrike(frame1) && isStrike(frame2)) {
    console.log('Multi Strike')
    return frame1[0] + frame2[0] + frame3[0]
  }
  //Single Strike
  if (isStrike(frame1)) {
    console.log('Single Strike')
    return frame1[0] + frame2[0] + frame2[1]
  }
  //Spare
  if (isSpare(frame1)) {
    console.log('Spare')
    return frame1[0] + frame1[1] + frame2[0]
  }
}

// scoreGame([[10, 0], [10, 0], [10, 0], [3, 2], [1, 9], [4, 6], [5, 3], [0, 8], [0, 0], [0, 0]])
