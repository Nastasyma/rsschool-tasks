import News from './news/news';
import Sources from './sources/sources';
import { IRecievedData } from '../../interfaces/recievedData';
import { TypeArticle } from '../../types/article';
import { TypeSource } from '../../types/source';

class AppView {
  private news: News;

  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: Partial<IRecievedData>) {
    const values: TypeArticle[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: Partial<IRecievedData>) {
    const values: TypeSource[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
