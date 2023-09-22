/* eslint-disable */
import React from "react";
import { useParams } from "react-router-dom";
import Product from "../subcomponents/Product";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";
import ProductDetails from "../subcomponents/ProductDetails";

const ProductPage = () => {
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

  const manu = data3.name.split(" ")[0];
  return (
    <div className="flex justify-around h-[100%]">
      <div className="w-[30%] rounded-md">
        <Product className="w-full" data={data3} />
      </div>
      <div className="border rounded-md h-[50%] w-[40%] p-10 bg-white flex flex-col gap-5">
        <div className="border-b pb-2">
          <h1 className="text-[15px]">Product name:</h1>
          <h1 className="font-[500] text-[18px]">{data3.name}</h1>
        </div>
        <div className="border-b pb-2">
          <h1 className="text-[15px]">Manufacturer:</h1>
          <h1 className="font-[500] text-[18px]">{manu}</h1>
        </div>
        <div className="border-b pb-2">
          <h1 className="text-[15px]">Price:</h1>
          <h1 className="font-[500] text-[18px]">${data3.price}</h1>
        </div>
        <div>
          <div>
            <button className="bg-blue-400 p-2 rounded-md text-white hover:bg-white border-2 hover:border-blue-400 hover:text-blue-400">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
