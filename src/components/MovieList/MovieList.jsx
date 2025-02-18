import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();
  // console.log(location);

  // const handleClick = (movieId) => (e) => {
  //   if (onMovieClick) {
  //     e.preventDefault();
  //     onMovieClick(movieId);
  //   }
  // };

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.el}>
          <Link
            to={`/movies/${movie.id}`}
            state={location}
            // onClick={handleClick(movie.id)}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
