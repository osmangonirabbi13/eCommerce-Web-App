import React from "react";
import Slider from "react-slick";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...arrowStyle,
        left: "-20px",
      }}
      onClick={onClick}
    ></div>
  );
};

// Right Arrow Component
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...arrowStyle,
        right: "-20px",
      }}
      onClick={onClick}
    ></div>
  );
};

const arrowStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  fontSize: "20px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  cursor: "pointer",
};

const BestSellerProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Best Seller Products</h1>
        <p className="text-gray-500 max-w-xl mx-auto mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor labore et dolore magna aliqua.
        </p>
      </div>

      <Slider {...settings}>
        {/* Card 1 */}
        <div className="px-3">
          <Link
            to="/product/123"
            className="block group bg-white shadow overflow-hidden"
          >
            {/* Image wrapper */}
            <div className="relative">
              {/* Default image */}
              <img
                src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1.jpeg"
                alt="Product"
                className="w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Hover image */}
              <img
                src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants2.jpeg"
                alt="Product Hover"
                className="absolute inset-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Text content */}
            <div className="p-2 relative z-10 bg-white">
              <p className="flex items-center gap-2 font-medium">
                <MdOutlineStarPurple500 size={20} color="#FFD700" /> 1 review
              </p>
              <h3 className="text-sm">
                Basic Colored Sweatpants With Elastic Hems
              </h3>
              <p className="text-gray-500">
                <span className="line-through pr-2">$59.99</span>$49.00
              </p>
            </div>
          </Link>
        </div>
        {/* Card 2 */}
        <div className="px-3">
          <div className="relative bg-white  shadow group overflow-hidden">
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic1.jpeg"
              alt="Product"
              className="w-full  object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic2.jpeg"
              alt="Product Hover"
              className="absolute inset-0 w-full  object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">Product 2</h3>
              <p className="text-gray-500">$59.00</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="px-3">
          <div className="relative bg-white  shadow group overflow-hidden">
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt1.jpg"
              alt="Product"
              className="w-full  object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt2.jpg"
              alt="Product Hover"
              className="absolute inset-0 w-full  object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">Product 2</h3>
              <p className="text-gray-500">$59.00</p>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="px-3">
          <div className="relative bg-white  shadow group overflow-hidden">
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1.jpg"
              alt="Product"
              className="w-full  object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2.jpg"
              alt="Product Hover"
              className="absolute inset-0 w-full  object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">Product 2</h3>
              <p className="text-gray-500">$59.00</p>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="px-3">
          <div className="relative bg-white  shadow group overflow-hidden">
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup1.jpeg"
              alt="Product"
              className="w-full  object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup2.jpeg"
              alt="Product Hover"
              className="absolute inset-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">Product 2</h3>
              <p className="text-gray-500">$59.00</p>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="px-3">
          <div className="relative bg-white  shadow group overflow-hidden">
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan1-600x900.jpg"
              alt="Product"
              className="w-full  object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan2.jpg"
              alt="Product Hover"
              className="absolute inset-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">Product 2</h3>
              <p className="text-gray-500">$59.00</p>
            </div>
          </div>
        </div>
        {/* Add more cards below in the same format */}
      </Slider>
    </div>
  );
};

export default BestSellerProducts;
