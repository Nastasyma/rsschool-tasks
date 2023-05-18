/* eslint-disable max-len */
import './assets/styles/style.css';
import './assets/styles/normalize.css';
import './assets/audio/click.mp3';
import './assets/audio/set-flag.mp3';
import './assets/audio/game-over-mario.mp3';
import './assets/audio/victory-mario.mp3';
import {
  createFieldCells,
  changeBombs,
  clickOnCell,
  setFlag,
  changeDifficulty,
  changeTheme,
  setSound,
  setVolume,
  setNewGame,
  saveGame,
  loadGame,
  showResults,
  removePopup,
} from './js/game.js';
import { createHeader, createFooter, createMain } from './js/app.js';

createHeader();
createMain();
createFooter();
setSound();
createFieldCells(10);
clickOnCell();
changeBombs();
setFlag();
changeDifficulty();
setVolume();
saveGame();
loadGame();
showResults();
removePopup();
document.querySelector('.game__settings-theme').addEventListener('click', changeTheme);
document.querySelector('.button-newgame').addEventListener('click', setNewGame);
