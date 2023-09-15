import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";
import SearchCard from "./SearchCard";
import { toast } from "sonner";

const { VITE_TMDB_API_KEY } = import.meta.env;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export default function Navbar() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    if (!value) {
      setResults(null);
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsFocused(false);
    setSearchQuery("");
    setResults(null);
  };

  useEffect(() => {
    const search = async () => {
      if (searchQuery !== "") {
        setIsLoading(true);
        try {
          const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
            params: {
              api_key: VITE_TMDB_API_KEY,
              query: searchQuery,
            },
          });
          setResults(response.data.results.slice(0, 6));
        } catch (error) {
          console.error(error);
          toast.error(error.message);
          toast.error("Failed! Try Again.");
          closeModal();
        } finally {
          setIsLoading(false);
        }
      }
    };
    search();
  }, [searchQuery]);

  console.log(results);
  return (
    <>
      <nav
        className={`fixed bg-black/50 backdrop-blur-sm w-full px-8 md:px-16 lg:px-24 py-4 flex space-x-3 justify-between 
        ${location.pathname.includes("/movie") && "md:hidden"}`}
      >
        <img src={logo} alt="Logo Icon" />
        <img
          src={search}
          alt="Search Input"
          className="cursor-pointer w-[70%] max-w-max hidden md:block"
          onClick={() => setIsFocused(true)}
        />
        <div className="flex space-x-5">
          <h4 className="w-full my-auto font-semibold text-lg text-white hidden lg:block">
            Sign In
          </h4>
          <FaSearch
            onClick={() => setIsFocused(true)}
            size="35px"
            className="md:hidden text-white my-auto cursor-pointer"
          />
          <img src={menu} alt="Menu Icon" />
        </div>
      </nav>
      {isFocused && (
        <div className="top-0 h-screen w-screen px-4 fixed pt-8 md:pt-16 bg-white/50 backdrop-blur-sm text-black z-[9999] flex justify-center">
          <div className="bg-blue-500/90 rounded-xl px-2 md:px-3 md:pr-6 pt-1 md:pt-4 h-max w-[25rem] md:w-[40rem] pb-8">
            <div className="flex">
              <div className="relative mr-5">
                <button
                  className={`absolute left-0 top-0 mt-3 ml-4 text-[#3a4688] ${
                    isLoading && "animate-spin"
                  }`}
                >
                  {isLoading ? <ImSpinner8 /> : <FaSearch />}
                </button>
                <input
                  type="text"
                  className="bg-transparent focus:outline-none text-white placeholder-white rounded-full w-full md:w-[28rem] pl-10 pr-3.5 py-2"
                  placeholder="What do you want to watch?"
                  onChange={handleChange}
                  value={searchQuery}
                />
              </div>
              <button
                onClick={closeModal}
                className="hidden md:block text-white bg-[#3a4688] h-max px-8 py-2 rounded-full font-bold ml-auto"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="md:hidden text-[#3a4688] h-max p-2 ml-auto"
              >
                <IoClose size="30px" />
              </button>
            </div>
            {results && results.length > 0 ? (
              <div className="h-64 md:h-80 text-white font-semibold overflow-scroll">
                {results.map((result) => (
                  <SearchCard key={result.id} {...result} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-64 md:h-80 text-white font-semibold">
                {searchQuery === "" && "Start typing to search..."}
                {results && results.length === 0 && "Movie Not Found"}
                {isLoading && "Loading..."}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
