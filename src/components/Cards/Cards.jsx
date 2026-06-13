import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = React.memo(({ image, name, price }) => {
  return (
    <article
      className="bg-zinc-100 p-5 rounded-xl hover:shadow-lg transition-all duration-300"
      aria-label={`Product card for ${name}`}
    >
      {/* Actions */}
      <div className="flex justify-between">
        {/* Wishlist Button */}
        <button
          type="button"
          aria-label={`Add ${name} to wishlist`}
          className="text-3xl text-zinc-300 hover:text-red-500 transition-colors duration-300"
        >
          <FaHeart aria-hidden="true" />
        </button>

        {/* Add to Cart */}
        <button
          type="button"
          aria-label={`Add ${name} to cart`}
          className="bg-gradient-to-b from-green-400 to-green-500 text-white text-xl px-4 py-3 rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300"
        >
          <FaPlus aria-hidden="true" />
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full h-50">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          width={300}
          height={300}
          className="w-full h-full mx-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-zinc-800">{name}</h3>

        <p className="text-2xl font-bold mt-4 mb-3 text-green-600">
          ${Number(price).toFixed(2)}
        </p>

        <Button content="Shop Now" />
      </div>
    </article>
  );
});

export default Cards;