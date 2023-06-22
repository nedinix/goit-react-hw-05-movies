// import { Route, Routes } from 'react-router-dom';

import { fetchPopularFilms } from 'api-service/api-service';

export const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<></>}>
    //     <Route index element={<></>} />
    //     <Route path="/movies" element={<></>} />
    //     <Route path="/movies/:movieId" element={<></>}>
    //       <Route path="/cast" element={<></>} />
    //       <Route path="/reviews" element={<></>} />
    //     </Route>
    //   </Route>
    // </Routes>
    <>
      <button type="button" onClick={fetchPopularFilms}>
        button
      </button>
    </>
  );
};
