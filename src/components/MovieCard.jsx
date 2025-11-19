import React from "react";

const MovieCard = ({ image, desc }) => {
  return (
    <div className="relative inline-block min-w-[220px] w-[230px] h-[41dvh] mx-2 rounded-xl overflow-hidden shadow-md group transform transition duration-300 hover:scale-105 cursor-pointer">
      <img className="w-full h-full object-cover" src={image} alt={desc} />

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white text-center text-[16px] py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
        + Add to Favourite
      </div>
    </div>
  );
};

export default MovieCard;
