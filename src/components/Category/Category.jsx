import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/Grocery Website Assets/fruits-and-veggies.png";
import DairyCat from "../../assets/Grocery Website Assets/dairy-and-eggs.png";
import SeaCat from "../../assets/Grocery Website Assets/meat-and-seafood.png";
import { Link } from "react-router-dom";

const category = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
    path: "/fruits",
    alt: "Fresh fruits and vegetables category",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk, yogurt, and cheese to fresh eggs.",
    image: DairyCat,
    path: "/dairy",
    alt: "Dairy products and eggs category",
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "High-quality, responsibly sourced meat and seafood including fresh cuts, fish, and frozen options.",
    image: SeaCat,
    path: "/seafood",
    alt: "Meat and seafood category",
  },
];

const Category = () => {
  return (
    <section aria-label="Product categories">
      <div className="max-w-[1400px] mx-auto px-10 py-20">

        {/* Section Heading */}
        <header>
          <Heading highlight="Shop" heading="by Category" />
        </header>

        {/* Category Cards */}
        <div className="flex flex-wrap gap-10 md:mt-15">
          {category.map((card) => (
            <article
              key={card.id}
              className="flex-1 basis-[300px]"
            >
              {/* Image */}
              <div className="w-full md:min-h-[32vh] min-h-[50vh] relative -mb-10">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="absolute bottom-0"
                />
              </div>

              {/* Content */}
              <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
                <h3 className="text-zinc-800 text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="text-zinc-600 mt-3 mb-9">
                  {card.description}
                </p>

                <Link
                  to={card.path}
                  className="bg-gradient-to-b from-green-400 to-green-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:from-green-500 hover:to-green-600 transition-all duration-300"
                >
                  See All
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Category;