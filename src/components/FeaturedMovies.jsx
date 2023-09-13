import React from "react";
// import data from "../data";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function FeaturedMovies() {
  return (
    <div className="px-8 md:px-12 lg:px-16 h-screen">
      <div className="flex justify-between">
        <h4 className="font-semibold text-2xl">Featured Movie</h4>
        <Link className="flex text-[#BE123C]">
          <p className="font-normal text-lg">See more</p>
          <AiOutlineRight className="my-auto" />
        </Link>
      </div>
    </div>
  );
}
