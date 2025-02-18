import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleEnterKeyDown = (e) => {
    e.key === "Enter" && onSubmit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast("Please enter a search query!", {
        icon: "❗️❗️❗️",
      });
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onKeyDown={handleEnterKeyDown}
          value={query}
          type='text'
          placeholder='Search your movie'
          autoComplete='off'
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
