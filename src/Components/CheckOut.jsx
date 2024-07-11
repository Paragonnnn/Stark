import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";

const CheckOut = ({ cart }) => {
  return (
    <div className=" max-w-[1440px] m-auto px-4 md:px-8 lg:px-16">
      <Header cart={cart} />
      <NavBar />
      <h1 className=" my-6 font-semibold text-3xl">Checkout</h1>
      <div className=" text-[#414042] mt-6 ">
        <div className=" flex-col md:flex-row flex justify-between w-full ">
          <div className=" w-full md:w-[65%]">
            <div className="flex w-full gap-8">
              <div className="flex flex-col flex-1">
                <label className=" text-sm mb-2 font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  className=" outline-none border border-solid border-[#41404250] rounded indent-3 py-2 text-sm mb-4 focus:bg-[#DDD9D960] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className=" text-sm mb-2 font-semibold">Last Name</label>
                <input
                  type="text"
                  className=" outline-none border border-solid border-[#41404250] rounded indent-3 py-2 text-sm mb-4 focus:bg-[#DDD9D960] transition-colors duration-200"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className=" text-sm mb-2 font-semibold" htmlFor="">
                Email Address
              </label>
              <input
                type="email"
                className=" outline-none border border-solid border-[#41404250] rounded indent-3 py-2 text-sm mb-4 focus:bg-[#DDD9D960] transition-colors duration-200"
              />
            </div>
            <div className=" flex flex-col">
              <label className=" text-sm mb-2 font-semibold" htmlFor="">
                Delivery Address
              </label>
              <input
                type="text"
                className=" outline-none border border-solid border-[#41404250] rounded indent-3 py-2 text-sm mb-4 focus:bg-[#DDD9D960] transition-colors duration-200"
              />
            </div>
            <div className="flex w-full gap-8">
              <div className="flex flex-col flex-1">
                <label className=" text-sm mb-2 font-semibold" htmlFor="">
                  Phone number
                </label>
                <input
                  type="number"
                  className=" outline-none border border-solid border-[#41404250] rounded indent-3 py-2 text-sm mb-4 focus:bg-[#DDD9D960] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className=" text-sm mb-2 font-semibold" htmlFor="">
                  Enter Promo Code{" "}
                  <span className=" font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  className=" outline-none border border-solid border-[#41404250] rounded indent-3 py-2 text-sm mb-4 focus:bg-[#DDD9D960] transition-colors duration-200"
                />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[30%] px-4 py-6 shadow-md bg-[#FDFCFC70] rounded-md">
            <div className="flex justify-between mb-2">
              <h1>Cart Summary</h1>
              <span>{cart.length} items</span>
            </div>
            <div className=" bg-[#41404270] w-[95%] h-[1px] m-auto mb-3"></div>
            <div>
              <div className=" flex justify-between mb-3">
                <p>Subtotal: </p>
                <b>$200.00</b>
              </div>
              <div className=" flex justify-between mb-3">
                <p>Tax:</p>
                <b>$5.00</b>
              </div>
              <div className=" flex justify-between mb-3">
                <p>Delivery Charges: </p>
                <b>$30.00</b>
              </div>
              <div className=" bg-[#41404270] w-[95%] h-[1px] m-auto mb-3"></div>
              <div>
                <div>Total: </div>
                <b>$255.00</b>
              </div>
              <button className=" bg-[#44C368] w-full py-3 text-white rounded-full mt-8">
                Place Order
              </button>
            </div>
            <div>
              <h1 className=" font-semibold text-xl my-5">Payment Method</h1>
              <div className="flex gap-4 mt-4 flex-col">
                <div className=" flex gap-3  items-center">
                  <img src={mastercard} alt="" className=" h-4" />
                  <label htmlFor="mastercard">Pay with Mastercard</label>
                  <input type="radio" name="payment" id="mastercard" />
                </div>
                <div className=" bg-[#41404270] w-[95%] h-[1px] m-auto mb-3"></div>
                <div className=" flex gap-3  items-center">
                  <img src={paypal} alt="" className=" h-4" />
                  <label htmlFor="paypal">Pay with Paypal</label>
                  <input type="radio" name="payment" id="paypal" />
                </div>
                <div className=" bg-[#41404270] w-[95%] h-[1px] m-auto mb-3"></div>
                <div className=" flex gap-3  items-center">
                  <img src={visa} alt="" className=" h-4" />
                  <label htmlFor="visa">Pay with Visa</label>
                  <input type="radio" name="payment" id="visa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
