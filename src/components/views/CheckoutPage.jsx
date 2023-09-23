/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import OrderItem from "../subcomponents/OrderItem";

const CheckoutPage = () => {
  return (
    <>
      <div className="w-[100%] h-[100%]">
        <div className="h-[20%]">
          <h1>Place Order</h1>
        </div>
        <div className="flex h-[80%] w-[100%] gap-10">
          <div className="flex flex-col w-[60%] gap-10">
            <div className="border rounded-md p-5 bg-white">
              <h1 className="text-[20px] font-bold pb-2">Shipping</h1>
              <h2 className="font-bold">
                Name: <span className="font-[400]">D Regis</span>
              </h2>
              <h2 className="font-bold">
                Address: <span className="font-[400]">Rwanda, Kigali City</span>
              </h2>

              <Link to={"/shipping"} className="text-blue-400 hover:underline">
                Edit
              </Link>
            </div>

            <div className="border rounded-md p-5 bg-white">
              <h1 className="text-[20px] font-bold border-b pb-2">Items</h1>
              <div className="py-2">
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[45%] p-5 rounded-md flex flex-col gap-10 border bg-white">
            <h1 className="border-b pb-5 font-bold text-[20px]">
              Order Summary
            </h1>
            <h2 className="border-b font-semibold flex gap-5 items-center text-[15px] pb-5">
              Total Price: <span className="text-[20px]">$345</span>
            </h2>

            <button className="bg-blue-400 p-2 rounded-md text-white border border-white hover:bg-white hover:border-blue-400 hover:text-blue-400">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
