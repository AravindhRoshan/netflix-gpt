import React from "react";
import { IMAGE_CARD_URL } from "../../../../../utils/constants";

const MovieCards = (props) => {
  const { posterPath } = props;
  return (
    <div className=" flex h-[100%] w-[200px] mx-2 ">
      <img className="rounded-md" alt="Poster Img" src={IMAGE_CARD_URL + posterPath} />
    </div>
  );
};

export default MovieCards;
