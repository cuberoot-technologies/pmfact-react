import React from "react";
import Images from "../../../assets/Images.jpeg"

const Subheadingblock = () => {

    return (
        <>
            <div className="subheadingimageblock">
                <h3 className="subheading-single-blog-page">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली</h3>
                <img src={Images} alt="" />
                <div className="blogheading">
                    <p className="excerpt" style={{ color: '#444' }}>Italy Lombardia reports 2 first</p>
                    <hr className="thick-hr" />
                </div>
            </div>
        </>

    );
};

export default Subheadingblock;