import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function FeaturedMovies() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(apiUrl)
      .then((response) => {
        setMoviesData(response.data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching data from TMDB API:", error);
      });
  }, []);

  return (
    <section className="px-8 md:px-16 lg:px-24 py-20">
      <div className="flex justify-between my-auto">
        <h4 className="font-semibold text-lg md:text-3xl">Top Rated Movies</h4>
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