import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bg from "../assets/bg.svg";
import axios from "axios";

export default function Movie() {
  //   const [movie, setMovie] = useState(null);
  //   const { id } = useParams();

  //   useEffect(() => {
  //     axios.get(`https://api.themoviedb.org/3/movie/${id}`);
  //   }, []);
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
        <img src={bg} alt="Movie Trailer" className="rounded-2xl" />
        <div className="grid xl:grid-cols-3">
          <div className="md:px-4 xl:col-span-2">
            <div className="mt-6 lg:flex text-gray-700 justify-between">
              <div className="sm:flex w-[85%] xl:mr-7 justify-between md:justify-items-start">
                <h4 className="text-lg font-medium">Top Gun: Maverick</h4>
                <p className="text-lg font-medium">2022</p>
                <p className="text-lg font-medium">PG-13</p>
                <p className="text-lg font-medium">2h 10m</p>
              </div>
              <div className="lg:w-1/2 xl:w-1/3 flex lg:justify-between">
                <span className="text-red-500 hover:bg-red-100 mr-2 px-4 py-1.5 border border-red-500 rounded-full text-xs font-semibold cursor-pointer">
                  Action
                </span>
                <span className="text-red-500 hover:bg-red-100 ml-2 px-4 py-1.5 border border-red-500 rounded-full text-xs font-semibold cursor-pointer">
                  Drama
                </span>
              </div>
            </div>
            <div>
              <p className="mt-10 text-gray-600 font-medium">
                After thirty years, Maverick is still pushing the envelope
              </p>
              <p className="text-gray-600 font-medium mt-7">
                Director: <span className="text-red-500">Joseph Kasinski</span>
              </p>
              <p className="text-gray-600 font-medium mt-7">
                Writers:{" "}
                <span className="text-red-500">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p className="text-gray-600 font-medium mt-7">
                Stars:{" "}
                <span className="text-red-500">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
            </div>
            <div className="mt-7 md:flex mb-10">
              <h4 className="px-4 py-3 bg-red-500 rounded-md text-white font-medium text-center md:w-1/2 lg:w-1/3">
                Top rated movie #65
              </h4>
              <h4 className="px-3 py-3 rounded-md text-gray-800 font-medium border border-gray-400 text-center mt-3 md:mt-0 md:w-1/2 lg:w-2/3">
                Awards 9 nominations
              </h4>
            </div>
          </div>
          <div className="xl:col-span-1 w-full mt-6">
            <div className="md:text-right">
              <span className="text-gray-400 font-semibold text-xl">8.5</span> |
              350k
            </div>
            <div className="mt-4 w-full">
              <h4 className="bg-red-500 hover:bg-red-600 rounded-md w-full py-3 text-center text-white font-semibold cursor-pointer">
                See Showtimes
              </h4>
              <h4 className="mt-3 bg-red-100 hover:bg-red-200 border border-red-500 rounded-md w-full py-3 text-center text-gray-800 font-semibold cursor-pointer">
                More watch options
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
