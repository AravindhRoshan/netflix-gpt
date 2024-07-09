import React, { useRef } from "react";
import { API_OPTIONS, BACKGROUND_IMAGE_URL } from "../../utils/constants";
import MovieListCategories from "./components/MovieListCategories";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResultMovies } from "../../redux/movieSlice";
import AppHeader from "../../components/Header";

const GPTSearchPage = () => {
  const inputText = useRef("hello");
  const dispatch = useDispatch();
  const handleInputText = () => {
    console.log(inputText.current.value);
    getSearchMovie(inputText.current.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
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
      <AppHeader />
      <div className="flex flex-col items-center px-4 py-10 md:px-8 lg:px-16 mt-20">
        <h1 className="text-white text-4xl font-bold mb-10 lg:text-5xl z-10">GPT Search</h1>

        <form
          className="flex flex-col w-full max-w-md space-y-4 md:flex-row md:space-y-0 md:space-x-4"
          onSubmit={handleFormSubmit}
        >
          <input
            className="h-12 w-full rounded-md p-3 text-black md:w-2/3"
            ref={inputText}
            placeholder="What would you like to watch today?"
            type="text"
          />
          <button
            className="bg-red-500 h-12 w-full rounded-md p-1 font-medium text-md text-white md:w-1/3"
            onClick={handleInputText}
          >
            Search
          </button>
        </form>
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
