import React from "react";
import { IMAGE_CARD_URL } from "../../../utils/constants";

const MovieCards = (props) => {
  const { posterPath, title } = props;
  if (posterPath === null) return;
  return (
    <>
      <div className="flex flex-col items-center md:w-1/5">
        <div className=" flex h-5/10 w-4/5 mx-2">
          <img
            className="rounded-md "
            alt="Poster Img"
            src={IMAGE_CARD_URL + posterPath}
          />
        </div>
        <h1 className="text-white font-bold text-xl p-4 "> {title}</h1>
      </div>
    </>
  );
};

export default MovieCards;
