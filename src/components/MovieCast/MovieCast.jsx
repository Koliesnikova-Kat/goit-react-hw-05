import s from "./MovieCast.module.css";
import Two from "components/MovieReviews";

export default function One({ props }) {
  return (
    <>
      <h2 className={s.header}>Список друзів</h2>
      <ul className={s.list}>
        {props.map((prop) => (
          <li key={prop.id} className={s.item}>
            <Two
              avatar={prop.avatar}
              name={prop.name}
              isOnline={prop.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
