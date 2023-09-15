import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movie from "./pages/Movie";
import { Toaster } from "sonner";

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
      <Navbar />
      <Movie />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/movies/:id" element={<MovieWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
