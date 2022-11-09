import './assets/styles/style.css';
import './assets/styles/normalize.css';
import './assets/audio/error.mp3';
import './assets/audio/success.mp3';
import './assets/images/unknown_bird.jpg';
import { startGame, returnToStart } from './js/app.js';
import { setSong, setLevelList, setLevelInfo } from './js/game.js';

startGame();
returnToStart();
setSong();
setLevelList();
setLevelInfo();


