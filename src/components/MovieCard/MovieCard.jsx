export const MovieCard = ({
  title,
  poster_link,
  status,
  userScore,
  overview,
  genres,
}) => {
  const normalizedGenres = genres && genres.map(({ name }) => name).join(', ');
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_link}`}
          alt={title}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>Status: {status}</p>
        <p>User score: {userScore}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h5>Genres</h5>
        <p>{normalizedGenres}</p>
      </div>
    </div>
  );
};
