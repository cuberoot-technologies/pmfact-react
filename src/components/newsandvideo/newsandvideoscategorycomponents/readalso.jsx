import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Readalso = () => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('https://parliamentaryfact.com/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=1&page=1&_embed')
                .then(response => response.json())
                .then(data => {
                    const post = data[0];
                    const title = post.title.rendered;
                    const featuredImage = post._embedded['wp:featuredmedia'][0].source_url; 

                    const postData = {
                        title: title,
                        featuredImage: featuredImage,
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
                <Link to={`/news-and-videos-home-main-page/${postData.id}`} style={{textDecoration:'none', color:'#212529'}}>
                <div className="readalso">
                    <h5 className="layout-heading" style={{marginBlock:'0', paddingTop:'0'}}>Read Also</h5>
                    <div className="readalsobox">
                        <div className="single-page-read-also-image-box">
                            <img src={postData.featuredImage} alt="" />
                        </div>
                        <div className="read-also-text-box">
                            <p className="redheading " style={{marginBottom:"1rem"}}>{postData.title}</p>
                            <h3 className="readalso-heading" style={{ paddingTop: '0', marginBottom: '0' }}>
                            {postData.title}
                            </h3>
                            <span className="date">Read More</span>
                        </div>
                    </div>
                </div>
                </Link>
            )}
        </>
    );
};

export default Readalso;
