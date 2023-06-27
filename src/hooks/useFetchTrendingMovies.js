import { fetchTrendingMovies } from 'api-service/api-service';
import { useEffect, useState } from 'react';

export const useFetchTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setMovies([]);
    const fetchData = async () => {
      try {
        const response = await fetchTrendingMovies();
        if (!response.length)
          throw new Error('Sorry. There are no movies ... ');
        setMovies(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { movies, isLoading, error };
};
