import React from "react";
import Images from "../../../assets/Images.jpeg"

const MiddleBoxArticle = () => {

    return (
        <>
        <div className="aside-box-article">

            <div class="news-block">
                <img src={Images} alt="" />
                <h6 className="redheading" style={{ marginBlockStart: 'var(--gutter-size)' }}>Rahul on Bharat Jodo</h6>
                <h3 class="aside-heading middle">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली जाती है रायबरेली जाती है रायबरेली</h3>
                <span class="date">Read More</span>
            </div>
            <hr/>
            <div class="news-block">
                <img src={Images} alt="" />
                <h6 className="redheading" style={{ marginBlockStart: 'var(--gutter-size)' }}>Rahul on Bharat Jodo</h6>
                <h3 class="aside-heading middle">Watch: 10 Days Later: What Italians Wish They Had Known Had Known</h3>
                <span class="date">Read More</span>
            </div>

        </div>

        </>

    );
};

export default MiddleBoxArticle;