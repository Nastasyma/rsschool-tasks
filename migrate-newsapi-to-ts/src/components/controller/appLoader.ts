import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://news-proxy.spanb4.shop/', {
      // 'https://newsapi.org/v2/'
      apiKey: 'ef417a2988654055bd3fa7c2a7ccb433',
      // de951c35b8044fc4967ef959d760665a
    });
  }
}

export default AppLoader;
