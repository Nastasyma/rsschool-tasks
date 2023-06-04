import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'ef417a2988654055bd3fa7c2a7ccb433', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
