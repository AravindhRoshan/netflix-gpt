import React from "react";
import {  useSelector } from "react-redux";
import useGetTrailerVideo from "../../../../../hooks/useGetTrailerVideo";

const VideoBackground = (props) => {
  const { movieID } = props;
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useGetTrailerVideo(movieID);
  return (
    <div className="w-screen overflow-hidden">
      <div className="transform scale-150 w-screen aspect-video">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&vq=hd1080&rel=0&fs=1&mute=1`}
          title="YouTube video player"
          allow="autoplay; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
