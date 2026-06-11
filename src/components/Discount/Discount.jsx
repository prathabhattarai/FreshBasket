import React from "react";
import Button from "../Button/Button";
import FreshFruits from "../../assets/Grocery Website Assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-no-repeat bg-right bg-cover"
      style={{ backgroundImage: `url(${FreshFruits})` }}
      aria-labelledby="discount-title"
    >
      <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10">

        {/* Discount Badge */}
        <span
          className="md:text-9xl text-6xl text-green-500 font-bold transform md:-rotate-90 h-fit md:self-center"
          aria-hidden="true"
        >
          20%
        </span>

        {/* Content */}
        <div className="max-w-[700px]">
          <h2
            id="discount-title"
            className="md:text-7xl text-4xl text-zinc-800 font-bold"
          >
            First Order Discount!
          </h2>

          <p className="text-zinc-600 my-6">
            Enjoy an exclusive first order discount on FreshBasket grocery store.
            Shop fresh fruits, vegetables, dairy, and essentials with fast delivery
            and guaranteed quality.
          </p>

          <Button content="Get Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;