import cardsDataGreen from './cardsDataGreen.js';
import cardsDataBrown from './cardsDataBrown.js';
import cardsDataBlue from './cardsDataBlue.js';
import ancientsData from './ancientsData.js';


const difficulties = [
  {
    id: 'easy',
    name: 'Низкая'
  },
  {
    id: 'normal',
    name: 'Средняя'
  },
  {
    id: 'hard',
    name: 'Высокая'
  },
]

const cardsBTN = document.querySelector('.cards_button');
const levelMid = document.querySelector('.level3');
const deckWrapper = document.querySelector('.deck_wrapper');
const currentCard = document.querySelector('.current_card');

(function () {
  levelMid.addEventListener('click', () => { 
    cardsBTN.style.display = "block";
    deckWrapper.style.display = "none";
  })
  cardsBTN.addEventListener('click', () => { 
    cardsBTN.style.display = "none";
    deckWrapper.style.display = "flex";
    currentCard.style.visibility = "hidden";
  })
  deckWrapper.addEventListener('click', () => { 
    currentCard.style.visibility = "visible";
  })
}());

let stageOne = [];
let stageTwo = [];
let stageThree = [];
let arrayCards = [];

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i=0; i<1; i++) {
  let index = getRandomNum(0, cardsDataGreen.length-1);
  if (!stageOne.includes(index)) {
    stageOne.push(cardsDataGreen[index]);
  } 
}
for (let i=0; i<2; i++) {
  let index = getRandomNum(0, cardsDataBrown.length-1)
  if (!stageOne.includes(index)) {
    stageOne.push(cardsDataBrown[index]);
  } 
}
for (let i=0; i<1; i++) {
  let index = getRandomNum(0, cardsDataBlue.length-1)
  if (!stageOne.includes(index)) {
    stageOne.push(cardsDataBlue[index]);
  } 
}
console.log(stageOne);
for (let i=0; i<2; i++) {
  let index = getRandomNum(0, cardsDataGreen.length-1);
  if (!stageTwo.includes(index)) {
    stageTwo.push(cardsDataGreen[index]);
  } 
}
for (let i=0; i<3; i++) {
  let index = getRandomNum(0, cardsDataBrown.length-1)
  if (!stageTwo.includes(index)) {
    stageTwo.push(cardsDataBrown[index]);
  } 
}
for (let i=0; i<1; i++) {
  let index = getRandomNum(0, cardsDataBlue.length-1)
  if (!stageTwo.includes(index)) {
    stageTwo.push(cardsDataBlue[index]);
  } 
}
console.log(stageTwo);
for (let i=0; i<2; i++) {
  let index = getRandomNum(0, cardsDataGreen.length-1);
  if (!stageThree.includes(index)) {
    stageThree.push(cardsDataGreen[index]);
  } 
}
for (let i=0; i<4; i++) {
  let index = getRandomNum(0, cardsDataBrown.length-1)
  if (!stageThree.includes(index)) {
    stageThree.push(cardsDataBrown[index]);
  } 
}
console.log(stageThree);

function sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
sort(stageOne);
sort(stageTwo);
sort(stageThree);

arrayCards.push(stageThree);
arrayCards.push(stageTwo);
arrayCards.push(stageOne);
arrayCards = arrayCards.flat(Infinity);
console.log(arrayCards);