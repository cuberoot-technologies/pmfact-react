import React from "react";
import consutency from "../../../assets/consutency.svg";
import SessionFirst from "../session/SessionFirst";

const PfBlogConstituency = () => {
  return (
    <>
      <div className="pf-blog-consuitency container">
        <div className="pf-blog-consuitency-top">
          <div className="pf-blog-consuitency-top-left">
            <img src={consutency} alt="" />
          </div>
          <div className="pf-blog-consuitency-top-right">
            <div className="pf-blog-consuitency-top-right-head">
              <p>Fund Expenditure by all MPs</p>
              <h1>83.14</h1>
              <p>Fund Expenditure by all MPs</p>
              <h1>83.14</h1>
            </div>
            <div className="pf-blog-consuitency-top-right-bottom">
              <p>Participation</p>
              <h2>83.14</h2>
              <p>496 out of 496</p>
            </div>
          </div>
        </div>
        <SessionFirst/>
      </div>
    </>
  );
};

export default PfBlogConstituency;
