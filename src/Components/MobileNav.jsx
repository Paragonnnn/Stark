import React from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/SVG/Cart";
import Home from "../assets/SVG/Home";
import Menu from "../assets/SVG/Menu";
import Receipt from "../assets/SVG/Receipt";
import User from "../assets/SVG/User";


const MobileNav = ({cart}) => {
  return (
    <section className="flex lg:hidden fixed left-0 py-4 bottom-0 w-full bg-white justify-around z-50">
      <div>
        <Home className=" w-7" />
      </div>
      <div>
        <Menu className=" w-7" />
      </div>
      <Link className=" relative" to={"/cart"}>
        <Cart className=" w-7" />
        <div className=" absolute -top-[8px] text-xs -right-1 h-[18px] w-[18px] flex justify-center items-center rounded-full bg-[#9B045B] text-white">
          {cart.length}
        </div>
      </Link>
      <div>
        <Receipt className=" w-7" />
      </div>
      <div>
        <User className=" w-7" />
      </div>
    </section>
  );
};

export default MobileNav;
