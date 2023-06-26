import { Link, Outlet } from 'react-router-dom';
import { routes } from 'service/routes-service';
import {
  CardWrapper,
  DescriptionBlock,
  InfoWrapper,
  PosterImage,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { title, poster_path, status, vote_average, overview, genres } = movie;

  const normalizedGenres = genres
    ? genres.map(({ name }) => name).join(', ')
    : 'none';
  return (
    <>
      <CardWrapper>
        <div>
          <PosterImage
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <DescriptionBlock>
          <h3>{title}</h3>
          <p>Status: {status}</p>
          <p>User score: {vote_average}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h5>Genres</h5>
          <p>{normalizedGenres}</p>
        </DescriptionBlock>
      </CardWrapper>
      <InfoWrapper>
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
      </InfoWrapper>
    </>
  );
};
