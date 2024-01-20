import React from "react";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import profile from "../../assets/profile.jpg";
import OurExpertViews from "./OurExpertViews";
import { Link } from "react-router-dom";

const OurExperts = () => {
  return (
    <>
      <HomeFirstAdd />
      <div className="mps">

      <div className="container">
          <h1 className="heading-experts">Our Experts</h1>

          <div className="pfexperts">
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
            <div className="pfexperts-wrapper">
              <div className="our-experts">
                <div className="our-experts-img">
                  <img src={profile} alt="" />
                </div>
                <div className="our-experts-content">
                  <div className="our-experts-content-all">
                    <p>Member</p>
                    <p>Name</p>
                    <p>Extended</p>
                  </div>
                  <a href="d">Enviroment</a>
                </div>
              </div>
            </div>
          </div>
          <div className="all-exports-btn">
            <Link to='/our-expert-about' className="all-experts">View All Experts</Link>
          </div>
        </div>
        <OurExpertViews/>
      </div>
    </>
  );
};

export default OurExperts;
