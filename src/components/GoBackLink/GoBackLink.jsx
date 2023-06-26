import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'service/routes-service';
import { LinkStyled, LinkWrapper } from './GoBackLink.styled';

export const GoBackLink = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? routes.MOVIES);
  return (
    <LinkWrapper>
      <LinkStyled to={backLinkLocationRef.current} state={{ from: location }}>
        Back
      </LinkStyled>
    </LinkWrapper>
  );
};
