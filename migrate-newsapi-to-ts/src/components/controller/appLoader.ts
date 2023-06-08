import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://news-proxy.spanb4.shop/', {
      apiKey: 'ef417a2988654055bd3fa7c2a7ccb433',
    });
  }
}

export default AppLoader;
