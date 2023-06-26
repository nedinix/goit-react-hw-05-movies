import { Outlet, useSearchParams } from 'react-router-dom';
import { useFetchMoviesByName } from '../hooks';
import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';
import { SearchMovie } from 'components/SearchMovie';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams: ', searchParams.get('query'));
  const query = searchParams.get('query');

  const handleSubmit = ({ searchQuery }) => {
    setSearchParams({ query: searchQuery });
    console.log('search:', searchQuery);
    if (!searchQuery) return;
  };

  const initialValues = {
    searchQuery: query ? query : null,
  };

  const { movies, isLoading, error } = useFetchMoviesByName();
  // console.log('movies', movies);
  return (
    <section>
      <h2>Movies</h2>
      <SearchMovie initialValues={initialValues} onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
      {error && <p>{error}</p>}
      <Outlet />
    </section>
  );
};
