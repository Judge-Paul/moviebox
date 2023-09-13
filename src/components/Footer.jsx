import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaHashnode,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-12 md:pb-6">
      <div className="mx-auto px-4 overflow-hidden sm:px-6 lg:px-8 pt-8 border-t-2 border-white">
        <div className="flex justify-center space-x-4 md:space-x-10">
          <Link
            to="https://facebook.com"
            className="text-gray-700 hover:text-gray-600 px-1.5 py-1"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6 md:h-7 md:w-7" />
          </Link>
          <Link
            to="https://instagram.com"
            className="text-gray-700 hover:text-gray-600 px-1.5 py-1"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6 md:h-7 md:w-7" />
          </Link>
          <Link
            to="https://x.com/jadge_dev"
            className="text-gray-700 hover:text-gray-600 px-1.5 py-1"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6 md:h-7 md:w-7" />
          </Link>
          <Link
            to="https://youtube.com/@jadge_dev23"
            className="text-gray-700 hover:text-gray-600 px-1.5 py-1"
          >
            <span className="sr-only">YouTube</span>
            <FaYoutube className="h-6 w-6 md:h-7 md:w-7" />
          </Link>
        </div>
        <nav
          className="-mx-5 -my-2 mt-10 flex flex-wrap justify-center text-gray-700"
          aria-label="Footer"
        >
          <Link
            to="#"
            className="px-5 py-2 text-base font-semibold hover:text-gray-500"
          >
            Conditions of Use
          </Link>
          <Link
            to="#"
            className="px-5 py-2 text-base font-semibold hover:text-gray-500"
          >
            Privacy & Policy
          </Link>
          <Link
            to="https://github.com/Judge-Paul/coverwrite-ai"
            className="px-5 py-2 text-base font-semibold hover:text-gray-500"
          >
            Press Room
          </Link>
        </nav>
        <p className="mt-10 text-center font-semibold text-lg text-gray-500">
          &copy; 2023 MovieBox by Jadge
        </p>
      </div>
    </footer>
  );
}
