import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ handleChangeQuery, query }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // const query = searchParams.get("query") || "";

  const handleChange = (e) => {
    handleChangeQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast("Please enter a search query!", {
        icon: "❗️❗️❗️",
      });
      return;
    }

    navigate(`/movies?query=${query}`);
  };

  return (
    <div className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={query || ""}
          type='text'
          placeholder='Search your movie'
          autoFocus
          className={s.input}
        />
        <button type='submit' className={s.btn}>
          Search
        </button>
      </form>
    </div>
  );
}
