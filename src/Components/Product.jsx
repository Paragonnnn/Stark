import React from "react";
import { useParams } from "react-router-dom";
import { images } from "..";

const Product = ({ product }) => {
  // const id = window.location.pathname.split("/")[2]
  const { id } = useParams();
  console.log(images);

  return (
    <div>
      {images?.filter(i => i.id === id).map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          {/* <img src={item.image} alt={item.name} className="w-[300px] h-[300px] object-cover"/>
                    <h2 className="text-2xl font-bold mt-4">{item.name}</h2>
                    <p className="text-lg mt-2">{item.price}</p>
                    <button onClick={() => setCart([...cart, item])} className="bg-[#9B045B] text-white px-4 py-2 mt-4">Add to Cart</button> */}
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Product;
