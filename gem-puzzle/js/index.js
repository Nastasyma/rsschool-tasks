const body = document.querySelector('body');

function createHeader() {
  const header = document.createElement('header');
  const header_container = document.createElement('div');
  header_container.classList.add('header_container');
  const btn1 = document.createElement('button');
  btn1.textContent = 'Shuffle and start';
  const btn2 = document.createElement('button');
  btn2.textContent = 'Stop';
  const btn3 = document.createElement('button');
  btn3.textContent = 'Save';
  const btn4 = document.createElement('button');
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
  const span4_1 = document.createElement('span');
  span4_1.textContent = ':';
  time_wrapper.appendChild(span3);
  time_wrapper.appendChild(span4);
  time_wrapper.appendChild(span4_1);
  time_wrapper.appendChild(span4_2);
  const game_field = document.createElement('div');
  game_field.classList.add('game_field');
  const canvas = document.createElement('canvas');
  canvas.setAttribute("id", "canvas");
  game_field.appendChild(canvas);
  main_container.appendChild(game_field);
  const current_field_size = document.createElement('div');
  current_field_size.classList.add('current_field_size');
  main_container.appendChild(current_field_size);
  const span5 = document.createElement('span');
  span5.textContent = 'Frame size:';
  const span6 = document.createElement('span');
  span6.textContent = '4x4';
  current_field_size.appendChild(span5);
  current_field_size.appendChild(span6);
  main.appendChild(main_container);
  body.append(main);
}
createMain();

function createFooter() {
  const footer = document.createElement('footer');
  const footer_container = document.createElement('div');
  footer_container.classList.add('footer_container');
  const span1 = document.createElement('span');
  span1.textContent = 'Other sizes:';
  footer_container.appendChild(span1);
  const sizes_wrapper = document.createElement('div');
  sizes_wrapper.classList.add('sizes_wrapper');
  footer_container.appendChild(sizes_wrapper);
  const btn1 = document.createElement('button');
  btn1.textContent = '3x3';
  const btn2 = document.createElement('button');
  btn2.textContent = '4x4';
  const btn3 = document.createElement('button');
  btn3.textContent = '5x5';
  const btn4 = document.createElement('button');
  btn4.textContent = '6x6';
  const btn5 = document.createElement('button');
  btn5.textContent = '7x7';
  const btn6 = document.createElement('button');
  btn6.textContent = '8x8';
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

let counterMoves = 0;
const counter_moves = document.querySelector('.counter_moves');
function drawMoves () {
  counter_moves.textContent = counterMoves;
}
drawMoves();

const mins = document.querySelector('.mins');
const sec = document.querySelector('.sec');

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
  }
  setTimeout(drawTimer, 1000);
}
drawTimer();

const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function setGame15() {
  canvas.width  = 400;
  canvas.height = 400;
  let arrayNums15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  sort(arrayNums15);
  //console.log(arrayNums15);

  const drawBox = function(x, y, value) {
    context.fillStyle = "black";
    context.fillRect(x, y, 100, 100);
    if (value === 0) {
      context.fillStyle = "bisque";
    } else {
      context.fillStyle = "darkblue";
    }
    context.fillRect(x + 5, y + 5, 90, 90)
    context.font = "52px Arial";
    context.fillStyle = "bisque";
    if (value < 10) {
      context.fillText(value, x + 35, y + 70);
    } else {
      context.fillText(value, x + 15, y + 70);
    }
  }

  const drawCell = function(position, value) {
    if(position === 0) { drawBox(0, 0, value); }
    else if (position === 1) { drawBox(100, 0, value); }
    else if (position === 2) { drawBox(200, 0, value); }
    else if (position === 3) { drawBox(300, 0, value); }
    else if (position === 4) { drawBox(0, 100, value); }
    else if (position === 5) { drawBox(100, 100, value); }
    else if (position === 6) { drawBox(200, 100, value); }
    else if (position === 7) { drawBox(300, 100, value); }
    else if (position === 8) { drawBox(0, 200, value); }
    else if (position === 9) { drawBox(100, 200, value); }
    else if (position === 10) { drawBox(200, 200, value); }
    else if (position === 11) { drawBox(300, 200, value); }
    else if (position === 12) { drawBox(0, 300, value); }
    else if (position === 13) { drawBox(100, 300, value); }
    else if (position === 14) { drawBox(200, 300, value); }
    else if (position === 15) { drawBox(300, 300, value); }
  }

  for (let i = 0; i<=15; i++) {
    drawCell(i, arrayNums15[i])
  }

  const checkClientX = function(e) {
    if (e < 100) { return 1; }
    if (e < 200) { return 2; }
    if (e < 300) { return 3; }
    if (e < 400) { return 4; }
  }

  canvas.addEventListener("click", function(e) {
    //console.log(e);
    let click;
    let check = checkClientX(e.offsetX);
    if (e.offsetY < 100) {
      switch(check) {
        case 1: click = 0; break;
        case 2: click = 1; break;
        case 3: click = 2; break;
        case 4: click = 3; break;
      }
    }
    if (e.offsetY > 100 && e.offsetY < 200) {
      switch(check) {
        case 1: click = 4; break;
        case 2: click = 5; break;
        case 3: click = 6; break;
        case 4: click = 7; break;
      }
    }
    if (e.offsetY > 200 && e.offsetY < 300) {
      switch(check) {
        case 1: click = 8; break;
        case 2: click = 9; break;
        case 3: click = 10; break;
        case 4: click = 11; break;
      }
    }
    if (e.offsetY > 300 && e.offsetY < 400) {
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
      drawMoves (counterMoves);
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click + 4] === 0) {
      arrayNums15[click + 4] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      drawMoves (counterMoves);
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click - 1] === 0 && click !== 4 && click !== 8 && click !== 12) {
      arrayNums15[click - 1] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      drawMoves (counterMoves);
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15[click + 1] === 0 && click !== 3 && click !== 7 && click !== 11) {
      arrayNums15[click + 1] = arrayNums15[click];
      arrayNums15[click] = 0;
      counterMoves++;
      drawMoves (counterMoves);
    }
    for (let i = 0; i<=15; i++) {
      drawCell(i, arrayNums15[i])
    }
    if (arrayNums15 === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0] ) {
      alert("Win!!")
    }
  });

}
setGame15();
