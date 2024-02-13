import React, { useState } from "react";
import profile from "../../assets/profile.jpg";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import { Link } from "react-router-dom";

const NewsAndVideosCategory = () => {

    return (
        <>
            <div>
                <HomeFirstAdd />
            </div>
            <div className="container" id="categorypage">
                
                <div className="category-wrapper">
                    <div id="categoryimg">
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt=""
                        />
                        <div className="center-container">
                            <div className="categorytype">Politics</div>
                        </div>
                    </div>
                </div>
                <div className="category-title" style={{fontSize:'17px', marginTop:'1rem', fontWeight:'600'}}>
                    <p>Category title here, hello how are you?</p>
                </div>
                <div className="catergoryheading">

                    <h2>Italy Lombardia reports first
                        2 coronavirus deaths amid
                        jump in cases</h2>
                </div>
                <div className="categorymetaheading">
                    <p>By <b>Neeraj Gupta</b></p>
                    <p>January 10, 2023</p>
                </div>

                <div className="categorynewssection">
                    <div className="parliament-news-video-mp-news">
                        {/* <div className="parlimentry-news">
                            <h1 className="mainheading" style={{ marginLeft: '1rem', textAlign: 'center' }}>MPs News</h1>
                            <button className="view-more-news">View More</button>
                        </div> */}
                        <div className="news-pu" id="category-page-news-pu">

                        <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>

                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>

                            <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>

                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>

                            <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>

                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>

                            <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>
                        </div>
                        <div className="adspace">
                            <img src="https://placehold.co/300x250" alt="" />
                        </div>
                        <div className="adspace2">
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>

                        <div className="news-pu" id="category-page-news-pu">
                        <div className="parliament-news-video-mp-news-list" id="category-boxes">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>

                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>
                            <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>

                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>
                            <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>
                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>

                            <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>

                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>

                            <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>

                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>

                            <div className="parliament-news-video-mp-news-list">
                        <div className="fortyimage" id="forty-image">
                            <img src={profile} alt="" />
                            </div>
                            <div className="parliament-news-video-mp-news-list-content">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in...</p>
                                <span>January 10,2023</span>
                            </div>
                        </div>
                        </div>
                        <div className="view-more p-3">
                            <button className="view-more-btn">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsAndVideosCategory;