import { IDataObject } from '../interfaces/dataObj';

export type TypeArticle = Pick<
  IDataObject,
  'author' | 'title' | 'description' | 'publishedAt' | 'source' | 'url' | 'urlToImage' | 'content' | 'status'
>;
