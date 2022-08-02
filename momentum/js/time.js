import langObject from './languageObj.js';
import { language, langs } from './settings.js';

// ------- time -------

const time = document.querySelector('.time');
const data = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
let greetingText;

// отображение времени
function showTime() {
  const currentTime = new Date().toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  getTimeOfDayGreeting();
  setTimeout(showTime, 1000);
}
showTime();

// отображение даты
function showDate() {
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = new Date().toLocaleDateString(langObject[language].locale, options);
  data.textContent = currentDate;
}

// ------- greeting -------

const nameEnter = document.querySelector('.name');

function getTimeOfDayGreeting() {
  const date = new Date();
  const hours = date.getHours();

  // время суток 
  if (hours >= 6 && hours < 12) {
    greetingText = langObject[language].morning;
  } else if (hours >= 12 && hours < 18) {
    greetingText = langObject[language].day;
  } else if (hours >= 18 && hours < 24) {
    greetingText = langObject[language].evening;
  } else if (hours >= 0 && hours < 6) {
    greetingText = langObject[language].night;
  }
// приветствие в зависимости от времени суток
  greeting.textContent = greetingText;
}

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


langs.forEach(el => {
  el.addEventListener('change', () => {
    // переключение языка в настройках меняет язык placeholder имени
    nameEnter.setAttribute('placeholder', langObject[language].placeholder);
    localStorage.setItem('name_placeholder', langObject[language].placeholder);
    getTimeOfDayGreeting();
    // переключение языка в настройках меняет язык приветствия
    localStorage.setItem('greeting_text', greetingText);
  })
})

window.addEventListener('beforeunload', setName);
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('name_placeholder')) 
    nameEnter.placeholder = langObject[language].placeholder;
  if (localStorage.getItem('greeting_text')) 
    greeting.textContent = localStorage.getItem('greeting_text');
  showDate();
  getName();
});

export { data, time }