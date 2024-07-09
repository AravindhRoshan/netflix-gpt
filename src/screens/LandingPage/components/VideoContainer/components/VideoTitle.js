import React from "react";

const VideoTitle = (props) => {
  const { title, desc } = props;
  return (
    <div className="px-4 md:px-10 absolute text-white bg-gradient-to-t from-black w-screen aspect-video z-10">
      <div className="mt-[30%] md:mt-[22%]">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="text-sm md:text-base py-4 w-full md:w-2/5 mb-4">{desc}</p>
      </div>
      <div>
        <button className="bg-white text-black py-2 px-6 md:py-3 md:px-12 text-lg md:text-xl font-semibold rounded-md hover:opacity-70">
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-6 md:py-3 md:px-9 bg-opacity-50 text-lg md:text-xl font-semibold mx-2 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
  
};

export default VideoTitle;
