import React, { useRef } from "react";
import { API_OPTIONS, BACKGROUND_IMAGE_URL } from "../../utils/constants";
import { current } from "@reduxjs/toolkit";
import MovieListCategories from "./components/MovieListCategories";
import { data } from "autoprefixer";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResultMovies } from "../../redux/movieSlice";

const GPTSearchPage = () => {
  const inputText = useRef("hello");
  const dispatch = useDispatch();
  const handleInputText = () => {
    console.log(inputText.current.value);
    getSearchMovie(inputText.current.value);
  };
  const getSearchMovie = async (inputText) => {
    const movieResults = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        inputText +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await movieResults.json();
    console.log("Movie-------->", data.results);
    dispatch(addSearchResultMovies(data.results));
  };

  const searchResultMovies = useSelector(
    (store) => store.movies.searchResultMovies
  );

  return (
    <div className="">
      <div className=" h-screen w-screen -z-10 fixed">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>
      </div>
      <div className="flex items-center flex-col ">
        <div>
          <h1 className="text-white font-bold text-5xl py-10">GPT Search</h1>
        </div>
        <div className="flex w-4/12  justify-between ">
          <input
            className="h-12 w-[300px] rounded-md p-3"
            ref={inputText}
            placeholder="What would you like to watch today?"
            type="text"
          />
          <button
            className="bg-red-500 h-12 w-24 rounded-md p-1 text-white font-medium text-md"
            onClick={handleInputText}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <MovieListCategories
          title={"Search Results"}
          movieData={searchResultMovies}
        />
      </div>
    </div>
  );
};

export default GPTSearchPage;
