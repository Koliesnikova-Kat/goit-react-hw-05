import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getMovieByID } from "../../API/api";
import { FaArrowLeft } from "react-icons/fa";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBackURL = useRef(location?.state ?? "/movies");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const movieData = await getMovieByID(movieId);
        setMovie(movieData);
      } catch {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found</p>;

  return (
    <div className={s.movie}>
      <Link to={goBackURL.current} className={s.back}>
        <FaArrowLeft style={{ marginRight: "5px" }} />
        Go back
      </Link>
      <div className={s.movieCard}>
        <img
          src={`${posterBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className={s.poster}
        />
        <div className={s.cardInfo}>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <hr />
      <div>
        <p className={s.addInfo}>Additional information</p>
        <nav className={s.nav}>
          <NavLink to='cast' className={buildLinkClass}>
            Cast
          </NavLink>
          <NavLink to='reviews' className={buildLinkClass}>
            Reviews
          </NavLink>
        </nav>
      </div>
      <hr />
      <Outlet context={{ movie }} />
    </div>
  );
}
