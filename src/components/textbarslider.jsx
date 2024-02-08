import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SliderTextbar = () => {
  var settings = {
    dots: false,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const linkStyle = {
    textDecoration: 'none',
    padding: '4px',
    marginRight: '8px',
    paddingRight: '10px',
    fontWeight: '700',
    color: '#000',
    display: 'inline-block',
    borderRight: '1px solid #ccc',
  };

  return (
    <div className="slider-textslider">
      <div className="textslide">
        <div className="container">
          <Slider {...settings}>
            <div><Link to="/" style={linkStyle}>Home</Link></div>
            <div><Link to="/parliament-performance" style={linkStyle}>Parliament Performance</Link></div>
            <div><Link to="/home-mp-performance" style={linkStyle}>MPs Performance</Link></div>
            <div><Link to="/rate-your-mp" style={linkStyle}>Rate Your MPs</Link></div>
            <div><Link to="/news-and-videos" style={linkStyle}>News & Videos</Link></div>
            <div><Link to="/public-voice" style={linkStyle}>Public Voice</Link></div>
            <div><Link to="/our-mps" style={linkStyle}>Our MPs</Link></div>
            <div><Link to="/our-expert" style={linkStyle}>PF Experts</Link></div>
            <div><Link to="/parliament-blog" style={linkStyle}>Parliamentary blog</Link></div>
            <div><Link to="/wish-your-mp" style={linkStyle}>Wish your Mp</Link></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderTextbar;
