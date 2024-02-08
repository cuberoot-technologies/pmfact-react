import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import profile from "../../assets/profile.jpg";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import { BsPlay } from "react-icons/bs";

const NewsAndVideos = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1.02,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
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
          slidesToShow: 1.07,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <HomeFirstAdd />
      <div className="mps-background">

        <div className="news-and-videos">
          <div className="news-and-videos-top">
            <Slider {...settings}>
              <div className="breaking-news">
                <div className="trending">Trending</div>
                <Link to="/news-and-videos-details">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                    width="100%"
                    height={400}
                    alt=""
                  />
                </Link>
                <div className="caption-news">
                  <p>
                    <BsPlay />
                  </p>
                  <h6>Entertainment</h6>
                  <h1>
                    Italy Lombardia reports first 2 corona virus deaths mind
                  </h1>
                  <span>12 jan 2023</span>
                </div>
              </div>
              <div className="breaking-news">
                <div className="trending">Trending</div>
                <img
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  width="100%"
                  height={'400px'}
                  alt=""
                />
                <div className="caption-news">
                  <p>
                    <BsPlay />
                  </p>
                  <h6>Entertainment</h6>
                  <h1>
                    Italy Lombardia reports first 2 corona virus deaths mind
                  </h1>
                  <span>12 jan 2023</span>
                </div>
              </div>
              <div className="breaking-news">
                <div className="trending">Trending</div>
                <img
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  width="100%"
                  height={400}
                  alt=""
                />
                <div className="caption-news">
                  <p>
                    <BsPlay />
                  </p>
                  <h6>Entertainment</h6>
                  <h1>
                    Italy Lombardia reports first 2 corona virus deaths mind
                  </h1>
                  <span>12 jan 2023</span>
                </div>
              </div>
              <div className="breaking-news">
                <div className="trending">Trending</div>
                <img
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  width="100%"
                  height={400}
                  alt=""
                />
                <div className="caption-news">
                  <p>
                    <BsPlay />
                  </p>
                  <h6>Entertainment</h6>
                  <h1>
                    Italy Lombardia reports first 2 corona virus deaths mind
                  </h1>
                  <span>12 jan 2023</span>
                </div>
              </div>
            </Slider>
          </div>

          <div className="news-and-videos-parlimentry-news">
            <div className="parlimentry-news">
              <h1 className="mainheading">Parliamentry News</h1>
              <button className="view-more-news">View More</button>
            </div>
            <div className="parlimentry-news-list">
              <div className="parlimentry-news-list-left-side-left">
                <img src={profile} alt="" />
                <h1>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h1>
                <button className="read-more">Read More</button>
              </div>
              <div className="parlimentry-news-list-left-side-left">
                <img src={profile} alt="" />
                <h1>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h1>
                <button className="read-more">Read More</button>
              </div>
              <div className="parlimentry-news-list-left-side-left">
                <img src={profile} alt="" />
                <h1>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h1>
                <button className="read-more">Read More</button>
              </div>
              <div className="parlimentry-news-list-left-side-left">
                <img src={profile} alt="" />
                <h1>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h1>
                <button className="read-more">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="news-and-videos-shorts">
          <div className="parlimentry-news">
            <h1 className="mainheading">Parliamentry Shorts</h1>
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

        <div className="parliament-news-video-mp-news">
          <div className="parlimentry-news">
            <h1 className="mainheading" style={{ marginLeft: '1rem', textAlign: 'center' }}>MPs News</h1>
            <button className="view-more-news">View More</button>
          </div>
          <div className="news-pu">

            <div className="parliament-news-video-mp-news-list">
              <img src={profile} alt="" />
              <div className="parliament-news-video-mp-news-list-content">
                <p>Rahul on Bharat Jodo Yatra</p>
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <span>January 10,2023</span>
              </div>
            </div>

            <div className="parliament-news-video-mp-news-list">
              <img src={profile} alt="" />
              <div className="parliament-news-video-mp-news-list-content">
                <p>Rahul on Bharat Jodo Yatra</p>
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <span>January 10,2023</span>
              </div>
            </div>{" "}

            <div className="parliament-news-video-mp-news-list">
              <img src={profile} alt="" />
              <div className="parliament-news-video-mp-news-list-content">
                <p>Rahul on Bharat Jodo Yatra</p>
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <span>January 10,2023</span>
              </div>
            </div>{" "}

            <div className="parliament-news-video-mp-news-list">
              <img src={profile} alt="" />
              <div className="parliament-news-video-mp-news-list-content">
                <p>Rahul on Bharat Jodo Yatra</p>
                <h2>
                  Italy Lombardia reports first 2 coronavirus deaths amid jump
                  in cases
                </h2>
                <span>January 10,2023</span>
              </div>
            </div>
          </div>
          <div className="view-more p-3">
            <button className="view-more-btn">View More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndVideos;
