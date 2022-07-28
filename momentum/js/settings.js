// ------- settings -------

const settingsBTN = document.querySelector('.settings_btn');
const settingsMenu = document.querySelector('.settings_menu');
const background = document.querySelector('.body_opacity_popup');

(function () {
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