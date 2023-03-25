// install axios  ```npm install axios```

import { HttpClient } from './05-example-open-close-c';

export class AllService {
  constructor(private httpClient: HttpClient) {}

  async getAllItems() {
    const { data } = await this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/',
    );
    return data;
  }
}

export class PostService {
  constructor(private httpClient: HttpClient) {}

  async getPosts() {
    const { data } = await this.httpClient.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return data;
  }
}

export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  async getPhotos() {
    const { data } = await this.httpClient.get(
      'https://jsonplaceholder.typicode.com/photos',
    );
    return data;
  }
}
