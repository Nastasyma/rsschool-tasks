import cardsDataGreen from './cardsDataGreen.js';
import cardsDataBrown from './cardsDataBrown.js';
import cardsDataBlue from './cardsDataBlue.js';
import ancientsData from './ancientsData.js';

const cardsBTN = document.querySelector('.cards_button');
const levelMid = document.querySelector('.level3');
const deckWrapper = document.querySelector('.deck_wrapper');
const currentCard = document.querySelector('.current_card');
const cardsDeck = document.querySelector('.cards_deck');
const img = new Image();

levelMid.addEventListener('click', () => { 
  cardsBTN.style.display = "block";
  deckWrapper.style.display = "none";
})
cardsBTN.addEventListener('click', () => { 
  cardsBTN.style.display = "none";
  deckWrapper.style.display = "flex";
})

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
console.log("stageOne = ", stageOne);
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
console.log("stageTwo = ", stageTwo);
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
console.log("stageThree = ", stageThree);

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

arrayCards.push(stageOne);
arrayCards.push(stageTwo);
arrayCards.push(stageThree);
arrayCards = arrayCards.flat(Infinity);
console.log("arrayCards = ", arrayCards);

let stageOneDots = [];
let stageTwoDots = [];
let stageThreeDots = [];
let arrayDots = [];

function setDots() {
  stageOneDots.push(ancientsData[0].firstStage);
  document.querySelector('.green_st1').textContent = `${ancientsData[0].firstStage.greenCards}`;
  document.querySelector('.brown_st1').textContent = `${ancientsData[0].firstStage.brownCards}`;
  document.querySelector('.blue_st1').textContent = `${ancientsData[0].firstStage.blueCards}`;
  console.log("stageOneDots =", stageOneDots);
  stageTwoDots.push(ancientsData[0].secondStage);
  document.querySelector('.green_st2').textContent = `${ancientsData[0].secondStage.greenCards}`;
  document.querySelector('.brown_st2').textContent = `${ancientsData[0].secondStage.brownCards}`;
  document.querySelector('.blue_st2').textContent = `${ancientsData[0].secondStage.blueCards}`;
  console.log("stageTwoDots =", stageTwoDots);
  stageThreeDots.push(ancientsData[0].thirdStage);
  document.querySelector('.green_st3').textContent = `${ancientsData[0].thirdStage.greenCards}`;
  document.querySelector('.brown_st3').textContent = `${ancientsData[0].thirdStage.brownCards}`;
  document.querySelector('.blue_st3').textContent = `${ancientsData[0].thirdStage.blueCards}`;
  console.log("stageThreeDots =", stageThreeDots);
}
setDots();

function setCard() {
    for (let i = 0; i < 1; i++) {
        if (arrayCards[i].color === "green") {
          img.src = `assets/img/MythicCards/green/${arrayCards[i].id}.png`;
          img.onload = () => {
            currentCard.style.backgroundImage = `url(${img.src})`;
          } 
          if (stageOneDots[0].greenCards !== 0) {
            document.querySelector('.green_st1').textContent = `${stageOneDots[0].greenCards - 1}`;
            stageOneDots[0].greenCards = stageOneDots[0].greenCards - 1;
          } else if (stageOneDots[0].greenCards === 0 && stageTwoDots[0].greenCards !== 0) {
            document.querySelector('.green_st2').textContent = `${stageTwoDots[0].greenCards - 1}`;
            stageTwoDots[0].greenCards = stageTwoDots[0].greenCards - 1;
          } else if (stageTwoDots[0].greenCards === 0 && stageThreeDots[0].greenCards !== 0) {
            document.querySelector('.green_st3').textContent = `${stageThreeDots[0].greenCards - 1}`;
            stageThreeDots[0].greenCards = stageThreeDots[0].greenCards - 1;
          }
        } else if (arrayCards[i].color === "blue") {
          img.src = `assets/img/MythicCards/blue/${arrayCards[i].id}.png`;
          img.onload = () => {
            currentCard.style.backgroundImage = `url(${img.src})`;
          }
          if (stageOneDots[0].blueCards !== 0) {
            document.querySelector('.blue_st1').textContent = `${stageOneDots[0].blueCards - 1}`;
            stageOneDots[0].blueCards = stageOneDots[0].blueCards - 1;
          } else if (stageOneDots[0].blueCards === 0 && stageTwoDots[0].blueCards !== 0) {
            document.querySelector('.blue_st2').textContent = `${stageTwoDots[0].blueCards - 1}`;
            stageTwoDots[0].blueCards = stageTwoDots[0].blueCards - 1;
          } else if (stageTwoDots[0].blueCards === 0 && stageThreeDots[0].blueCards !== 0) {
            document.querySelector('.blue_st3').textContent = `${stageThreeDots[0].blueCards - 1}`;
            stageThreeDots[0].blueCards = stageThreeDots[0].blueCards - 1;
          }
        } else if (arrayCards[i].color === "brown") {
          img.src = `assets/img/MythicCards/brown/${arrayCards[i].id}.png`;
          img.onload = () => {
            currentCard.style.backgroundImage = `url(${img.src})`;
          }
          if (stageOneDots[0].brownCards !== 0) {
            document.querySelector('.brown_st1').textContent = `${stageOneDots[0].brownCards - 1}`;
            stageOneDots[0].brownCards = stageOneDots[0].brownCards - 1;
          } else if (stageOneDots[0].brownCards === 0 && stageTwoDots[0].brownCards !== 0) {
            document.querySelector('.brown_st2').textContent = `${stageTwoDots[0].brownCards - 1}`;
            stageTwoDots[0].brownCards = stageTwoDots[0].brownCards - 1;
          } else if (stageTwoDots[0].brownCards === 0 && stageThreeDots[0].brownCards !== 0) {
            document.querySelector('.brown_st3').textContent = `${stageThreeDots[0].brownCards - 1}`;
            stageThreeDots[0].brownCards = stageThreeDots[0].brownCards - 1;
          }
        }
        arrayCards.shift();
        if (arrayCards.length === 0) {
          cardsDeck.style.visibility = "hidden";
        }
  }
}

deckWrapper.addEventListener('click', () => { 
  if (arrayCards.length !== 0) {
  setCard();
  }
})


