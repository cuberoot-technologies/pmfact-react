import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const MainBoxArticle = ({ categoryId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [categoryId]);

    const fetchPosts = () => {
        const url = `https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=${categoryId}&orderby=date&order=desc&per_page=2&_embed`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Response data:", data);
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    console.error("Invalid response data:", data);
                }
            })
            .catch(error => console.error("Error fetching posts:", error));
    };

    return (
        <div className="aside-box-article">
            <div className="news-block">
                {posts.map(post => (
                    <div key={post.id}>
                        <Link to={`/news-and-videos-home-main-page/${post.id}`} style={{ textDecoration: 'none', color: '#212529' }}> 
                            {post._embedded && post._embedded['wp:featuredmedia'] &&
                                <img
                                    src={post._embedded['wp:featuredmedia'][0].source_url}
                                    alt={post._embedded['wp:featuredmedia'][0].alt_text}
                                />
                            }
                            <h6 className="redheading" style={{ marginBlockStart: 'var(--gutter-size)' }}>{post.title.rendered}</h6>
                            <h3 className="aside-heading middle">{post.title.rendered}</h3>
                        </Link>
                        <hr /> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainBoxArticle;
