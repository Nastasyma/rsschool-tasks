import cardsDataGreen from './cardsDataGreen.js';
import cardsDataBrown from './cardsDataBrown.js';
import cardsDataBlue from './cardsDataBlue.js';
import ancientsData from './ancientsData.js';

const cardsBTN = document.querySelector('.cards_button');
const levelMid = document.querySelector('.level3');
const deckWrapper = document.querySelector('.deck_wrapper');
const currentCard = document.querySelector('.current_card');
const cardsDeck = document.querySelector('.cards_deck');
const anchCards = document.querySelectorAll('.card');
const levelsWrapper = document.querySelector('.difficulty_level_wrapper');
const greenSt1 = document.querySelector('.green_st1');
const greenSt2 = document.querySelector('.green_st2');
const greenSt3 = document.querySelector('.green_st3');
const blueSt1 = document.querySelector('.blue_st1');
const blueSt2 = document.querySelector('.blue_st2');
const blueSt3 = document.querySelector('.blue_st3');
const brownSt1 = document.querySelector('.brown_st1');
const brownSt2 = document.querySelector('.brown_st2');
const brownSt3 = document.querySelector('.brown_st3');
const img = new Image();

levelMid.addEventListener('click', () => { 
  cardsBTN.style.display = "block";
  deckWrapper.style.display = "none";
  cardsDeck.style.visibility = "visible";
  currentCard.style.backgroundImage = 'none';
  stageOne.length = 0;
  stageTwo.length = 0;
  stageThree.length = 0;
  arrayCards.length = 0;
  if (document.querySelector('.card1').classList.contains('card_active')) {
    pushCardsAzathothMid();
  }
})
cardsBTN.addEventListener('click', () => { 
  cardsBTN.style.display = "none";
  deckWrapper.style.display = "flex";
})

anchCards.forEach(el => {
  el.addEventListener('click', (e) => {
    document.querySelector('.card1').classList.remove('card_active');
    document.querySelector('.card2').classList.remove('card_active');
    document.querySelector('.card3').classList.remove('card_active');
    document.querySelector('.card4').classList.remove('card_active');
    e.target.classList.add('card_active');
  })
});

let stageOne = [];
let stageTwo = [];
let stageThree = [];
let arrayCards = [];
let stageOneDots = [];
let stageTwoDots = [];
let stageThreeDots = [];

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pushCardsAzathothMid() {
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
}

function setDotsAzathoth() {
  stageOneDots.push(ancientsData[0].firstStage);
  greenSt1.textContent = `${ancientsData[0].firstStage.greenCards}`;
  brownSt1.textContent = `${ancientsData[0].firstStage.brownCards}`;
  blueSt1.textContent = `${ancientsData[0].firstStage.blueCards}`;
  console.log("stageOneDots =", stageOneDots);
  stageTwoDots.push(ancientsData[0].secondStage);
  greenSt2.textContent = `${ancientsData[0].secondStage.greenCards}`;
  brownSt2.textContent = `${ancientsData[0].secondStage.brownCards}`;
  blueSt2.textContent = `${ancientsData[0].secondStage.blueCards}`;
  console.log("stageTwoDots =", stageTwoDots);
  stageThreeDots.push(ancientsData[0].thirdStage);
  greenSt3.textContent = `${ancientsData[0].thirdStage.greenCards}`;
  brownSt3.textContent = `${ancientsData[0].thirdStage.brownCards}`;
  blueSt3.textContent = `${ancientsData[0].thirdStage.blueCards}`;
  console.log("stageThreeDots =", stageThreeDots);
}
function setDotCthulthu() {
  stageOneDots.push(ancientsData[1].firstStage);
  greenSt1.textContent = `${ancientsData[1].firstStage.greenCards}`;
  brownSt1.textContent = `${ancientsData[1].firstStage.brownCards}`;
  blueSt1.textContent = `${ancientsData[1].firstStage.blueCards}`;
  console.log("stageOneDots =", stageOneDots);
  stageTwoDots.push(ancientsData[1].secondStage);
  greenSt2.textContent = `${ancientsData[1].secondStage.greenCards}`;
  brownSt2.textContent = `${ancientsData[1].secondStage.brownCards}`;
  blueSt2.textContent = `${ancientsData[1].secondStage.blueCards}`;
  console.log("stageTwoDots =", stageTwoDots);
  stageThreeDots.push(ancientsData[1].thirdStage);
  greenSt3.textContent = `${ancientsData[1].thirdStage.greenCards}`;
  brownSt3.textContent = `${ancientsData[1].thirdStage.brownCards}`;
  blueSt3.textContent = `${ancientsData[1].thirdStage.blueCards}`;
  console.log("stageThreeDots =", stageThreeDots);
}
function setDotIogSothoth() {
  stageOneDots.push(ancientsData[2].firstStage);
  greenSt1.textContent = `${ancientsData[2].firstStage.greenCards}`;
  brownSt1.textContent = `${ancientsData[2].firstStage.brownCards}`;
  blueSt1.textContent = `${ancientsData[2].firstStage.blueCards}`;
  console.log("stageOneDots =", stageOneDots);
  stageTwoDots.push(ancientsData[2].secondStage);
  greenSt2.textContent = `${ancientsData[2].secondStage.greenCards}`;
  brownSt2.textContent = `${ancientsData[2].secondStage.brownCards}`;
  blueSt2.textContent = `${ancientsData[2].secondStage.blueCards}`;
  console.log("stageTwoDots =", stageTwoDots);
  stageThreeDots.push(ancientsData[2].thirdStage);
  greenSt3.textContent = `${ancientsData[2].thirdStage.greenCards}`;
  brownSt3.textContent = `${ancientsData[2].thirdStage.brownCards}`;
  blueSt3.textContent = `${ancientsData[2].thirdStage.blueCards}`;
  console.log("stageThreeDots =", stageThreeDots);
}
function setDotShubNiggurath() {
  stageOneDots.push(ancientsData[3].firstStage);
  greenSt1.textContent = `${ancientsData[3].firstStage.greenCards}`;
  brownSt1.textContent = `${ancientsData[3].firstStage.brownCards}`;
  blueSt1.textContent = `${ancientsData[3].firstStage.blueCards}`;
  console.log("stageOneDots =", stageOneDots);
  stageTwoDots.push(ancientsData[3].secondStage);
  greenSt2.textContent = `${ancientsData[3].secondStage.greenCards}`;
  brownSt2.textContent = `${ancientsData[3].secondStage.brownCards}`;
  blueSt2.textContent = `${ancientsData[3].secondStage.blueCards}`;
  console.log("stageTwoDots =", stageTwoDots);
  stageThreeDots.push(ancientsData[3].thirdStage);
  greenSt3.textContent = `${ancientsData[3].thirdStage.greenCards}`;
  brownSt3.textContent = `${ancientsData[3].thirdStage.brownCards}`;
  blueSt3.textContent = `${ancientsData[3].thirdStage.blueCards}`;
  console.log("stageThreeDots =", stageThreeDots);
}
document.querySelector('.card1').addEventListener('click', () => {
  stageOneDots.length = 0;
  stageTwoDots.length = 0;
  stageThreeDots.length = 0;
  levelsWrapper.style.display = "flex";
  deckWrapper.style.display = "none";
  setDotsAzathoth();
});
document.querySelector('.card2').addEventListener('click', () => {
  stageOneDots.length = 0;
  stageTwoDots.length = 0;
  stageThreeDots.length = 0;
  levelsWrapper.style.display = "flex";
  deckWrapper.style.display = "none";
  setDotCthulthu();
});
document.querySelector('.card3').addEventListener('click', () => {
  stageOneDots.length = 0;
  stageTwoDots.length = 0;
  stageThreeDots.length = 0;
  levelsWrapper.style.display = "flex";
  deckWrapper.style.display = "none";
  setDotIogSothoth();
});
document.querySelector('.card4').addEventListener('click', () => {
  stageOneDots.length = 0;
  stageTwoDots.length = 0;
  stageThreeDots.length = 0;
  levelsWrapper.style.display = "flex";
  deckWrapper.style.display = "none";
  setDotShubNiggurath();
});

function setCard() {
    for (let i = 0; i < 1; i++) {
        if (arrayCards[i].color === "green") {
          img.src = `assets/img/MythicCards/green/${arrayCards[i].id}.jpg`;
          img.onload = () => {
            currentCard.style.backgroundImage = `url(${img.src})`;
          } 
          if (Number(greenSt1.textContent) !== 0) {
            greenSt1.textContent = `${Number(greenSt1.textContent) - 1}`;
          } else if (Number(greenSt1.textContent) === 0 && Number(greenSt2.textContent) !== 0) {
            greenSt2.textContent = `${Number(greenSt2.textContent) - 1}`;
          } else if (Number(greenSt2.textContent) === 0 && Number(greenSt3.textContent) !== 0) {
            greenSt3.textContent = `${Number(greenSt3.textContent) - 1}`;
          }
        } else if (arrayCards[i].color === "blue") {
          img.src = `assets/img/MythicCards/blue/${arrayCards[i].id}.jpg`;
          img.onload = () => {
            currentCard.style.backgroundImage = `url(${img.src})`;
          }
          if (Number(blueSt1.textContent) !== 0) {
            blueSt1.textContent = `${Number(blueSt1.textContent) - 1}`;
          } else if (Number(blueSt1.textContent) === 0 && Number(blueSt2.textContent) !== 0) {
            blueSt2.textContent = `${Number(blueSt2.textContent) - 1}`;
          } else if (Number(blueSt1.textContent) === 0 && Number(blueSt3.textContent) !== 0) {
            blueSt3.textContent = `${Number(blueSt3.textContent) - 1}`;
          }
        } else if (arrayCards[i].color === "brown") {
          img.src = `assets/img/MythicCards/brown/${arrayCards[i].id}.jpg`;
          img.onload = () => {
            currentCard.style.backgroundImage = `url(${img.src})`;
          }
          if (Number(brownSt1.textContent) !== 0) {
            brownSt1.textContent = `${Number(brownSt1.textContent) - 1}`;
          } else if (Number(brownSt1.textContent) === 0 && Number(brownSt2.textContent) !== 0) {
            brownSt2.textContent = `${Number(brownSt2.textContent) - 1}`;
          } else if (Number(brownSt2.textContent) === 0 && Number(brownSt3.textContent) !== 0) {
            brownSt3.textContent = `${Number(brownSt3.textContent) - 1}`;
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


