const secToMinStr = (secs) => {
  const minutesLeft = Math.floor(secs / 60);
  let secondsLeft = secs - (minutesLeft * 60);
  if (secondsLeft < 10) secondsLeft = `0${secondsLeft}`;
  return `${minutesLeft}:${secondsLeft}`
}

export default secToMinStr