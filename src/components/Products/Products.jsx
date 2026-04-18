import React, { useState } from "react";
import Heading from "../Heading/Heading";
import products from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItems =
    activeTab === "All"
      ? products
      : products.filter((item) => item.category === activeTab);

  const renderCards = filteredItems.slice(0, 8).map((product) => {
    return (
      <Cards image={product.image} name={product.name} price={product.price} />
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />
        {/* Tabs */}
        <div className="flex gap-2 justify-center mt-10 flex-wrap">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-3 md:px-5 py-2 text-sm md:text-lg rounded-xl cursor-pointer ${
                  activeTab === category
                    ? "bg-gradient-to-b from-green-400 to-green-500 text-white"
                    : "bg-zinc-100 text-zinc-600"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 lg:gap-9 mt-20 ">
          {renderCards}
        </div>
        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/all-products"
            className="bg-gradient-to-b from-green-400 to-green-500
 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:bg-gradient-to-b hover:from-green-500 hover:to-green-600 transition-all duration-300 cursor-pointer"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
