module.exports = {
  scoreFrame: scoreFrame,
  scoreSpecial: scoreSpecial,
  scoreGame: scoreGame,
  isStrike: isStrike,
  isSpare: isSpare
}


function scoreGame (frames) {

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
  //Double Strike
  if (isStrike(frame1) && isStrike(frame2)) {
    return frame1[0] + frame2[0] + frame3[0] + frame3[1]
  }
  //Single Strike
  if (isStrike(frame1)) {
    return frame1[0] + frame2[0] + frame2[1]
  }
  //Spare
  if (isSpare(frame1)) {
    return frame1[0] + frame1[1] + frame2[0]
  }
}
