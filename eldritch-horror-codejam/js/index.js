import cardsDataGreen from './cardsDataGreen.js';
import cardsDataBrown from './cardsDataBrown.js';
import cardsDataBlue from './cardsDataBlue.js';
import ancientsData from './ancientsData.js';

const cardsBTN = document.querySelector('.cards_button');
const levelVeryEasy = document.querySelector('.level_1');
const levelEasy = document.querySelector('.level_2');
const levelMid = document.querySelector('.level_3');
const levelHigh = document.querySelector('.level_4');
const levelVeryHigh = document.querySelector('.level_5');
const deckWrapper = document.querySelector('.deck_wrapper');
const currentCard = document.querySelector('.current_card');
const cardsDeck = document.querySelector('.cards_deck');
const anchCards = document.querySelectorAll('.card');
const levels = document.querySelectorAll('.difficulty_level');
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
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const img = new Image();

levelVeryEasy.addEventListener('click', () => { 
  reset();
  sortDifficulty();
  if (card1.classList.contains('card_active')) {
    pushCardsAzathothVeryEasy();
    pushDotsAzathoth();
  } else if (card2.classList.contains('card_active')) {
    pushCardsCthulthuVeryEasy();
    pushDotCthulthu();
  } else if (card3.classList.contains('card_active')) {
    pushCardsIogSothothVeryEasy();
    pushDotIogSothoth();
  } else if (card4.classList.contains('card_active')) {
    pushCardsShubNiggurathVeryEasy();
    pushDotShubNiggurath();
  }
});
levelEasy.addEventListener('click', () => { 
  reset();
  sortDifficulty();
  if (card1.classList.contains('card_active')) {
    pushDotsAzathoth();
  } else if (card2.classList.contains('card_active')) {
    pushDotCthulthu();
  } else if (card3.classList.contains('card_active')) {
    pushDotIogSothoth();
  } else if (card4.classList.contains('card_active')) {
    pushDotShubNiggurath();
  }
});

levelMid.addEventListener('click', () => { 
  reset();
  if (card1.classList.contains('card_active')) {
    pushCardsAzathothMid();
    pushDotsAzathoth();
  } else if (card2.classList.contains('card_active')) {
    pushCardsCthulthuMid();
    pushDotCthulthu();
  } else if (card3.classList.contains('card_active')) {
    pushCardsIogSothothMid();
    pushDotIogSothoth();
  } else if (card4.classList.contains('card_active')) {
    pushCardsShubNiggurathMid()
    pushDotShubNiggurath();
  }
});
levelHigh.addEventListener('click', () => { 
  reset();
  sortDifficulty();
  if (card1.classList.contains('card_active')) {
    pushDotsAzathoth();
  } else if (card2.classList.contains('card_active')) {
    pushDotCthulthu();
  } else if (card3.classList.contains('card_active')) {
    pushDotIogSothoth();
  } else if (card4.classList.contains('card_active')) {
    pushDotShubNiggurath();
  }
});
levelVeryHigh.addEventListener('click', () => { 
  reset();
  sortDifficulty();
  if (card1.classList.contains('card_active')) {
    pushDotsAzathoth();
  } else if (card2.classList.contains('card_active')) {
    pushDotCthulthu();
  } else if (card3.classList.contains('card_active')) {
    pushDotIogSothoth();
  } else if (card4.classList.contains('card_active')) {
    pushDotShubNiggurath();
  }
});
cardsBTN.addEventListener('click', () => { 
  cardsBTN.style.display = "none";
  deckWrapper.style.display = "flex";
});

anchCards.forEach(el => {
  el.addEventListener('click', (e) => {
    // console.clear();
    card1.classList.remove('card_active');
    card2.classList.remove('card_active');
    card3.classList.remove('card_active');
    card4.classList.remove('card_active');
    levelVeryEasy.classList.remove('level_active');
    levelEasy.classList.remove('level_active');
    levelMid.classList.remove('level_active');
    levelHigh.classList.remove('level_active');
    levelVeryHigh.classList.remove('level_active');
    levelsWrapper.style.display = "flex";
    deckWrapper.style.display = "none";
    cardsBTN.style.display = "none";
    e.target.classList.add('card_active');
  })
});
levels.forEach(el => {
  el.addEventListener('click', (e) => {
    // console.clear();
    cardsBTN.style.display = "block";
    deckWrapper.style.display = "none";
    cardsDeck.style.visibility = "visible";
    currentCard.style.backgroundImage = 'none';
    levelVeryEasy.classList.remove('level_active');
    levelEasy.classList.remove('level_active');
    levelMid.classList.remove('level_active');
    levelHigh.classList.remove('level_active');
    levelVeryHigh.classList.remove('level_active');
    e.target.classList.add('level_active');
  })
});

let stageOne = [];
let stageTwo = [];
let stageThree = [];
let arrayCards = [];
let stageOneDots = [];
let stageTwoDots = [];
let stageThreeDots = [];
let easyGreen = [];
let easyBrown = [];
let easyBlue = [];
let normalGreen = [];
let normalBrown = [];
let normalBlue = [];
let hardGreen = [];
let hardBrown = [];
let hardBlue = [];
let greenVeryEasy = [];
let brownVeryEasy = [];
let blueVeryEasy = [];

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function reset() {
  console.clear();
  stageOneDots.length = 0;
  stageTwoDots.length = 0;
  stageThreeDots.length = 0;
  stageOne.length = 0;
  stageTwo.length = 0;
  stageThree.length = 0;
  arrayCards.length = 0;
  easyGreen.length = 0;
  easyBrown.length = 0;
  easyBlue.length = 0;
  normalGreen.length = 0;
  normalBrown.length = 0;
  normalBlue.length = 0;
  hardGreen.length = 0;
  hardBrown.length = 0;
  hardBlue.length = 0;
  greenVeryEasy.length = 0;
  brownVeryEasy.length = 0;
  blueVeryEasy.length = 0;
  document.querySelector('.title_1').classList.remove('title_active');
  document.querySelector('.title_2').classList.remove('title_active');
  document.querySelector('.title_3').classList.remove('title_active');
};

function sortDifficulty() {
  for (let i=0; i<cardsDataGreen.length; i++) {
    if (cardsDataGreen[i].difficulty === 'easy') {
      easyGreen.push(cardsDataGreen[i]);
    } else if (cardsDataGreen[i].difficulty === 'normal') {
      normalGreen.push(cardsDataGreen[i]);
    } else if (cardsDataGreen[i].difficulty === 'hard') {
      hardGreen.push(cardsDataGreen[i]);
    }
  }
  for (let i=0; i<cardsDataBrown.length; i++) {
    if (cardsDataBrown[i].difficulty === 'easy') {
      easyBrown.push(cardsDataBrown[i]);
    } else if (cardsDataBrown[i].difficulty === 'normal') {
      normalBrown.push(cardsDataBrown[i]);
    } else if (cardsDataBrown[i].difficulty === 'hard') {
      hardBrown.push(cardsDataBrown[i]);
    }
  }
  for (let i=0; i<cardsDataBlue.length; i++) {
    if (cardsDataBlue[i].difficulty === 'easy') {
      easyBlue.push(cardsDataBlue[i]);
    } else if (cardsDataBlue[i].difficulty === 'normal') {
      normalBlue.push(cardsDataBlue[i]);
    } else if (cardsDataBlue[i].difficulty === 'hard') {
      hardBlue.push(cardsDataBlue[i]);
    }
  }
}

let indexGreen;
let indexBrown;
let indexBlue;

function pushCardsAzathothVeryEasy() {
  greenVeryEasy.push(easyGreen);
  brownVeryEasy.push(easyBrown);
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    if (brownVeryEasy.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryEasy.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, easyBlue.length-1);
    if (blueVeryEasy.includes(easyBlue[indexBlue])) {
      i--
    } else {
    blueVeryEasy.push(easyBlue[indexBlue]);
    }
  }
  greenVeryEasy = greenVeryEasy.flat(Infinity);
  brownVeryEasy = brownVeryEasy.flat(Infinity);
  blueVeryEasy = blueVeryEasy.flat(Infinity);
  console.log("greenVeryEasy =", greenVeryEasy);
  console.log("brownVeryEasy =", brownVeryEasy);
  console.log("blueVeryEasy =", blueVeryEasy);

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageOne.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
    stageOne.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageOne.push(brownVeryEasy[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryEasy.length-1);
    if (stageOne.includes(blueVeryEasy[indexBlue])) {
      i--
    } else {
      stageOne.push(blueVeryEasy[indexBlue]);
    }
  }
  console.log("stageOneAzathothVeryEasy = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageTwo.includes(greenVeryEasy[indexGreen]) || stageOne.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown]) || stageTwo.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownVeryEasy[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryEasy.length-1);
    if (stageOne.includes(blueVeryEasy[indexBlue]) || stageTwo.includes(blueVeryEasy[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueVeryEasy[indexBlue]);
    }
  }
  console.log("stageTwoAzathothVeryEasy = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageOne.includes(greenVeryEasy[indexGreen]) || stageTwo.includes(greenVeryEasy[indexGreen]) || stageThree.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
      stageThree.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown]) || stageTwo.includes(brownVeryEasy[indexBrown]) || stageThree.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageThree.push(brownVeryEasy[indexBrown]);
    }
  }
  console.log("stageThreeAzathothVeryEasy = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsAzathothVeryEasy = ", arrayCards);
}

function pushCardsAzathothMid() {

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageOne.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
    stageOne.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageOne.push(cardsDataBrown[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, cardsDataBlue.length-1);
    // console.log("indexBlue =", indexBlue);
    if (stageOne.includes(cardsDataBlue[indexBlue])) {
      i--
    } else {
      stageOne.push(cardsDataBlue[indexBlue]);
    }
  }
  console.log("stageOneAzathothMid = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageTwo.includes(cardsDataGreen[indexGreen]) || stageOne.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
      stageTwo.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown]) || stageTwo.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageTwo.push(cardsDataBrown[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, cardsDataBlue.length-1);
    // console.log("indexBlue =", indexBlue);
    if (stageOne.includes(cardsDataBlue[indexBlue]) || stageTwo.includes(cardsDataBlue[indexBlue])) {
      i--
    } else {
      stageTwo.push(cardsDataBlue[indexBlue]);
    }
  }
  console.log("stageTwoAzathothMid = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageOne.includes(cardsDataGreen[indexGreen]) || stageTwo.includes(cardsDataGreen[indexGreen]) || stageThree.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
      stageThree.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown]) || stageTwo.includes(cardsDataBrown[indexBrown]) || stageThree.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageThree.push(cardsDataBrown[indexBrown]);
    }
  }
  console.log("stageThreeAzathothMid = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsAzathothMid = ", arrayCards);
}

function pushCardsCthulthuVeryEasy() {

  for (let i=0; i<4; i++) {
    indexGreen = getRandomNum(0, easyGreen.length-1);
    if (greenVeryEasy.includes(easyGreen[indexGreen])) {
      i--
    } else {
      greenVeryEasy.push(easyGreen[indexGreen]);
    }
  }
  brownVeryEasy.push(easyBrown);
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    if (brownVeryEasy.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryEasy.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, easyBlue.length-1);
    if (blueVeryEasy.includes(easyBlue[indexBlue])) {
      i--
    } else {
    blueVeryEasy.push(easyBlue[indexBlue]);
    }
  }
  greenVeryEasy = greenVeryEasy.flat(Infinity);
  brownVeryEasy = brownVeryEasy.flat(Infinity);
  blueVeryEasy = blueVeryEasy.flat(Infinity);
  console.log("greenVeryEasy =", greenVeryEasy);
  console.log("brownVeryEasy =", brownVeryEasy);
  console.log("blueVeryEasy =", blueVeryEasy);

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageOne.push(brownVeryEasy[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, blueVeryEasy.length-1);
    if (stageOne.includes(blueVeryEasy[indexBlue])) {
      i--
    } else {
      stageOne.push(blueVeryEasy[indexBlue]);
    }
  }
  console.log("stageOneCthulthuVeryEasy = ", stageOne);
  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageTwo.includes(greenVeryEasy[indexGreen]) || stageOne.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown]) || stageTwo.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownVeryEasy[indexBrown]);
    }
  }
  console.log("stageTwoCthulthuVeryEasy = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageOne.includes(greenVeryEasy[indexGreen]) || stageTwo.includes(greenVeryEasy[indexGreen]) || stageThree.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
      stageThree.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown]) || stageTwo.includes(brownVeryEasy[indexBrown]) || stageThree.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageThree.push(brownVeryEasy[indexBrown]);
    }
  }
  console.log("stageThreeCthulthuVeryEasy = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsCthulthuVeryEasy = ", arrayCards);
}

function pushCardsCthulthuMid() {

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageOne.push(cardsDataBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, cardsDataBlue.length-1);
    // console.log("indexBlue =", indexBlue);
    if (stageOne.includes(cardsDataBlue[indexBlue])) {
      i--
    } else {
      stageOne.push(cardsDataBlue[indexBlue]);
    }
  }
  console.log("stageOneCthulthuMid = ", stageOne);
  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageTwo.includes(cardsDataGreen[indexGreen]) || stageOne.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
      stageTwo.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown]) || stageTwo.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageTwo.push(cardsDataBrown[indexBrown]);
    }
  }
  console.log("stageTwoCthulthuMid = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageOne.includes(cardsDataGreen[indexGreen]) || stageTwo.includes(cardsDataGreen[indexGreen]) || stageThree.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
      stageThree.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown]) || stageTwo.includes(cardsDataBrown[indexBrown]) || stageThree.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageThree.push(cardsDataBrown[indexBrown]);
    }
  }
  console.log("stageThreeCthulthuMid = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsCthulthuMid = ", arrayCards);
}

function pushCardsIogSothothVeryEasy() {
  greenVeryEasy.push(easyGreen);
  brownVeryEasy.push(easyBrown);
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    if (brownVeryEasy.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryEasy.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, easyBlue.length-1);
    if (blueVeryEasy.includes(easyBlue[indexBlue])) {
      i--
    } else {
    blueVeryEasy.push(easyBlue[indexBlue]);
    }
  }
  greenVeryEasy = greenVeryEasy.flat(Infinity);
  brownVeryEasy = brownVeryEasy.flat(Infinity);
  blueVeryEasy = blueVeryEasy.flat(Infinity);
  console.log("greenVeryEasy =", greenVeryEasy);
  console.log("brownVeryEasy =", brownVeryEasy);
  console.log("blueVeryEasy =", blueVeryEasy);

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageOne.push(brownVeryEasy[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryEasy.length-1);
    if (stageOne.includes(blueVeryEasy[indexBlue])) {
      i--
    } else {
      stageOne.push(blueVeryEasy[indexBlue]);
    }
  }
  console.log("stageOneIogSothothVeryEasy = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageTwo.includes(greenVeryEasy[indexGreen]) || stageOne.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown]) || stageTwo.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownVeryEasy[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryEasy.length-1);
    if (stageOne.includes(blueVeryEasy[indexBlue]) || stageTwo.includes(blueVeryEasy[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueVeryEasy[indexBlue]);
    }
  }
  console.log("stageTwoIogSothothVeryEasy = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageOne.includes(greenVeryEasy[indexGreen]) || stageTwo.includes(greenVeryEasy[indexGreen]) || stageThree.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
      stageThree.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown]) || stageTwo.includes(brownVeryEasy[indexBrown]) || stageThree.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageThree.push(brownVeryEasy[indexBrown]);
    }
  }
  console.log("stageThreeIogSothothVeryEasy = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsIogSothothVeryEasy = ", arrayCards);
}

function pushCardsIogSothothMid() {

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageOne.push(cardsDataBrown[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, cardsDataBlue.length-1);
    // console.log("indexBlue =", indexBlue);
    if (stageOne.includes(cardsDataBlue[indexBlue])) {
      i--
    } else {
      stageOne.push(cardsDataBlue[indexBlue]);
    }
  }
  console.log("stageOneIogSothothMid = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageTwo.includes(cardsDataGreen[indexGreen]) || stageOne.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
      stageTwo.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown]) || stageTwo.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageTwo.push(cardsDataBrown[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, cardsDataBlue.length-1);
    // console.log("indexBlue =", indexBlue);
    if (stageOne.includes(cardsDataBlue[indexBlue]) || stageTwo.includes(cardsDataBlue[indexBlue])) {
      i--
    } else {
      stageTwo.push(cardsDataBlue[indexBlue]);
    }
  }
  console.log("stageTwoIogSothothMid = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageOne.includes(cardsDataGreen[indexGreen]) || stageTwo.includes(cardsDataGreen[indexGreen]) || stageThree.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
      stageThree.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown]) || stageTwo.includes(cardsDataBrown[indexBrown]) || stageThree.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageThree.push(cardsDataBrown[indexBrown]);
    }
  }
  console.log("stageThreeIogSothothMid = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsIogSothothMid = ", arrayCards);
}

function pushCardsShubNiggurathVeryEasy() {
  greenVeryEasy.push(easyGreen);
  brownVeryEasy.push(easyBrown);
  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, normalGreen.length-1);
    if (greenVeryEasy.includes(normalGreen[indexGreen])) {
      i--
    } else {
    greenVeryEasy.push(normalGreen[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    if (brownVeryEasy.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryEasy.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, easyBlue.length-1);
    if (blueVeryEasy.includes(easyBlue[indexBlue])) {
      i--
    } else {
    blueVeryEasy.push(easyBlue[indexBlue]);
    }
  }
  greenVeryEasy = greenVeryEasy.flat(Infinity);
  brownVeryEasy = brownVeryEasy.flat(Infinity);
  blueVeryEasy = blueVeryEasy.flat(Infinity);
  console.log("greenVeryEasy =", greenVeryEasy);
  console.log("brownVeryEasy =", brownVeryEasy);
  console.log("blueVeryEasy =", blueVeryEasy);

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageOne.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
    stageOne.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageOne.push(brownVeryEasy[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryEasy.length-1);
    if (stageOne.includes(blueVeryEasy[indexBlue])) {
      i--
    } else {
      stageOne.push(blueVeryEasy[indexBlue]);
    }
  }
  console.log("stageOneShubNiggurathVeryEasy = ", stageOne);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageTwo.includes(greenVeryEasy[indexGreen]) || stageOne.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown]) || stageTwo.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownVeryEasy[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryEasy.length-1);
    if (stageOne.includes(blueVeryEasy[indexBlue]) || stageTwo.includes(blueVeryEasy[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueVeryEasy[indexBlue]);
    }
  }
  console.log("stageTwoShubNiggurathVeryEasy = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenVeryEasy.length-1);
    if (stageOne.includes(greenVeryEasy[indexGreen]) || stageTwo.includes(greenVeryEasy[indexGreen]) || stageThree.includes(greenVeryEasy[indexGreen])) {
      i--
    } else {
      stageThree.push(greenVeryEasy[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownVeryEasy.length-1);
    if (stageOne.includes(brownVeryEasy[indexBrown]) || stageTwo.includes(brownVeryEasy[indexBrown]) || stageThree.includes(brownVeryEasy[indexBrown])) {
      i--
    } else {
      stageThree.push(brownVeryEasy[indexBrown]);
    }
  }
  console.log("stageThreeShubNiggurathVeryEasy = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsShubNiggurathVeryEasy = ", arrayCards);
}

function pushCardsShubNiggurathMid() {

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageOne.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
    stageOne.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageOne.push(cardsDataBrown[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, cardsDataBlue.length-1);
    // console.log("indexBlue =", indexBlue);
    if (stageOne.includes(cardsDataBlue[indexBlue])) {
      i--
    } else {
      stageOne.push(cardsDataBlue[indexBlue]);
    }
  }
  console.log("stageOneShubNiggurathMid = ", stageOne);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageTwo.includes(cardsDataGreen[indexGreen]) || stageOne.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
      stageTwo.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown]) || stageTwo.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageTwo.push(cardsDataBrown[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, cardsDataBlue.length-1);
    // console.log("indexBlue =", indexBlue);
    if (stageOne.includes(cardsDataBlue[indexBlue]) || stageTwo.includes(cardsDataBlue[indexBlue])) {
      i--
    } else {
      stageTwo.push(cardsDataBlue[indexBlue]);
    }
  }
  console.log("stageTwoShubNiggurathMid = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, cardsDataGreen.length-1);
    // console.log("indexGreen =", indexGreen);
    if (stageOne.includes(cardsDataGreen[indexGreen]) || stageTwo.includes(cardsDataGreen[indexGreen]) || stageThree.includes(cardsDataGreen[indexGreen])) {
      i--
    } else {
      stageThree.push(cardsDataGreen[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, cardsDataBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    if (stageOne.includes(cardsDataBrown[indexBrown]) || stageTwo.includes(cardsDataBrown[indexBrown]) || stageThree.includes(cardsDataBrown[indexBrown])) {
      i--
    } else {
      stageThree.push(cardsDataBrown[indexBrown]);
    }
  }
  console.log("stageThreeShubNiggurathMid = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsShubNiggurathMid = ", arrayCards);
}

function pushDotsAzathoth() {
  stageOneDots.push(ancientsData[0].firstStage);
  greenSt1.textContent = `${ancientsData[0].firstStage.greenCards}`;
  brownSt1.textContent = `${ancientsData[0].firstStage.brownCards}`;
  blueSt1.textContent = `${ancientsData[0].firstStage.blueCards}`;
  // console.log("stageOneDotsAzathoth =", stageOneDots);
  stageTwoDots.push(ancientsData[0].secondStage);
  greenSt2.textContent = `${ancientsData[0].secondStage.greenCards}`;
  brownSt2.textContent = `${ancientsData[0].secondStage.brownCards}`;
  blueSt2.textContent = `${ancientsData[0].secondStage.blueCards}`;
  // console.log("stageTwoDotsAzathoth =", stageTwoDots);
  stageThreeDots.push(ancientsData[0].thirdStage);
  greenSt3.textContent = `${ancientsData[0].thirdStage.greenCards}`;
  brownSt3.textContent = `${ancientsData[0].thirdStage.brownCards}`;
  blueSt3.textContent = `${ancientsData[0].thirdStage.blueCards}`;
  // console.log("stageThreeDotsAzathoth =", stageThreeDots);
}
function pushDotCthulthu() {
  stageOneDots.push(ancientsData[1].firstStage);
  greenSt1.textContent = `${ancientsData[1].firstStage.greenCards}`;
  brownSt1.textContent = `${ancientsData[1].firstStage.brownCards}`;
  blueSt1.textContent = `${ancientsData[1].firstStage.blueCards}`;
  // console.log("stageOneDotsCthulthu =", stageOneDots);
  stageTwoDots.push(ancientsData[1].secondStage);
  greenSt2.textContent = `${ancientsData[1].secondStage.greenCards}`;
  brownSt2.textContent = `${ancientsData[1].secondStage.brownCards}`;
  blueSt2.textContent = `${ancientsData[1].secondStage.blueCards}`;
  // console.log("stageTwoDotsCthulthu =", stageTwoDots);
  stageThreeDots.push(ancientsData[1].thirdStage);
  greenSt3.textContent = `${ancientsData[1].thirdStage.greenCards}`;
  brownSt3.textContent = `${ancientsData[1].thirdStage.brownCards}`;
  blueSt3.textContent = `${ancientsData[1].thirdStage.blueCards}`;
  // console.log("stageThreeDotsCthulthu =", stageThreeDots);
}
function pushDotIogSothoth() {
  stageOneDots.push(ancientsData[2].firstStage);
  greenSt1.textContent = `${ancientsData[2].firstStage.greenCards}`;
  brownSt1.textContent = `${ancientsData[2].firstStage.brownCards}`;
  blueSt1.textContent = `${ancientsData[2].firstStage.blueCards}`;
  // console.log("stageOneDotsIogSothoth =", stageOneDots);
  stageTwoDots.push(ancientsData[2].secondStage);
  greenSt2.textContent = `${ancientsData[2].secondStage.greenCards}`;
  brownSt2.textContent = `${ancientsData[2].secondStage.brownCards}`;
  blueSt2.textContent = `${ancientsData[2].secondStage.blueCards}`;
  // console.log("stageTwoDotsIogSothoth =", stageTwoDots);
  stageThreeDots.push(ancientsData[2].thirdStage);
  greenSt3.textContent = `${ancientsData[2].thirdStage.greenCards}`;
  brownSt3.textContent = `${ancientsData[2].thirdStage.brownCards}`;
  blueSt3.textContent = `${ancientsData[2].thirdStage.blueCards}`;
  // console.log("stageThreeDotsIogSothoth =", stageThreeDots);
}
function pushDotShubNiggurath() {
  stageOneDots.push(ancientsData[3].firstStage);
  greenSt1.textContent = `${ancientsData[3].firstStage.greenCards}`;
  brownSt1.textContent = `${ancientsData[3].firstStage.brownCards}`;
  blueSt1.textContent = `${ancientsData[3].firstStage.blueCards}`;
  // console.log("stageOneDotsShubNiggurath =", stageOneDots);
  stageTwoDots.push(ancientsData[3].secondStage);
  greenSt2.textContent = `${ancientsData[3].secondStage.greenCards}`;
  brownSt2.textContent = `${ancientsData[3].secondStage.brownCards}`;
  blueSt2.textContent = `${ancientsData[3].secondStage.blueCards}`;
  // console.log("stageTwoDotsShubNiggurath =", stageTwoDots);
  stageThreeDots.push(ancientsData[3].thirdStage);
  greenSt3.textContent = `${ancientsData[3].thirdStage.greenCards}`;
  brownSt3.textContent = `${ancientsData[3].thirdStage.brownCards}`;
  blueSt3.textContent = `${ancientsData[3].thirdStage.blueCards}`;
  // console.log("stageThreeDotsShubNiggurath =", stageThreeDots);
}

function setCard() {
    for (let i = 0; i < 1; i++) {
      console.log("card =", arrayCards[i].id);
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
        if (greenSt1.textContent === '0' && brownSt1.textContent === '0' && blueSt1.textContent === '0') {
          document.querySelector('.title_1').classList.add('title_active');
        } 
        if (greenSt2.textContent === '0' && brownSt2.textContent === '0' && blueSt2.textContent === '0') {
          document.querySelector('.title_2').classList.add('title_active');
        } 
        if (greenSt3.textContent === '0' && brownSt3.textContent === '0' && blueSt3.textContent === '0') {
          document.querySelector('.title_3').classList.add('title_active');
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


