import birdsData from '../js/data/birds.js';
import birdsDataEn from './data/birds-en.js';
import langObject from './data/translation.js';
import { formatTime, getRandomNum } from './helper.js';
import { setGallery, nameWrapper } from './gallery.js';

const gameTitle = document.querySelector('.game__title');
const startBTN = document.querySelector('.game__start_btn');
const navLink = document.querySelectorAll('.header__nav_link');
const navItem = document.querySelectorAll('.game__nav_item');
const birdsPreview = document.querySelector('.game__birds_preview');
const previewTitle = document.querySelector('.game__birds_preview_title');
const previewSubtitle = document.querySelector('.game__birds_preview_subtitle');
const scoreTitle = document.querySelector('.game__score_title');
const birdName = document.querySelectorAll('.game__bird_name');
const birdIndicator = document.querySelectorAll('.game__bird_indicator');
const birdsItem = document.querySelectorAll('.game__birds_item');
const birdsVoiceName = document.querySelector('.game__birds_voice_name');
const birdsVoiceNameLatin = document.querySelector('.game__birds_voice_name_latin');
const birdsInfoDescripion = document.querySelector('.game__birds_info_descripion');
const birdsNamePicIntro = document.querySelector('.game__bird_pic');
const birdsNamePic = document.querySelector('.game__birds_name_pic');
const play = document.querySelector('.player_icon');
const playInfo = document.querySelector('.player_icon_info');
const volumeIcon = document.querySelector('.volume_icon');
const volumeIntro = document.querySelector('.volume_intro');
const audioIntroInput = document.querySelector('.audio_intro');
const volumeIconInfo = document.querySelector('.volume_icon_info');
const volumeInfo = document.querySelector('.volume_info');
const audioInfo = document.querySelector('.audio_info');
const nameIntro = document.querySelector('.bird_name_intro');
const scoreCount = document.querySelector('.game__score_count');
const lvlBTN = document.querySelector('.game__next_lvl_btn');
const victoryText = document.querySelector('.game__victory_text');
const resultWrapper = document.querySelector('.game__result_wrapper');
const gameWrapper = document.querySelector('.game__wrapper');
const victoryTitle = document.querySelector('.game__victory_title');
const victoryBTN = document.querySelector('.game__victory_btn');
const victoryPic = document.querySelector('.game__victory_pic');
const ruBTN = document.querySelector('.header__ru_btn');
const enBTN = document.querySelector('.header__en_btn');
let songDurationIntro = document.querySelector('.song_duration_time');
let songCurrentTimeIntro = document.querySelector('.song_current_time');
let songDuration = document.querySelector('.game__birds_voice_duration_time');
let songCurrentTime = document.querySelector('.game__birds_voice_current_time');
const audio = new Audio();
const audioIntro = new Audio();
const audioError = new Audio();
const audioSuccess = new Audio();
let isPlayIntro = false;
let isPlayInfo = false;
let audioCurrentTime = 0;
let audioCurrentTimeIntro = 0;
let songNumber;
let isSuccess = false;
let levelCount = 0;
let count = 0;
let level = 0;
let isGreen = false;
export let lang = 'ru';
let langId = 0;

console.log(`Songbird.
1.Вёрстка, дизайн, UI всех трёх страниц приложения +60
2.Аудиоплеер +30
3.Верхняя панель страницы викторины +20
4.Блок с вопросом +20
5.Блок с вариантами ответов (названия птиц) +60
6.Блок с описанием птицы: +30
7.Кнопка перехода к следующему вопросу +30
8.Перевод приложения на два языка (en/ru) +10
9.Галерея всех птиц (слайдер) +10
Итог: 270
`);

console.log("level:", level+1);

function resetAudio() {
  audio.pause();
  isPlayInfo = false;
  playInfo.classList.remove('pause');
  audioCurrentTime = 0;
  audioInfo.value = 0;
  songCurrentTime.innerHTML = '0:00';
  audioInfo.style.background = `linear-gradient(to right, #c76000 0%, #c76000 0%, #c4c4c4 0%, #c4c4c4 100%)`;
}
function resetAudioIntro() {
  audioIntro.pause();
  isPlayIntro = false;
  play.classList.remove('pause');
  audioCurrentTimeIntro = 0;
  audioIntroInput.value = 0;
  songCurrentTimeIntro.innerHTML = '0:00';
  audioIntroInput.style.background = `linear-gradient(to right, #c76000 0%, #c76000 0%, #c4c4c4 0%, #c4c4c4 100%)`;
}
function resetGame() {
  lvlBTN.setAttribute('disabled', 'disabled');
  lvlBTN.classList.remove('lvl_btn_active');
  birdsPreview.classList.remove('active_hide');
  birdsNamePicIntro.src = './assets/images/unknown_bird.jpg';
  nameIntro.textContent = '******';
  for (let i=0; i<navItem.length; i++) {
    navItem[i].classList.remove('game__nav_item_active');
  }
  birdIndicator.forEach(el => {
    el.classList.remove('bird_success');
    el.classList.remove('bird_error');
  });
  isSuccess = false;
  levelCount = 0;
  isGreen = false;
}

// ----------- стартовая страница -----------

function setWelcome() {
  gameTitle.textContent = langObject[lang].greeting;
  startBTN.textContent = langObject[lang].greetingBtn;
  scoreTitle.textContent = langObject[lang].score;
  if (level < 5) {
    lvlBTN.textContent = langObject[lang].nextBtn;
  } else {
    lvlBTN.textContent = langObject[lang].resultBtn;
  }

  previewTitle.textContent = langObject[lang].previewTitle;
  previewSubtitle.textContent = langObject[lang].previewSubtitle;
  if (count !== 30) {
    victoryText.textContent = langObject[lang].victory_text1 + `${count}` + langObject[lang].victory_text2;
  } else {
    victoryText.textContent = langObject[lang].victory_text3;
  }
  victoryBTN.textContent = langObject[lang].victoryBTN;
  victoryTitle.textContent = langObject[lang].victoryTitle;
  for (let i=0; i<navLink.length; i++) {
    navLink[i].textContent = langObject[lang].headerNav[i].name;
  }
  for (let i=0; i<navItem.length; i++) {
    navItem[i].textContent = langObject[lang].gameNav[i].name;
  }
}

// ----------- аудио плеер интро -----------

volumeIcon.addEventListener('click', () => {
  audioIntro.muted = !audioIntro.muted;
  if (audioIntro.muted) {
    volumeIcon.classList.add('mute');
  } else {
    volumeIcon.classList.remove('mute');
  }
});

volumeIntro.addEventListener("input", () => {
  audioIntro.volume = Math.trunc(volumeIntro.value) / 100;
  volumeIntro.style.background = `linear-gradient(to right, #c76000 0%, #c76000 ${volumeIntro.value}%, #c4c4c4 ${volumeIntro.value}%, #c4c4c4 100%)`;
  if (volumeIntro.value == 0) {
    volumeIcon.classList.add('mute');
  } else {
    volumeIcon.classList.remove('mute');
  }
});

function setSong() {
  songNumber = getRandomNum(0, 5);
  audioIntro.src = birdsData[level][songNumber].audio;
  console.log("selected bird:", songNumber+1);
  songDurationIntro.innerHTML = `${birdsData[level][songNumber].duration}`;
  audioError.src = './assets/audio/error.mp3';
  audioSuccess.src = './assets/audio/success.mp3';
}

function playAudioIntro() {
  audioIntro.currentTime = audioCurrentTimeIntro;
  audio.pause();
  isPlayInfo = false;
  playInfo.classList.remove('pause');
  if (!isPlayIntro) {
    audioIntro.play();
    isPlayIntro = true;
    play.classList.add('pause');
  } else {
    audioIntro.pause();
    audioCurrentTimeIntro = audioIntro.currentTime;
    isPlayIntro = false;
    play.classList.remove('pause');
  }
}
play.addEventListener('click', playAudioIntro);


function updateProgressValueIntro() {
  if (audioIntro.duration) {
    audioCurrentTimeIntro = audioIntro.currentTime;
    songCurrentTimeIntro.innerHTML = formatTime(audioIntro.currentTime); // текущее время трека
    audioIntroInput.value = 100 * (audioIntro.currentTime / audioIntro.duration); // ползунок двигается
    audioIntroInput.style.background = `linear-gradient(to right, #c76000 ${audioIntroInput.value}%, #c4c4c4 ${audioIntroInput.value}%)`;
  }
};

audioIntroInput.addEventListener("input", () => {
if (audioIntro.duration) {
  audioIntro.currentTime = (audioIntroInput.value * audioIntro.duration) / 100; // при нажатии на прогресс бар, трек играет с этого места
}
});

audioIntro.addEventListener("timeupdate", updateProgressValueIntro);

// ----------- уровень игры -----------

function setLevelList() {
  // console.log(birdName)
  // console.log(birdsData[level][0]);
  for (let i=0; i<birdName.length; i++) {
    if (lang === 'ru') {
      birdName[i].textContent = birdsData[level][i].name;
    } else {
      birdName[i].textContent = birdsDataEn[level][i].name;
    }
  }
}

function setLevelInfo() {
  for (let i=0; i<birdsItem.length; i++) {
    birdsItem[i].addEventListener('click', () => {
      langId = i;
      birdsPreview.classList.add('active_hide');
      resetAudio();
      if (lang === 'ru') {
        birdsVoiceName.textContent = birdsData[level][i].name;
        birdsInfoDescripion.textContent = birdsData[level][i].description;
      } else {
        birdsVoiceName.textContent = birdsDataEn[level][i].name;
        birdsInfoDescripion.textContent = birdsDataEn[level][i].description;
      }
      birdsVoiceNameLatin.textContent = birdsData[level][i].species;
      birdsNamePic.src = birdsData[level][i].image;
      audio.src = birdsData[level][i].audio;
      songDuration.innerHTML = `${birdsData[level][i].duration}`;
      if (songNumber+1 === birdsData[level][i].id && isGreen === false) {
        if (level === 5) {
          lvlBTN.textContent = langObject[lang].resultBtn;
        }
        birdIndicator[i].classList.add('bird_success');
        audioIntro.pause();
        play.classList.remove('pause');
        const birdError = document.querySelectorAll('.bird_error');
        if (birdError.length === 0) {
          levelCount = 5;
        }
        isGreen = true;
        // console.log("level-count =", levelCount);
        count = count + levelCount;
        // console.log("count =", count);
        scoreCount.textContent = count;
        isGreen = true;
        if (lang === 'ru') {
          nameIntro.textContent = birdsData[level][songNumber].name;
        } else {
          nameIntro.textContent = birdsDataEn[level][songNumber].name;
        }
        birdsNamePicIntro.src = birdsData[level][songNumber].image;
        isSuccess = true;
        audioSuccess.play();
        lvlBTN.removeAttribute('disabled');
        lvlBTN.classList.add('lvl_btn_active');
      } else if (isSuccess === false) {
        birdIndicator[i].classList.add('bird_error');
        audioError.play();
        const birdError = document.querySelectorAll('.bird_error');
        // console.log(birdError)
        levelCount = 5 - birdError.length;
        // console.log("level-count =", levelCount);
      }
    })
  }
}

// ----------- аудио плеер инфо -----------

function playAudio() {
  audioIntro.pause();
  play.classList.remove('pause')
  isPlayIntro = false;
  audio.currentTime = audioCurrentTime;
  if (!isPlayInfo) {
    audio.play();
    isPlayInfo = true;
    playInfo.classList.add('pause');
  } else {
    audio.pause();
    audioCurrentTime = audio.currentTime;
    isPlayInfo = false;
    playInfo.classList.remove('pause');
  }
}

playInfo.addEventListener('click', playAudio);

volumeIconInfo.addEventListener('click', () => {
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeIconInfo.classList.add('mute');
  } else {
    volumeIconInfo.classList.remove('mute');
  }
});

volumeInfo.addEventListener("input", () => {
  audio.volume = Math.trunc(volumeInfo.value) / 100;
  volumeInfo.style.background = `linear-gradient(to right, #c76000 0%, #c76000 ${volumeInfo.value}%, #c4c4c4 ${volumeInfo.value}%, #c4c4c4 100%)`;
  if (volumeInfo.value == 0) {
    volumeIconInfo.classList.add('mute');
  } else {
    volumeIconInfo.classList.remove('mute');
  }
});

function updateProgressValue() {
  if (audio.duration) {
    audioCurrentTime = audio.currentTime;
    songCurrentTime.innerHTML = formatTime(audio.currentTime);
    audioInfo.value = 100 * (audio.currentTime / audio.duration);
    audioInfo.style.background = `linear-gradient(to right, #c76000 ${audioInfo.value}%, #c4c4c4 ${audioInfo.value}%)`;
  }
};

audioInfo.addEventListener("input", () => {
if (audio.duration) {
  audio.currentTime = (audioInfo.value * audio.duration) / 100;
}
});

audio.addEventListener("timeupdate", updateProgressValue);

lvlBTN.addEventListener('click', () => {
  resetAudio();
  resetAudioIntro();
  if (level < 5) {
    lvlBTN.textContent = langObject[lang].nextBtn;
    level += 1;
    console.log("level:", level+1);
    setSong();
    setLevelList();
    resetGame();
    navItem[level].classList.add('game__nav_item_active');
  } else {
    if (count !== 30) {
      gameWrapper.classList.remove('active_game__menu');
      resultWrapper.classList.add('active_game__menu');
      victoryText.textContent = langObject[lang].victory_text1 + `${count}` + langObject[lang].victory_text2;
      victoryBTN.style.display = "block";
      victoryPic.style.display = "none";
    } else {
      gameWrapper.classList.remove('active_game__menu');
      resultWrapper.classList.add('active_game__menu');
      victoryText.textContent = langObject[lang].victory_text3;
      victoryBTN.style.display = "none";
      victoryPic.style.display = "block";
    }
  }
});
victoryBTN.addEventListener('click', () => {
  console.clear();
  level = 0;
  count = 0;
  scoreCount.textContent = 0;
  lvlBTN.textContent = langObject[lang].nextBtn;
  setSong();
  setLevelList();
  resetAudioIntro();
  resetGame();
  navItem[0].classList.add('game__nav_item_active');
  gameWrapper.classList.add('active_game__menu');
  resultWrapper.classList.remove('active_game__menu');
  console.log("level:", level+1);
})
startBTN.addEventListener('click', () => {
  console.clear();
  level = 0;
  count = 0;
  scoreCount.textContent = 0;
  lvlBTN.textContent = langObject[lang].nextBtn;
  setSong();
  setLevelList();
  resetAudioIntro();
  resetGame();
  navItem[0].classList.add('game__nav_item_active');
  gameWrapper.classList.add('active_game__menu');
  resultWrapper.classList.remove('active_game__menu');
  console.log("level:", level+1);
})
ruBTN.addEventListener('click', () => {
  ruBTN.classList.add('lang_btn_active');
  enBTN.classList.remove('lang_btn_active');
  lang = 'ru';
  localStorage.setItem('nastasyma_language', lang);
  setLevelList();
  setWelcome();
  setGallery();
  nameWrapper[1].innerHTML = nameWrapper[0].innerHTML;
  if (nameIntro.textContent !== '******') {
    nameIntro.textContent = birdsData[level][songNumber].name;
  }
  birdsVoiceName.textContent = birdsData[level][langId].name;
  birdsInfoDescripion.textContent = birdsData[level][langId].description;
})
enBTN.addEventListener('click', () => {
  enBTN.classList.add('lang_btn_active');
  ruBTN.classList.remove('lang_btn_active');
  lang = 'en';
  localStorage.setItem('nastasyma_language', lang);
  setLevelList();
  setWelcome();
  setGallery();
  nameWrapper[1].innerHTML = nameWrapper[0].innerHTML;
  if (nameIntro.textContent !== '******') {
  nameIntro.textContent = birdsDataEn[level][songNumber].name;
  }
  birdsVoiceName.textContent = birdsDataEn[level][langId].name;
  birdsInfoDescripion.textContent = birdsDataEn[level][langId].description;
})

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('nastasyma_language')) {
    lang = localStorage.getItem('nastasyma_language');
  }
  if (localStorage.getItem('nastasyma_language') === 'ru') {
    ruBTN.classList.add('lang_btn_active');
    enBTN.classList.remove('lang_btn_active');
  } else if (localStorage.getItem('nastasyma_language') === 'en') {
    enBTN.classList.add('lang_btn_active');
    ruBTN.classList.remove('lang_btn_active');
  }
  setLevelList();
  setWelcome();
  setGallery();
})

export { setWelcome, setSong, setLevelList, setLevelInfo }