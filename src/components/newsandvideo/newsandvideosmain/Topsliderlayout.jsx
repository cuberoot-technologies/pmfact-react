import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sliderslides from "./slidercontentpost";

const Toplayout1 = () => {
    const [categories, setCategories] = useState([]);
    const [postData, setPostData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchCategories();
        fetchData();
    }, []);

    const fetchCategories = () => {
        fetch('https://parliamentaryfact.com/wp-json/wp/v2/categories')
            .then(response => response.json())
            .then(response => {
                setCategories(response);
            })
            .catch(error => console.error(error));
    };

    const fetchData = () => {
        fetch('https://parliamentaryfact.com/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=3&_embed')
            .then(response => response.json())
            .then(data => {
                setPostData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % postData.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [postData.length]);

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {postData.map((post, index) => (
                    <div key={post.id} className={`carousel-item ${currentIndex === index ? 'active' : ''}`}>
                        {post && (
                            <Link to={`/news-and-videos-home-main-page/${post.id}`} style={{ textDecoration: 'none', color: '#212529' }}>
                                <div className="layout1">
                                    <div className="image-box-layout1">
                                        <img src={post._embedded['wp:featuredmedia'][0].source_url} className="d-block w-100" alt="" />
                                        <div className="textonimage">
                                            <h3 className="section-heading">{post.title.rendered}</h3>
                                        </div>
                                    </div>
                                    <div className="layout1-content">
                                        <div className="article">
                                            <h3 className="section-heading">{post.title.rendered}</h3>
                                            <div className="article-content">
                                                <span className="author" style={{ marginInlineEnd: '1rem' }}>{post._embedded.author[0].name}</span>
                                                <span className="date">{new Date(post.date).toLocaleString()}</span>
                                            </div>
                                            <p className="excerpt">{post.content.rendered.replace(/<[^>]*>?/gm, '').split(' ').slice(0, 44).join(' ')}...</p>
                                        </div>
                                    </div>
                                    <div className="aside-content">
                                        <div className="toplayout square-ad">
                                            <img src="https://placehold.co/300x250" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
                {/* Next Slide - 20% visibility */}
                {postData.length > 1 && (
                    <div className="carousel-item-next">
                        {postData[(currentIndex + 1) % postData.length] && (
                            <img src={postData[(currentIndex + 1) % postData.length]._embedded['wp:featuredmedia'][0].source_url} className="d-block w-100" alt="" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Toplayout1;
