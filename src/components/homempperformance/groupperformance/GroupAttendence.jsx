import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Slider from "react-slick";

const GroupAttendence = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const percentage = 66;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5.4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3.3,

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
          slidesToShow: 2.4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="group-attendence">
        <p>
          {" "}
          <span className="top-line"></span>Gender Wise
        </p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="group-attendence">
        <p>Age Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="group-attendence">
        <p>State Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="group-attendence">
        <p>Party Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="group-attendence">
        <p>Profaction Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="group-attendence">
        <p>Category Wise</p>
      </div>
      <div className="group-attendence-wrapper">
        <div className="populer-mp-performance">
          <Slider {...settings}>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>{" "}
            <div className="group-attendence-card">
              <div className="group-attendence-card-top">
                <div className="group-attendence-card-top-heading">
                  <div className="group-attendence-card-top-number">000</div>
                  <h6>National Rank :</h6>
                </div>

                <div className="group-attendence-card-top-content">
                  <div className="group-attendence-card-top-graph">grra</div>
                  <p>Dadra and Nagar Haveli</p>
                </div>
              </div>
              <div className="group-attendence-card-bottom">
                <div className="group-attendence-card-bottom-range">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className="individual-list-right-outof">
                  <h1>40</h1>
                  <p>out of</p>
                  <h1>80</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default GroupAttendence;
