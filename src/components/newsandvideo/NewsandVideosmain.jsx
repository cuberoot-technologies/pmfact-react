import React from "react";
import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
// import HomeFirstAdd from "../advertisement/HomeFirstAdd";
import { BsPlay } from "react-icons/bs";
import BelowSection from "./newsandvideoshomepage/belowsection";
import CombineBox from "./newsandvideoshomepage/combined";
import ExtraNews from "./newsandvideoshomepage/extranews";
import MpsNews from "./newsandvideoshomepage/mpsnews";
import NewsShorts from "./newsandvideoshomepage/parliamentryshorts";
import ParliamentaryNews from "./newsandvideoshomepage/parliamentrynews";
import Trending from "./newsandvideoshomepage/trending";
import CombineBox2 from "./newsandvideoshomepage/combinedBox";

const NewsAndVideosMain = () => {
    return (
        <>
            <div className="main-news-and-videos-coverage">
                <div className="pillarads">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

                <div className="content">

                    <div className="layout1">
                        <img src="https://placehold.co/350x250" alt="" />
                        <div className="layout1-content">
                            <div className="article">
                                <h3 class="section-heading">Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                                <div class="article-content">
                                    <span class="category-label">Video</span>
                                    <span class="author">Stephan Romero</span>
                                    <span class="date">19/03/2020 - 10:48</span>
                                </div>
                                <p class="excerpt">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, incidunt sequi repellat atque rerum
                                </p>
                            </div>
                        </div>
                        <div className="aside-content">
                            <div class="advertisement square-ad">
                                <img src="https://placehold.co/300x250" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="layout2">
                        <div className="main-box-article">
                            <div class="news-block">
                                <img src="https://placehold.co/500x357" alt="" />
                                <span class="category-label">Video</span>
                                <h3 class="section-heading">Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                                <p class="excerpt">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, incidunt sequi repellat atque rerum
                                </p>
                            </div>
                        </div>

                        <div className="aside-box-article" style={{marginLeft:'3rem'}}>

                            <div class="news-block">
                                <img src="https://placehold.co/300x250" alt="" />
                                <span class="category-label">Video</span>
                                <h3 class="aside-heading">Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                                <span class="date">19/03/2020 - 10:48</span>
                            </div>
                            <div class="news-block">
                                <img src="https://placehold.co/300x250" alt="" />
                                <span class="category-label">Video</span>
                                <h3 class="aside-heading">Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                                <span class="date">19/03/2020 - 10:48</span>
                            </div>

                        </div>

                        <div className="aside-box-article">
                            <div class="news-block view2">
                                <img src="https://placehold.co/100x75" alt="" />
                                <h3 class="aside-heading">Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                            </div>
                            <div class="news-block view2">
                                <img src="https://placehold.co/100x75" alt="" />
                                <h3 class="aside-heading">Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                            </div>
                            <div class="news-block view2">
                                <img src="https://placehold.co/100x75" alt="" />
                                <h3 class="aside-heading">Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                            </div>
                            <div class="news-block view2">
                                <img src="https://placehold.co/100x75" alt="" />
                                <h3 class="aside-heading">Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                            </div>
                        </div>


                    </div>

                </div>


                <div className="pillarads">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

            </div>
        </>
    );
};

export default NewsAndVideosMain;