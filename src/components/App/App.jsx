import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { routes } from 'service/routes-service';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));
const PageNotFound = lazy(() => import('../PageNotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIES_ID} element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
