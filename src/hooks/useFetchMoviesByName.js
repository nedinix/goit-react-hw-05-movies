import { fetchMoviesByName } from 'api-service';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFetchMoviesByName = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchMoviesByName(query);
        setMovies(response);
        if (!response.length)
          throw new Error('Sorry. There are no movies ... ');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { movies, isLoading, error };
};
