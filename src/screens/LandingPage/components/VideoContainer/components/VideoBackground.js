import React, { useEffect } from "react";
import { API_OPTIONS } from "../../../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../../../../redux/movieSlice";
import useGetTrailerVideo from "../../../../../hooks/useGetTrailerVideo";

const VideoBackground = (props) => {
  const { movieID } = props;
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useGetTrailerVideo(movieID);
  return (
    <div className="w-screen bg-black">
      <iframe
        className="w-screen aspect-video"
        src={
          `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&vq=hd1080&rel=0&fs=1&mute=1`
        }
        title="YouTube video player"
        allow="autoplay; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
