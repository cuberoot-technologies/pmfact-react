import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AsideBoxArticle from "./newsandvideosmain/Aside-Box-Article";
import CategoryContent from "./newsandvideoscategorycomponents/category-content";
import { useParams } from "react-router-dom";

const NewsAndVideoCategories = () => {
    const { categoryId } = useParams();
    const [categoryData, setCategoryData] = useState(null);
    const [categoryName, setCategoryName] = useState("");
    const [categoryDate, setCategoryDate] = useState("");

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await fetch(`https://parliamentaryfact.com/wp-json/wp/v2/categories/${categoryId}`);
                const data = await response.json();
                setCategoryName(data.name);
            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        };

        fetchCategoryData();
    }, [categoryId]);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await fetch(`https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=${categoryId}&orderby=date&order=desc&_embed&per_page=1`);
                const data = await response.json();
                if (data.length > 0) {
                    const post = data[0];
                    const title = post.title.rendered;
                    const authorName = post._embedded.author[0].name;
                    const dateOptions = {
                        hour12: true
                    };
                    const date = new Date(post.date).toLocaleString('en-US', dateOptions);
                    const featuredImage = post._embedded['wp:featuredmedia'][0].source_url;

                    setCategoryData({
                        title: title,
                        authorName: authorName,
                        date: date,
                        featuredImage: featuredImage,
                        postId: post.id
                    });
                }
            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        };

        fetchPostData();
    }, [categoryId]);

    return (
        <>
            <div className="main-news-and-videos-coverage">
                <div className="pillarads right">
                    <img src="https://placehold.co/160x600" alt="" />
                </div>

                <div className="content">

                    <div className="main-category-page-image">
                        <div className="category-labels">{categoryName}</div>
                        {categoryData && <img src={categoryData.featuredImage} alt="" />}

                    </div>
                    <div className="layout1-category-headings">
                        {categoryData && <h6>{categoryData.title}</h6>}
                        <h3 className="section-heading"> {categoryData && `Top News: ${categoryData.title}`} </h3>
                        <div className="layout1-category-date">
                            <span className="date category" style={{ marginInlineEnd: '1rem' }}>{categoryData && categoryData.authorName}</span>
                            <span className="date" style={{ fontWeight: '700' }}>|</span>
                            <span className="date" style={{ marginInlineEnd: '1rem' }} > {categoryData && categoryData.date}</span>
                            <span className="date" style={{ fontWeight: '700' }}>|</span>
                            <span className="date" style={{ color: 'red' }}><Link to={`/news-and-videos-home-main-page/${categoryData?.postId}`} style={{ textDecoration: 'none', color: 'red' }}>
                                Read More
                            </Link></span>
                        </div>
                    </div>


                    <div className="layout-category-wrap">

                        <div className="layout1-category">
                            <CategoryContent categoryId={categoryId} />
                        </div>

                        <div className="layout2-category">
                            <div className="aside-ad-contentbox category">
                                <div className="aside-content" style={{ paddingBlockStart: '0' }}>
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle categoryId={8} />
                            </div>

                            <div className="aside-ad-contentbox category">
                                <div className="aside-content" style={{ paddingBlock: '0' }}>
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle categoryId={6} />
                            </div>

                            <div className="aside-ad-contentbox category">
                                <div className="aside-content" style={{ paddingBlockStart: '0' }}>
                                    <div class="advertisement square-ad">
                                        <img src="https://placehold.co/300x250" alt="" />
                                    </div>
                                </div>
                                <h3 className="layout-heading" style={{ marginBlockStart: '0' }}>MPs News</h3>
                                <AsideBoxArticle categoryId={9} />
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
