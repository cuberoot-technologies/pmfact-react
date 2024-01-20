import Slider from "react-slick";
import React from "react";
import { BsShareFill, BsThreeDotsVertical } from "react-icons/bs";
import profile from "../../../../assets/profile.jpg";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import pflogo from "../../../../assets/pflogo.png";
import SessionFirst from "../../session/SessionFirst";
import SessionSecond from "../../session/SessionSecond";
import SessionThird from "../../session/SessionThird";
import SessionFourth from "../../session/SessionFourth";
const ParliamentPerformanceBlogAttendence = () => {
  const percentage = 16;

  return (
    <>
      <div className="ppba">
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
      <SessionFirst />
      <SessionSecond />
      <SessionThird />
      <SessionFourth />
    </>
  );
};

export default ParliamentPerformanceBlogAttendence;
