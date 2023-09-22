/* eslint-disable */
import React from "react";

const CartProduct = ({ data }) => {
  return (
    <div className="border-b border-gray-400 w-[100%] flex items-center pb-2 justify-between px-4">
      <div className="w-[70%] flex justify-between items-center">
        <img
          className="h-[40px] object-fit w-[40px]"
          src={data[0].image}
          alt=""
        />
        <span>{data[0].name}</span>
        <span>{data[0].price}</span>
      </div>
      <div className="justify-end flex gap-5 items-center">
        <i
          className="fa fa-plus cursor-pointer border border-none text-[15px] p-[2px] rounded-full hover:bg-gray-300"
          aria-hidden="true"
        ></i>
        <i
          className="fa fa-minus cursor-pointer border border-none text-[15px] p-[2px] rounded-full hover:bg-gray-300"
          aria-hidden="true"
        ></i>
        <i
          class="fa fa-trash text-red-500 cursor-pointer border border-none text-[15px] p-[2px] rounded-full hover:bg-gray-300"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default CartProduct;
