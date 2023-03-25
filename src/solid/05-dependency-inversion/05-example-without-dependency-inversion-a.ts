import { PostService } from './05-example-without-dependency-inversion-b';

// main
(async () => {
  const postService = new PostService();

  const posts = await postService.getPosts();

  console.log({ posts });
})();
