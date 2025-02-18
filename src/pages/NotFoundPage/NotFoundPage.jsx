import { useNavigate } from "react-router-dom";
import s from "./NotFoundPage.module.css";
import { useEffect } from "react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <p className={s.error}>Page not found. Redirecting to the main page...</p>
    </>
  );
}
