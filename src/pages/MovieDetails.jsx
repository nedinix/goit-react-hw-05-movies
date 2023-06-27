import { Loader } from 'components/Loader';
import { MovieCard } from 'components/MovieCard';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';
import { useFetchMovieById } from 'hooks/useFetchMovieById';

const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMovieById();
  return (
    <>
      {isLoading && <Loader />}
      {!!Object.keys(movie).length && (
        <section>
          <GoBackLink />
          <MovieCard movie={movie} />
        </section>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default MovieDetails;
