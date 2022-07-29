// ------- settings -------

const settingsBTN = document.querySelector('.settings_btn');
const settingsMenu = document.querySelector('.settings_menu');
const background = document.querySelector('.body_opacity_popup');
const greetingContainer = document.querySelector('.greeting-container');
const quotesWrapper = document.querySelector('.quote_wrapper');
const weather = document.querySelector('.weather');
const player = document.querySelector('.player');
const logo = document.querySelector('.my_page');
const changeWidgets = document.querySelectorAll('input[type="checkbox"]');


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

changeWidgets.forEach(x => { 
  x.addEventListener('change', (e) => {
      if (e.target.checked) { // спрятать элементы по клику на чекбоксы
          document.querySelector(`.${e.target.value}`).style.opacity = "1";
      } else {
          document.querySelector(`.${e.target.value}`).style.opacity = "0";
      }

      window.addEventListener('beforeunload', () => {
        // сохранить класс opacity элементов в Local Storage
        localStorage.setItem(`${e.target.value}_opacity`, document.querySelector(`.${e.target.value}`).style.opacity);
        // сохранить статус чекбоксов в Local Storage
        localStorage.setItem(`${e.target.value}_settings`, e.target.checked);
      });
    })
});

window.addEventListener('DOMContentLoaded', () => {
  changeWidgets.forEach((element) => { // получить статус чекбоксов из Local Storage
    element.checked = JSON.parse(localStorage.getItem(`${element.value}_settings`));
  });
  // получить класс opacity элементов из Local Storage
  time.style.opacity = localStorage.getItem('time_opacity');
  data.style.opacity = localStorage.getItem('date_opacity');
  greetingContainer.style.opacity = localStorage.getItem('greeting-container_opacity');
  quotesWrapper.style.opacity = localStorage.getItem('quote_wrapper_opacity');
  weather.style.opacity = localStorage.getItem('weather_opacity');
  player.style.opacity = localStorage.getItem('player_opacity');
  logo.style.opacity = localStorage.getItem('my_page_opacity');
});
