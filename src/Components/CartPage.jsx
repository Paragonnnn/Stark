import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

const CartPage = ({ cart }) => {
  return (
    <div className=" max-w-[1440px] m-auto px-4 md:px-8 lg:px-16">
      <Header cart={cart} />
      <NavBar />
      <section className="">
        <h1 className=" font-semibold mt-4 mb-4 text-2xl">Shopping Cart</h1>
        <section className="flex justify-between text-[#414042]">
          <section className="w-[70%]">
            <div className="flex mb-4 bg-[#DDD9D9] py-2 px-3">
              <div className=" flex-1">Items</div>
              <div className=" flex-1"></div>
              <div className=" flex-1">Price</div>
              <div className=" flex-1">Quantity</div>
              <div className=" flex-1">Subtotal</div>
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
                  <div className=" flex-1">${item.price}.00</div>
                  <div className="flex flex-1 gap-2 ">
                    <button className=" h-7 w-7 flex text-white justify-center items-center bg-[#414042] bg-opacity-70 rounded-full  ">
                      -
                    </button>
                    <div>1</div>
                    <button className="h-7 w-7 flex text-white justify-center items-center bg-[#9B045B] rounded-full">
                      +
                    </button>
                  </div>
                  <div className=" flex-1"></div>
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
            <button className=" bg-[#44C368] w-full text-white py-2 rounded-xl mt-40 ">Proceed to checkout</button>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CartPage;
