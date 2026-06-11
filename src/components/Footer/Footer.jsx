import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiLeafFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className="bg-zinc-100 py-20"
      aria-label="Site footer"
    >
      <div className="flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10">

        {/* Brand Section */}
        <div className="flex-1 basis-[300px]">
          <a
            href="/"
            aria-label="FreshBasket Home"
            className="flex items-center gap-2 text-3xl font-bold tracking-wide"
          >
            <RiLeafFill className="text-green-600 text-4xl" />
            <span>
              <span className="text-green-500">Fresh</span>
              <span className="text-gray-800">Basket</span>
            </span>
          </a>

          <p className="text-zinc-600 mt-6 max-w-[350px]">
            FreshBasket delivers fresh fruits, vegetables, dairy, and grocery products
            directly to your doorstep with fast and reliable service.
          </p>

          <p className="text-zinc-800 mt-6">
            2025 &copy; FreshBasket. All Rights Reserved.
          </p>
        </div>

        {/* Company Links */}
        <nav aria-label="Company links" className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>

          <ul>
            <li className="mt-6">
              <a href="#about" className="text-zinc-800 hover:text-green-500">
                About Us
              </a>
            </li>

            <li className="mt-6">
              <a href="#faq" className="text-zinc-800 hover:text-green-500">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Support Links */}
        <nav aria-label="Support links" className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>

          <ul>
            <li className="mt-6">
              <a href="#support" className="text-zinc-800 hover:text-green-500">
                Support Center
              </a>
            </li>

            <li className="mt-6">
              <a href="#feedback" className="text-zinc-800 hover:text-green-500">
                Feedback
              </a>
            </li>

            <li className="mt-6">
              <a href="#contact" className="text-zinc-800 hover:text-green-500">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">
            Stay Connected
          </h5>

          <p className="mt-6 text-zinc-600">
            Questions or feedback? <br />
            We’d love to hear from you.
          </p>

          {/* Email Form */}
          <form className="flex bg-white p-1 rounded-lg mt-6" role="search">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email Address"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-gradient-to-b from-green-400 to-green-500 p-2 rounded-lg text-white text-2xl hover:to-green-600 cursor-pointer"
            >
              <IoIosArrowForward />
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;