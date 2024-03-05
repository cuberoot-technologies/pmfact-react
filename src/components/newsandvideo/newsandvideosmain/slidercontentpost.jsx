import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sliderslides = ({ categoryId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [categoryId]);

    const fetchPosts = () => {
        const url = `https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=${categoryId}&orderby=date&order=desc&per_page=1&page=2&_embed`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Response data:", data);
                if (Array.isArray(data)) {
                    const postsToDisplay = data.slice(0, 2);
                    setPosts(postsToDisplay);
                } else {
                    console.error("Invalid response data:", data);
                }
            })
            .catch(error => console.error("Error fetching posts:", error));
    };

    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <Link to={`/news-and-videos-home-main-page/${post.id}`} style={{ textDecoration: 'none', color: '#212529' }}>
                        <div className="layout1">
                            <div className="image-box-layout1">
                                {post._embedded && post._embedded['wp:featuredmedia'] &&
                                    <img
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt={post._embedded['wp:featuredmedia'][0].alt_text}
                                    />
                                }
                                <div className="textonimage">
                                    <h3 className="section-heading">{post.title.rendered}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default Sliderslides;
