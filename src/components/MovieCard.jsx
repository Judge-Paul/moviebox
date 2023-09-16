import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import tomato from "../assets/tomato.png";
import { toast } from 'sonner';

export default function MovieCard({
  id,
  poster_path,
  release_date,
  title,
  vote_average,
  genre_ids,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (isLiked) {
      setIsLiked(false);
      toast(`"${title}" has been removed from favorites`);
    } else {
      setIsLiked(true);
      toast(`"${title}" has been added to favorites`);
    }
  };

  return (
    <Link to={`/movies/${id}`} className="mt-10 hover:bg-gray-50 mx-3" data-testid="movie-card">
      <div className="absolute top-0 right-0 m-2 bg-transparent border-none outline-none cursor-pointer" style={{ zIndex: -1 }}>
        <div className="p-1 rounded-full bg-transparent w-10 h-10">
          <button
            onClick={handleLikeClick}
            className={`w-full h-full bg-gray-200/50 border-none outline-none cursor-pointer ${isLiked ? 'text-pink-500' : 'text-gray-500'}`}
          >
            <FiHeart size={24} />
          </button>
        </div>
      </div>
      <img
        src={`http://images.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        className="w-full h-[22rem] bg-gray-200 flex justify-center items-center"
        data-testid="movie-poster"
      />
      <div className="mt-3">
        <p className="text-gray-500 text-sm" data-testid="movie-release-date">{release_date}</p>
        <h4 className="mt-2.5 font-semibold" data-testid="movie-title">{title}</h4>
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