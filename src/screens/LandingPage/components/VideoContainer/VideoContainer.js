import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./components/VideoTitle";
import VideoBackground from "./components/VideoBackground";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];
  console.log("mainMovie-------------------->", mainMovie);
  return (
    <div>
      <VideoTitle title={mainMovie.original_title} desc={mainMovie.overview} />
      <VideoBackground movieID={mainMovie.id} />
    </div>
  );
};

export default VideoContainer;
