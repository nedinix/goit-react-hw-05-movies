import { Route, Routes } from 'react-router-dom';
import { Home, Movies, MovieDetails } from 'pages';
import { Cast } from 'components/Cast';
import { Layout } from 'components/Layout';
import { Reviews } from 'components/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
