import { fetchMovieCast } from 'api-service/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovieCasts = () => {
  const [movieCasts, setMovieCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    setMovieCasts([]);
    const fetchData = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setMovieCasts(response);
        if (!response) throw new Error('Sorry. There are no cast ... ');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return { movieCasts, isLoading, error };
};
