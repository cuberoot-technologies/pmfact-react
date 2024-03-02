import React, { useState, useEffect } from "react";
import AsideBoxArticle from "./newsandvideosmain/Aside-Box-Article";
import Readalso from "./newsandvideoscategorycomponents/readalso";
import Quotes from "./newsandvideoscategorycomponents/quote";
import Keywords from "./newsandvideoscategorycomponents/keywords";
import CategoryContent from "./newsandvideoscategorycomponents/category-content";
import { useParams } from "react-router-dom";

const api_url = "https://parliamentaryfact.com/wp-json/wp/v2";

function cleanHtmlJson(htmlJson) {
    htmlJson = htmlJson.replace(/\\\//g, '/');
    htmlJson = htmlJson.replace(/\\"/g, '"');
    htmlJson = htmlJson.replace(/\\n/g, '');
    htmlJson = htmlJson.replace(/\\r/g, '');

    return htmlJson;
}

const NewsAndVideoSinglePageBlog = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const getSinglePost = (postId) => {
            fetch(`${api_url}/posts/${postId}?_embed`)
                .then((response) => response.json())
                .then((response) => {
                    const post_featured_img = `${response._embedded['wp:featuredmedia'][0].source_url}`;
                    const post_content = cleanHtmlJson(response.content.rendered);
                    const postData = {
                        title: response.title.rendered,
                        featuredImg: post_featured_img,
                        content: post_content
                    };
                    setPost(postData);
                })
                .catch((err) => console.error(err));
        };
    
        getSinglePost(id); 
    }, [id]);
    
    const createMarkup = (html) => {
        return { __html: html };
    };

    const renderAdditionalContent = () => {
        if (!post) return null;

        const images = (post.content.match(/<img[^>]+>/g) || []).length;
        const paragraphs = post.content.split('<p>').filter(Boolean);
        const paragraphCount = paragraphs.length;

        if (images === 1) {
            if (paragraphCount > 1) {
                return (
                    <>
                        <hr />
                        <Readalso />
                        <hr />
                        <Keywords />
                        <hr className="thick-hr" />
                        
                    </>
                );
            } else {
                return (
                    <>
                        <hr />
                        <Readalso />
                        <hr />
                        <Keywords />
                        <hr className="thick-hr" />
                       
                    </>
                );
            }
        } else if (images === 2) {
            if (paragraphCount > 1) {
                return (
                    <>
                        <hr />
                        <Readalso />
                        <hr />
                        <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>
                        <Keywords />
                        <hr className="thick-hr" />
                        
                    </>
                );
            } else {
                return (
                    <>
                        <hr />
                        <Readalso />
                        <hr />
                        <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>
                        <Keywords />
                        <hr className="thick-hr" />
                       
                    </>
                );
            }
        } else if (images === 3) {
            if (paragraphCount > 1) {
                return (
                    <>
                        <hr />
                        <Readalso />
                        <hr />
                        <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>
                        <hr />
                        <Quotes />
                        <hr />
                        <Keywords />
                        <hr className="thick-hr" />
                        
                    </>
                );
            } else {
                return (
                    <>
                        <hr />
                        <Readalso />
                        <hr />
                        <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>
                        <hr />
                        <Quotes />
                        <hr />
                        <Keywords />
                        <hr className="thick-hr" />
                     
                    </>
                );
            }
        } else if (images === 4) {
            if (paragraphCount > 1) {
                return (
                    <>
                        <hr />
                        <Readalso />
                        <hr />
                        <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>
                        <hr />
                        <Quotes />
                        <hr />
                        <Keywords />
                        <hr className="thick-hr" />
                        
                    </>
                );
            } else {
                return (
                    <>
                        <hr />
                        <Readalso />
                        <hr />
                        <div className="adbox" style={{ marginBlock: 'var(--gutter-size)' }}>
                            <img src="https://placehold.co/700x80" alt="" />
                        </div>
                        <hr />
                        <Quotes />
                        <hr />
                        <Keywords />
                        <hr className="thick-hr" />
                       
                    </>
                );
            }
        }

        return null;
    };

    return (
        <>
            <div className="main-news-and-videos-coverage">
                <div className="pillarads left">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>
                <div className="content singlepage">
                    <div className="layout1-category-headings" style={{ marginBlockEnd: '0' }}>
                        <h3 className="section-heading">{post && post.title}</h3>
                        <div className="layout5-category-date">
                            <span className="date">भार्गवी शर्मा</span>
                            <span className="date" style={{ fontWeight: '700' }}>|</span>
                            <span className="date">19/03/2020 - 10:48</span>
                            <span className="date" style={{ fontWeight: '700' }}>|</span>
                                <i className="bi bi-share-fill" style={{ color: 'rgb(27 49 106)' }}></i>
                                <i className="bi bi-facebook" style={{ color: 'rgb(27 49 106)' }} ></i>
                                <i className="bi bi-whatsapp" style={{ color: 'rgb(27 49 106)' }} ></i>
                                <i className="bi bi-linkedin" style={{ color: 'rgb(27 49 106)' }}></i>
                                <i className="bi bi-twitter-x" style={{ color: 'rgb(27 49 106)' }} ></i>          
                        </div>
                        <p className="subheading-single-blog-page" style={{ marginBlockStart: 'var(--gutter-size)' }}>एमएसपी की गारंटी की मांग को लेकर किसान आंदोलन दिल्ली कूच के लिए हरियाणा -पंजाब बॉर्डर पर डटे हुए हैं. उधर प्रधानमंत्री नरेंद्र मोदी गुजरात में किसानों को लेकर किसान आंदोलन दिल्ली कूच के लिए हरियाणा -पंजाब बॉर्डर पर डटे हुए हैं. </p>
                    </div>
                    <hr />
                    <div className="layout-singlepage-wrap">
                        <div className="layout1-category">
                            <div className="main-blog-page-image">
                                {post && <img src={post.featuredImg} alt={post.title} />}
                                <div className="blogheading-single-page">
                                    <p className="excerpt img-desc">भारत जोड़ो पर राहुल</p>
                                    <hr />
                                </div>
                            </div>
                            <div className="blog-page-main-content" dangerouslySetInnerHTML={createMarkup(post && post.content)}></div>
                            {renderAdditionalContent()}

                            <h3 className="layout-heading" style={{ marginBlock: '20px', paddingTop: '0' }}>More News</h3>
                        <CategoryContent categoryId={5} />
                        </div>
                        <div className="layout2-category">
                            <div className="aside-box-container" >
                                <h3 className="layout-heading" style={{ marginBlockStart: '0', paddingTop: '0' }}>Trending News</h3>
                                <AsideBoxArticle categoryId={6} />
                            </div>
                            <div className="aside-ad-contentbox">
                                <div className="aside-content" style={{ paddingBlockStart: '0' }}>
                                    <div className="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle categoryId={8} />
                            </div>
                            <div className="aside-ad-contentbox">
                                <div className="aside-content" style={{ paddingBlockStart: '0' }}>
                                    <div className="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle categoryId={9} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pillarads right">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>
            </div>
        </>
    );
};

export default NewsAndVideoSinglePageBlog;
