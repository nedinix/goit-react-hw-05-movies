import { fetchMoviesByName } from 'api-service';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFetchMoviesByName = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');
  console.log('query:', query);

  useEffect(() => {
    console.log('update');
    setIsLoading(true);
    setMovies([]);
    const fetchData = async () => {
      try {
        const response = await fetchMoviesByName(query);
        console.log(response);
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
