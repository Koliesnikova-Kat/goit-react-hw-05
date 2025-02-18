import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { searchedMovies } from "../../API/api";
import toast from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

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

    handleSearch();
  }, [query]);

  const handleChangeQuery = (value) => {
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />

      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
