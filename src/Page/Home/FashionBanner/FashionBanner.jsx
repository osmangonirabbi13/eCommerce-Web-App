import React from "react";
import { Link } from "react-router";

const FashionBanner = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-4">
      <div className="flex flex-col lg:flex-row gap-10 p-4">
        {/* Left Large Block */}
        <div
          className="w-full lg:w-1/2 relative bg-cover bg-center  min-h-[400px] lg:min-h-[716px]"
          style={{
            backgroundImage:
              "url('https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-01.jpg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 "></div>

          {/* Text Over Image */}
          <div className="absolute inset-0 flex flex-col justify-center p-6 lg:p-16 text-white z-10">
            <p className="text-sm uppercase tracking-wider">New Season</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
              Big patterns are <br /> back in fashion
            </h2>
            <p className="text-sm text-gray-200 mb-4 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-white font-semibold underline"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Top Right Block */}
          <div
            className="relative bg-cover bg-center flex-1 min-h-[200px] lg:min-h-[350px] "
            style={{
              backgroundImage:
                "url('https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-02.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40 "></div>
            <div className="absolute inset-0 flex flex-col justify-center p-6 lg:p-16 text-white z-10">
              <p className="text-xs uppercase tracking-wider">New Season</p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                The latest men’s <br /> trends this season
              </h3>
              <Link to="#" className="mt-2 inline-block font-medium underline">
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Bottom Right Block */}
          <div
            className="relative bg-cover bg-center flex-1 min-h-[200px] lg:min-h-[350px] "
            style={{
              backgroundImage:
                "url('https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-03.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40 "></div>
            <div className="absolute inset-0 flex flex-col justify-center p-6 lg:p-16 text-white z-10">
              <p className="text-xs uppercase tracking-wider">New Season</p>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                Show your fashion <br /> with summer shoes
              </h3>
              <Link to="#" className="mt-2 inline-block font-medium underline">
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionBanner;
