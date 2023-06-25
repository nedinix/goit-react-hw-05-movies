import { LinkStyled } from './TrendingMovies.styled';

export const TrendingMovies = ({ movies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <LinkStyled to={`movies/${id}`}>
              <p>{title}</p>
            </LinkStyled>
          </li>
        ))}
      </ul>
    </>
  );
};
