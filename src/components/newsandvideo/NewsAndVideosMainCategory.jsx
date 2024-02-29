import React from "react";
import Images from "../../assets/Images.jpeg"
import AsideBoxArticle from "./newsandvideosmain/Aside-Box-Article";
import CategoryContent from "./newsandvideoscategorycomponents/category-content";

const NewsAndVideoCategories = () => {

    return (
        <>
            <div className="main-news-and-videos-coverage">
                <div className="pillarads right">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

                <div className="content">

                    <div className="main-category-page-image">
                        <div className="category-labels">Politics</div>
                        <img src={Images} alt="" />
                    </div>
                    <div className="layout1-category-headings">
                        <h6>सोनिया गांधी ने 2004 में पहली बार रायबरेली से लड़ा चुनाव</h6>
                        <h3 className="section-heading"> कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली </h3>
                        <div className="layout1-category-date"><span className="date category">Stephan Romero </span>
                            <span className="date" style={{ fontWeight: '700' }}>|</span>
                            <span className="date"> 9/03/2020 - 10:48</span>
                            <span className="date" style={{ fontWeight: '700' }}>|</span>
                            <span className="date" style={{ color: 'red' }}>Read More</span></div>

                    </div>

                    <div className="layout-category-wrap">

                        <div className="layout1-category">
                        <CategoryContent />
                        </div>

                        <div className="layout2-category">
                            <div className="aside-ad-contentbox category">
                                <div className="aside-content" style={{ paddingBlockStart: '0' }}>
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle />
                            </div>

                            <div className="aside-ad-contentbox category">
                                <div className="aside-content" style={{ paddingBlock: '0' }}>
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle />
                            </div>

                            <div className="aside-ad-contentbox category">
                                <div className="aside-content" style={{ paddingBlockStart: '0' }}>
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle />
                            </div>

                        </div>
                    </div>
                </div>


                <div className="pillarads left">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

            </div>

        </>

    );
};

export default NewsAndVideoCategories;