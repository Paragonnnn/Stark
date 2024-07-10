import React from "react";
import NewsLetter from "../assets/SVG/NewsLetter";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className=" max-w-[1440px] m-auto mt-48">
      <section className=" m-auto w-full md:w-[85%] flex items-center justify-between py-8 md:flex-row flex-col">
        <div className="flex items-center text-white gap-5 w-[90%] md:w-[40%]">
          <NewsLetter />
          <div>
            <h3 className=" font-semibold text-xl lg:text-3xl">Subscribe to our newsletter</h3>
            <p>
              Subscribe to our newsletter & be the first to know about our new
              arrivals and discounts.
            </p>
          </div>
        </div>
        <form className=" py-2 lg:py-2 bg-white px-3 rounded-full w-[95%] md:w-1/2 text-[#414042] flex justify-between">
          <input
            type="email"
            placeholder="Enter your email"
            className="  outline-none bg-transparent placeholder:text-[#414042] indent-3"
          />
          <button className=" text-white bg-[#9B045B] p-1 px-2 lg:p-3 rounded-full">
            Subscribe
          </button>
        </form>
      </section>
      
    </footer>
  );
};

export default Footer;
