const body = document.querySelector('body');

function createSounds () {
  const audio = document.createElement('audio');
  audio.classList.add('audio');
  audio.src = "assets/click.mp3";
  body.append(audio);
}
createSounds ();

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
const audio = document.querySelector('.audio');
const volume_btn = document.querySelector('.volume_btn');

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
    //console.log(arrayNums3);
    for (let i=0; i<arrayNums3.length; i++) {
      if (arrayNums3[0] === 1
        && arrayNums3[1] === 2
        && arrayNums3[2] === 3
        && arrayNums3[3] === 0) {
        victory_popup.classList.add('popup_active');
        victory_popup.textContent = `Hooray! You solved the puzzle in ${hours.textContent}:${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
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
      victory_popup.textContent = `Hooray! You solved the puzzle in ${hours.textContent}:${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
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
        victory_popup.textContent = `Hooray! You solved the puzzle in ${hours.textContent}:${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
        hidden_wrapper.classList.add('hidden_wrapper_active');
      }
  });
}
setGame15();
function setGame24() {
  canvas.width  = 300;
  canvas.height = 300;
  arrayNums24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                  17, 18, 19, 20, 21, 22, 23, 24];
  sort(arrayNums24);
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
      //console.log(arrayNums24);
      if (arrayNums24[0] === 1
        && arrayNums24[1] === 2
        && arrayNums24[2] === 3
        && arrayNums24[3] === 4
        && arrayNums24[4] === 5
        && arrayNums24[5] === 6
        && arrayNums24[6] === 7
        && arrayNums24[7] === 8
        && arrayNums24[8] === 9
        && arrayNums24[9] === 10
        && arrayNums24[10] === 11
        && arrayNums24[11] === 12
        && arrayNums24[12] === 13
        && arrayNums24[13] === 14
        && arrayNums24[14] === 15
        && arrayNums24[15] === 16
        && arrayNums24[15] === 17
        && arrayNums24[17] === 18
        && arrayNums24[18] === 19
        && arrayNums24[19] === 20
        && arrayNums24[20] === 21
        && arrayNums24[21] === 22
        && arrayNums24[22] === 23
        && arrayNums24[23] === 24
        && arrayNums24[24] === 0) {
        victory_popup.classList.add('popup_active');
        victory_popup.textContent = `Hooray! You solved the puzzle in ${hours.textContent}:${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
        hidden_wrapper.classList.add('hidden_wrapper_active');
      }
  });
}
function setGame35() {
  canvas.width  = 300;
  canvas.height = 300;
  arrayNums35 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
  sort(arrayNums35);
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
      //console.log(arrayNums35);
      if (arrayNums35[0] === 1
        && arrayNums35[1] === 2
        && arrayNums35[2] === 3
        && arrayNums35[3] === 4
        && arrayNums35[4] === 5
        && arrayNums35[5] === 6
        && arrayNums35[6] === 7
        && arrayNums35[7] === 8
        && arrayNums35[8] === 9
        && arrayNums35[9] === 10
        && arrayNums35[10] === 11
        && arrayNums35[11] === 12
        && arrayNums35[12] === 13
        && arrayNums35[13] === 14
        && arrayNums35[14] === 15
        && arrayNums35[15] === 16
        && arrayNums35[15] === 17
        && arrayNums35[17] === 18
        && arrayNums35[18] === 19
        && arrayNums35[19] === 20
        && arrayNums35[20] === 21
        && arrayNums35[21] === 22
        && arrayNums35[22] === 23
        && arrayNums35[23] === 24
        && arrayNums35[24] === 25
        && arrayNums35[25] === 26
        && arrayNums35[26] === 27
        && arrayNums35[27] === 28
        && arrayNums35[28] === 29
        && arrayNums35[29] === 30
        && arrayNums35[30] === 31
        && arrayNums35[31] === 32
        && arrayNums35[32] === 33
        && arrayNums35[33] === 34
        && arrayNums35[34] === 35
        && arrayNums35[35] === 0) {
        victory_popup.classList.add('popup_active');
        victory_popup.textContent = `Hooray! You solved the puzzle in ${hours.textContent}:${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
        hidden_wrapper.classList.add('hidden_wrapper_active');
      }
  });
}
function setGame48() {
  canvas.width  = 301;
  canvas.height = 301;
  arrayNums48 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
  sort(arrayNums48);
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
      //console.log(arrayNums48);
      if (arrayNums48[0] === 1
        && arrayNums48[1] === 2
        && arrayNums48[2] === 3
        && arrayNums48[3] === 4
        && arrayNums48[4] === 5
        && arrayNums48[5] === 6
        && arrayNums48[6] === 7
        && arrayNums48[7] === 8
        && arrayNums48[8] === 9
        && arrayNums48[9] === 10
        && arrayNums48[10] === 11
        && arrayNums48[11] === 12
        && arrayNums48[12] === 13
        && arrayNums48[13] === 14
        && arrayNums48[14] === 15
        && arrayNums48[15] === 16
        && arrayNums48[15] === 17
        && arrayNums48[17] === 18
        && arrayNums48[18] === 19
        && arrayNums48[19] === 20
        && arrayNums48[20] === 21
        && arrayNums48[21] === 22
        && arrayNums48[22] === 23
        && arrayNums48[23] === 24
        && arrayNums48[24] === 25
        && arrayNums48[25] === 26
        && arrayNums48[26] === 27
        && arrayNums48[27] === 28
        && arrayNums48[28] === 29
        && arrayNums48[29] === 30
        && arrayNums48[30] === 31
        && arrayNums48[31] === 32
        && arrayNums48[32] === 33
        && arrayNums48[33] === 34
        && arrayNums48[34] === 35
        && arrayNums48[35] === 36
        && arrayNums48[36] === 37
        && arrayNums48[37] === 38
        && arrayNums48[38] === 39
        && arrayNums48[39] === 40
        && arrayNums48[40] === 41
        && arrayNums48[41] === 42
        && arrayNums48[42] === 43
        && arrayNums48[43] === 44
        && arrayNums48[44] === 45
        && arrayNums48[45] === 46
        && arrayNums48[46] === 47
        && arrayNums48[47] === 48
        && arrayNums48[48] === 0) {
        victory_popup.classList.add('popup_active');
        victory_popup.textContent = `Hooray! You solved the puzzle in ${hours.textContent}:${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
        hidden_wrapper.classList.add('hidden_wrapper_active');
      }
  });
}
function setGame63() {
  canvas.width  = 300;
  canvas.height = 300;
  arrayNums63 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
                58, 59, 60, 61, 62, 63];
  sort(arrayNums63);
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
      //console.log(arrayNums48);
      if (arrayNums48[0] === 1
        && arrayNums48[1] === 2
        && arrayNums48[2] === 3
        && arrayNums48[3] === 4
        && arrayNums48[4] === 5
        && arrayNums48[5] === 6
        && arrayNums48[6] === 7
        && arrayNums48[7] === 8
        && arrayNums48[8] === 9
        && arrayNums48[9] === 10
        && arrayNums48[10] === 11
        && arrayNums48[11] === 12
        && arrayNums48[12] === 13
        && arrayNums48[13] === 14
        && arrayNums48[14] === 15
        && arrayNums48[15] === 16
        && arrayNums48[15] === 17
        && arrayNums48[17] === 18
        && arrayNums48[18] === 19
        && arrayNums48[19] === 20
        && arrayNums48[20] === 21
        && arrayNums48[21] === 22
        && arrayNums48[22] === 23
        && arrayNums48[23] === 24
        && arrayNums48[24] === 25
        && arrayNums48[25] === 26
        && arrayNums48[26] === 27
        && arrayNums48[27] === 28
        && arrayNums48[28] === 29
        && arrayNums48[29] === 30
        && arrayNums48[30] === 31
        && arrayNums48[31] === 32
        && arrayNums48[32] === 33
        && arrayNums48[33] === 34
        && arrayNums48[34] === 35
        && arrayNums48[35] === 36
        && arrayNums48[36] === 37
        && arrayNums48[37] === 38
        && arrayNums48[38] === 39
        && arrayNums48[39] === 40
        && arrayNums48[40] === 41
        && arrayNums48[41] === 42
        && arrayNums48[42] === 43
        && arrayNums48[43] === 44
        && arrayNums48[44] === 45
        && arrayNums48[45] === 46
        && arrayNums48[46] === 47
        && arrayNums48[47] === 48
        && arrayNums48[48] === 0) {
        victory_popup.classList.add('popup_active');
        victory_popup.textContent = `Hooray! You solved the puzzle in ${hours.textContent}:${mins.textContent}:${sec.textContent} and ${counter_moves.textContent} moves!`;
        hidden_wrapper.classList.add('hidden_wrapper_active');
      }
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
  reset();
  setGame24();
  change_size.textContent = '5x5';
});
btn_66.addEventListener('click', () => {
  reset();
  setGame35();
  change_size.textContent = '6x6';
});
btn_77.addEventListener('click', () => {
  reset();
  setGame48();
  change_size.textContent = '7x7';
});
btn_88.addEventListener('click', () => {
  reset();
  setGame63();
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
  if(btn_55.classList.contains('btn_active')) {
    reset();
    setGame24();
  }
  if(btn_66.classList.contains('btn_active')) {
    reset();
    setGame35();
  }
  if(btn_77.classList.contains('btn_active')) {
    reset();
    setGame48();
  }
  if(btn_88.classList.contains('btn_active')) {
    reset();
    setGame63();
  }
}
restart_btn.addEventListener('click', restartGame);

hidden_wrapper.addEventListener('click', () => {
  hidden_wrapper.classList.remove('hidden_wrapper_active');
  victory_popup.classList.remove('popup_active');
  restartGame();
})

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