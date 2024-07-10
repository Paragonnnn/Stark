import React, { useState } from "react";
import "./index.css";
import { images } from ".";
import HomePage from "./Components/HomePage";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut";
import CartPage from "./Components/CartPage";
import Product from "./Components/Product";
import Footer2 from "./Components/Footer2";

function App() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  return (
    <div>
      <header className=" mb-7 h-[30px] w-full bg-[#9B045B] lg:block hidden"></header>

      <Routes>
        <Route
          path="/"
          element={<HomePage cart={cart} setCart={setCart} />}
          setProduct={setProduct}
        />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route
          path="/product/:id"
          element={<Product cart={cart} setCart={setCart} product={product} />}
        />
      </Routes>
      <div className=" bg-[#6F0241]">
        <Footer />
      </div>
      <div className=" bg-[#1C1C1D] text-white">
        <Footer2 />
      </div>
    </div>
  );
}

export default App;
