import React from "react";
import Grocery from "../../assets/Grocery Website Assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="w-full"
    >
      <div className="max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35 mt-10">
        
        {/* Hero Content */}
        <div className="flex-1">
          
          <span className="bg-green-100 text-green-500 text-lg px-5 py-2 rounded-full">
            Premium Fresh Grocery Delivery
          </span>

          <h1
            id="hero-title"
            className="md:text-7xl/20 text-5xl/14 font-bold mt-2 text-zinc-900"
          >
            Tasty Organic{" "}
            <span className="text-green-500">Fruits</span> &{" "}
            <span className="text-green-500">Vegetables</span> <br />
            Delivered In Your City
          </h1>

          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-5">
            FreshBasket delivers organic fruits, vegetables, and grocery items
            directly to your doorstep. Eat healthy, live better with fresh farm products.
          </p>

          <Button content="Shop Now" />
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src={Grocery}
            alt="Fresh organic fruits and vegetables grocery delivery hero banner"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;