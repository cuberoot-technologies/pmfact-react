import React from "react";
import AsideBoxArticle from "./newsandvideosmain/Aside-Box-Article";
import Readalso from "./newsandvideoscategorycomponents/readalso";
import Quotes from "./newsandvideoscategorycomponents/quote";
import Keywords from "./newsandvideoscategorycomponents/keywords";
import CategoryContent from "./newsandvideoscategorycomponents/category-content";
import Subblock from "./newsandvideoscategorycomponents/subblock";
import Title from "./newsandvideoscategorycomponents/singlepagetitle";
import Headingblock from "./newsandvideoscategorycomponents/headingbox";

const NewsAndVideoSinglePageBlog = () => {

    return (
        <>
            <div className="main-news-and-videos-coverage">
                <div className="pillarads">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

                <div className="content">
                    <Headingblock />
                    <hr />

                    <div className="layout-singlepage-wrap">

                        <div className="layout1-category">
                            <Title />
                            <Subblock />
                            <hr />
                            <Readalso />
                            <hr />
                            <Subblock />
                            <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                                <img src="https://placehold.co/700x80" alt="" />
                            </div>
                            <Subblock />
                            <hr />
                            <Quotes />
                            <hr />
                            <Subblock />
                            <hr />
                            <Keywords />
                            <hr className="thick-hr" />
                            <h3 className="layout-heading" style={{marginBlock:'20px', paddingTop:'0'}}>More News</h3>
                            <CategoryContent />
                        </div>

                        <div className="layout2-category">

                           

                            <div className="aside-box-container" >
                                <h3 className="layout-heading" style={{ marginBlockStart: '0', paddingTop: '0' }}>Trending News</h3>
                                <AsideBoxArticle />
                            </div>

                            <div className="aside-ad-contentbox">
                                <div className="aside-content" style={{ paddingBlockStart: '0' }}>
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle />
                            </div>

                            <div className="aside-ad-contentbox">
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

                <div className="pillarads">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

            </div>

        </>

    );
};

export default NewsAndVideoSinglePageBlog;