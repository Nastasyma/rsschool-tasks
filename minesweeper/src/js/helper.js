function formatTime(seconds) {
  const min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export { formatTime, shuffle };
