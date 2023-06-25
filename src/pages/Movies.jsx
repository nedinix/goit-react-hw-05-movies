import { Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { useFetchMoviesByName } from '../hooks';
import { TrendingMovies } from 'components/TrendingMovies';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams: ', searchParams.get('query'));

  const handleSubmit = ({ search }) => {
    console.log('search:', search);
    setSearchParams({ query: search });
  };

  const { movies, isLoading, error } = useFetchMoviesByName();
  console.log('movies', movies);
  return (
    <section>
      <h2>Movies</h2>

      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {movies && <TrendingMovies movies={movies} />}
    </section>
  );
};
