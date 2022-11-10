import { lang } from './game.js';
import birdsData from '../js/data/birds.js';
import birdsDataEn from './data/birds-en.js';
import { formatTime } from './helper.js';

const audioGalleryInput = document.querySelectorAll('.audio_gallery');
const volumeGalleryInput = document.querySelectorAll('.volume_gallery');
let songDuration = document.querySelectorAll('.game__gallery_voice_duration_time');
let songCurrentTime = document.querySelectorAll('.game__gallery_voice_current_time');
const playerIconGallery = document.querySelectorAll('.player_icon_gallery');
const volumeIconGallery = document.querySelectorAll('.volume_icon_gallery');
const name = document.querySelectorAll('.game__gallery_voice_name');
const nameLatin = document.querySelectorAll('.game__gallery_voice_name_latin');
const desc = document.querySelectorAll('.game__gallery_info_descripion');
const pic = document.querySelectorAll('.game__gallery_name_pic');
const carousel = document.querySelector('.game__gallery_carousel');
const BTNleft = document.querySelector('.left_btn');
const BTNright = document.querySelector('.right_btn');
const slide1 = document.querySelector('.slide_1');
const slide2 = document.querySelector('.slide_2');
const slide3 = document.querySelector('.slide_3');
let left = 0;
let right = 2;
let isPlay = false;
let audioCurrentTime = 0;
const audio = new Audio();

let arrayBirds = [];
let arrayBirdsEn = [];

arrayBirds.push(birdsData);
arrayBirds = arrayBirds.flat(Infinity);
arrayBirdsEn.push(birdsDataEn);
arrayBirdsEn = arrayBirdsEn.flat(Infinity);
console.log(arrayBirds);
// console.log(arrayBirdsEn);

function setGallery() {
  pic[0].src = arrayBirds[left].image;
  pic[1].src = arrayBirds[1].image;
  pic[2].src = arrayBirds[right].image;
  nameLatin[0].textContent = arrayBirds[left].species;
  nameLatin[1].textContent = arrayBirds[1].species;
  nameLatin[2].textContent = arrayBirds[right].species;
  songDuration[0].textContent = arrayBirds[left].duration;
  songDuration[1].textContent = arrayBirds[1].duration;
  songDuration[2].textContent = arrayBirds[right].duration;
  audio.src = arrayBirds[1].audio;
  if (lang === 'ru') {
    name[0].textContent = arrayBirds[left].name;
    desc[0].textContent = arrayBirds[left].description;
    name[1].textContent = arrayBirds[1].name;
    desc[1].textContent = arrayBirds[1].description;
    name[2].textContent = arrayBirds[right].name;
    desc[2].textContent = arrayBirds[right].description;
  } else {
    name[0].textContent = arrayBirdsEn[left].name;
    desc[0].textContent = arrayBirdsEn[left].description;
    name[1].textContent = arrayBirdsEn[1].name;
    desc[1].textContent = arrayBirdsEn[1].description;
    name[2].textContent = arrayBirdsEn[right].name;
    desc[2].textContent = arrayBirdsEn[right].description;
  }
}

function setCarousel() {
  carousel.addEventListener('animationend', (animationEvent) => {

    let changedItem;
    if (animationEvent.animationName === 'move-left') {
      carousel.classList.remove('to-left');
      changedItem = slide1;
      slide2.innerHTML = changedItem.innerHTML;
      audio.src = arrayBirds[left].audio;
      console.log(audio);
    } else if (animationEvent.animationName === 'move-right') {
      carousel.classList.remove('to-right');
      changedItem = slide3;
      slide2.innerHTML = changedItem.innerHTML;
      audio.src = arrayBirds[right].audio;
      console.log(audio)
    }

    BTNleft.addEventListener('click', moveLeft);
    BTNright.addEventListener('click', moveRight);
  });

  const moveLeft = () => {
    if (left === 0) {
      left = 35;
    } else {
      left -= 1;
    }
    if (right === 0) {
      right = 35;
    } else {
      right -= 1;
    }
    setGallery();
    carousel.classList.add('to-left');
    BTNleft.removeEventListener('click', moveLeft);
    BTNright.removeEventListener('click', moveRight);
  };
  const moveRight = () => {
    if (left === 35) {
      left = 0;
    } else {
      left += 1;
    }
    if (right === 35) {
      right = 0;
    } else {
      right += 1;
    }
    setGallery();
    carousel.classList.add('to-right');
    BTNright.removeEventListener('click', moveRight);
    BTNleft.removeEventListener('click', moveLeft);
  };

  BTNleft.addEventListener('click', moveLeft);
  BTNright.addEventListener('click', moveRight);
}

// ----------- аудио плеер галлерея -----------

function setAudio() {
  function playAudioGallery() {
    audio.currentTime = audioCurrentTime;
    if (!isPlay) {
      audio.play();
      isPlay = true;
      playerIconGallery[1].classList.add('pause');
    } else {
      audio.pause();
      audioCurrentTime = audio.currentTime;
      isPlay = false;
      playerIconGallery[1].classList.remove('pause');
    }
  }

  playerIconGallery[1].addEventListener('click', playAudioGallery);

  volumeIconGallery[1].addEventListener('click', () => {
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeIconGallery[1].classList.add('mute');
    } else {
      volumeIconGallery[1].classList.remove('mute');
    }
  });

  volumeGalleryInput[1].addEventListener("input", () => {
    audio.volume = Math.trunc(volumeGalleryInput[1].value) / 100;
    volumeGalleryInput[1].style.background = `linear-gradient(to right, #c76000 0%, #c76000 ${volumeGalleryInput[1].value}%, #c4c4c4 ${volumeGalleryInput[1].value}%, #c4c4c4 100%)`;
    if (volumeGalleryInput[1].value == 0) {
      volumeIconGallery[1].classList.add('mute');
    } else {
      volumeIconGallery[1].classList.remove('mute');
    }
  });

  function updateProgressValue() {
    if (audio.duration) {
      audioCurrentTime = audio.currentTime;
      songCurrentTime[1].innerHTML = formatTime(audio.currentTime);
      audioGalleryInput[1].value = 100 * (audio.currentTime / audio.duration);
      audioGalleryInput[1].style.background = `linear-gradient(to right, #c76000 ${audioGalleryInput[1].value}%, #c4c4c4 ${audioGalleryInput[1].value}%)`;
    }
  };

  audioGalleryInput[1].addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (audioGalleryInput[1].value * audio.duration) / 100;
  }
  });

  audio.addEventListener("timeupdate", updateProgressValue);
}
setAudio();


export { setCarousel, setGallery, name }