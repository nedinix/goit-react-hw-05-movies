import { fetchCast } from 'api-service/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchCasts = () => {
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
        const response = await fetchCast(movieId);
        console.log(response);
        setMovieCasts(response);
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
