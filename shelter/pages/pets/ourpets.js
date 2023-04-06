import animals from '../../assets/js/pets.js';
import { getRandomNum } from '../../assets/js/help.js';
// import { createCard } from '../main/main.js';
import { popupAnimal } from '../../assets/js/popup.js';

popupAnimal();

const cardsList = document.querySelector('.cards_list');
let cards = [];
let petIndex;

function getCards() {
  cards.length = 0;
  for (let i=0; i<8; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cards.includes(animals[petIndex])) {
      i--
    } else {
      cards.push(animals[petIndex]);
    }
  }
}
getCards();
console.log(cards)

// createCard(cards, cardsList);

function createCard() {
  for (let i = 0; i < cards.length; i++) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('cards_item');
    cardItem.dataset.id = cards[i].id;
    let petImg = new Image();
    petImg.classList.add('cards_img');
    petImg.src = cards[i].img;
    petImg.alt = `${cards[i].name} photo`;
    cardItem.appendChild(petImg);
    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card_title');
    cardTitle.textContent = cards[i].name;
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