import { useEffect, useState } from "react";
import { trendingMovies } from "../../API/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css"

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
    <div className={s.home}>
      <h1>Trending today movies</h1>
      <MovieList movies={movies} fetchedMovies={trendingMovies} />
    </div>
  );
}
