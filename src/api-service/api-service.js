import axios from 'axios';

const API_KEY = 'fc003692354e60dd191d57f224193ebc';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers = {
  accept: 'application/json',
};
const options = {
  api_key: API_KEY,
};

export const fetchPopularFilms = async () => {
  const response = await axios.get('movie/popular', options);
  console.log(response);
  return response.data.results;
};
