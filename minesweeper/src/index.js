import './assets/styles/style.css';
import './assets/styles/normalize.css';
import {
  createFieldCells, changeBombs, clickOnCell, setFlag, changeDifficulty,
} from './js/game.js';
import { createHeader, createFooter, createMain } from './js/app.js';

createHeader();
createMain();
createFooter();
createFieldCells(10);
clickOnCell();
changeBombs();
setFlag();
changeDifficulty();
