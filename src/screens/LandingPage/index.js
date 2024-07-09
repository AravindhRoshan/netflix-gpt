import React from "react";
import AppHeader from "../../components/Header";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";
import useFetchMoviesDatas from "../../hooks/useFetchMoviesDatas";

const LandingPage = () => {
  useFetchMoviesDatas();

  return (
    <>
      <div className="flex flex-col">
        <div className="z-20">
          <AppHeader />
        </div>
        <VideoContainer />
        <MovieListContainer />
      </div>
    </>
  );
};

export default LandingPage;
