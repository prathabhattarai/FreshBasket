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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          aria-label="FreshBasket Home"
          className="flex items-center gap-2 text-3xl font-bold tracking-wide"
        >
          <RiLeafFill className="text-green-600 text-4xl" />

          <span>
            <span className="text-green-500">Fresh</span>
            <span className="text-gray-800">Basket</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#home"
              className="tracking-wider font-semibold text-green-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="tracking-wider font-semibold text-zinc-800 hover:text-green-600"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#process"
              className="tracking-wider font-semibold text-zinc-800 hover:text-green-600"
            >
              Process
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="tracking-wider font-semibold text-zinc-800 hover:text-green-600"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-x-5">
          {/* Search */}
          <form
            role="search"
            className="md:flex p-1 border-2 border-green-600 rounded-full hidden"
          >
            <input
              type="search"
              name="search"
              placeholder="Search products..."
              autoComplete="off"
              aria-label="Search products"
              className="flex-1 h-[4vh] px-2 focus:outline-none"
            />

            <button
              type="submit"
              aria-label="Search"
              className="bg-green-600 text-white w-7 h-7 flex justify-center items-center rounded-full text-xl"
            >
              <IoIosSearch />
            </button>
          </form>

          {/* Wishlist */}
          <button
            type="button"
            aria-label="Wishlist"
            className="text-zinc-800 text-2xl"
          >
            <IoIosHeart />
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-zinc-800 text-2xl"
          >
            <HiShoppingBag />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={showMenu ? "Close Menu" : "Open Menu"}
            aria-expanded={showMenu}
            onClick={toggleMenu}
            className="text-zinc-800 text-3xl md:hidden"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col items-center gap-y-8 md:hidden absolute top-[12vh] right-0 shadow-lg bg-green-500/15 backdrop-blur-xl rounded-xl p-10 -left-full transform -translate-x-1/2 transition-all duration-500 ${
            showMenu ? "left-1/2" : ""
          }`}
        >
          <li>
            <a
              href="#home"
              className="tracking-wider font-semibold text-green-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="tracking-wider font-semibold text-zinc-800 hover:text-green-600"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#process"
              className="tracking-wider font-semibold text-zinc-800 hover:text-green-600"
            >
              Process
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="tracking-wider font-semibold text-zinc-800 hover:text-green-600"
            >
              Contact Us
            </a>
          </li>

          <li>
            <form
              role="search"
              className="flex p-1 border-2 border-green-600 rounded-full"
            >
              <input
                type="search"
                name="mobile-search"
                placeholder="Search products..."
                autoComplete="off"
                aria-label="Search products"
                className="flex-1 h-[4vh] px-2 focus:outline-none"
              />

              <button
                type="submit"
                aria-label="Search"
                className="bg-green-600 text-white w-7 h-7 flex justify-center items-center rounded-full text-xl"
              >
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