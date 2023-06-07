import { IArticle } from '../../../interfaces/article';
import { TypeHtmlElement } from '../../../types/types';
import './news.css';

class News {
  draw(data: IArticle[]) {
    const news = data.length >= 10 ? data.filter((_item: IArticle, idx: number) => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

    news.forEach((item: IArticle, idx: number) => {
      if (!newsItemTemp) {
        throw Error('newsItemTemp not found');
      }

      const newsClone = newsItemTemp.content.cloneNode(true);

      if (!(newsClone instanceof DocumentFragment)) {
        throw Error('newsClone is not DocumentFragment');
      }

      if (idx % 2) {
        newsClone.querySelector('.news__item')?.classList.add('alt');
      }
      const newsImg: TypeHtmlElement = newsClone.querySelector('.news__meta-photo');
      const newsAuthor: TypeHtmlElement = newsClone.querySelector('.news__meta-author');
      const newsDate: TypeHtmlElement = newsClone.querySelector('.news__meta-date');
      const newsDescTitle: TypeHtmlElement = newsClone.querySelector('.news__description-title');
      const newsDescSource: TypeHtmlElement = newsClone.querySelector('.news__description-source');
      const newsDescContent: TypeHtmlElement = newsClone.querySelector('.news__description-content');
      const newsReadMore: TypeHtmlElement = newsClone.querySelector('.news__read-more');
      if (newsImg) {
        newsImg.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      }
      if (newsAuthor) {
        newsAuthor.textContent = item.author || item.source.name;
      }
      if (newsDate) {
        newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      }
      if (newsDescTitle) {
        newsDescTitle.textContent = item.title;
      }
      if (newsDescSource) {
        newsDescSource.textContent = item.source.name;
      }
      if (newsDescContent) {
        newsDescContent.textContent = item.description;
      }
      if (newsReadMore) {
        newsReadMore.setAttribute('href', item.url);
      }

      fragment.append(newsClone);
    });
    const newsItem: TypeHtmlElement = document.querySelector('.news');
    if (newsItem) {
      newsItem.innerHTML = '';
      newsItem.appendChild(fragment);
    }
  }
}

export default News;
