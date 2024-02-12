import React, { useState } from "react";
import profile from "../../../assets/profile.jpg";

const ParliamentaryNews = () => {

  return (

    <>
      <div id="hide">
      <div className="newspagecontentcontainer">
      <div className="middle-news-box">
        <div className="news-and-videos-parlimentry-news">
          <div className="parlimentry-news">
            <h5 className="mainheading" >Parliamentary News</h5>
            <button className="view-more-news">View More</button>
          </div>
          <div className="parlimentry-news-list">
            <div className="parlimentry-news-list-left-side-left" id="categorysimages" >
              <img src={profile} alt="" />
              <div className="catergory-box">Video</div>
              <h1>
                Italy Lombardia reports first 2 coronavirus deaths amid jump
                in cases in cases in cases
              </h1>
              <button className="read-more">Read More</button>
            </div>
            <div className="parlimentry-news-list-left-side-left" id="categorysimages">
              <img src={profile} alt="" />
              <div className="catergory-box">Video</div>
              <h1>
                Italy Lombardia reports first 2 coronavirus deaths amid jump
                in cases in cases in cases
              </h1>
              <button className="read-more">Read More</button>
            </div>
            <div className="parlimentry-news-list-left-side-left" id="categorysimages">
              <img src={profile} alt="" />
              <div className="catergory-box">Video</div>
              <h1>
                Italy Lombardia reports first 2 coronavirus deaths amid jump
                in cases in cases in cases
              </h1>
              <button className="read-more">Read More</button>
            </div>
            <div className="parlimentry-news-list-left-side-left" id="categorysimages">
              <img src={profile} alt="" />
              <div className="catergory-box">Video</div>
              <h1>
                Italy Lombardia reports first 2 coronavirus deaths amid jump
                in cases in cases in cases
              </h1>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>



    </>

  );
};

export default ParliamentaryNews;