import {
  AllService,
  PhotosService,
  PostService,
} from './02-example-without-open-close-b';

(async () => {
  const todoService = new AllService();
  const postService = new PostService();
  const photosService = new PhotosService();

  const todos = await todoService.getAllItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
