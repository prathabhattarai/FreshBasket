import React from "react";
import { Helmet } from "react-helmet-async";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgFruits from "../../assets/Grocery Website Assets/fruits-banner.jpg";

const Fruits = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Fresh Fruits & Vegetables | FreshBasket</title>

        <meta
          name="description"
          content="Shop fresh fruits and vegetables online at FreshBasket. Get organic, farm-fresh produce delivered to your doorstep quickly and safely."
        />

        <meta
          name="keywords"
          content="fresh fruits, vegetables, organic fruits, online grocery, FreshBasket, healthy food, fruit delivery"
        />

        <link
          rel="canonical"
          href="https://fresh-basket-two.vercel.app/fruits"
        />

        <meta property="og:title" content="Fresh Fruits & Vegetables | FreshBasket" />
        <meta
          property="og:description"
          content="Buy fresh fruits and vegetables online. Organic and farm-fresh produce delivered fast by FreshBasket."
        />
        <meta
          property="og:image"
          content="https://fresh-basket-two.vercel.app/icon.png"
        />
        <meta
          property="og:url"
          content="https://fresh-basket-two.vercel.app/fruits"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Content */}
      <main id="fruits-veg">
        <CategoryPage
          title="Fruits & Veggies"
          bgImage={BgFruits}
          categories={["Fruits", "Vegetables"]}
          bgAlt="Fresh fruits and vegetables banner"
        />
      </main>
    </>
  );
};

export default Fruits;