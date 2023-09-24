/* eslint-disable */
import React, { useContext, useEffect } from "react";
import Product from "../subcomponents/Product";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, []);
  console.log(userInfo);
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

  return (
    <div className="flex gap-10 justify-center flex-wrap">
      {data.map((product) => {
        return (
          <>
            <Product key={product.id} data={product} />
          </>
        );
      })}
    </div>
  );
};

export default ProductsPage;
