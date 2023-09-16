import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const { VITE_TMDB_API_KEY } = import.meta.env;

export default function Movie() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${VITE_TMDB_API_KEY}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchMovieData();
  }, [id]);

  function formatTime(minutes) {
    if (minutes < 0 || !Number.isInteger(minutes)) {
      throw new Error("Input minutes must be a non-negative integer");
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes}m`;
    } else if (hours === 1) {
      return `1h ${remainingMinutes}m`;
    } else {
      return `${hours}h ${remainingMinutes}m`;
    }
  }

  return (
    <main className="flex">
      {/* Your sidebar and navigation links */}
      
      <div className="mt-10 mx-5 w-max md:ml-64 lg:ml-72 md:mr-14">
        {loading ? (
          <Skeleton height={400} />
        ) : error ? (
          <div>Error loading movie data.</div>
        ) : (
          <>
            {/* Video player for the trailer */}
            <video controls poster={movie.poster_path}>
              <source
                src={`https://www.youtube.com/watch?v=${movie.youtube_trailer_key}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            
            <h4 className="text-lg font-medium" data-testid="movie-title">{movie.title}</h4>
            <p className="text-lg font-medium" data-testid="movie-release-date" >{movie.release_date}</p>
            <p className="text-lg font-medium">PG-13</p>
            <p className="text-lg font-medium" data-testid="movie-runtime" >{movie.runtime}</p>
            
            {/* Genres */}
            <div className="lg:w-1/2 xl:w-1/3 flex lg:justify-between">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="text-red-500 hover:bg-red-100 ml-2 px-4 py-1.5 border border-red-500 rounded-full text-xs font-semibold cursor-pointer"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            
            {/* Additional movie information */}
            <p className="mt-10 text-gray-600 font-medium" data-testid="movie-overview">
              {movie.overview}
            </p>
            <p className="text-gray-600 font-medium mt-7">
              Director: <span className="text-red-500">{movie.director}</span>
            </p>
            <p className="text-gray-600 font-medium mt-7">
              Writers: <span className="text-red-500">{movie.writers}</span>
            </p>
            <p className="text-gray-600 font-medium mt-7">
              Stars: <span className="text-red-500">{movie.stars}</span>
            </p>
            
            {/* More movie details */}
            <div className="mt-7 md:flex mb-10">
              <h4 className="px-4 py-3 bg-red-500 rounded-md text-white font-medium text-center md:w-1/2 lg:w-1/3">
                {movie.top_rated}
              </h4>
              <h4 className="px-3 py-3 rounded-md text-gray-800 font-medium border border-gray-400 text-center mt-3 md:mt-0 md:w-1/2 lg:w-2/3">
                {movie.awards}
              </h4>
            </div>
          </>
        )}
      </div>
    </main>
  );
}