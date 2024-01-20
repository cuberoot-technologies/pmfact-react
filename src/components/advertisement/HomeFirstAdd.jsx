import React from "react";
import add1 from "../../assets/add1.png";
import Slider from "react-slick";

const HomeFirstAdd = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="home-add-first">
        <div className="container">
          <Slider {...settings}>
            <div className="first-add">
              <img src={add1} alt="" />
            </div>
            <div className="first-add">
              <img src={add1} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeFirstAdd;
