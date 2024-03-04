import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sliderslides from "./slidercontentpost";

const Toplayout1 = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch('https://parliamentaryfact.com/wp-json/wp/v2/categories')
            .then(response => response.json())
            .then(response => {
                const categoriesData = response.map(category => ({
                    id: category.id,
                    name: category.name,
                    slug: category.slug
                }));
                setCategories(categoriesData);
            })
            .catch(error => console.error(error));
    };

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('https://parliamentaryfact.com/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=1&page=1&_embed')
                .then(response => response.json())
                .then(data => {
                    const post = data[0];
                    const title = post.title.rendered;
                    const featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
                    const authorName = post._embedded.author[0].name;
                    const date = new Date(post.date).toLocaleString();
                    let content = post.content.rendered;
                    const cleanContent = content.replace(/<[^>]*>?/gm, '');
                    content = cleanContent.split(' ').slice(0, 44).join(' ');

                    const postData = {
                        title: title,
                        featuredImage: featuredImage,
                        content: content,
                        author: authorName,
                        date: date,
                        id: post.id
                    };
                    setPostData(postData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };
        fetchData();
    }, []);

    return (
        <>
            {postData && (
                <Link to={`/news-and-videos-home-main-page/${postData.id}`} style={{ textDecoration: 'none', color: '#212529' }}>
                    <div className="layout1">
                        <div className="image-box-layout1">
                            <img src={postData.featuredImage} alt="" />
                            <div className="textonimage">
                                <h3 className="section-heading">{postData.title}</h3>
                            </div>
                        </div>
                        <div className="layout1-content">
                            <div className="article">
                                <h3 className="section-heading">{postData.title}</h3>
                                <div className="article-content">
                                    <span className="author" style={{ marginInlineEnd: '1rem' }}>{postData.author}</span>
                                    <span className="date">{postData.date}</span>
                                </div>
                                <p className="excerpt">{postData.content}...</p>
                            </div>
                        </div>
                        <div className="aside-content" >
                            <div className="toplayout square-ad ">
                                <img src="https://placehold.co/300x250" alt="" />
                            </div>
                        </div>
                    </div>
                </Link>
            )}

            <div className="slides">
                <Sliderslides categoryId={categories.length > 1 && categories[1].id} />
            </div>

        </>
    );
};

export default Toplayout1;
