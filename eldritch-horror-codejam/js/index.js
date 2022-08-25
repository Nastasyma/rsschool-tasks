import cardsDataGreen from './cardsDataGreen.js';
import cardsDataBrown from './cardsDataBrown.js';
import cardsDataBlue from './cardsDataBlue.js';
import ancientsData from './ancientsData.js';

const body = document.querySelector('body');
const cardsBTN = document.querySelector('.cards_button');
const levelVeryEasy = document.querySelector('.level_1');
const levelEasy = document.querySelector('.level_2');
const levelMid = document.querySelector('.level_3');
const levelHard = document.querySelector('.level_4');
const levelVeryHard = document.querySelector('.level_5');
const deckWrapper = document.querySelector('.deck_wrapper');
const currentCard = document.querySelector('.current_card');
const cardsDeck = document.querySelector('.cards_deck');
const ancientsCards = document.querySelectorAll('.card');
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
const cardClose = document.querySelectorAll('.card_close');
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
    pushCardsAzathothEasy();
    pushDotsAzathoth();
  } else if (card2.classList.contains('card_active')) {
    pushCardsCthulthuEasy();
    pushDotCthulthu();
  } else if (card3.classList.contains('card_active')) {
    pushCardsIogSothothEasy();
    pushDotIogSothoth();
  } else if (card4.classList.contains('card_active')) {
    pushCardsShubNiggurathEasy();
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
levelHard.addEventListener('click', () => { 
  reset();
  sortDifficulty();
  if (card1.classList.contains('card_active')) {
    pushCardsAzathothHard();
    pushDotsAzathoth();
  } else if (card2.classList.contains('card_active')) {
    pushCardsCthulthuHard();
    pushDotCthulthu();
  } else if (card3.classList.contains('card_active')) {
    pushCardsIogSothothHard();
    pushDotIogSothoth();
  } else if (card4.classList.contains('card_active')) {
    pushCardsShubNiggurathHard();
    pushDotShubNiggurath();
  }
});
levelVeryHard.addEventListener('click', () => { 
  reset();
  sortDifficulty();
  if (card1.classList.contains('card_active')) {
    pushCardsAzathothVeryHard();
    pushDotsAzathoth();
  } else if (card2.classList.contains('card_active')) {
    pushCardsCthulthuVeryHard();
    pushDotCthulthu();
  } else if (card3.classList.contains('card_active')) {
    pushCardsIogSothothVeryHard();
    pushDotIogSothoth();
  } else if (card4.classList.contains('card_active')) {
    pushCardsShubNiggurathVeryHard();
    pushDotShubNiggurath();
  }
});
cardsBTN.addEventListener('click', () => { 
  cardsBTN.style.display = "none";
  deckWrapper.style.display = "flex";
});

ancientsCards.forEach(el => {
  el.addEventListener('click', (e) => {
    // console.clear();
    // console.log(e.target)
    card1.classList.remove('card_active');
    card2.classList.remove('card_active');
    card3.classList.remove('card_active');
    card4.classList.remove('card_active');   
    levelVeryEasy.classList.remove('level_active');
    levelEasy.classList.remove('level_active');
    levelMid.classList.remove('level_active');
    levelHard.classList.remove('level_active');
    levelVeryHard.classList.remove('level_active');
    document.querySelector('.select_ancient').style.display = "none";
    levelsWrapper.style.display = "flex";
    deckWrapper.style.display = "none";
    cardsBTN.style.display = "none";
    e.target.classList.add('card_active');
    if (card1.classList.contains('card_active')) {
      card2.style.display = "none";
      card3.style.display = "none";
      card4.style.display = "none";
      document.querySelector('.close1').style.display = "block";
      body.style.backgroundImage = 'url("assets/img/home_azathoth.jpg")';
    } else if (card2.classList.contains('card_active')) {
      card1.style.display = "none";
      card3.style.display = "none";
      card4.style.display = "none";
      document.querySelector('.close2').style.display = "block";
      body.style.backgroundImage = 'url("assets/img/home_cthulthu.png")';
    } else if (card3.classList.contains('card_active')) {
      card1.style.display = "none";
      card2.style.display = "none";
      card4.style.display = "none";
      document.querySelector('.close3').style.display = "block";
      body.style.backgroundImage = 'url("assets/img/home_iogsothoth.jpg")';
    } else if (card4.classList.contains('card_active')) {
      card1.style.display = "none";
      card3.style.display = "none";
      card2.style.display = "none";
      document.querySelector('.close4').style.display = "block";
      body.style.backgroundImage = 'url("assets/img/home_shubniggurath.jpg")';
    }
    if (e.target === document.querySelector('.close1') || 
        e.target === document.querySelector('.close2') || 
        e.target === document.querySelector('.close3') || 
        e.target === document.querySelector('.close4')) {
        
        e.target.classList.remove('card_active');
        document.querySelector('.select_ancient').style.display = "flex";
        body.style.backgroundImage = 'url("assets/img/home_eldritch_horror.jpg")';
        levelsWrapper.style.display = "none";
    }
  })
});
cardClose.forEach(el => {
  el.addEventListener('click', () => {
    card1.classList.remove('card_active');
    card2.classList.remove('card_active');
    card3.classList.remove('card_active');
    card4.classList.remove('card_active'); 
    card1.style.display = "block";
    card2.style.display = "block";
    card3.style.display = "block";
    card4.style.display = "block";
    document.querySelector('.close1').style.display = "none";
    document.querySelector('.close2').style.display = "none";
    document.querySelector('.close3').style.display = "none";
    document.querySelector('.close4').style.display = "none";
  });
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
    levelHard.classList.remove('level_active');
    levelVeryHard.classList.remove('level_active');
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
let greenVeryHard = [];
let brownVeryHard = [];
let blueVeryHard = [];
let greenHardSt = [];
let brownHardSt = [];
let blueHardSt = [];
let greenEasySt = [];
let brownEasySt = [];
let blueEasySt = [];
let arrayGreen = [];
let arrayBrown = [];
let arrayBlue = [];

let indexGreen;
let indexBrown;
let indexBlue;

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
  greenVeryHard.length = 0;
  brownVeryHard.length = 0;
  blueVeryHard.length = 0;
  greenHardSt.length = 0;
  brownHardSt.length = 0;
  blueHardSt.length = 0;
  greenEasySt.length = 0;
  brownEasySt.length = 0;
  blueEasySt.length = 0;
  arrayGreen.length = 0;
  arrayBrown.length = 0;
  arrayBlue.length = 0;
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
function pushCardsAzathothVeryEasy() {
  greenVeryEasy.push(easyGreen);
  brownVeryEasy.push(easyBrown);
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    // console.log("indexBrown =", indexBrown);
    // console.log("cardBrown =", normalBrown[indexBrown].id);
    if (brownVeryEasy.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryEasy.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, easyBlue.length-1);
    // console.log("indexBlue =", indexBlue);
    // console.log("cardBlue =", normalBlue[indexBlue].id);
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
function pushCardsAzathothEasy() {
  arrayGreen.push(easyGreen);
  arrayGreen.push(normalGreen);
  arrayBrown.push(easyBrown);
  arrayBrown.push(normalBrown);
  arrayBlue.push(easyBlue);
  arrayBlue.push(normalBlue);
  arrayGreen = arrayGreen.flat(Infinity);
  arrayBrown = arrayBrown.flat(Infinity);
  arrayBlue = arrayBlue.flat(Infinity);
  // console.log("arrayGreen =", arrayGreen);
  // console.log("arrayBrown =", arrayBrown);
  // console.log("arrayBlue =", arrayBlue);

  for (let i=0; i<5; i++) {
    indexGreen = getRandomNum(0, arrayGreen.length-1);
    if (greenEasySt.includes(arrayGreen[indexGreen])) {
      i--
    } else {
      greenEasySt.push(arrayGreen[indexGreen]);
    }
  }
  for (let i=0; i<9; i++) {
    indexBrown = getRandomNum(0, arrayBrown.length-1);
    if (brownEasySt.includes(arrayBrown[indexBrown])) {
      i--
    } else {
    brownEasySt.push(arrayBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, arrayBlue.length-1);
    if (blueEasySt.includes(arrayBlue[indexBlue])) {
      i--
    } else {
    blueEasySt.push(arrayBlue[indexBlue]);
    }
  }
  greenEasySt = greenEasySt.flat(Infinity);
  brownEasySt = brownEasySt.flat(Infinity);
  blueEasySt = blueEasySt.flat(Infinity);
  console.log("greenEasySt =", greenEasySt);
  console.log("brownEasySt =", brownEasySt);
  console.log("blueEasySt =", blueEasySt);

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageOne.includes(greenEasySt[indexGreen])) {
      i--
    } else {
    stageOne.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageOne.push(brownEasySt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueEasySt.length-1);
    if (stageOne.includes(blueEasySt[indexBlue])) {
      i--
    } else {
      stageOne.push(blueEasySt[indexBlue]);
    }
  }
  console.log("stageOneAzathothEasy = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageTwo.includes(greenEasySt[indexGreen]) || stageOne.includes(greenEasySt[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown]) || stageTwo.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownEasySt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueEasySt.length-1);
    if (stageOne.includes(blueEasySt[indexBlue]) || stageTwo.includes(blueEasySt[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueEasySt[indexBlue]);
    }
  }
  console.log("stageTwoAzathothEasy = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageOne.includes(greenEasySt[indexGreen]) || stageTwo.includes(greenEasySt[indexGreen]) || stageThree.includes(greenEasySt[indexGreen])) {
      i--
    } else {
      stageThree.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown]) || stageTwo.includes(brownEasySt[indexBrown]) || stageThree.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageThree.push(brownEasySt[indexBrown]);
    }
  }
  console.log("stageThreeAzathothEasy = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsAzathothEasy = ", arrayCards);
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
function pushCardsAzathothHard() {
  arrayGreen.push(hardGreen);
  arrayGreen.push(normalGreen);
  arrayBrown.push(hardBrown);
  arrayBrown.push(normalBrown);
  arrayBlue.push(hardBlue);
  arrayBlue.push(normalBlue);
  arrayGreen = arrayGreen.flat(Infinity);
  arrayBrown = arrayBrown.flat(Infinity);
  arrayBlue = arrayBlue.flat(Infinity);

  for (let i=0; i<5; i++) {
    indexGreen = getRandomNum(0, arrayGreen.length-1);
    if (greenHardSt.includes(arrayGreen[indexGreen])) {
      i--
    } else {
      greenHardSt.push(arrayGreen[indexGreen]);
    }
  }
  for (let i=0; i<9; i++) {
    indexBrown = getRandomNum(0, arrayBrown.length-1);
    if (brownHardSt.includes(arrayBrown[indexBrown])) {
      i--
    } else {
    brownHardSt.push(arrayBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, arrayBlue.length-1);
    if (blueHardSt.includes(arrayBlue[indexBlue])) {
      i--
    } else {
    blueHardSt.push(arrayBlue[indexBlue]);
    }
  }
  greenHardSt = greenHardSt.flat(Infinity);
  brownHardSt = brownHardSt.flat(Infinity);
  blueHardSt = blueHardSt.flat(Infinity);
  console.log("greenHardSt =", greenHardSt);
  console.log("brownHardSt =", brownHardSt);
  console.log("blueHardSt =", blueHardSt);

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageOne.includes(greenHardSt[indexGreen])) {
      i--
    } else {
    stageOne.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageOne.push(brownHardSt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueHardSt.length-1);
    if (stageOne.includes(blueHardSt[indexBlue])) {
      i--
    } else {
      stageOne.push(blueHardSt[indexBlue]);
    }
  }
  console.log("stageOneAzathothHard = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageTwo.includes(greenHardSt[indexGreen]) || stageOne.includes(greenHardSt[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown]) || stageTwo.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownHardSt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueHardSt.length-1);
    if (stageOne.includes(blueHardSt[indexBlue]) || stageTwo.includes(blueHardSt[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueHardSt[indexBlue]);
    }
  }
  console.log("stageTwoAzathothHard = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageOne.includes(greenHardSt[indexGreen]) || stageTwo.includes(greenHardSt[indexGreen]) || stageThree.includes(greenHardSt[indexGreen])) {
      i--
    } else {
      stageThree.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown]) || stageTwo.includes(brownHardSt[indexBrown]) || stageThree.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageThree.push(brownHardSt[indexBrown]);
    }
  }
  console.log("stageThreeAzathothHard = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsAzathothHard = ", arrayCards);
}
function pushCardsAzathothVeryHard() {
  greenVeryHard.push(hardGreen);
  brownVeryHard.push(hardBrown);
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    if (brownVeryHard.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryHard.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, hardBlue.length-1);
    if (blueVeryHard.includes(hardBlue[indexBlue])) {
      i--
    } else {
    blueVeryHard.push(hardBlue[indexBlue]);
    }
  }
  greenVeryHard = greenVeryHard.flat(Infinity);
  brownVeryHard = brownVeryHard.flat(Infinity);
  blueVeryHard = blueVeryHard.flat(Infinity);
  console.log("greenVeryHard =", greenVeryHard);
  console.log("brownVeryHard =", brownVeryHard);
  console.log("blueVeryHard =", blueVeryHard);

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageOne.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
    stageOne.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageOne.push(brownVeryHard[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryHard.length-1);
    if (stageOne.includes(blueVeryHard[indexBlue])) {
      i--
    } else {
      stageOne.push(blueVeryHard[indexBlue]);
    }
  }
  console.log("stageOneAzathothVeryHard = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageTwo.includes(greenVeryHard[indexGreen]) || stageOne.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown]) || stageTwo.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownVeryHard[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryHard.length-1);
    if (stageOne.includes(blueVeryHard[indexBlue]) || stageTwo.includes(blueVeryHard[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueVeryHard[indexBlue]);
    }
  }
  console.log("stageTwoAzathothVeryHard = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageOne.includes(greenVeryHard[indexGreen]) || stageTwo.includes(greenVeryHard[indexGreen]) || stageThree.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
      stageThree.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown]) || stageTwo.includes(brownVeryHard[indexBrown]) || stageThree.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageThree.push(brownVeryHard[indexBrown]);
    }
  }
  console.log("stageThreeAzathothVeryHard = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsAzathothVeryHard = ", arrayCards);
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
function pushCardsCthulthuEasy() {
  arrayGreen.push(easyGreen);
  arrayGreen.push(normalGreen);
  arrayBrown.push(easyBrown);
  arrayBrown.push(normalBrown);
  arrayBlue.push(easyBlue);
  arrayBlue.push(normalBlue);
  arrayGreen = arrayGreen.flat(Infinity);
  arrayBrown = arrayBrown.flat(Infinity);
  arrayBlue = arrayBlue.flat(Infinity);

  for (let i=0; i<4; i++) {
    indexGreen = getRandomNum(0, arrayGreen.length-1);
    if (greenEasySt.includes(arrayGreen[indexGreen])) {
      i--
    } else {
      greenEasySt.push(arrayGreen[indexGreen]);
    }
  }
  for (let i=0; i<9; i++) {
    indexBrown = getRandomNum(0, arrayBrown.length-1);
    if (brownEasySt.includes(arrayBrown[indexBrown])) {
      i--
    } else {
    brownEasySt.push(arrayBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, arrayBlue.length-1);
    if (blueEasySt.includes(arrayBlue[indexBlue])) {
      i--
    } else {
    blueEasySt.push(arrayBlue[indexBlue]);
    }
  }
  greenEasySt = greenEasySt.flat(Infinity);
  brownEasySt = brownEasySt.flat(Infinity);
  blueEasySt = blueEasySt.flat(Infinity);
  console.log("greenEasySt =", greenEasySt);
  console.log("brownEasySt =", brownEasySt);
  console.log("blueEasySt =", blueEasySt);

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageOne.push(brownEasySt[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, blueEasySt.length-1);
    if (stageOne.includes(blueEasySt[indexBlue])) {
      i--
    } else {
      stageOne.push(blueEasySt[indexBlue]);
    }
  }
  console.log("stageOneCthulthuEasy = ", stageOne);
  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageTwo.includes(greenEasySt[indexGreen]) || stageOne.includes(greenEasySt[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown]) || stageTwo.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownEasySt[indexBrown]);
    }
  }
  console.log("stageTwoCthulthuEasy = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageOne.includes(greenEasySt[indexGreen]) || stageTwo.includes(greenEasySt[indexGreen]) || stageThree.includes(greenEasySt[indexGreen])) {
      i--
    } else {
      stageThree.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown]) || stageTwo.includes(brownEasySt[indexBrown]) || stageThree.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageThree.push(brownEasySt[indexBrown]);
    }
  }
  console.log("stageThreeCthulthuEasy = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsCthulthuEasy = ", arrayCards);
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
function pushCardsCthulthuHard() {
  arrayGreen.push(hardGreen);
  arrayGreen.push(normalGreen);
  arrayBrown.push(hardBrown);
  arrayBrown.push(normalBrown);
  arrayBlue.push(hardBlue);
  arrayBlue.push(normalBlue);
  arrayGreen = arrayGreen.flat(Infinity);
  arrayBrown = arrayBrown.flat(Infinity);
  arrayBlue = arrayBlue.flat(Infinity);

  for (let i=0; i<4; i++) {
    indexGreen = getRandomNum(0, arrayGreen.length-1);
    if (greenHardSt.includes(arrayGreen[indexGreen])) {
      i--
    } else {
      greenHardSt.push(arrayGreen[indexGreen]);
    }
  }
  for (let i=0; i<9; i++) {
    indexBrown = getRandomNum(0, arrayBrown.length-1);
    if (brownHardSt.includes(arrayBrown[indexBrown])) {
      i--
    } else {
    brownHardSt.push(arrayBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, arrayBlue.length-1);
    if (blueHardSt.includes(arrayBlue[indexBlue])) {
      i--
    } else {
    blueHardSt.push(arrayBlue[indexBlue]);
    }
  }
  greenHardSt = greenHardSt.flat(Infinity);
  brownHardSt = brownHardSt.flat(Infinity);
  blueHardSt = blueHardSt.flat(Infinity);
  console.log("greenHardSt =", greenHardSt);
  console.log("brownHardSt =", brownHardSt);
  console.log("blueHardSt =", blueHardSt);

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageOne.push(brownHardSt[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, blueHardSt.length-1);
    if (stageOne.includes(blueHardSt[indexBlue])) {
      i--
    } else {
      stageOne.push(blueHardSt[indexBlue]);
    }
  }
  console.log("stageOneCthulthuHard = ", stageOne);
  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageTwo.includes(greenHardSt[indexGreen]) || stageOne.includes(greenHardSt[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown]) || stageTwo.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownHardSt[indexBrown]);
    }
  }
  console.log("stageTwoCthulthuHard = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageOne.includes(greenHardSt[indexGreen]) || stageTwo.includes(greenHardSt[indexGreen]) || stageThree.includes(greenHardSt[indexGreen])) {
      i--
    } else {
      stageThree.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown]) || stageTwo.includes(brownHardSt[indexBrown]) || stageThree.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageThree.push(brownHardSt[indexBrown]);
    }
  }
  console.log("stageThreeCthulthuHard = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsCthulthuHard = ", arrayCards);
}
function pushCardsCthulthuVeryHard() {

  for (let i=0; i<4; i++) {
    indexGreen = getRandomNum(0, hardGreen.length-1);
    if (greenVeryHard.includes(hardGreen[indexGreen])) {
      i--
    } else {
      greenVeryHard.push(hardGreen[indexGreen]);
    }
  }
  brownVeryHard.push(hardBrown);
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    if (brownVeryHard.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryHard.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, hardBlue.length-1);
    if (blueVeryHard.includes(hardBlue[indexBlue])) {
      i--
    } else {
    blueVeryHard.push(hardBlue[indexBlue]);
    }
  }
  greenVeryHard = greenVeryHard.flat(Infinity);
  brownVeryHard = brownVeryHard.flat(Infinity);
  blueVeryHard = blueVeryHard.flat(Infinity);
  console.log("greenVeryHard =", greenVeryHard);
  console.log("brownVeryHard =", brownVeryHard);
  console.log("blueVeryHard =", blueVeryHard);

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageOne.push(brownVeryHard[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, blueVeryHard.length-1);
    if (stageOne.includes(blueVeryHard[indexBlue])) {
      i--
    } else {
      stageOne.push(blueVeryHard[indexBlue]);
    }
  }
  console.log("stageOneCthulthuVeryHard = ", stageOne);
  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageTwo.includes(greenVeryHard[indexGreen]) || stageOne.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown]) || stageTwo.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownVeryHard[indexBrown]);
    }
  }
  console.log("stageTwoCthulthuVeryHard = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageOne.includes(greenVeryHard[indexGreen]) || stageTwo.includes(greenVeryHard[indexGreen]) || stageThree.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
      stageThree.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown]) || stageTwo.includes(brownVeryHard[indexBrown]) || stageThree.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageThree.push(brownVeryHard[indexBrown]);
    }
  }
  console.log("stageThreeCthulthuVeryHard = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsCthulthuVeryHard = ", arrayCards);
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
function pushCardsIogSothothEasy() {
  arrayGreen.push(easyGreen);
  arrayGreen.push(normalGreen);
  arrayBrown.push(easyBrown);
  arrayBrown.push(normalBrown);
  arrayBlue.push(easyBlue);
  arrayBlue.push(normalBlue);
  arrayGreen = arrayGreen.flat(Infinity);
  arrayBrown = arrayBrown.flat(Infinity);
  arrayBlue = arrayBlue.flat(Infinity);

  for (let i=0; i<5; i++) {
    indexGreen = getRandomNum(0, arrayGreen.length-1);
    if (greenEasySt.includes(arrayGreen[indexGreen])) {
      i--
    } else {
      greenEasySt.push(arrayGreen[indexGreen]);
    }
  }
  for (let i=0; i<9; i++) {
    indexBrown = getRandomNum(0, arrayBrown.length-1);
    if (brownEasySt.includes(arrayBrown[indexBrown])) {
      i--
    } else {
    brownEasySt.push(arrayBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, arrayBlue.length-1);
    if (blueEasySt.includes(arrayBlue[indexBlue])) {
      i--
    } else {
    blueEasySt.push(arrayBlue[indexBlue]);
    }
  }
  greenEasySt = greenEasySt.flat(Infinity);
  brownEasySt = brownEasySt.flat(Infinity);
  blueEasySt = blueEasySt.flat(Infinity);
  console.log("greenEasySt =", greenEasySt);
  console.log("brownEasySt =", brownEasySt);
  console.log("blueEasySt =", blueEasySt);

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageOne.push(brownEasySt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueEasySt.length-1);
    if (stageOne.includes(blueEasySt[indexBlue])) {
      i--
    } else {
      stageOne.push(blueEasySt[indexBlue]);
    }
  }
  console.log("stageOneIogSothothEasy = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageTwo.includes(greenEasySt[indexGreen]) || stageOne.includes(greenEasySt[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown]) || stageTwo.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownEasySt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueEasySt.length-1);
    if (stageOne.includes(blueEasySt[indexBlue]) || stageTwo.includes(blueEasySt[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueEasySt[indexBlue]);
    }
  }
  console.log("stageTwoIogSothothEasy = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageOne.includes(greenEasySt[indexGreen]) || stageTwo.includes(greenEasySt[indexGreen]) || stageThree.includes(greenEasySt[indexGreen])) {
      i--
    } else {
      stageThree.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown]) || stageTwo.includes(brownEasySt[indexBrown]) || stageThree.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageThree.push(brownEasySt[indexBrown]);
    }
  }
  console.log("stageThreeIogSothothEasy = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsIogSothothEasy = ", arrayCards);
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
function pushCardsIogSothothHard() {
  arrayGreen.push(hardGreen);
  arrayGreen.push(normalGreen);
  arrayBrown.push(hardBrown);
  arrayBrown.push(normalBrown);
  arrayBlue.push(hardBlue);
  arrayBlue.push(normalBlue);
  arrayGreen = arrayGreen.flat(Infinity);
  arrayBrown = arrayBrown.flat(Infinity);
  arrayBlue = arrayBlue.flat(Infinity);

  for (let i=0; i<5; i++) {
    indexGreen = getRandomNum(0, arrayGreen.length-1);
    if (greenHardSt.includes(arrayGreen[indexGreen])) {
      i--
    } else {
      greenHardSt.push(arrayGreen[indexGreen]);
    }
  }
  for (let i=0; i<9; i++) {
    indexBrown = getRandomNum(0, arrayBrown.length-1);
    if (brownHardSt.includes(arrayBrown[indexBrown])) {
      i--
    } else {
    brownHardSt.push(arrayBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, arrayBlue.length-1);
    if (blueHardSt.includes(arrayBlue[indexBlue])) {
      i--
    } else {
    blueHardSt.push(arrayBlue[indexBlue]);
    }
  }
  greenHardSt = greenHardSt.flat(Infinity);
  brownHardSt = brownHardSt.flat(Infinity);
  blueHardSt = blueHardSt.flat(Infinity);
  console.log("greenHardSt =", greenHardSt);
  console.log("brownHardSt =", brownHardSt);
  console.log("blueHardSt =", blueHardSt);

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageOne.push(brownHardSt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueHardSt.length-1);
    if (stageOne.includes(blueHardSt[indexBlue])) {
      i--
    } else {
      stageOne.push(blueHardSt[indexBlue]);
    }
  }
  console.log("stageOneIogSothothHard = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageTwo.includes(greenHardSt[indexGreen]) || stageOne.includes(greenHardSt[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown]) || stageTwo.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownHardSt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueHardSt.length-1);
    if (stageOne.includes(blueHardSt[indexBlue]) || stageTwo.includes(blueHardSt[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueHardSt[indexBlue]);
    }
  }
  console.log("stageTwoIogSothothHard = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageOne.includes(greenHardSt[indexGreen]) || stageTwo.includes(greenHardSt[indexGreen]) || stageThree.includes(greenHardSt[indexGreen])) {
      i--
    } else {
      stageThree.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown]) || stageTwo.includes(brownHardSt[indexBrown]) || stageThree.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageThree.push(brownHardSt[indexBrown]);
    }
  }
  console.log("stageThreeIogSothothHard = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsIogSothothHard = ", arrayCards);
}
function pushCardsIogSothothVeryHard() {
  greenVeryHard.push(hardGreen);
  brownVeryHard.push(hardBrown);
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    if (brownVeryHard.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryHard.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, hardBlue.length-1);
    if (blueVeryHard.includes(hardBlue[indexBlue])) {
      i--
    } else {
    blueVeryHard.push(hardBlue[indexBlue]);
    }
  }
  greenVeryHard = greenVeryHard.flat(Infinity);
  brownVeryHard = brownVeryHard.flat(Infinity);
  blueVeryHard = blueVeryHard.flat(Infinity);
  console.log("greenVeryHard =", greenVeryHard);
  console.log("brownVeryHard =", brownVeryHard);
  console.log("blueVeryHard =", blueVeryHard);

  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageOne.push(brownVeryHard[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryHard.length-1);
    if (stageOne.includes(blueVeryHard[indexBlue])) {
      i--
    } else {
      stageOne.push(blueVeryHard[indexBlue]);
    }
  }
  console.log("stageOneIogSothothVeryHard = ", stageOne);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageTwo.includes(greenVeryHard[indexGreen]) || stageOne.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown]) || stageTwo.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownVeryHard[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryHard.length-1);
    if (stageOne.includes(blueVeryHard[indexBlue]) || stageTwo.includes(blueVeryHard[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueVeryHard[indexBlue]);
    }
  }
  console.log("stageTwoIogSothothVeryHard = ", stageTwo);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageOne.includes(greenVeryHard[indexGreen]) || stageTwo.includes(greenVeryHard[indexGreen]) || stageThree.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
      stageThree.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown]) || stageTwo.includes(brownVeryHard[indexBrown]) || stageThree.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageThree.push(brownVeryHard[indexBrown]);
    }
  }
  console.log("stageThreeIogSothothVeryHard = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsIogSothothVeryHard = ", arrayCards);
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
function pushCardsShubNiggurathEasy() {
  arrayGreen.push(easyGreen);
  arrayGreen.push(normalGreen);
  arrayBrown.push(easyBrown);
  arrayBrown.push(normalBrown);
  arrayBlue.push(easyBlue);
  arrayBlue.push(normalBlue);
  arrayGreen = arrayGreen.flat(Infinity);
  arrayBrown = arrayBrown.flat(Infinity);
  arrayBlue = arrayBlue.flat(Infinity);

  for (let i=0; i<6; i++) {
    indexGreen = getRandomNum(0, arrayGreen.length-1);
    if (greenEasySt.includes(arrayGreen[indexGreen])) {
      i--
    } else {
      greenEasySt.push(arrayGreen[indexGreen]);
    }
  }
  for (let i=0; i<8; i++) {
    indexBrown = getRandomNum(0, arrayBrown.length-1);
    if (brownEasySt.includes(arrayBrown[indexBrown])) {
      i--
    } else {
    brownEasySt.push(arrayBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, arrayBlue.length-1);
    if (blueEasySt.includes(arrayBlue[indexBlue])) {
      i--
    } else {
    blueEasySt.push(arrayBlue[indexBlue]);
    }
  }
  greenEasySt = greenEasySt.flat(Infinity);
  brownEasySt = brownEasySt.flat(Infinity);
  blueEasySt = blueEasySt.flat(Infinity);
  console.log("greenEasySt =", greenEasySt);
  console.log("brownEasySt =", brownEasySt);
  console.log("blueEasySt =", blueEasySt);

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageOne.includes(greenEasySt[indexGreen])) {
      i--
    } else {
    stageOne.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageOne.push(brownEasySt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueEasySt.length-1);
    if (stageOne.includes(blueEasySt[indexBlue])) {
      i--
    } else {
      stageOne.push(blueEasySt[indexBlue]);
    }
  }
  console.log("stageOneShubNiggurathEasy = ", stageOne);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageTwo.includes(greenEasySt[indexGreen]) || stageOne.includes(greenEasySt[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown]) || stageTwo.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownEasySt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueEasySt.length-1);
    if (stageOne.includes(blueEasySt[indexBlue]) || stageTwo.includes(blueEasySt[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueEasySt[indexBlue]);
    }
  }
  console.log("stageTwoShubNiggurathEasy = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenEasySt.length-1);
    if (stageOne.includes(greenEasySt[indexGreen]) || stageTwo.includes(greenEasySt[indexGreen]) || stageThree.includes(greenEasySt[indexGreen])) {
      i--
    } else {
      stageThree.push(greenEasySt[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownEasySt.length-1);
    if (stageOne.includes(brownEasySt[indexBrown]) || stageTwo.includes(brownEasySt[indexBrown]) || stageThree.includes(brownEasySt[indexBrown])) {
      i--
    } else {
      stageThree.push(brownEasySt[indexBrown]);
    }
  }
  console.log("stageThreeShubNiggurathEasy = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsShubNiggurathEasy = ", arrayCards);
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
function pushCardsShubNiggurathHard() {
  arrayGreen.push(hardGreen);
  arrayGreen.push(normalGreen);
  arrayBrown.push(hardBrown);
  arrayBrown.push(normalBrown);
  arrayBlue.push(hardBlue);
  arrayBlue.push(normalBlue);
  arrayGreen = arrayGreen.flat(Infinity);
  arrayBrown = arrayBrown.flat(Infinity);
  arrayBlue = arrayBlue.flat(Infinity);

  for (let i=0; i<6; i++) {
    indexGreen = getRandomNum(0, arrayGreen.length-1);
    if (greenHardSt.includes(arrayGreen[indexGreen])) {
      i--
    } else {
      greenHardSt.push(arrayGreen[indexGreen]);
    }
  }
  for (let i=0; i<8; i++) {
    indexBrown = getRandomNum(0, arrayBrown.length-1);
    if (brownHardSt.includes(arrayBrown[indexBrown])) {
      i--
    } else {
    brownHardSt.push(arrayBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, arrayBlue.length-1);
    if (blueHardSt.includes(arrayBlue[indexBlue])) {
      i--
    } else {
    blueHardSt.push(arrayBlue[indexBlue]);
    }
  }
  greenHardSt = greenHardSt.flat(Infinity);
  brownHardSt = brownHardSt.flat(Infinity);
  blueHardSt = blueHardSt.flat(Infinity);
  console.log("greenHardSt =", greenHardSt);
  console.log("brownHardSt =", brownHardSt);
  console.log("blueHardSt =", blueHardSt);

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageOne.includes(greenHardSt[indexGreen])) {
      i--
    } else {
    stageOne.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageOne.push(brownHardSt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueHardSt.length-1);
    if (stageOne.includes(blueHardSt[indexBlue])) {
      i--
    } else {
      stageOne.push(blueHardSt[indexBlue]);
    }
  }
  console.log("stageOneShubNiggurathHard = ", stageOne);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageTwo.includes(greenHardSt[indexGreen]) || stageOne.includes(greenHardSt[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown]) || stageTwo.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownHardSt[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueHardSt.length-1);
    if (stageOne.includes(blueHardSt[indexBlue]) || stageTwo.includes(blueHardSt[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueHardSt[indexBlue]);
    }
  }
  console.log("stageTwoShubNiggurathHard = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenHardSt.length-1);
    if (stageOne.includes(greenHardSt[indexGreen]) || stageTwo.includes(greenHardSt[indexGreen]) || stageThree.includes(greenHardSt[indexGreen])) {
      i--
    } else {
      stageThree.push(greenHardSt[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownHardSt.length-1);
    if (stageOne.includes(brownHardSt[indexBrown]) || stageTwo.includes(brownHardSt[indexBrown]) || stageThree.includes(brownHardSt[indexBrown])) {
      i--
    } else {
      stageThree.push(brownHardSt[indexBrown]);
    }
  }
  console.log("stageThreeShubNiggurathHard = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsShubNiggurathHard = ", arrayCards);
}
function pushCardsShubNiggurathVeryHard() {
  greenVeryHard.push(hardGreen);
  brownVeryHard.push(hardBrown);
  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, normalGreen.length-1);
    if (greenVeryHard.includes(normalGreen[indexGreen])) {
      i--
    } else {
    greenVeryHard.push(normalGreen[indexGreen]);
    }
  }
  for (let i=0; i<3; i++) {
    indexBrown = getRandomNum(0, normalBrown.length-1);
    if (brownVeryHard.includes(normalBrown[indexBrown])) {
      i--
    } else {
    brownVeryHard.push(normalBrown[indexBrown]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBlue = getRandomNum(0, hardBlue.length-1);
    if (blueVeryHard.includes(hardBlue[indexBlue])) {
      i--
    } else {
    blueVeryHard.push(hardBlue[indexBlue]);
    }
  }
  greenVeryHard = greenVeryHard.flat(Infinity);
  brownVeryHard = brownVeryHard.flat(Infinity);
  blueVeryHard = blueVeryHard.flat(Infinity);
  console.log("greenVeryHard =", greenVeryHard);
  console.log("brownVeryHard =", brownVeryHard);
  console.log("blueVeryHard =", blueVeryHard);

  for (let i=0; i<1; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageOne.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
    stageOne.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageOne.push(brownVeryHard[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryHard.length-1);
    if (stageOne.includes(blueVeryHard[indexBlue])) {
      i--
    } else {
      stageOne.push(blueVeryHard[indexBlue]);
    }
  }
  console.log("stageOneShubNiggurathVeryHard = ", stageOne);
  for (let i=0; i<3; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageTwo.includes(greenVeryHard[indexGreen]) || stageOne.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
      stageTwo.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<2; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown]) || stageTwo.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageTwo.push(brownVeryHard[indexBrown]);
    }
  }
  for (let i=0; i<1; i++) {
    indexBlue = getRandomNum(0, blueVeryHard.length-1);
    if (stageOne.includes(blueVeryHard[indexBlue]) || stageTwo.includes(blueVeryHard[indexBlue])) {
      i--
    } else {
      stageTwo.push(blueVeryHard[indexBlue]);
    }
  }
  console.log("stageTwoShubNiggurathVeryHard = ", stageTwo);
  for (let i=0; i<2; i++) {
    indexGreen = getRandomNum(0, greenVeryHard.length-1);
    if (stageOne.includes(greenVeryHard[indexGreen]) || stageTwo.includes(greenVeryHard[indexGreen]) || stageThree.includes(greenVeryHard[indexGreen])) {
      i--
    } else {
      stageThree.push(greenVeryHard[indexGreen]);
    }
  }
  for (let i=0; i<4; i++) {
    indexBrown = getRandomNum(0, brownVeryHard.length-1);
    if (stageOne.includes(brownVeryHard[indexBrown]) || stageTwo.includes(brownVeryHard[indexBrown]) || stageThree.includes(brownVeryHard[indexBrown])) {
      i--
    } else {
      stageThree.push(brownVeryHard[indexBrown]);
    }
  }
  console.log("stageThreeShubNiggurathVeryHard = ", stageThree);

  sort(stageOne);
  sort(stageTwo);
  sort(stageThree);

  arrayCards.push(stageOne);
  arrayCards.push(stageTwo);
  arrayCards.push(stageThree);
  arrayCards = arrayCards.flat(Infinity);
  console.log("arrayCardsShubNiggurathVeryHard = ", arrayCards);
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
      console.log("card =", arrayCards[i].id, "-" ,arrayCards[i].difficulty);
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
cardsDeck.addEventListener('click', () => { 
  if (arrayCards.length !== 0) {
  setCard();
  }
})


