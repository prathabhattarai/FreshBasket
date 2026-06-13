import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiLeafFill } from "react-icons/ri";
import { MdLocationOn, MdPhone } from "react-icons/md";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "FreshBasket on Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://x.com",
    label: "FreshBasket on X",
    icon: <FaXTwitter />,
  },
  {
    href: "https://instagram.com",
    label: "FreshBasket on Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://linkedin.com",
    label: "FreshBasket on LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://youtube.com",
    label: "FreshBasket on YouTube",
    icon: <FaYoutube />,
  },
];

const Footer = () => {
  return (
<footer className="bg-zinc-100 pt-20 pb-8" aria-label="Site footer">    
    <div className="max-w-[1400px] mx-auto px-10 flex flex-wrap gap-y-12">
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
            FreshBasket delivers fresh fruits, vegetables, dairy, and grocery
            products directly to your doorstep with fast and reliable service.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-3">
            <address className="not-italic flex items-start gap-2 text-zinc-700 text-sm">
              <MdLocationOn className="text-green-600 text-lg mt-0.5 shrink-0" />
              <span>
                New Baneshwor, Ward No. 10,
                <br />
                Kathmandu, Nepal 44600
              </span>
            </address>

            <a
              href="tel:+9779800000000"
              className="flex items-center gap-2 text-zinc-700 text-sm hover:text-green-600 transition-colors"
            >
              <MdPhone className="text-green-600 text-lg shrink-0" />
              +977 9800000000
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">
              Follow Us
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-green-600 hover:border-green-400 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <p className="text-zinc-800 mt-6">
            © {new Date().getFullYear()} FreshBasket. All Rights Reserved.
          </p>
        </div>

        {/* Company Links */}
        <nav aria-label="Company links" className="flex-1 min-w-[180px]">
          <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>

          <ul>
            <li className="mt-6">
              <a
                href="#about"
                className="text-zinc-800 hover:text-green-500 transition-colors"
              >
                About Us
              </a>
            </li>

            <li className="mt-6">
              <a
                href="#faq"
                className="text-zinc-800 hover:text-green-500 transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Support Links */}
        <nav aria-label="Support links" className="flex-1 min-w-[180px]">
          <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>

          <ul>
            <li className="mt-6">
              <a
                href="#support"
                className="text-zinc-800 hover:text-green-500 transition-colors"
              >
                Support Center
              </a>
            </li>

            <li className="mt-6">
              <a
                href="#feedback"
                className="text-zinc-800 hover:text-green-500 transition-colors"
              >
                Feedback
              </a>
            </li>

            <li className="mt-6">
              <a
                href="#contact"
                className="text-zinc-800 hover:text-green-500 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="flex-1 min-w-[280px]">
          <h5 className="text-zinc-800 text-2xl font-bold">
            Stay Connected
          </h5>

          <p className="mt-6 text-zinc-600">
            Questions or feedback?
            <br />
            We'd love to hear from you.
          </p>

          <form className="flex bg-white p-1 rounded-lg mt-6 shadow-sm">
            <label htmlFor="footer-email" className="sr-only">
              Email Address
            </label>

            <input
              type="email"
              id="footer-email"
              name="email"
              autoComplete="email"
              placeholder="Email Address"
              className="h-[48px] pl-4 flex-1 focus:outline-none"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-gradient-to-b from-green-400 to-green-500 px-4 rounded-lg text-white text-xl hover:to-green-600 transition-colors"
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