import { Outlet } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { searchedMovies } from "../../API/api";
import toast from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";
// import s from "./MoviesPage.module.css"

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        const results = await searchedMovies(query);
        setMovies(results);
      } catch {
        toast.error("Server is not responding!");
      }
    };

    handleSearch(query);
  }, [query]);

  const handleSetQuery = (newQuery) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={handleSetQuery} />

      {movies.length > 0 && (
        <MovieList movies={movies} fetchedMovies={searchedMovies} />
      )}

      <Outlet />
    </>
  );
}
