import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Hero from './Hero'
import Products from './Products'
import Product from './Product'


const HomePage = ({cart, setCart,setProduct}) => {
  return (
    <div className=" max-w-[1440px] m-auto px-4 md:px-8 lg:px-16">
        <Header cart={cart}/>
        <NavBar />
        <Hero />
        <Products cart={cart} setCart={setCart} setProduct={setProduct}/>
      </div>
  )
}

export default HomePage