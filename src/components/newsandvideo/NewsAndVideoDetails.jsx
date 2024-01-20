import React from "react";
import profile from "../../assets/profile.jpg";
import { AiFillWechat } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";

const NewsAndVideoDetails = () => {
  return (
    <>
      <div className="container">
        <div className="news-and-video-details">
          <div className="news-and-video-details-img">
            <img src={profile} alt="" height={300} width="100%" />
          </div>
          <div className="news-and-video-details-heading">
            <div className="category-btn">Politics</div>
            <h1>
              Italy Lombardia reports first 2 coronavirus deaths amid jump in
              cases
            </h1>
            <div className="news-and-video-details-heading-author">
              <p className="author">
                {" "}
                by <span>Neeraj Gupta</span>{" "}
              </p>
              <p className="publish">January 10,2023</p>
              <p className="comment"><AiFillWechat/> 2023</p>
              <p className="views"><BsEyeFill/> 2023</p>
            </div>
          </div>
        </div>
        <div className="parliament-news-video-mp-news">
            <div className="parlimentry-news">
              <h1>Parliamentry</h1>
              <button className="view-more-news">View More</button>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12">
                  <div className="parliament-news-video-mp-news-list">
                    <img src={profile} alt="" />
                    <div className="parliament-news-video-mp-news-list-content">
                      <p>Rahul on Bharat Jodo Yatra</p>
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <span>January 10,2023</span>
                    </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12">
                  <div className="parliament-news-video-mp-news-list">
                    <img src={profile} alt="" />
                    <div className="parliament-news-video-mp-news-list-content">
                      <p>Rahul on Bharat Jodo Yatra</p>
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <span>January 10,2023</span>
                    </div>
                  </div>
              </div> <div className="col-lg-2 col-md-2 col-sm-12">
                  <div className="parliament-news-video-mp-news-list">
                    <img src={profile} alt="" />
                    <div className="parliament-news-video-mp-news-list-content">
                      <p>Rahul on Bharat Jodo Yatra</p>
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <span>January 10,2023</span>
                    </div>
                  </div>
              </div> <div className="col-lg-2 col-md-2 col-sm-12">
                  <div className="parliament-news-video-mp-news-list">
                    <img src={profile} alt="" />
                    <div className="parliament-news-video-mp-news-list-content">
                      <p>Rahul on Bharat Jodo Yatra</p>
                      <h2>
                        Italy Lombardia reports first 2 coronavirus deaths amid
                        jump in cases
                      </h2>
                      <span>January 10,2023</span>
                    </div>
                  </div>
              </div>
              <div className="view-more p-3">
              <button className="view-more-btn" >View More</button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default NewsAndVideoDetails;
