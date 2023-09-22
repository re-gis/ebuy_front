/* eslint-disable */
import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Product = ({ data }) => {
  const { id } = useParams();
  const picWid = id
    ? "50% flex flex-col justify-between p-[10px] rounded-md h-[600px] bg-white"
    : "25% flex flex-col justify-between p-[10px] rounded-md h-[600px] bg-white";
  return (
    <Link to={`/products/${data.id}`} className={picWid}>
      <div className="object-fit h-[80%] w-full">
        <img src={data.image} className="object-fit h-full" />
      </div>
      {id ? <></> : <ProductDetails data={data} />}
    </Link>
  );
};

export default Product;
