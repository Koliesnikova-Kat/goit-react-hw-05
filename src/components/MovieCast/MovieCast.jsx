import s from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from "../../API/api";

const photoBaseUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const castData = await getCast(movieId);
        setCast(castData.cast || []);
      } catch {
        setError("Failed to fetch cast.");
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!cast || cast.length === 0) {
    return <p>There is no information about cast</p>;
  }

  return (
    <ul className={s.list}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={s.item}>
          <img
            src={
              profile_path
                ? `${photoBaseUrl}${profile_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character:</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
}
