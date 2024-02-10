import React, { useState } from "react";
import profile from "../../assets/profile.jpg";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import Slider from "react-slick";

const NewsAndVideosSingle = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    return (
        <>
            <div>
                <HomeFirstAdd />
            </div>
            <div className="wmps" id="blogs">
                <div className="blogsection">
                    <div className="categorytype">Politics</div>
                    <div className="catergoryheading">
                        <h2>Italy Lombardia reports first
                            2 coronavirus deaths amid
                            jump in cases</h2>
                    </div>
                    <div className="categorymetaheading">
                        <p>By <b>Neeraj Gupta</b></p>
                        <p>January 10, 2023</p>
                        <p><i className="bi bi-eye-fill"></i> <span className="icon-text">2023</span></p>
                        <p> <i className="bi bi-chat-fill"></i><span className="icon-text">2023</span></p>
                    </div>
                    <div className="categorytopimage">
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            width="100%"
                            alt=""
                        />
                    </div>
                    <div className="blogheading">
                        <h6>Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.
                        </h6>
                        <hr className="thick-hr" />
                    </div>
                    <div className="blogbody">
                        <p>
                            Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.
                        </p>
                        <div className="adspace">
                            <img src="https://placehold.co/300x250" alt="" />
                        </div>
                        <div className="adspace2">
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>
                        <p>
                            Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy. Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy. Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy. Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy. Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.
                        </p>
                    </div>
                    <div className="readalso">
                        <h3 className="mainheading">Read Also</h3>
                        <div className="readalsobox">
                        <div className="parliament-news-video-mp-news-list" id="readalso-img">
                            <img src={profile} alt="" />
                            <div className="parliament-news-video-mp-news-list-content" id="readalso-content">
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                {/* <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases.  Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases</p> */}
                                <span style={{textDecoration:'underline'}}>Read More</span>
                            </div>
                        </div>
                        <div className="parliament-news-video-mp-news-list" id="readalso-img2">
                            <img src={profile} alt="" />
                            <div className="parliament-news-video-mp-news-list-content" id="readalso-content">
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                {/* <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases.  Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases</p> */}
                                <span style={{textDecoration:'underline'}}>Read More</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="categorytopimage">
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            width="100%"
                            height={400}
                            alt=""
                        />
                    </div>
                    <div className="blogheading">
                        <h6>Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.
                        </h6>
                        <hr className="thick-hr" />
                    </div>
                    <div className="blogbody">
                        <p>
                            Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.
                        </p>
                    </div>

                    <div className="readalso">
                        <h3 className="mainheading">Quotes</h3>
                        <div className="quotealsobox">
                        <div className="quotes">
                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">
                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span>January 10,2023</span>
                                </div>
                            </div>
                            <h2 className="quotes-h2">Italy Lombardia reports 2 first
                                coronavirus deaths amid jump in
                                cases.</h2>
                        </div>
                        <hr className="thin-hr" />
                        <div className="quotes">
                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">
                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span>January 10,2023</span>
                                </div>
                            </div>
                            <h2 className="quotes-h2">Italy Lombardia reports 2 first
                                coronavirus deaths amid jump in
                                cases.</h2>
                        </div>
                        </div>
                    </div>

                    <div className="blogbody">
                        <p>Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.
                        </p>
                    </div>

                    <div className="readalso">
                        <h3 className="mainheading">Related News</h3>
                        <Slider {...settings}>
                            <div className="relatednews">
                                <div className="parliament-news-video-mp-news-list">
                                    <img src={profile} alt="" />
                                    <div className="parliament-news-video-mp-news-list-content" id="relatednewsheading">
                                        <h2>
                                            Italy Lombardia reports first 2 coronavirus deaths amid jump
                                            in cases
                                        </h2>
                                        <span style={{ textDecoration: 'underline' }}> Read More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relatednews">
                                <div className="parliament-news-video-mp-news-list">
                                    <img src={profile} alt="" />
                                    <div className="parliament-news-video-mp-news-list-content" id="relatednewsheading">
                                        <h2>
                                            Italy Lombardia reports first 2 coronavirus deaths amid jump
                                            in cases
                                        </h2>
                                        <span style={{ textDecoration: 'underline' }}>Read More</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relatednews">
                                <div className="parliament-news-video-mp-news-list">
                                    <img src={profile} alt="" />
                                    <div className="parliament-news-video-mp-news-list-content" id="relatednewsheading">
                                        <h2>
                                            Italy Lombardia reports first 2 coronavirus deaths amid jump
                                            in cases
                                        </h2>
                                        <span style={{ textDecoration: 'underline' }}>Read More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relatednews">
                                <div className="parliament-news-video-mp-news-list">
                                    <img src={profile} alt="" />
                                    <div className="parliament-news-video-mp-news-list-content" id="relatednewsheading">
                                        <h2>
                                            Italy Lombardia reports first 2 coronavirus deaths amid jump
                                            in cases
                                        </h2>
                                        <span style={{ textDecoration: 'underline' }}>Read More</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>

                <div className="categorynewssection" id="category-section-news">
                    <div className="parliament-news-video-mp-news">
                        <div className="parlimentry-news">
                            <h1 className="mainheading" style={{ marginLeft: '1rem', textAlign: 'center' }}>More News</h1>
                            <button className="view-more-news">View More</button>
                        </div>
                        <div className="news-pu" id="morenewscategory">

                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span style={{ textDecoration: 'underline' }}> Read More</span>

                                </div>
                            </div>

                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span style={{ textDecoration: 'underline' }}> Read More</span>

                                </div>
                            </div>{" "}

                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span style={{ textDecoration: 'underline' }}> Read More</span>

                                </div>
                            </div>{" "}

                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span style={{ textDecoration: 'underline' }}> Read More</span>

                                </div>
                            </div>
                        </div>
                        <div className="view-more p-3">
                            <button className="view-more-btn">View More</button>
                        </div>
                    </div>
                    <div className="parliament-news-video-mp-news" id="related-news">
                        <div className="parlimentry-news">
                            <h1 className="mainheading" style={{ marginLeft: '1rem', textAlign: 'center' }}>Trending</h1>
                            <button className="view-more-news">View More</button>
                        </div>
                        <div className="news-pu" id="morenewscategory">

                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span style={{ textDecoration: 'underline' }}> Read More</span>

                                </div>
                            </div>

                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span style={{ textDecoration: 'underline' }}> Read More</span>

                                </div>
                            </div>{" "}

                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span style={{ textDecoration: 'underline' }}> Read More</span>

                                </div>
                            </div>{" "}

                            <div className="parliament-news-video-mp-news-list">
                                <img src={profile} alt="" />
                                <div className="parliament-news-video-mp-news-list-content">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    <span style={{ textDecoration: 'underline' }}> Read More</span>

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

export default NewsAndVideosSingle;