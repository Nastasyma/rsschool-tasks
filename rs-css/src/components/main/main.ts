import editor from './editor';
import game from './game';

function createMain() {
  const main: HTMLElement = document.createElement('main');
  main.classList.add('main');
  main.appendChild(game());
  main.appendChild(editor());
  return main;
}

export default createMain;
