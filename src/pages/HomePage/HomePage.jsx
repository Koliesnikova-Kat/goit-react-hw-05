import { useEffect, useState } from "react";
import { trendingMovies } from "../../API/api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await trendingMovies();
      setMovies(data);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} fetchedMovies={trendingMovies} />
    </>
  );
}
