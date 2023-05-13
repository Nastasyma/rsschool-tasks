import { shuffle } from './helper.js';

const emptyCellsArr = [];
const bombsCellsArr = [];
let cellsArrSorted = [];

function reset() {
  emptyCellsArr.length = 0;
  bombsCellsArr.length = 0;
  cellsArrSorted.length = 0;
}

function createFieldCells(width) {
  const field = document.querySelector('.game__field');
  field.innerHTML = '';
  for (let i = 0; i < width * width; i += 1) {
    const gameCell = document.createElement('button');
    gameCell.classList.add('game__cell');
    gameCell.id = i;
    field.appendChild(gameCell);
  }
}

function createBombs(width) {
  const bombsInput = document.querySelector('.footer__settings-bombs');
  const bombs = bombsInput.value;
  const cells = document.querySelectorAll('.game__cell');
  for (let i = 0; i < bombs; i += 1) {
    bombsCellsArr.push('bomb');
  }
  const emptyCell = width * width - bombs - 1;
  for (let i = 0; i < emptyCell; i += 1) {
    emptyCellsArr.push('empty');
  }
  cellsArrSorted = bombsCellsArr.concat(emptyCellsArr);
  shuffle(cellsArrSorted);
  for (let i = 0; i < cells.length; i += 1) {
    if (!cells[i].classList.contains('first-click')) {
      cells[i].classList.add(cellsArrSorted[i]);
    }
    let count = 0;
    if (cells[i].classList.contains('empty')) {
      if (!i % width === 0) {
        if (i > 0 && cells[i - 1].classList.contains('bomb')) count += 1;
        if (i > (width + 1) && cells[i - 1 - width].classList.contains('bomb')) count += 1;
        if (i < (width * width - width) && cells[i - 1 + width].classList.contains('bomb')) count += 1;
        if (i < (width * width - width - 2) && cells[i + 1 + width].classList.contains('bomb')) count += 1;
      }
      if (!i % width === width - 1) {
        if (i > (width - 1) && cells[i + 1 - width].classList.contains('bomb')) count += 1;
        if (i < (width * width - 2) && cells[i + 1].classList.contains('bomb')) count += 1;
      }
      if (i > width && cells[i - width].classList.contains('bomb')) count += 1;
      if (i < (width * width - width - 1) && cells[i + width].classList.contains('bomb')) count += 1;
      if (count !== 0) {
        cells[i].innerHTML = count;
      }
      // cells[i].innerHTML = cells[i].id;
    }
  }
}

function clickOnCell() {
  const cells = document.querySelectorAll('.game__cell');
  const gameMovies = document.querySelector('.game__movies-count');
  let movies = 0;
  cells.forEach((el) => {
    el.addEventListener('click', () => {
      if (gameMovies.innerHTML === '000') {
        el.classList.add('first-click');
        createBombs(10);
      }
      movies += 1;
      if (movies < 10) {
        gameMovies.innerHTML = `00${movies}`;
      } else if (movies < 100) {
        gameMovies.innerHTML = `0${movies}`;
      } else {
        gameMovies.innerHTML = movies;
      }
    });
  });
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
    reset();
    createFieldCells(10);
    createBombs(10);
  });
}

export { createFieldCells, changeBombs, clickOnCell };
