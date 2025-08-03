import React from "react";
import Slider from "react-slick";
import { MdOutlineStarPurple500 } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...arrowStyle,
        left: "-10px",
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
        right: "-10px",
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

const Reviews = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Latest Buyers Reviews</h1>
        <p className="text-gray-500 max-w-xl mx-auto mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor labore et dolore magna aliqua.
        </p>
      </div>

      <Slider {...settings}>
        {/* Card 1 */}
        <div className="px-3">
          <div className=" bg-white  group overflow-hidden ">
            <div className="p-4 text-center">
              <p className="text-center place-content-center flex justify-center pb-2">
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <h1 className="pb-2 text-gray-400">Osman Goni</h1>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="px-3">
          <div className=" bg-white  group overflow-hidden ">
            <div className="p-4 text-center">
              <p className="text-center place-content-center flex justify-center pb-2">
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <h1 className="pb-2 text-gray-400">Osman Goni</h1>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="px-3">
          <div className=" bg-white  group overflow-hidden ">
            <div className="p-4 text-center">
              <p className="text-center place-content-center flex justify-center pb-2">
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <h1 className="pb-2 text-gray-400">Osman Goni</h1>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="px-3">
          <div className=" bg-white  group overflow-hidden ">
            <div className="p-4 text-center">
              <p className="text-center place-content-center flex justify-center pb-2">
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <h1 className="pb-2 text-gray-400">Osman Goni</h1>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="px-3">
          <div className=" bg-white  group overflow-hidden ">
            <div className="p-4 text-center">
              <p className="text-center place-content-center flex justify-center pb-2">
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <h1 className="pb-2 text-gray-400">Osman Goni</h1>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="px-3">
          <div className=" bg-white  group overflow-hidden ">
            <div className="p-4 text-center">
              <p className="text-center place-content-center flex justify-center pb-2">
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
                <span>
                  <MdOutlineStarPurple500 />{" "}
                </span>
              </p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <h1 className="pb-2 text-gray-400">Osman Goni</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
