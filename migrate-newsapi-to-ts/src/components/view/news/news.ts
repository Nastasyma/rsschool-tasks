import { TypeArticle } from '../../../types/article';
import { TypeHtmlElement } from '../../../types/types';
import './news.css';
import '../../../img/news_placeholder.png';

class News {
  draw(data: Readonly<TypeArticle[]>): void {
    const news = data.length >= 10 ? data.filter((_item: TypeArticle, idx: number) => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

    news.forEach((item: TypeArticle, idx: number) => {
      if (!newsItemTemp) throw new Error();

      const newsClone = newsItemTemp.content.cloneNode(true);

      if (!(newsClone instanceof DocumentFragment)) throw new Error();

      if (idx % 2) {
        newsClone.querySelector('.news__item')?.classList.add('alt');
      }
      const newsMetaImg: TypeHtmlElement = newsClone.querySelector('.news__meta-photo');
      const newsMetaAuthor: TypeHtmlElement = newsClone.querySelector('.news__meta-author');
      const newsMetaDate: TypeHtmlElement = newsClone.querySelector('.news__meta-date');
      const newsDescTitle: TypeHtmlElement = newsClone.querySelector('.news__description-title');
      const newsDescSource: TypeHtmlElement = newsClone.querySelector('.news__description-source');
      const newsDescContent: TypeHtmlElement = newsClone.querySelector('.news__description-content');
      const newsReadMore: TypeHtmlElement = newsClone.querySelector('.news__read-more');
      if (
        !newsMetaImg ||
        !newsMetaAuthor ||
        !newsMetaDate ||
        !newsDescTitle ||
        !newsDescSource ||
        !newsDescContent ||
        !newsReadMore
      )
        throw new Error();
      newsMetaImg.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.png'})`;
      newsMetaAuthor.textContent = item.author || item.source.name;
      newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      newsDescTitle.textContent = item.title;
      newsDescSource.textContent = item.source.name;
      newsDescContent.textContent = item.description;
      newsReadMore.setAttribute('href', item.url);

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
