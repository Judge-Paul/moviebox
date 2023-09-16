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

toUTC = (date) => new Date(date + 'T00:00:00Z').toISOString();

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

  return (
    <main className="flex">
      <div className="hidden md:block fixed h-screen w-56 py-12 border border-gray-400 rounded-r-[50px]">
        <img src="" alt="" />
        <div className="mt-10 block">
          <Link
            to="/"
            className="block text-center hover:bg-red-100 text-gray-500 text-md py-3 font-semibold"
          >
            Home
          </Link>
          <Link
            to="/movie"
            className="block text-center bg-red-200 border-r-[6px] border-red-500 text-gray-500 text-md py-3 font-semibold"
          >
            Movies
          </Link>
          <Link
            to="/movie"
            className="block text-center hover:bg-red-100 text-gray-500 text-md py-3 font-semibold"
          >
            Tv Series
          </Link>
          <Link
            to="/movie"
            className="block text-center hover:bg-red-100 text-gray-500 text-md py-3 font-semibold"
          >
            Upcoming
          </Link>
        </div>
        <div className="border border-red-500 bg-red-50 mt-10 mx-5 pt-6 pb-4 px-3 rounded-2xl">
          <h4 className="text-gray-600 text-md font-semibold">
            Play movie quizes and earn free tickets
          </h4>
          <p className="mt-2.5 text-gray-500 text-xs">
            50k people are playing now
          </p>
          <div className="mt-3 flex justify-center">
            <button className="bg-red-200 hover:bg-red-300 text-sm text-red-600 rounded-full px-5 py-1.5 font-semibold">
              Start Playing
            </button>
          </div>
        </div>
        <Link
          to="/movie"
          className="mt-4 block text-center hover:bg-red-100 text-gray-500 text-md py-3 font-semibold"
        >
          Log out
        </Link>
      </div>
      
      <div className="mt-10 mx-5 w-max md:ml-64 lg:ml-72 md:mr-14">
        {loading ? (
          <Skeleton height={400} />
        ) : error ? (
          <div>Error loading movie data.</div>
        ) : (
          <>
            {movie.video ? 
            <video controls poster={movie.poster_path}>
              <source
                src={`https://www.youtube.com/watch?v=${movie.youtube_trailer_key}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>: <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title + "Background Image"} className rounded-2xl />}
            
            <h4 className="text-lg font-medium" data-testid="movie-title">{movie.title}</h4>
            <p className="text-lg font-medium" data-testid="movie-release-date" >{toUTC(movie.release_date)}</p>
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
            {movie.director ?? <p className="text-gray-600 font-medium mt-7">
              Director: <span className="text-red-500">{movie.director}</span>
            </p>}
{movie.director && (
  <p className="text-gray-600 font-medium mt-7">
    Director: <span className="text-red-500">{movie.director}</span>
  </p>
)}
{movie.writers && (
  <p className="text-gray-600 font-medium mt-7">
    Writers: <span className="text-red-500">{movie.writers}</span>
  </p>
)}
{movie.stars && (
  <p className="text-gray-600 font-medium mt-7">
    Stars: <span className="text-red-500">{movie.stars}</span>
  </p>
)}
            
            <div className="mt-7 md:flex mb-10">
              {movie.top_rated && <h4 className="px-4 py-3 bg-red-500 rounded-md text-white font-medium text-center md:w-1/2 lg:w-1/3">
                {movie.top_rated}
              </h4>}
              {movie.awards && <h4 className="px-3 py-3 rounded-md text-gray-800 font-medium border border-gray-400 text-center mt-3 md:mt-0 md:w-1/2 lg:w-2/3">
                {movie.awards}
              </h4>}
            </div>
          </>
        )}
      </div>
    </main>
  );
}