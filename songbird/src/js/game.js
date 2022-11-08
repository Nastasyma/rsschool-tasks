import birdsData from '../js/data/birds.js';
import { formatTime, getRandomNum } from './helper.js';


const navItem = document.querySelectorAll('.game__nav_item');
const birdsPreview = document.querySelector('.game__birds_preview');
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
let songDurationIntro = document.querySelector('.song_duration_time');
let songCurrentTimeIntro = document.querySelector('.song_current_time');
let songDuration = document.querySelector('.game__birds_voice_duration_time');
let songCurrentTime = document.querySelector('.game__birds_voice_current_time');
const audio = new Audio();
const audioIntro = new Audio();
const audioError = new Audio();
const audioSucces = new Audio();
let isPlay = false;
let audioCurrentTime = 0;
let audioCurrentTimeIntro = 0;
let songNumber;
let isSucces = false;
let levelCount = 0;
let count = 0;
let level = 0;

console.log("level:", level+1);

function resetAudio() {
  audio.pause();
  isPlay = false;
  playInfo.classList.remove('pause');
  audioCurrentTime = 0;
  audioInfo.value = 0;
  songCurrentTime.innerHTML = '0:00';
  audioInfo.style.background = `linear-gradient(to right, #c76000 0%, #c76000 0%, #c4c4c4 0%, #c4c4c4 100%)`;
}
function resetAudioIntro() {
  audioIntro.pause();
  isPlay = false;
  play.classList.remove('pause');
  audioCurrentTimeIntro = 0;
  audioIntroInput.value = 0;
  songCurrentTimeIntro.innerHTML = '0:00';
  audioIntroInput.style.background = `linear-gradient(to right, #c76000 0%, #c76000 0%, #c4c4c4 0%, #c4c4c4 100%)`;
}

// ----------- аудио интро -----------

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
  audioError.src = '../../assets/audio/error.mp3';
  audioSucces.src = '../../assets/audio/succes.mp3';
}

function playAudioIntro() {
  audio.currentTime = audioCurrentTimeIntro;
  if (!isPlay) {
    audioIntro.play();
    isPlay = true;
    play.classList.add('pause');
  } else {
    audioIntro.pause();
    audioCurrentTimeIntro = audio.currentTime;
    isPlay = false;
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



// ----------- создать первый уровень -----------

function setLevelList() {
  // console.log(birdName)
  // console.log(birdsData[level][0]);
  for (let i=0; i<birdName.length; i++) {
    birdName[i].textContent = birdsData[level][i].name;
  }
}

function setLevelInfo() {
  for (let i=0; i<birdsItem.length; i++) {
    birdsItem[i].addEventListener('click', () => {
      birdsPreview.classList.add('active_hide');
      resetAudio();
      birdsVoiceName.textContent = birdsData[level][i].name;
      birdsVoiceNameLatin.textContent = birdsData[level][i].species;
      birdsInfoDescripion.textContent = birdsData[level][i].description;
      birdsNamePic.src = birdsData[level][i].image;
      audio.src = birdsData[level][i].audio;
      songDuration.innerHTML = `${birdsData[level][i].duration}`; // продолжительность трека из плейлиста
      if (songNumber+1 === birdsData[level][i].id) {
        birdIndicator[i].classList.add('bird_success');
        nameIntro.textContent = birdsData[level][songNumber].name;
        birdsNamePicIntro.src = birdsData[level][songNumber].image;
        isSucces = true;
        audioSucces.play();
        lvlBTN.removeAttribute('disabled');
        lvlBTN.classList.add('lvl_btn_active');
        const birdError = document.querySelectorAll('.bird_error');
        if (birdError.length === 0) {
          levelCount = 5;
        }
        console.log("level-count =", levelCount);
        count = count + levelCount;
        console.log("count =", count);
        scoreCount.textContent = count;
      } else if (isSucces === false) {
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

// ----------- создать аудио для первого уровня -----------

function playAudio() {
  audio.currentTime = audioCurrentTime; // запомнить место проигрывания трека
  if (!isPlay) {
    audio.play();
    isPlay = true;
    playInfo.classList.add('pause'); // смена иконку с play на pause
  } else {
    audio.pause();
    audioCurrentTime = audio.currentTime; // проигрывать трек с того же места
    isPlay = false;
    playInfo.classList.remove('pause');
  }
}

playInfo.addEventListener('click', playAudio);

// заглушение звука, смена иконки
volumeIconInfo.addEventListener('click', () => {
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeIconInfo.classList.add('mute');
  } else {
    volumeIconInfo.classList.remove('mute');
  }
});

// громкость музыки, при 0 - мут и смена иконки
volumeInfo.addEventListener("input", () => {
  audio.volume = Math.trunc(volumeInfo.value) / 100;
  volumeInfo.style.background = `linear-gradient(to right, #c76000 0%, #c76000 ${volumeInfo.value}%, #c4c4c4 ${volumeInfo.value}%, #c4c4c4 100%)`;
  if (volumeInfo.value == 0) {
    volumeIconInfo.classList.add('mute');
  } else {
    volumeIconInfo.classList.remove('mute');
  }
});

// прогресс-бар
function updateProgressValue() {
  if (audio.duration) {
    audioCurrentTime = audio.currentTime;
    songCurrentTime.innerHTML = formatTime(audio.currentTime); // текущее время трека
    audioInfo.value = 100 * (audio.currentTime / audio.duration); // ползунок двигается
    audioInfo.style.background = `linear-gradient(to right, #c76000 ${audioInfo.value}%, #c4c4c4 ${audioInfo.value}%)`;
  }
};

audioInfo.addEventListener("input", () => {
if (audio.duration) {
  audio.currentTime = (audioInfo.value * audio.duration) / 100; // при нажатии на прогресс бар, трек играет с этого места
}
});

audio.addEventListener("timeupdate", updateProgressValue);

lvlBTN.addEventListener('click', () => {
  if (level < 5) {
    level += 1;
    console.log("level:", level+1);
    lvlBTN.setAttribute('disabled', 'disabled');
    lvlBTN.classList.remove('lvl_btn_active');
    setSong();
    setLevelList();
    resetAudioIntro();
    birdsPreview.classList.remove('active_hide');
    birdsNamePicIntro.src = '../../assets/images/unknown_bird.jpg';
    nameIntro.textContent = '******';
    for (let i=0; i<navItem.length; i++) {
      navItem[i].classList.remove('game__nav_item_active');
    }
    navItem[level].classList.add('game__nav_item_active');
    birdIndicator.forEach(el => {
      el.classList.remove('bird_success');
      el.classList.remove('bird_error');
    });
    isSucces = false;
    levelCount = 0;
  }
});

export { setSong, setLevelList, setLevelInfo }