import { Route, Routes } from "react-router-dom";
import MovieCast from "components/MovieCast/MovieCast";
import MovieReviews from "components/MovieReviews/MovieReviews";
import Navigation from "components/Navigation/Navigation";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <>
      <Toaster />

      <Navigation />

      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
