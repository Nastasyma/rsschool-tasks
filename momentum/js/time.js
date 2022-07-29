// ------- time -------

const time = document.querySelector('.time');
const data = document.querySelector('.date');

// отображение времени
function showTime() {
  const currentTime = new Date().toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  setTimeout(showTime, 1000);
}
showTime();

// отображение даты
function showDate() {
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = new Date().toLocaleDateString('en-Gb', options);
  data.textContent = currentDate;
}

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

window.addEventListener('beforeunload', setName);
window.addEventListener('DOMContentLoaded', getName);