import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AsideBoxArticle = ({ categoryId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [categoryId]);

    const fetchPosts = () => {
        const url = `https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=${categoryId}&orderby=date&order=desc&per_page=4&_embed`;

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
        <div className="aside-box-article" style={{ marginBlockStart: '1.8rem' }}>
            {posts.map(post => (
                <Link key={post.id} to={`/news-and-videos-home-main-page/${post.id}`} style={{ textDecoration: 'none', color: '#212529' }}>
                    <div className="news-block view2" >
                        {post._embedded && post._embedded['wp:featuredmedia'] && (
                            <img
                                src={post._embedded['wp:featuredmedia'][0].source_url}
                                alt={post._embedded['wp:featuredmedia'][0].alt_text}
                            />
                        )}
                        <h3 className="aside-heading">{post.title.rendered}</h3>
                    </div>
                    <hr style={{ marginBlock: '1rem', width:'100%' }} />
                </Link>
            ))}
        </div>
    );
};

export default AsideBoxArticle;
