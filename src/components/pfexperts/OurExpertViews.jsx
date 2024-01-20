import React from "react";
import profile from "../../assets/profile.jpg";
import { BsChatLeft, BsEyeFill } from "react-icons/bs";

const OurExpertViews = () => {
  return (
    <>
      <div className="wmps">
        <div className="container">
          <div className="our-experts-views">
            <h1 className="h1f"><span class="top-line"></span>Our Experts views</h1>
          </div>
          <div className="for-desk-grid">

          <div className="our-experts-views-wrapper">
            <button className="category-btn">Sports</button>
            <h1 className="h1s">
              Italy Lombardia reports first 2 coronavirus deaths amid jump in
              cases
            </h1>
            <div className="our-experts-views-wrapper-author-details">
              <div className="our-experts-views-wrapper-author-img">
                <img src={profile} alt="" />
                <div className="our-experts-views-wrapper-author">
                  <p>
                    by <span>Neeraj Gupta</span>
                  </p>
                  <p>January 10,2023</p>
                </div>
              </div>
              <div className="our-experts-views-wrapper-comments">
                <p className="comments"><BsChatLeft/> 2023</p>
                <p className="views-f"><BsEyeFill/> 2023</p>
              </div>
            </div>
          </div>
          <div className="our-experts-views-wrapper">
            <button className="category-btn">Enviroment</button>
            <h1 className="h1s">
              Italy Lombardia reports first 2 coronavirus deaths amid jump in
              cases
            </h1>
            <div className="our-experts-views-wrapper-author-details">
              <div className="our-experts-views-wrapper-author-img">
                <img src={profile} alt="" />
                <div className="our-experts-views-wrapper-author">
                  <p>
                    by <span>Neeraj Gupta</span>
                  </p>
                  <p>January 10,2023</p>
                </div>
              </div>
              <div className="our-experts-views-wrapper-comments">
                <p className="comments"><BsChatLeft/> 2023</p>
                <p className="views-f"><BsEyeFill/> 2023</p>
              </div>
            </div>
          </div>
          <div className="our-experts-views-wrapper">
            <button className="category-btn">Transport</button>
            <h1 className="h1s">
              Italy Lombardia reports first 2 coronavirus deaths amid jump in
              cases
            </h1>
            <div className="our-experts-views-wrapper-author-details">
              <div className="our-experts-views-wrapper-author-img">
                <img src={profile} alt="" />
                <div className="our-experts-views-wrapper-author">
                  <p>
                    by <span>Neeraj Gupta</span>
                  </p>
                  <p>January 10,2023</p>
                </div>
              </div>
              <div className="our-experts-views-wrapper-comments">
                <p className="comments"><BsChatLeft/> 2023</p>
                <p className="views-f"><BsEyeFill/> 2023</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertViews;
