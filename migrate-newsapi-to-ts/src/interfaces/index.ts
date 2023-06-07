import { IArticle } from './article';
import { ISource } from './source';

export interface IData {
  articles: IArticle[];
  sources: ISource[];
}
