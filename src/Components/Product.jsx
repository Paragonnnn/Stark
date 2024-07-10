import React from "react";
import { useParams } from "react-router-dom";
import { images } from "..";

const Product = ({ product }) => {
  // const id = window.location.pathname.split("/")[2]
  const { id } = useParams();
  console.log(images?.filter((i) => i.id == id).map((item) => item));

  return (
    <div>
      {images
        ?.filter((i) => i.id == id)
        .map((item) => (
            <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <h1>{item.name}</h1>
                <p>{item.id}</p>
                <p>{item.price}</p>
            </div>
        ))}
    </div>
  );
};

export default Product;
