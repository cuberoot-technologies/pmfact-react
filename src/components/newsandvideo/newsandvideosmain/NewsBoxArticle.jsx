import React from "react";
import Images from "../../../assets/Images.jpeg"


const NewsBoxArticle = () => {

    return (
        <>

<div className="main-box-article newsbox">
                <div class="extranews-block">
                    <img src={Images} alt="" />
                    <div className="extranews-content">
                    <h6 className="redheading" >भारत जोड़ो पर राहुल</h6>
                    <h3 class="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली मानी जाती है रायबरेली  रायबरेली मानी जाती है रायबरेली </h3>
                    <span class="date">Read More</span>
                    </div>
                </div>
                <hr style={{margin:'0'}} />
                <div class="extranews-block">
                    <img src={Images} alt="" />
                    <div className="extranews-content">
                    <h6 className="redheading" >भारत जोड़ो पर राहुल</h6>
                    <h3 class="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली मानी जाती है रायबरेली रायबरेली मानी जाती है रायबरेली </h3>
                    <span class="date">Read More</span>
                    </div>
                </div>
                <hr style={{margin:'0'}} />
                <div class="extranews-block">
                    <img src={Images}alt="" />
                    <div className="extranews-content">
                    <h6 className="redheading" >भारत जोड़ो पर राहुल</h6>
                    <h3 class="extranews-heading">कांग्रेस की सबसे सुरक्षित सीट मानी जाती है रायबरेली मानी जाती है रायबरेली रायबरेली मानी जाती है रायबरेली </h3>
                    <span class="date">Read More</span>
                    </div>
                </div>
                <hr style={{margin:'0'}} />
            </div>


        </>

    );
};

export default NewsBoxArticle;