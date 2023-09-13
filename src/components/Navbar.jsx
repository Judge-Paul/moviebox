import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <nav className="fixed bg-black/50 backdrop-blur-sm w-full px-8 md:px-16 lg:px-24 py-4 flex space-x-3 justify-between">
        <img src={logo} alt="Logo Icon" />
        <img
          src={search}
          alt="Search Input"
          className="cursor-pointer w-[70%] max-w-max hidden md:block"
          onClick={() => setIsFocused(true)}
        />
        <div className="flex lg:space-x-3">
          <h4 className="w-full my-auto font-semibold text-lg text-white hidden lg:block">
            Sign In
          </h4>
          <img src={menu} alt="Menu Icon" />
        </div>
      </nav>
      {isFocused && (
        <div className="top-0 h-screen w-screen px-4 fixed pt-8 md:pt-16 bg-white/50 backdrop-blur-sm text-black z-[9999] flex justify-center">
          <div className="bg-blue-300/75 rounded-xl px-2 md:px-3 md:pr-6 pt-1 md:pt-4 h-max">
            <div className="flex">
              <div className="relative mr-5">
                <button className="absolute left-0 top-0 mt-3 ml-4 text-[#3a4688]">
                  <FaSearch />
                </button>
                <input
                  type="text"
                  className="bg-transparent focus:outline-none text-white placeholder-white rounded-full w-full md:w-[28rem] pl-10 pr-3.5 py-2"
                  placeholder="What do you want to watch?"
                />
              </div>
              <button
                onClick={() => setIsFocused(false)}
                className="hidden md:block text-white bg-[#3a4688] h-max px-8 py-2 rounded-full font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsFocused(false)}
                className="md:hidden text-[#3a4688] h-max p-2"
              >
                <IoClose size="25px" />
              </button>
            </div>
            <div className="flex justify-center items-center px-4 h-64 text-white font-semibold">
              Start typing to search...
            </div>
          </div>
        </div>
      )}
    </>
  );
}
