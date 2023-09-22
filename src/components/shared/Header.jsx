/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-400 p-4 text-white fixed top-0 w-full z-50 h-[100px]">
      <nav>
        <ul className="flex justify-around">
          <li className="text-white text-lg hover:text-gray-300">
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li className="text-white text-lg hover:text-gray-300">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className="text-white text-lg hover:text-gray-300">
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
