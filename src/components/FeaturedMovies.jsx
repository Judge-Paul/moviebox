import React from "react";
import { data } from "../data";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function FeaturedMovies() {
  const moviesData = data.results.slice(0, 10);
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20">
      <div className="flex justify-between my-auto">
        <h4 className="font-semibold text-lg md:text-3xl">Featured Movies</h4>
        <Link className="flex text-[#BE123C]">
          <p className="font-normal md:font-semibold text-sm md:text-lg my-auto">
            See more
          </p>
          <AiOutlineRight className="my-auto" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {moviesData.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
}
