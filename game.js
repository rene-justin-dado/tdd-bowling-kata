module.exports = {
  scoreFrame: scoreFrame,
  scoreSpecial: scoreSpecial,
  scoreGame: scoreGame
}


function scoreGame (frames) {

}

function isStrike() {

}

function isSpare() {

}

function scoreFrame (frame) {
  //Normal
  return frame[0] + frame[1]
}

function scoreSpecial (frame1, frame2, frame3) {
  //Double Strike
  if (frame1[0] === 10 && frame2[0] === 10) {
    return frame1[0] + frame2[0] + frame3[0] + frame3[1]
  }
  //Single Strike
  if (frame1[0] === 10) {
    return frame1[0] + frame2[0] + frame2[1]
  }
  //Spare
  if (frame1[0] + frame1[1] === 10 && frame1[0] < 10) {
    return frame1[0] + frame1[1] + frame2[0]
  }
}
