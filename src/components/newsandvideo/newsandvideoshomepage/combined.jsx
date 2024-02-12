import React, { useState } from "react";
import profile from "../../../assets/profile.jpg";


const CombineBox = () => {

    return (
        <>

            <div className="combinedbox">
                <div className="left-news-container">
                <h3  >Parliamentary News</h3>
                <div className="totalleftside">
                    <div className="leftnewsimage">
                        <img src="https://placehold.co/500x300" />
                    </div>

                    <div className="catergory-box">Video</div>

                    <div className="leftnewstext">
                        <h2>वायरस आधुनिक इतिहास की सबसे गंभीर चुनौतियों में से एक के साथ नेताओं का सामना करता है</h2>
                        <div className="leftnewspara">
                            <p style={{ marginRight: '1rem' }}><b>Stepher Romero</b></p>
                            <p>19/03/2020 - 10:49</p>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="middle-news-container">
                    <div className="news-and-videos-parlimentry-news">
                        <div className="parlimentry-news-list">
                            <div className="parlimentry-news-list-left-side-left" id="categorysimages" >
                                <img src={profile} alt="" />
                                <div className="catergory-box">Video</div>
                                <h1>
                                मामलों में उछाल के बीच इटली लोम्बार्डिया ने पहले 2 कोरोनोवायरस मौतों की रिपोर्ट दी
                                </h1>
                                <button className="read-more" style={{textAlign:'left'}}>Read More</button>
                            </div>
                            <div className="parlimentry-news-list-left-side-left" id="categorysimages">
                                <img src={profile} alt="" />
                                <div className="catergory-box">Video</div>
                                <h1>
                                मामलों में उछाल के बीच इटली लोम्बार्डिया ने पहले 2 कोरोनोवायरस मौतों की रिपोर्ट दी
                                </h1>
                                <button className="read-more" style={{textAlign:'left'}}>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-news-container">
                    <hr />
                    <h3>Virus Confronts</h3>
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
            </div>

        </>

    );
};

export default CombineBox;