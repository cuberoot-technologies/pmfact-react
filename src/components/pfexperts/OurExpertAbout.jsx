import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import OurExpertViews from "./OurExpertViews";

const OurExpertAbout = () => {
  return (
    <>
      <div className="mps">
        <div className="container">
          <div className="our-expert-about">
            <Link to='/our-expert-about-details'
             className="our-expert-about-img">
              <img src={profile} alt="" />
            </Link>
            <div className="our-expert-about-name">
              <p>
                Member Name <br /> Extended name
              </p>
              <span>Enviroment</span>
            </div>
          </div>
          <div className="our-exper-about-paragraph">
            <p>Italy Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in cases</p>
            <p>Italy Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in cases</p>
            <p>Italy Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in casesItaly Lombardia reports first 2 coronavirus deaths amid jump in cases</p>
          </div>
          <OurExpertViews/>
        </div>
      </div>
    </>
  );
};

export default OurExpertAbout;
