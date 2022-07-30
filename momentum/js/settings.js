import langObject from './languageObj.js';
import { getQuotes } from './quotes.js';

// ------- settings -------

const settingsBTN = document.querySelector('.settings_btn');
const settingsMenu = document.querySelector('.settings_menu');
const background = document.querySelector('.body_opacity_popup');
const greetingContainer = document.querySelector('.greeting-container');
const quotesWrapper = document.querySelector('.quote_wrapper');
const weather = document.querySelector('.weather');
const player = document.querySelector('.player');
const logo = document.querySelector('.my_page');
const todo = document.querySelector('.todo_wrapper');
const changeWidgets = document.querySelectorAll('input[type="checkbox"]');
const langs = document.querySelectorAll('input[name="language"]');
const enTitle = document.querySelector('.en_title');
const ruTitle = document.querySelector('.ru_title');
const setTitle = document.querySelector('.settings_title');
const langTitle = document.querySelector('.lang_title');
const widgetTitle = document.querySelector('.widget_title');
const timeTitle = document.querySelector('.time_title');
const dateTitle = document.querySelector('.date_title');

export let language = 'en';

(function () { // вызов попап меню 
  settingsBTN.addEventListener('click', () => {
    if (settingsBTN.classList.contains('settings_btn_active')) { // кнопка "настройки" закрывает попап
      settingsBTN.classList.remove('settings_btn_active');
      settingsMenu.classList.remove('settings_menu_active')
      background.classList.remove('body_opacity_popup_active');
    } else { // кнопка "настройки" открывает попап
      settingsBTN.classList.add('settings_btn_active'); 
      settingsMenu.classList.add('settings_menu_active')
      background.classList.add('body_opacity_popup_active');
    }
  })
  background.addEventListener('click', () => { // клик вне зоны попапа закрывает его
    settingsBTN.classList.remove('settings_btn_active');
    settingsMenu.classList.remove('settings_menu_active')
    background.classList.remove('body_opacity_popup_active');
  })
}());

changeWidgets.forEach(el => { 
  el.addEventListener('change', (e) => {
      if (e.target.checked) { // спрятать элементы по клику на чекбоксы
          document.querySelector(`.${e.target.value}`).style.visibility = "visible";
          document.querySelector(`.${e.target.value}`).style.opacity = "1";
      } else {
          document.querySelector(`.${e.target.value}`).style.visibility = "hidden";
          document.querySelector(`.${e.target.value}`).style.opacity = "0";
      }

      window.addEventListener('beforeunload', () => {
        // сохранить класс opacity элементов в Local Storage
        localStorage.setItem(`${e.target.value}_opacity`, document.querySelector(`.${e.target.value}`).style.visibility);
        // сохранить статус чекбоксов в Local Storage
        localStorage.setItem(`${e.target.value}_settings`, e.target.checked);
      });
    })
});

window.addEventListener('DOMContentLoaded', () => {
  changeWidgets.forEach((element) => { // получить статус чекбоксов из Local Storage
    if (localStorage.getItem(`${element.value}_settings`)) {
    element.checked = JSON.parse(localStorage.getItem(`${element.value}_settings`));
    }
  });

  if (localStorage.getItem('language_settings') === 'ru') { // получить статус радио кнопок (язык) из Local Storage 
    // ruLang.value = localStorage.getItem('language_settings');
    document.querySelector('input[value="ru"]').setAttribute('checked', 'true');
  } else if (localStorage.getItem('language_settings') === 'en') {
    // enLang.value = localStorage.getItem('language_settings');
    document.querySelector('input[value="en"]').setAttribute('checked', 'true');
  }

  // получить класс opacity элементов из Local Storage
  time.style.visibility = localStorage.getItem('time_opacity');
  data.style.visibility = localStorage.getItem('date_opacity');
  greetingContainer.style.visibility = localStorage.getItem('greeting-container_opacity');
  quotesWrapper.style.visibility = localStorage.getItem('quote_wrapper_opacity');
  weather.style.visibility = localStorage.getItem('weather_opacity');
  player.style.visibility = localStorage.getItem('player_opacity');
  logo.style.visibility = localStorage.getItem('my_page_opacity');
  todo.style.visibility = localStorage.getItem('todo_wrapper_opacity');
  // получить переменную language из Local Storage
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
  // получить перевод меню настроек из Local Storage
  if (localStorage.getItem('lang_en')) {
    enTitle.textContent = localStorage.getItem('lang_en');
  } else if (localStorage.getItem('lang_ru')) {
    ruTitle.textContent = localStorage.getItem('lang_ru');
  } else if (localStorage.getItem('settings_title')) {
    setTitle.textContent = localStorage.getItem('settings_title');
  } else if (localStorage.getItem('change_lang')) {
    langTitle.textContent = localStorage.getItem('change_lang');
  } else if (localStorage.getItem('widget')) {
    widgetTitle.textContent = localStorage.getItem('widget');
  } else if (localStorage.getItem('time')) {
    timeTitle.textContent = localStorage.getItem('time');
  } else if (localStorage.getItem('date')) {
    dateTitle.textContent = localStorage.getItem('date');
  }
  getQuotes();
});

// изменить язык настроек
langs.forEach(el => {
  el.addEventListener('change', (e) => {
      language = e.target.value;
      localStorage.setItem('language', language);
      localStorage.setItem(`${e.target.name}_settings`, e.target.value);
      // сохранить перевод меню настроек в Local Storage
      localStorage.setItem('lang_en', langObject[language].langEn);
      localStorage.setItem('lang_ru', langObject[language].langRu);
      localStorage.setItem('settings_title', langObject[language].settings);
      localStorage.setItem('change_lang', langObject[language].changeLang);
      localStorage.setItem('widget', langObject[language].widget);
      localStorage.setItem('time', langObject[language].time);
      localStorage.setItem('date', langObject[language].date);
      
      getQuotes();
      getTranslationSettings();
  })
});

function getTranslationSettings() {
  // перевести меню настроек
  enTitle.textContent = langObject[language].langEn;
  ruTitle.textContent = langObject[language].langRu;
  setTitle.textContent = langObject[language].settings;
  langTitle.textContent = langObject[language].changeLang;
  widgetTitle.textContent = langObject[language].widget;
  timeTitle.textContent = langObject[language].time;
  dateTitle.textContent = langObject[language].date;
}










