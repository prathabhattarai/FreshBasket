import React, { useState } from "react";
import Heading from "../Heading/Heading";
import products from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? products
      : products.filter((item) => item.category === activeTab);

  const renderCards = filteredItems.slice(0, 8).map((product) => (
    <Cards
      key={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ));

  return (
    <section
      id="products"
      aria-labelledby="our-products"
      className="bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-10 py-20">

        {/* SECTION HEADING */}
        <div id="our-products">
          <Heading highlight="Fresh" heading="Organic Grocery Products" />
        </div>

        {/* SEO INTRO TEXT (IMPORTANT FOR RANKING) */}
        <p className="text-center text-zinc-600 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          Explore a wide range of fresh organic groceries including fruits,
          vegetables, dairy products, seafood, and daily essentials. All products
          are carefully sourced from trusted farms and suppliers to ensure quality,
          freshness, and fast home delivery.
        </p>

        {/* CATEGORY DESCRIPTION (SEO BOOST) */}
        <p className="text-center text-zinc-500 mt-2 text-xs md:text-sm max-w-xl mx-auto">
          Browse categories like fresh fruits, organic vegetables, dairy items,
          and seafood to find exactly what you need for a healthy lifestyle.
        </p>

        {/* CATEGORY TABS */}
        <div
          className="flex gap-2 justify-center mt-10 flex-wrap"
          role="tablist"
          aria-label="Product Categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeTab === category}
              className={`px-3 md:px-5 py-2 text-sm md:text-lg rounded-xl cursor-pointer transition-all duration-300 ${
                activeTab === category
                  ? "bg-gradient-to-b from-green-400 to-green-500 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 lg:gap-9 mt-20">
          {renderCards}
        </div>

        {/* SEO SUPPORT TEXT BELOW PRODUCTS */}
        <p className="text-center text-zinc-500 mt-10 text-sm max-w-2xl mx-auto">
          FreshBasket ensures fast delivery of high-quality grocery items directly
          to your doorstep. Shop fresh fruits, vegetables, dairy, meat, and seafood
          online at affordable prices.
        </p>

        {/* VIEW ALL BUTTON */}
        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/all-products"
            aria-label="View all FreshBasket grocery products"
            className="bg-gradient-to-b from-green-400 to-green-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:from-green-500 hover:to-green-600 transition-all duration-300"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;