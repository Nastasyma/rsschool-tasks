import './assets/styles/style.css';
import './assets/styles/normalize.css';
import createApp from './app';
import { setLevel, submit, changeLevel, addHover, addHelpMessage } from './components/newGame';
import createBurger from './components/nav/burger';

createApp();
setLevel();
changeLevel();
createBurger();
addHover();
addHelpMessage();
document.querySelector('.editor__form')?.addEventListener('submit', submit);
