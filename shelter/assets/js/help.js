function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

export { getRandomNum, shuffle };