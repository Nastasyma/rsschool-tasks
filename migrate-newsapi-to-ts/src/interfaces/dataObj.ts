export interface IDataObject {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
  status: string;
  author: string;
  title: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  urlToImage: string;
  content: string;
}
