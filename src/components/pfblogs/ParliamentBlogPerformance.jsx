import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsShareFill } from "react-icons/bs";

const ParliamentBlogPerformance = () => {
  return (
    <>
      <div className="pf-blog-performance">
        <div className="pf-blog-performance-graph">
          <div className="pf-blog-performance-graph-half">
            <div className="all-cicle">
              {/* <div className="circle-first-1">
                <div style={{ width: 300, height: 300 }}>
                  <CircularProgressbar
                    value={10}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div> */}
              {/* <div className="circle-sec">
                <div style={{ width: 170, height: 170 }}>
                  <CircularProgressbar
                    value={46}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div> */}
              <div className="circle-th">
                <div style={{ width: 110, height: 110 }}>
                  <CircularProgressbar
                    value={33}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
              <div className="circle-for">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={22}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
              <div className="circle-fiv">
                <div style={{ width: 30, height: 30 }}>
                  <CircularProgressbar
                    value={25}
                    styles={buildStyles({
                      rotation: 0.5,
                      textSize: "16px",
                      textColor: "#f88",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pf-blog-performance-graph-content">
            <h6>Overall Performance</h6>
            <h1>83.14</h1>
            <p>National Ranking</p>
            <h2>421</h2>
            <p>496 out of 496</p>
            <div className="share-btn">
              <div className="share">
                <BsShareFill />
              </div>
            </div>
          </div>
        </div>
        <div className="pf-blog-performance-all">
          <div className="pf-blog-performance-all-det">
            <div className="pf-blog-performance-all-det-top">
              <h3>83.14</h3>
              <h6 style={{marginLeft:'1rem'}}>Loksabha Perform...</h6>
            </div>
            <div className="pf-blog-performance-all-det-top">
              <h4>421</h4>
              <h6>National Ranking</h6>
            </div>
            <div className="pf-blog-performance-all-det-bottom">
              <p>496 out of 496</p>
            </div>
            <div className="pf-blog-performance-all-det-bottom"></div>
          </div>
          <div className="pf-blog-performance-all-det">
            <div className="pf-blog-performance-all-det-top">
              <h3>83.14</h3>
              <h6>Loksabha Perform...</h6>
            </div>
            <div className="pf-blog-performance-all-det-top">
              <h4>421</h4>
              <h6>National Ranking</h6>
            </div>
            <div className="pf-blog-performance-all-det-bottom">
              <p>496 out of 496</p>
            </div>
            <div className="pf-blog-performance-all-det-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParliamentBlogPerformance;
