import './assets/styles/style.css';
import './assets/styles/normalize.css';
import createApp from './app';
import { setLevel, sumbit, changeLevel, addHover, addTooltip } from './components/newGame';
import createBurger from './components/nav/burger';

createApp();
setLevel();
changeLevel();
createBurger();
addHover();
addTooltip();
document.querySelector('.editor__form')?.addEventListener('submit', sumbit);
