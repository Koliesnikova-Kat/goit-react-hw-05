import s from "./MovieList.module.css";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <>
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
