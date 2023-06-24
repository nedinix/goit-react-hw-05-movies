export const TrendingMovies = ({ movies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
