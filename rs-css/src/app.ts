import createEL from './components/baseComponent';
import footer from './components/footer/footer';
import header from './components/header/header';
import main from './components/main/main';
import nav from './components/nav/nav';

function createApp() {
  const app: HTMLElement = createEL(document.body, 'div', ['app']);
  createEL(app, 'div', ['mobile_wrapper']);
  createEL(app, 'div', ['tooltip']);
  nav(app);
  header(app);
  main(app);
  app.appendChild(footer());
  return app;
}

export default createApp;
