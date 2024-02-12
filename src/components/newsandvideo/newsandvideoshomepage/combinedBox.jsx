import React, { useState } from "react";
import profile from "../../../assets/profile.jpg";


const CombineBox2 = () => {

    return (
        <>
            <div className="combinedbox">

                <div className="left-news-container">
                <h3  >Parliamentary News</h3>
                    <div className="leftnewsimage">
                        <img src="https://placehold.co/500x300" />
                    </div>

                    <div className="catergory-box">Video</div>

                    <div className="leftnewstext">
                        <h2>Virus Confronts leaders with one of modern history gravest chanllenges</h2>
                        <div className="leftnewspara">
                            <p style={{ marginRight: '1rem' }}><b>Stepher Romero</b></p>
                            <p>19/03/2020 - 10:49</p>
                        </div>
                    </div>

                </div>

                <div className="middle-news-container">
                    <div className="news-and-videos-parlimentry-news">
                        <div className="parlimentry-news">
                            
                            {/* <button className="view-more-news">View More</button> */}
                        </div>
                        <div className="parlimentry-news-list">
                            <div className="parlimentry-news-list-left-side-left" id="categorysimages" >
                                <img src={profile} alt="" />
                                <div className="catergory-box">Video</div>
                                <h1>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h1>
                                <button className="read-more">Read More</button>
                            </div>
                            <div className="parlimentry-news-list-left-side-left" id="categorysimages">
                                <img src={profile} alt="" />
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

                <div className="right-news-container">
                    <div className="adsbox">
                        <img src="https://placehold.co/230x200" alt="" />
                    </div>
                    <h3>Virus Confronts</h3>
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
            </div>

        </>

    );
};

export default CombineBox2;