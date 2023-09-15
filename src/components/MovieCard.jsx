import React, { useState } from "react";
import { Link } from "react-router-dom";
import tomato from "../assets/tomato.png";

export default function MovieCard({
  id,
  poster_path,
  release_date,
  title,
  vote_average,
  genre_ids,
}) {
  const [isLike, setIsLiked] = useState(false);
  return (
    <Link to={`/movies/${id}`}  className="mt-10 hover:bg-gray-50 mx-3" data-testid: movie-card>
      <img
        src={`http://images.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        className="w-full h-[22rem] bg-gray-200 flex justify-center items-center"
data-testid: movie-poster
      />
      <div className="mt-3">
        <p className="text-gray-500 text-sm" data-testid: movie-release-date>{release_date}</p>
        <h4 className="mt-2.5 font-semibold" data-testid: movie-title>{title}</h4>
        <div className="mt-2.5 flex justify-between text-sm font-medium">
          <div className="flex">
            <img
              src={tomato}
              alt="Tomato icon"
              className="h-[1.2rem] w-[1.2rem] mr-1.5"
            />
            {vote_average * 10}%
          </div>
        </div>
        <p className="mt-2.5 text-gray-400 font-medium">{}</p>
      </div>
    </Link>
  );
}
