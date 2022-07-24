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
  const currentDate = new Date().toLocaleDateString('en-En', options);
  data.textContent = currentDate;
  setTimeout(showDate, 1000);
}
showDate();

// greeting

const greeting = document.querySelector('.greeting');
const nameEnter = document.querySelector('.name');

greeting.textContent = "Text";

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    return 'morning,';
  } else if (hours >= 12 && hours < 18) {
    return 'afternoon,';
  } else if (hours >= 18 && hours < 24) {
    return 'evening,';
  } else if (hours >= 0 && hours < 6) {
    return 'night,';
  }
}
getTimeOfDay();

function showGreeting() {

  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
  setTimeout(showGreeting, 1000);
}
showGreeting();


