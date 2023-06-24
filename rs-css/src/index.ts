import './assets/styles/style.css';
import './assets/styles/normalize.css';
import createApp from './app';
import createBurger from './components/nav/burger';
import { setInputValue } from './components/newGame';

createApp();
createBurger();
setInputValue();
