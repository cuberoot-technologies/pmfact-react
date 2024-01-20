import React, { useState } from "react";
import Slider from "react-slick";
import profile from "../../assets/profile.jpg";

const TrendingMps = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5.5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4.8,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 524,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <>
      <div className="trending-mps">
        <h1><span className="top-line"></span> Trending MP's</h1>
      </div>
      <div className="trending-mps-party-wise">
        <h6>Party Wise</h6>
        <Slider {...settings}>
          <div className="trending-mps-party-wise-card">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/thumb/464_464/1554907259.png"
              alt=""
            />
            <p>INC</p>
          </div>

          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
        </Slider>
      </div>
      <div className="trending-mps-party-wise">
        <h6>Women MP's</h6>
        <Slider {...settings}>
          <div className="trending-mps-party-wise-card">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/thumb/464_464/1554907259.png"
              alt=""
            />
            <p>INC</p>
          </div>

          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
        </Slider>
      </div>
      <div className="trending-mps-party-wise">
        <h6>Youth MP's</h6>
        <Slider {...settings}>
          <div className="trending-mps-party-wise-card">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/thumb/464_464/1554907259.png"
              alt=""
            />
            <p>INC</p>
          </div>

          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
          <div className="trending-mps-party-wise-card">
            <img src={profile} alt="" />
            <p>Member Name Extended</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default TrendingMps;
