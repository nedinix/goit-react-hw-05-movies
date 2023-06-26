import { useLocation } from 'react-router-dom';
import { LinkStyled, ListItemStyled, ListStyled } from './MoviesList.styled';
import { routes } from 'service/routes-service';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ListStyled>
      {movies.map(({ id, title }) => (
        <ListItemStyled key={id}>
          <LinkStyled to={`${routes.MOVIES}/${id}`} state={{ from: location }}>
            {title}
          </LinkStyled>
        </ListItemStyled>
      ))}
    </ListStyled>
  );
};
