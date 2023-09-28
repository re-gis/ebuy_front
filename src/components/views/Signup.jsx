/* eslint-disable */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../../Store";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const navigate = useNavigate();

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password || !lastName || !firstname) {
        toast.error("All credentials are required!");
        return;
      }

      const { data } = await axios.post("/api/v1/auth/signup", {
        firstName: firstname,
        lastName: lastName,
        email: email,
        password: password,
      });
      dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
      toast.success("User registered");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
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
              name="firstName"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              className="flex border p-1 outline-none rounded-sm"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input
              className="flex border p-1 outline-none rounded-sm"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
              className="flex border p-1 outline-none rounded-sm"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="w-[100%] flex justify-center">
            <button
              onClick={handleRegister}
              className="bg-blue-400 p-2 w-[100%] rounded-md text-white border border-white hover:bg-white hover:text-blue-400 hover:border-blue-400"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
