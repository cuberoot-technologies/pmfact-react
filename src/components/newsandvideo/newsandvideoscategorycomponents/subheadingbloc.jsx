import React from "react";
import Images from "../../../assets/Images.jpeg"

const Subheadingblock = () => {

    return (
        <>
            <div className="subheadingimageblock">
                <h3 className="subheading-single-blog-page">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली</h3>
                <img src={Images} alt="" />
                <div className="blogheading">
                    <p className="excerpt img-desc">इसके साथ कांग्रेस के 6 और बीजेपी के 4 सांसद हो जायेंगे.</p>
                    <hr />
                </div>
            </div>
        </>

    );
};

export default Subheadingblock;