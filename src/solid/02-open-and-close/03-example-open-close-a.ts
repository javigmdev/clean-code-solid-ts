import {
  AllService,
  PhotosService,
  PostService,
} from './04-example-open-close-b';
import { HttpClient } from './05-example-open-close-c';

(async () => {
  const httpClient = new HttpClient();

  const todoService = new AllService(httpClient);
  const postService = new PostService(httpClient);
  const photosService = new PhotosService(httpClient);

  const todos = await todoService.getAllItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
