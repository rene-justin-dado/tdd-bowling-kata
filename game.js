module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame1, frame2) {
  if (frame1[0] + frame1[1] === 10 && frame1[0] < 10) {
    return frame1[0] + frame1[1] + frame2[0]
  }
  if (frame1[0] === 10) {
    return frame1[0] + frame2[0] + frame2[1]
  }
  return frame1[0] + frame1[1]
}
