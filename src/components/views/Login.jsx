/* eslint-disable */
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex items-center text-blue-400">
          <h1 className="font-[cursive] text-[60px]">Ebuy</h1>
          <i className="fa fa-cart-plus text-[50px]" aria-hidden="true"></i>
        </div>
        <form
          action=""
          className="flex flex-col gap-5 border rounded-md p-5 bg-white"
        >
          <div className="flex justify-center text-[30px] font-[cursive] text-blue-400">
            <h1>Login</h1>
          </div>
          <div>
            <label htmlFor="">Email: </label>
            <input
              className="flex outline-none p-1 rounded-sm border"
              type="email"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              className="flex outline-none p-1 rounded-sm border"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-center w-[100%]">
            <button className="bg-blue-400 w-[100%] p-2 rounded-md text-white border border-white hover:border-blue-400 hover:text-blue-400 hover:bg-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
