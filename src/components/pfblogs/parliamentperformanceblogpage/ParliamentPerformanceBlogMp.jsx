import Slider from "react-slick";
import React from "react";
import { BsShareFill, BsThreeDotsVertical } from "react-icons/bs";
import profile from "../../../assets/profile.jpg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import pflogo from "../../../assets/pflogo.png";

const ParliamentPerformanceBlogMp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
  const percentage = 16;

  return (
    <>
      <div className="parliament-performance-blog-mp mps">
        <div className="ppbm">
          <h1>Attendence</h1>
        </div>
        <Slider {...settings}>
          <div className="parliament-mp-blog pa">
            <div className="parliament-mp-blog-heading">
              <h1> National Ranking</h1>{" "}
            </div>
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>ATTENDANCE</p>
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
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.5,
                        textSize: "16px",
                        textColor: "#f88",
                      })}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parliament-mp-blog pa">
            <div className="parliament-mp-blog-heading">
              <h1> State Ranking</h1>{" "}
            </div>
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>ATTENDANCE</p>
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
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.5,
                        textSize: "16px",
                        textColor: "#f88",
                      })}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="view-more">
          <button className="view-more-btn">View More</button>
        </div>
      </div>
      <div className="parliament-performance-blog-mp mps">
        <div className="ppbm">
          <h1>Questions</h1>
        </div>
        <Slider {...settings}>
          <div className="parliament-mp-blog pa">
            <div className="parliament-mp-blog-heading">
              <h1> National Ranking</h1>{" "}
            </div>
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>ATTENDANCE</p>
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
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.5,
                        textSize: "16px",
                        textColor: "#f88",
                      })}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parliament-mp-blog pa">
            <div className="parliament-mp-blog-heading">
              <h1> State Ranking</h1>{" "}
            </div>
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>ATTENDANCE</p>
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
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.5,
                        textSize: "16px",
                        textColor: "#f88",
                      })}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="view-more">
          <button className="view-more-btn">View More</button>
        </div>
      </div>
      <div className="parliament-performance-blog-mp mps">
        <div className="ppbm">
          <h1>Debate</h1>
        </div>
        <Slider {...settings}>
          <div className="parliament-mp-blog pa">
            <div className="parliament-mp-blog-heading">
              <h1> National Ranking</h1>{" "}
            </div>
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>ATTENDANCE</p>
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
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.5,
                        textSize: "16px",
                        textColor: "#f88",
                      })}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parliament-mp-blog pa">
            <div className="parliament-mp-blog-heading">
              <h1> State Ranking</h1>{" "}
            </div>
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>ATTENDANCE</p>
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
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.5,
                        textSize: "16px",
                        textColor: "#f88",
                      })}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="view-more">
          <button className="view-more-btn">View More</button>
        </div>
      </div>
      <div className="parliament-performance-blog-mp mps">
        <div className="ppbm">
          <h1>Pvt Member Bill</h1>
        </div>
        <Slider {...settings}>
          <div className="parliament-mp-blog pa">
            <div className="parliament-mp-blog-heading">
              <h1> National Ranking</h1>{" "}
            </div>
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>ATTENDANCE</p>
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
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.5,
                        textSize: "16px",
                        textColor: "#f88",
                      })}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parliament-mp-blog pa">
            <div className="parliament-mp-blog-heading">
              <h1> State Ranking</h1>{" "}
            </div>
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>ATTENDANCE</p>
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
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.5,
                        textSize: "16px",
                        textColor: "#f88",
                      })}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="view-more">
          <button className="view-more-btn">View More</button>
        </div>
      </div>
    </>
  );
};

export default ParliamentPerformanceBlogMp;
