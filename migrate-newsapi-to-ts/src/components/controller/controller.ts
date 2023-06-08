import { TypeArticle } from '../../types/article';
import { TypeSource } from '../../types/source';
import ApiEndPoints from '../../types/endpoints';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  public getSources(callback: (data: TypeSource) => void) {
    super.getResp(
      {
        endpoint: ApiEndPoints.sources,
      },
      callback,
    );
  }

  public getNews(e: MouseEvent, callback: (data: TypeArticle) => void) {
    let { target } = e;
    const newsContainer = e.currentTarget;

    while (target instanceof HTMLElement && newsContainer instanceof HTMLElement && target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: ApiEndPoints.everything,
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      target = target.parentNode;
    }
  }
}

export default AppController;
