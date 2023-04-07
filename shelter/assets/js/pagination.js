import animals from './pets.js';
import { getRandomNum } from './help.js';
import { popupAnimal } from './popup.js';

const cardsList = document.querySelector('.cards_list');

let cardsArr = [];
let petIndex;

function getCards() {
  cardsArr.length = 0;
  for (let i=0; i<8; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cardsArr.includes(animals[petIndex])) {
      i--
    } else {
      cardsArr.push(animals[petIndex]);
    }
  }
}
getCards();

function createCard() {
  for (let i = 0; i < cardsArr.length; i++) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('cards_item');
    cardItem.dataset.id = cardsArr[i].id;
    let petImg = new Image();
    petImg.classList.add('cards_img');
    petImg.src = cardsArr[i].img;
    petImg.alt = `${cardsArr[i].name} photo`;
    cardItem.appendChild(petImg);
    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card_title');
    cardTitle.textContent = cardsArr[i].name;
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
createCard();