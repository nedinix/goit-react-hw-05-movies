import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { Home, Movies } from 'pages';
// import { fetchPopularFilms } from 'api-service/api-service';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        {/* <Route path="/movies/:movieId" element={<></>}> */}
        {/* <Route path="/cast" element={<></>} /> */}
        {/* <Route path="/reviews" element={<></>} /> */}
        {/* </Route> */}
      </Route>
    </Routes>
    // <>
    //   <button type="button" onClick={fetchPopularFilms}>
    //     button
    //   </button>
    // </>
  );
};
