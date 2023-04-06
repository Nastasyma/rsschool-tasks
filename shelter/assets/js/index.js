import animals from './pets.js';

console.log(`Shelter-part2.
1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20
8. Верстка резиновая: +8
9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4
10. Верстка обеих страниц валидная: +8
Итого: 100
`);

// Burger menu

const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav_item');
const mobileWrapper = document.querySelector('.mobile_wrapper');
const bodyHidden = document.querySelector('body');

function addBurger() {
  menu.classList.add('open_menu');
  burger.classList.add('burger_active');
  mobileWrapper.classList.add('popup_active');
  bodyHidden.classList.add('body_hidden');
}

function removeBurger() {
  menu.classList.remove('open_menu');
  mobileWrapper.classList.remove('popup_active');
  burger.classList.remove('burger_active');
  bodyHidden.classList.remove('body_hidden');
}

function activeBurger() {
  if (menu.classList.contains('open_menu')) {
    removeBurger();
  } else {
    addBurger();
  }
};

burger.addEventListener('click', activeBurger);
mobileWrapper.addEventListener('click', activeBurger);
navItem.forEach(el => {
  el.addEventListener('click', removeBurger);
})

// Popup

const cardsItem = document.querySelectorAll('.cards_item');
const closeBTN = document.querySelector('.popup__close_icon');
const popup = document.querySelector('.popup');
const mobileWrapperPopup = document.querySelector('.mobile_wrapper_popup');

function popupAnimal() {
  cardsItem.forEach(el => {
    el.addEventListener('click', (e) => {
      const card = animals.find(el => el['id'] === e.currentTarget.dataset.id)
      console.log(card);
      popup.innerHTML = "";

      const closeBTN = document.createElement('button');
      closeBTN.classList.add('popup__close_icon');
      let closeIcon = new Image();
      closeIcon.classList.add('close_icon');
      closeIcon.src = "../../assets/icons/close-icon.svg";
      closeBTN.appendChild(closeIcon);
      popup.append(closeBTN);

      const popupWrapper = document.createElement('div');
      popupWrapper.classList.add('popup__wrapper');

      const popupImgWrapper = document.createElement('div');
      popupImgWrapper.classList.add('popup__img_wrapper');
      let imgPopup = new Image();
      imgPopup.classList.add('img_popup');
      imgPopup.src = `../../assets/images/${card.img}`;
      popupImgWrapper.appendChild(imgPopup);
      popupWrapper.append(popupImgWrapper);

      const popupContent = document.createElement('div');
      popupContent.classList.add('popup__content');

      const popupTitle = document.createElement('span');
      popupTitle.classList.add('popup__title');
      popupTitle.textContent = card.name;
      popupContent.appendChild(popupTitle);

      const popupName = document.createElement('span');
      popupName.classList.add('popup__name');
      popupName.textContent = `${card.type} - ${card.breed}`;
      popupContent.appendChild(popupName);

      const popupDesc = document.createElement('p');
      popupDesc.classList.add('popup__desc');
      popupDesc.textContent = card.description;
      popupContent.appendChild(popupDesc);

      const popupDescList = document.createElement('ul');
      popupDescList.classList.add('popup__desc_list');

      const age = document.createElement('li');
      age.classList.add('desc_item');
      age.innerHTML = `<b>Age: </b> ${card.age}`;
      popupDescList.appendChild(age);

      const inoculations = document.createElement('li');
      inoculations.classList.add('desc_item');
      inoculations.innerHTML = `<b>Inoculations: </b> ${card.inoculations}`;
      popupDescList.appendChild(inoculations);

      const diseases = document.createElement('li');
      diseases.classList.add('desc_item');
      diseases.innerHTML = `<b>Diseases: </b> ${card.diseases}`;
      popupDescList.appendChild(diseases);

      const parasites = document.createElement('li');
      parasites.classList.add('desc_item');
      parasites.innerHTML = `<b>Parasites: </b> ${card.parasites}`;
      popupDescList.appendChild(parasites);

      popupContent.appendChild(popupDescList);
      popupWrapper.append(popupContent);
      popup.append(popupWrapper);

      popup.classList.add('pets_popup_active');
      mobileWrapperPopup.classList.add('popup_active');
      bodyHidden.classList.add('body_hidden');
      mobileWrapperPopup.addEventListener('click', () => {
        popup.classList.remove('pets_popup_active');
        mobileWrapperPopup.classList.remove('popup_active');
      })
      closeBTN.addEventListener('click', () => {
        popup.classList.remove('pets_popup_active');
        mobileWrapperPopup.classList.remove('popup_active');
        bodyHidden.classList.remove('body_hidden');
      })
    });
  });
}
popupAnimal()