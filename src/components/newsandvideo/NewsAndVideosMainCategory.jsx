import React from "react";
import Images from "../../assets/Images.jpeg"
import AsideBoxArticle from "./newsandvideosmain/Aside-Box-Article";
import CategoryContent from "./newsandvideoscategorycomponents/category-content";

const NewsAndVideoCategories = () => {

    return (
        <>
            <div className="main-news-and-videos-coverage">
                <div className="pillarads">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

                <div className="content">

                    <div className="main-category-page-image">
                        <div className="category-labels">Politics</div>
                        <img src={Images} alt="" />
                    </div>
                    <div className="layout1-category-headings">
                        <h6>Category title here, hello how are you?</h6>
                        <h3 className="section-heading">Italy Lombardia Reports first 2 coronavirus deaths amid jump in cases</h3>
                        <div className="layout1-category-date"><span className="author category">Stephan Romero </span>
                            <span className="date" style={{color:'black'}}>|</span>
                            <span className="date"> 9/03/2020 - 10:48 Read More</span>
                            <span className="date" style={{color:'black'}}>|</span>
                            <span className="date" style={{color:'red'}}>Read More</span></div>

                    </div>

                    <div className="layout-category-wrap">

                        <div className="layout1-category">
                            <CategoryContent />
                        </div>

                        <div className="layout2-category">
                            <div className="aside-box-container" >
                                <h3 className="layout-heading">Trending News</h3>
                                <AsideBoxArticle />
                            </div>

                        </div>
                    </div>


                    <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                        <img src="https://placehold.co/700x80" alt="" />
                    </div>

                    <div className="layout-category-wrap">

                        <div className="layout1-category">
                            <CategoryContent />
                        </div>

                        <div className="layout2-category">
                            <div className="aside-box-container" >
                                <h3 className="layout-heading">MPs News</h3>
                                <AsideBoxArticle />
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

export default NewsAndVideoCategories;