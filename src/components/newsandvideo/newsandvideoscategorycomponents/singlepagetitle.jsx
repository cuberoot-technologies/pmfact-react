import React from "react";
import Images from "../../../assets/Images.jpeg"
import BlogPageContent from "./blog-page-content";

const Title = () => {

    return (
        <>
            <div className="main-category-page-image">
                <img src={Images} alt="" />
                <div className="blogheading-single-page">
                    <p className="excerpt" style={{ color: '#444' }}>Italy Lombardia reports 2 first</p>
                    <hr className="thick-hr" />
                </div>
            </div>
            <BlogPageContent />
        </>

    );
};

export default Title;