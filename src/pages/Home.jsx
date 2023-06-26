import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useFetchTrendingMovies } from 'hooks';

export const Home = () => {
  const { movies, isLoading, error } = useFetchTrendingMovies();
  return (
    <section>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
      {error && <p>{error}</p>}
    </section>
  );
};
