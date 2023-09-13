import React, { useState } from "react";
import { Link } from "react-router-dom";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";

export default function MovieCard({
  id,
  image,
  release,
  title,
  rating,
  tomatometer,
  genre,
}) {
  const [isLike, setIsLiked] = useState(false);
  return (
    <Link to={`/movie/${id}`} className="mt-10 hover:bg-gray-50 mx-3">
      <img src={image} alt={title} className="w-full h-[22rem]" />
      <div className="mt-3">
        <p className="text-gray-500 text-sm">{release}</p>
        <h4 className="mt-2.5 font-semibold">{title}</h4>
        <div className="mt-2.5 flex justify-between text-sm font-medium">
          <div className="flex my-auto">
            <img
              src={imdb}
              alt="IMDB icon"
              className="h-[1.2rem] mr-1.5 w-10"
            />
            {rating} / 100
          </div>
          <div className="flex">
            <img
              src={tomato}
              alt="Tomato icon"
              className="h-[1.2rem] w-[1.2rem] mr-1.5"
            />
            {tomatometer}%
          </div>
        </div>
        <p className="mt-2.5 text-gray-400 font-medium">{genre}</p>
      </div>
    </Link>
  );
}
