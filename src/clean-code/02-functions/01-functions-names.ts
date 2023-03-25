(() => {
  // get information of a movie by id
  // bad
  function getAllMovies(movieId: number) {
    console.log({ movieId });
  }
  // better
  function getMovieById(id: number) {
    console.log({ id });
  }

  // get information about the actors in a movie
  // bad
  function getAllMovieActors(id: number) {
    console.log({ id });
  }
  // better
  function getMovieActorsById(id: number) {
    console.log({ id });
  }

  // get an actor's bio by id
  // bad
  function getUser(actorId: number) {
    console.log({ actorId });
  }
  // better
  function getActorBioById(id: number) {
    console.log({ id });
  }

  // create movie
  // bad
  function movie(
    id: number,
    title: string,
    description: string,
    rating: number,
    cast: string[],
  ) {
    console.log({ id, title, description, rating, cast });
  }

  // better
  interface Movie {
    id: number;
    title: string;
    description: string;
    rating: number;
    actors: string[];
  }
  function insertMovie({ id, title, description, rating, actors }: Movie) {
    console.log({ id, title, description, rating, actors });
  }
})();
