import React from "react";
import add1 from "../../assets/add1.png";
import Slider from "react-slick";

const HomeFirstAdd = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const sliderStyle = {
    width: '100%',
    margin: '200',
  };
  return (
    <>
      <div className="home-add-first">
        <div className="container">
          <Slider {...settings} style={sliderStyle}>
            <div className="first-add">
              <img src="https://placehold.co/2000x400" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/2000x400" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/2000x400" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/2000x400" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeFirstAdd;
