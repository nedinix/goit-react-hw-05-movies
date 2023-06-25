import { LinkStyled } from './TrendingMovies.styled';

export const TrendingMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <LinkStyled to={`movies/${id}`}>
            <p>{title}</p>
          </LinkStyled>
        </li>
      ))}
    </ul>
  );
};
