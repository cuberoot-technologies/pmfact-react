import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import profile from "../../../../assets/profile.jpg";
import { BsShareFill, BsThreeDotsVertical } from "react-icons/bs";

const ConsuitencyBottom = () => {
  const percentage = 66;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="individuals-top-wrapper">
              <div className="individuals-top-wrapper-head">
                <div className="individuals-top-wrapper-head-left">
                  <h2>#MPsPerformance</h2>
                  <p>
                    ATTENDANCE + QUESTIONS + DEBATES + PVT MEMBER BILL +MPLADS
                  </p>
                  <h1>Neeraj Ram Mandola houdheer Mandola</h1>
                </div>
                <div className="individuals-top-wrapper-head-right">
                  <div className="individuals-top-wrapper-head-right-share">
                    <BsShareFill />
                  </div>
                  <div className="individuals-top-wrapper-head-right-dots">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
              <div className="individuals-top-wrapper-bottom">
                <div className="individuals-top-wrapper-bottom-content-left">
                  <div className="individuals-top-wrapper-bottom-content-img-wrapper">
                    <div className="individuals-top-wrapper-bottom-content">
                      <p>Samajwadi Panty</p>
                      <p>Azamgarh </p>

                      <p>Uttar Pradesh</p>
                    </div>
                    <div className="individuals-top-wrapper-bottom-profile">
                      <img src={profile} alt="" width={100} />
                    </div>
                  </div>
                  <div className="individuals-top-wrapper-bottom-pfl">
                    <img
                      src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt=""
                      width={100}
                      height={20}
                    />
                  </div>
                </div>
                <div className="individuals-top-wrapper-bottom-content-right">
                  <div className="individuals-top-wrapper-bottom-progress">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>

                  <div className="individuals-top-wrapper-bottom-details">
                    <h1>438</h1>
                    <h6>National Bank</h6>
                    <p>Out of 496*</p>
                    <div className="individuals-top-wrapper-bottom-details-avg">
                      <span></span>
                      <p>Below Avg. Performer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="row for-justify">
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 fix-width">
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>52.9%</h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 fix-width">
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>52.9%</h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 fix-width">
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>52.9%</h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 fix-width">
                <div className="mp-performance-card">
                  <div className="mp-performance-card-top">
                    <div className="mp-performance-card-left">
                      <div className="mp-performance-card-left-box">000</div>
                      <div className="mp-performance-card-left-content">
                        <h6>National Rank :</h6>
                        <p>Att + Qs + Dbt + Pmb + Mpf</p>
                      </div>
                    </div>
                    <div className="mp-performance-card-right">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="mp-performance-card-body">
                    <h2>Neeraj Ram Mandola Choudheer Mandola</h2>
                  </div>
                  <div className="mp-performance-card-body-bottom">
                    <h1>52.9%</h1>
                    <img src={profile} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="view-more">
            <Link to="/individuals-attendence-top" className="view-more-btn">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsuitencyBottom;
