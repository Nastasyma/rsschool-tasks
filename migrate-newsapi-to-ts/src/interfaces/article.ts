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
