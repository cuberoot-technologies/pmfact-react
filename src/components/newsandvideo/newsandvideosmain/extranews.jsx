import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExtraNews = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = () => {
        fetch('https://parliamentaryfact.com/wp-json/wp/v2/posts?categories=3&per_page=5&_embed')
            .then(response => response.json())
            .then(data => {
                setNewsData(data);
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <div className="middle-new-box">
                <div className="middleboxes">
                    {newsData.map(news => (
                        <Link to={`/news-and-videos-home-main-page/${news.id}`} style={{ textDecoration: 'none', color: '#212529' }} key={news.id}>
                            <div className="middlebox">
                                <div className="middleboximage">
                                    <img src={news._embedded['wp:featuredmedia'][0].source_url} alt="" />
                                </div>
                                <div className="category-label">Video</div>
                                <div className="middleboxtext">
                                    <h3 className="extranews-heading">{news.title.rendered}</h3>
                                    <p className="date-extranews">Read More</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ExtraNews;
