

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Textbar = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="textslide">
        <div className="container">
          <Slider {...settings}>
            <Link to="/">Home</Link>
            <Link to="/parliament-performance">Parliament Performance</Link>
            <Link to="/home-mp-performance">MPs Performance </Link>
            <Link to="/rate-your-mp">Rate Your MPs </Link>{" "}
            <Link to="/news-and-videos">News & Videos </Link>
            <Link to="/public-voice">Public Voice </Link>
            <Link to="/our-mps">Our MPs </Link>
            <Link to="/our-expert">PF Experts </Link>
            <Link to="/parliament-blog">Parliamentary blog</Link>
            <Link to="/wish-your-mp">Wish your Mp</Link>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Textbar;
