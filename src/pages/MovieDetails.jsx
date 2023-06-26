import { Loader } from 'components/Loader';
import { MovieCard } from 'components/MovieCard';
import { useFetchMovieById } from 'hooks/useFetchMovieById';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMovieById();
  const { title, id, poster_path, status, vote_average, overview, genres } =
    movie;

  return (
    <>
      {isLoading && <Loader />}
      {movie && (
        <section>
          <MovieCard
            title={title}
            id={id}
            poster_link={poster_path}
            status={status}
            userScore={vote_average}
            overview={overview}
            genres={genres}
          />
          <div>
            <p>Additional information</p>
            <ul>
              <li>cast</li>
              <li>Reviews</li>
            </ul>
          </div>
        </section>
      )}
      {error && <p>{error}</p>}
      <Outlet />
    </>
  );
};
