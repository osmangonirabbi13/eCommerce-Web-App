import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../../assets/TeamLogo/logo-1.png";
import logo2 from "../../../assets/TeamLogo/logo-2.png";
import logo3 from "../../../assets/TeamLogo/logo-3.png";
import logo4 from "../../../assets/TeamLogo/logo-4.png";
import logo5 from "../../../assets/TeamLogo/logo-5.png";
import logo6 from "../../../assets/TeamLogo/logo-6.png";
import logo7 from "../../../assets/TeamLogo/logo-7.png";
import logo8 from "../../../assets/TeamLogo/logo-8.png";
import logo9 from "../../../assets/TeamLogo/logo-9.png";
import logo10 from "../../../assets/TeamLogo/logo-10.png";

const TeamLogo = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
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
    <div className="max-w-7xl mx-auto px-4 ">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-3">
            <img src={logo} alt={`Product ${index + 1}`} className="w-50 " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamLogo;
