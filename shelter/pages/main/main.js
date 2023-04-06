import animals from '../../assets/js/pets.js';
import { getRandomNum } from '../../assets/js/help.js';

// pets slider

const cardsList = document.querySelector('.cards_list');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const BTNleft = document.querySelector('.left_btn');
const BTNright = document.querySelector('.right_btn');

let cardsLeftArr = [];
let cardsMidArr = [];
let cardsRightArr = [];
let petIndex;

function countCards(count) {
  for (let i=0; i<count; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cardsMidArr.includes(animals[petIndex])) {
      i--
    } else {
      cardsMidArr.push(animals[petIndex]);
    }
  }
  console.log("cardsMidArr =", cardsMidArr);

  for (let i=0; i<count; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cardsRightArr.includes(animals[petIndex]) || cardsMidArr.includes(animals[petIndex])) {
      i--
    } else {
      cardsRightArr.push(animals[petIndex]);
    }
  }
  console.log("cardsRightArr =", cardsRightArr);

  for (let i=0; i<count; i++) {
    petIndex = getRandomNum(0, animals.length-1);
    if (cardsLeftArr.includes(animals[petIndex]) || cardsMidArr.includes(animals[petIndex])) {
      i--
    } else {
      cardsLeftArr.push(animals[petIndex]);
    }
  }
  console.log("cardsLeftArr =", cardsLeftArr);
}
function sortCards() {
  if (window.innerWidth > 1220) {
    countCards(3)
  }
  if (window.innerWidth < 1220 && window.innerWidth > 760) {
    countCards(2)
  }
  if (window.innerWidth < 761) {
    countCards(1)
  }
}
sortCards();

cardsList.addEventListener('animationend', (animationEvent) => {

  let changedItem;
  if (animationEvent.animationName === 'move-left') {
    cardsList.classList.remove('to-left');
    changedItem = section1;
    section2.innerHTML = changedItem.innerHTML;
  } else if (animationEvent.animationName === 'move-right') {
    cardsList.classList.remove('to-right');
    changedItem = section3;
    section2.innerHTML = changedItem.innerHTML;
  }

  BTNleft.addEventListener('click', moveLeft);
  BTNright.addEventListener('click', moveRight);
});

const moveLeft = () => {
  cardsList.classList.add('to-left');
  BTNleft.removeEventListener('click', moveLeft);
  BTNright.removeEventListener('click', moveRight);
};
const moveRight = () => {
  cardsList.classList.add('to-right');
  BTNright.removeEventListener('click', moveRight);
  BTNleft.removeEventListener('click', moveLeft);
};

BTNleft.addEventListener('click', moveLeft);
BTNright.addEventListener('click', moveRight);
