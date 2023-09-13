import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./pages/Movie";

const HomeWrapper = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

const MovieWrapper = () => {
  return (
    <>
      <Movie />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
