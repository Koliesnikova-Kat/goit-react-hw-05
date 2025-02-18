import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.el}>
          <Link to={`/movies/${movie.id}`} state={location} className={s.link}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
