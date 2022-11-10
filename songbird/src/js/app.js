const startBTN = document.querySelector('.game__start_btn');
const welcomeBTN = document.querySelector('.welcome_link');
const gameBTN = document.querySelector('.game_link');
const galleryBTN = document.querySelector('.gallery_link');
const gameStartWrapper = document.querySelector('.game__start_wrapper');
const gameWrapper = document.querySelector('.game__wrapper');
const videoFile = document.querySelector('.forest_video');
const resultWrapper = document.querySelector('.game__result_wrapper');

function changeElStylesStart() {
  videoFile.classList.add('active_hide');
  gameStartWrapper.classList.add('active_hide');
  setTimeout(() => {
    gameWrapper.classList.add('active_game__menu');
  }, 500);
  gameBTN.classList.add('nav_link__active');
  galleryBTN.classList.remove('nav_link__active');
  welcomeBTN.classList.remove('nav_link__active');
}
function startGame() {
  startBTN.addEventListener('click', changeElStylesStart);
  gameBTN.addEventListener('click', changeElStylesStart);
}
function toGallery() {
  galleryBTN.addEventListener('click', () => {
    gameBTN.classList.remove('nav_link__active');
    galleryBTN.classList.add('nav_link__active');
    welcomeBTN.classList.remove('nav_link__active');
    videoFile.classList.add('active_hide');
    gameStartWrapper.classList.add('active_hide');
    setTimeout(() => {
      gameWrapper.classList.add('active_game__menu');
    }, 500);
  })
}
function returnToStart() {
  welcomeBTN.addEventListener('click', () => {
    videoFile.classList.remove('active_hide');
    resultWrapper.classList.remove('active_game__menu');
    setTimeout(() => {
      gameStartWrapper.classList.remove('active_hide');
    }, 500);
    gameBTN.classList.remove('nav_link__active');
    galleryBTN.classList.remove('nav_link__active');
    welcomeBTN.classList.add('nav_link__active');
    gameWrapper.classList.remove('active_game__menu');
  })
}

export { startGame, returnToStart, toGallery }

