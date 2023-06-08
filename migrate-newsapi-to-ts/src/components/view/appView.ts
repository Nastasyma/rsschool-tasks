import News from './news/news';
import Sources from './sources/sources';
import { IData } from '../../interfaces/data';
import { IArticle } from '../../interfaces/article';
import { ISource } from '../../interfaces/source';

class AppView {
  private news: News;

  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IData) {
    const values: IArticle[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IData) {
    const values: ISource[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
