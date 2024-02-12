import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BsPlay } from "react-icons/bs";

const Trending = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed:4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 4000,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>

      <div className="news-and-videos-top">
        <div className="sliderbox">
        <div className="trending" style={{zIndex:'4'}}>Trending</div>
          <Slider {...settings}>
            <div className="breaking-news">
              <div className="news-content-container">
                <div className="news-image-container">
                  
                  <Link to="/news-and-videos-category">
                    <div className="image-container">
                      <img
                        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                        alt=""
                      />
                      <div className="overlay"></div>
                      <div className="caption-news">
                        <p><BsPlay /></p>
                        <h6>Entertainment</h6>
                        <h1>Italy Lombardia reports first 2 corona virus deaths mind</h1>
                        <span>12 jan 2023</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="text-news-container">
                  <div className="newsmainheading">
                    <h1>Watch:10 days Later: What Italians Wish They Had Known</h1>
                  </div>
                  <div className="catergory-box">Video</div>
                  <div className="categorybox">
                    <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                    <p>19/03/2020-10:48</p>
                  </div>
                  <div className="categorytext">
                    <p>A supermarket worker was spat at by a customer attempting to
                      stockpile Pot Noodles while another was told: "I hope you you
                      get the virus...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="breaking-news">
              <div className="news-content-container">
                <div className="news-image-container">
                  {/* <div className="trending">Trending</div> */}
                  <Link to="/news-and-videos-category">
                    <div className="image-container">
                      <img
                        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                        alt=""
                      />
                      <div className="overlay"></div>
                      <div className="caption-news">
                        <p><BsPlay /></p>
                        <h6>Entertainment</h6>
                        <h1>Italy Lombardia reports first 2 corona virus deaths mind</h1>
                        <span>12 jan 2023</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="text-news-container">
                  <div className="newsmainheading">
                    <h1>Watch:10 days Later: What Italians Wish They Had Known</h1>
                  </div>
                  <div className="catergory-box">Video</div>
                  <div className="categorybox">
                    <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                    <p>19/03/2020-10:48</p>
                  </div>
                  <div className="categorytext">
                    <p>A supermarket worker was spat at by a customer attempting to
                      stockpile Pot Noodles while another was told: "I hope you you
                      get the virus...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="breaking-news">
              <div className="news-content-container">
                <div className="news-image-container">
                  {/* <div className="trending">Trending</div> */}
                  <Link to="/news-and-videos-category">
                    <div className="image-container">
                      <img
                        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                        alt=""
                      />
                      <div className="overlay"></div>
                      <div className="caption-news">
                        <p><BsPlay /></p>
                        <h6>Entertainment</h6>
                        <h1>Italy Lombardia reports first 2 corona virus deaths mind</h1>
                        <span>12 jan 2023</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="text-news-container">
                  <div className="newsmainheading">
                    <h1>Watch:10 days Later: What Italians Wish They Had Known</h1>
                  </div>
                  <div className="catergory-box">Video</div>
                  <div className="categorybox">
                    <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                    <p>19/03/2020-10:48</p>
                  </div>
                  <div className="categorytext">
                    <p>A supermarket worker was spat at by a customer attempting to
                      stockpile Pot Noodles while another was told: "I hope you you
                      get the virus...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="breaking-news">
              <div className="news-content-container">
                <div className="news-image-container">
                  {/* <div className="trending">Trending</div> */}
                  <Link to="/news-and-videos-category">
                    <div className="image-container">
                      <img
                        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                        alt=""
                      />
                      <div className="overlay"></div>
                      <div className="caption-news">
                        <p><BsPlay /></p>
                        <h6>Entertainment</h6>
                        <h1>Italy Lombardia reports first 2 corona virus deaths mind</h1>
                        <span>12 jan 2023</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="text-news-container">
                  <div className="newsmainheading">
                    <h1>Watch:10 days Later: What Italians Wish They Had Known</h1>
                  </div>
                  <div className="catergory-box">Video</div>
                  <div className="categorybox">
                    <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                    <p>19/03/2020-10:48</p>
                  </div>
                  <div className="categorytext">
                    <p>A supermarket worker was spat at by a customer attempting to
                      stockpile Pot Noodles while another was told: "I hope you you
                      get the virus...</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>

  );
};

export default Trending;