/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 p-4 text-white h-[auto]">
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="flex justify-center text-[15px]">Reach Us</h1>
          <ul className="flex justify-around">
            <li>
              Github:{" "}
              <Link
                className="hover:text-gray-400"
                to={"github.com/re-gis"}
                href=""
              >
                github.com/re-gis
              </Link>
            </li>
            <li>
              Gmail: <Link className="hover:text-red-400" to={"gmail.com"}>irumvaregisdmc@gmail.com</Link>
            </li>
            <li>
              Mobile Phone: <Link className="hover:text-blue-400">0790539402</Link>
            </li>
          </ul>
        </div>
        <h1 className="flex justify-center">
          &copy; Ebuy. <span>All rights reserved</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
