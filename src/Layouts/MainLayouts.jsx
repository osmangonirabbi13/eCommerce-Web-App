import React from "react";
import { Outlet } from "react-router";
import TopOffer from "../Page/Home/TopOffer/TopOffer";
import SoicalTop from "../Page/Home/SoicalTop/SoicalTop";

const MainLayouts = () => {
  return (
    <div>
      <TopOffer />
      <SoicalTop />
      <hr className="bg-gray-300 border-0.5 border-gray-300" />
      <Outlet />
      <h2>gggg</h2>
    </div>
  );
};

export default MainLayouts;
