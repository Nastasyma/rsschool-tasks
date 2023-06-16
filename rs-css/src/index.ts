import './assets/styles/style.css';
import './assets/styles/normalize.css';
import createApp from './app';
import { setLevel, sumbit } from './components/newGame';

createApp();
setLevel();
document.querySelector('.editor__form')?.addEventListener('submit', sumbit);
