// ------- settings -------

const settingsBTN = document.querySelector('.settings_btn');
const settingsMenu = document.querySelector('.settings_menu');
const background = document.querySelector('.body_opacity_popup');
const langEnSettings = document.getElementById("en");
const langRuSettings = document.getElementById("ru");
const checkbox = document.querySelectorAll('.switch');
const timeSettings = document.querySelector('input[value="time"]');
const dateSettings = document.querySelector('input[value="date"]');
const weatherSettings = document.querySelector('input[value="weather"]');
const greetingSettings = document.querySelector('input[value="greeting-container"]');
const quoteSettings = document.querySelector('input[value="quote_wrapper"]');
const playerSettings = document.querySelector('input[value="player"]');
const logoSettings = document.querySelector('input[value="my_page"]');
const changeWidgets = document.querySelector('.change_widget');
const greetingContainer = document.querySelector('.greeting-container');
const quotesWrapper = document.querySelector('.quote_wrapper');
const weather = document.querySelector('.weather');
const player = document.querySelector('.player');
const logo = document.querySelector('.my_page');


(function () { // вызов попап меню 
  settingsBTN.addEventListener('click', () => {
    if (settingsBTN.classList.contains('settings_btn_active')) {
    settingsBTN.classList.remove('settings_btn_active');
    settingsMenu.classList.remove('settings_menu_active')
    background.classList.remove('body_opacity_popup_active');
    } else {
      settingsBTN.classList.add('settings_btn_active');
      settingsMenu.classList.add('settings_menu_active')
      background.classList.add('body_opacity_popup_active');
    }
  })
  background.addEventListener('click', () => { 
    settingsBTN.classList.remove('settings_btn_active');
    settingsMenu.classList.remove('settings_menu_active')
    background.classList.remove('body_opacity_popup_active');
  })
}());

checkbox.forEach(x => { // спрятать элементы по клику на чекбоксы
  x.addEventListener('change', (e) => {
      if (e.target.checked) {
          document.querySelector(`.${e.target.value}`).style.opacity = "1";
      } else {
          document.querySelector(`.${e.target.value}`).style.opacity = "0";
      }
      // сохранить класс opacity элементов в Local Storage
      localStorage.setItem(`${e.target.value}_opacity`, JSON.stringify(document.querySelector(`.${e.target.value}`).style.opacity));
    })
});

function setSettings() { // сохранить статус чекбоксов в Local Storage
  localStorage.setItem('timeSettings', timeSettings.checked);
  localStorage.setItem('dateSettings', dateSettings.checked);
  localStorage.setItem('weatherSettings', weatherSettings.checked);
  localStorage.setItem('greetingSettings', greetingSettings.checked);
  localStorage.setItem('quoteSettings', quoteSettings.checked);
  localStorage.setItem('playerSettings', playerSettings.checked);
  localStorage.setItem('logoSettings', logoSettings.checked);   
};

function getSettings() { // получить статус чекбоксов и класс opacity элементов из Local Storage
  timeSettings.checked = JSON.parse(localStorage.getItem('timeSettings'));
  dateSettings.checked = JSON.parse(localStorage.getItem('dateSettings'));
  greetingSettings.checked = JSON.parse(localStorage.getItem('greetingSettings'));
  quoteSettings.checked = JSON.parse(localStorage.getItem('quoteSettings'));
  weatherSettings.checked = JSON.parse(localStorage.getItem('weatherSettings')); 
  playerSettings.checked = JSON.parse(localStorage.getItem('playerSettings'));
  logoSettings.checked = JSON.parse(localStorage.getItem('logoSettings')); 
  time.style.opacity = JSON.parse(localStorage.getItem('time_opacity'));
  data.style.opacity = JSON.parse(localStorage.getItem('date_opacity'));
  greetingContainer.style.opacity = JSON.parse(localStorage.getItem('greeting-container_opacity'));
  quotesWrapper.style.opacity = JSON.parse(localStorage.getItem('quote_wrapper_opacity'));
  weather.style.opacity = JSON.parse(localStorage.getItem('weather_opacity'));
  player.style.opacity = JSON.parse(localStorage.getItem('player_opacity'));
  logo.style.opacity = JSON.parse(localStorage.getItem('my_page_opacity'));
}

window.addEventListener('beforeunload', setSettings);
window.addEventListener('DOMContentLoaded', getSettings);
