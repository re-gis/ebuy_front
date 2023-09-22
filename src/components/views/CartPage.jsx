/* eslint-disable */
import React from "react";
import CartProduct from "../subcomponents/CartProduct";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";
import { Link, useParams } from "react-router-dom";

const CartPage = () => {
  const data = [
    {
      id: 2,
      name: "Nike Shirt",
      price: 300,
      image: p2,
    },
    {
      id: 3,
      name: "Adidas Pants",
      price: 150,
      image: p3,
    },
    {
      id: 4,
      name: "Nike Pants",
      price: 230,
      image: p4,
    },
  ];
  const { id } = useParams();
  let data3;
  data.map((data2) => {
    for (let i = 0; i <= data2.id; i++) {
      if (data2.id == id) {
        data3 = data2;
      }
    }
  });
  return (
    <div className="flex flex-col w-[100%] gap-10">
      <h1 className="flex justify-center text-[30px] font-bold">
        Shopping Cart
      </h1>
      <div className="flex justify-evenly w-[100%] ">
        <div className="flex flex-col gap-5 w-[50%] py-2 px-5 bg-white rounded-md">
          <CartProduct data={data} />
          <CartProduct data={data} />
          <CartProduct data={data} />
          <CartProduct data={data} />
          <CartProduct data={data} />
          <CartProduct data={data} />
        </div>
        <div className="border w-[30%] rounded-md h-[20%] pb-2 bg-white px-3">
          <div className="border-b py-5">
            <h1 className="flex justify-around font-bold">
              Total Price: <span className="font-[400]">$456</span>
            </h1>
          </div>
          <div className="border-b py-5">
            <button className="border-white border w-full rounded-[10px] text-white bg-blue-400 hover:bg-white hover:text-blue-400 hover:border-blue-400 p-2">
              <Link to={"/shipping"}>Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
