import React from "react";
import profile from "../../../assets/profile.jpg";

const MpNewsPage = () => {

    return (
        <>

            <div className="parliament-news-video-mp-news">
                <div className="parlimentry-news">
                    <h3 className="mainheading" style={{ textAlign: 'center' }}>More News</h3>
                    <button className="view-more-news">View More</button>
                </div>
                <div className="news-pu" id="morenewscategory">

                    <div className="trending-news">
                        <div className="morenews-trending-image">
                            <img src={profile} alt="" />
                        </div>
                        <div className="morenews-trending-text">

                            <h2>
                                Italy Lombardia reports first 2 coronavirus deaths amid jump
                                in cases
                            </h2>
                            {/* <span>January 10,2023</span> */}
                        </div>
                    </div>

                    <div className="trending-news">
                        <div className="morenews-trending-image">
                            <img src={profile} alt="" />
                        </div>
                        <div className="morenews-trending-text">

                            <h2>
                                Italy Lombardia reports first 2 coronavirus deaths amid jump
                                in cases
                            </h2>
                            {/* <span>January 10,2023</span> */}
                        </div>
                    </div>

                    <div className="trending-news">
                        <div className="morenews-trending-image">
                            <img src={profile} alt="" />
                        </div>
                        <div className="morenews-trending-text">

                            <h2>
                                Italy Lombardia reports first 2 coronavirus deaths amid jump
                                in cases
                            </h2>
                            {/* <span>January 10,2023</span> */}
                        </div>
                    </div>

                    <div className="trending-news">
                        <div className="morenews-trending-image">
                            <img src={profile} alt="" />
                        </div>
                        <div className="morenews-trending-text">

                            <h2>
                                Italy Lombardia reports first 2 coronavirus deaths amid jump
                                in cases
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="view-more p-3">
                    <button className="view-more-btn">View More</button>
                </div>
            </div>

        </>

    );
};

export default MpNewsPage;