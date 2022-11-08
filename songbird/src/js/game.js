import birdsData from '../js/data/birds.js';
import { formatTime } from './helper.js';


const birdsPreview = document.querySelector('.game__birds_preview');
const birdsInfo = document.querySelector('.game__birds_info');
const birdName = document.querySelectorAll('.game__bird_name');
const birdsItem = document.querySelectorAll('.game__birds_item');
const birdsVoiceName = document.querySelector('.game__birds_voice_name');
const birdsVoiceNameLatin = document.querySelector('.game__birds_voice_name_latin');
const birdsInfoDescripion = document.querySelector('.game__birds_info_descripion');
const birdsNamePic = document.querySelector('.game__birds_name_pic');
const playInfo = document.querySelector('.player_icon_info');
const volumeIconInfo = document.querySelector('.volume_icon_info');
const volumeInfo = document.querySelector('.volume_info');
const audioInfo = document.querySelector('.audio_info');
let songDuration = document.querySelector('.game__birds_voice_duration_time');
let songCurrentTime = document.querySelector('.game__birds_voice_current_time');
const audio = new Audio();
let isPlay = false;
let audioCurrentTime = 0;


function setFirstLevelList() {
  // console.log(birdName)
  // console.log(birdsData[0][0]);
  for (let i=0; i<birdName.length; i++) {
    birdName[i].textContent = birdsData[0][i].name;
  }
}

function setFirstLevelInfo() {
  for (let i=0; i<birdsItem.length; i++) {
    birdsItem[i].addEventListener('click', () => {
      birdsPreview.classList.add('active_hide');
      birdsInfo.classList.remove('active_hide');
      resetAudio();
      birdsVoiceName.textContent = birdsData[0][i].name;
      birdsVoiceNameLatin.textContent = birdsData[0][i].species;
      birdsInfoDescripion.textContent = birdsData[0][i].description;
      birdsNamePic.src = birdsData[0][i].image;
      audio.src = birdsData[0][i].audio;
      songDuration.innerHTML = `${birdsData[0][i].duration}`; // продолжительность трека из плейлиста
    })
  }
}
function resetAudio() {
  audio.pause();
  isPlay = false;
  playInfo.classList.remove('pause');
  audioCurrentTime = 0;
  audioInfo.value = 0;
  songCurrentTime.innerHTML = '0:00';
  audioInfo.style.background = `linear-gradient(to right, #c76000 0%, #c76000 0%, #c4c4c4 0%, #c4c4c4 100%)`;
}

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
  if (volumeInfo.value === 0) {
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

audio.addEventListener("timeupdate", updateProgressValue);

audioInfo.addEventListener("input", () => {
if (audio.duration) {
  audio.currentTime = (audioInfo.value * audio.duration) / 100; // при нажатии на прогресс бар, трек играет с этого места
}
});

export { setFirstLevelList, setFirstLevelInfo }