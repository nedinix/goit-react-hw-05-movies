import { Loader } from 'components/Loader';
import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { useFetchTrendingMovies } from 'hooks';

export const Home = () => {
  const { movies, isLoading, error } = useFetchTrendingMovies();
  return (
    <section>
      {isLoading && <Loader />}
      <TrendingMovies movies={movies} />
      {error && <p>{error}</p>}
    </section>
  );
};
