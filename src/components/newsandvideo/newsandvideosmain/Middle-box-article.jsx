import React from "react";
import Images from "../../../assets/Images.jpeg"

const MiddleBoxArticle = () => {

    return (
        <>
        <div className="aside-box-article">

            <div class="news-block">
                <img src={Images} alt="" />
                <h6 className="redheading" style={{ marginBlockStart: 'var(--gutter-size)' }}>भारत जोड़ो पर राहुल</h6>
                <h3 class="aside-heading middle">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली जाती है रायबरेली जाती है रायबरेली</h3>
                <span class="date">Read More</span>
            </div>
            <hr/>
            <div class="news-block">
                <img src={Images} alt="" />
                <h6 className="redheading" style={{ marginBlockStart: 'var(--gutter-size)' }}>भारत जोड़ो पर राहुल</h6>
                <h3 class="aside-heading middle">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली जाती है रायबरेली जाती है रायबरेली</h3>
                <span class="date">Read More</span>
            </div>

        </div>

        </>

    );
};

export default MiddleBoxArticle;