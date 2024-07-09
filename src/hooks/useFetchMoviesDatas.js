import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatesMovies,
  addUpcomingMovies,
} from "../redux/movieSlice";
import { useEffect } from "react";

const useFetchMoviesDatas = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  };
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addPopularMovies(jsonData.results));
  };
  const getTopRatesMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addTopRatesMovies(jsonData.results));
  };
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
    if (!popularMovies) getPopularMovies();
    if (!topRatedMovies) getTopRatesMovies();
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
};

export default useFetchMoviesDatas;
