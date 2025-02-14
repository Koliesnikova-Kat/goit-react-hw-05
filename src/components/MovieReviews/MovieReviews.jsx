import s from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReview } from "../../API/api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);
        const reviewData = await getReview(movieId);
        setReviews(reviewData.results);
      } catch {
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!reviews || reviews.length === 0) {
    return <p>There is still no reviews</p>;
  }

  return (
    <ul className={s.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <div>
            <h3>{author || "Anonymous"}</h3>
            <p>{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
