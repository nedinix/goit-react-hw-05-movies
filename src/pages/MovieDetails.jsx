import { Loader } from 'components/Loader';
import { MovieCard } from 'components/MovieCard';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';
import { useFetchMovieById } from 'hooks/useFetchMovieById';
import { Link, Outlet } from 'react-router-dom';
import { routes } from 'service/routes-service';

const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMovieById();
  // const { id } = movie;

  return (
    <>
      {isLoading && <Loader />}
      {movie && (
        <section>
          <GoBackLink />
          <MovieCard movie={movie} />
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={routes.CAST}>Casts</Link>
              </li>
              <li>
                <Link to={routes.REVIEWS}>Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </section>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default MovieDetails;
