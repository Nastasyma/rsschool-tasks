import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      // 'https://newsapi.org/v2/ https://rss-news-api.onrender.com/ https://news-proxy.spanb4.shop/'
      apiKey: 'ef417a2988654055bd3fa7c2a7ccb433',
      // de951c35b8044fc4967ef959d760665a
      // ef417a2988654055bd3fa7c2a7ccb433
    });
  }
}

export default AppLoader;
