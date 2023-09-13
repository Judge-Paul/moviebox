import React, { useState } from "react";

export default function MovieCard({
  image,
  release,
  title,
  rating,
  tomatometer,
  genre,
}) {
  const [isLike, setIsLiked] = useState(false);
  return (
    <div>
      <img src={image} alt={title} className="w-full" />
      <div>
        <p>{release}</p>
        <h4>{title}</h4>
        <div className="flex">
          <div>{rating}</div>
          <div>{tomatometer}%</div>
        </div>
        <p className="text-gray-400">{genre}</p>
      </div>
    </div>
  );
}
