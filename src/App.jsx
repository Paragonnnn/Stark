import React, { useState } from "react";
import "./index.css";
import { images } from ".";
import HomePage from "./Components/HomePage";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut";
import Cart from "./Components/Cart";
import Product from "./Components/Product";

function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  return (
    <div>
      <header className=" mb-7 h-[30px] w-full bg-[#9B045B] lg:block hidden"></header>

      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart}/>} setProduct={setProduct}/>
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} product={product}/>} />
      </Routes>
      <div className=" bg-[#6F0241]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
