const body = document.querySelector('body');

function createSounds () {
  const audio = document.createElement('audio');
  audio.classList.add('audio');
  audio.src = "assets/click.mp3";
  body.append(audio);
}
createSounds ();

/*function sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};*/

function createHeader() {
  const header = document.createElement('header');
  const header_container = document.createElement('div');
  header_container.classList.add('header_container');
  const btn1 = document.createElement('button');
  btn1.classList.add('shuffle_btn');
  btn1.textContent = 'New game';
  const btn2 = document.createElement('button');
  btn2.classList.add('save_btn');
  btn2.textContent = 'Save';
  const btn3 = document.createElement('button');
  btn3.classList.add('load_btn');
  btn3.textContent = 'Load';
  const btn4 = document.createElement('button');
  btn4.classList.add('results_btn');
  btn4.textContent = 'Top results';
  header_container.appendChild(btn1);
  header_container.appendChild(btn2);
  header_container.appendChild(btn3);
  header_container.appendChild(btn4);
  header.appendChild(header_container);
  body.append(header);
}
createHeader();

function createMain() {
  const main = document.createElement('main');
  const main_container = document.createElement('div');
  main_container.classList.add('main_container');
  const victory_popup = document.createElement('div');
  victory_popup.classList.add('victory_popup');
  main_container.appendChild(victory_popup);
  const saved_popup = document.createElement('div');
  saved_popup.classList.add('saved_popup');
  saved_popup.textContent = 'Your game saved!';
  main_container.appendChild(saved_popup);
  const loaded_popup = document.createElement('div');
  loaded_popup.classList.add('loaded_popup');
  loaded_popup.textContent = 'Your game loaded!'
  main_container.appendChild(loaded_popup);
  const results_popup3 = document.createElement('div');
  results_popup3.classList.add('results_popup');
  results_popup3.classList.add('results_popup3');
  const span7 = document.createElement('span');
  span7.classList.add('results_title');
  span7.textContent = "2x2 TOP RESULTS";
  const results_list3 = document.createElement('ol');
  results_list3.classList.add('results_list');
  results_list3.classList.add('results_list3');
  const results_list3_item1 = document.createElement('div');
  results_list3_item1.classList.add('results_list_item1');
  results_list3_item1.textContent = "Win your first game!";
  results_popup3.appendChild(span7);
  results_popup3.appendChild(results_list3);
  results_list3.appendChild(results_list3_item1);
  main_container.appendChild(results_popup3);
  const results_popup8 = document.createElement('div');
  results_popup8.classList.add('results_popup');
  results_popup8.classList.add('results_popup8');
  const span8 = document.createElement('span');
  span8.classList.add('results_title');
  span8.textContent = "3x3 TOP RESULTS";
  const results_list8 = document.createElement('ol');
  results_list8.classList.add('results_list');
  results_list8.classList.add('results_list8');
  const results_list8_item1 = document.createElement('div');
  results_list8_item1.classList.add('results_list_item1');
  results_list8_item1.textContent = "Win your first game!";
  results_popup8.appendChild(span8);
  results_popup8.appendChild(results_list8);
  results_list8.appendChild(results_list8_item1);
  main_container.appendChild(results_popup8);
  const results_popup15 = document.createElement('div');
  results_popup15.classList.add('results_popup');
  results_popup15.classList.add('results_popup15');
  const span9 = document.createElement('span');
  span9.classList.add('results_title');
  span9.textContent = "4x4 TOP RESULTS";
  const results_list15 = document.createElement('ol');
  results_list15.classList.add('results_list');
  results_list15.classList.add('results_list15');
  const results_list15_item1 = document.createElement('div');
  results_list15_item1.classList.add('results_list_item1');
  results_list15_item1.textContent = "Win your first game!";
  results_popup15.appendChild(span9);
  results_popup15.appendChild(results_list15);
  results_list15.appendChild(results_list15_item1);
  main_container.appendChild(results_popup15);
  const results_popup24 = document.createElement('div');
  results_popup24.classList.add('results_popup');
  results_popup24.classList.add('results_popup24');
  const span10 = document.createElement('span');
  span10.classList.add('results_title');
  span10.textContent = "5x5 TOP RESULTS";
  const results_list24 = document.createElement('ol');
  results_list24.classList.add('results_list');
  results_list24.classList.add('results_list24');
  const results_list24_item1 = document.createElement('div');
  results_list24_item1.classList.add('results_list_item1');
  results_list24_item1.textContent = "Win your first game!";
  results_popup24.appendChild(span10);
  results_popup24.appendChild(results_list24);
  results_list24.appendChild(results_list24_item1);
  main_container.appendChild(results_popup24);
  const results_popup35 = document.createElement('div');
  results_popup35.classList.add('results_popup');
  results_popup35.classList.add('results_popup35');
  const span11 = document.createElement('span');
  span11.classList.add('results_title');
  span11.textContent = "6x6 TOP RESULTS";
  const results_list35 = document.createElement('ol');
  results_list35.classList.add('results_list');
  results_list35.classList.add('results_list35');
  const results_list35_item1 = document.createElement('div');
  results_list35_item1.classList.add('results_list_item1');
  results_list35_item1.textContent = "Win your first game!";
  results_popup35.appendChild(span11);
  results_popup35.appendChild(results_list35);
  results_list35.appendChild(results_list35_item1);
  main_container.appendChild(results_popup35);
  const results_popup48 = document.createElement('div');
  results_popup48.classList.add('results_popup');
  results_popup48.classList.add('results_popup48');
  const span12 = document.createElement('span');
  span12.classList.add('results_title');
  span12.textContent = "7x7 TOP RESULTS";
  const results_list48 = document.createElement('ol');
  results_list48.classList.add('results_list');
  results_list48.classList.add('results_list48');
  const results_list48_item1 = document.createElement('div');
  results_list48_item1.classList.add('results_list_item1');
  results_list48_item1.textContent = "Win your first game!";
  results_popup48.appendChild(span12);
  results_popup48.appendChild(results_list48);
  results_list48.appendChild(results_list48_item1);
  main_container.appendChild(results_popup48);
  const results_popup63 = document.createElement('div');
  results_popup63.classList.add('results_popup');
  results_popup63.classList.add('results_popup63');
  const span13 = document.createElement('span');
  span13.classList.add('results_title');
  span13.textContent = "8x8 TOP RESULTS";
  const results_list63 = document.createElement('ol');
  results_list63.classList.add('results_list');
  results_list63.classList.add('results_list63');
  const results_list63_item1 = document.createElement('div');
  results_list63_item1.classList.add('results_list_item1');
  results_list63_item1.textContent = "Win your first game!";
  results_popup63.appendChild(span13);
  results_popup63.appendChild(results_list63);
  results_list63.appendChild(results_list63_item1);
  main_container.appendChild(results_popup63);
  const game_stats = document.createElement('div');
  game_stats.classList.add('game_stats');
  main_container.appendChild(game_stats);
  const moves_wrapper = document.createElement('div');
  moves_wrapper.classList.add('moves_wrapper');
  game_stats.appendChild(moves_wrapper);
  const span1 = document.createElement('span');
  span1.textContent = 'Moves: ';
  const span2 = document.createElement('span');
  span2.classList.add('counter_moves')
  span2.textContent = '0';
  moves_wrapper.appendChild(span1);
  moves_wrapper.appendChild(span2);
  const time_wrapper = document.createElement('div');
  time_wrapper.classList.add('time_wrapper');
  game_stats.appendChild(time_wrapper);
  const span3 = document.createElement('span');
  span3.textContent = 'Time: ';
  const span4 = document.createElement('span');
  span4.classList.add('mins');
  span4.textContent = '00';
  const span4_2 = document.createElement('span');
  span4_2.classList.add('sec');
  span4_2.textContent = '00';
  const span4_3 = document.createElement('span');
  span4_3.classList.add('hours');
  span4_3.textContent = '00';
  const span4_1 = document.createElement('span');
  span4_1.textContent = ':';
  const span4_4 = document.createElement('span');
  span4_4.textContent = ':';
  time_wrapper.appendChild(span3);
  time_wrapper.appendChild(span4_3);
  time_wrapper.appendChild(span4_1);
  time_wrapper.appendChild(span4);
  time_wrapper.appendChild(span4_4);
  time_wrapper.appendChild(span4_2);
  const game_field = document.createElement('div');
  game_field.classList.add('game_field');
  /*const canvas = document.createElement('canvas');
  canvas.setAttribute("id", "canvas");
  game_field.appendChild(canvas);*/
  main_container.appendChild(game_field);
  const current_field_size = document.createElement('div');
  current_field_size.classList.add('current_field_size');
  main_container.appendChild(current_field_size);
  const span5 = document.createElement('span');
  span5.classList.add('frame_size');
  span5.textContent = 'Frame size:';
  const span6 = document.createElement('span');
  span6.classList.add('change_size');
  span6.textContent = '4x4';
  const volume_btn = document.createElement('div');
  volume_btn.classList.add('volume_btn');
  /*let image = new Image();
  image.classList.add('volume_icon');
  image.src = 'assets/audio_volume.svg';
  volume_btn.appendChild(image);*/
  current_field_size.appendChild(span5);
  current_field_size.appendChild(span6);
  current_field_size.appendChild(volume_btn);
  const hidden_wrapper_victory = document.createElement('div');
  hidden_wrapper_victory.classList.add('hidden_wrapper_victory');
  main_container.appendChild(hidden_wrapper_victory);
  const hidden_wrapper = document.createElement('div');
  hidden_wrapper.classList.add('hidden_wrapper');
  main_container.appendChild(hidden_wrapper);
  main.appendChild(main_container);
  body.append(main);
}
createMain();

const game_field = document.querySelector('.game_field');
function createCanvas() {
  const canvas = document.createElement('canvas');
  canvas.setAttribute("id", "canvas");
  game_field.append(canvas);
}
createCanvas();

function createFooter() {
  const footer = document.createElement('footer');
  const footer_container = document.createElement('div');
  footer_container.classList.add('footer_container');
  /*const span1 = document.createElement('span');
  span1.textContent = 'Other sizes:';
  footer_container.appendChild(span1);*/
  const sizes_wrapper = document.createElement('div');
  sizes_wrapper.classList.add('sizes_wrapper');
  footer_container.appendChild(sizes_wrapper);
  const btn0 = document.createElement('button');
  btn0.classList.add('size_btn');
  btn0.classList.add('field_2_2');
  btn0.textContent = '2x2';
  const btn1 = document.createElement('button');
  btn1.classList.add('size_btn');
  btn1.classList.add('field_3_3');
  btn1.textContent = '3x3';
  const btn2 = document.createElement('button');
  btn2.classList.add('size_btn');
  btn2.classList.add('field_4_4');
  btn2.classList.add('btn_active');
  btn2.textContent = '4x4';
  const btn3 = document.createElement('button');
  btn3.classList.add('size_btn');
  btn3.classList.add('field_5_5');
  btn3.textContent = '5x5';
  const btn4 = document.createElement('button');
  btn4.classList.add('size_btn');
  btn4.classList.add('field_6_6');
  btn4.textContent = '6x6';
  const btn5 = document.createElement('button');
  btn5.classList.add('size_btn');
  btn5.classList.add('field_7_7');
  btn5.textContent = '7x7';
  const btn6 = document.createElement('button');
  btn6.classList.add('size_btn');
  btn6.classList.add('field_8_8');
  btn6.textContent = '8x8';
  sizes_wrapper.appendChild(btn0);
  sizes_wrapper.appendChild(btn1);
  sizes_wrapper.appendChild(btn2);
  sizes_wrapper.appendChild(btn3);
  sizes_wrapper.appendChild(btn4);
  sizes_wrapper.appendChild(btn5);
  sizes_wrapper.appendChild(btn6);
  footer.appendChild(footer_container);
  body.append(footer);
}
createFooter();

const size_btns = document.querySelectorAll('.size_btn');
const victory_popup = document.querySelector('.victory_popup');
const saved_popup = document.querySelector('.saved_popup');
const loaded_popup = document.querySelector('.loaded_popup');
const results_btn = document.querySelector('.results_btn');
const results_list_item1 = document.querySelector('.results_list_item1');
const results_popup3 = document.querySelector('.results_popup3');
const results_list3 = document.querySelector('.results_list3');
const results_popup8 = document.querySelector('.results_popup8');
const results_list8 = document.querySelector('.results_list8');
const results_popup15 = document.querySelector('.results_popup15');
const results_list15 = document.querySelector('.results_list15');
const results_popup24 = document.querySelector('.results_popup24');
const results_list24 = document.querySelector('.results_list24');
const results_popup35 = document.querySelector('.results_popup35');
const results_list35 = document.querySelector('.results_list35');
const results_popup48 = document.querySelector('.results_popup48');
const results_list48 = document.querySelector('.results_list48');
const results_popup63 = document.querySelector('.results_popup63');
const results_list63 = document.querySelector('.results_list63');
const hidden_wrapper_victory = document.querySelector('.hidden_wrapper_victory');
const hidden_wrapper = document.querySelector('.hidden_wrapper');
const shuffle_btn = document.querySelector('.shuffle_btn');
const change_size = document.querySelector('.change_size');
const audio = document.querySelector('.audio');
const volume_btn = document.querySelector('.volume_btn');
const save_btn = document.querySelector('.save_btn');
const load_btn = document.querySelector('.load_btn');


size_btns.forEach(el => {
  el.addEventListener('click', (e) => {
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    e.target.classList.add('btn_active');
  })
})

let counterMoves = 0;
let isPlay = true;
const counter_moves = document.querySelector('.counter_moves');
const mins = document.querySelector('.mins');
const sec = document.querySelector('.sec');
const hours = document.querySelector('.hours');

volume_btn.addEventListener('click', () => {
  if (isPlay) {
    audio.pause();
    isPlay = false;
    volume_btn.classList.add('click_mute')
  } else {
    audio.play();
    volume_btn.classList.remove('click_mute')
    isPlay = true;
  }
})

function drawTimer () {
  function setZero (n) {
    if (n < 10) {
        return `0${n}`;
    } else {
        return n;
    }
  }
  sec.textContent = setZero(parseInt(sec.textContent)+1);
  if (sec.textContent === '60') {
    mins.textContent = setZero(parseInt(mins.textContent)+1);
    sec.textContent = "00";
  } else if (mins.textContent === '60') {
    hours.textContent = setZero(parseInt(hours.textContent)+1);
    mins.textContent = "00";
  }
  setTimeout(drawTimer, 1000);
}
drawTimer();

const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let click = 0;
let arrayNums3 = [];
let arrayNums8 = [];
let arrayNums15 = [];
let arrayNums24 = [];
let arrayNums35 = [];
let arrayNums48 = [];
let arrayNums63 = [];
let top10Arr = [];
let top10ArrNums3 = [];
let top10ArrNums8 = [];
let top10ArrNums15 = [];
let top10ArrNums24 = [];
let top10ArrNums35 = [];
let top10ArrNums48 = [];
let top10ArrNums63 = [];
let info = {};
let info3 = {};
let info8 = {};
let info15 = {};
let info24 = {};
let info35 = {};
let info48 = {};
let info63 = {};

const btn_22 = document.querySelector('.field_2_2');
const btn_33 = document.querySelector('.field_3_3');
const btn_44 = document.querySelector('.field_4_4');
const btn_55 = document.querySelector('.field_5_5');
const btn_66 = document.querySelector('.field_6_6');
const btn_77 = document.querySelector('.field_7_7');
const btn_88 = document.querySelector('.field_8_8');

function sortArray3() {
  let numsArr = [];
  for (let i = 0; i<4; i++) {
    numsArr.push(i);
  }
  //console.log(numsArr);
  function setVictoryArr() {
    if (arrayNums3.length > 0) {
      arrayNums3 = [];
    }
    let newNumsArr = [...numsArr];
    let emptyRow = 0;
    let checkArr = [];
    for (let i=0; i<2; i++) {
      let arr = [];
      for (let j=0; j<2; j++) {
        let randomNum = Math.floor(Math.random()*(Math.floor(newNumsArr.length) - 1));
        arr.push(newNumsArr[randomNum])
        if (newNumsArr[randomNum] === 0) {
          emptyRow = i+1;
        } else {
          checkArr.push(newNumsArr[randomNum]);
        }
        newNumsArr.splice(randomNum, 1);
      }
      arrayNums3.push(arr)
    }
    let count = 0
    for (let i=0; i < checkArr.length; i++) {
      for (let j = i+1 ; j < checkArr.length; j++) {
        if (checkArr[i] > checkArr[j]) {
          count++
        }
      }
    }
    count += emptyRow;
    if (count % 2 !== 0){
      setVictoryArr();
    }
  }
  setVictoryArr();
  arrayNums3 = arrayNums3.flat(Infinity);
  //console.log("решаемая комбинация", arrayNums3)
}
function sortArray8() {
  let numsArr = [];
  for (let i = 0; i<9;i++) {
    numsArr.push(i);
  }
  //console.log(numsArr);
  function setVictoryArr() {
    if (arrayNums8.length > 0) {
      arrayNums8 = [];
    }
    let newNumsArr = [...numsArr];
    let emptyRow = 0;
    let checkArr = [];
    for (let i=0; i<3; i++) {
      let arr = [];
      for (let j=0; j<3; j++) {
        let randomNum = Math.floor(Math.random()*(Math.floor(newNumsArr.length) - 1));
        arr.push(newNumsArr[randomNum])
        if (newNumsArr[randomNum] === 0) {
          emptyRow = i+1;
        } else {
          checkArr.push(newNumsArr[randomNum]);
        }
        newNumsArr.splice(randomNum, 1);
      }
      arrayNums8.push(arr)
    }
    let count = 0
    for (let i=0; i < checkArr.length; i++) {
      for (let j = i+1 ; j < checkArr.length; j++) {
        if (checkArr[i] > checkArr[j]) {
          count++
        }
      }
    }
    if (count % 2 !== 0){
      setVictoryArr();
    }
  }
  setVictoryArr();
  arrayNums8 = arrayNums8.flat(Infinity);
  //console.log("решаемая комбинация", arrayNums8);
}
function sortArray15() {
  let numsArr = [];
  for (let i = 0; i<16; i++) {
    numsArr.push(i);
  }
  //console.log(numsArr);
  function setVictoryArr() {
    if (arrayNums15.length > 0) {
      arrayNums15 = [];
    }
    let newNumsArr = [...numsArr];
    let emptyRow = 0;
    let checkArr = [];
    for (let i=0; i<4; i++) {
      let arr = [];
      for (let j=0; j<4; j++) {
        let randomNum = Math.floor(Math.random()*(Math.floor(newNumsArr.length) - 1));
        arr.push(newNumsArr[randomNum])
        if (newNumsArr[randomNum] === 0) {
          emptyRow = i+1;
        } else {
          checkArr.push(newNumsArr[randomNum]);
        }
        newNumsArr.splice(randomNum, 1);
      }
      arrayNums15.push(arr)
    }
    let count = 0
    for (let i=0; i < checkArr.length; i++) {
      for (let j = i+1 ; j < checkArr.length; j++) {
        if (checkArr[i] > checkArr[j]) {
          count++
        }
      }
    }
    count += emptyRow;
    if (count % 2 !== 0){
      setVictoryArr();
    }
  }
  setVictoryArr();
  arrayNums15 = arrayNums15.flat(Infinity);
  //console.log("решаемая комбинация", arrayNums15)
}
sortArray15();
function sortArray24() {
  let numsArr = [];
  for (let i = 0; i<25;i++) {
    numsArr.push(i);
  }
  //console.log(numsArr);
  function setVictoryArr() {
    if (arrayNums24.length > 0) {
      arrayNums24 = [];
    }
    let newNumsArr = [...numsArr];
    let emptyRow = 0;
    let checkArr = [];
    for (let i=0; i<5; i++) {
      let arr = [];
      for (let j=0; j<5; j++) {
        let randomNum = Math.floor(Math.random()*(Math.floor(newNumsArr.length) - 1));
        arr.push(newNumsArr[randomNum])
        if (newNumsArr[randomNum] === 0) {
          emptyRow = i+1;
        } else {
          checkArr.push(newNumsArr[randomNum]);
        }
        newNumsArr.splice(randomNum, 1);
      }
      arrayNums24.push(arr)
    }
    let count = 0
    for (let i=0; i < checkArr.length; i++) {
      for (let j = i+1 ; j < checkArr.length; j++) {
        if (checkArr[i] > checkArr[j]) {
          count++
        }
      }
    }
    if (count % 2 !== 0){
      setVictoryArr();
    }
  }
  setVictoryArr();
  arrayNums24 = arrayNums24.flat(Infinity);
  //console.log("решаемая комбинация", arrayNums24);
}
function sortArray35() {
  let numsArr = [];
  for (let i = 0; i<36; i++) {
    numsArr.push(i);
  }
  //console.log(numsArr);
  function setVictoryArr() {
    if (arrayNums35.length > 0) {
      arrayNums35 = [];
    }
    let newNumsArr = [...numsArr];
    let emptyRow = 0;
    let checkArr = [];
    for (let i=0; i<6; i++) {
      let arr = [];
      for (let j=0; j<6; j++) {
        let randomNum = Math.floor(Math.random()*(Math.floor(newNumsArr.length) - 1));
        arr.push(newNumsArr[randomNum])
        if (newNumsArr[randomNum] === 0) {
          emptyRow = i+1;
        } else {
          checkArr.push(newNumsArr[randomNum]);
        }
        newNumsArr.splice(randomNum, 1);
      }
      arrayNums35.push(arr)
    }
    let count = 0
    for (let i=0; i < checkArr.length; i++) {
      for (let j = i+1 ; j < checkArr.length; j++) {
        if (checkArr[i] > checkArr[j]) {
          count++
        }
      }
    }
    count += emptyRow;
    if (count % 2 !== 0){
      setVictoryArr();
    }
  }
  setVictoryArr();
  arrayNums35 = arrayNums35.flat(Infinity);
  //console.log("решаемая комбинация", arrayNums35)
}
function sortArray48() {
  let numsArr = [];
  for (let i = 0; i<49;i++) {
    numsArr.push(i);
  }
  //console.log(numsArr);
  function setVictoryArr() {
    if (arrayNums48.length > 0) {
      arrayNums48 = [];
    }
    let newNumsArr = [...numsArr];
    let emptyRow = 0;
    let checkArr = [];
    for (let i=0; i<7; i++) {
      let arr = [];
      for (let j=0; j<7; j++) {
        let randomNum = Math.floor(Math.random()*(Math.floor(newNumsArr.length) - 1));
        arr.push(newNumsArr[randomNum])
        if (newNumsArr[randomNum] === 0) {
          emptyRow = i+1;
        } else {
          checkArr.push(newNumsArr[randomNum]);
        }
        newNumsArr.splice(randomNum, 1);
      }
      arrayNums48.push(arr)
    }
    let count = 0
    for (let i=0; i < checkArr.length; i++) {
      for (let j = i+1 ; j < checkArr.length; j++) {
        if (checkArr[i] > checkArr[j]) {
          count++
        }
      }
    }
    if (count % 2 !== 0){
      setVictoryArr();
    }
  }
  setVictoryArr();
  arrayNums48 = arrayNums48.flat(Infinity);
  //console.log("решаемая комбинация", arrayNums48);
}
function sortArray63() {
  let numsArr = [];
  for (let i = 0; i<64; i++) {
    numsArr.push(i);
  }
  //console.log(numsArr);
  function setVictoryArr() {
    if (arrayNums63.length > 0) {
      arrayNums63 = [];
    }
    let newNumsArr = [...numsArr];
    let emptyRow = 0;
    let checkArr = [];
    for (let i=0; i<8; i++) {
      let arr = [];
      for (let j=0; j<8; j++) {
        let randomNum = Math.floor(Math.random()*(Math.floor(newNumsArr.length) - 1));
        arr.push(newNumsArr[randomNum])
        if (newNumsArr[randomNum] === 0) {
          emptyRow = i+1;
        } else {
          checkArr.push(newNumsArr[randomNum]);
        }
        newNumsArr.splice(randomNum, 1);
      }
      arrayNums63.push(arr)
    }
    let count = 0
    for (let i=0; i < checkArr.length; i++) {
      for (let j = i+1 ; j < checkArr.length; j++) {
        if (checkArr[i] > checkArr[j]) {
          count++
        }
      }
    }
    count += emptyRow;
    if (count % 2 !== 0){
      setVictoryArr();
    }
  }
  setVictoryArr();
  arrayNums63 = arrayNums63.flat(Infinity);
  //console.log("решаемая комбинация", arrayNums63)
}
function setGame3() {
  canvas.width  = 300;
  canvas.height = 300;
  //sort(arrayNums3);
  //console.log(arrayNums3);
  const drawBox = function(x, y, value) {
    context.fillStyle = "bisque";
    context.fillRect(x, y, 150, 150);
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 2;
    context.shadowColor = "black";
    if (value === 0) {
      context.fillStyle = "bisque";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      context.shadowColor = "none";
    } else {
      context.fillStyle = "midnightblue";
    }
    context.fillRect(x + 10, y + 10, 130, 130)
    context.font = "38px Arial";
    context.fillStyle = "bisque";
    context.fillText(value, x + 65, y + 90);
  }

  const drawCell = function(position, value) {
    if(position === 0) { drawBox(0, 0, value); }
    else if (position === 1) { drawBox(150, 0, value); }
    else if (position === 2) { drawBox(0, 150, value); }
    else if (position === 3) { drawBox(150, 150, value); }
  }

  for (let i = 0; i<=8; i++) {
    drawCell(i, arrayNums3[i])
  }

  const checkClientX = function(e) {
    if (e < 150) { return 1; }
    if (e < 300) { return 2; }
  }

  canvas.addEventListener("click", function(e) {
    //console.log(e);
    let check = checkClientX(e.offsetX);
    if (e.offsetY < 150) {
      switch(check) {
        case 1: click = 0; break;
        case 2: click = 1; break;
      }
    }
    if (e.offsetY > 150 && e.offsetY < 300) {
      switch(check) {
        case 1: click = 2; break;
        case 2: click = 3; break;
      }
    }
    if (arrayNums3[click - 2] === 0) {
      arrayNums3[click - 2] = arrayNums3[click];
      arrayNums3[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=3; i++) {
      drawCell(i, arrayNums3[i])
    }
    if (arrayNums3[click + 2] === 0) {
      arrayNums3[click + 2] = arrayNums3[click];
      arrayNums3[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=3; i++) {
      drawCell(i, arrayNums3[i])
    }
    if (arrayNums3[click - 1] === 0 && click !== 2) {
      arrayNums3[click - 1] = arrayNums3[click];
      arrayNums3[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=3; i++) {
      drawCell(i, arrayNums3[i])
    }
    if (arrayNums3[click + 1] === 0 && click !== 1) {
      arrayNums3[click + 1] = arrayNums3[click];
      arrayNums3[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=3; i++) {
      drawCell(i, arrayNums3[i]);
    }

    let correctArray = [1, 2, 3, 0];
    //console.log(arrayNums3)
    if (arrayNums3.toString() === correctArray.toString()) {
      victory_popup.classList.add('popup_active');
      let time = `${hours.textContent}:${mins.textContent}:${sec.textContent}`;
      let moves = counter_moves.textContent;
      victory_popup.textContent = `Hooray! You solved the puzzle in ${time} and ${moves} moves!`;
      info3 = { moves, time };
      hidden_wrapper_victory.classList.add('hidden_wrapper_active');
    }
    //console.log(info3);
  });
}
function setGame8() {
  canvas.width  = 300;
  canvas.height = 300;
  //sort(arrayNums8);
  //console.log(arrayNums8);
  const drawBox = function(x, y, value) {
    context.fillStyle = "bisque";
    context.fillRect(x, y, 100, 100);
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 2;
    context.shadowColor = "black";
    if (value === 0) {
      context.fillStyle = "bisque";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      context.shadowColor = "none";
    } else {
      context.fillStyle = "midnightblue";
    }
    context.fillRect(x + 5, y + 5, 90, 90)
    context.font = "38px Arial";
    context.fillStyle = "bisque";
    context.fillText(value, x + 40, y + 65);
  }

  const drawCell = function(position, value) {
    if(position === 0) { drawBox(0, 0, value); }
    else if (position === 1) { drawBox(100, 0, value); }
    else if (position === 2) { drawBox(200, 0, value); }
    else if (position === 3) { drawBox(0, 100, value); }
    else if (position === 4) { drawBox(100, 100, value); }
    else if (position === 5) { drawBox(200, 100, value); }
    else if (position === 6) { drawBox(0, 200, value); }
    else if (position === 7) { drawBox(100, 200, value); }
    else if (position === 8) { drawBox(200, 200, value); }
  }

  for (let i = 0; i<=8; i++) {
    drawCell(i, arrayNums8[i])
  }

  const checkClientX = function(e) {
    if (e < 100) { return 1; }
    if (e < 200) { return 2; }
    if (e < 300) { return 3; }
  }

  canvas.addEventListener("click", function(e) {
    //console.log(e);
    let check = checkClientX(e.offsetX);
    if (e.offsetY < 100) {
      switch(check) {
        case 1: click = 0; break;
        case 2: click = 1; break;
        case 3: click = 2; break;
      }
    }
    if (e.offsetY > 100 && e.offsetY < 200) {
      switch(check) {
        case 1: click = 3; break;
        case 2: click = 4; break;
        case 3: click = 5; break;
      }
    }
    if (e.offsetY > 200 && e.offsetY < 300) {
      switch(check) {
        case 1: click = 6; break;
        case 2: click = 7; break;
        case 3: click = 8; break;
      }
    }
    if (arrayNums8[click - 3] === 0) {
      arrayNums8[click - 3] = arrayNums8[click];
      arrayNums8[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=8; i++) {
      drawCell(i, arrayNums8[i])
    }
    if (arrayNums8[click + 3] === 0) {
      arrayNums8[click + 3] = arrayNums8[click];
      arrayNums8[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=8; i++) {
      drawCell(i, arrayNums8[i])
    }
    if (arrayNums8[click - 1] === 0 && click !== 3 && click !== 6) {
      arrayNums8[click - 1] = arrayNums8[click];
      arrayNums8[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=8; i++) {
      drawCell(i, arrayNums8[i])
    }
    if (arrayNums8[click + 1] === 0 && click !== 2 && click !== 5) {
      arrayNums8[click + 1] = arrayNums8[click];
      arrayNums8[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=8; i++) {
      drawCell(i, arrayNums8[i])
    }
    let correctArray = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    //console.log(arrayNums8);
    if (arrayNums8.toString() === correctArray.toString()) {
      victory_popup.classList.add('popup_active');
      let time = `${hours.textContent}:${mins.textContent}:${sec.textContent}`;
      let moves = counter_moves.textContent;
      victory_popup.textContent = `Hooray! You solved the puzzle in ${time} and ${moves} moves!`;
      info8 = { moves, time };
      hidden_wrapper_victory.classList.add('hidden_wrapper_active');
    }
    //console.log(info8);
  });
}
function setGame15() {
  canvas.width  = 300;
  canvas.height = 300;
  //sort(arrayNums15);
  //console.log(arrayNums15);
  const drawBox = function(x, y, value) {
    context.fillStyle = "bisque";
    context.fillRect(x, y, 75, 75);
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 2;
    context.shadowColor = "black";
    if (value === 0) {
      context.fillStyle = "bisque";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      context.shadowColor = "none";
    } else {
      context.fillStyle = "midnightblue";
    }
    context.fillRect(x + 2.5, y + 2.5, 70, 70)
    context.font = "38px Arial";
    context.fillStyle = "bisque";
    if (value < 10) {
      context.fillText(value, x + 30, y + 50);
    } else {
      context.fillText(value, x + 15, y + 50);
    }
  }

  const drawCell = function(position, value) {
    if(position === 0) { drawBox(0, 0, value); }
    else if (position === 1) { drawBox(75, 0, value); }
    else if (position === 2) { drawBox(150, 0, value); }
    else if (position === 3) { drawBox(225, 0, value); }
    else if (position === 4) { drawBox(0, 75, value); }
    else if (position === 5) { drawBox(75, 75, value); }
    else if (position === 6) { drawBox(150, 75, value); }
    else if (position === 7) { drawBox(225, 75, value); }
    else if (position === 8) { drawBox(0, 150, value); }
    else if (position === 9) { drawBox(75, 150, value); }
    else if (position === 10) { drawBox(150, 150, value); }
    else if (position === 11) { drawBox(225, 150, value); }
    else if (position === 12) { drawBox(0, 225, value); }
    else if (position === 13) { drawBox(75, 225, value); }
    else if (position === 14) { drawBox(150, 225, value); }
    else if (position === 15) { drawBox(225, 225, value); }
  }

  for (let i = 0; i<=15; i++) {
    drawCell(i, arrayNums15[i])
  }

  const checkClientX = function(e) {
    if (e < 75) { return 1; }
    if (e < 150) { return 2; }
    if (e < 225) { return 3; }
    if (e < 300) { return 4; }
  }

  canvas.addEventListener("click", function(e) {
    //console.log(e);
    let check = checkClientX(e.offsetX);
    if (e.offsetY < 75) {
      switch(check) {
        case 1: click = 0; break;
        case 2: click = 1; break;
        case 3: click = 2; break;
        case 4: click = 3; break;
      }
    }
    if (e.offsetY > 75 && e.offsetY < 150) {
      switch(check) {
        case 1: click = 4; break;
        case 2: click = 5; break;
        case 3: click = 6; break;
        case 4: click = 7; break;
      }
    }
    if (e.offsetY > 150 && e.offsetY < 225) {
      switch(check) {
        case 1: click = 8; break;
        case 2: click = 9; break;
        case 3: click = 10; break;
        case 4: click = 11; break;
      }
    }
    if (e.offsetY > 225 && e.offsetY < 300) {
      switch(check) {
        case 1: click = 12; break;
        case 2: click = 13; break;
        case 3: click = 14; break;
        case 4: click = 15; break;
      }
    }

    if (arrayNums15[click - 4] === 0) {
      arrayNums15[click - 4] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click + 4] === 0) {
      arrayNums15[click + 4] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click - 1] === 0 && click !== 4 && click !== 8 && click !== 12) {
      arrayNums15[click - 1] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click + 1] === 0 && click !== 3 && click !== 7 && click !== 11) {
      arrayNums15[click + 1] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    let correctArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    //console.log(arrayNums15);
    if (arrayNums15.toString() === correctArray.toString()) {
      victory_popup.classList.add('popup_active');
      let time = `${hours.textContent}:${mins.textContent}:${sec.textContent}`;
      let moves = counter_moves.textContent;
      victory_popup.textContent = `Hooray! You solved the puzzle in ${time} and ${moves} moves!`;
      info15 = { moves, time };
      hidden_wrapper_victory.classList.add('hidden_wrapper_active');
    }
    //console.log(info15);
  });
}
setGame15();
function setGame24() {
  canvas.width  = 300;
  canvas.height = 300;
  //sort(arrayNums24);
  //console.log(arrayNums24);
  const drawBox = function(x, y, value) {
    context.fillStyle = "bisque";
    context.fillRect(x, y, 60, 60);
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 2;
    context.shadowColor = "black";
    if (value === 0) {
      context.fillStyle = "bisque";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      context.shadowColor = "none";
    } else {
      context.fillStyle = "midnightblue";
    }
    context.fillRect(x + 2.5, y + 2.5, 55, 55)
    context.font = "32px Arial";
    context.fillStyle = "bisque";
    if (value < 10) {
      context.fillText(value, x + 20, y + 40);
    } else {
      context.fillText(value, x + 12, y + 40);
    }
  }

  const drawCell = function(position, value) {
    if(position === 0) { drawBox(0, 0, value); }
    else if (position === 1) { drawBox(60, 0, value); }
    else if (position === 2) { drawBox(120, 0, value); }
    else if (position === 3) { drawBox(180, 0, value); }
    else if (position === 4) { drawBox(240, 0, value); }
    else if (position === 5) { drawBox(0, 60, value); }
    else if (position === 6) { drawBox(60, 60, value); }
    else if (position === 7) { drawBox(120, 60, value); }
    else if (position === 8) { drawBox(180, 60, value); }
    else if (position === 9) { drawBox(240, 60, value); }
    else if (position === 10) { drawBox(0, 120, value); }
    else if (position === 11) { drawBox(60, 120, value); }
    else if (position === 12) { drawBox(120, 120, value); }
    else if (position === 13) { drawBox(180, 120, value); }
    else if (position === 14) { drawBox(240, 120, value); }
    else if (position === 15) { drawBox(0, 180, value); }
    else if (position === 16) { drawBox(60, 180, value); }
    else if (position === 17) { drawBox(120, 180, value); }
    else if (position === 18) { drawBox(180, 180, value); }
    else if (position === 19) { drawBox(240, 180, value); }
    else if (position === 20) { drawBox(0, 240, value); }
    else if (position === 21) { drawBox(60, 240, value); }
    else if (position === 22) { drawBox(120, 240, value); }
    else if (position === 23) { drawBox(180, 240, value); }
    else if (position === 24) { drawBox(240, 240, value); }
  }

  for (let i = 0; i<=24; i++) {
    drawCell(i, arrayNums24[i])
  }

  const checkClientX = function(e) {
    if (e < 60) { return 1; }
    if (e < 120) { return 2; }
    if (e < 180) { return 3; }
    if (e < 240) { return 4; }
    if (e < 300) { return 5; }
  }

  canvas.addEventListener("click", function(e) {
    //console.log(e);
    let check = checkClientX(e.offsetX);
    if (e.offsetY < 60) {
      switch(check) {
        case 1: click = 0; break;
        case 2: click = 1; break;
        case 3: click = 2; break;
        case 4: click = 3; break;
        case 5: click = 4; break;
      }
    }
    if (e.offsetY > 60 && e.offsetY < 120) {
      switch(check) {
        case 1: click = 5; break;
        case 2: click = 6; break;
        case 3: click = 7; break;
        case 4: click = 8; break;
        case 5: click = 9; break;
      }
    }
    if (e.offsetY > 120 && e.offsetY < 180) {
      switch(check) {
        case 1: click = 10; break;
        case 2: click = 11; break;
        case 3: click = 12; break;
        case 4: click = 13; break;
        case 5: click = 14; break;
      }
    }
    if (e.offsetY > 180 && e.offsetY < 240) {
      switch(check) {
        case 1: click = 15; break;
        case 2: click = 16; break;
        case 3: click = 17; break;
        case 4: click = 18; break;
        case 5: click = 19; break;
      }
    }
    if (e.offsetY > 240 && e.offsetY < 300) {
      switch(check) {
        case 1: click = 20; break;
        case 2: click = 21; break;
        case 3: click = 22; break;
        case 4: click = 23; break;
        case 5: click = 24; break;
      }
    }

    if (arrayNums24[click - 5] === 0) {
      arrayNums24[click - 5] = arrayNums24[click];
      arrayNums24[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=24; i++) {
      drawCell(i, arrayNums24[i])
    }
    if (arrayNums24[click + 5] === 0) {
      arrayNums24[click + 5] = arrayNums24[click];
      arrayNums24[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=24; i++) {
      drawCell(i, arrayNums24[i])
    }
    if (arrayNums24[click - 1] === 0 && click !== 5 && click !== 10 && click !== 15 && click !== 20) {
      arrayNums24[click - 1] = arrayNums24[click];
      arrayNums24[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=24; i++) {
      drawCell(i, arrayNums24[i])
    }
    if (arrayNums24[click + 1] === 0 && click !== 4 && click !== 9 && click !== 14 && click !== 19) {
      arrayNums24[click + 1] = arrayNums24[click];
      arrayNums24[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=24; i++) {
      drawCell(i, arrayNums24[i])
    }
    let correctArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 0];
    //console.log(arrayNums24);
    if (arrayNums24.toString() === correctArray.toString()) {
      victory_popup.classList.add('popup_active');
      let time = `${hours.textContent}:${mins.textContent}:${sec.textContent}`;
      let moves = counter_moves.textContent;
      victory_popup.textContent = `Hooray! You solved the puzzle in ${time} and ${moves} moves!`;
      info24 = { moves, time };
      hidden_wrapper_victory.classList.add('hidden_wrapper_active');
    }
    //console.log(info24);
  });
}
function setGame35() {
  canvas.width  = 300;
  canvas.height = 300;
  //sort(arrayNums35);
  //console.log(arrayNums35);
  const drawBox = function(x, y, value) {
    context.fillStyle = "bisque";
    context.fillRect(x, y, 50, 50);
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 2;
    context.shadowColor = "black";
    if (value === 0) {
      context.fillStyle = "bisque";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      context.shadowColor = "none";
    } else {
      context.fillStyle = "midnightblue";
    }
    context.fillRect(x + 2, y + 2, 45, 45)
    context.font = "28px Arial";
    context.fillStyle = "bisque";
    if (value < 10) {
      context.fillText(value, x + 20, y + 35);
    } else {
      context.fillText(value, x + 12, y + 35);
    }
  }

  const drawCell = function(position, value) {
    if(position === 0) { drawBox(0, 0, value); }
    else if (position === 1) { drawBox(50, 0, value); }
    else if (position === 2) { drawBox(100, 0, value); }
    else if (position === 3) { drawBox(150, 0, value); }
    else if (position === 4) { drawBox(200, 0, value); }
    else if (position === 5) { drawBox(250, 0, value); }
    else if (position === 6) { drawBox(0, 50, value); }
    else if (position === 7) { drawBox(50, 50, value); }
    else if (position === 8) { drawBox(100, 50, value); }
    else if (position === 9) { drawBox(150, 50, value); }
    else if (position === 10) { drawBox(200, 50, value); }
    else if (position === 11) { drawBox(250, 50, value); }
    else if (position === 12) { drawBox(0, 100, value); }
    else if (position === 13) { drawBox(50, 100, value); }
    else if (position === 14) { drawBox(100, 100, value); }
    else if (position === 15) { drawBox(150, 100, value); }
    else if (position === 16) { drawBox(200, 100, value); }
    else if (position === 17) { drawBox(250, 100, value); }
    else if (position === 18) { drawBox(0, 150, value); }
    else if (position === 19) { drawBox(50, 150, value); }
    else if (position === 20) { drawBox(100, 150, value); }
    else if (position === 21) { drawBox(150, 150, value); }
    else if (position === 22) { drawBox(200, 150, value); }
    else if (position === 23) { drawBox(250, 150, value); }
    else if (position === 24) { drawBox(0, 200, value); }
    else if (position === 25) { drawBox(50, 200, value); }
    else if (position === 26) { drawBox(100, 200, value); }
    else if (position === 27) { drawBox(150, 200, value); }
    else if (position === 28) { drawBox(200, 200, value); }
    else if (position === 29) { drawBox(250, 200, value); }
    else if (position === 30) { drawBox(0, 250, value); }
    else if (position === 31) { drawBox(50, 250, value); }
    else if (position === 32) { drawBox(100, 250, value); }
    else if (position === 33) { drawBox(150, 250, value); }
    else if (position === 34) { drawBox(200, 250, value); }
    else if (position === 35) { drawBox(250, 250, value); }
  }

  for (let i = 0; i<=35; i++) {
    drawCell(i, arrayNums35[i])
  }

  const checkClientX = function(e) {
    if (e < 50) { return 1; }
    if (e < 100) { return 2; }
    if (e < 150) { return 3; }
    if (e < 200) { return 4; }
    if (e < 250) { return 5; }
    if (e < 300) { return 6; }
  }

  canvas.addEventListener("click", function(e) {
    //console.log(e);
    let check = checkClientX(e.offsetX);
    if (e.offsetY < 50) {
      switch(check) {
        case 1: click = 0; break;
        case 2: click = 1; break;
        case 3: click = 2; break;
        case 4: click = 3; break;
        case 5: click = 4; break;
        case 6: click = 5; break;
      }
    }
    if (e.offsetY > 50 && e.offsetY < 100) {
      switch(check) {
        case 1: click = 6; break;
        case 2: click = 7; break;
        case 3: click = 8; break;
        case 4: click = 9; break;
        case 5: click = 10; break;
        case 6: click = 11; break;
      }
    }
    if (e.offsetY > 100 && e.offsetY < 150) {
      switch(check) {
        case 1: click = 12; break;
        case 2: click = 13; break;
        case 3: click = 14; break;
        case 4: click = 15; break;
        case 5: click = 16; break;
        case 6: click = 17; break;
      }
    }
    if (e.offsetY > 150 && e.offsetY < 200) {
      switch(check) {
        case 1: click = 18; break;
        case 2: click = 19; break;
        case 3: click = 20; break;
        case 4: click = 21; break;
        case 5: click = 22; break;
        case 6: click = 23; break;
      }
    }
    if (e.offsetY > 200 && e.offsetY < 250) {
      switch(check) {
        case 1: click = 24; break;
        case 2: click = 25; break;
        case 3: click = 26; break;
        case 4: click = 27; break;
        case 5: click = 28; break;
        case 6: click = 29; break;
      }
    }
    if (e.offsetY > 250 && e.offsetY < 300) {
      switch(check) {
        case 1: click = 30; break;
        case 2: click = 31; break;
        case 3: click = 32; break;
        case 4: click = 33; break;
        case 5: click = 34; break;
        case 6: click = 35; break;
      }
    }

    if (arrayNums35[click - 6] === 0) {
      arrayNums35[click - 6] = arrayNums35[click];
      arrayNums35[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=35; i++) {
      drawCell(i, arrayNums35[i])
    }
    if (arrayNums35[click + 6] === 0) {
      arrayNums35[click + 6] = arrayNums35[click];
      arrayNums35[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=35; i++) {
      drawCell(i, arrayNums35[i])
    }
    if (arrayNums35[click - 1] === 0 && click !== 6 && click !== 12 && click !== 18 && click !== 24 && click !== 30) {
      arrayNums35[click - 1] = arrayNums35[click];
      arrayNums35[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=35; i++) {
      drawCell(i, arrayNums35[i])
    }
    if (arrayNums35[click + 1] === 0 && click !== 5 && click !== 11 && click !== 17 && click !== 23 && click !== 29) {
      arrayNums35[click + 1] = arrayNums35[click];
      arrayNums35[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=35; i++) {
      drawCell(i, arrayNums35[i])
    }
    let correctArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
    //console.log(arrayNums35);
    if (arrayNums35.toString() === correctArray.toString()) {
      victory_popup.classList.add('popup_active');
      let time = `${hours.textContent}:${mins.textContent}:${sec.textContent}`;
      let moves = counter_moves.textContent;
      victory_popup.textContent = `Hooray! You solved the puzzle in ${time} and ${moves} moves!`;
      info35 = { moves, time };
      hidden_wrapper_victory.classList.add('hidden_wrapper_active');
    }
    //console.log(info35);
  });
}
function setGame48() {
  canvas.width  = 301;
  canvas.height = 301;
  //sort(arrayNums48);
  //console.log(arrayNums48);
  const drawBox = function(x, y, value) {
    context.fillStyle = "bisque";
    context.fillRect(x, y, 43, 43);
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 2;
    context.shadowColor = "black";
    if (value === 0) {
      context.fillStyle = "bisque";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      context.shadowColor = "none";
    } else {
      context.fillStyle = "midnightblue";
    }
    context.fillRect(x + 2, y + 2, 39, 39)
    context.font = "24px Arial";
    context.fillStyle = "bisque";
    if (value < 10) {
      context.fillText(value, x + 15, y + 30);
    } else {
      context.fillText(value, x + 8, y + 30);
    }
  }

  const drawCell = function(position, value) {
    if(position === 0) { drawBox(0, 0, value); }
    else if (position === 1) { drawBox(43, 0, value); }
    else if (position === 2) { drawBox(86, 0, value); }
    else if (position === 3) { drawBox(129, 0, value); }
    else if (position === 4) { drawBox(172, 0, value); }
    else if (position === 5) { drawBox(215, 0, value); }
    else if (position === 6) { drawBox(258, 0, value); }
    else if (position === 7) { drawBox(0, 43, value); }
    else if (position === 8) { drawBox(43, 43, value); }
    else if (position === 9) { drawBox(86, 43, value); }
    else if (position === 10) { drawBox(129, 43, value); }
    else if (position === 11) { drawBox(172, 43, value); }
    else if (position === 12) { drawBox(215, 43, value); }
    else if (position === 13) { drawBox(258, 43, value); }
    else if (position === 14) { drawBox(0, 86, value); }
    else if (position === 15) { drawBox(43, 86, value); }
    else if (position === 16) { drawBox(86, 86, value); }
    else if (position === 17) { drawBox(129, 86, value); }
    else if (position === 18) { drawBox(172, 86, value); }
    else if (position === 19) { drawBox(215, 86, value); }
    else if (position === 20) { drawBox(258, 86, value); }
    else if (position === 21) { drawBox(0, 129, value); }
    else if (position === 22) { drawBox(43, 129, value); }
    else if (position === 23) { drawBox(86, 129, value); }
    else if (position === 24) { drawBox(129, 129, value); }
    else if (position === 25) { drawBox(172, 129, value); }
    else if (position === 26) { drawBox(215, 129, value); }
    else if (position === 27) { drawBox(258, 129, value); }
    else if (position === 28) { drawBox(0, 172, value); }
    else if (position === 29) { drawBox(43, 172, value); }
    else if (position === 30) { drawBox(86, 172, value); }
    else if (position === 31) { drawBox(129, 172, value); }
    else if (position === 32) { drawBox(172, 172, value); }
    else if (position === 33) { drawBox(215, 172, value); }
    else if (position === 34) { drawBox(258, 172, value); }
    else if (position === 35) { drawBox(0, 215, value); }
    else if (position === 36) { drawBox(43, 215, value); }
    else if (position === 37) { drawBox(86, 215, value); }
    else if (position === 38) { drawBox(129, 215, value); }
    else if (position === 39) { drawBox(172, 215, value); }
    else if (position === 40) { drawBox(215, 215, value); }
    else if (position === 41) { drawBox(258, 215, value); }
    else if (position === 42) { drawBox(0, 258, value); }
    else if (position === 43) { drawBox(43, 258, value); }
    else if (position === 44) { drawBox(86, 258, value); }
    else if (position === 45) { drawBox(129, 258, value); }
    else if (position === 46) { drawBox(172, 258, value); }
    else if (position === 47) { drawBox(215, 258, value); }
    else if (position === 48) { drawBox(258, 258, value); }
  }

  for (let i = 0; i<=48; i++) {
    drawCell(i, arrayNums48[i])
  }

  const checkClientX = function(e) {
    if (e < 43) { return 1; }
    if (e < 86) { return 2; }
    if (e < 129) { return 3; }
    if (e < 172) { return 4; }
    if (e < 215) { return 5; }
    if (e < 258) { return 6; }
    if (e < 301) { return 7; }
  }

  canvas.addEventListener("click", function(e) {
    //console.log(e);
    let check = checkClientX(e.offsetX);
    if (e.offsetY < 43) {
      switch(check) {
        case 1: click = 0; break;
        case 2: click = 1; break;
        case 3: click = 2; break;
        case 4: click = 3; break;
        case 5: click = 4; break;
        case 6: click = 5; break;
        case 7: click = 6; break;
      }
    }
    if (e.offsetY > 43 && e.offsetY < 86) {
      switch(check) {
        case 1: click = 7; break;
        case 2: click = 8; break;
        case 3: click = 9; break;
        case 4: click = 10; break;
        case 5: click = 11; break;
        case 6: click = 12; break;
        case 7: click = 13; break;
      }
    }
    if (e.offsetY > 86 && e.offsetY < 129) {
      switch(check) {
        case 1: click = 14; break;
        case 2: click = 15; break;
        case 3: click = 16; break;
        case 4: click = 17; break;
        case 5: click = 18; break;
        case 6: click = 19; break;
        case 7: click = 20; break;
      }
    }
    if (e.offsetY > 129 && e.offsetY < 172) {
      switch(check) {
        case 1: click = 21; break;
        case 2: click = 22; break;
        case 3: click = 23; break;
        case 4: click = 24; break;
        case 5: click = 25; break;
        case 6: click = 26; break;
        case 7: click = 27; break;
      }
    }
    if (e.offsetY > 172 && e.offsetY < 215) {
      switch(check) {
        case 1: click = 28; break;
        case 2: click = 29; break;
        case 3: click = 30; break;
        case 4: click = 31; break;
        case 5: click = 32; break;
        case 6: click = 33; break;
        case 7: click = 34; break;
      }
    }
    if (e.offsetY > 215 && e.offsetY < 258) {
      switch(check) {
        case 1: click = 35; break;
        case 2: click = 36; break;
        case 3: click = 37; break;
        case 4: click = 38; break;
        case 5: click = 39; break;
        case 6: click = 40; break;
        case 7: click = 41; break;
      }
    }
    if (e.offsetY > 258 && e.offsetY < 301) {
      switch(check) {
        case 1: click = 42; break;
        case 2: click = 43; break;
        case 3: click = 44; break;
        case 4: click = 45; break;
        case 5: click = 46; break;
        case 6: click = 47; break;
        case 7: click = 48; break;
      }
    }

    if (arrayNums48[click - 7] === 0) {
      arrayNums48[click - 7] = arrayNums48[click];
      arrayNums48[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=48; i++) {
      drawCell(i, arrayNums48[i])
    }
    if (arrayNums48[click + 7] === 0) {
      arrayNums48[click + 7] = arrayNums48[click];
      arrayNums48[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=48; i++) {
      drawCell(i, arrayNums48[i])
    }
    if (arrayNums48[click - 1] === 0 && click !== 7 && click !== 14 && click !== 21 && click !== 28 && click !== 35 && click !== 42) {
      arrayNums48[click - 1] = arrayNums48[click];
      arrayNums48[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=48; i++) {
      drawCell(i, arrayNums48[i])
    }
    if (arrayNums48[click + 1] === 0 && click !== 6 && click !== 13 && click !== 20 && click !== 27 && click !== 34 && click !== 41) {
      arrayNums48[click + 1] = arrayNums48[click];
      arrayNums48[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=48; i++) {
      drawCell(i, arrayNums48[i])
    }
    let correctArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
              40, 41, 42, 43, 44, 45, 46, 47, 48];
    //console.log(arrayNums48);
    if (arrayNums48.toString() === correctArray.toString()) {
      victory_popup.classList.add('popup_active');
      let time = `${hours.textContent}:${mins.textContent}:${sec.textContent}`;
      let moves = counter_moves.textContent;
      victory_popup.textContent = `Hooray! You solved the puzzle in ${time} and ${moves} moves!`;
      info48 = { moves, time };
      hidden_wrapper_victory.classList.add('hidden_wrapper_active');
    }
    //console.log(info48);
  });
}
function setGame63() {
  canvas.width  = 300;
  canvas.height = 300;
  //sort(arrayNums63);
  //console.log(arrayNums63);
  const drawBox = function(x, y, value) {
    context.fillStyle = "bisque";
    context.fillRect(x, y, 37.5, 37.5);
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 2;
    context.shadowColor = "black";
    if (value === 0) {
      context.fillStyle = "bisque";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      context.shadowColor = "none";
    } else {
      context.fillStyle = "midnightblue";
    }
    context.fillRect(x + 2, y + 2, 33.5, 33.5)
    context.font = "20px Arial";
    context.fillStyle = "bisque";
    if (value < 10) {
      context.fillText(value, x + 15, y + 27);
    } else {
      context.fillText(value, x + 8, y + 27);
    }
  }

  const drawCell = function(position, value) {
    if(position === 0) { drawBox(0, 0, value); }
    else if (position === 1) { drawBox(37.5, 0, value); }
    else if (position === 2) { drawBox(75, 0, value); }
    else if (position === 3) { drawBox(112.5, 0, value); }
    else if (position === 4) { drawBox(150, 0, value); }
    else if (position === 5) { drawBox(187.5, 0, value); }
    else if (position === 6) { drawBox(225, 0, value); }
    else if (position === 7) { drawBox(262.5, 0, value); }
    else if (position === 8) { drawBox(0, 37.5, value); }
    else if (position === 9) { drawBox(37.5, 37.5, value); }
    else if (position === 10) { drawBox(75, 37.5, value); }
    else if (position === 11) { drawBox(112.5, 37.5, value); }
    else if (position === 12) { drawBox(150, 37.5, value); }
    else if (position === 13) { drawBox(187.5, 37.5, value); }
    else if (position === 14) { drawBox(225, 37.5, value); }
    else if (position === 15) { drawBox(262.5, 37.5, value); }
    else if (position === 16) { drawBox(0, 75, value); }
    else if (position === 17) { drawBox(37.5, 75, value); }
    else if (position === 18) { drawBox(75, 75, value); }
    else if (position === 19) { drawBox(112.5, 75, value); }
    else if (position === 20) { drawBox(150, 75, value); }
    else if (position === 21) { drawBox(187.5, 75, value); }
    else if (position === 22) { drawBox(225, 75, value); }
    else if (position === 23) { drawBox(262.5, 75, value); }
    else if (position === 24) { drawBox(0, 112.5, value); }
    else if (position === 25) { drawBox(37.5, 112.5, value); }
    else if (position === 26) { drawBox(75, 112.5, value); }
    else if (position === 27) { drawBox(112.5, 112.5, value); }
    else if (position === 28) { drawBox(150, 112.5, value); }
    else if (position === 29) { drawBox(187.5, 112.5, value); }
    else if (position === 30) { drawBox(225, 112.5, value); }
    else if (position === 31) { drawBox(262.5, 112.5, value); }
    else if (position === 32) { drawBox(0, 150, value); }
    else if (position === 33) { drawBox(37.5, 150, value); }
    else if (position === 34) { drawBox(75, 150, value); }
    else if (position === 35) { drawBox(112.5, 150, value); }
    else if (position === 36) { drawBox(150, 150, value); }
    else if (position === 37) { drawBox(187.5, 150, value); }
    else if (position === 38) { drawBox(225, 150, value); }
    else if (position === 39) { drawBox(262.5, 150, value); }
    else if (position === 40) { drawBox(0, 187.5, value); }
    else if (position === 41) { drawBox(37.5, 187.5, value); }
    else if (position === 42) { drawBox(75, 187.5, value); }
    else if (position === 43) { drawBox(112.5, 187.5, value); }
    else if (position === 44) { drawBox(150, 187.5, value); }
    else if (position === 45) { drawBox(187.5, 187.5, value); }
    else if (position === 46) { drawBox(225, 187.5, value); }
    else if (position === 47) { drawBox(262.5, 187.5, value); }
    else if (position === 48) { drawBox(0, 225, value); }
    else if (position === 49) { drawBox(37.5, 225, value); }
    else if (position === 50) { drawBox(75, 225, value); }
    else if (position === 51) { drawBox(112.5, 225, value); }
    else if (position === 52) { drawBox(150, 225, value); }
    else if (position === 53) { drawBox(187.5, 225, value); }
    else if (position === 54) { drawBox(225, 225, value); }
    else if (position === 55) { drawBox(262.5, 225, value); }
    else if (position === 56) { drawBox(0, 262.5, value); }
    else if (position === 57) { drawBox(37.5, 262.5, value); }
    else if (position === 58) { drawBox(75, 262.5, value); }
    else if (position === 59) { drawBox(112.5, 262.5, value); }
    else if (position === 60) { drawBox(150, 262.5, value); }
    else if (position === 61) { drawBox(187.5, 262.5, value); }
    else if (position === 62) { drawBox(225, 262.5, value); }
    else if (position === 63) { drawBox(262.5, 262.5, value); }
  }

  for (let i = 0; i<=63; i++) {
    drawCell(i, arrayNums63[i])
  }

  const checkClientX = function(e) {
    if (e < 37.5) { return 1; }
    if (e < 75) { return 2; }
    if (e < 112.5) { return 3; }
    if (e < 150) { return 4; }
    if (e < 187.5) { return 5; }
    if (e < 225) { return 6; }
    if (e < 262.5) { return 7; }
    if (e < 300) { return 8; }
  }

  canvas.addEventListener("click", function(e) {
    //console.log(e);
    let check = checkClientX(e.offsetX);
    if (e.offsetY < 37.5) {
      switch(check) {
        case 1: click = 0; break;
        case 2: click = 1; break;
        case 3: click = 2; break;
        case 4: click = 3; break;
        case 5: click = 4; break;
        case 6: click = 5; break;
        case 7: click = 6; break;
        case 8: click = 7; break;
      }
    }
    if (e.offsetY > 37.5 && e.offsetY < 75) {
      switch(check) {
        case 1: click = 8; break;
        case 2: click = 9; break;
        case 3: click = 10; break;
        case 4: click = 11; break;
        case 5: click = 12; break;
        case 6: click = 13; break;
        case 7: click = 14; break;
        case 8: click = 15; break;
      }
    }
    if (e.offsetY > 75 && e.offsetY < 112.5) {
      switch(check) {
        case 1: click = 16; break;
        case 2: click = 17; break;
        case 3: click = 18; break;
        case 4: click = 19; break;
        case 5: click = 20; break;
        case 6: click = 21; break;
        case 7: click = 22; break;
        case 8: click = 23; break;
      }
    }
    if (e.offsetY > 112.5 && e.offsetY < 150) {
      switch(check) {
        case 1: click = 24; break;
        case 2: click = 25; break;
        case 3: click = 26; break;
        case 4: click = 27; break;
        case 5: click = 28; break;
        case 6: click = 29; break;
        case 7: click = 30; break;
        case 8: click = 31; break;
      }
    }
    if (e.offsetY > 150 && e.offsetY < 187.5) {
      switch(check) {
        case 1: click = 32; break;
        case 2: click = 33; break;
        case 3: click = 34; break;
        case 4: click = 35; break;
        case 5: click = 36; break;
        case 6: click = 37; break;
        case 7: click = 38; break;
        case 8: click = 39; break;
      }
    }
    if (e.offsetY > 187.5 && e.offsetY < 225) {
      switch(check) {
        case 1: click = 40; break;
        case 2: click = 41; break;
        case 3: click = 42; break;
        case 4: click = 43; break;
        case 5: click = 44; break;
        case 6: click = 45; break;
        case 7: click = 46; break;
        case 8: click = 47; break;
      }
    }
    if (e.offsetY > 225 && e.offsetY < 262.5) {
      switch(check) {
        case 1: click = 48; break;
        case 2: click = 49; break;
        case 3: click = 50; break;
        case 4: click = 51; break;
        case 5: click = 52; break;
        case 6: click = 53; break;
        case 7: click = 54; break;
        case 8: click = 55; break;
      }
    }
    if (e.offsetY > 262.5 && e.offsetY < 300) {
      switch(check) {
        case 1: click = 56; break;
        case 2: click = 57; break;
        case 3: click = 58; break;
        case 4: click = 59; break;
        case 5: click = 60; break;
        case 6: click = 61; break;
        case 7: click = 62; break;
        case 8: click = 63; break;
      }
    }

    if (arrayNums63[click - 8] === 0) {
      arrayNums63[click - 8] = arrayNums63[click];
      arrayNums63[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=63; i++) {
      drawCell(i, arrayNums63[i])
    }
    if (arrayNums63[click + 8] === 0) {
      arrayNums63[click + 8] = arrayNums63[click];
      arrayNums63[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=63; i++) {
      drawCell(i, arrayNums63[i])
    }
    if (arrayNums63[click - 1] === 0 && click !== 8 && click !== 16 && click !== 24 && click !== 32 && click !== 40 && click !== 48 && click !== 56) {
      arrayNums63[click - 1] = arrayNums63[click];
      arrayNums63[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=63; i++) {
      drawCell(i, arrayNums63[i])
    }
    if (arrayNums63[click + 1] === 0 && click !== 7 && click !== 15 && click !== 23 && click !== 31 && click !== 39 && click !== 47 && click !== 55) {
      arrayNums63[click + 1] = arrayNums63[click];
      arrayNums63[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
      if(isPlay) {
        audio.play();
      }
    }
    for (let i = 0; i<=63; i++) {
      drawCell(i, arrayNums63[i])
    }
    let correctArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
                  58, 59, 60, 61, 62, 63];
    //console.log(arrayNums63);
    if (arrayNums63.toString() === correctArray.toString()) {
      victory_popup.classList.add('popup_active');
      let time = `${hours.textContent}:${mins.textContent}:${sec.textContent}`;
      let moves = counter_moves.textContent;
      victory_popup.textContent = `Hooray! You solved the puzzle in ${time} and ${moves} moves!`;
      info63 = { moves, time };
      hidden_wrapper_victory.classList.add('hidden_wrapper_active');
    }
    //console.log(info63);
  });
}
function reset() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  counterMoves = 0;
  counter_moves.textContent = counterMoves;
  hours.textContent = '00';
  sec.textContent = '00';
  mins.textContent = '00';
  arrayNums3 = [];
  arrayNums8 = [];
  arrayNums15 = [];
  arrayNums24 = [];
  arrayNums35 = [];
  arrayNums48 = [];
  arrayNums63 = [];
}
btn_22.addEventListener('click', () => {
  reset();
  sortArray3();
  setGame3();
  change_size.textContent = '2x2';
});
btn_33.addEventListener('click', () => {
  reset();
  sortArray8();
  setGame8();
  change_size.textContent = '3x3';
});
btn_44.addEventListener('click', () => {
  reset();
  sortArray15();
  setGame15();
  change_size.textContent = '4x4';
});
btn_55.addEventListener('click', () => {
  reset();
  sortArray24();
  setGame24();
  change_size.textContent = '5x5';
});
btn_66.addEventListener('click', () => {
  reset();
  sortArray35();
  setGame35();
  change_size.textContent = '6x6';
});
btn_77.addEventListener('click', () => {
  reset();
  sortArray48();
  setGame48();
  change_size.textContent = '7x7';
});
btn_88.addEventListener('click', () => {
  reset();
  sortArray63()
  setGame63();
  change_size.textContent = '8x8';
});

function restartGame() {
  if (btn_22.classList.contains('btn_active')) {
    reset();
    sortArray3();
    setGame3();
  }
  if (btn_33.classList.contains('btn_active')) {
    reset();
    sortArray8();
    setGame8();
  }
  if (btn_44.classList.contains('btn_active')) {
    reset();
    sortArray15();
    setGame15();
  }
  if (btn_55.classList.contains('btn_active')) {
    reset();
    sortArray24();
    setGame24();
  }
  if (btn_66.classList.contains('btn_active')) {
    reset();
    sortArray35();
    setGame35();
  }
  if (btn_77.classList.contains('btn_active')) {
    reset();
    sortArray48();
    setGame48();
  }
  if (btn_88.classList.contains('btn_active')) {
    reset();
    sortArray63();
    setGame63();
  }
}

shuffle_btn.addEventListener('click', restartGame);
results_btn.addEventListener('click', () => {
  hidden_wrapper.classList.add('hidden_wrapper_active');
  if (btn_22.classList.contains('btn_active')) {
  results_popup3.classList.add('popup_active');
  }
  if (btn_33.classList.contains('btn_active')) {
    results_popup8.classList.add('popup_active');
  }
  if (btn_44.classList.contains('btn_active')) {
    results_popup15.classList.add('popup_active');
  }
  if (btn_55.classList.contains('btn_active')) {
    results_popup24.classList.add('popup_active');
  }
  if (btn_66.classList.contains('btn_active')) {
    results_popup35.classList.add('popup_active');
  }
  if (btn_77.classList.contains('btn_active')) {
    results_popup48.classList.add('popup_active');
  }
  if (btn_88.classList.contains('btn_active')) {
    results_popup63.classList.add('popup_active');
  }
});
hidden_wrapper.addEventListener('click', () => {
  hidden_wrapper.classList.remove('hidden_wrapper_active');
  results_popup3.classList.remove('popup_active');
  results_popup8.classList.remove('popup_active');
  results_popup15.classList.remove('popup_active');
  results_popup24.classList.remove('popup_active');
  results_popup35.classList.remove('popup_active');
  results_popup48.classList.remove('popup_active');
  results_popup63.classList.remove('popup_active');
  saved_popup.classList.remove('popup_active');
  loaded_popup.classList.remove('popup_active');
});
hidden_wrapper_victory.addEventListener('click', () => {
  hidden_wrapper_victory.classList.remove('hidden_wrapper_active');
  victory_popup.classList.remove('popup_active');
  if (btn_22.classList.contains('btn_active')) {
    if (top10ArrNums3.length === 10 ) {
      for (let i=9; i>0; i--) {
        if (top10ArrNums3[i].moves > info3.moves) {
          top10ArrNums3.splice(i,1,info3);
          break;
        }
      }
    } else {
      top10ArrNums3.push(info3);
    }
    top10ArrNums3.sort((a,b) => a.moves - b.moves);
    //console.log(top10ArrNums3);
    localStorage.setItem("nastasyma_top10list3", JSON.stringify(top10ArrNums3));
    results_list3.innerHTML = '';
    for (let i = 0; i<top10ArrNums3.length; i++) {
      const results_item = document.createElement('li');
      results_item.classList.add('results_item');
      results_item.textContent = `${top10ArrNums3[i].time} and ${top10ArrNums3[i].moves} moves.`
      results_list3.appendChild(results_item);
      localStorage.setItem('nastasyma_results_content3', results_list3.innerHTML);
    }
  }
  if (btn_33.classList.contains('btn_active')) {
    if (top10ArrNums8.length === 10 ) {
      for (let i=9; i>0; i--) {
        if (top10ArrNums8[i].moves > info8.moves) {
          top10ArrNums8.splice(i,1,info8);
          break;
        }
      }
    } else {
      top10ArrNums8.push(info8);
    }
    top10ArrNums8.sort((a,b) => a.moves - b.moves);
    //console.log(top10ArrNums8);
    localStorage.setItem("nastasyma_top10list8", JSON.stringify(top10ArrNums8));
    results_list8.innerHTML = '';
    for (let i = 0; i<top10ArrNums8.length; i++) {
      const results_item = document.createElement('li');
      results_item.classList.add('results_item');
      results_item.textContent = `${top10ArrNums8[i].time} and ${top10ArrNums8[i].moves} moves.`
      results_list8.appendChild(results_item);
      localStorage.setItem('nastasyma_results_content8', results_list8.innerHTML);
    }
  }
  if (btn_44.classList.contains('btn_active')) {
    if (top10ArrNums15.length === 10 ) {
      for (let i=9; i>0; i--) {
        if (top10ArrNums15[i].moves > info15.moves) {
          top10ArrNums15.splice(i,1,info15);
          break;
        }
      }
    } else {
      top10ArrNums15.push(info15);
    }
    top10ArrNums15.sort((a,b) => a.moves - b.moves);
    //console.log(top10ArrNums15);
    localStorage.setItem("nastasyma_top10list15", JSON.stringify(top10ArrNums15));
    results_list15.innerHTML = '';
    for (let i = 0; i<top10ArrNums15.length; i++) {
      const results_item = document.createElement('li');
      results_item.classList.add('results_item');
      results_item.textContent = `${top10ArrNums15[i].time} and ${top10ArrNums15[i].moves} moves.`
      results_list15.appendChild(results_item);
      localStorage.setItem('nastasyma_results_content15', results_list15.innerHTML);
    }
  }
  if (btn_55.classList.contains('btn_active')) {
    if (top10ArrNums24.length === 10 ) {
      for (let i=9; i>0; i--) {
        if (top10ArrNums24[i].moves > info24.moves) {
          top10ArrNums24.splice(i,1,info24);
          break;
        }
      }
    } else {
      top10ArrNums24.push(info24);
    }
    top10ArrNums24.sort((a,b) => a.moves - b.moves);
    //console.log(top10ArrNums24);
    localStorage.setItem("nastasyma_top10list24", JSON.stringify(top10ArrNums24));
    results_list24.innerHTML = '';
    for (let i = 0; i<top10ArrNums24.length; i++) {
      const results_item = document.createElement('li');
      results_item.classList.add('results_item');
      results_item.textContent = `${top10ArrNums24[i].time} and ${top10ArrNums24[i].moves} moves.`
      results_list24.appendChild(results_item);
      localStorage.setItem('nastasyma_results_content24', results_list24.innerHTML);
    }
  }
  if (btn_66.classList.contains('btn_active')) {
    if (top10ArrNums35.length === 10 ) {
      for (let i=9; i>0; i--) {
        if (top10ArrNums35[i].moves > info35.moves) {
          top10ArrNums35.splice(i,1,info35);
          break;
        }
      }
    } else {
      top10ArrNums35.push(info35);
    }
    top10ArrNums35.sort((a,b) => a.moves - b.moves);
    //console.log(top10ArrNums35);
    localStorage.setItem("nastasyma_top10list35", JSON.stringify(top10ArrNums35));
    results_list35.innerHTML = '';
    for (let i = 0; i<top10ArrNums35.length; i++) {
      const results_item = document.createElement('li');
      results_item.classList.add('results_item');
      results_item.textContent = `${top10ArrNums35[i].time} and ${top10ArrNums35[i].moves} moves.`
      results_list35.appendChild(results_item);
      localStorage.setItem('nastasyma_results_content35', results_list35.innerHTML);
    }
  }
  if (btn_77.classList.contains('btn_active')) {
    if (top10ArrNums48.length === 10 ) {
      for (let i=9; i>0; i--) {
        if (top10ArrNums48[i].moves > info48.moves) {
          top10ArrNums48.splice(i,1,info48);
          break;
        }
      }
    } else {
      top10ArrNums48.push(info48);
    }
    top10ArrNums48.sort((a,b) => a.moves - b.moves);
    //console.log(top10ArrNums48);
    localStorage.setItem("nastasyma_top10list48", JSON.stringify(top10ArrNums48));
    results_list48.innerHTML = '';
    for (let i = 0; i<top10ArrNums48.length; i++) {
      const results_item = document.createElement('li');
      results_item.classList.add('results_item');
      results_item.textContent = `${top10ArrNums48[i].time} and ${top10ArrNums48[i].moves} moves.`
      results_list48.appendChild(results_item);
      localStorage.setItem('nastasyma_results_content48', results_list48.innerHTML);
    }
  }
  if (btn_88.classList.contains('btn_active')) {
    if (top10ArrNums63.length === 10 ) {
      for (let i=9; i>0; i--) {
        if (top10ArrNums63[i].moves > info63.moves) {
          top10ArrNums63.splice(i,1,info63);
          break;
        }
      }
    } else {
      top10ArrNums63.push(info63);
    }
    top10ArrNums63.sort((a,b) => a.moves - b.moves);
    //console.log(top10ArrNums63);
    localStorage.setItem("nastasyma_top10list63", JSON.stringify(top10ArrNums63));
    results_list63.innerHTML = '';
    for (let i = 0; i<top10ArrNums63.length; i++) {
      const results_item = document.createElement('li');
      results_item.classList.add('results_item');
      results_item.textContent = `${top10ArrNums63[i].time} and ${top10ArrNums63[i].moves} moves.`
      results_list63.appendChild(results_item);
      localStorage.setItem('nastasyma_results_content63', results_list63.innerHTML);
    }
  }
  restartGame();
});
save_btn.addEventListener('click', () => {
  saved_popup.classList.add('popup_active');
  hidden_wrapper.classList.add('hidden_wrapper_active');
  localStorage.setItem('nastasyma_countermoves', counterMoves);
  localStorage.setItem('nastasyma_countermoves_indicator', counter_moves.textContent);
  localStorage.setItem('nastasyma_sec_indicator', sec.textContent);
  localStorage.setItem('nastasyma_mins_indicator', mins.textContent);
  localStorage.setItem('nastasyma_hours_indicator', hours.textContent);
  localStorage.setItem("nastasyma_array3", JSON.stringify(arrayNums3));
  localStorage.setItem("nastasyma_array8", JSON.stringify(arrayNums8));
  localStorage.setItem("nastasyma_array15", JSON.stringify(arrayNums15));
  localStorage.setItem("nastasyma_array24", JSON.stringify(arrayNums24));
  localStorage.setItem("nastasyma_array35", JSON.stringify(arrayNums35));
  localStorage.setItem("nastasyma_array48", JSON.stringify(arrayNums48));
  localStorage.setItem("nastasyma_array63", JSON.stringify(arrayNums63));
});
load_btn.addEventListener('click', () => {
  loaded_popup.classList.add('popup_active');
  hidden_wrapper.classList.add('hidden_wrapper_active');
  if (localStorage.getItem('nastasyma_countermoves'))
  counterMoves = localStorage.getItem('nastasyma_countermoves');
  if (localStorage.getItem('nastasyma_countermoves_indicator'))
  counter_moves.textContent = localStorage.getItem('nastasyma_countermoves_indicator');
  if (localStorage.getItem('nastasyma_sec_indicator'))
  sec.textContent = localStorage.getItem('nastasyma_sec_indicator');
  if (localStorage.getItem('nastasyma_mins_indicator'))
  mins.textContent = localStorage.getItem('nastasyma_mins_indicator');
  if (localStorage.getItem('nastasyma_hours_indicator'))
  hours.textContent = localStorage.getItem('nastasyma_hours_indicator');
  if (localStorage.getItem('nastasyma_array3'))
    arrayNums3 = JSON.parse(localStorage.getItem("nastasyma_array3"));
  if (localStorage.getItem('nastasyma_array8'))
    arrayNums8 = JSON.parse(localStorage.getItem("nastasyma_array8"));
  if (localStorage.getItem('nastasyma_array15'))
    arrayNums15 = JSON.parse(localStorage.getItem("nastasyma_array15"));
  if (localStorage.getItem('nastasyma_array24'))
    arrayNums24 = JSON.parse(localStorage.getItem("nastasyma_array24"));
  if (localStorage.getItem('nastasyma_array35'))
    arrayNums35 = JSON.parse(localStorage.getItem("nastasyma_array35"));
  if (localStorage.getItem('nastasyma_array48'))
    arrayNums48 = JSON.parse(localStorage.getItem("nastasyma_array48"));
  if (localStorage.getItem('nastasyma_array63'))
    arrayNums63 = JSON.parse(localStorage.getItem("nastasyma_array63"));
  if (arrayNums3.length !== 0) {
    setGame3();
    change_size.textContent = '2x2';
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    btn_22.classList.add('btn_active');
  }
  if (arrayNums8.length !== 0) {
    setGame8();
    change_size.textContent = '3x3';
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    btn_33.classList.add('btn_active');
  }
  if (arrayNums15.length !== 0) {
    setGame15();
    change_size.textContent = '4x4';
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    btn_44.classList.add('btn_active');
  }
  if (arrayNums24.length !== 0) {
    setGame24();
    change_size.textContent = '5x5';
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    btn_55.classList.add('btn_active');
  }
  if (arrayNums35.length !== 0) {
    setGame35();
    change_size.textContent = '6x6';
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    btn_66.classList.add('btn_active');
  }
  if (arrayNums48.length !== 0) {
    setGame48();
    change_size.textContent = '7x7';
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    btn_77.classList.add('btn_active');
  }
  if (arrayNums63.length !== 0) {
    setGame63();
    change_size.textContent = '8x8';
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    btn_88.classList.add('btn_active');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('nastasyma_results_content3'))
  results_list3.innerHTML = localStorage.getItem('nastasyma_results_content3');
  if (localStorage.getItem('nastasyma_top10list3'))
  top10ArrNums3 = JSON.parse(localStorage.getItem("nastasyma_top10list3"));
  if (localStorage.getItem('nastasyma_results_content8'))
  results_list8.innerHTML = localStorage.getItem('nastasyma_results_content8');
  if (localStorage.getItem('nastasyma_top10list8'))
  top10ArrNums8 = JSON.parse(localStorage.getItem("nastasyma_top10list8"));
  if (localStorage.getItem('nastasyma_results_content15'))
  results_list15.innerHTML = localStorage.getItem('nastasyma_results_content15');
  if (localStorage.getItem('nastasyma_top10list15'))
  top10ArrNums15 = JSON.parse(localStorage.getItem("nastasyma_top10list15"));
  if (localStorage.getItem('nastasyma_results_content24'))
  results_list24.innerHTML = localStorage.getItem('nastasyma_results_content24');
  if (localStorage.getItem('nastasyma_top10list24'))
  top10ArrNums24 = JSON.parse(localStorage.getItem("nastasyma_top10list24"));
  if (localStorage.getItem('nastasyma_results_content35'))
  results_list35.innerHTML = localStorage.getItem('nastasyma_results_content35');
  if (localStorage.getItem('nastasyma_top10list35'))
  top10ArrNums35 = JSON.parse(localStorage.getItem("nastasyma_top10list35"));
  if (localStorage.getItem('nastasyma_results_content48'))
  results_list48.innerHTML = localStorage.getItem('nastasyma_results_content48');
  if (localStorage.getItem('nastasyma_top10list48'))
  top10ArrNums48 = JSON.parse(localStorage.getItem("nastasyma_top10list48"));
  if (localStorage.getItem('nastasyma_results_content63'))
  results_list63.innerHTML = localStorage.getItem('nastasyma_results_content63');
  if (localStorage.getItem('nastasyma_top10list63'))
  top10ArrNums63 = JSON.parse(localStorage.getItem("nastasyma_top10list63"));
})