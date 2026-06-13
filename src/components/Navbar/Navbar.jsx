import React, { useEffect, useState } from "react";
import { IoIosHeart, IoIosSearch } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { RiLeafFill } from "react-icons/ri";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = ({ showMenu, setShowMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => setShowMenu(false);

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
      <nav
        className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] flex justify-between items-center px-5"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-3xl font-bold tracking-wide"
        >
          <RiLeafFill className="text-green-600 text-4xl" />
          <span>
            <span className="text-green-500">Fresh</span>
            <span className="text-gray-800">Basket</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-12 hidden">
          <li>
            <a href="#home" className="font-semibold text-green-600">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="font-semibold text-zinc-800 hover:text-green-600">
              About Us
            </a>
          </li>

          <li>
            <a href="#process" className="font-semibold text-zinc-800 hover:text-green-600">
              Process
            </a>
          </li>

          {/* ✅ FAQ ADDED */}
          <li>
            <a href="#faq" className="font-semibold text-zinc-800 hover:text-green-600">
              FAQ
            </a>
          </li>

          <li>
            <a href="#contact" className="font-semibold text-zinc-800 hover:text-green-600">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-x-5">
          {/* Search */}
          <form className="hidden md:flex p-1 border-2 border-green-600 rounded-full">
            <input
              type="search"
              placeholder="Search products..."
              className="flex-1 h-[4vh] px-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white w-7 h-7 flex items-center justify-center rounded-full"
            >
              <IoIosSearch />
            </button>
          </form>

          <button className="text-2xl">
            <IoIosHeart />
          </button>

          <button className="text-2xl">
            <HiShoppingBag />
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl"
            aria-expanded={showMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute top-[12vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-6 bg-white shadow-lg rounded-xl p-8 transition-all duration-300 ${
            showMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <li>
            <a onClick={closeMenu} href="#home">Home</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">About Us</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#process">Process</a>
          </li>

          {/* ✅ FAQ ADDED */}
          <li>
            <a onClick={closeMenu} href="#faq">FAQ</a>
          </li>

          <li>
            <a onClick={closeMenu} href="#contact">Contact Us</a>
          </li>

          <li>
            <form className="flex p-1 border-2 border-green-600 rounded-full">
              <input
                type="search"
                placeholder="Search products..."
                className="flex-1 h-[4vh] px-2 focus:outline-none"
              />
              <button className="bg-green-600 text-white w-7 h-7 flex items-center justify-center rounded-full">
                <IoIosSearch />
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;