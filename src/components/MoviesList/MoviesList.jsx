import { useLocation } from 'react-router-dom';
import { LinkStyled, ListItemStyled, ListStyled } from './MoviesList.styled';
import { routes } from 'service/routes-service';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
