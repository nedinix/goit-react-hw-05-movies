import { fetchMovieById } from 'api-service/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovieById = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setMovie({});
    const fetchData = async () => {
      try {
        const response = await fetchMovieById(movieId);
        console.log('response', response);
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
