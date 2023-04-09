import animals from './pets.js';
import { getRandomNum, shuffle } from './help.js';
import { popupAnimal } from './popup.js';

const cardsList = document.querySelector('.cards_list');
const btnLEFT = document.querySelectorAll('.btn-left');
const btnRIGHT = document.querySelectorAll('.btn-right');
const btnPages = document.querySelector('.btn_slider');

const randomArr = [];
let currPage = 1;
let pages = 6;
let cardsArr = [];
let currArr = [];
let petIndex;


document.addEventListener("DOMContentLoaded", () => {
  getWindowSize();
  window.addEventListener('resize', getWindowSize)
});

function getRandomStartArray() {
  for (let i=0; i<8; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (randomArr.includes(animals[petIndex])) {
      i--
    } else {
      randomArr.push(animals[petIndex]);
    }
  }
}
getRandomStartArray();
// console.log(randomArr);

function getRandomArray() {
  for (let i=0; i<6; i++) {
    cardsArr[i] = getSubArr();
  }
  function getSubArr() {
    const subArr1 = [];
    const subArr2 = [];
    const subArr3 = [];

    subArr1.push(shuffle(randomArr.slice(0,3)));
    subArr2.push(shuffle(randomArr.slice(3,6)));
    subArr3.push(shuffle(randomArr.slice(6,8)));

    // console.log(subArr1.concat(subArr2,subArr3).flat())
    return subArr1.concat(subArr2,subArr3).flat();
  }
  cardsArr = cardsArr.flat();
  return cardsArr
}
getRandomArray();
console.log(cardsArr);

function getCurrArray() {
  if (pages === 6) {
    if (currPage === 1) {currArr = cardsArr.slice(0,8)}
    else if (currPage === 2) {currArr = cardsArr.slice(8,16)}
    else if (currPage === 3) {currArr = cardsArr.slice(16,24)}
    else if (currPage === 4) {currArr = cardsArr.slice(24,32)}
    else if (currPage === 5) {currArr = cardsArr.slice(32,40)}
    else if (currPage === 6) {currArr = cardsArr.slice(40,48)}
  }
  if (pages === 8) {
    if (currPage === 1) {currArr = cardsArr.slice(0,6)}
    else if (currPage === 2) {currArr = cardsArr.slice(6,12)}
    else if (currPage === 3) {currArr = cardsArr.slice(12,18)}
    else if (currPage === 4) {currArr = cardsArr.slice(18,24)}
    else if (currPage === 5) {currArr = cardsArr.slice(24,30)}
    else if (currPage === 6) {currArr = cardsArr.slice(30,36)}
    else if (currPage === 7) {currArr = cardsArr.slice(36,42)}
    else if (currPage === 8) {currArr = cardsArr.slice(42,48)}
  }
  if (pages === 16) {
    if (currPage === 1) {currArr = cardsArr.slice(0,3)}
    else if (currPage === 2) {currArr = cardsArr.slice(3,6)}
    else if (currPage === 3) {currArr = cardsArr.slice(6,9)}
    else if (currPage === 4) {currArr = cardsArr.slice(9,12)}
    else if (currPage === 5) {currArr = cardsArr.slice(12,15)}
    else if (currPage === 6) {currArr = cardsArr.slice(15,18)}
    else if (currPage === 7) {currArr = cardsArr.slice(18,21)}
    else if (currPage === 8) {currArr = cardsArr.slice(21,24)}
    else if (currPage === 9) {currArr = cardsArr.slice(24,27)}
    else if (currPage === 10) {currArr = cardsArr.slice(27,30)}
    else if (currPage === 11) {currArr = cardsArr.slice(30,33)}
    else if (currPage === 12) {currArr = cardsArr.slice(33,36)}
    else if (currPage === 13) {currArr = cardsArr.slice(36,39)}
    else if (currPage === 14) {currArr = cardsArr.slice(39,42)}
    else if (currPage === 15) {currArr = cardsArr.slice(42,45)}
    else if (currPage === 16) {currArr = cardsArr.slice(45,48)}
  }
  // console.log(currArr)
}
getCurrArray()

function createCard(arr) {
  cardsList.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('cards_item');
    cardItem.dataset.id = arr[i].id;
    let petImg = new Image();
    petImg.classList.add('cards_img');
    petImg.src = arr[i].img;
    petImg.alt = `${arr[i].name} photo`;
    cardItem.appendChild(petImg);
    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card_title');
    cardTitle.textContent = arr[i].name;
    cardItem.appendChild(cardTitle);
    const cardBTN = document.createElement('button');
    cardBTN.classList.add('btn');
    cardBTN.classList.add('card_btn');
    cardBTN.textContent = "Learn more";
    cardItem.appendChild(cardBTN);
    cardsList.append(cardItem);
    popupAnimal();
  }
}

function switchPages(pages) {
  btnPages.textContent = currPage;
  if (currPage === 1) {
    btnLEFT[0].classList.add('btn_inactive');
    btnLEFT[1].classList.add('btn_inactive');
    btnLEFT[0].classList.remove('btn_active');
    btnLEFT[1].classList.remove('btn_active');
    btnLEFT[0].setAttribute("disabled", "disabled");
    btnLEFT[1].setAttribute("disabled", "disabled");
    btnRIGHT[0].classList.add('btn_active');
    btnRIGHT[1].classList.add('btn_active');
    btnRIGHT[0].classList.remove('btn_inactive');
    btnRIGHT[1].classList.remove('btn_inactive');
    btnRIGHT[0].removeAttribute("disabled", "disabled");
    btnRIGHT[1].removeAttribute("disabled", "disabled");
  } else if (currPage === pages) {
    btnLEFT[0].classList.add('btn_active');
    btnLEFT[1].classList.add('btn_active');
    btnLEFT[0].classList.remove('btn_inactive');
    btnLEFT[1].classList.remove('btn_inactive');
    btnLEFT[0].removeAttribute("disabled", "disabled");
    btnLEFT[1].removeAttribute("disabled", "disabled");
    btnRIGHT[0].classList.remove('btn_active');
    btnRIGHT[1].classList.remove('btn_active');
    btnRIGHT[0].classList.add('btn_inactive');
    btnRIGHT[1].classList.add('btn_inactive');
    btnRIGHT[0].setAttribute("disabled", "disabled");
    btnRIGHT[1].setAttribute("disabled", "disabled");
  } else {
    btnLEFT[0].classList.add('btn_active');
    btnLEFT[1].classList.add('btn_active');
    btnLEFT[0].classList.remove('btn_inactive');
    btnLEFT[1].classList.remove('btn_inactive');
    btnRIGHT[0].classList.add('btn_active');
    btnRIGHT[1].classList.add('btn_active');
    btnRIGHT[0].classList.remove('btn_inactive');
    btnRIGHT[1].classList.remove('btn_inactive');
    btnLEFT[0].removeAttribute("disabled", "disabled");
    btnLEFT[1].removeAttribute("disabled", "disabled");
    btnRIGHT[0].removeAttribute("disabled", "disabled");
    btnRIGHT[1].removeAttribute("disabled", "disabled");
  }
  // console.log(currPage)
}

btnLEFT[1].addEventListener('click', (e) => {
  currPage--
  switchPages(pages);
  getCurrArray();
  createCard(currArr);
});
btnRIGHT[0].addEventListener('click', (e) => {
  currPage++
  switchPages(pages);
  getCurrArray();
  createCard(currArr);
});
btnLEFT[0].addEventListener('click', (e) => {
  currPage = 1;
  switchPages(pages);
  getCurrArray();
  createCard(currArr);
});
btnRIGHT[1].addEventListener('click', (e) => {
  currPage = pages;
  switchPages(pages);
  getCurrArray();
  createCard(currArr);
});

function getWindowSize() {
  if (window.innerWidth >= 1220) {
    pages = 6;
    if (currPage > 6) {
      currPage = pages;
    }
    getCurrArray();
    createCard(currArr);
    switchPages(6);
  } else if (window.innerWidth < 1220 && window.innerWidth > 659) {
    pages = 8;
    if (currPage > 8) {
      currPage = pages;
    }
    getCurrArray();
    createCard(currArr);
    switchPages(8);
  } else if (window.innerWidth <= 659) {
    pages = 16;
    if (currPage > 16) {
      currPage = pages;
    }
    getCurrArray();
    createCard(currArr);
    switchPages(16);
  }
}