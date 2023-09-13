import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);
  const focusedInput = useRef(null);
  return (
    <>
      <nav className="fixed w-full px-8 md:px-16 lg:px-24 py-6 flex space-x-3 justify-between">
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
        <div className="top-0 h-screen w-screen px-8 fixed bg-white/50 backdrop-blur-sm text-black z-[9999] flex justify-center items-center">
          <div className="relative mr-5">
            <button className="absolute right-0 top-0 mt-3 mr-4 text-[#3a4688]">
              <FaSearch />
            </button>
            <input
              type="text"
              className="border border-blue-500 rounded-full w-full md:w-[28rem] pl-3.5 pr-10 py-2"
              placeholder="What do you want to watch?"
              onLoad={() => focusedInput.current.focus()}
            />
          </div>
          <button
            onClick={() => setIsFocused(false)}
            className="text-white bg-[#3a4688] px-5 py-2 rounded-full font-bold"
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}
