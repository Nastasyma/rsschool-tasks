import { TypeArticle } from '../types/article';
import { TypeSource } from '../types/source';

export interface IRecievedData {
  articles: TypeArticle[];
  sources: TypeSource[];
  totalResults: number;
  status: string;
  drawNews(data: IRecievedData): void;
  drawSources(data: IRecievedData): void;
}
