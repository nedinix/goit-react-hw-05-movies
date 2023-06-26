import { Loader } from 'components/Loader';
import { useFetchMovieCasts } from 'hooks/useFetchMovieCasts';

const Cast = () => {
  const { movieCasts, isLoading, error } = useFetchMovieCasts();
  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {movieCasts.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                height="240"
              />
              <p>
                <strong>Name: </strong>
                {name}
              </p>
              <p>
                <strong>Role: </strong>
                {character}
              </p>
            </li>
          );
        })}
      </ul>
      {error && <p>{error}</p>}
    </>
  );
};
export default Cast;
