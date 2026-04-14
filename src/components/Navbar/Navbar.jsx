import React from "react";
import { IoIosHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiLeafFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="max-w-[1100px] mx-auto h-[14vh] flex justify-between items-center ">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-3xl font-bold tracking-wide"
        >
          <RiLeafFill className="text-green-600 text-4xl" />

          <span>
            <span className="text-green-500">Fresh</span>
            <span className="text-gray-800">Basket</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="flex items-center gap-x-10">
          <li>
            <a href="#" className="tracking-wider font-semibold text-green-600">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider font-semibold text-black-400 hover:text-green-600"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider font-semibold text-black-400 hover:text-green-600"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider font-semibold text-black-400 hover:text-green-600"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Input Field */}
          <div className="flex  p-1 border-2 border-green-600 rounded-full">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search...."
              autoComplete="off"
              className="flex-1 h-[4vh] px-1 focus:outline-none"
            />

            <button className="bg-gradient-to-b from-green-600 to-green-600 text-white w-7 h-7 flex justify-center items-center rounded-full text-xl">
              <IoIosSearch />
            </button>
            
          </div>

          <a href="#" className="text-black-400 text-2xl">
            <IoIosHeart />
          </a>

          <a href="#" className="text-black-400 text-2xl">
            <HiShoppingBag />
          </a>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
