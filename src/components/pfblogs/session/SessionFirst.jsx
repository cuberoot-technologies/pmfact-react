import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState } from "react";

const SessionFirst = () => {
  const percentage = 66;
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="session-first">
        <div className="session-first-top">
          <p>1st Year</p>
          <BsThreeDotsVertical />
        </div>
        <div className="session-first-center">
          <div className="session-rank">
            <p>National Rank</p>
            <h3>400</h3>
          </div>
          <div className="session-rank">
            <p>National Rank</p>
            <h3>402/500</h3>
          </div>
          <div className="session-rank">
            <p>National Rank</p>
            <div style={{ width: 50, height: 50 }}>
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
          </div>
          <div className="session-rank">
            <p>National Rank</p>
            <span>000</span>
          </div>
        </div>

        {show && (
          <div className="session-first-details">
            <div className="session-first-top">
              <span>January 2022</span>
              <BsThreeDotsVertical />
            </div>
            <div className="session-first-center">
              <div className="session-ranks">
                <p>National Rank</p>
                <h3>400</h3>
              </div>
              <div className="session-ranks brl">
                <p>National Rank</p>
                <h3>402/500</h3>
              </div>
              <div className="session-ranks brb">
                <p>National Rank</p>
                <div style={{ width: 50, height: 50 }}>
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
              </div>
              <div className="session-ranks">
                <p>National Rank</p>
                <span>000</span>
              </div>
            </div>
          </div>
        )}

        <div className="session-first-bottom">
          <p onClick={() => setShow(!show)}>
            {show ? "Check session wise" : "Check session wise "}
          </p>
        </div>
      </div>
    </>
  );
};

export default SessionFirst;
