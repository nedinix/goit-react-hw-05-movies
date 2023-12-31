import { fetchMovieById } from 'api-service/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovieById = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    setMovie({});
    const fetchData = async () => {
      try {
        const response = await fetchMovieById(movieId);
        if (!Object.entries(response).length)
          throw new Error('Sorry. There are no movies ... ');
        setMovie(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return { movie, isLoading, error };
};
