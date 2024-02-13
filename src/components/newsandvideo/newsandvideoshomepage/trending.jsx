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
        <div className="trendingwrapper">
          <div className="sliderbox">
            <div className="trending" style={{ zIndex: '4' }}>Trending</div>
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
                      <h3>वायरस आधुनिक इतिहास की सबसे गंभीर चुनौतियों में से एक के साथ नेताओं का सामना करता है</h3>
                    </div>
                    <div className="catergory-box" style={{ marginBottom: '0.5rem' }}>Video</div>
                    <div className="categorybox" style={{ marginBottom: '0.5rem' }}>
                      <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                      <p>19/03/2020-10:48</p>
                    </div>
                    <div className="categorytext">
                      <p>पॉट नूडल्स इकट्ठा करने की कोशिश कर रहे एक ग्राहक ने एक सुपरमार्केट कर्मचारी पर थूक दिया था...</p>
                    </div>
                  </div>
                  <div className="adverbox">
                    <img src="https://placehold.co/200x200" alt="" />
                  </div>
                </div>
              </div>

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
                      <h3>वायरस आधुनिक इतिहास की सबसे गंभीर चुनौतियों में से एक के साथ नेताओं का सामना करता है</h3>
                    </div>
                    <div className="catergory-box" style={{ marginBottom: '0.5rem' }}>Video</div>
                    <div className="categorybox" style={{ marginBottom: '0.5rem' }}>
                      <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                      <p>19/03/2020-10:48</p>
                    </div>
                    <div className="categorytext">
                      <p>पॉट नूडल्स इकट्ठा करने की कोशिश कर रहे एक ग्राहक ने एक सुपरमार्केट कर्मचारी पर थूक दिया था...</p>
                    </div>
                  </div>
                  <div className="adverbox">
                    <img src="https://placehold.co/200x200" alt="" />
                  </div>
                </div>
              </div>

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
                      <h3>वायरस आधुनिक इतिहास की सबसे गंभीर चुनौतियों में से एक के साथ नेताओं का सामना करता है</h3>
                    </div>
                    <div className="catergory-box" style={{ marginBottom: '0.5rem' }}>Video</div>
                    <div className="categorybox" style={{ marginBottom: '0.5rem' }}>
                      <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                      <p>19/03/2020-10:48</p>
                    </div>
                    <div className="categorytext">
                      <p>पॉट नूडल्स इकट्ठा करने की कोशिश कर रहे एक ग्राहक ने एक सुपरमार्केट कर्मचारी पर थूक दिया था...</p>
                    </div>
                  </div>
                  <div className="adverbox">
                    <img src="https://placehold.co/200x200" alt="" />
                  </div>
                </div>
              </div>

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
                      <h3>वायरस आधुनिक इतिहास की सबसे गंभीर चुनौतियों में से एक के साथ नेताओं का सामना करता है</h3>
                    </div>
                    <div className="catergory-box" style={{ marginBottom: '0.5rem' }}>Video</div>
                    <div className="categorybox" style={{ marginBottom: '0.5rem' }}>
                      <p style={{ marginRight: '1rem' }}>Stephen Romero</p>
                      <p>19/03/2020-10:48</p>
                    </div>
                    <div className="categorytext">
                      <p>पॉट नूडल्स इकट्ठा करने की कोशिश कर रहे एक ग्राहक ने एक सुपरमार्केट कर्मचारी पर थूक दिया था...</p>
                    </div>
                  </div>
                  <div className="adverbox">
                    <img src="https://placehold.co/200x200" alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>

        </div>
      </div>
    </>

  );
};

export default Trending;