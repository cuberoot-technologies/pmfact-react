import React from "react";
import Images from "../../../assets/Images.jpeg"

const MiddleBoxArticle = () => {

    return (
        <>
        <div className="aside-box-article">

            <div class="news-block">
                <img src={Images} alt="" />
                <span class="category-label">Video</span>
                <h3 class="aside-heading" style={{marginTop:'1rem'}}>कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली</h3>
                <span class="date">Read More</span>
            </div>
            <div class="news-block">
                <img src={Images} alt="" />
                <span class="category-label">Video</span>
                <h3 class="aside-heading" style={{marginTop:'1rem'}}>Watch: 10 Days Later: What Italians Wish They Had Known</h3>
                <span class="date">Read More</span>
            </div>

        </div>

        </>

    );
};

export default MiddleBoxArticle;