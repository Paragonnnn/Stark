import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Trash from "../assets/SVG/Trash";
import Tag from "../assets/SVG/Tag";
import MobileNav from "./MobileNav";

const CartPage = ({ cart }) => {
  return (
    <div className=" max-w-[1440px] m-auto px-4 md:px-8 lg:px-16">
      <Header cart={cart} />
      <NavBar />
      {cart.length === 0 ? (
        <div className="text-center mt-8">Your cart is empty.</div>
      ) : (
        
      <section className="">
        <h1 className=" font-semibold mt-4 mb-4 text-2xl lg:block hidden">Shopping Cart</h1>
        <h1 className=" font-semibold mt-4 mb-4 text-2xl lg:hidden block">Cart</h1>
        <p className=" mb-2 block lg:hidden">Order list : <b>{cart.length} items</b></p>
        <section className=" justify-between text-[#414042] lg:flex hidden">
          <section className="w-[70%]">
            <div className="flex mb-4 bg-[#DDD9D9] py-2 px-3">
              <div className=" flex-1">Items</div>
              <div className=" flex-1"></div>
              <div className=" flex-1 text-center">Price</div>
              <div className=" flex-1 text-center">Quantity</div>
              <div className=" flex-1 text-center">Subtotal</div>
            </div>
            <div className=" ">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className=" flex outline outline-1 outline-[#41404250] mb-7 rounded-lg p-4 justify-center items-center"
                >
                  <div className=" flex-1">
                    <img src={item.image} alt="" className=" w-[120px]" />
                  </div>
                  <p className=" flex-1">{item.name}</p>
                  <div className=" flex-1 text-center">${item.price}.00</div>
                  <div className="flex flex-1 gap-2 justify-center items-center">
                    <button className=" h-7 w-7 flex text-white justify-center items-center bg-[#414042] bg-opacity-70 rounded-full  ">
                      -
                    </button>
                    <div>1</div>
                    <button className="h-7 w-7 flex text-white justify-center items-center bg-[#9B045B] rounded-full">
                      +
                    </button>
                  </div>
                  <div className=" flex-1">
                    <div className=" text-center">${item.price}.00</div>
                    <div className=" bg-[#9B045B] text-white flex justify-center items-center m-auto w-4/5 gap-2 rounded-full py-[2px] cursor-pointer">
                      <Trash /> Remove
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className=" w-[25%] shadow-[#41404240] h-fit p-3 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <div className=" font-semibold text-xl">Cart summary</div>
              <div>{cart.length} items</div>
            </div>
            <div className=" bg-[#414042] w-[95%] h-[1px] m-auto"></div>
            <div className=" flex justify-between flex-col gap-10 mt-8">
              <div>Delivery Charges:</div>
              <div>Subtotal:</div>
              <div>Total:</div>
            </div>
            <button className=" bg-[#44C368] w-full text-white py-2 rounded-xl mt-40 ">
              Proceed to checkout
            </button>
          </section>
        </section>
        <section>
          <div className=" lg:hidden flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className=" flex outline outline-1 outline-[#41404250] mb-2 rounded-lg p-3  items-center gap-4 bg-[#41404220]"
              >
                <div className=" ">
                  <img src={item.image} alt="" className=" w-[120px]" />
                </div>
                <div className=" w-full">
                  <div className=" flex flex-col items-start">
                    <p className="">{item.name}</p>
                    <div className=" flex-1 text-center">${item.price}.00</div>
                  </div>
                  <div className="  mt-3  w-full flex items-start justify-between">
                    <div className=" bg-[#9B045B] text-white flex items-center w-fit gap-2 rounded-full py-[2px] px-3 text-sm cursor-pointer">
                      <Trash /> Remove
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <button className=" h-5 w-5 flex text-white justify-center items-center bg-[#414042] bg-opacity-70 rounded-full  ">
                        -
                      </button>
                      <div>1</div>
                      <button className="h-5 w-5 flex text-white justify-center items-center bg-[#9B045B] rounded-full">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <div className=" flex border border-solid w-full border-[#9B045B] items-center gap-1 px-3 py-2 rounded-lg">
                <Tag />
                <input
                  type="text"
                  placeholder="Enter promo code here"
                  className=" outline-none w-full"
                
                />
              </div>
              <div className=" mt-4">
                <div className=" flex justify-between">
                  <div>Subtotal: </div>
                  <div>$170.00</div>
                </div>
                  <div className=" flex justify-between">
                    <div>Delivery Fee: </div>
                    <div>$30.00</div>
                  </div>
                  <div className="flex justify-between">
                    <div className=" font-semibold text-lg">Total: </div>
                    <div className=" font-semibold text-lg">$200.00</div>
                  </div>
                  <button className=" bg-[#9B045B] w-full text-white py-3 mt-5 rounded-full">Check Out</button>
              </div>
            </div>
          </div>
        </section>
        <MobileNav cart={cart} />
      </section>
      )}
    </div>
  );
};

export default CartPage;
