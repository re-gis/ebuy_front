/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const OrderItem = () => {
  return (
    <div className="border-b p-2 flex justify-between text-[15px]">
      <Link className="hover:text-blue-400 flex justify-between" to={"/products"}>
        <img src="" alt="" />
        <h2>Product name</h2>
      </Link>
      <span>Quantity</span>
      <span>Price</span>
    </div>
  );
};

export default OrderItem;
