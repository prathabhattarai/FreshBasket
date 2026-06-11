import React from "react";
import { Helmet } from "react-helmet-async";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgSeaFood from "../../assets/Grocery Website Assets/seafood-banner.jpg";

const SeaFood = () => {
  return (
    <>
      <Helmet>
        <title>Fresh Meat & Seafood | FreshBasket</title>

        <meta
          name="description"
          content="Shop fresh meat and seafood online at FreshBasket. Discover premium fish, chicken, meat, and seafood products delivered fresh to your doorstep."
        />

        <meta
          name="keywords"
          content="fresh meat, seafood, fish, chicken, online grocery, FreshBasket, meat delivery, seafood delivery"
        />

        <link
          rel="canonical"
          href="https://fresh-basket-two.vercel.app/seafood"
        />

        <meta
          property="og:title"
          content="Fresh Meat & Seafood | FreshBasket"
        />

        <meta
          property="og:description"
          content="Buy fresh meat and seafood online from FreshBasket. Quality products with fast and reliable delivery."
        />

        <meta
          property="og:image"
          content="https://fresh-basket-two.vercel.app/icon.png"
        />

        <meta
          property="og:url"
          content="https://fresh-basket-two.vercel.app/seafood"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <CategoryPage
          title="Meat & Seafood"
          bgImage={BgSeaFood}
          bgAlt="Fresh seafood and meat products"
          categories={["Meat", "SeaFood"]}
        />
      </main>
    </>
  );
};

export default SeaFood;