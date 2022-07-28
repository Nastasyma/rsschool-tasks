// ------- weather -------

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const speedWind = document.querySelector('.speedWind');

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