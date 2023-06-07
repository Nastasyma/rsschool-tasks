import { IArticle } from './article';
import { ISource } from './source';

export interface IData {
  articles?: IArticle[];
  sources?: ISource[];
  totalResults?: number;
  status: string;
  drawNews?(data: IData): void;
  drawSources?(data: IData): void;
}
