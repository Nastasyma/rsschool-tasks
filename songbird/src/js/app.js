const videoBG  = document.querySelector('.video_bg ');
const startBTN = document.querySelector('.game__start_btn');
const welcomeBTN = document.querySelector('.welcome_link');
const gameBTN = document.querySelector('.game_link');
const galleryBTN = document.querySelector('.gallery_link');
const gameStartWrapper = document.querySelector('.game__start_wrapper');
const gameWrapper = document.querySelector('.game__wrapper');
const gameGalleryWrapper = document.querySelector('.game__gallery_wrapper');
const videoFile = document.querySelector('.forest_video');
const resultWrapper = document.querySelector('.game__result_wrapper');

function changeElStylesStart() {
  videoBG.style.background = "url('./assets/images/bird_bg.jpg') center/cover no-repeat";
  videoFile.classList.add('active_hide');
  gameStartWrapper.classList.add('active_hide');
  gameGalleryWrapper.classList.remove('active_game__menu');
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
    videoBG.style.background = "url('./assets/images/bird_bg2.jpg') center/cover no-repeat";
    gameBTN.classList.remove('nav_link__active');
    galleryBTN.classList.add('nav_link__active');
    welcomeBTN.classList.remove('nav_link__active');
    videoFile.classList.add('active_hide');
    gameStartWrapper.classList.add('active_hide');
    gameWrapper.classList.remove('active_game__menu');
    setTimeout(() => {
      gameGalleryWrapper.classList.add('active_game__menu');
    }, 500);
  })
}
function returnToStart() {
  welcomeBTN.addEventListener('click', () => {
    videoFile.classList.remove('active_hide');
    resultWrapper.classList.remove('active_game__menu');
    gameGalleryWrapper.classList.remove('active_game__menu');
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

