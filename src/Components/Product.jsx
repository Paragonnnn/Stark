import React from "react";
import { useParams } from "react-router-dom";
import { images } from "..";
import Header from "./Header";
import NavBar from "./NavBar";

const Product = ({ product, cart, setCart }) => {
  // const id = window.location.pathname.split("/")[2]
  const { id } = useParams();
  console.log(images?.filter((i) => i.id == id).map((item) => item));

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert(`${product.name} already in cart`);
      return;
    }
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
    console.log(cart);
  };

  return (
    <div className=" max-w-[1440px] m-auto px-4 md:px-8 lg:px-16">
      <Header cart={cart} />
      <NavBar />
      <section
        className=" mt-10 w-fit px-4 py-5 shadow-lg m-auto rounded-md
      "
      >
        {images
          ?.filter((i) => i.id == id)
          .map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="flex justify-between mt-5">
                <h1>{item.name}</h1>
                <b>${item.price}.00</b>
              </div>
              <button
                onClick={() => addToCart(item)}
                className=" py-1 flex justify-center w-full bg-[#9B045B] text-white rounded-full mt-5"
              >
                Add to Cart
              </button>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Product;
