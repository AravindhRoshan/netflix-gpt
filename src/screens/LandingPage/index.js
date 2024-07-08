import React from "react";
import AppHeader from "../../components/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import useFetchMoviesDatas from "../../hooks/useFetchMoviesDatas";

const LandingPage = () => {
  // useNowPlayingMovies();
  useFetchMoviesDatas();

  return (
    <>
      <div className="flex flex-col">
        <div className="z-10">
          <AppHeader />
        </div>
        <VideoContainer />
        <MovieListContainer />
      </div>
    </>
  );
};

export default LandingPage;
