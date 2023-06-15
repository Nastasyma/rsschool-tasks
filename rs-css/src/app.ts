import footer from './components/footer/footer';
import header from './components/header/header';
import main from './components/main/main';
import nav from './components/nav/nav';

function createApp() {
  const app: HTMLDivElement = document.createElement('div');
  app.classList.add('app');
  app.appendChild(nav());
  app.appendChild(header());
  app.appendChild(main());
  app.appendChild(footer());
  document.body.append(app);
  return app;
}

export default createApp;
