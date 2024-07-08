import React from "react";

const VideoTitle = (props) => {
  const { title, desc } = props;
  return (
    <div className="py-[22%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl py-4 w-2/5 mb-4">{desc}</p>
      <div>
        <button className="bg-white text-black py-3 px-12 text-xl font-semibold rounded-md hover:opacity-70">
          Play
        </button>
        <button className="bg-gray-500 text-white py-3 px-9 bg-opacity-50  text-xl font-semibold mx-2 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
