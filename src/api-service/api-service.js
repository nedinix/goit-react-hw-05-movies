import axios from 'axios';

// const API_KEY = 'fc003692354e60dd191d57f224193ebc';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzAwMzY5MjM1NGU2MGRkMTkxZDU3ZjIyNDE5M2ViYyIsInN1YiI6IjY0OTRiYzBkOTdlYWI0MDE0NjUzYTg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eRloYStb0E7htYX_KZc4cK1BXIC7CsOABKJUGMS2eo4',
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day');
  return response.data.results;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};

export const fetchMoviesByName = async value => {
  if (!value) return;
  const response = await axios.get(`search/movie`, {
    params: {
      query: value,
      include_adult: false,
    },
  });
  console.log('response', response);
  return response.data.results;
};

export const fetchCast = async id => {
  const response = await axios.get(`movie/${id}/credits`);
  console.log(response);
  return response;
};

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`);
  console.log(response);
  return response;
};
