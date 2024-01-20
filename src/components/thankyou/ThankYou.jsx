import React from "react";
import profile from "../../assets/profile.jpg";

const ThankYou = () => {
  return (
    <>
      <div className="container">
        <div className="thank-you">
          <div className="thank-you-wrapper">
            <h1>Thank You</h1>
            <p>Your rating has successfully submitted</p>
            <p>
              Share with your parliamentary constituency people to vote Shri
              Rahul Gandhi
            </p>
            <div className="thank-you-img">
              <img src={profile} alt="" />
            </div>
            <div className="kharch-form-btn">
              <button className="click-here">Share Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
