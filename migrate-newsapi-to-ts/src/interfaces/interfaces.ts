export interface IArticle {
  author: string;
  title: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  url: string;
  urlToImage: string;
  content: string;
}

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface IData {
  articles: IArticle[];
  sources: ISource[];
}
