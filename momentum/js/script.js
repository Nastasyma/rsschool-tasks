import playList from './playList.js';

// time

const time = document.querySelector('.time');
const data = document.querySelector('.date');

function showTime() {
  const currentTime = new Date().toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
}
showTime();

function showDate() {
  const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
  const currentDate = new Date().toLocaleDateString('en-Gb', options);
  data.textContent = currentDate;
  setTimeout(showDate, 1000);
}
showDate();

// greeting

const greeting = document.querySelector('.greeting');
const nameEnter = document.querySelector('.name');

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

function showGreeting() {
  const greetingText = `Good ${timeOfDay},`;
  greeting.textContent = greetingText;
  setTimeout(showGreeting, 1000);
}
showGreeting();

function setName() {
  localStorage.setItem('name', nameEnter.value);
}

function getName() {
  if (localStorage.getItem('name')) {
    nameEnter.value = localStorage.getItem('name');
  }
}

window.addEventListener('beforeunload', setName)
window.addEventListener('DOMContentLoaded', getName)

// slider

const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

function getRandomNum(){
  return (Math.floor(Math.random() * 20) + 1);
}

let slideNumber = getRandomNum();

function setBg() {
  const img = new Image();
  let bgNum  = String(slideNumber).padStart(2,'0');
    img.src = `https://raw.githubusercontent.com/Nastasyma/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`;
}
}
setBg();

function getSlideNext(){
  if (slideNumber < 20) {
    slideNumber = slideNumber + 1;
  } else if (slideNumber === 20) {
    slideNumber = 1;
  }
  setBg();
};
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

// weather

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const speedWind = document.querySelector('.speedWind');
const weatherError = document.querySelector('.weather-error');

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=f88d8ce92815ace0f687319f76b83882&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  
  if (data.cod !== '404' && data.cod !== '400') {
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`;
    speedWind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
  } else if (city.value === '') {
    temperature.textContent = 'City not found!';
    weatherDescription.textContent = '';
    humidity.textContent = '';
    speedWind.textContent = ''; 
  } else {
    temperature.textContent = `Can't find the weather for "${city.value}" !`;
    weatherDescription.textContent = '';
    humidity.textContent = '';
    speedWind.textContent = ''; 
  }
}

function setCity() {
  localStorage.setItem('city', city.value);
  getWeather();
  city.blur();
}

function getCity() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem("city");
  } else {
    city.value = 'Minsk';
} 
  getWeather();
}


city.addEventListener('change', setCity);
window.addEventListener('beforeunload', setCity);
window.addEventListener('DOMContentLoaded', getCity);

// quotes

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

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

// audio player

const audio = new Audio();
const play = document.querySelector('.play.player-icon');
const songsList = document.querySelector('.play-list');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
let songNum = 0;
let isPlay = false;

/*function toggleBtn() {
  play.classList.toggle('pause');
}
play.addEventListener('click', toggleBtn);*/

for (let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');  
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  songsList.append(li); 
  }

let playItem = document.querySelectorAll('.play-item');
playItem[0].classList.add('item-active');

function playAudio() {
  audio.src = playList[songNum].src;
  playItem[songNum].classList.add('item-active');  

  if (!isPlay) {
    audio.currentTime = 0;
    audio.play();  
    isPlay = true; 
    play.classList.add('pause');
  } else {
    isPlay = false; 
    audio.pause(); 
    play.classList.remove('pause');
  } 
}

play.addEventListener('click', () => {
  play.classList.toggle('pause');
  playAudio();
});

function nextSong() { 
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
function prevSong() {
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

audio.addEventListener('ended', nextSong);

playItem.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (isPlay) {
      playAudio();
    }

    if (songNum === i) {
      playAudio();
    }
    if (songNum !== i) {
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

// advanced player

const volumeIcon = document.querySelector('.volume_icon');
const audioVolume = document.getElementById("audioVolume");
const playerInfo = document.querySelector('.player_info');
let volumeValue = Math.trunc(audioVolume.value) / 100;


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


