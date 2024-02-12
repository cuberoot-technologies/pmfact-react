import React, { useState } from "react";
import Slider from "react-slick";
import profile from "../../../assets/profile.jpg";
import { BsPlay } from "react-icons/bs";

const NewsShorts = () => {

  var settingsFirst = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          initialSlide: 1,
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>

      <div className="parliabox" style={{paddingTop:'1rem'}}>
        <div className="news-and-videos-shorts">
          <div className="parlimentry-news">
            <h5 className="mainheading" >Parliamentry Shorts</h5>
            <button className="view-more-news">View More</button>
          </div>
          <Slider {...settingsFirst}>
            <div className="breaking-news-shorts">
              <img src={profile} width="100%" height={300} alt="" />
              <div className="breaking-news-shorts-content">
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <div className="time-play">
                  <button className="btn-time">10:30</button>{" "}
                  <span>
                    <BsPlay />{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="breaking-news-shorts">
              <img src={profile} width="100%" height={300} alt="" />
              <div className="breaking-news-shorts-content">
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <div className="time-play">
                  <button className="btn-time">10:30</button>{" "}
                  <span>
                    <BsPlay />{" "}
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="breaking-news-shorts">
              <img src={profile} width="100%" height={300} alt="" />
              <div className="breaking-news-shorts-content">
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <div className="time-play">
                  <button className="btn-time">10:30</button>{" "}
                  <span>
                    <BsPlay />{" "}
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="breaking-news-shorts">
              <img src={profile} width="100%" height={300} alt="" />
              <div className="breaking-news-shorts-content">
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <div className="time-play">
                  <button className="btn-time">10:30</button>{" "}
                  <span>
                    <BsPlay />{" "}
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="breaking-news-shorts">
              <img src={profile} width="100%" height={300} alt="" />
              <div className="breaking-news-shorts-content">
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <div className="time-play">
                  <button className="btn-time">10:30</button>{" "}
                  <span>
                    <BsPlay />{" "}
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>

  );
};

export default NewsShorts;