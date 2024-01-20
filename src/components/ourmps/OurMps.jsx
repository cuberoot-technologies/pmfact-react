import React from "react";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import profile from "../../assets/profile.jpg";
import TrendingMps from "./TrendingMps";

const OurMps = () => {
  return (
    <>
      <HomeFirstAdd />

      <div className="mps">
        <div className="desk-view-mp">
          <div className="container">
            <div className="our-mps">
              <h1>Search Your Mps</h1>
              <div className="ourmps-form">
                <form action="">
                  <div className="main-form">
                    <div className="form-top">
                      <input type="text" placeholder="Type Name" />
                    </div>
                    <div className="form-bottom">
                    <input type="text" placeholder="Select State & UT" />

                      <input type="text" placeholder="Search By" />
                      <input
                        type="text"
                        placeholder=" Select Consuitency / District"
                      />

                      <input type="text" placeholder="Selct Place" />
                    </div>
                  </div>
                  <div className="form-btn">
                    <button className="submit-btn">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="result-mps-card">
              <h1>Select MP</h1>
              <div className="mp-box-flex">
              <div className="result-mps-card-wrapper">
                <div className="result-mps-card-wrapper-img">
                  <img src={profile} alt="" />
                </div>
                <div className="result-mps-card-wrapper-content">
                  <h6>Neeraj Ram Mandola houdheer Mandola</h6>
                  <p>
                    Samajwadi Panty <br />
                    Azamgarh <br />
                    Uttar Pradesh
                  </p>
                </div>
              </div>
              <div className="mp-rating-btn-box">
              <button className="link-btn">Check Public Rating</button>
              <button className="link-btn">Check Parliament Performance</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mps">
        <div className="container">
          <TrendingMps />
        </div>
      </div>
    </>
  );
};

export default OurMps;
