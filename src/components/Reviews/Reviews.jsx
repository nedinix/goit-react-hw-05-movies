import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';
import { Loader } from 'components/Loader';
import { ReviewDate, ReviewsListStyled } from './Reviews.styled';

const Reviews = () => {
  const { movieReviews, isLoading, error } = useFetchMovieReviews();
  return (
    <>
      {isLoading && <Loader />}
      <ReviewsListStyled>
        {movieReviews &&
          movieReviews.map(({ id, author, updated_at, content }) => {
            const normUpdDate = new Date(updated_at).toUTCString();
            return (
              <li key={id}>
                <p>
                  <strong>{author}</strong>
                </p>
                <p>{content}</p>
                <ReviewDate>{normUpdDate}</ReviewDate>
              </li>
            );
          })}
      </ReviewsListStyled>
      {error && <p>{error}</p>}
    </>
  );
};

export default Reviews;
