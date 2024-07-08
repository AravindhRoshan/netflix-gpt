import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useEffect } from "react";

const useGetTrailerVideo = (movieID) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log("jsonData from trailer", jsonData);

    const trailerDatas = jsonData?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerVideo = trailerDatas.length ? trailerDatas[0] : jsonData[0];
    console.log("trailerVideo", trailerVideo);
    dispatch(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useGetTrailerVideo;
