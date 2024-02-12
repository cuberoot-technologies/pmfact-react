import React, { useState } from "react";
import profile from "../../../assets/profile.jpg";


const BelowSection = () => {

    return (
        <>

<div className="combinedbox">
            <div className="left-news-container" style={{width:'500px'}}>
              <div className="parlimentry-news-list">
                <div className="parlimentry-news-list-left-side-left" id="catimg" >
                  <div>
                    <img src={profile} alt="" />
                  </div>
                  <div>
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
                <div className="parlimentry-news-list-left-side-left" id="catimg" >
                  <div>
                    <img src={profile} alt="" />
                  </div>
                  <div>
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
                <div className="parlimentry-news-list-left-side-left" id="catimg" >
                  <div>
                    <img src={profile} alt="" />
                  </div>
                  <div>
                    <div className="catergory-box">Video</div>
                    <h1>
                      Italy Lombardia reports first 2 coronavirus deaths amid jump
                      in cases
                    </h1>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="middle-news-container">
              <div className="adsbox">
                <img src="https://placehold.co/230x200" alt="" />
              </div>
              <div className="rightnewsboxes">

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

                <div className="rightnewsbox">
                  <div className="rightnewsimage">
                    <img src={profile} alt="" />
                  </div>
                  <div className="rightnewstext">
                    <p style={{ fontSize: '13px' }}><b>Explains: Amazon confirms first known Coronavirus case in America</b></p>
                    <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="right-news-container">

            </div>
          </div>
        </>

        );
};

export default BelowSection;