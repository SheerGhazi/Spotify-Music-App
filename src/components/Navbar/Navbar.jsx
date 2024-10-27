import React from "react";
import { FaSpotify } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="p-3 h-[10vh]">
      <nav className="flex justify-between">
        <div className="sptIcon">
          <FaSpotify className="size-8" />
        </div>
        <div className="searchBar flex justify-center items-center space-x-3">
          <div className="">
            <IoMdHome className="size-8" />
          </div>

          <input
            className="bg-gray-600 rounded-2xl px-20 py-1"
            placeholder="What you want to play?"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="btns flex justify-center items-center space-x-3">
          <div className="signInBtn text-gray-400 text-lg font-semibold hover:text-white ">
            <a href="#">
              <button>SignIn</button>
            </a>
          </div>
          <div className="signUpBtn hover:scale-105 ">
            <a href="#">
              <button className="bg-white text-black text-lg font-semibold rounded-2xl px-3">
                SignUp
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
