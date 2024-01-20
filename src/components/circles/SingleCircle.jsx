import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SingleCircle = () => {
  const percentage = 66;
  return (
    <>
      <div className="container">
        <div className="single-circle">
          <div className="single-circle-wrapper">
            <div className="single-circle-wrapper-progress">
              <div style={{ width: 90, height: 90 }}>
                <CircularProgressbar
                  value={percentage}
                  styles={buildStyles({
                    rotation: 0.5,
                    textSize: "16px",
                    textColor: "#f88",
                  })}
                />
              </div>
            </div>
            <div className="single-circle-wrapper-details">
              <h3>
                {percentage} <span>%</span>
              </h3>
              <p>Productivity</p>
            </div>
          </div>
          <div className="single-circle-bottom">
            <div className="single-circle-bottom-details">
              <p>Sitting Schedule</p>
              <h4>
                482:59 <span>hrs</span>
              </h4>
            </div>
            <div className="single-circle-bottom-details">
              <p>Sitting Schedule</p>
              <h4>
                482:59 <span>hrs</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCircle;
