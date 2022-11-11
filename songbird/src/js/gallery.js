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
const name1 = document.querySelector('.slide_1 .game__gallery_name_wrapper');
const name2 = document.querySelector('.slide_2 .game__gallery_name_wrapper');
const name3 = document.querySelector('.slide_3 .game__gallery_name_wrapper');
const desc1 = document.querySelector('.slide_1 .game__gallery_info_descripion');
const desc2 = document.querySelector('.slide_2 .game__gallery_info_descripion');
const desc3 = document.querySelector('.slide_3 .game__gallery_info_descripion');
const dur1 = document.querySelector('.slide_1 .game__gallery_voice_duration_time');
const dur2 = document.querySelector('.slide_2 .game__gallery_voice_duration_time');
const dur3 = document.querySelector('.slide_3 .game__gallery_voice_duration_time');
const ruBTN = document.querySelector('.header__ru_btn');
const enBTN = document.querySelector('.header__en_btn');
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

function resetAudio() {
  audio.pause();
  isPlay = false;
  playerIconGallery[1].classList.remove('pause');
  audioCurrentTime = 0;
  audioGalleryInput[1].value = 0;
  songCurrentTime[1].innerHTML = '0:00';
  audioGalleryInput[1].style.background = `linear-gradient(to right, #c76000 0%, #c76000 0%, #c4c4c4 0%, #c4c4c4 100%)`;
}

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

    let changedName;
    let changedDesc;
    let changedDur;
    if (animationEvent.animationName === 'move-left') {
      carousel.classList.remove('to-left');
      changedName = name1;
      changedDesc = desc1;
      changedDur = dur1;
      name2.innerHTML = changedName.innerHTML;
      desc2.innerHTML = changedDesc.innerHTML;
      dur2.innerHTML = changedDur.innerHTML;
      audio.src = arrayBirds[left].audio;
    } else if (animationEvent.animationName === 'move-right') {
      carousel.classList.remove('to-right');
      changedName = name3;
      changedDesc = desc3;
      changedDur = dur3;
      name2.innerHTML = changedName.innerHTML;
      desc2.innerHTML = changedDesc.innerHTML;
      dur2.innerHTML = changedDur.innerHTML;
      audio.src = arrayBirds[right].audio;
    }

    BTNleft.addEventListener('click', moveLeft);
    BTNright.addEventListener('click', moveRight);
  });

  const moveLeft = () => {
    resetAudio();
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
    resetAudio();
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

export { setCarousel, setGallery }