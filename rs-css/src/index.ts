import './assets/styles/style.css';
import './assets/styles/normalize.css';
import createApp from './app';
import { setLevel, sumbit, changeLevel } from './components/newGame';

createApp();
setLevel();
changeLevel();
document.querySelector('.editor__form')?.addEventListener('submit', sumbit);
