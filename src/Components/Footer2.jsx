import React from "react";
import Logo from "../assets/Logo.png";
import Facebook from "../assets/SVG/Facebook";
import Instagram from "../assets/SVG/Instagram";
import Whatsapp from "../assets/SVG/Whatsapp";

const Footer2 = () => {
  return (
    <div className=" max-w-[1440px] m-auto py-24">
      <section className="flex gap-12 justify-start md:justify-center px-8 flex-wrap">
        <div>
          <img src={Logo} alt="" className=" h-10"/>
          <div className=" mt-2 font-thin">Home of Affordable Deals</div>
        </div>
        <div>
          <h3 className=" font-medium text-lg mb-2">Company</h3>
          <p className=" font-thin mb-1">About Us</p>
          <p className=" font-thin">Locate our store</p>
        </div>
        <div>
          <h3 className=" font-medium text-lg mb-2">Legal </h3>
          <p className=" font-thin mb-1">Terms and condition</p>
          <p className=" font-thin">Refund policy</p>
        </div>
        <div>
          <h3 className=" font-medium text-lg mb-2">Quick Links</h3>
          <p className=" font-thin mb-1">Home</p>
          <p className=" font-thin mb-1">Account</p>
          <p className=" font-thin">Order Tracking</p>
        </div>
        <div>
          <h3 className=" font-medium text-lg mb-2">Contact Us</h3>
          <p className=" max-w-[240px] mb-2 mt-1 font-thin">
            Location: 123 High Street, Flat 5, Bristol BS1 2AB, United Kingdom.
          </p>
          <p className=" mb-1 font-thin">Email: info@starkmall.com</p>
          <p className=" font-thin">Call: +44 20 1234 0987</p>
          <div className=" flex gap-1 mt-2">
            <Facebook />
            <Instagram />
            <Whatsapp />
          </div>
        </div>
      </section>
      <p className=" text-center mt-10">StarkMall @ 2024 All Rights Reserved </p>
    </div>
  );
};

export default Footer2;
