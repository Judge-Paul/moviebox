import React from "react";
// import data from "../data";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import image from "../assets/image.jpeg";

export default function FeaturedMovies() {
  return (
    <div className="px-8 md:px-16 lg:px-24 py-20">
      <div className="flex justify-between">
        <h4 className="font-semibold text-lg md:text-3xl">Featured Movies</h4>
        <Link className="flex text-[#BE123C]">
          <p className="font-normal md:font-semibold text-sm md:text-lg my-auto">
            See more
          </p>
          <AiOutlineRight className="my-auto" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:space-x-8">
        <MovieCard
          id={1}
          image={image}
          release="Nigeria 2006 - Current"
          title="Judge-Paul"
          rating="72.0"
          tomatometer={85}
          genre="Melanin Pumping Black Skin Boy"
        />
        <MovieCard
          id={1}
          image={image}
          release="Nigeria 2006 - Current"
          title="Judge-Paul"
          rating="72.0"
          tomatometer={85}
          genre="Melanin Pumping Black Skin Boy"
        />
        <MovieCard
          id={1}
          image={image}
          release="Nigeria 2006 - Current"
          title="Judge-Paul"
          rating="72.0"
          tomatometer={85}
          genre="Melanin Pumping Black Skin Boy"
        />
        <MovieCard
          id={1}
          image={image}
          release="Nigeria 2006 - Current"
          title="Judge-Paul"
          rating="72.0"
          tomatometer={85}
          genre="Melanin Pumping Black Skin Boy"
        />
        <MovieCard
          id={1}
          image={image}
          release="Nigeria 2006 - Current"
          title="Judge-Paul"
          rating="72.0"
          tomatometer={85}
          genre="Melanin Pumping Black Skin Boy"
        />
        <MovieCard
          id={1}
          image={image}
          release="Nigeria 2006 - Current"
          title="Judge-Paul"
          rating="72.0"
          tomatometer={85}
          genre="Melanin Pumping Black Skin Boy"
        />
        <MovieCard
          id={1}
          image={image}
          release="Nigeria 2006 - Current"
          title="Judge-Paul"
          rating="72.0"
          tomatometer={85}
          genre="Melanin Pumping Black Skin Boy"
        />
        <MovieCard
          id={1}
          image={image}
          release="Nigeria 2006 - Current"
          title="Judge-Paul"
          rating="72.0"
          tomatometer={85}
          genre="Melanin Pumping Black Skin Boy"
        />
      </div>
    </div>
  );
}
