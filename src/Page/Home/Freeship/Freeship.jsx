import React from "react";
import { FaShippingFast, FaMoneyCheck } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Freeship = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
        {/* div 1 */}
        <div className="flex gap-4 items-center ">
          <div>
            <FaShippingFast size={50} color="white" />
          </div>
          <div className="">
            <h1 className="font-bold text-lg">Free Shipping</h1>
            <p className="">Free Shipping for orders over £130.</p>
          </div>
        </div>
        {/* div 1 end */}
        {/* div 1 */}
        <div className="flex gap-4 items-center ">
          <div>
            <FaMoneyCheck size={50} />
          </div>
          <div className="">
            <h1 className="font-bold text-lg">Money Guarantee</h1>
            <p className="">Within 30 days for an exchange.</p>
          </div>
        </div>
        {/* div 1 end */}
        {/* div 1 */}
        <div className="flex gap-4 items-center ">
          <div>
            <TbClock24 size={50} />
          </div>
          <div className="">
            <h1 className="font-bold text-lg">Online Support</h1>
            <p className="">Within 30 days for an exchange.</p>
          </div>
        </div>
        {/* div 1 end */}
        {/* div 1 */}
        <div className="flex gap-4 items-center ">
          <div>
            <RiMoneyDollarCircleFill size={50} />
          </div>
          <div className="">
            <h1 className="font-bold text-lg ">Flexible Payment</h1>
            <p className="">Pay with Multiple Credit Cards.</p>
          </div>
        </div>
        {/* div 1 end */}
      </div>
    </div>
  );
};

export default Freeship;
