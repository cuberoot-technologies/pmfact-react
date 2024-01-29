import React from "react";
import Slider from "react-slick";
import profile from "../../assets/profile.jpg";

const OurExpert = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 8.1,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.1,

          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,

          slidesToScroll: 1,
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
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container  mb-5">
        <div className="mp-performance">
          <h1> <span className="top-line"></span>Our Experts</h1>
         <button className="view-more-news">View All</button>
        </div>
        <Slider {...settings}>
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>{" "}
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>{" "}
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>{" "}
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>{" "}
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>{" "}
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>{" "}
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>{" "}
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>{" "}
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>
          <div className="our-experts">
            <div className="our-experts-img">
              <img src={profile} alt="" />
            </div>
            <div className="our-experts-content">
              <div className="our-experts-content-all">
                <p>Member</p>
                <p>Name</p>
                <p>Extended</p>
              </div>
              <a href="d">Enviroment</a>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default OurExpert;
