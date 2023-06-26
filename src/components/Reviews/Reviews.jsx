import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const { movieReviews, isLoading, error } = useFetchMovieReviews();
  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {movieReviews &&
          movieReviews.map(({ id, author, updated_at, content }) => {
            return (
              <li key={id}>
                <p>
                  <strong>Author: </strong>
                  {author}
                </p>
                <p>
                  <strong>Review: </strong>
                </p>
                <p>{content}</p>
                <p>{updated_at}</p>
              </li>
            );
          })}
      </ul>
      {error && <p>{error}</p>}
    </>
  );
};

export default Reviews;
