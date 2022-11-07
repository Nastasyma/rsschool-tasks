const videoBG = document.querySelector('.video_bg');
const startBTN = document.querySelector('.game__start_btn');
const welcomeBTN = document.querySelector('.welcome_link');
const gameBTN = document.querySelector('.game_link');
const gameStartWrapper = document.querySelector('.game__start_wrapper');
const gameWrapper = document.querySelector('.game__wrapper');
const videoFile = document.querySelector('.forest_video');

function changeElStyles() {
  videoFile.classList.add('active_hide');
  gameStartWrapper.classList.add('active_hide');
  setTimeout(() => {
    gameWrapper.classList.add('active_game__menu');
  }, 500);
  gameBTN.classList.add('nav_link__active');
  welcomeBTN.classList.remove('nav_link__active');
}
function startGame() {
  startBTN.addEventListener('click', changeElStyles);
  gameBTN.addEventListener('click', changeElStyles);
}
function returnToStart() {
  welcomeBTN.addEventListener('click', () => {
    videoFile.classList.remove('active_hide');
    setTimeout(() => {
      gameStartWrapper.classList.remove('active_hide');
    }, 500);
    // gameStartWrapper.classList.remove('active_hide');
    gameBTN.classList.remove('nav_link__active');
    welcomeBTN.classList.add('nav_link__active');
    gameWrapper.classList.remove('active_game__menu');
  })
}

export { startGame, returnToStart }

