import { Route, Routes } from 'react-router-dom';
import { Home, Movies, MovieDetails } from 'pages';
import { Casts } from 'components/Casts';
import { SharedLayout } from 'components/SharedLayout';
import { Reviews } from 'components/Reviews';
import { routes } from 'service/routes-service';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIES_ID} element={<MovieDetails />}>
          <Route path="cast" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
