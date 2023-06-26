export const MovieCard = ({ movie }) => {
  const { title, poster_path, status, vote_average, overview, genres } = movie;

  const normalizedGenres = genres
    ? genres.map(({ name }) => name).join(', ')
    : 'none';
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>Status: {status}</p>
        <p>User score: {vote_average}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h5>Genres</h5>
        <p>{normalizedGenres}</p>
      </div>
    </div>
  );
};
