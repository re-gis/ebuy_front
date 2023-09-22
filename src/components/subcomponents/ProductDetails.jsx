/* eslint-disable */
import React from "react";

const ProductDetails = ({ data }) => {
  return (
    <>
      <div className="flex justify-around">
        <div className="flex flex-col">
          <h4 className="text-lg">{data.name}</h4>
          <p className="text-xs">${data.price}</p>
        </div>
        <div>
          <button className="bg-blue-400 p-2 rounded-md text-white hover:bg-white border-2 hover:border-blue-400 hover:text-blue-400">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
