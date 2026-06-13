import React, { useState, lazy, Suspense } from "react";

// Lazy load heavy sections
const Hero = lazy(() => import("../Hero/Hero"));
const Category = lazy(() => import("../Category/Category"));
const Values = lazy(() => import("../Values/Values"));
const Products = lazy(() => import("../Products/Products"));
const Discount = lazy(() => import("../Discount/Discount"));
const Process = lazy(() => import("../Process/Process"));
const Testimonials = lazy(() => import("../Testimonials/Testimonials"));
const FAQ = lazy(() => import("../FAQPage/FAQ"));

const SectionLoader = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    Loading...
  </div>
);

const Home = () => {
  const [showMenu] = useState(false);

  return (
    <main id="home">
      {/* Hero - IMPORTANT FIRST PAINT */}
      <section aria-label="Hero section">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
      </section>

      <section id="categories" aria-label="Product categories">
        <Suspense fallback={<SectionLoader />}>
          <Category />
        </Suspense>
      </section>

      <section id="about" aria-label="Our values">
        <Suspense fallback={<SectionLoader />}>
          <Values />
        </Suspense>
      </section>

      <section id="products" aria-label="Featured products">
        <Suspense fallback={<SectionLoader />}>
          <Products />
        </Suspense>
      </section>

      <section aria-label="Special discount offers">
        <Suspense fallback={<SectionLoader />}>
          <Discount />
        </Suspense>
      </section>

      <section id="process" aria-label="How FreshBasket works">
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
      </section>

      <section aria-label="Customer testimonials">
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
      </section>

      <section id="faq" aria-label="Frequently asked questions">
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
      </section>
    </main>
  );
};

export default Home;