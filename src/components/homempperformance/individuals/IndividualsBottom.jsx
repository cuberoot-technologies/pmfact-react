import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Slider from "react-slick";
import pflogo from "../../../assets/pflogo.png"
import { Link } from "react-router-dom";
import profile from "../../../assets/profile.jpg";
import { BsShareFill, BsThreeDotsVertical } from "react-icons/bs";

const IndividualsBottom = () => {
  const percentage = 66;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    initialSlide: 0,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.1,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3.5,

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
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
     <div className="container">
        <div className="row">
          <div className="slider-flex-card">
            <div className="individuals-top-wrapper-card">
              <div className="individuals-top-wrapper">
                <div className="individuals-top-wrapper-head">
                  <div className="individuals-top-wrapper-head-left">
                    <h2>#MPsPerformance</h2>
                    <p>
                      ATTENDANCE + QUESTIONS + DEBATES + PVT MEMBER BILL +MPLADS
                    </p>
                    <h1>Neeraj Ram Mandola houdheer Mandola</h1>
                  </div>
                  <div className="individuals-top-wrapper-head-right">
                    <div className="individuals-top-wrapper-head-right-share">
                      <BsShareFill />
                    </div>
                    <div className="individuals-top-wrapper-head-right-dots">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
                <div className="individuals-top-wrapper-bottom">
                  <div className="individuals-top-wrapper-bottom-content-left">
                    <div className="individuals-top-wrapper-bottom-content-img-wrapper">
                      <div className="individuals-top-wrapper-bottom-content">
                        <p>Samajwadi Panty</p>
                        <p>Azamgarh </p>

                        <p>Uttar Pradesh</p>
                      </div>
                      <div className="individuals-top-wrapper-bottom-profile">
                        <img src={profile} alt="" width={100} />
                      </div>
                    </div>
                    <div className="individuals-top-wrapper-bottom-pfl">
                      <img src={pflogo} alt="" width={120} height={15} />
                    </div>
                  </div>
                  <div className="individuals-top-wrapper-bottom-content-right">
                    <div className="individuals-top-wrapper-bottom-progress">
                      <div style={{ width: 90, height: 90 }}>
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                      </div>
                    </div>

                    <div className="individuals-top-wrapper-bottom-details">
                      <h1>438</h1>
                      <h6>National Bank</h6>
                      <p>Out of 496*</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="for-slider-width">
              <Slider {...settings}>
                <div className=" fix-width">
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
                </div>
                <div className=" fix-width">
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
                </div>
                <div className=" fix-width">
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
                </div>
                <div className=" fix-width">
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
                </div>
              </Slider>
            </div>
          </div>
          <div className="view-more">
            <Link to="/individuals-attendence-top" className="view-more-btn">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualsBottom;
