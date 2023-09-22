/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const ShippingAddress = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex justify-center">
          <h1 className="text-[30px] font-bold">Shipping Address</h1>
        </div>
        <div className="flex justify-center w-[80%]">
          <form
            action=""
            className="w-[50%] flex flex-col items-center justify-center gap-5"
          >
            <div className="w-[100%] flex flex-col gap-2">
              <label className="text-[15px] font-bold" htmlFor="firstName">
                First Name:{" "}
              </label>
              <input
                className="flex w-[100%] p-2 outline-none rounded-md"
                type="text"
                placeholder="FirstName"
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label className="text-[15px] font-bold" htmlFor="lastName">
                Last Name:{" "}
              </label>
              <input
                className="flex w-full p-2 outline-none rounded-md"
                type="text"
                placeholder="LastName"
                name=""
                id=""
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label className="text-[15px] font-bold" htmlFor="">
                City:{" "}
              </label>
              <input
                className="flex w-full p-2 outline-none rounded-md"
                type="text"
                placeholder="City"
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label className="text-[15px] font-bold" htmlFor="">
                Address:{" "}
              </label>
              <input
                className="flex w-full p-2 outline-none rounded-md"
                type="text"
                placeholder="Address"
                name=""
                id=""
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label className="text-[15px] font-bold" htmlFor="">
                State:{" "}
              </label>
              <input
                className="flex w-full p-2 outline-none rounded-md"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label className="text-[15px] font-bold" htmlFor="">
                Number:{" "}
              </label>
              <input
                className="flex w-full p-2 outline-none rounded-md"
                type="text"
                placeholder="Number"
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label className="text-[15px] font-bold" htmlFor="">
                Zip Code:{" "}
              </label>
              <input
                className="flex w-full p-2 outline-none rounded-md"
                type="text"
                placeholder="Zip Code"
              />
            </div>

            <div className="w-full">
              <button className="w-full p-2 rounded-md border border-white hover:border-blue-400 hover:bg-white hover:text-blue-400 text-white text-[20px] bg-blue-400">
                <Link to={"/checkout"}>Continue</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
