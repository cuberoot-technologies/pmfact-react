import React from "react";
import Toplayout1 from "./newsandvideosmain/Topsliderlayout";
import MainBoxArticle from "./newsandvideosmain/Main-big-news";
import MiddleBoxArticle from "./newsandvideosmain/Middle-box-article";
import AsideBoxArticle from "./newsandvideosmain/Aside-Box-Article";
import ExtraNews from "./newsandvideosmain/extranews";
import NewsBoxArticle from "./newsandvideosmain/NewsBoxArticle";

const NewsAndVideosMain = () => {
    return (
        <>
            <div className="main-news-and-videos-coverage">
                <div className="pillarads">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

                <div className="content">
                    <Toplayout1 />
                    
                        
                        <div className="layout2">
                            
                        <div className="aside-box-container mobile">
                        <h3 className="layout-heading" style={{marginInline:'10px'}}>Parliamentary News</h3>
                            <MainBoxArticle />
                            </div>
                            <div className="aside-box-container mobile" style={{marginTop:'4.7rem'}}>
                            {/* <h3 className="layout-heading">News</h3> */}
                            <MiddleBoxArticle />
                            </div>
                            <div className="aside-box-container" style={{paddingInlineEnd:'10px'}}>
                            <h3 className="layout-heading">Virus Confronts</h3>
                            <AsideBoxArticle />
                            </div>
                        
                    </div>

                    <div className="adbox" >
                        <img src="https://placehold.co/700x80" alt="" />
                    </div>

                    <div className="layout3" style={{marginTop:'2rem'}}>
                        <ExtraNews />
                    </div>

                    <div className="layout2-pre shorts">
                    <h3 className="layout-heading" style={{marginInline:'10px'}}>Parliamentary News</h3>
                        <div className="layout2 shorts">
                        <div className="aside-box-container mobile">
                            <MainBoxArticle />
                            </div>
                            <div className="aside-box-container mobile">
                            <MiddleBoxArticle />
                            </div>
                            <div className="aside-ad-contentbox">
                                <div className="aside-content">
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <AsideBoxArticle />
                            </div>
                        </div>
                    </div>
                    <div className="adbox" >
                        <img src="https://placehold.co/700x80" alt="" />
                    </div>

                    <div className="layout2-pre">
                        <h3 className="layout-heading" style={{marginInline:'10px'}}>MPs News</h3>
                        <div className="layout2">
                        
                        <div className="aside-box-container mobile">
                            <NewsBoxArticle />
                            </div>
                         
                            <div className="aside-ad-contentbox">
                                <div className="aside-content">
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
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

export default NewsAndVideosMain;