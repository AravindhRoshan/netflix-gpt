import React, { useRef } from "react";
import MovieCards from "./MovieCards";

const MovieListCategories = (props) => {
  const { title, movieData } = props;
  console.log("movieData", movieData);
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="px-3">
      <h1 className="text-white font-bold text-4xl p-4 ">
        {title + " Movies"}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movieData &&
            movieData.map((movie, index) => (
              <MovieCards key={movie.id} posterPath={movie.poster_path} />
            ))}
          <div className="flex items-center justify-center min-w-[150px] bg-gray-800">
            <button
              onClick={scrollRight}
              className="text-white p-2 rounded-full"
            >
              Arrow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListCategories;
