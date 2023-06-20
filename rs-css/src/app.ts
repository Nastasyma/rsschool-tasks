import createEL from './components/baseComponent';
import footer from './components/footer/footer';
import header from './components/header/header';
import main from './components/main/main';
import nav from './components/nav/nav';
import flags from './utils/gameElements';

function createApp() {
  const app: HTMLElement = createEL(document.body, 'div', ['app']);
  const appWrapper = createEL(app, 'div', ['mobile_wrapper']);
  const tooltip = createEL(app, 'div', ['tooltip']);
  nav(app);
  header(app);
  main(app);
  footer(app);
  flags.game.appWrapper = appWrapper;
  flags.game.tooltip = tooltip;
  return app;
}

export default createApp;
