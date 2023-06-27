import { fetchMovieReviews } from 'api-service/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    setMovieReviews([]);
    const fetchData = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        if (!response.length)
          throw new Error('Sorry. There are no reviews ... ');
        setMovieReviews(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return { movieReviews, isLoading, error };
};
