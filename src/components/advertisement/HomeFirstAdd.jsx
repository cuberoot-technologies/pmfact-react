import React from "react";
import add1 from "../../assets/add1.png";
import Slider from "react-slick";

const HomeFirstAdd = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    arrows:false,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    arrows:false,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderStyle = {
    width: '100%',
  };
  return (
    <>
      <div className="home-add-first">
        <div className="container">
          <Slider {...settings2} style={sliderStyle}>
            <div className="first-add">
              <img src="https://placehold.co/728x90" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/728x90" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/728x90" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/728x90" alt="" />
            </div>
          </Slider>
        </div>
      </div>

      <div className="home-add-first2">
        <div className="container">
          <Slider {...settings} style={sliderStyle}>
            <div className="first-add">
              <img src="https://placehold.co/300x50" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/300x50" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/300x50" alt="" />
            </div>
            <div className="first-add">
              <img src="https://placehold.co/300x50" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeFirstAdd;
