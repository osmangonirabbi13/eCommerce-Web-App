import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router";

const SoicalTop = () => {
  return (
    <div className="flex justify-around text-sm py-1">
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="" className="flex items-center gap-2 m-1 ">
          <span className="flex items-center gap-2 m-1 font-medium">
            <FaInstagram /> 3.1M Followers <IoMdArrowDropdown />
          </span>
          <p>
            Free Shipping World wide for all orders over $199. Click and Shop
            Now.
          </p>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Linkedin</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <Link className="font-medium"> Order Tracking </Link>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="" className="flex items-center gap-1 m-1">
            English <IoMdArrowDropdown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Spanish</a>
            </li>
            <li>
              <a>German</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="" className="flex items-center gap-1 m-1">
            USD <IoMdArrowDropdown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 text-center p-2 shadow-sm"
          >
            <li>
              <a>GRP</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoicalTop;
