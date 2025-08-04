import React from "react";
import { Outlet } from "react-router";
import TopOffer from "../Page/Home/TopOffer/TopOffer";
import SoicalTop from "../Page/Home/SoicalTop/SoicalTop";
import Topmenu from "../Page/Home/Topmenu/Topmenu";
import Footer from "../Page/Shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <TopOffer />
      <SoicalTop />
      <hr className="bg-gray-300 border-0.5 border-gray-300" />
      <Topmenu />
      <hr className="bg-gray-300 border-0.5 border-gray-300" />
      <div className="min-h-[calc(100vh-108px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
