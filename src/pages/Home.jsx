import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedMovie from "../components/FeaturedMovie";

export default function Home() {
  return (
    <main>
      <FeaturedMovie />
      <FeaturedMovies />
    </main>
  );
}
