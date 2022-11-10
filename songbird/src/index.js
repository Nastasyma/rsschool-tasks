import './assets/styles/style.css';
import './assets/styles/normalize.css';
import './assets/audio/error.mp3';
import './assets/audio/success.mp3';
import './assets/images/unknown_bird.jpg';
import './assets/images/bird_bg.jpg';
import './assets/images/bird_bg2.jpg';
import { startGame, returnToStart, toGallery } from './js/app.js';
import { setWelcome, setSong, setLevelList, setLevelInfo } from './js/game.js';
import { setCarousel, setGallery} from './js/gallery.js';

startGame();
toGallery();
returnToStart();
setWelcome();
setSong();
setLevelList();
setLevelInfo();
setCarousel();
setGallery();


