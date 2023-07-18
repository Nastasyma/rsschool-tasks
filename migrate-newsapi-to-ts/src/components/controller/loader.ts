import { IOptions } from '../../interfaces/options';
import HttpMethod from '../../types/method';
import HttpStatus from '../../types/status';

class Loader {
  private baseLink: string;

  private options: Partial<IOptions>;

  constructor(baseLink: string, options: Partial<IOptions>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T>(
    { endpoint, options = {} }: { endpoint: string; options?: Partial<IOptions> },
    callback: (data: T) => void = () => {
      console.error('No callback for GET response');
    },
  ) {
    this.load<T>(HttpMethod.GET, endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === HttpStatus.UNAUTHORIZED_ERROR || res.status === HttpStatus.NOT_FOUND_ERROR)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Partial<IOptions>, endpoint: string) {
    const urlOptions: { [key: string]: string } = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(method: HttpMethod, endpoint: string, callback: (data: T) => void, options: Partial<IOptions> = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
