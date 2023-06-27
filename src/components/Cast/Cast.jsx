import { Loader } from 'components/Loader';
import { useFetchMovieCasts } from 'hooks/useFetchMovieCasts';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieCasts, isLoading, error } = useFetchMovieCasts();
  return (
    <>
      {isLoading && <Loader />}
      {movieCasts.length ? (
        <CastList>
          {movieCasts.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="160"
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
        </CastList>
      ) : (
        <p></p>
      )}
      {error && <p>{error}</p>}
    </>
  );
};
export default Cast;
