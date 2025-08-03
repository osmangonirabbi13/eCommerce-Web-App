import { useState } from "react";
import {
  FaBars,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaSearch,
} from "react-icons/fa";
import Sidebar from "./Sidebar";

const Topmenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex  items-center justify-between lg:justify-around  px-4 md:px-20 lg:px-16 2xl:px-46 py-2 ">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <FaBars
            className="text-xl cursor-pointer "
            onClick={() => setSidebarOpen(true)}
          />
          <h1 className="text-2xl font-bold">Osman Shop</h1>
        </div>

        {/* Center Search */}
        <div className="hidden md:flex items-center border border-gray-100 rounded-md overflow-hidden w-[50%] bg-gray-100">
          <div className="flex items-center px-2 text-gray-600">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search your favorite product..."
            className="flex-1 px-2 py-2 bg-gray-100 outline-none text-sm"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-black">
          <FaUser className="text-xl cursor-pointer" />
          <div className="relative cursor-pointer hidden sm:block">
            {" "}
            {/* hide on very small */}
            <FaHeart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline">$0.00</span>{" "}
            {/* hide text on very small */}
            <div className="relative cursor-pointer">
              <FaShoppingBag className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Topmenu;
