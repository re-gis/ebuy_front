/* eslint-disable */
import React from "react";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex items-center text-blue-400">
          <h1 className="font-[cursive] text-[60px]">Ebuy</h1>
          <i className="fa fa-cart-plus text-[50px]" aria-hidden="true"></i>
        </div>
        <form className="border p-5 gap-5 flex flex-col rounded-md bg-white">
          <div className="text-[30px] text-blue-400 font-[cursive] flex justify-center">
            <h1>Register</h1>
          </div>

          <div>
            <label htmlFor="">First Name: </label>
            <input
              className="flex border p-1 outline-none rounded-sm"
              type="text"
              placeholder="FirstName"
            />
          </div>

          <div>
            <label htmlFor="">Last Name: </label>
            <input
              className="flex border p-1 outline-none rounded-sm"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div>
            <label htmlFor="">Email: </label>
            <input
              className="flex border p-1 outline-none rounded-sm"
              type="email"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="">Password: </label>
            <input
              className="flex border p-1 outline-none rounded-sm"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="w-[100%] flex justify-center">
            <button className="bg-blue-400 p-2 w-[100%] rounded-md text-white border border-white hover:bg-white hover:text-blue-400 hover:border-blue-400">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
