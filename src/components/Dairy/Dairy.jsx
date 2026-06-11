import React from "react";
import { Helmet } from "react-helmet-async";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgDairy from "../../assets/Grocery Website Assets/dairy-banner.jpg";

const Dairy = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Dairy & Eggs | FreshBasket</title>

        <meta
          name="description"
          content="Buy fresh dairy products and eggs online at FreshBasket. Get milk, cheese, yogurt, and organic dairy items delivered to your doorstep."
        />

        <meta
          name="keywords"
          content="dairy products, fresh eggs, milk, cheese, yogurt, online grocery, FreshBasket, organic dairy"
        />

        <link
          rel="canonical"
          href="https://fresh-basket-two.vercel.app/dairy"
        />

        <meta property="og:title" content="Dairy & Eggs | FreshBasket" />
        <meta
          property="og:description"
          content="Shop fresh dairy products and eggs online. Fast delivery of milk, cheese, yogurt, and more."
        />
        <meta
          property="og:image"
          content="https://fresh-basket-two.vercel.app/icon.png"
        />
        <meta
          property="og:url"
          content="https://fresh-basket-two.vercel.app/dairy"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Content */}
      <main id="dairy">
        <CategoryPage
          title="Dairy & Eggs"
          bgImage={BgDairy}
          categories={["Dairy"]}
          bgAlt="Fresh dairy products and eggs banner"
        />
      </main>
    </>
  );
};

export default Dairy;