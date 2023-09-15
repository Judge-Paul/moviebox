import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import rating from "../assets/rating.svg";

export default function FeaturedMovie() {
  const { title, overview, backdrop_path } = data.results[0];
  return (
    <section
      className={`px-8 md:px-16 lg:px-24 bg-coverImage bg-cover bg-norepeat bg-center h-[700px] flex items-center`}
    >
      <div className="md:w-3/5 lg:w-2/5 text-white">
        <h4 className="text-5xl md:text-6xl font-bold">
          John Wick 3: Parabellum
        </h4>
        <img src={rating} alt="Rating Image" className="mt-6" />
        <p className="mt-6 font-medium text-justify">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
      </div>
    </section>
  );
}
