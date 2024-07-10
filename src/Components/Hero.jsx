import React from "react";
import { useState } from "react";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.png";
import Hero3 from "../assets/hero3.png";
import MobileHero from "../assets/MobileHero.png";

const Hero = () => {
  const [slider, setSlider] = useState(0);
  const images = [Hero1, Hero2, Hero3];
  const nextSlide = () => {
    setSlider(slider === images.length - 1 ? 0 : slider + 1);
  };
  const prevSlide = () => {
    setSlider(slider === 0 ? images.length - 1 : slider - 1);
  };

  const selectSlide = (index) => {
    setSlider(index);
  };

  return (
    <div>
      <div className=" mt-6 relative h-[340px] md:block hidden">
        <div className=" flex justify-center gap-3 mt-3 absolute bottom-16 left-20">
          <div
            className={`${
              slider === 0 ? "bg-white" : "bg-transparent"
            } outline-1 outline outline-white w-3 h-3  rounded-full cursor-pointer`}
            onClick={() => selectSlide(0)}
          ></div>
          <div
            className={`${
              slider === 1 ? "bg-white" : "bg-transparent"
            } outline-1 outline outline-white w-3 h-3  rounded-full cursor-pointer`}
            onClick={() => selectSlide(1)}
          ></div>
          <div
            className={`${
              slider === 2 ? "bg-white" : "bg-transparent"
            } outline-1 outline outline-white w-3 h-3  rounded-full cursor-pointer`}
            onClick={() => selectSlide(2)}
          ></div>
        </div>
        <div className=" bg-[#9B045B] w-fit px-6 py-5 rounded-tl-[40px] rounded-br-[40px] absolute right-20 bottom-16 hidden xl:block">
          <h1 className=" text-[30px] text-wrap w-[300px] text-white font-bold">
            Your Home of Affordable Groceries
          </h1>
          <button className=" px-3 bg-white text-black py-1 rounded-full font-medium text-sm mt-1">
            Shop Now
          </button>
        </div>
        <div className=" flex justify-center mt-6">
          <img src={images[slider]} alt="" className=" w-full" />
        </div>
      </div>
      <div className=" bg-[#414042] flex p-4 rounded-xl text-white justify-between items-center md:hidden ">
        <div>
          <h2 className=" font-bold text-xl">Super Sale Discount</h2>
          <div className="flex gap-2 items-baseline">
            <p className=" text-xs font-light">Up to</p>
            <h1 className=" font-bold">20%</h1>
          </div>
          <button className=" bg-[#9B045B] px-6 py-[6px] rounded-full text-[10px] mt-2">SHOP NOW</button>
        </div>
        <img src={MobileHero} alt="" className="w-[180px]" />
      </div>
    </div>
  );
};

export default Hero;
