import './assets/styles/style.css';
import './assets/styles/normalize.css';
import createApp from './app';
import { setLevel, sumbit, changeLevel } from './components/newGame';
import createBurger from './components/nav/burger';

createApp();
setLevel();
changeLevel();
createBurger();
document.querySelector('.editor__form')?.addEventListener('submit', sumbit);
