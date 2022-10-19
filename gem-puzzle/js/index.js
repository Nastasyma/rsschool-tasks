const body = document.querySelector('body');

function sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function createHeader() {
  const header = document.createElement('header');
  const header_container = document.createElement('div');
  header_container.classList.add('header_container');
  const btn1 = document.createElement('button');
  btn1.classList.add('restart_btn');
  btn1.textContent = 'Restart game';
  const btn2 = document.createElement('button');
  btn2.classList.add('pause_btn');
  btn2.textContent = 'Pause';
  const btn3 = document.createElement('button');
  btn3.classList.add('save_btn');
  btn3.textContent = 'Save';
  const btn4 = document.createElement('button');
  btn4.classList.add('results_btn');
  btn4.textContent = 'Results';
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
  span5.textContent = 'Frame size:';
  const span6 = document.createElement('span');
  span6.classList.add('change_size');
  span6.textContent = '4x4';
  current_field_size.appendChild(span5);
  current_field_size.appendChild(span6);
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
const hidden_wrapper = document.querySelector('.hidden_wrapper');
const restart_btn = document.querySelector('.restart_btn');
const change_size = document.querySelector('.change_size');

size_btns.forEach(el => {
  el.addEventListener('click', (e) => {
    for (let i=0; i<size_btns.length; i++) {
      size_btns[i].classList.remove('btn_active');
    }
    e.target.classList.add('btn_active');
  })
})

let counterMoves = 0;
const counter_moves = document.querySelector('.counter_moves');
const mins = document.querySelector('.mins');
const sec = document.querySelector('.sec');
const hours = document.querySelector('.hours');

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

const save_btn = document.querySelector('.save_btn');
const btn_22 = document.querySelector('.field_2_2');
const btn_33 = document.querySelector('.field_3_3');
const btn_44 = document.querySelector('.field_4_4');
const btn_55 = document.querySelector('.field_5_5');
const btn_66 = document.querySelector('.field_6_6');
const btn_77 = document.querySelector('.field_7_7');
const btn_88 = document.querySelector('.field_8_8');

function setGame3() {
  canvas.width  = 300;
  canvas.height = 300;
  arrayNums3 = [0, 1, 2, 3];
  sort(arrayNums3);
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
    }
    for (let i = 0; i<=3; i++) {
      drawCell(i, arrayNums3[i])
    }
    if (arrayNums3[click + 2] === 0) {
      arrayNums3[click + 2] = arrayNums3[click];
      arrayNums3[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=3; i++) {
      drawCell(i, arrayNums3[i])
    }
    if (arrayNums3[click - 1] === 0 && click !== 2) {
      arrayNums3[click - 1] = arrayNums3[click];
      arrayNums3[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=3; i++) {
      drawCell(i, arrayNums3[i])
    }
    if (arrayNums3[click + 1] === 0 && click !== 1) {
      arrayNums3[click + 1] = arrayNums3[click];
      arrayNums3[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=3; i++) {
      drawCell(i, arrayNums3[i]);
    }
    //console.log(arrayNums3);
    for (let i=0; i<arrayNums3.length; i++) {
      if (arrayNums3[0] === 1
        && arrayNums3[1] === 2
        && arrayNums3[2] === 3
        && arrayNums3[3] === 0) {
        victory_popup.classList.add('popup_active');
        victory_popup.textContent = `Hooray! You solved the puzzle in ${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
        hidden_wrapper.classList.add('hidden_wrapper_active');
      }
    }
  });
}
function setGame8() {
  canvas.width  = 300;
  canvas.height = 300;
  arrayNums8 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  sort(arrayNums8);
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
    }
    for (let i = 0; i<=8; i++) {
      drawCell(i, arrayNums8[i])
    }
    if (arrayNums8[click + 3] === 0) {
      arrayNums8[click + 3] = arrayNums8[click];
      arrayNums8[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=8; i++) {
      drawCell(i, arrayNums8[i])
    }
    if (arrayNums8[click - 1] === 0 && click !== 3 && click !== 6) {
      arrayNums8[click - 1] = arrayNums8[click];
      arrayNums8[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=8; i++) {
      drawCell(i, arrayNums8[i])
    }
    if (arrayNums8[click + 1] === 0 && click !== 2 && click !== 5) {
      arrayNums8[click + 1] = arrayNums8[click];
      arrayNums8[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=8; i++) {
      drawCell(i, arrayNums8[i])
    }
    //console.log(arrayNums8);
    if (arrayNums8[0] === 1
      && arrayNums8[1] === 2
      && arrayNums8[2] === 3
      && arrayNums8[3] === 4
      && arrayNums8[4] === 5
      && arrayNums8[5] === 6
      && arrayNums8[6] === 7
      && arrayNums8[7] === 8
      && arrayNums8[8] === 0) {
      victory_popup.classList.add('popup_active');
      victory_popup.textContent = `Hooray! You solved the puzzle in ${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
      hidden_wrapper.classList.add('hidden_wrapper_active');
    }
  });
}
function setGame15() {
  canvas.width  = 300;
  canvas.height = 300;
  arrayNums15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  sort(arrayNums15);
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
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click + 4] === 0) {
      arrayNums15[click + 4] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click - 1] === 0 && click !== 4 && click !== 8 && click !== 12) {
      arrayNums15[click - 1] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click + 1] === 0 && click !== 3 && click !== 7 && click !== 11) {
      arrayNums15[click + 1] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      counter_moves.textContent = counterMoves;
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
      //console.log(arrayNums15);
      if (arrayNums15[0] === 1
        && arrayNums15[1] === 2
        && arrayNums15[2] === 3
        && arrayNums15[3] === 4
        && arrayNums15[4] === 5
        && arrayNums15[5] === 6
        && arrayNums15[6] === 7
        && arrayNums15[7] === 8
        && arrayNums15[8] === 9
        && arrayNums15[9] === 10
        && arrayNums15[10] === 11
        && arrayNums15[11] === 12
        && arrayNums15[12] === 13
        && arrayNums15[13] === 14
        && arrayNums15[14] === 15
        && arrayNums15[15] === 0) {
        victory_popup.classList.add('popup_active');
        victory_popup.textContent = `Hooray! You solved the puzzle in ${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
        hidden_wrapper.classList.add('hidden_wrapper_active');
      }
  });

/*let isMove = false;
let x = 75;
let y = 75;

function myMove(e){
  if (isMove){
    x = e.offsetX - canvas.offsetLeft;
    y = e.offsetY - canvas.offsetTop;
  }
}
function myDown(e){
  if (e.offsetX < x + 15 + canvas.offsetLeft && e.offsetX > x - 15 +
  canvas.offsetLeft && e.pageY < y + 15 + canvas.offsetTop &&
  e.offsetY > y -15 + canvas.offsetTop) {
    x = e.offsetX - canvas.offsetLeft;
    y = e.offsetY - canvas.offsetTop;
    isMove = true;
  canvas.onmousemove = myMove;
  }
  }

function myUp(){
  isMove = false;
  canvas.onmousemove = null;
}

canvas.onmousedown = myDown;
canvas.onmouseup = myUp;*/
}
setGame15();

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
}
btn_22.addEventListener('click', () => {
  reset();
  setGame3();
  change_size.textContent = '2x2';
});
btn_33.addEventListener('click', () => {
  reset();
  setGame8();
  change_size.textContent = '3x3';
});
btn_44.addEventListener('click', () => {
  reset();
  setGame15();
  change_size.textContent = '4x4';
});
btn_55.addEventListener('click', () => {
  change_size.textContent = '5x5';
});
btn_66.addEventListener('click', () => {
  change_size.textContent = '6x6';
});
btn_77.addEventListener('click', () => {
  change_size.textContent = '7x7';
});
btn_88.addEventListener('click', () => {
  change_size.textContent = '8x8';
});

function restartGame() {
  if(btn_22.classList.contains('btn_active')) {
    reset();
    setGame3();
  }
  if(btn_33.classList.contains('btn_active')) {
    reset();
    setGame8();
  }
  if(btn_44.classList.contains('btn_active')) {
    reset();
    setGame15();
  }
}
restart_btn.addEventListener('click', restartGame);

hidden_wrapper.addEventListener('click', () => {
  hidden_wrapper.classList.remove('hidden_wrapper_active');
  victory_popup.classList.remove('popup_active');
  restartGame();
})
