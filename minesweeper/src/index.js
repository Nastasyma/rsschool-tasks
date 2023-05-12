import './assets/styles/style.css';
import './assets/styles/normalize.css';
import { changeBombs } from './js/game.js';
import {
  createHeader, createFooter, createMain, createFieldCells,
} from './js/app.js';

createHeader();
createMain();
createFooter();
createFieldCells(10, 10);
changeBombs();
