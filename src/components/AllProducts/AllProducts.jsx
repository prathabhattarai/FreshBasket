import React from "react";
import { Helmet } from "react-helmet-async";
import BgAll from "../../assets/Grocery Website Assets/all-banner.jpg";
import CategoryPage from "../CategoryPage/CategoryPage";

const AllProducts = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>All Products | FreshBasket</title>

        <meta
          name="description"
          content="Browse all fresh groceries including fruits, vegetables, dairy, meat, and seafood at FreshBasket. Get everything in one place with fast delivery."
        />

        <meta
          name="keywords"
          content="all products, fresh groceries, online grocery store, fruits vegetables dairy meat seafood, FreshBasket"
        />

        <link
          rel="canonical"
          href="https://fresh-basket-two.vercel.app/all-products"
        />

        <meta property="og:title" content="All Products | FreshBasket" />
        <meta
          property="og:description"
          content="Explore all grocery products in one place. Fresh fruits, vegetables, dairy, meat & seafood delivered fast."
        />
        <meta
          property="og:image"
          content="https://fresh-basket-two.vercel.app/icon.png"
        />
        <meta
          property="og:url"
          content="https://fresh-basket-two.vercel.app/all-products"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Page Content */}
      <main id="all-products">
        <CategoryPage
          title="All Products"
          bgImage={BgAll}
          categories={["All"]}
        />
      </main>
    </>
  );
};

export default AllProducts;