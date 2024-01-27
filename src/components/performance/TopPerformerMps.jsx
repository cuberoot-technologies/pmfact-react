import React from "react";
import Slider from "react-slick";

import profile from "../../assets/profile.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
const TopPerformerMps = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.9,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.8,

          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
     <div className="container">
        <div className="mp-performance">
          <h1><span className="top-line"></span>#TopMP Performance</h1>
          <p>Search Your MP</p>
        </div>
        <div className="populer-performance">
          <p>Populer MP Performance</p>
        </div>
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <h1>52.9%</h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <h1>52.9%</h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <h1>52.9%</h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <h1>52.9%</h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <h1>52.9%</h1>
                <img src={profile} alt="" />
              </div>
            </div>
            <div className="mp-performance-card">
              <div className="mp-performance-card-top">
                <div className="mp-performance-card-left">
                  <div className="mp-performance-card-left-box">000</div>
                  <div className="mp-performance-card-left-content">
                    <h6>National Rank :</h6>
                    <p>Att + Qs + Dbt + Pmb + Mpf</p>
                  </div>
                </div>
                <div className="mp-performance-card-right">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="mp-performance-card-body">
                <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
              </div>
              <div className="mp-performance-card-body-bottom">
                <h1>52.9%</h1>
                <img src={profile} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopPerformerMps;
