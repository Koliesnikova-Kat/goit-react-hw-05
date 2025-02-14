import { useEffect, useState } from "react";
import s from "./MovieList.module.css";
import { fetchedMovies } from "../../API/api";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchedMovies();
      setMovies(data);
    };

    getData();
  }, []);

  return (
    <>
      <h1 className={s.header}>Trending today</h1>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.el}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
