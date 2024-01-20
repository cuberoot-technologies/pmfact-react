import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import Slider from "react-slick";

const NewsandVideos = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.5,
    slidesToScroll: 3,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="newsandvideo">
          <h1>News & Videos</h1>
        </div>
        <div className="row">
          <div className="news-video-card">
            <div className="news-video-card-left">
              <img src={profile} alt="" />
            </div>
            <div className="news-video-card-right">
              <h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam modi sed mollitia neque repudiandae? Doloremque
                laudantium nostrum maiores fugiat culpa voluptatum veritatis vel
                officia corrupti hic libero totam, explicabo fuga!
              </h1>
              <a href="\dd">Read More</a>
            </div>
          </div>
          <div className="populer-mp-performance">
            <Slider {...settings}>
              <div className="news-video-card-crousel">
                <div className="news-video-card-crousel-img">
                  <img src={profile} alt="" />
                </div>
                <div className="news-video-card-crousel-content">
                  <h1>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h1>
                  <a href="\dd">Read More</a>
                </div>
              </div>
              <div className="news-video-card-crousel">
                <div className="news-video-card-crousel-img">
                  <img src={profile} alt="" />
                </div>
                <div className="news-video-card-crousel-content">
                  <h1>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h1>
                  <a href="\dd">Read More</a>
                </div>
              </div>
              <div className="news-video-card-crousel">
                <div className="news-video-card-crousel-img">
                  <img src={profile} alt="" />
                </div>
                <div className="news-video-card-crousel-content">
                  <h1>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h1>
                  <a href="\dd">Read More</a>
                </div>
              </div>
              <div className="news-video-card-crousel">
                <div className="news-video-card-crousel-img">
                  <img src={profile} alt="" />
                </div>
                <div className="news-video-card-crousel-content">
                  <h1>
                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                    in cases
                  </h1>
                  <a href="\dd">Read More</a>
                </div>
              </div>
            </Slider>
            <div className="view-more">
              <button className="view-more-btn">View more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsandVideos;
