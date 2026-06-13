import React from "react";
import Grocery from "../../assets/Grocery Website Assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section id="home" aria-labelledby="hero-title" className="w-full">
      <div className="max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35 mt-10">
        {/* HERO CONTENT */}
        <div className="flex-1">
          {/* Trust / Keyword Badge */}
          <span className="bg-green-100 text-green-600 text-sm md:text-base px-5 py-2 rounded-full font-medium">
            Fast & Fresh Online Grocery Delivery Service
          </span>

          {/* MAIN SEO H1 */}
          <h1
            id="hero-title"
            className="md:text-7xl/20 text-5xl/14 font-bold mt-4 text-zinc-900 pb-8"
          >
            Fresh Organic <span className="text-green-600">Fruits</span>,{" "}
            <span className="text-green-600">Vegetables</span> & Daily Groceries
            <br />
            Delivered to Your Doorstep
          </h1>

          <Button content="Shop Fresh Groceries" />

          {/* EXTRA SEO SIGNAL TEXT (hidden visually optional but useful if styled later) */}
          <p className="mt-6 text-xs text-zinc-400">
            Online grocery delivery • Organic food store • Fresh fruits &
            vegetables • Fast home delivery
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src={Grocery}
            alt="Online grocery delivery with fresh organic fruits vegetables and daily groceries"
            loading="lazy"
            decoding="async"
            fetchpriority="high"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
