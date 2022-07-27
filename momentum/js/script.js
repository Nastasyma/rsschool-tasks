import playList from './playList.js';

// ------- time -------

const time = document.querySelector('.time');
const data = document.querySelector('.date');

// отображение времени
function showTime() {
  const currentTime = new Date().toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
}
showTime();

// отображение даты
function showDate() {
  const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
  const currentDate = new Date().toLocaleDateString('en-Gb', options);
  data.textContent = currentDate;
}
showDate();

// ------- greeting -------

const greeting = document.querySelector('.greeting');
const nameEnter = document.querySelector('.name');

// время суток 
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    return 'morning';
  } else if (hours >= 12 && hours < 18) {
    return 'afternoon';
  } else if (hours >= 18 && hours < 24) {
    return 'evening';
  } else if (hours >= 0 && hours < 6) {
    return 'night';
  }
}
getTimeOfDay();

const timeOfDay = getTimeOfDay();

// приветствие в зависимости от времени суток
function showGreeting() {
  const greetingText = `Good ${timeOfDay},`;
  greeting.textContent = greetingText;
  setTimeout(showGreeting, 1000);
}
showGreeting();

// сохранить введенное имя в Local Storage
function setName() {
  localStorage.setItem('name', nameEnter.value);
}

// получить сохраненное имя из Local Storage
function getName() {
  if (localStorage.getItem('name')) {
    nameEnter.value = localStorage.getItem('name');
  }
}

window.addEventListener('beforeunload', setName)
window.addEventListener('DOMContentLoaded', getName)

// ------- slider -------

const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

// рандомное число от 1 до 20
function getRandomNum(){
  return (Math.floor(Math.random() * 20) + 1);
}

let slideNumber = getRandomNum();

// рандомный background в зависимости от времени суток
function setBg() {
  const img = new Image();
  let bgNum  = String(slideNumber).padStart(2,'0');
    img.src = `https://raw.githubusercontent.com/Nastasyma/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`;
}
}
setBg();

// стрелка вправо листает background по порядку
function getSlideNext(){
  if (slideNumber < 20) {
    slideNumber = slideNumber + 1;
  } else if (slideNumber === 20) {
    slideNumber = 1;
  }
  setBg();
};
// стрелка влево листает background по порядку
function getSlidePrev(){
  if (slideNumber > 1) {
    slideNumber = slideNumber - 1;
  } else if (slideNumber === 1) {
    slideNumber = 20;
  }
  setBg();
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

// ------- weather -------

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const speedWind = document.querySelector('.speedWind');
const weatherError = document.querySelector('.weather-error');

// получить информацию о погоде
async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=f88d8ce92815ace0f687319f76b83882&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  
  if (data.cod !== '404' && data.cod !== '400') { // вывести виджет с погодой в зависимости от введенного города
    weatherIcon.classList.add(`owf-${data.weather[0].id}`); // иконка
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`; // температура
    weatherDescription.textContent = data.weather[0].description; // описание погоды
    humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`; // влажность воздуха
    speedWind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`; // скорость ветра 
  } else if (city.value === '') { // если пустая строка
    temperature.textContent = 'City not found!';
    weatherDescription.textContent = '';
    humidity.textContent = '';
    speedWind.textContent = ''; 
  } else { // если такого города не cуществует 
    temperature.textContent = `Can't find the weather for "${city.value}" !`;
    weatherDescription.textContent = '';
    humidity.textContent = '';
    speedWind.textContent = ''; 
  }
}

// сохранить введенный город в Local Storage
function setCity() {
  localStorage.setItem('city', city.value);
  getWeather();
  city.blur();
}

// получить сохраненный город из Local Storage
function getCity() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem("city");
  } else { 
    city.value = 'Minsk'; // если не введен город, по умолчанию город - Минск
} 
  getWeather();
}


city.addEventListener('change', setCity);
window.addEventListener('beforeunload', setCity);
window.addEventListener('DOMContentLoaded', getCity);

// ------- quotes -------

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

// получить данные из файла, вывести рандомно цитату по номеру от 1 до 20
async function getQuotes() {  
  const quotes = 'js/enquotes.json';
  const res = await fetch(quotes);
  const data = await res.json(); 

  function randomQuote(){
    let n = Math.floor(Math.random() * 20);
    quote.textContent = data[n].text;
    author.textContent = data[n].author;  
  }
    randomQuote();
}
getQuotes();

changeQuote.addEventListener('click', getQuotes);

// ------- audio player -------

const audio = new Audio();
const play = document.querySelector('.play.player-icon');
const songsList = document.querySelector('.play-list');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
let songNum = 0;
let isPlay = false;
let audioCurrentTime = 0;

/*function toggleBtn() {
  play.classList.toggle('pause');
}
play.addEventListener('click', toggleBtn);*/

// вывести в html список песен 
for (let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');  
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  songsList.append(li); 
  }

let playItem = document.querySelectorAll('.play-item');
playItem[0].classList.add('item-active'); // по дефолту активный трек первый

// запуск проигрывания плеера 
function playAudio() {
  audio.src = playList[songNum].src; // найти трек в playList.js
  playItem[songNum].classList.add('item-active'); // добавить стиль активному треку
  songName.innerHTML = playList[songNum].title; // выввести название трека в продвинутый плеер
  audio.currentTime = audioCurrentTime; // запомнить место проигрывания трека

  if (!isPlay) {
    audio.play();  
    isPlay = true; 
    play.classList.add('pause'); // смена иконку с play на pause
  } else {
    audio.pause(); 
    audioCurrentTime = audio.currentTime; // проигрывать трек с того же места 
    isPlay = false; 
    play.classList.remove('pause');
  } 
}

play.addEventListener('click', playAudio);

// следующий трек 
function nextSong() { 
  audioCurrentTime = 0; // начинается с 0
  if (isPlay) { 
    playAudio();
  } 

  if (songNum < 3) {
    songNum = songNum + 1;
    playItem[songNum-1].classList.remove('item-active');   
  } else if (songNum === 3) {
    playItem[songNum].classList.remove('item-active');    
    songNum = 0;          
  }  
  playAudio();
}
// предыдущий трек
function prevSong() {
  audioCurrentTime = 0; // начинается с 0
  if (isPlay) {
    playAudio();
  }

  if (songNum > 0) {
    songNum = songNum - 1;
    playItem[songNum+1].classList.remove('item-active'); 
  }
  else if (songNum === 0) {
    playItem[songNum].classList.remove('item-active'); 
    songNum = 3;
  }   
  playAudio(); 
}

playNext.addEventListener('click', nextSong);
playPrev.addEventListener('click', prevSong);

// после окончания трека проигрывается следующий
audio.addEventListener('ended', nextSong);

// клик по названию трека запускает трек
playItem.forEach((item, i) => {
  item.addEventListener('click', () => {
    audioCurrentTime = 0;
    if (isPlay) {
      playAudio();
    }

    if (songNum === i) { // если кликать на активный трек
      playAudio();
    }
    if (songNum !== i) { // если кликать на неактивный трек
      if (playItem[songNum].classList.contains('item-active')) {
        playItem[songNum].classList.remove('item-active'); 
      } else {
        playItem[songNum].classList.add('item-active'); 
      }
      songNum = i;
      playAudio();
    } 
  })
});

// ------- advanced player -------

const volumeIcon = document.querySelector('.volume_icon');
const audioVolume = document.getElementById("audioVolume");
const audioProgress = document.getElementById("audioProgress");
let songDuration = document.querySelector('.song_duration_time');
let songCurrentTime = document.querySelector('.song_current_time');
let songName = document.querySelector('.song_name_title');

// заглушение звука, смена иконки 
volumeIcon.addEventListener('click', () => {

  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeIcon.classList.remove('mute');
    volumeIcon.classList.add('mute');
  } else {
    volumeIcon.classList.add('mute');
    volumeIcon.classList.remove('mute');
  }
});

// громкость музыки, при 0 - мут и смена иконки
audioVolume.addEventListener("input", () => {

  audio.volume = Math.trunc(audioVolume.value) / 100;
  if (audioVolume.value == 0) {
    volumeIcon.classList.add('mute');
  } else { 
    volumeIcon.classList.remove('mute');
  }
});

function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){ 
      sec  = `0${sec}`;
  };
  return `${min}:${sec}`;
};

// прогресс-бар
audio.addEventListener("timeupdate", () => {

  audioCurrentTime = audio.currentTime;
  songDuration.innerHTML = `${playList[songNum].duration}`; // продолжительность трека из плейлиста
  songCurrentTime.innerHTML = (formatTime(audio.currentTime)); // текущее время трека
  audioProgress.value = 100 * (audio.currentTime / audio.duration); // ползунок двигается
  if (audioProgress.value === audio.duration) { // после окончания трека играть следующий
    playNext();
  }
});

audioProgress.addEventListener("input", () => {

  audio.currentTime = (audioProgress.value * audio.duration) / 100; // при нажатии на прогресс бар, трек играет с этого места
  if (audioProgress.value === audio.duration) {
    playNext();
  }
});







