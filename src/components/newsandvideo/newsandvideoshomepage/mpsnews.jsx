import React, { useState } from "react";
import profile from "../../../assets/profile.jpg";

const MpsNews = () => {

    return (
        <>
            <div className="parliabox">
                <div className="parliament-news-video-mp-news">
                    <div className="parlimentry-news">
                        <h4 className="mainheading" style={{ textAlign: 'center' }}>MPs News</h4>
                        <button className="view-more-news">View More</button>
                    </div>
                    <div className="news-pu">

                        <div className="parliament-news-video-mp-news-list">
                            <div className="fortyimage">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                {/* <span>January 10,2023</span> */}
                            </div>
                        </div>

                        <div className="mplinecontainer">
                            <hr className="mpline" />
                        </div>

                        <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                {/* <span>January 10,2023</span> */}
                            </div>
                        </div>{" "}
                        <div className="mplinecontainer">
                            <hr className="mpline" />
                        </div>
                        <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                {/* <span>January 10,2023</span> */}
                            </div>
                        </div>{" "}

                        <div className="mplinecontainer">
                            <hr className="mpline" />
                        </div>

                        <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                {/* <span>January 10,2023</span> */}
                            </div>
                        </div>
                    </div>

                    <div className="view-more p-3">
                        <button className="view-more-btn">View More</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MpsNews;