import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { routes } from 'service/routes-service';

export const GoBackLink = () => {
  const location = useLocation();
  // console.log(location);
  const backLinkLocationRef = useRef(location.state?.from ?? routes.MOVIES);
  // console.log(backLinkLocationRef);
  return (
    <div>
      <Link to={backLinkLocationRef.current} state={{ from: location }}>
        Back
      </Link>
    </div>
  );
};
