import React from "react";
import MovieCards from "./MovieCards";

const MovieListCategories = (props) => {
  const { title, movieData } = props;
  console.log("movieData", movieData);
 
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
        </div>
      </div>
    </div>
  );
};

export default MovieListCategories;
