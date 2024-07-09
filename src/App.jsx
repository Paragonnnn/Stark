import React, { useState } from "react";
import "./index.css";
import { images } from ".";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <header className=" mb-7 h-[30px] w-full bg-[#9B045B]"></header>
      <div className=" max-w-[1440px] m-auto px-16">
        <Header />
        <NavBar />
        <Hero />
        <Products />
      </div>
      <div className=" bg-[#6F0241]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
