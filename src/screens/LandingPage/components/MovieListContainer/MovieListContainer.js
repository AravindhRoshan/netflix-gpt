import React from "react";
import MovieListCategories from "./components/MovieListCategories";
import { useSelector } from "react-redux";

const MovieListContainer = () => {
  const movieData = useSelector((store) => store.movies);
  console.log("---------------->", movieData);
  return (
    movieData && (
      <div className="bg-black z-20">
        <div className=" z-20 -mt-56">
          <MovieListCategories
            title={"Now Playing"}
            movieData={movieData.nowPlayingMovies}
          />
          <MovieListCategories
            title={"Popular"}
            movieData={movieData.popularMovies}
          />
          <MovieListCategories
            title={"Top Rated"}
            movieData={movieData.topRatedMovies}
          />
          <MovieListCategories
            title={"Upcoming"}
            movieData={movieData.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default MovieListContainer;
