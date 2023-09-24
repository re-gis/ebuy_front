/* eslint-disable */
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import { toast } from "react-toastify";

const Header = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);

  const handleSignout = (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "USER_SIGNOUT" });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <header className="bg-blue-400 p-5 text-white fixed top-0 w-full z-50 h-[100px]">
      <nav>
        <ul className="flex justify-around">
          <li className="text-white text-lg">
            <Link to={"/"} className="text-[60px]  font-[cursive]">
              Ebuy
              <i class="fa fa-cart-plus text-[50px]" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="text-white text-lg hover:text-gray-300">
            <Link to={"/"}>Products</Link>
          </li>
          <li className="text-white text-lg hover:text-gray-300">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <h1 className="flex items-center gap-1 cursor-pointer relative">
              {userInfo.data.firstName} {userInfo.data.lastName}
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
              <div
                onClick={handleSignout}
                className="dropdown text-blue-400 p-2 hover:bg-gray-200"
              >
                <h2 className="flex items-center justify-center">Signout</h2>
              </div>
            </h1>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
