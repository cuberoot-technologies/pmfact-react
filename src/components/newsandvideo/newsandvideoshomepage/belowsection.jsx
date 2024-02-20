import React, { useState } from "react";
import profile from "../../../assets/profile.jpg";


const BelowSection = () => {

  return (
    <>

      <div className="combinedbox">
        <div className="left-news-container" style={{ width: '500px' }}>
          <div className="parlimentry-news-list">
            <div className="parlimentry-news-list-left-side-left" id="catimg" >
              <div>
                <img src={profile} alt="" />
              </div>
              <div>
                <div className="catergory-box">Video</div>
                <h1>
                  मामलों में उछाल के बीच इटली लोम्बार्डिया ने पहले 2 कोरोनोवायरस मौतों की रिपोर्ट दी
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
                  मामलों में उछाल के बीच इटली लोम्बार्डिया ने पहले 2 कोरोनोवायरस मौतों की रिपोर्ट दी
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
                  मामलों में उछाल के बीच इटली लोम्बार्डिया ने पहले 2 कोरोनोवायरस मौतों की रिपोर्ट दी
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
                <p style={{ fontSize: '13px' }}><b>बताते हैं: अमेज़न ने अमेरिका में पहले ज्ञात कोरोना वायरस मामले की पुष्टि की</b></p>
                <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
              </div>
            </div>

            <div className="rightnewsbox">
              <div className="rightnewsimage">
                <img src={profile} alt="" />
              </div>
              <div className="rightnewstext">
                <p style={{ fontSize: '13px' }}><b>बताते हैं: अमेज़न ने अमेरिका में पहले ज्ञात कोरोना वायरस मामले की पुष्टि की</b></p>
                <p style={{ fontSize: '10px', color: '#444' }}>19/03/2020 - 10:48</p>
              </div>
            </div>

            <div className="rightnewsbox">
              <div className="rightnewsimage">
                <img src={profile} alt="" />
              </div>
              <div className="rightnewstext">
                <p style={{ fontSize: '13px' }}><b>बताते हैं: अमेज़न ने अमेरिका में पहले ज्ञात कोरोना वायरस मामले की पुष्टि की</b></p>
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