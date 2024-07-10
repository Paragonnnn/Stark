import React from "react";
import { useState } from "react";
import { images } from "..";
import Like from "../assets/SVG/Like";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import mobile4 from "../assets/mobile4.png";
import mobile5 from "../assets/mobile5.png";
import mobile6 from "../assets/mobile6.png";
import Home from "../assets/SVG/Home";
import Menu from "../assets/SVG/Menu";
import Cart from "../assets/SVG/Cart";
import Receipt from "../assets/SVG/Receipt";
import User from "../assets/SVG/User";
import { Link } from "react-router-dom";
import CartPage from "./CartPage";
import MobileNav from "./MobileNav";

const Products = ({ cart, setCart, setProduct }) => {
  const [select, setSelect] = useState(0);
  const categories = [
    "Phones and Tablets",
    "Gadget Accessories",
    "Cosmetics & Beauty",
  ];
  const selectCategory = (index) => {
    setSelect(index);
  };

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Product already in cart");
      return;
    }
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
    console.log(cart);
  };

  return (
    <div className=" mt-12">
      <section className="lg:flex justify-between items-center hidden">
        <h3 className=" font-bold text-2xl pl-3">Featured Categories</h3>
        <ul className="flex gap-8 text-[#414042]">
          <li
            className={`${
              select === 0 ? "bg-[#9B045B] bg-opacity-20 " : ""
            }  cursor-pointer px-3 py-[2px] rounded-md transition-all duration-200`}
            onClick={() => selectCategory(0)}
          >
            Phones and Tablets
          </li>
          <li
            className={`${
              select === 1 ? "bg-[#9B045B] bg-opacity-20 " : ""
            } cursor-pointer px-3 py-[2px] rounded-md  transition-all duration-200`}
            onClick={() => selectCategory(1)}
          >
            Gadget Accessories
          </li>
          <li
            className={`${
              select === 2 ? "bg-[#9B045B] bg-opacity-20 " : ""
            } cursor-pointer px-3 py-[2px] rounded-md transition-all duration-200  `}
            onClick={() => selectCategory(2)}
          >
            Cosmetics & Beauty
          </li>
        </ul>
      </section>
      <section className=" block lg:hidden">
        <div className="flex justify-between mb-5">
          <h3>Categories</h3>
          <button>See all</button>
        </div>
        <div className="flex justify-between text-wrap ">
          <div className=" flex flex-col items-center flex-1">
            <img src={mobile1} alt="" className=" w-[40px] h-[40px]" />
            <span className=" inline-block text-center text-xs">Shoes</span>
          </div>
          <div className=" flex flex-col items-center flex-1">
            <img src={mobile2} alt="" className=" w-[40px] h-[40px]" />
            <span className=" inline-block text-center text-xs">Beauty</span>
          </div>
          <div className=" flex flex-col items-center flex-1">
            <img src={mobile3} alt="" className=" w-[40px] h-[40px]" />
            <span className=" inline-block text-center text-xs">Phone</span>
          </div>
          <div className=" flex flex-col items-center flex-1">
            <img src={mobile4} alt="" className=" w-[40px] h-[40px]" />
            <span className=" inline-block text-center text-xs">Airpods</span>
          </div>
          <div className=" flex flex-col items-center flex-1">
            <img src={mobile5} alt="" className=" w-[40px] h-[40px]" />
            <span className=" inline-block text-center text-xs">
              Smart Watch
            </span>
          </div>
          <div className=" flex flex-col items-center flex-1">
            <img src={mobile6} alt="" className=" w-[40px] h-[40px]" />
            <span className=" inline-block text-center text-xs">
              Men's Fashion
            </span>
          </div>
        </div>
      </section>
      <div className=" font-medium text-lg mt-4 md:hidden block">
        Special For You
      </div>
      <section className=" lg:mt-7 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className=" mt-5 border-solid border-2 rounded-lg border-[#414042] border-opacity-40 px-3 md:px-5 pb-2 md:pb-7 pt-3 md:pt-5 relative flex flex-col"
          >
            <div className=" absolute right-[10px] top-[10px] z-10">
              <Like />
            </div>
            <img
              src={image.image}
              alt=""
              className="  w-[150px] lg:w-[230px] hover:scale-[105%] transition-all duration-300 overflow-hidden"
            />
            <div>
              <Link
                to={`/product/${image.id}`}
                className=" text-sm md:text-2xl font-normal mt-2 md:mt-4 mb-1"
                onClick={() => setProduct([image])}
              >
                {image.name}
              </Link>
              <div className=" font-bold text-lg md:text-3xl mb-2">
                ${image.price}.00
              </div>
              <button
                className=" bg-[#9B045B] text-white w-full py-3 rounded-xl text-sm mb-2 md:text-base mt-1 md:mt-5"
                onClick={() => addToCart(image)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* <CartPage cart={cart}/> */}
      <MobileNav cart={cart} />
    </div>
  );
};

export default Products;
