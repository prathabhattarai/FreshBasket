import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/Grocery Website Assets/basket-full-vegetables.png";

const value = [
  {
    id: 1,
    title: "Trusted Grocery Service",
    para: "We provide high-quality fresh groceries and reliable delivery services to our customers.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh Produce",
    para: "Fresh fruits and vegetables are sourced daily to ensure maximum freshness and nutrition.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety Standards",
    para: "All products follow strict food safety standards for healthy and secure consumption.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic Products",
    para: "We offer organic fruits and vegetables grown without harmful chemicals or pesticides.",
    icon: <FaSeedling />,
  },
];

const Values = () => {
  const leftValues = value.slice(0, 2).map((item) => (
    <div
      key={item.id}
      className="flex md:flex-row-reverse items-center gap-7"
    >
      <div>
        <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-400 to-green-500 w-15 h-15 rounded-full">
          {item.icon}
        </span>
      </div>

      <div className="md:text-right">
        <h3 className="text-zinc-800 text-2xl md:text-3xl font-bold">
          {item.title}
        </h3>
        <p className="text-zinc-600 mt-2">{item.para}</p>
      </div>
    </div>
  ));

  const rightValues = value.slice(2).map((item) => (
    <div key={item.id} className="flex items-center gap-7">
      <div>
        <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-400 to-green-500 w-15 h-15 rounded-full">
          {item.icon}
        </span>
      </div>

      <div>
        <h3 className="text-zinc-800 text-2xl md:text-3xl font-bold">
          {item.title}
        </h3>
        <p className="text-zinc-600 mt-2">{item.para}</p>
      </div>
    </div>
  ));

  return (
    <section
      id="values"
      aria-labelledby="our-values"
      className="bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        {/* SEO Heading */}
        <div id="our-values">
          <Heading highlight="Our" heading="Values" />
        </div>

        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
          {/* Left Values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>

          {/* Center Image */}
          <div className="md:flex w-1/2 hidden">
            <img
              src={Basket}
              alt="Basket filled with fresh organic fruits and vegetables from FreshBasket"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;