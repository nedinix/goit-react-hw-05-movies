import { useLocation } from 'react-router-dom';
import { LinkStyled } from './MoviesList.styled';
import { routes } from 'service/routes-service';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <LinkStyled to={`${routes.MOVIES}/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </LinkStyled>
        </li>
      ))}
    </ul>
  );
};
