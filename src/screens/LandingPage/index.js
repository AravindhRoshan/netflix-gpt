import React from "react";
import AppHeader from "../../components/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import VideoContainer from "./components/VideoContainer";
import MovieListContainer from "./components/MovieListContainer";

const LandingPage = () => {
  useNowPlayingMovies();

  return (
    <>
      <AppHeader />
      <VideoContainer />
      <MovieListContainer />
    </>
  );
};

export default LandingPage;
