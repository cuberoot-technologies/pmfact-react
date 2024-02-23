import React from "react";
import Images from "../../../assets/Images.jpeg"
import BlogPageContent from "./blog-page-content";

const Title = () => {

    return (
        <>
            <div className="main-blog-page-image">
                <img src={Images} alt="" />
                <div className="blogheading-single-page">
                    <p className="excerpt img-desc">भारत जोड़ो पर राहुल</p>
                    <hr />
                </div>
            </div>
            <BlogPageContent />
        </>

    );
};

export default Title;