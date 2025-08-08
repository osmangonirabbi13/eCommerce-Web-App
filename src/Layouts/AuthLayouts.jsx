import React from "react";
import { Outlet } from "react-router";
import animationData from "../assets/Lottie/register.json";
import Lottie from "lottie-react";
import TopOffer from "../Page/Home/TopOffer/TopOffer";
import SoicalTop from "../Page/Home/SoicalTop/SoicalTop";
import Topmenu from "../Page/Home/Topmenu/Topmenu";

const AuthLayout = () => {
  return (
    <div>
      <TopOffer />
      <SoicalTop />
      <hr className="bg-gray-300 border-0.5 border-gray-300" />
      <Topmenu />
      <hr className="bg-gray-300 border-0.5 border-gray-300" />
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Image Section - Updated */}
        <div className="w-full lg:w-1/2  bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center p-6">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-6 text-left">
              <h1>Osman Fashion</h1>
            </div>

            {/* Form Content */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
