import { Outlet, useSearchParams } from 'react-router-dom';
import { useFetchMoviesByName } from '../hooks';
import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';
import { SearchMovie } from 'components/SearchMovie';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = ({ searchQuery }) => {
    if (!searchQuery) {
      setSearchParams({});

      return;
    }
    setSearchParams({ query: searchQuery });
  };

  const { movies, isLoading, error } = useFetchMoviesByName();
  return (
    <section>
      <h2>Movies</h2>
      <SearchMovie query={query} onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
      {error && <p>{error}</p>}
      <Outlet />
    </section>
  );
};

export default Movies;
