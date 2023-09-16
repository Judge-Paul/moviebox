import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import reactLogo from "../assets/react.svg";

export default function SearchCard({ id, title, poster_path, overview }) {
  return (
    <Link to={`/movies/${id}`} className="w-[23rem]">
      <div className="flex mb-3 hover:bg-blue-400">
        <img
          src={`http://images.tmdb.org/t/p/w92/original${poster_path}`}
          alt={title}
          className="w-[100px] md:w-[180px] h-36 md:h-48 bg-gray-400"
        />
        <div className="mx-5 mt-3 w-max">
          <h4 className="text-xl">{title || <Skeleton />}</h4>
          <p className="mt-3 w-full text-gray-300 font-normal text-sm text-justify h-16 line-clamp-3">
            {overview}
          </p>
        </div>
      </div>
    </Link>
  );
}
