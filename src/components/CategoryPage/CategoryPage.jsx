import React from "react";
import Banner from "../Banner/Banner";
import ProductsList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  const filteredItems =
    categories.includes("All")
      ? ProductsList
      : ProductsList.filter((item) =>
          categories.includes(item.category)
        );

  return (
    <main aria-label={`${title} category page`}>
      {/* Hero Banner */}
      <section aria-label={`${title} banner`}>
        <Banner title={title} bgImage={bgImage} />
      </section>

      {/* Product Grid */}
      <section
        aria-label={`${title} products list`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10"
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((product) => (
            <Cards
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p className="text-center text-zinc-500 col-span-full">
            No products found in this category.
          </p>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;