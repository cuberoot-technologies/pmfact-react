import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewsBoxArticle = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        fetch('https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=7&per_page=3&_embed')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <div className="main-box-article newsbox">
                {posts.map(post => (
                    <Link to={`/news-and-videos-home-main-page/${post.id}`} style={{ textDecoration: 'none', color: '#212529' }} key={post.id}>
                        <div className="extranews-block">
                            <img src={post._embedded['wp:featuredmedia'][0].source_url || Images} alt="" />
                            <div className="extranews-content">
                                <h6 className="redheading">{post.title.rendered}</h6>
                                <h3 className="extranews-heading">{post.title.rendered}</h3>
                                <span className="date" style={{marginBottom:'0'}}>
                                    Read More
                                </span>
                            </div>
                        </div>
                        <hr style={{ margin: '0' }} />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default NewsBoxArticle;
