import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main id="home">
      {/* Hero Section */}
      <section aria-label="Hero section">
        <Hero />
      </section>

      {/* Categories */}
      <section id="categories" aria-label="Product categories">
        <Category />
      </section>

      {/* Values */}
      <section id="about" aria-label="Our values">
        <Values />
      </section>

      {/* Products */}
      <section id="products" aria-label="Featured products">
        <Products />
      </section>

      {/* Discount */}
      <section aria-label="Special discount offers">
        <Discount />
      </section>

      {/* Process */}
      <section id="process" aria-label="How FreshBasket works">
        <Process />
      </section>

      {/* Testimonials */}
      <section aria-label="Customer testimonials">
        <Testimonials />
      </section>
    </main>
  );
};

export default Home;