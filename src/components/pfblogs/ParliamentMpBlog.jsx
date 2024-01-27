import React from "react";
import profile from "../../assets/profile.jpg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsPlay, BsShareFill, BsThreeDotsVertical } from "react-icons/bs";
import pflogo from "../../assets/pflogo.png";
import PfblogsMpRating from "./PfblogsMpRating";
import NewsandVideos from "../NewsandVideos";
import Slider from "react-slick";

const ParliamentMpBlog = () => {
  var settingsFirst = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const percentage = 16;

  return (
    <div className=" mps">
      <div className="parliament-mp-blog">
        <div className="parliament-mp-blog-heading">
          <h1> National Ranking</h1>{" "}
        </div>
        <div className="pfblog-desk-grid">
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
                  <CircularProgressbar className="pfblogcircle"
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
          <div className="parliament-mp-blog">
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
                    <CircularProgressbar className="pfblogcircle"
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
          <PfblogsMpRating />
          <div>
            
          </div>
        </div>
      </div>
      <NewsandVideos />
      <div className="news-and-videos-shorts">
        <div className="parlimentry-news">
          <h1>Parliamentry Shorts</h1>
          <button className="view-more-news">View More</button>
        </div>
        <Slider {...settingsFirst}>
          <div className="breaking-news-shorts">
            <img src={profile} width="100%" height={300} alt="" />
            <div className="breaking-news-shorts-content">
              <h2>
                Italy Lombardia reports first 2 coronavirus deaths amid jump in
                cases
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
                Italy Lombardia reports first 2 coronavirus deaths amid jump in
                cases
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
                Italy Lombardia reports first 2 coronavirus deaths amid jump in
                cases
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
                Italy Lombardia reports first 2 coronavirus deaths amid jump in
                cases
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
                Italy Lombardia reports first 2 coronavirus deaths amid jump in
                cases
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
  );
};

export default ParliamentMpBlog;
