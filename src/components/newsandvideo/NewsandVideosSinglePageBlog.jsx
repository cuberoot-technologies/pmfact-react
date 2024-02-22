import React from "react";
import Images from "../../assets/Images.jpeg"
import AsideBoxArticle from "./newsandvideosmain/Aside-Box-Article";
import BlogPageContent from "./newsandvideoscategorycomponents/blog-page-content";
import Readalso from "./newsandvideoscategorycomponents/readalso";
import Quotes from "./newsandvideoscategorycomponents/quote";
import Keywords from "./newsandvideoscategorycomponents/keywords";

const NewsAndVideoSinglePageBlog = () => {

    return (
        <>
            <div className="main-news-and-videos-coverage">
                <div className="pillarads">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

                <div className="content">
                    <div className="layout1-category-headings">
                        <h3 className="section-heading">Italy Lombardia Reports first 2 coronavirus deaths amid jump in cases</h3>
                        <div className="layout1-category-date"><span className="author">Stephan Romero</span>
                            <span className="date">19/03/2020 - 10:48</span>
                            <p><i className="bi bi-share-fill" style={{ color: '#e3a900' }}></i></p>
                        </div>
                        <p className="extranews-heading">Italy Lombardia Reports first 2 coronavirus deaths amid jump in cases. Italy Lombardia Reports first 2 coronavirus deaths amid jump in cases. Italy Lombardia Reports first 2 coronavirus deaths amid jump in cases. Italy Lombardia Reports first 2 coronavirus.</p>
                    </div>

                    {/* <div className="main-category-page-image">
                        <img src={Images} alt="" />
                        <div className="blogheading-single-page">
                            <p className="excerpt" style={{ color: '#444' }}>Italy Lombardia reports 2 first</p>
                            <hr className="thick-hr" />
                        </div>
                    </div> */}


                    <div className="layout-singlepage-wrap">

                        <div className="layout1-category">
                        <div className="main-category-page-image">
                        <img src={Images} alt="" />
                        <div className="blogheading-single-page">
                            <p className="excerpt" style={{ color: '#444' }}>Italy Lombardia reports 2 first</p>
                            <hr className="thick-hr" />
                        </div>
                    </div>
                            <BlogPageContent />
                            <div className="subheadingimageblock">
                                <h3 className="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली</h3>
                                <img src={Images} alt="" />
                                <div className="blogheading">
                                    <p className="excerpt" style={{ color: '#444' }}>Italy Lombardia reports 2 first</p>
                                    <hr className="thick-hr" />
                                </div>
                            </div>
                            <BlogPageContent />

                        </div>

                        <div className="layout2-category">
                            <div className="aside-box-container" >
                                <h3 className="layout-heading" style={{marginBlockStart:'0'}}>Trending News</h3>
                                <AsideBoxArticle />
                            </div>

                        </div>
                    </div>


                    <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                        <img src="https://placehold.co/700x80" alt="" />
                    </div>

                    <div className="layout-singlepage-wrap">

                        <div className="layout1-category">
                            <div className="subheadingimageblock">
                                <h3 className="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली</h3>
                                <img src={Images} alt="" />
                                <div className="blogheading">
                                    <p className="excerpt" style={{ color: '#444' }}>Italy Lombardia reports 2 first</p>
                                    <hr className="thick-hr" />
                                </div>
                            </div>
                            <BlogPageContent />

                            <hr />
                            <Readalso />
                            <hr />

                            <div className="subheadingimageblock">
                                <h3 className="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली</h3>
                                <img src={Images} alt="" />
                                <div className="blogheading">
                                    <p className="excerpt" style={{ color: '#444' }}>Italy Lombardia reports 2 first</p>
                                    <hr className="thick-hr" />
                                </div>
                            </div>
                            <BlogPageContent />

                            <hr />
                            <Quotes />
                            <hr />
                            <div className="subheadingimageblock">
                                <h3 className="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली</h3>
                                <img src={Images} alt="" />
                                <div className="blogheading">
                                    <p className="excerpt" style={{ color: '#444' }}>Italy Lombardia reports 2 first</p>
                                    <hr className="thick-hr" />
                                </div>
                            </div>
                            <BlogPageContent />

                           <Keywords />
                    <hr className="thick-hr" />

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

export default NewsAndVideoSinglePageBlog;