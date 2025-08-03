import React from "react";

import FashionHome from "../Hero/FashionHome";
import Freeship from "../Freeship/Freeship";
import FashionBanner from "../FashionBanner/FashionBanner";
import BestSellerProducts from "../BestSellerProduct/BestSellerProducts";

const Home = () => {
  return (
    <>
      <FashionHome />
      <hr className="bg-gray-300 border-0.5 border-gray-300 max-w-7xl mx-auto mt-10" />
      <Freeship />
      <FashionBanner />
      <BestSellerProducts />
    </>
  );
};

export default Home;
