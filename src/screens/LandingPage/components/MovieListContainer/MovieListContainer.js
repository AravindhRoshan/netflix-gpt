import React from "react";
import MovieListCategories from "./components/MovieListCategories";
import { useSelector } from "react-redux";

const MovieListContainer = () => {
  const movieData = useSelector(store => store.movies)
  console.log("---------------->", movieData);
  return (
    <div className="bg-black">
      {/* <MovieListCategories title={"Now Playing"} movieData = {movieData.nowPlayingMovies} />
      <MovieListCategories title={"Popular"} movieData = {movieData.nowPlayingMovies} />
      <MovieListCategories title={"Top Rated"} movieData = {movieData.nowPlayingMovies} />
      <MovieListCategories title={"Upcoming"} movieData = {movieData.nowPlayingMovies} /> */}
    </div>
  );
};

export default MovieListContainer;
