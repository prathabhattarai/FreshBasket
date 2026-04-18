import React, { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiLeafFill } from "react-icons/ri";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
const Navbar = ({ showMenu, setShowMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] flex justify-between items-center ">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-bold tracking-wide "
        >
          <RiLeafFill className="text-green-600 text-4xl " />

          <span>
            <span className="text-green-500">Fresh</span>
            <span className="text-gray-800">Basket</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
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
          <div className="md:flex  p-1 border-2 border-green-600 rounded-full hidden">
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
          {/* Hamburger */}
          <a
            href="#"
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col items-center gap-x-12 md:hidden absolute top-[12vh] right-0 shadow-lg gap-y-12 bg-green-500/15 backdrop-blur-xl rounded-xl p-10 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? "left-1/2" : ""}`}
        >
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
          <li className="flex  p-1 border-2 border-green-600 rounded-full md:hidden">
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
