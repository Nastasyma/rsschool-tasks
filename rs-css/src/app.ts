import BaseComponent from './components/baseComponent';
import Header from './components/header';

class App extends BaseComponent {
  header: Header;

  main: BaseComponent;

  footer: BaseComponent;

  constructor() {
    super(document.body, 'div', 'app');
    this.header = new Header(this.element);
    this.main = new BaseComponent(this.element, 'main', 'main');
    this.footer = new BaseComponent(this.element, 'footer', 'footer');
  }
}

export default App;
