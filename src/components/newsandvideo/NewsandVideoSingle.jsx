import React, { useState } from "react";
import profile from "../../assets/profile.jpg";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import Slider from "react-slick";
import TrendingNews from "./newsandvideosblog/trendingnews";
import MpNewsPage from "./newsandvideosblog/mpsnewspage";

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
            <div className="container" id="blog-page-container">
                <div className="blogsection">
                    <div className="catergoryheading">
                        <h2>Italy Lombardia reports first
                            2 coronavirus deaths amid
                            jump in cases</h2>
                    </div>
                    <div className="categorymetaheading">
                        <p>By <b>Neeraj Gupta</b></p>
                        <p>January 10, 2023</p>
                        <p><i className="bi bi-share-fill" style={{ color: '#e3a900' }}></i></p>
                    </div>
                    <div className="blogintro" style={{ marginTop: '1rem' }}>
                        <h6>
                            Italy Lombardia reports first
                            2 coronavirus deaths amid
                            jump in cases. Italy Lombardia reports first
                            2 coronavirus deaths amid
                            jump in cases. Italy Lombardia reports first
                            2 coronavirus deaths amid
                            jump in cases
                        </h6>
                    </div>
                    <div className="categorytopimage" id="categtopimage">
                        <img
                            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                            alt=""
                        />
                        <div className="blogheading">
                            <p style={{ fontSize: '12px', color: '#444' }}>Italy Lombardia reports 2 first</p>
                            <hr className="thick-hr" />
                        </div>
                    </div>

                    <div className="blogbody">
                        <div className="para">
                            <p style={{ fontSize: '17px' }}>
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
                                cases Italy.
                            </p>
                        </div>
                        <div className="subheading-blog">
                            <h4> Italy Lombardia reports 2 first</h4>
                            <div className="categorytopimage" id="categtopimage">
                                <img
                                    src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                                    width="100%"
                                    height={400}
                                    alt=""
                                />
                                <div className="blogheading">
                                    <p style={{ fontSize: '12px', color: '#444' }}>Italy Lombardia reports 2 first</p>
                                    <hr className="thick-hr" />
                                </div>
                            </div>
                        </div>
                        <div className="para">
                            <p style={{ fontSize: '17px' }}>
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
                                cases Italy.
                            </p>
                        </div>

                        <div className="adspace" style={{ margin: '1rem 0' }}>
                            <img src="https://placehold.co/300x250" alt="" />
                        </div>
                        <div className="adspace2" style={{ margin: '1rem 0' }}>
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>
                        <div className="subheading-blog">
                            <h4> Italy Lombardia reports 2 first</h4>
                            <div className="categorytopimage" id="categtopimage">
                                <img
                                    src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                                    width="100%"
                                    height={400}
                                    alt=""
                                />
                                <div className="blogheading">
                                    <p style={{ fontSize: '12px', color: '#444' }}>Italy Lombardia reports 2 first</p>
                                    <hr className="thick-hr" />
                                </div>
                            </div>
                        </div>
                        <div className="para">
                            <p style={{ fontSize: '17px' }}>
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
                                cases Italy.
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="readalso">
                        <h5 className="mainheading">Read Also</h5>

                        <div className="readalsobox">

                            <div className="read-also-image-box">
                                <img src={profile} alt="" />
                            </div>
                            <div className="read-also-text-box">
                                <p>Rahul on Bharat Jodo Yatra</p>
                                <h2>
                                    Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases
                                </h2>
                                <p> Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases. Italy Lombardia reports first 2 coronavirus deaths amid jump
                                    in cases...</p>
                                <span style={{ textDecoration: 'underline' }}>Read More</span>
                            </div>

                        </div>

                    </div>
                    <hr />
                    <div className="subheading-blog">
                        <h4> Italy Lombardia reports 2 first</h4>
                        <div className="categorytopimage" id="categtopimage">
                            <img
                                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                                width="100%"
                                height={400}
                                alt=""
                            />
                            <div className="blogheading">
                                <p style={{ fontSize: '12px', color: '#444' }}>Italy Lombardia reports 2 first</p>
                                <hr className="thick-hr" />
                            </div>
                        </div>
                    </div>
                    <div className="blogbody">
                        <div className="para">
                            <p style={{ fontSize: '17px' }}>
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
                                cases Italy.
                            </p>
                        </div>
                    </div>

                    <hr />
                    <div className="readalso">
                        <h5 className="mainheading">Quotes</h5>
                        <div className="quotealsobox">
                            <div className="quotes">
                                <div className="readalsobox">
                                    <div className="quote-image-box">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="quote-text-box">
                                        <h2>
                                            Neeraj Gupta
                                        </h2>
                                    </div>
                                </div>
                                <h6 className="quotes-h2"><i>"Italy Lombardia reports 2 first
                                    coronavirus deaths amid jump in
                                    cases."</i></h6>
                            </div>

                            <div className="mplinecontainer">
                                <hr className="mpline" />
                            </div>
                            <div className="quotes">
                                <div className="readalsobox">
                                    <div className="quote-image-box">
                                        <img src={profile} alt="" />
                                    </div>
                                    <div className="quote-text-box">
                                        <h2>
                                            Neeraj Gupta
                                        </h2>
                                    </div>
                                </div>

                                <h6 className="quotes-h2"><i>"Italy Lombardia reports 2 first
                                    coronavirus deaths amid jump in
                                    cases."</i></h6>
                            </div>
                        </div>

                    </div>
                    <hr />

                    <div className="subheading-blog">
                        <h4> Italy Lombardia reports 2 first</h4>
                        <div className="categorytopimage" id="categtopimage">
                            <img
                                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                                width="100%"
                                height={400}
                                alt=""
                            />
                            <div className="blogheading">
                                <p style={{ fontSize: '12px', color: '#444' }}>Italy Lombardia reports 2 first</p>
                                <hr className="thick-hr" />
                            </div>
                        </div>
                    </div>
                    <div className="para">
                        <p style={{ fontSize: '17px' }}>
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
                            cases Italy.
                            Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.
                            Italy Lombardia reports 2 first
                            coronavirus deaths amid jump in
                            cases Italy Lombardia reports first
                            2 coronavirus deaths amid jump in
                            cases Italy.
                        </p>
                    </div>
                    <div className="keywords">
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>
                        <button className="view-more-news" style={{ margin: '0.5rem' }}>#Keyword</button>

                    </div>
                    <hr className="thick-hr" />
                    <div className="readalso">
                        <h5 className="mainheading">Related News</h5>
                        <Slider {...settings}>
                            <div className="trending-news" id="related-news-box">
                                <div className="relatednews-image">
                                    <img src={profile} alt="" />
                                </div>
                                <div className="relatednews-text">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    {/* <span>January 10,2023</span> */}
                                </div>
                            </div>

                            <div className="trending-news" id="related-news-box">
                                <div className="relatednews-image">
                                    <img src={profile} alt="" />
                                </div>
                                <div className="relatednews-text">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    {/* <span>January 10,2023</span> */}
                                </div>
                            </div>

                            <div className="trending-news" id="related-news-box">
                                <div className="relatednews-image">
                                    <img src={profile} alt="" />
                                </div>
                                <div className="relatednews-text">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                    {/* <span>January 10,2023</span> */}
                                </div>
                            </div>

                            <div className="trending-news" id="related-news-box">
                                <div className="relatednews-image">
                                    <img src={profile} alt="" />
                                </div>
                                <div className="relatednews-text">

                                    <h2>
                                        Italy Lombardia reports first 2 coronavirus deaths amid jump
                                        in cases
                                    </h2>
                                </div>
                            </div>

                        </Slider>
                    </div>

                </div>

                <div className="categorynewssection" id="category-section-news">
                    <MpNewsPage />
                    <TrendingNews />

                </div>
            </div>
        </>
    );
};

export default NewsAndVideosSingle;