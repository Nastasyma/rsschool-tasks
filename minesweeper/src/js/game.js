/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import shuffle from './helper.js';

const emptyCellsArr = [];
const bombsCellsArr = [];
let cellsArrSorted = [];
const cellsArray = [];
const cellsMatrix = [];
let gameOver = true;
let timeHandler;
let size = 10;
let isPlay = true;
const clickSound = new Audio();
const flagSound = new Audio();
const loseSound = new Audio();
const winSound = new Audio();

function reset() {
  emptyCellsArr.length = 0;
  bombsCellsArr.length = 0;
  cellsArrSorted.length = 0;
}
function drawTimer() {
  const timer = document.querySelector('.game__timer-time');
  function setZero(n) {
    if (n < 10) return `00${n}`;
    if (n < 100) return `0${n}`;
    return n;
  }
  if (!gameOver) {
    timer.textContent = setZero(parseInt(timer.textContent, 10) + 1);
  }
  timeHandler = window.setTimeout(drawTimer, 1000);
}
function setSound() {
  clickSound.src = 'assets/audio/click.mp3';
  flagSound.src = 'assets/audio/set-flag.mp3';
  loseSound.src = 'assets/audio/game-over-mario.mp3';
  winSound.src = 'assets/audio/victory-mario.mp3';
}

function createFieldCells(width) {
  cellsArray.length = 0;
  cellsMatrix.length = 0;
  const field = document.querySelector('.game__field');
  field.innerHTML = '';
  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < width; y += 1) {
      const gameCell = document.createElement('button');
      gameCell.className = 'game__cell non-clicked-cell easy gray-theme';
      gameCell.id = `${x.toString()}-${y.toString()}`;
      field.append(gameCell);
      cellsArray.push(gameCell);
    }
  }
  for (let i = 0; i < cellsArray.length; i += width) {
    cellsMatrix.push(cellsArray.slice(i, i + width));
  }
}
function createBombs(width) {
  reset();
  const bombsInput = document.querySelector('.footer__settings-bombs');
  const bombs = bombsInput.value;
  const cellsNoClick = document.querySelectorAll('.non-clicked-cell');
  for (let i = 0; i < bombs; i += 1) {
    bombsCellsArr.push('bomb');
  }
  const emptyCell = width * width - bombs - 1;
  for (let i = 0; i < emptyCell; i += 1) {
    emptyCellsArr.push('empty-cell');
  }
  cellsArrSorted = bombsCellsArr.concat(emptyCellsArr);
  shuffle(cellsArrSorted);
  for (let i = 0; i < cellsNoClick.length; i += 1) {
    cellsNoClick[i].classList.remove('non-clicked-cell');
    cellsNoClick[i].classList.add(cellsArrSorted[i]);
  }
}

function ckeckCells(width) {
  const cells = document.querySelectorAll('.game__cell');
  for (let i = 0; i < cells.length; i += 1) {
    let count = 0;
    const isLeft = (i % width === 0);
    const isRight = (i % width === width - 1);
    if (cells[i].classList.contains('empty-cell') || cells[i].classList.contains('first-clicked-cell')) {
      if (!isLeft) {
        if (i > 0 && cells[i - 1].classList.contains('bomb')) count += 1;
        if (i >= (width + 1) && cells[i - 1 - width].classList.contains('bomb')) count += 1;
        if (i < (width * width - width) && cells[i - 1 + width].classList.contains('bomb')) count += 1;
      }
      if (!isRight) {
        if (i > (width - 1) && cells[i + 1 - width].classList.contains('bomb')) count += 1;
        if (i <= (width * width - 2) && cells[i + 1].classList.contains('bomb')) count += 1;
        if (i <= (width * width - width - 2) && cells[i + 1 + width].classList.contains('bomb')) count += 1;
      }
      if (i >= width && cells[i - width].classList.contains('bomb')) count += 1;
      if (i <= (width * width - width - 1) && cells[i + width].classList.contains('bomb')) count += 1;
      cells[i].setAttribute('data-count', count);
      cells[i].classList.remove('empty-cell');
      cells[i].classList.add(`cell-${count}`);
      // cells[i].textContent = count;
      // if (count !== 0) {
      //   cells[i].classList.add('numbered');
      // }
      // cells[i].innerHTML = cells[i].id;
    }
  }
}
function revealCell(x, y) {
  if (x < 0 || y < 0 || x >= size || y >= size) return;
  if (cellsMatrix[x][y].classList.contains('checked')) return;
  if (cellsMatrix[x][y].classList.contains('bomb')) return;
  if (cellsMatrix[x][y].classList.contains('flag')) return;

  cellsMatrix[x][y].classList.add('checked');
  const { count } = cellsMatrix[x][y].dataset;
  if (count !== '0' && count !== undefined) {
    cellsMatrix[x][y].textContent = count;
  } else {
    revealCell(x - 1, y - 1);
    revealCell(x - 1, y);
    revealCell(x - 1, y + 1);
    revealCell(x, y - 1);
    revealCell(x, y + 1);
    revealCell(x + 1, y - 1);
    revealCell(x + 1, y);
    revealCell(x + 1, y + 1);
  }
}
function clickOnCell() {
  const cells = document.querySelectorAll('.game__cell');
  const gameMovies = document.querySelector('.game__movies-count');
  let movies = 0;
  cells.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (!e.target.classList.contains('checked')) {
        if (isPlay) {
          clickSound.play();
        }
      }
      if (el.classList.contains('flag')) return;
      if (el.classList.contains('checked')) return;
      // const x = +e.target.id.slice(0, 1);
      // const y = +e.target.id.slice(1, 2);
      const position = el.id.split('-');
      const x = parseInt(position[0], 10);
      const y = parseInt(position[1], 10);
      console.log(x, y);
      if (gameMovies.textContent === '000') {
        drawTimer();
        el.classList.remove('non-clicked-cell');
        el.classList.add('first-clicked-cell');
        createBombs(size);
        ckeckCells(size);
        gameOver = false;
        if (el.classList.contains('cell-0')) {
          revealCell(x, y);
        }
      }
      const { count } = el.dataset;
      if (count !== '0' && count !== undefined) {
        if (!el.classList.contains('flag')) {
          el.textContent = count;
        }
      }
      if (el.classList.contains('cell-0')) {
        revealCell(x, y);
      } else if (!el.classList.contains('flag')) {
        el.classList.add('checked');
      }
      movies += 1;
      gameMovies.textContent = movies.toString().padStart(3, 0);
      if (el.classList.contains('bomb')) {
        console.log('Game over!!');
        gameOver = true;
        if (isPlay) {
          loseSound.play();
        }
        cells.forEach((cell) => {
          cell.classList.add('checked');
          cell.classList.remove('flag');
          const count2 = cell.dataset.count;
          if (count2 !== '0' && count2 !== undefined) {
            cell.textContent = count2;
          }
        });
        const bombCells = document.querySelectorAll('.bomb');
        bombCells.forEach((cell) => {
          cell.classList.add('game-over');
        });
      }
      if (document.querySelectorAll('.checked').length === (cells.length - document.querySelector('.footer__settings-bombs').value)) {
        console.log('Victory!!');
        gameOver = true;
        if (isPlay) {
          winSound.play();
        }
      }
    });
  });
}
function setFlag() {
  const cells = document.querySelectorAll('.game__cell');
  const bombsCount = document.querySelector('.game__bombs-count');
  const bombsInput = document.querySelector('.footer__settings-bombs');
  const movies = document.querySelector('.game__movies-count');
  let bombs = bombsInput.value;
  cells.forEach((el) => {
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (movies.textContent !== '000') {
        if (!e.target.classList.contains('checked')) {
          if (isPlay) {
            flagSound.play();
          }
          e.target.classList.toggle('flag');
          if (e.target.classList.contains('flag')) {
            bombs -= 1;
            bombsCount.textContent = bombs.toString().padStart(3, 0);
          } else {
            bombs += 1;
            bombsCount.textContent = bombs.toString().padStart(3, 0);
          }
        }
      }
    });
  });
}
function initGame(width) {
  const timer = document.querySelector('.game__timer-time');
  const movies = document.querySelector('.game__movies-count');
  const bombsInput = document.querySelector('.footer__settings-bombs');
  const bombsCount = document.querySelector('.game__bombs-count');
  timer.textContent = '000';
  window.clearTimeout(timeHandler);
  movies.textContent = '000';
  bombsCount.textContent = `0${bombsInput.value}`;
  createFieldCells(width);
  clickOnCell(width);
  setFlag();
  const theme = document.querySelector('.game__settings-theme');
  const cells = document.querySelectorAll('.game__cell');
  if (theme.classList.contains('blue')) {
    cells.forEach((cell) => {
      cell.classList.remove('gray-theme');
      cell.classList.add('blue-theme');
    });
  } else {
    cells.forEach((cell) => {
      cell.classList.remove('blue-theme');
      cell.classList.add('gray-theme');
    });
  }
}
function changeBombs() {
  const bombsInput = document.querySelector('.footer__settings-bombs');
  const bombsCount = document.querySelector('.game__bombs-count');

  bombsInput.addEventListener('input', () => {
    if (bombsInput.value < 0) {
      bombsInput.value = Math.abs(bombsInput.value);
    } else if (bombsInput.value > 99) {
      bombsInput.value = 99;
    }
    if (bombsInput.value.length > 2) {
      bombsInput.value = bombsInput.value.slice(0, 2);
    }
    if (bombsInput.value >= 10) {
      bombsCount.textContent = `0${bombsInput.value}`;
    }
    initGame(size);
    if (document.querySelector('.footer__settings-easy').classList.contains('level-active')) {
      document.querySelectorAll('.game__cell').forEach((cell) => {
        cell.classList.remove('medium');
        cell.classList.remove('hard');
        cell.classList.add('easy');
      });
    } else
    if (document.querySelector('.footer__settings-medium').classList.contains('level-active')) {
      document.querySelectorAll('.game__cell').forEach((cell) => {
        cell.classList.remove('easy');
        cell.classList.remove('hard');
        cell.classList.add('medium');
      });
    } else
    if (document.querySelector('.footer__settings-hard').classList.contains('level-active')) {
      document.querySelectorAll('.game__cell').forEach((cell) => {
        cell.classList.remove('medium');
        cell.classList.remove('easy');
        cell.classList.add('hard');
      });
    }
  });
}
function changeDifficulty() {
  const levelBtns = document.querySelectorAll('.level-button');
  levelBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
      for (let i = 0; i < levelBtns.length; i += 1) {
        levelBtns[i].classList.remove('level-active');
      }
      e.target.classList.add('level-active');
      if (e.target.classList.contains('footer__settings-easy')) {
        size = 10;
        initGame(size);
        document.querySelector('.game__settings-field-size').textContent = 'Field size: 10x10';
        document.querySelectorAll('.game__cell').forEach((cell) => {
          cell.classList.remove('medium');
          cell.classList.remove('hard');
          cell.classList.add('easy');
        });
      }
      if (e.target.classList.contains('footer__settings-medium')) {
        size = 15;
        initGame(size);
        document.querySelector('.game__settings-field-size').textContent = 'Field size: 15x15';
        document.querySelectorAll('.game__cell').forEach((cell) => {
          cell.classList.remove('easy');
          cell.classList.remove('hard');
          cell.classList.add('medium');
        });
      }
      if (e.target.classList.contains('footer__settings-hard')) {
        size = 25;
        initGame(size);
        document.querySelector('.game__settings-field-size').textContent = 'Field size: 25x25';
        document.querySelectorAll('.game__cell').forEach((cell) => {
          cell.classList.remove('medium');
          cell.classList.remove('easy');
          cell.classList.add('hard');
        });
      }
    });
  });
}
function changeTheme() {
  const theme = document.querySelector('.game__settings-theme');
  const cells = document.querySelectorAll('.game__cell');
  const gameBtns = document.querySelectorAll('.game__button');
  const { body } = document;
  if (theme.classList.contains('gray')) {
    theme.textContent = 'blue';
    theme.classList.remove('gray');
    theme.classList.add('blue');
    cells.forEach((el) => {
      el.classList.remove('gray-theme');
      el.classList.add('blue-theme');
    });
    gameBtns.forEach((el) => {
      el.classList.remove('btn-gray');
      el.classList.add('btn-blue');
    });
    body.classList.remove('gray-bg');
    body.classList.add('blue-bg');
  } else {
    theme.textContent = 'gray';
    theme.classList.remove('blue');
    theme.classList.add('gray');
    cells.forEach((el) => {
      el.classList.remove('blue-theme');
      el.classList.add('gray-theme');
    });
    gameBtns.forEach((el) => {
      el.classList.remove('btn-blue');
      el.classList.add('btn-gray');
    });
    body.classList.remove('blue-bg');
    body.classList.add('gray-bg');
  }
}
function setVolume() {
  const volumeBtn = document.querySelector('.game__settings-volume');
  volumeBtn.addEventListener('click', () => {
    if (isPlay) {
      isPlay = false;
      volumeBtn.classList.add('click_mute');
    } else {
      volumeBtn.classList.remove('click_mute');
      isPlay = true;
    }
  });
}

export {
  createFieldCells, changeBombs, clickOnCell, setFlag, changeDifficulty, changeTheme, setSound, setVolume,
};
