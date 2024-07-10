import React from "react";
import Logo from "../assets/Logo.png";
import SearchLogo from "../assets/SVG/SearchLogo";
import Like2 from "../assets/SVG/Like2";
import Bell from "../assets/SVG/Bell";
import Cart from "../assets/SVG/Cart";
import User from "../assets/SVG/User";
import QuestionMark from "../assets/SVG/QuestionMark";
import { Link } from "react-router-dom";
import Setting from "../assets/SVG/Setting";
import Line from "../assets/SVG/Line";

const Header = ({ cart }) => {
  return (
    <header className=" flex-col sm:flex-row flex justify-between items-center mb-7  top-0 z-40 bg-white py-4">
      <section className=" w-full lg:flex lg:items-center lg:justify-between">
        <div className=" flex justify-between items-center mb-7 w-full sticky">
          <Link to={'/'}>
            <img src={Logo} alt="" className=" h-5 lg:h-8" />
          </Link>
          <section className="hidden lg:flex bg-[#DDD9D9] p-2 px-3 gap-3 items-center rounded-full lg:w-[633px] w-full focus:outline-1 focus:outline focus:outline-[#414042]">
            <SearchLogo />

            <input
              type="text"
              placeholder="Search"
              className=" bg-[#DDD9D9] placeholder:text-[#414042] w-full outline-none"
            />
          </section>
          <section className="flex lg:hidden gap-2">
            <Like2 />
            <Bell />
          </section>
          <section className=" gap-4 hidden lg:flex">
            <div>
              <User className=" h-8 p-[6px] bg-[#DDD9D9] rounded-full cursor-pointer" />
            </div>
            <Link to={"/cart"} className=" relative">
              <Cart
                className=" h-8 p-[6px] bg-[#DDD9D9] rounded-full cursor-pointer"
                link="/cart"
              />
              <div className=" absolute -top-[8px] text-xs -right-1 h-[18px] w-[18px] flex justify-center items-center rounded-full bg-[#9B045B] text-white">
                {cart.length}
              </div>
            </Link>
            <div>
              <QuestionMark className=" h-8 p-[6px] bg-[#DDD9D9] rounded-full cursor-pointer" />
            </div>
          </section>
        </div>
        <section className="lg:hidden flex bg-[#DDD9D9] p-2 px-3 gap-3 items-center rounded-full lg:w-[633px] w-full focus:outline-1 focus:outline focus:outline-[#414042]">
          <SearchLogo />

          <input
            type="text"
            placeholder="Search"
            className=" bg-[#DDD9D9] placeholder:text-[#414042] w-full outline-none"
          />
          <Line />
          <Setting />
        </section>
      </section>
    </header>
  );
};

export default Header;
