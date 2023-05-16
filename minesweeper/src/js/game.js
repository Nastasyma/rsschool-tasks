import shuffle from './helper.js';

const emptyCellsArr = [];
const bombsCellsArr = [];
let cellsArrSorted = [];
const cellsArray = [];
const cellsMatrix = [];

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
  timer.textContent = setZero(parseInt(timer.textContent, 10) + 1);
  setTimeout(drawTimer, 1000);
}

function createFieldCells(width) {
  const field = document.querySelector('.game__field');
  field.innerHTML = '';
  for (let i = 0; i < width * width; i += 1) {
    const gameCell = document.createElement('button');
    gameCell.className = 'game__cell non-clicked-cell';
    if (i < 10) {
      gameCell.id = `0${i}`;
    } else {
      gameCell.id = i;
    }
    field.appendChild(gameCell);
    cellsArray.push(gameCell);
  }
  for (let i = 0; i < cellsArray.length; i += 10) {
    cellsMatrix.push(cellsArray.slice(i, i + 10));
  }
}
function createBombs(width) {
  const bombsInput = document.querySelector('.footer__settings-bombs');
  const bombs = bombsInput.value;
  const cellsNoClick = document.querySelectorAll('.non-clicked-cell');
  for (let i = 0; i < bombs; i += 1) {
    bombsCellsArr.push('bomb-cell');
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
    let isLeft;
    let isRight;
    if (width === 10) {
      isLeft = (i % width === 0);
      isRight = (i % width === width - 1);
    }
    if (cells[i].classList.contains('empty-cell') || cells[i].classList.contains('first-clicked-cell')) {
      if (!isLeft) {
        if (i > 0 && cells[i - 1].classList.contains('bomb-cell')) count += 1;
        if (i >= (width + 1) && cells[i - 1 - width].classList.contains('bomb-cell')) count += 1;
        if (i < (width * width - width) && cells[i - 1 + width].classList.contains('bomb-cell')) count += 1;
      }
      if (!isRight) {
        if (i > (width - 1) && cells[i + 1 - width].classList.contains('bomb-cell')) count += 1;
        if (i <= (width * width - 2) && cells[i + 1].classList.contains('bomb-cell')) count += 1;
        if (i <= (width * width - width - 2) && cells[i + 1 + width].classList.contains('bomb-cell')) count += 1;
      }
      if (i >= width && cells[i - width].classList.contains('bomb-cell')) count += 1;
      if (i <= (width * width - width - 1) && cells[i + width].classList.contains('bomb-cell')) count += 1;
      cells[i].setAttribute('data-count', count);
      cells[i].classList.remove('empty-cell');
      cells[i].classList.add(`cell-${count}`);
      // cells[i].textContent = count;
      if (count !== 0) {
        cells[i].classList.add('numbered');
      }
      // cells[i].innerHTML = cells[i].id;
    }
  }
}
function revealCell(x, y) {
  if (x < 0 || y < 0 || x >= 10 || y >= 10) return;
  if (cellsMatrix[x][y].classList.contains('checked-cell')) return;
  if (cellsMatrix[x][y].classList.contains('bomb-cell')) return;
  if (cellsMatrix[x][y].classList.contains('flag')) return;

  cellsMatrix[x][y].classList.add('checked-cell');
  const { count } = cellsMatrix[x][y].dataset;
  if (count !== '0' && count !== undefined) {
    cellsMatrix[x][y].textContent = count;
  }
  if (!cellsMatrix[x][y].classList.contains('numbered')) {
    revealCell(x - 1, y - 1);
    revealCell(x - 1, y);
    revealCell(x - 1, y + 1);
    revealCell(x, x - 1);
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
      const x = +e.target.id.slice(0, 1);
      const y = +e.target.id.slice(1, 2);
      console.log(x, y);
      if (gameMovies.textContent === '000') {
        drawTimer();
        el.classList.remove('non-clicked-cell');
        el.classList.add('first-clicked-cell');
        createBombs(10);
        ckeckCells(10);
        if (el.classList.contains('cell-0')) {
          revealCell(x, y);
        }
      }
      const { count } = el.dataset;
      if (count !== '0' && count !== undefined) {
        if (!el.classList.contains('flag')) {
          // eslint-disable-next-line no-param-reassign
          el.textContent = count;
        }
      }
      if (el.classList.contains('cell-0')) {
        revealCell(x, y);
      } else if (!el.classList.contains('flag')) {
        el.classList.add('checked-cell');
      }
      movies += 1;
      gameMovies.textContent = movies.toString().padStart(3, 0);
      if (el.classList.contains('bomb-cell')) {
        console.log('Game over!!');
        cells.forEach((cell) => {
          cell.classList.add('checked-cell');
          cell.classList.remove('flag');
          const count2 = cell.dataset.count;
          if (count2 !== '0' && count2 !== undefined) {
            // eslint-disable-next-line no-param-reassign
            cell.textContent = count2;
          }
        });
        const bombCells = document.querySelectorAll('.bomb-cell');
        bombCells.forEach((cell) => {
          cell.classList.add('game-over');
        });
      }
    });
  });
}
function setFlag() {
  const cells = document.querySelectorAll('.game__cell');
  const bombsCount = document.querySelector('.game__bombs-count');
  const bombsInput = document.querySelector('.footer__settings-bombs');
  let bombs = bombsInput.value;
  cells.forEach((el) => {
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!e.target.classList.contains('checked-cell')) {
        e.target.classList.toggle('flag');
        if (e.target.classList.contains('flag')) {
          bombs -= 1;
          bombsCount.textContent = bombs.toString().padStart(3, 0);
        } else {
          bombs += 1;
          bombsCount.textContent = bombs.toString().padStart(3, 0);
        }
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
    ckeckCells(10);
    clickOnCell();
    setFlag();
  });
}

export {
  createFieldCells, changeBombs, clickOnCell, setFlag,
};
