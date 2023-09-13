import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <Link to={`/movie/${id}`} className="mt-10 hover:bg-gray-100">
      <img src={image} alt={title} className="w-full h-[22rem]" />
      <div className="mt-3">
        <p className="text-gray-500 text-sm">{release}</p>
        <h4 className="mt-2.5 font-semibold">{title}</h4>
        <div className="mt-2.5 flex justify-between">
          <div>{rating} / 100</div>
          <div>{tomatometer}%</div>
        </div>
        <p className="mt-2.5 text-gray-400 font-medium">{genre}</p>
      </div>
    </Link>
  );
}
