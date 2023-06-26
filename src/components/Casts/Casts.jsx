import { useFetchCasts } from 'hooks/useFetchCast';

export const Casts = () => {
  const { movieCasts, isLoading, error } = useFetchCasts();
  return (
    <ul>
      {movieCasts.map(cast => {
        return (
          <li>
            <p>{cast}</p>
          </li>
        );
      })}
    </ul>
  );
};
