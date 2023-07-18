import { IRecievedData } from '../../interfaces/recievedData';
import { TypeSource } from '../../types/source';
import { TypeHtmlElement } from '../../types/types';
import AppController from '../controller/controller';
import AppView from '../view/appView';

class App {
  private controller: AppController;

  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sources: TypeHtmlElement = document.querySelector('.sources');
    if (!sources) throw new Error();

    if (sources instanceof HTMLDivElement) {
      sources.addEventListener('click', (e: MouseEvent) =>
        this.controller.getNews(e, (data: Partial<IRecievedData>) => this.view.drawNews(data)),
      );
    }

    this.controller.getSources((data: TypeSource) => this.view.drawSources(data));
  }
}

export default App;
