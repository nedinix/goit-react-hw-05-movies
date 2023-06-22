import axios from 'axios';

const ACCESS_TOKEN_AUTH =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzAwMzY5MjM1NGU2MGRkMTkxZDU3ZjIyNDE5M2ViYyIsInN1YiI6IjY0OTRiYzBkOTdlYWI0MDE0NjUzYTg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eRloYStb0E7htYX_KZc4cK1BXIC7CsOABKJUGMS2eo4';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/popular';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization: ACCESS_TOKEN_AUTH,
};

export const fetchPopularFilms = async () => {
  const response = await axios.get('');
  console.log(response.data.results);
  return response.data.results;
};
