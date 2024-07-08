import React from "react";
import AppHeader from "../../components/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";

const LandingPage = () => {
  useNowPlayingMovies();

  return (
    <>
      <div className="flex">
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
