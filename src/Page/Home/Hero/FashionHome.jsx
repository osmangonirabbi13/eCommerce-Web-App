import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropdown } from "react-icons/io";

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

const categories = [
  { name: "Men", link: "/men" },
  { name: "Women", link: "/women" },
  { name: "Kids", link: "/kids" },
  { name: "Baby", link: "/baby" },
  { name: "Shoes", link: "/shoes", badge: "HOT" },
  { name: "Bags", link: "/bags" },
  { name: "Accessories", link: "/accessories" },
  { name: "Watches", link: "/watches" },
  { name: "Cargo Trousers", link: "/cargo", badge: "NEW" },
  { name: "Outerwear", link: "/outerwear" },
  { name: "Wallets", link: "/wallets" },
  { name: "Belts", link: "/belts" },
  { name: "Best Sellers", link: "/bestsellers" },
  { name: "Featured Products", link: "/featured" },
];

const slides = [
  {
    image: "https://i.ibb.co/6RxN2mND/slider-01.jpg",
    heading: "Street Fashion not only for the street",
    subheading: "Winter 2022 Collection",
  },
  {
    image:
      "https://klbtheme.com/clotya/wp-content/uploads/2022/04/slider-03.jpg",
    heading: "Urban Style for Every Season",
    subheading: "New Trends Available",
  },
  {
    image:
      "https://klbtheme.com/clotya/wp-content/uploads/2022/04/slider-02.jpg",
    heading: "Urban Style for Every Season",
    subheading: "New Trends Available",
  },
];

export default function FashionHome() {
  const [open, setOpen] = useState(true);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full ">
      {/* Top Navbar */}
      <div className="flex items-center justify-start max-w-7xl mx-auto gap-30 px-4   ">
        <button
          onClick={() => setOpen(!open)}
          className=" px-14 py-2 rounded text-sm hidden  items-center bg-gray-200 lg:flex"
        >
          All Categories{" "}
          <span className="pl-10">
            <IoMdArrowDropdown />
          </span>
        </button>
        <div className="h-10 border-r-1 border-indigo-500 hidden lg:flex"></div>
        <nav className="hidden  lg:flex gap-6  text-sm font-medium">
          <Link to="/">HOME</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/men">MEN</Link>
          <Link to="/outerwear">OUTERWEAR</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
      <hr className="bg-gray-300 border-0.5 border-gray-100 mb-6" />
      {/* Desktop Section */}
      <section className="hidden lg:flex  max-w-7xl mx-auto min-h-[500px]">
        {/* Sidebar - 30% */}
        <div className="w-[30%] bg-white  p-4  overflow-y-auto">
          {open ? (
            <ul className="space-y-2 text-sm">
              {categories.map((cat, index) => (
                <li key={index}>
                  <Link
                    to={cat.link}
                    className="flex justify-between items-center hover:underline"
                  >
                    {cat.name}
                    {cat.badge && (
                      <span
                        className={`${
                          cat.badge === "HOT"
                            ? "text-green-600 bg-green-100"
                            : "text-yellow-600 bg-yellow-100"
                        } text-xs px-2 py-0.5 rounded-full`}
                      >
                        {cat.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-red-600 font-semibold text-sm"
                >
                  New Arrivals{" "}
                  <span className="ml-2 bg-red-200 text-red-800 text-xs px-2 py-0.5 rounded-full">
                    SAVE 25%
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/ready-to-wear" className="hover:underline">
                  Ready to Wear
                </Link>
              </li>
              <li>
                <Link to="/men" className="hover:underline">
                  All For Men
                </Link>
              </li>
            </ul>
          ) : (
            <div className="h-full w-full" />
          )}
        </div>

        {/* Slider - 70% */}
        <div className="w-[70%] relative">
          <Slider {...settings}>
            {slides.map((slide, i) => (
              <div key={i} className="relative w-full h-[500px]">
                <img
                  src={slide.image}
                  className="w-full h-full "
                  alt={`Slide ${i}`}
                />
                <div className="absolute top-1/4 left-10 text-white md:text-black space-y-4 max-w-sm md:max-w-md">
                  <p className="text-xs md:text-sm uppercase tracking-widest">
                    {slide.subheading}
                  </p>
                  <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                    {slide.heading.split(" ").slice(0, 3).join(" ")} <br />
                    {slide.heading.split(" ").slice(3).join(" ")}
                  </h1>
                  <Link
                    to="/collection"
                    className="inline-block mt-2 text-sm font-medium   "
                  >
                    Shop Collection →
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="lg:hidden w-full relative min-h-[300px] px-2">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i} className="relative w-full h-[300px] md:h-[400px]">
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt={`Slide ${i}`}
              />
              <div className="absolute top-1/3 left-4 text-white space-y-3 max-w-xs">
                <p className="text-sm uppercase tracking-widest">
                  {slide.subheading}
                </p>
                <h1 className="text-2xl font-semibold leading-tight">
                  {slide.heading.split(" ").slice(0, 3).join(" ")} <br />
                  {slide.heading.split(" ").slice(3).join(" ")}
                </h1>
                <Link
                  to="/collection"
                  className="inline-block mt-2 text-sm font-medium  "
                >
                  Shop Collection →
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
