/* eslint-disable max-len */
import './assets/styles/style.css';
import './assets/styles/normalize.css';
import './assets/audio/click.mp3';
import './assets/audio/set-flag.mp3';
import './assets/audio/game-over-mario.mp3';
import './assets/audio/victory-mario.mp3';
import {
  createFieldCells, changeBombs, clickOnCell, setFlag, changeDifficulty, changeTheme, setSound, setVolume,
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
document.querySelector('.game__settings-theme').addEventListener('click', changeTheme);
