import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgFruits from "../../assets/Grocery Website Assets/fruits-banner.jpg";

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} categories={['Fruits', 'Vegetables']} />
    </div>
  );
};

export default Fruits;
