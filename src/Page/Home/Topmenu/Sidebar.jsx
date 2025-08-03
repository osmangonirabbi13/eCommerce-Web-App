import { useState } from "react";
import { FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from "react-router";

const Sidebar = ({ isOpen, onClose }) => {
  const [openMainMen, setOpenMainMen] = useState(false);
  const [openMainWomen, setOpenMainWomen] = useState(false);
  const [openCatMen, setOpenCatMen] = useState(false);
  const [openCatWomen, setOpenCatWomen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-[280px] h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-bold">Osman Shop</h1>
        <FaTimes className="text-xl cursor-pointer" onClick={onClose} />
      </div>

      {/* Content */}
      <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
        {/* Main Menu */}
        <h2 className="font-semibold text-sm mb-2">Main Menu</h2>
        <ul className="space-y-3 text-sm">
          <li>
            <Link to="/" className="flex justify-between items-center">
              Home <FaAngleDown className="text-sm" />
            </Link>
          </li>

          {/* Women Dropdown */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenMainWomen(!openMainWomen)}
          >
            <span>Women</span>
            {openMainWomen ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          <div
            className={`ml-4 text-gray-600 text-xs overflow-hidden transition-all duration-300 ${
              openMainWomen ? "max-h-[200px] mt-2" : "max-h-0"
            }`}
          >
            <ul className="space-y-2">
              <li>
                <Link to="/women/dresses">Dresses</Link>
              </li>
              <li>
                <Link to="/women/tops">Tops</Link>
              </li>
              <li>
                <Link to="/women/shirts">Shirts</Link>
              </li>
            </ul>
          </div>

          {/* Men Dropdown */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenMainMen(!openMainMen)}
          >
            <span>Men</span>
            {openMainMen ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          <div
            className={`ml-4 text-gray-600 text-xs overflow-hidden transition-all duration-300 ${
              openMainMen ? "max-h-[200px] mt-2" : "max-h-0"
            }`}
          >
            <ul className="space-y-2">
              <li>
                <Link to="/men/tshirts">T-Shirts</Link>
              </li>
              <li>
                <Link to="/men/jeans">Jeans</Link>
              </li>
              <li>
                <Link to="/men/suits">Suits</Link>
              </li>
            </ul>
          </div>

          <li>
            <Link to="/outerwear">Outerwear</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr className="my-4" />

        {/* Categories */}
        <h2 className="font-semibold text-sm mb-2">Categories</h2>
        <ul className="space-y-3 text-sm">
          {/* Category Men */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenCatMen(!openCatMen)}
          >
            <span>Men</span>
            {openCatMen ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          <div
            className={`ml-4 text-gray-600 text-xs overflow-hidden transition-all duration-300 ${
              openCatMen ? "max-h-[200px] mt-2" : "max-h-0"
            }`}
          >
            <ul className="space-y-2">
              <li>
                <Link to="/category/men/tshirts">T-Shirts</Link>
              </li>
              <li>
                <Link to="/category/men/jeans">Jeans</Link>
              </li>
              <li>
                <Link to="/category/men/shorts">Shorts</Link>
              </li>
            </ul>
          </div>

          {/* Category Women */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenCatWomen(!openCatWomen)}
          >
            <span>Women</span>
            {openCatWomen ? <FaAngleUp /> : <FaAngleDown />}
          </li>
          <div
            className={`ml-4 text-gray-600 text-xs overflow-hidden transition-all duration-300 ${
              openCatWomen ? "max-h-[200px] mt-2" : "max-h-0"
            }`}
          >
            <ul className="space-y-2">
              <li>
                <Link to="/category/women/kurti">Kurti</Link>
              </li>
              <li>
                <Link to="/category/women/skirts">Skirts</Link>
              </li>
              <li>
                <Link to="/category/women/accessories">Accessories</Link>
              </li>
            </ul>
          </div>

          <li>
            <Link to="/category/kids">Kids</Link>
          </li>
          <li>
            <Link to="/category/baby">Baby</Link>
          </li>

          <li className="flex justify-between items-center">
            <Link to="/category/shoes">Shoes</Link>
            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold ml-2">
              HOT
            </span>
          </li>

          <li>
            <Link to="/category/bags">Bags</Link>
          </li>
          <li>
            <Link to="/category/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/category/watches">Watches</Link>
          </li>

          <li className="flex justify-between items-center">
            <Link to="/category/cargo-trousers">Cargo Trousers</Link>
            <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold ml-2">
              NEW
            </span>
          </li>

          <li>
            <Link to="/category/outerwear">Outerwear</Link>
          </li>
          <li>
            <Link to="/category/wallets">Wallets</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
