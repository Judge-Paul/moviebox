import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const HomeWrapper = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
