import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWQ5NzZlMmY2NGNmNWFiODJkNGE1ZDZlYWU0NWVjMyIsIm5iZiI6MTczOTQ2NjE3Ni42MzM5OTk4LCJzdWIiOiI2N2FlMjVjMGQwZmQ2NGQ5ZjJkMGQzN2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GVqUcsv_Hk0GpePC2mS8WDs4-R5n4RpMgMOZRpwmhSU";

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const trendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    options
  );

  return response.data.results;
};

export const getMovieByID = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    options
  );

  return response.data;
};

export const getReview = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return response.data;
};

export const getCast = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
    options
  );

  return response.data;
};

export const searchedMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`,
    options
  );

  return response.data.results;
};
