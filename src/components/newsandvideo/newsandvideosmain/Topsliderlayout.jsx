import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Toplayout1 = () => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('https://parliamentaryfact.com/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=1&page=1&_embed')
                .then(response => response.json())
                .then(data => {
                    const post = data[0];
                    const title = post.title.rendered;
                    const featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
                    let content = post.content.rendered;
                    const cleanContent = content.replace(/<[^>]*>?/gm, '');
                    content = cleanContent.split(' ').slice(0, 44).join(' ');

                    const postData = {
                        title: title,
                        featuredImage: featuredImage,
                        content: content,
                        id: post.id // Add post ID
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
                <Link to={`/news-and-videos-home-main-page/${postData.id}`} style={{textDecoration:'none', color:'#212529'}}>
                    <div className="layout1">
                        <div className="image-box-layout1">
                            <img src={postData.featuredImage} alt="" />
                        </div>
                        <div className="layout1-content">
                            <div className="article">
                                <h3 className="section-heading">{postData.title}</h3>
                                <div className="article-content">
                                    <span className="author">Author Name</span>
                                    <span className="date">Date, Time</span>
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
        </>
    );
};

export default Toplayout1;
