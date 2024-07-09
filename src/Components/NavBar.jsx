import React from "react";
import Arrow from "../assets/SVG/Arrow";

const NavBar = () => {
  return (
    <div>
      <div className=" w-full bg-[#414042] h-[1px] opacity-50"></div>
      <nav className="flex justify-between items-center mt-10 px-4 gap-5">
        <div className=" bg-[#9B045B] w-fit px-3 rounded-lg py-2 flex items-center gap-5 text-white">
          <div className="">
            <div className=" w-5 h-[2px] rounded-sm bg-white mb-1"></div>
            <div className=" w-5 h-[2px] bg-white mb-1 rounded-sm"></div>
            <div className=" w-5 h-[2px] bg-white rounded-sm"></div>
          </div>
          <div className=" text-nowrap mr-4">All Categories</div>
          <div>
            <Arrow />
          </div>
        </div>
        <ul className=" flex md:gap-5 lg:gap-7 text-lg">
          <li className=" hover:text-[#9B045B]"><a href="#">Phones and Tablets</a></li>
          <li className=" hover:text-[#9B045B]"><a href="#">Gadget Accessories</a></li>
          <li className=" hover:text-[#9B045B]"><a href="#">Cosmetics & Beauty</a></li>
          <li className=" hover:text-[#9B045B]"><a href="#">Men's Fashion</a></li>
          <li className=" hover:text-[#9B045B]"><a href="#">Electronics</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
