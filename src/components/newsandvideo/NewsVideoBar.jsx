import React from "react";
import NewsAndVideos from "./NewsAndVideos";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";

const NewsVideoBar = () => {
  return (
    <>
      <HomeFirstAdd />
      <div className="newswrapper">
        <div className="pillarads">
          <img src="https://placehold.co/160x600" alt="" />
        </div>

        <div className="container" id="newscontent-container">
          <div className="wmps" id="xmps">
            <div className="populer-mp-performance">
              <div style={{ padding: `0` }}>
                <div className="wmps" id="xmps">
                  < NewsAndVideos />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pillarads">
          <img src="https://placehold.co/160x600" alt="" />
        </div>
      </div>
    </>
  );
};

export default NewsVideoBar;
