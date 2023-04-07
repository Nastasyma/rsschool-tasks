import animals from './pets.js';
import { getRandomNum } from './help.js';
import { popupAnimal } from './popup.js';

// pets slider

const cardsList = document.querySelector('.cards_list');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const BTNleft = document.querySelector('.left_btn');
const BTNright = document.querySelector('.right_btn');

let cards1 = [];
let cards2 = [];
let cards3 = [];
let petIndex;

function getCards() {
  cards1.length = 0;
  cards2.length = 0;
  cards3.length = 0;
  for (let i=0; i<3; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cards2.includes(animals[petIndex])) {
      i--
    } else {
      cards2.push(animals[petIndex]);
    }
  }
  for (let i=0; i<3; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cards1.includes(animals[petIndex]) || cards2.includes(animals[petIndex])) {
      i--
    } else {
      cards1.push(animals[petIndex]);
    }
  }
  for (let i=0; i<3; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cards3.includes(animals[petIndex]) || cards2.includes(animals[petIndex])) {
      i--
    } else {
      cards3.push(animals[petIndex]);
    }
  }
}
getCards();

function getNextCards() {
  for (let i=0; i<3; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cards1.includes(animals[petIndex])) {
      i--
    } else {
      cards1.push(animals[petIndex]);
    }
  }
  cards1 = cards1.slice(3,6);
}

function createCard(arr, div) {
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
    div.append(cardItem);
    popupAnimal();
  }
}
createCard(cards1, section1);
createCard(cards2, section2);
createCard(cards3, section3);

cardsList.addEventListener('animationend', (animationEvent) => {

  let changedItem;
  if (animationEvent.animationName === 'move-left') {
    cardsList.classList.remove('to-left');
    changedItem = section1;
    section2.innerHTML = changedItem.innerHTML;
    changedItem.innerHTML = "";
    getNextCards();
    createCard(cards1, section1);
    popupAnimal();
  } else if (animationEvent.animationName === 'move-right') {
    cardsList.classList.remove('to-right');
    changedItem = section3;
    section2.innerHTML = changedItem.innerHTML;
    changedItem.innerHTML = "";
    getNextCards();
    createCard(cards1, section3);
    popupAnimal();
  }
  BTNleft.addEventListener('click', moveLeft);
  BTNright.addEventListener('click', moveRight);
});

const moveLeft = () => {
  section3.innerHTML = section2.innerHTML;
  cardsList.classList.add('to-left');
  BTNleft.removeEventListener('click', moveLeft);
  BTNright.removeEventListener('click', moveRight);
};
const moveRight = () => {
  section1.innerHTML = section2.innerHTML;
  cardsList.classList.add('to-right');
  BTNright.removeEventListener('click', moveRight);
  BTNleft.removeEventListener('click', moveLeft);
};

BTNleft.addEventListener('click', moveLeft);
BTNright.addEventListener('click', moveRight);